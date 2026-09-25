import { useEffect, useRef, useState } from 'react';
import type { Project } from '../config/projects';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, ArrowRight } from 'lucide-react';
import { formatVideoDuration, detectFormatLabel } from '../utils/videoMetadata';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (project?: Project) => void;
}

export default function VideoModal({ project, onClose, onStartProject }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState("0:00");
  const [durationText, setDurationText] = useState("0:00");
  const [formatLabel, setFormatLabel] = useState("9:16 Vertical");
  const [aspectCategory, setAspectCategory] = useState<'vertical' | 'horizontal' | 'square'>('vertical');
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset state when project changes
  useEffect(() => {
    if (!project) return;
    setIsPlaying(false);
    setProgress(0);
    setCurrentTimeText("0:00");
    setDurationText("0:00");
    setVideoError(false);
  }, [project]);

  if (!project) return null;

  const activeVideoSource = project.video || project.videoPath;
  const activePoster = (project.poster && project.poster.trim()) || (project.thumbnailPath && project.thumbnailPath.trim()) || undefined;

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration || 0;
    const w = videoRef.current.videoWidth || 0;
    const h = videoRef.current.videoHeight || 0;

    const formattedDur = formatVideoDuration(dur);
    const label = detectFormatLabel(w, h);
    setDurationText(formattedDur);
    setFormatLabel(label);

    const ratio = h > 0 ? w / h : 9 / 16;
    if (ratio >= 1.4) {
      setAspectCategory('horizontal');
    } else if (ratio >= 0.9 && ratio <= 1.1) {
      setAspectCategory('square');
    } else {
      setAspectCategory('vertical');
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime || 0;
    const dur = videoRef.current.duration || 1;
    setProgress((cur / dur) * 100);

    const formattedCurrent = formatVideoDuration(cur);
    setCurrentTimeText(formattedCurrent);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetPercent = parseFloat(e.target.value);
    const dur = videoRef.current.duration || 1;
    videoRef.current.currentTime = (targetPercent / 100) * dur;
    setProgress(targetPercent);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Determine modal max width based on aspect ratio
  const modalMaxWidth =
    aspectCategory === 'horizontal'
      ? 'max-w-4xl'
      : aspectCategory === 'square'
      ? 'max-w-xl'
      : 'max-w-md';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div
        className={`relative z-10 w-full ${modalMaxWidth} max-h-[92vh] flex flex-col bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E10600]"></span>
            <div>
              {/* Project Name */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                {project.name || project.brand}
                {/* Category */}
                <span className="text-xs font-mono font-normal text-neutral-400">
                  / {project.category}
                </span>
              </h3>
            </div>
            {/* SPEC AD / CONCEPT DEMO tag */}
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider bg-white/5 border border-white/10 text-neutral-300">
              {project.label || "SPEC AD / CONCEPT DEMO"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Stage Container */}
        <div
          className={`relative flex-1 bg-black flex items-center justify-center overflow-hidden ${
            aspectCategory === 'vertical'
              ? 'h-[60vh] max-h-[560px]'
              : aspectCategory === 'square'
              ? 'h-[50vh] max-h-[480px]'
              : 'h-[45vh] max-h-[460px]'
          }`}
        >
          {videoError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-[#0C0C0C] z-20 absolute inset-0">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-[#E10600]" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Concept Video Showcase</h4>
              <p className="text-xs text-neutral-400 max-w-xs">
                This commercial concept demo video is currently being updated.
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={activeVideoSource}
              poster={activePoster}
              preload="metadata"
              muted={isMuted}
              playsInline
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              onError={() => setVideoError(true)}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer"
            >
              <source src={activeVideoSource} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {/* Bottom Player Overlay Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2">
            {/* Progress Slider */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E10600]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-neutral-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>

                {/* Real-time playback timer: e.g. 0:08 / 0:28 */}
                <span className="font-mono text-[11px] text-neutral-300">
                  {currentTimeText} / {durationText}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Under the player metadata display: Duration: 0:28   Format: 9:16 Vertical */}
        <div className="px-5 py-3 bg-[#141414] border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-500">Duration:</span>
              <span className="text-white font-semibold font-mono">{durationText}</span>
            </div>
            <span className="text-neutral-600">&middot;</span>
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-500">Format:</span>
              <span className="text-white font-semibold font-mono">{formatLabel}</span>
            </div>
          </div>

          <span className="text-[10px] text-[#E10600] uppercase font-bold tracking-wider">
            Verified Metadata
          </span>
        </div>

        {/* Modal Footer / Next Step CTA */}
        <div className="p-4 sm:p-5 bg-[#101010] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">
              {project.name || project.brand}
            </h4>
            <p className="text-xs text-neutral-400">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onClose();
                onStartProject(project);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white font-semibold text-xs transition-all shadow-[0_4px_20px_rgba(225,6,0,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
