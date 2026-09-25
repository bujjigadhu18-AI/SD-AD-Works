import { useState } from 'react';
import type { Project } from '../config/projects';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface ProjectThumbnailProps {
  project: Project;
  className?: string;
  isHovered?: boolean;
}

export default function ProjectThumbnail({
  project,
  className = "",
  isHovered = false,
}: ProjectThumbnailProps) {
  const [hasRealImage, setHasRealImage] = useState(false);
  const [hasTriedLoading, setHasTriedLoading] = useState(false);
  const metadata = useVideoMetadata(project.video || project.videoPath);
  const posterPath = project.poster || project.thumbnailPath;
  const hasThumbnailPath = Boolean(posterPath && posterPath.trim() !== "");

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0A0A0A] ${className}`}>
      {/* If real thumbnail exists at path */}
      {hasThumbnailPath && !hasTriedLoading && (
        <img
          src={posterPath}
          alt={`${project.brand} Spec Ad`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
          onLoad={() => setHasRealImage(true)}
          onError={() => {
            setHasRealImage(false);
            setHasTriedLoading(true);
          }}
          referrerPolicy="no-referrer"
        />
      )}

      {/* Styled Cinematic Spec Ad Visual Card Fallback */}
      {!hasRealImage && (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 overflow-hidden">
          {/* Background Ambient Lighting based on project accent */}
          <div
            className="absolute top-1/4 right-0 w-72 h-72 rounded-full blur-[90px] opacity-25 pointer-events-none transition-opacity duration-500"
            style={{ backgroundColor: project.accentColor }}
          ></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Top category & Spec Ad Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#E10600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse"></span>
              {project.label}
            </div>
          </div>

          {/* Center Graphic Representation tailored to the project */}
          <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
            {project.id === 'luna-cafe' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-amber-500/20 bg-amber-950/20 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                  {/* Steaming Coffee Cup Icon / Graphic */}
                  <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 8h1a4 44 0 0 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" y1="2" x2="6" y2="4" strokeLinecap="round" />
                    <line x1="10" y1="2" x2="10" y2="4" strokeLinecap="round" />
                    <line x1="14" y1="2" x2="14" y2="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-amber-300 bg-black/80 px-1.5 py-0.5 rounded border border-amber-500/30">
                  MACRO 4K
                </div>
              </div>
            )}

            {project.id === 'apex-fitness' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-red-500/30 bg-red-950/30 flex items-center justify-center shadow-[0_0_50px_rgba(225,6,0,0.3)]">
                  {/* Dynamic Flame / Energy Icon */}
                  <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-red-400 bg-black/80 px-1.5 py-0.5 rounded border border-red-500/30">
                  140 BPM
                </div>
              </div>
            )}

            {project.id === 'nova-heights' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-neutral-600/30 bg-neutral-900/40 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                  {/* Architectural Skyline Icon */}
                  <svg className="w-10 h-10 text-amber-200/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-amber-100/90 bg-black/80 px-1.5 py-0.5 rounded border border-amber-200/30">
                  DRONE 4K
                </div>
              </div>
            )}

            {project.id === 'velora' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-yellow-500/20 bg-yellow-950/20 flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                  {/* Fashion Silhouette / Diamond Icon */}
                  <svg className="w-10 h-10 text-yellow-300/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 3h12l4 6-10 12L2 9Z" />
                    <path d="M11 3 8 9l4 12 4-12-3-6" />
                    <path d="M2 9h20" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-yellow-300 bg-black/80 px-1.5 py-0.5 rounded border border-yellow-500/30">
                  HAUTE COUTURE
                </div>
              </div>
            )}

            {project.id === 'aeron-x1' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-red-500/30 bg-neutral-900/60 flex items-center justify-center shadow-[0_0_50px_rgba(225,6,0,0.25)]">
                  {/* Supercar / Gauge Icon */}
                  <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-red-400 bg-black/80 px-1.5 py-0.5 rounded border border-red-500/30">
                  NIGHT DRIFT
                </div>
              </div>
            )}

            {project.id === 'flowly' && (
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border border-blue-500/20 bg-blue-950/20 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                  {/* SaaS / Workflow Nodes Icon */}
                  <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-blue-300 bg-black/80 px-1.5 py-0.5 rounded border border-blue-500/30">
                  PRODUCT REEL
                </div>
              </div>
            )}

            <h3 className="text-2xl font-display font-bold text-white tracking-wide mt-2">
              {project.brand}
            </h3>
            {project.tagline && (
              <p className="text-xs text-neutral-400 tracking-wider italic mt-0.5">
                "{project.tagline}"
              </p>
            )}
          </div>

          {/* Bottom video duration & specs */}
          <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 pt-3">
            <span className="font-mono text-[11px] text-neutral-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
              {metadata.formattedDuration}
            </span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-500">
              {metadata.formatLabel}
            </span>
          </div>
        </div>
      )}

      {/* Cinematic subtle vignette and gradient overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/30 to-black/40"></div>

      {/* Hover action overlay */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-[0_0_30px_rgba(225,6,0,0.6)] transform transition-transform duration-300 hover:scale-110">
          <svg className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <span className="mt-3 text-sm font-semibold tracking-wider uppercase text-white font-mono">
          Watch Demo
        </span>
        <span className="text-[11px] text-neutral-400 mt-1">
          {project.label}
        </span>
      </div>
    </div>
  );
}
