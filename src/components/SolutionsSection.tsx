import React, { useState } from 'react';
import { Sun, Bike, Zap, CheckCircle2, ArrowRight, ShieldCheck, Award, BatteryCharging } from 'lucide-react';
import { motion } from 'motion/react';

interface SolutionsSectionProps {
  onSelectSolution: (title: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'solar' | 'ev'>('all');

  const solutions = [
    {
      id: 'rooftop-solar',
      category: 'solar',
      popular: true,
      icon: Sun,
      title: 'PM SURYA GHAR ROOFTOP SOLAR',
      tagline: 'Generate your own electricity & claim up to ₹1,30,800 subsidy.',
      specs: [
        '1kW to 10kW On-Grid Solar Systems',
        'MNRE Approved Equipment & Tier-1 Panels',
        'Direct Government Subsidy & Net Metering Support',
        'Hassle Free Installation & 25-Year Panel Performance Warranty',
      ],
      badge: 'Popular Choice',
      cta: 'Know More & Apply',
    },
    {
      id: 'ev-bikes',
      category: 'ev',
      popular: false,
      icon: Bike,
      title: 'EV BIKES & SCOOTERS (2W)',
      tagline: 'Smart. Green. Secure. High performance electric 2-wheelers for Assam.',
      specs: [
        'Ultra-Low Running Cost (~15 to 20 Paise per Km)',
        'Zero Noise & Zero Tailpipe Pollution',
        'High Torque Engine & High Mileage Range',
        'Easy Bank Finance & Low Down-Payment Options',
      ],
      badge: 'Eco Mobility',
      cta: 'Explore EV Bikes',
    },
    {
      id: 'ev-auto',
      category: 'ev',
      popular: false,
      icon: Zap,
      title: 'EV AUTO (3W COMMERCIAL)',
      tagline: 'More Range. More Savings. Maximise your daily commercial income.',
      specs: [
        'Long Battery Range per Full Charge',
        'Ultra-Low Maintenance & Heavy Load Capacity',
        'High Passenger & Cargo Comfort',
        'Government Commercial Subsidy & Bank Finance Support',
      ],
      badge: 'Commercial Leader',
      cta: 'Explore EV Auto',
    },
    {
      id: 'solar-systems',
      category: 'solar',
      popular: false,
      icon: BatteryCharging,
      title: 'SOLAR ENERGY SYSTEMS (HYBRID)',
      tagline: '24/7 Reliable solar backup power for homes, offices & commercial setups.',
      specs: [
        'Hybrid Solar Inverters with Lithium Battery Storage',
        'Uninterrupted Power Supply during Assam Grid Outages',
        'Commercial & Institutional Customized Engineering',
        'Turnkey EPC (Engineering, Procurement & Construction)',
      ],
      badge: '24/7 Power',
      cta: 'Get Commercial Quote',
    },
  ];

  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeTab);

  return (
    <section id="solutions" className="py-24 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-bold text-blue-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>OUR CORE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Clean Energy & Electric Mobility for <span className="gradient-text-brand">Assam</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From residential solar rooftops to eco-friendly electric bikes, commercial autos, and regional distribution networks.
          </p>

          {/* Tab Filter buttons */}
          <div className="flex justify-center pt-4">
            <div className="p-1 bg-slate-900 rounded-2xl border border-slate-800 inline-flex space-x-1">
              {[
                { id: 'all', label: 'All Solutions' },
                { id: 'solar', label: 'Solar Rooftop & Systems' },
                { id: 'ev', label: 'EV Mobility (2W & 3W)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/90 border transition-all duration-300 flex flex-col justify-between relative group hover:shadow-2xl hover:-translate-y-1 ${item.popular ? 'border-amber-500/50 shadow-amber-950/20' : 'border-slate-800 hover:border-blue-500/40'}`}
              >
                {/* Popular Badge */}
                {item.popular && (
                  <span className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    POPULAR CHOICE
                  </span>
                )}

                <div className="space-y-6">
                  {/* Title & Icon Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="space-y-2.5 pt-2">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Full Installation & Warranty Support</span>
                  <button
                    onClick={() => onSelectSolution(item.title)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/40 hover:border-blue-500 transition-all shadow-md group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
