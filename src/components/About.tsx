import { Sparkles, Eye, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080808] border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              Creative Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase leading-[1.1] text-balance">
              CREATIVE ADS.<br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                BUILT FOR THE SCROLL.
              </span>
            </h2>

            <div className="w-16 h-1 bg-[#E10600] mt-6 rounded-full"></div>
          </div>

          {/* Right Copy & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed">
              SD ADWORKS creates AI-assisted advertising videos and short-form content designed to help businesses communicate their products and services through strong visuals, storytelling and modern social-media formats.
            </p>

            <p className="text-base text-neutral-400 font-normal leading-relaxed">
              From food and fitness to real estate, fashion, automotive and digital products, I create concept-driven advertisements tailored for short-form platforms.
            </p>

            {/* 3 Core Editorial Focus Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-white/5">
                <Eye className="w-5 h-5 text-[#E10600] mb-2" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">First 3 Seconds</h4>
                <p className="text-xs text-neutral-400 mt-1">Engineered hooks to capture immediate viewer focus.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-white/5">
                <Target className="w-5 h-5 text-neutral-300 mb-2" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Clear Narrative</h4>
                <p className="text-xs text-neutral-400 mt-1">Pacing and sound design built around your brand message.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-white/5">
                <Sparkles className="w-5 h-5 text-[#E10600] mb-2" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">AI Accelerated</h4>
                <p className="text-xs text-neutral-400 mt-1">Faster visual prototyping with cinematic fidelity.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
