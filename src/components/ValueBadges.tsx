import React from 'react';
import { ShieldCheck, TrendingDown, Home, PiggyBank, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export const ValueBadges: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Govt. Approved Scheme',
      subtitle: 'MNRE & Assam Verified',
    },
    {
      icon: TrendingDown,
      title: 'Up to 90% Bill Saving',
      subtitle: 'Free Electricity',
    },
    {
      icon: Home,
      title: 'Increase Property Value',
      subtitle: 'Modern Clean Upgrade',
    },
    {
      icon: PiggyBank,
      title: 'Long Term Savings',
      subtitle: '25+ Years Guarantee',
    },
    {
      icon: Leaf,
      title: 'Clean & Green Environment',
      subtitle: 'Zero Carbon Footprint',
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{badge.title}</h4>
                  <p className="text-[11px] text-slate-400">{badge.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
