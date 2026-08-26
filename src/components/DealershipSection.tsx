import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Zap, Users, Wrench, Megaphone, Truck, Lock, FileCheck, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface DealershipSectionProps {
  onApplyDealership: () => void;
}

export const DealershipSection: React.FC<DealershipSectionProps> = ({ onApplyDealership }) => {
  const dealerPerks = [
    { title: 'Product Support', icon: Layers, desc: 'Quality 2W & 3W EV products with OEM warranty.' },
    { title: 'Technical Assistance', icon: Wrench, desc: 'Workshop setup & mechanic training assistance.' },
    { title: 'Marketing Support', icon: Megaphone, desc: 'Digital banners, branding, and local ad promotions.' },
    { title: 'Business Guidance', icon: Users, desc: 'Proven operational & sales strategy guidance.' },
    { title: 'After-Sales Support', icon: ShieldCheck, desc: 'Genuine spare parts & customer service support.' },
    { title: 'Growing Market Opportunity', icon: Zap, desc: 'Exclusive regional territory rights across Assam & Northeast.' },
  ];

  return (
    <section id="dealership" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Glow Effects - Blue & Gold */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-blue-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>BECOME AN EV DEALER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Start Your EV Business with <span className="gradient-text-brand">Trishul Innovations</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Are you looking for a new business opportunity? Join our EV dealership network and grow your business with electric mobility products and dedicated support across Assam and Northeast India.
          </p>
        </motion.div>

        {/* Dealer Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dealerPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-950/90 transition-all duration-300 text-left space-y-3 shadow-xl group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 w-fit group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{perk.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dealership Action Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-950 to-amber-950/70 border border-amber-500/30 text-center space-y-6 max-w-3xl mx-auto shadow-2xl"
        >
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">REGIONAL FRANCHISE OPPORTUNITY</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Partner with Trishul Innovations Today</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              We work closely with potential dealers to provide quality 2W & 3W products, professional training, marketing materials, and long-term service support.
            </p>
          </div>
          <div>
            <button
              onClick={onApplyDealership}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-950/80 transition-all"
            >
              <span>Become a Dealer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
