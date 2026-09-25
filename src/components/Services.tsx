import { SERVICES_LIST, ServiceItem } from '../config/services';
import { 
  Sparkles, 
  Box, 
  Smartphone, 
  UtensilsCrossed, 
  Flame, 
  Building2, 
  Shirt, 
  Car, 
  Laptop, 
  Video,
  ArrowUpRight 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E10600]" />;
      case 'Video': return <Video className="w-5 h-5 text-red-500" />;
      case 'Box': return <Box className="w-5 h-5 text-neutral-300" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#E10600]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#E10600]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-200" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-yellow-400" />;
      case 'Car': return <Car className="w-5 h-5 text-[#E10600]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#E10600]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050505]">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-950/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              Commercial Video Formats
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              What I Create
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md">
            Tailored visual storytelling and production pipelines built for short-form scroll platforms and digital advertising.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.number}
              onClick={() => onSelectService(service)}
              className="group relative rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#E10600]/40 p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#141414] hover:shadow-[0_10px_30px_rgba(225,6,0,0.12)] cursor-pointer"
            >
              {/* Card Header: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-[#E10600]/40 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-neutral-500 tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-[#E10600] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold font-display tracking-wide text-white group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-[#E10600] font-medium tracking-wide mt-1">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>

              {/* Format Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>{service.format}</span>
                <span className="text-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                  Inquire &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
