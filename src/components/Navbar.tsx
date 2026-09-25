import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export default function Navbar({ onStartProject }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center">
          <BrandLogo variant="nav" />
        </div>

        {/* Zone 2: Primary Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-white transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E10600] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onStartProject}
            className="px-5 py-2.5 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:shadow-[0_0_28px_rgba(225,6,0,0.5)] flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-neutral-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500 text-xs font-mono">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 rounded-xl bg-[#E10600] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
