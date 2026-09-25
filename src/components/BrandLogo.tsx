import { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'footer' | 'icon-only';
  withTagline?: boolean;
  imageSrc?: string;
}

export default function BrandLogo({
  className = "",
  variant = 'nav',
  withTagline = false,
  imageSrc
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  // If a real image path was explicitly provided and hasn't errored
  if (imageSrc && !imageError && (variant === 'hero' || variant === 'footer')) {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <img
          src={imageSrc}
          alt="SD ADWORKS"
          className={
            variant === 'hero' 
              ? 'max-h-24 md:max-h-32 object-contain filter drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]' 
              : 'max-h-16 object-contain'
          }
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Precision vector rendering of the chrome metallic SD ADWORKS logo
  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center font-display font-black tracking-tighter ${className}`}>
        <div className="relative flex items-center select-none text-2xl font-black">
          <span className="bg-gradient-to-b from-white via-[#E6E6E6] to-[#8E8E93] bg-clip-text text-transparent">S</span>
          <span className="bg-gradient-to-b from-white via-[#D1D1D6] to-[#71717A] bg-clip-text text-transparent -ml-0.5">D</span>
          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E10600] to-transparent"></span>
        </div>
      </div>
    );
  }

  if (variant === 'nav') {
    return (
      <a href="#home" className={`group inline-flex items-center gap-3 select-none ${className}`}>
        <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#141414] border border-white/10 group-hover:border-[#E10600]/50 transition-colors">
          <span className="font-display font-black text-lg bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            SD
          </span>
          <div className="absolute -bottom-[1px] left-2 right-2 h-[2px] bg-[#E10600]"></div>
        </div>
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className="font-display font-extrabold text-base tracking-wider text-white">
              SD
            </span>
            <span className="font-display font-black text-base tracking-widest bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent ml-1">
              ADWORKS
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium mt-0.5">
            AI Advertising
          </span>
        </div>
      </a>
    );
  }

  // Hero / Footer full lockup
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* SD mark & ADWORKS */}
      <div className="relative">
        <div className="flex items-center">
          <div className="text-4xl md:text-6xl font-black font-display tracking-tight bg-gradient-to-b from-white via-[#E8E8E8] to-[#999999] bg-clip-text text-transparent drop-shadow-md">
            SD
          </div>
          <div className="text-4xl md:text-6xl font-black font-display tracking-widest bg-gradient-to-b from-white via-[#F0F0F0] to-[#AAAAAA] bg-clip-text text-transparent ml-3">
            ADWORKS
          </div>
        </div>
        {/* Red accent rule */}
        <div className="w-full h-[3px] bg-gradient-to-r from-[#E10600] via-[#E10600] to-transparent mt-1.5 rounded-full"></div>
      </div>

      {withTagline && (
        <p className="font-syncopate text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-400 font-bold mt-2.5">
          AI-Powered Ads. Built to Get Attention.
        </p>
      )}
    </div>
  );
}
