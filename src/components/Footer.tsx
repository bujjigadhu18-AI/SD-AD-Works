import BrandLogo from './BrandLogo';
import { CONTACT, CONTACT_CONFIG, getWhatsAppUrl, getEmailMailto } from '../config/contact';
import { ArrowUp, Instagram, MessageSquare, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo variant="hero" withTagline={false} />
            <p className="text-base text-neutral-400 max-w-sm font-normal">
              AI-Powered Ads. Built to Get Attention.
            </p>
            <p className="text-xs text-neutral-500 font-mono">
              Founded & Operated by Sai Dinesh
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E10600] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-neutral-400">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E10600] block mb-2">
              Connect
            </span>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailMailto()}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>
            &copy; 2026 SD ADWORKS. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E10600]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
