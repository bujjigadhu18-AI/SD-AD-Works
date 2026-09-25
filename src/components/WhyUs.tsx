import { WHY_US_CARDS } from '../config/process';
import { Lightbulb, Share2, Cpu, Sliders } from 'lucide-react';

export default function WhyUs() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'CREATIVE-FIRST':
        return <Lightbulb className="w-6 h-6 text-[#E10600]" />;
      case 'SOCIAL-FIRST':
        return <Share2 className="w-6 h-6 text-white" />;
      case 'AI-ASSISTED':
        return <Cpu className="w-6 h-6 text-[#E10600]" />;
      case 'CUSTOM':
        return <Sliders className="w-6 h-6 text-white" />;
      default:
        return <Lightbulb className="w-6 h-6 text-[#E10600]" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-28 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
            Core Differentiation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            WHY WORK WITH SD ADWORKS?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center mb-6">
                  {getIcon(card.title)}
                </div>

                <h3 className="text-lg font-bold font-display tracking-wide text-white uppercase mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                <span className="w-1 h-1 rounded-full bg-[#E10600]"></span>
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
