import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Sun, Zap, Bike, Calculator, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultTab?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'PM Surya Ghar', href: '#surya-ghar' },
    { name: 'Solar Solutions', href: '#solutions' },
    { name: 'EV Solutions', href: '#ev-solutions' },
    { name: 'Savings Calculator', href: '#calculator' },
    { name: 'Loans & Subsidy', href: '#loans-subsidy' },
    { name: 'Assam Network', href: '#coverage' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Info & Social */}
      <div className={`bg-slate-900/95 backdrop-blur-md text-slate-300 text-xs py-2 border-b border-slate-800/80 transition-all duration-300 ${isScrolled ? 'hidden md:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 flex-wrap">
            <a href="tel:+917002492965" className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>+91 70024 92965</span>
            </a>
            <a href="tel:+919864092965" className="hidden sm:flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>+91 98640 92965</span>
            </a>
            <a href="mailto:trishul.innovations@outlook.com" className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>trishul.innovations@outlook.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Guwahati, Assam • Serving Northeast India</span>
            </div>
            <div className="h-3 w-px bg-slate-800 hidden lg:block"></div>
            <div className="flex items-center space-x-3 text-slate-400">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                MNRE Govt Approved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-slate-950/50' : 'bg-slate-950/60 backdrop-blur-md py-4 border-b border-slate-800/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors shadow-inner">
              <img 
                src="/LOGO.png" 
                alt="Trishul Innovations Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 hover:border-amber-400 transition-all shadow-sm"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Solar Calculator</span>
            </button>
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/40 transition-all active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={onOpenCalculator}
              className="md:hidden inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-amber-400 border border-amber-500/30"
            >
              <Calculator className="w-3.5 h-3.5 mr-1 text-amber-400" />
              <span>Calculator</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[110px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 shadow-2xl space-y-3 transition-all animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-slate-900 text-amber-400 border border-amber-500/30 flex items-center justify-center space-x-1.5"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Solar Calculator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-950/50"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-400">
            <p>Guwahati • Dhemaji • Lakhimpur • Dibrugarh • Tinsukia • Jorhat</p>
            <p className="mt-1 text-slate-500">Call: +91 70024 92965 | +91 98640 92965</p>
          </div>
        </div>
      )}
    </header>
  );
};
