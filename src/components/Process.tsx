import { PROCESS_STEPS } from '../config/process';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
            Production Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            HOW I WORK
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            A structured, 5-stage creative process from initial brief to high-converting social export.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (hidden on small screens) */}
        <div className="hidden lg:block relative">
          {/* Connecting glowing track */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-neutral-800 via-[#E10600]/50 to-neutral-800 z-0"></div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                {/* Node icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#111111] border border-white/10 group-hover:border-[#E10600] flex items-center justify-center transition-all duration-300 shadow-xl group-hover:shadow-[0_0_25px_rgba(225,6,0,0.3)] mb-6 bg-[#0D0D0D]">
                  <span className="font-mono font-bold text-lg text-white group-hover:text-[#E10600] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Name */}
                <h3 className="text-base font-bold font-display tracking-wider text-white uppercase mb-2">
                  {step.name}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Deliverable tag */}
                <div className="mt-4 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-neutral-500">
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline (visible on screens < lg) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-neutral-800 ml-4 space-y-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative group">
              {/* Dot on timeline */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#141414] border-2 border-[#E10600]"></div>

              <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-[#E10600] px-2 py-0.5 rounded bg-[#E10600]/10 border border-[#E10600]/20">
                    STEP {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    {step.name}
                  </h3>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-3 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
