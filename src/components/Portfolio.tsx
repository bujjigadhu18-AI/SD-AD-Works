import { useState } from 'react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_FILTERS, Project } from '../config/projects';
import ProjectThumbnail from './ProjectThumbnail';
import { Play } from 'lucide-react';
import { useVideoMetadata } from '../hooks/useVideoMetadata';

interface PortfolioProps {
  onOpenDemo: (project: Project) => void;
}

function PortfolioCard({
  project,
  onOpenDemo,
}: {
  project: Project;
  onOpenDemo: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const metadata = useVideoMetadata(project.video || project.videoPath);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenDemo(project)}
      className="group relative rounded-2xl bg-[#101010] border border-white/10 hover:border-[#E10600]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] cursor-pointer"
    >
      {/* Cinematic Visual Stage [VIDEO THUMBNAIL] */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
        <ProjectThumbnail project={project} isHovered={isHovered} />

        {/* Duration badge in corner */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300 flex items-center gap-1.5 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
          <span>{metadata.formattedDuration}</span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-[#101010]">
        <div>
          {/* Category & SPEC AD / CONCEPT DEMO Tag */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
            <span>{project.category}</span>
            <span className="text-[#E10600] tracking-wider font-semibold text-[10px]">
              {project.label}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="text-xl font-bold font-display tracking-wide text-white group-hover:text-white transition-colors flex items-center justify-between">
            <span>{project.name || project.brand}</span>
            {project.tagline && (
              <span className="text-xs font-normal text-neutral-400 italic">
                "{project.tagline}"
              </span>
            )}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed mt-2.5">
            {project.description}
          </p>

          {/* Highlights tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Card Bottom: [ACTUAL VIDEO DURATION] [VIDEO FORMAT] and ▶ WATCH DEMO */}
        <div className="pt-5 mt-5 border-t border-white/5 flex flex-col gap-3">
          {/* Metadata Display: [ACTUAL VIDEO DURATION]   [VIDEO FORMAT] */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-white font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              {metadata.formattedDuration}
            </span>
            <span className="text-neutral-400 tracking-wider">
              {metadata.formatLabel}
            </span>
          </div>

          {/* ▶ WATCH DEMO CTA */}
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDemo(project);
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#E10600] transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>WATCH DEMO</span>
            </button>

            <span className="text-[11px] font-mono text-neutral-500">
              Concept Reel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ onOpenDemo }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.filterKey === activeFilter);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#080808] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
            Commercial Reel & Concepts
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            SELECTED WORK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Spec ads and concept campaigns created to demonstrate my advertising style.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#111111] border border-white/10 max-w-full">
            {PORTFOLIO_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#E10600] text-white shadow-[0_2px_12px_rgba(225,6,0,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpenDemo={onOpenDemo}
            />
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-neutral-500 max-w-xl mx-auto">
            * All featured case studies above are Spec Ads / Concept Demos created by Sai Dinesh to demonstrate visual production, hook architecture, and commercial aesthetic.
          </p>
        </div>

      </div>
    </section>
  );
}
