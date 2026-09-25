import founderPhotoImg from '../assets/founder/sai-dinesh.png';

interface FounderPhotoProps {
  className?: string;
  variant?: 'hero-badge' | 'about-card';
}

export default function FounderPhoto({ className = "", variant = 'about-card' }: FounderPhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0D0D0D] border border-white/10 shadow-2xl transition-all duration-300 group ${className}`}
    >
      {/* Permanent High-Resolution Founder Photograph of Sai Dinesh */}
      <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] overflow-hidden">
        <img
          src={founderPhotoImg}
          alt="Sai Dinesh — Founder & AI Ads Creator, SD ADWORKS"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="eager"
        />

        {/* Subtle cinematic gradient overlays for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Ambient red edge accent glow */}
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E10600]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Badge Overlay */}
      {variant === 'hero-badge' && (
        <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-xl">
          <div>
            <div className="text-base font-bold text-white font-display tracking-wide">
              Sai Dinesh
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              AI Ads & Short-Form Video Creator
            </div>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded bg-[#E10600]/20 border border-[#E10600]/40 text-[#E10600] font-bold">
            FOUNDER
          </span>
        </div>
      )}

      {/* About Card Overlay Details */}
      {variant === 'about-card' && (
        <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-2xl">
          <div>
            <div className="text-base font-bold text-white font-display tracking-wide flex items-center gap-2">
              <span>Sai Dinesh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
            </div>
            <div className="text-xs text-neutral-400 font-mono mt-0.5">
              Founder &mdash; SD ADWORKS
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-medium">
              Studio Director
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
