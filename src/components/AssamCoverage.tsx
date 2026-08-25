import React from 'react';
import { MapPin, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface AssamCoverageProps {
  onSelectLocation: (location: string) => void;
}

export const AssamCoverage: React.FC<AssamCoverageProps> = ({ onSelectLocation }) => {
  const regions = [
    { name: 'Guwahati', hq: true, state: 'Assam HQ' },
    { name: 'Dhemaji', hq: false, state: 'Upper Assam' },
    { name: 'Lakhimpur', hq: false, state: 'North Assam' },
    { name: 'Dibrugarh', hq: false, state: 'Upper Assam Hub' },
    { name: 'Tinsukia', hq: false, state: 'Industrial Sector' },
    { name: 'Jorhat', hq: false, state: 'Central Assam' },
    { name: 'Nagaon', hq: false, state: 'Central Assam' },
    { name: 'Arunachal Pradesh', hq: false, state: 'Northeast Region' },
    { name: 'Meghalaya', hq: false, state: 'Northeast Region' },
    { name: 'Nagaland', hq: false, state: 'Northeast Region' },
    { name: 'Manipur', hq: false, state: 'Northeast Region' },
    { name: 'Tripura', hq: false, state: 'Northeast Region' },
  ];

  return (
    <section id="coverage" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-xs font-bold text-blue-300">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>REGIONAL DISTRIBUTION & SERVICE NETWORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                We Serve Across <span className="gradient-text-brand">Assam & Northeast India</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Trishul Innovations provides rooftop solar, EV vehicles, and authorized regional dealer network distribution across all districts of Assam and the Seven Sister states of Northeast India.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-site technical evaluation, subsidy assistance & dealer support available across Northeast India.</span>
              </div>
            </div>

            {/* Right Cities/States Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {regions.map((reg, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => onSelectLocation(reg.name)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-left hover:border-blue-500/50 hover:bg-slate-900/90 transition-all group shadow-md"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {reg.name}
                    </span>
                    {reg.hq ? (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                        HQ
                      </span>
                    ) : (
                      <CheckCircle2 className="w-3 h-3 text-blue-400 opacity-60 group-hover:opacity-100" />
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">{reg.state}</p>
                </motion.button>
              ))}

              {/* All Northeast banner tile */}
              <div className="col-span-2 sm:col-span-3 md:col-span-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 border border-blue-500/40 text-center">
                <span className="text-xs font-bold text-amber-300">
                  📍 Authorized Coverage: Assam, Arunachal Pradesh, Meghalaya, Nagaland, Manipur, Tripura, Mizoram & Sikkim
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
