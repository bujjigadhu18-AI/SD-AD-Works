import { ArrowRight, Play } from 'lucide-react';

interface ClientCtaProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export default function ClientCta({ onStartProject, onViewWork }: ClientCtaProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Cinematic ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-[#E10600]/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
          Ready to Elevate Your Reach?
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.08] text-balance">
          NEED AN AD FOR YOUR BUSINESS?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed text-pretty">
          Tell me about your business, product or service and let's build a short-form advertisement around it.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(225,6,0,0.4)] hover:shadow-[0_0_40px_rgba(225,6,0,0.6)] flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
          >
            <span>View My Work</span>
            <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
