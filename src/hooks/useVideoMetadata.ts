import { useState, useEffect } from 'react';
import { extractVideoMetadata, VideoMetadata } from '../utils/videoMetadata';

export function useVideoMetadata(videoUrl?: string): VideoMetadata {
  const [metadata, setMetadata] = useState<VideoMetadata>({
    duration: 0,
    formattedDuration: '...',
    width: 0,
    height: 0,
    aspectRatio: 9 / 16,
    formatLabel: 'Detecting format...',
    isLoaded: false,
    isLoading: true,
  });

  useEffect(() => {
    if (!videoUrl) return;
    let active = true;

    extractVideoMetadata(videoUrl).then((meta) => {
      if (active) {
        setMetadata(meta);
      }
    });

    return () => {
      active = false;
    };
  }, [videoUrl]);

  return metadata;
}
