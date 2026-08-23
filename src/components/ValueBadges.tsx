import React from 'react';
import { ShieldCheck, TrendingDown, Home, PiggyBank, Leaf } from 'lucide-react';

export const ValueBadges: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Govt. Approved Scheme',
      subtitle: 'MNRE & State Verified',
      color: 'emerald',
    },
    {
      icon: TrendingDown,
      title: 'Up to 90% Bill Saving',
      subtitle: 'Free Electricity',
      color: 'amber',
    },
    {
      icon: Home,
      title: 'Increase Property Value',
      subtitle: 'Modern Clean Upgrade',
      color: 'sky',
    },
    {
      icon: PiggyBank,
      title: 'Long Term Savings',
      subtitle: '25+ Years Guarantee',
      color: 'green',
    },
    {
      icon: Leaf,
      title: 'Clean & Green Environment',
      subtitle: 'Zero Carbon Footprint',
      color: 'teal',
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-950 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{badge.title}</h4>
                  <p className="text-[11px] text-slate-400">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
