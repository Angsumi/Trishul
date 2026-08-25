import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, QrCode, ArrowUp } from 'lucide-react';
import logoImg from '../assets/LOGO.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#hero" className="inline-block">
              <div className="bg-white/95 px-3 py-1.5 rounded-2xl border border-slate-200 inline-block shadow-md">
                <img 
                  src={logoImg} 
                  alt="Trishul Innovations Logo" 
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Trishul Innovations is a leading provider of solar energy and EV mobility solutions in Assam. We are committed to provide clean energy for a better tomorrow.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>MNRE & Assam Govt Approved Scheme Partner</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'PM Surya Ghar', href: '#surya-ghar' },
                { name: 'EV Dealership', href: '#dealership' },
                { name: 'Real Projects', href: '#gallery' },
                { name: 'Solar Solutions', href: '#solutions' },
                { name: 'EV Solutions', href: '#ev-solutions' },
                { name: 'Loans & Subsidy', href: '#loans-subsidy' },
                { name: 'Assam Network', href: '#coverage' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Contact Us</h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">House No. 2A, 2nd Floor, Hemprabha Enclave, Sarumataria, Guwahati - 781006, Assam</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="flex flex-col text-slate-300">
                  <a href="tel:+919181430285" className="hover:text-emerald-400">+91 9181430285 (WhatsApp)</a>
                  <a href="tel:03617265223" className="hover:text-emerald-400">0361-7265223 / +91 887682069</a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:trishul.innovations@outlook.com" className="hover:text-emerald-400 text-slate-300">
                  trishul.innovations@outlook.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="https://www.trishul.innovations.in" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                  www.trishul.innovations.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Scan QR Enquiry Box */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Enquiry Now</h4>
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="p-3 bg-white rounded-xl inline-block shadow-md">
                {/* SVG QR Code Simulation */}
                <QrCode className="w-20 h-20 text-slate-950" />
              </div>
              <p className="text-[11px] font-bold text-slate-200">Scan QR Code to Enquire</p>
              <p className="text-[10px] text-slate-400">Instant WhatsApp enquiry line</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <p>© 2026 Trishul Innovations. All Rights Reserved. Designed for Assam & Northeast India.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors flex items-center space-x-1"
          >
            <span className="text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
