export interface VideoMetadata {
  duration: number;
  formattedDuration: string;
  width: number;
  height: number;
  aspectRatio: number;
  formatLabel: string;
  isLoaded: boolean;
  isLoading: boolean;
  error?: string;
}

const metadataCache = new Map<string, VideoMetadata>();
const pendingProbes = new Map<string, Promise<VideoMetadata>>();

export function formatVideoDuration(seconds: number): string {
  if (isNaN(seconds) || seconds <= 0) return '0:00';
  const totalSecs = Math.round(seconds);
  const minutes = Math.floor(totalSecs / 60);
  const remainingSeconds = totalSecs % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export function detectFormatLabel(width: number, height: number): string {
  if (!width || !height) return 'Detecting...';
  const ratio = width / height;

  // 9:16 is ~0.5625 (tolerance 0.50 - 0.65)
  if (ratio >= 0.50 && ratio <= 0.65) {
    return '9:16 Vertical';
  }
  // 16:9 is ~1.7778 (tolerance 1.60 - 1.95)
  if (ratio >= 1.60 && ratio <= 1.95) {
    return '16:9 Horizontal';
  }
  // 1:1 is ~1.00 (tolerance 0.95 - 1.05)
  if (ratio >= 0.95 && ratio <= 1.05) {
    return '1:1 Square';
  }
  // 4:5 is ~0.80 (tolerance 0.75 - 0.85)
  if (ratio >= 0.75 && ratio <= 0.85) {
    return '4:5 Vertical';
  }

  // Calculate simplified GCD fraction
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const roundedW = Math.round(width);
  const roundedH = Math.round(height);
  const divisor = gcd(roundedW, roundedH);
  const simpW = Math.round(roundedW / divisor);
  const simpH = Math.round(roundedH / divisor);

  if (simpW <= 30 && simpH <= 30) {
    return `${simpW}:${simpH} ${ratio < 1 ? 'Vertical' : 'Horizontal'}`;
  }

  return `${ratio.toFixed(2)}:1 ${ratio < 1 ? 'Vertical' : 'Horizontal'}`;
}

export function extractVideoMetadata(videoUrl: string): Promise<VideoMetadata> {
  if (!videoUrl) {
    return Promise.resolve({
      duration: 0,
      formattedDuration: '--:--',
      width: 0,
      height: 0,
      aspectRatio: 9 / 16,
      formatLabel: '9:16 Vertical',
      isLoaded: false,
      isLoading: false,
    });
  }

  if (metadataCache.has(videoUrl)) {
    return Promise.resolve(metadataCache.get(videoUrl)!);
  }

  if (pendingProbes.has(videoUrl)) {
    return pendingProbes.get(videoUrl)!;
  }

  const probe = new Promise<VideoMetadata>((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = videoUrl;
    video.muted = true;
    video.playsInline = true;

    const cleanup = () => {
      video.removeAttribute('src');
      video.load();
    };

    video.onloadedmetadata = () => {
      const duration = video.duration || 0;
      const width = video.videoWidth || 0;
      const height = video.videoHeight || 0;
      const ratio = height > 0 ? width / height : 1;
      const formattedDuration = formatVideoDuration(duration);
      const formatLabel = detectFormatLabel(width, height);

      const metadata: VideoMetadata = {
        duration,
        formattedDuration,
        width,
        height,
        aspectRatio: ratio,
        formatLabel,
        isLoaded: true,
        isLoading: false,
      };

      metadataCache.set(videoUrl, metadata);
      pendingProbes.delete(videoUrl);
      cleanup();
      resolve(metadata);
    };

    video.onerror = () => {
      const fallback: VideoMetadata = {
        duration: 0,
        formattedDuration: '--:--',
        width: 0,
        height: 0,
        aspectRatio: 9 / 16,
        formatLabel: '9:16 Vertical',
        isLoaded: false,
        isLoading: false,
        error: 'Failed to load video metadata',
      };
      pendingProbes.delete(videoUrl);
      cleanup();
      resolve(fallback);
    };

    // 8 second safety timeout
    setTimeout(() => {
      if (pendingProbes.has(videoUrl)) {
        pendingProbes.delete(videoUrl);
        cleanup();
        resolve({
          duration: 0,
          formattedDuration: '--:--',
          width: 0,
          height: 0,
          aspectRatio: 9 / 16,
          formatLabel: '9:16 Vertical',
          isLoaded: false,
          isLoading: false,
        });
      }
    }, 8000);
  });

  pendingProbes.set(videoUrl, probe);
  return probe;
}
