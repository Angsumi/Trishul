import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, QrCode, ArrowUp } from 'lucide-react';
import logoImg from '../assets/LOGO.webp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info & Authorizations */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#hero" className="inline-block">
              <div className="bg-white/95 px-3.5 py-1.5 rounded-2xl border border-slate-200 inline-block shadow-md">
                <img 
                  src={logoImg} 
                  alt="Trishul Innovations Logo" 
                  width="160"
                  height="44"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wide">
                Govt Empaneled Vendor
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wide">
                APDCL Certified
              </span>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Empowering Assam & Northeast India with PM Surya Ghar Rooftop Solar, EV Charging Infrastructure, and Commercial Green Energy Solutions.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-amber-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>MNRE Registered & APDCL Empaneled Solar Vendor</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 font-medium">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'PM Surya Ghar', href: '#surya-ghar' },
                { name: 'Price Catalog', href: '#price-catalog' },
                { name: 'Solar Solutions', href: '#solutions' },
                { name: 'EV Solutions', href: '#ev-solutions' },
                { name: 'EV Dealership', href: '#dealership' },
                { name: 'Real Projects', href: '#gallery' },
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

          {/* Col 3: Official Contact & Headquarters */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Contact & Location</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug">
                  <strong className="text-white block font-semibold">Headquarters:</strong>
                  House no -5 ,Naamghar Path,Sorumotoria,Guwahati,781006
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug">
                  <strong className="text-white block font-semibold">Phone Lines:</strong>
                  <a href="tel:+919181430285" className="hover:text-emerald-400 block">+91 9181430285 (WhatsApp)</a>
                  <a href="tel:03617265223" className="hover:text-emerald-400 block">0361-7265223</a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:trishul.innovations@outlook.com" className="hover:text-emerald-400 text-slate-300 font-medium">
                  trishul.innovations@outlook.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="https://www.trishul.tech" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-extrabold text-sm hover:underline tracking-wide">
                  www.trishul.tech
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Scan QR & Instant Enquiry */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Direct WhatsApp Enquiry</h4>
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="p-3 bg-white rounded-xl inline-block shadow-md">
                <QrCode className="w-20 h-20 text-slate-950" />
              </div>
              <p className="text-[11px] font-bold text-slate-200">Scan QR Code for Instant Estimate</p>
              <a 
                href="https://wa.me/919181430285?text=Hi%20Trishul%20Innovations,%20I%20visited%20www.trishul.tech%20and%20want%20a%20solar%20quote." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-1 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition shadow"
              >
                Open WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* Regional Network Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900/80 flex flex-wrap items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            <strong className="text-slate-200">Regional Depots & Service Centers:</strong> Guwahati • Jorhat • Dibrugarh • Silchar • Tezpur • Bongaigaon • Tinsukia
          </div>
          <div className="text-emerald-400 font-semibold">
            Official Web Portal: <a href="https://www.trishul.tech" target="_blank" rel="noopener noreferrer" className="hover:underline">www.trishul.tech</a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <p>© 2026 Trishul Innovations. All Rights Reserved. Empaneled Govt Rooftop Solar Vendor in Assam & NE India.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors flex items-center space-x-1"
          >
            <span className="text-[11px] font-bold">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
