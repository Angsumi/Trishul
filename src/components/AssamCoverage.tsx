import React from 'react';
import { MapPin, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

interface AssamCoverageProps {
  onSelectLocation: (location: string) => void;
}

export const AssamCoverage: React.FC<AssamCoverageProps> = ({ onSelectLocation }) => {
  const cities = [
    { name: 'Guwahati', hq: true, desc: 'Central Office & Service Hub' },
    { name: 'Dhemaji', hq: false, desc: 'Solar & EV Distribution' },
    { name: 'Lakhimpur', hq: false, desc: 'Residential & Commercial Support' },
    { name: 'Dibrugarh', hq: false, desc: 'Regional Service Network' },
    { name: 'Tinsukia', hq: false, desc: 'Industrial & EV Fleet Support' },
    { name: 'Jorhat', hq: false, desc: 'Rooftop Solar EPC' },
  ];

  return (
    <section id="coverage" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-bold text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>STATEWIDE SERVICE NETWORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                We Serve <span className="gradient-text-emerald">Across Assam</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you live in Guwahati or remote towns across Northeast India, our certified technical team is equipped for prompt site visits, rooftop solar installation, EV test rides, and after-sales service.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-site engineering assessment & subsidy documentation available in all districts of Assam.</span>
              </div>
            </div>

            {/* Right Cities Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectLocation(city.name)}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all group shadow-md"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {city.name}
                    </span>
                    {city.hq ? (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        HQ
                      </span>
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 opacity-60 group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">{city.desc}</p>
                </button>
              ))}

              {/* All over Assam banner tile */}
              <div className="col-span-2 sm:col-span-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/40 text-center">
                <span className="text-xs font-bold text-emerald-300">
                  📍 Serving All Over Assam & Northeast Region
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
