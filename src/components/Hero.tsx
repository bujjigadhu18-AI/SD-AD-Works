import BrandLogo from './BrandLogo';
import FounderPhoto from './FounderPhoto';
import { ArrowDown, ArrowRight, Play, Film, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onStartProject: () => void;
}

export default function Hero({ onViewWork, onStartProject }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Cinematic subtle moving ambient gradients and reflections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top center red glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#E10600]/10 rounded-full blur-[140px]"></div>
        {/* Side amber/crimson ambient light */}
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-10 -left-40 w-[400px] h-[400px] bg-neutral-800/20 rounded-full blur-[110px]"></div>

        {/* Subtle cinematic geometric hairline grid (very low opacity) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Business focus kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-wider text-neutral-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              <span>AI UGC ADS</span>
              <span className="text-neutral-600">&middot;</span>
              <span>SHORT-FORM VIDEO</span>
              <span className="text-neutral-600">&middot;</span>
              <span>SOCIAL ADS</span>
            </div>

            {/* Brand Logo Lockup */}
            <div className="mb-6">
              <BrandLogo variant="hero" withTagline={false} />
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.08] text-balance mb-6">
              AI-POWERED ADS.<br />
              <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                BUILT TO GET ATTENTION.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8 text-pretty">
              I create cinematic AI-powered ads and short-form videos for businesses, products, services, apps and brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onViewWork}
                className="px-7 py-4 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(225,6,0,0.35)] hover:shadow-[0_0_40px_rgba(225,6,0,0.55)] flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
              >
                <span>View My Work</span>
                <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onStartProject}
                className="px-7 py-4 rounded-xl bg-[#141414] hover:bg-[#1C1C1C] border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtle editorial markers */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Film className="w-3.5 h-3.5 text-[#E10600]" /> Spec Ad Showcases
              </span>
              <span>&middot;</span>
              <span>4K / Vertical Formats</span>
              <span>&middot;</span>
              <span>Concept-Driven Production</span>
            </div>
          </div>

          {/* Right Column: Founder Presentation in Hero */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative glow container */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E10600]/30 via-transparent to-white/10 rounded-3xl blur-md opacity-60"></div>
              
              <div className="relative rounded-2xl bg-[#0D0D0D] border border-white/10 p-2 sm:p-3 shadow-2xl">
                {/* Founder Photo */}
                <FounderPhoto className="h-[430px] sm:h-[480px] w-full" variant="hero-badge" />

                {/* Micro founder label beneath photo */}
                <div className="pt-4 pb-2 px-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-display font-bold text-white text-sm block">Sai Dinesh</span>
                    <span className="text-[11px] text-neutral-400">AI Ads & Short-Form Video Creator</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#E10600]/15 text-[#E10600] font-mono text-[10px] font-semibold uppercase tracking-wider border border-[#E10600]/30">
                      Founder &mdash; SD ADWORKS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer" onClick={onViewWork}>
        <span className="text-[10px] font-mono uppercase tracking-widest mb-1">Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E10600]" />
      </div>
    </section>
  );
}
