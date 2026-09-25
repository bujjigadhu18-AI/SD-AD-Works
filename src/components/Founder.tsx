import FounderPhoto from './FounderPhoto';
import { CONTACT_CONFIG, getWhatsAppUrl, getEmailMailto } from '../config/contact';
import { MessageSquare, Mail, Instagram, Sparkles, Video, Award } from 'lucide-react';

export default function Founder() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E10600]/20 via-transparent to-white/10 rounded-3xl blur-xl opacity-60"></div>
              
              <div className="relative rounded-2xl bg-[#0D0D0D] border border-white/10 p-3 shadow-2xl">
                <FounderPhoto className="h-[460px] sm:h-[520px] w-full" variant="about-card" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              Behind the Work
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              MEET THE CREATOR
            </h2>

            <div>
              <h3 className="text-2xl font-bold text-white font-display">
                Sai Dinesh
              </h3>
              <p className="text-sm font-mono text-[#E10600] tracking-wider mt-1">
                Founder & AI Ads Creator
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              <p>
                I'm Sai Dinesh, the creator behind SD ADWORKS. I focus on AI-assisted advertising, short-form video and creative visual content for businesses looking to present their products and services in a modern way.
              </p>
            </div>

            {/* Quote badge */}
            <div className="p-5 rounded-2xl bg-[#0F0F0F] border-l-4 border-[#E10600] border-y border-r border-white/5 my-6">
              <p className="text-lg font-display font-bold text-white italic tracking-wide">
                &ldquo;Let&apos;s create something people remember.&rdquo;
              </p>
            </div>

            {/* Direct personal connect options */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Sai, I'm reaching out after reading your profile on SD ADWORKS.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#25D366]/40 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={CONTACT_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#E1306C]/40 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200 flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>@_d.i.n.e.s.h_2604</span>
              </a>

              <a
                href={getEmailMailto("Collaborating with SD ADWORKS")}
                className="px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white tracking-wider uppercase transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
