import React, { useState } from 'react';
import { Sun, Bike, Zap, CheckCircle2, ArrowRight, ShieldCheck, Award, BatteryCharging, Wrench, Headphones, FileText, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';

interface SolutionsSectionProps {
  onSelectSolution: (title: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'solar' | 'ev'>('all');

  const solarSpecs = [
    'Rooftop Solar Systems',
    'PM Surya Ghar Assistance',
    'Residential & Commercial Solar',
    'On-Grid Solar Solutions',
    'Installation & Commissioning',
    'Loan & Documentation Assistance',
    'After-Sales Support',
  ];

  const evSpecs = [
    'Electric Scooters',
    'Electric Bikes',
    'Electric Auto (3-Wheeler Commercial)',
    'Commercial EV Solutions',
    'Product & Technical Support',
    'After-Sales Service',
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-bold text-blue-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Clean Energy & <span className="gradient-text-brand">Electric Mobility</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Powering homes, businesses, and transportation across Assam and Northeast India.
          </p>

          {/* Tab Filter buttons */}
          <div className="flex justify-center pt-4">
            <div className="p-1 bg-slate-900 rounded-2xl border border-slate-800 inline-flex space-x-1">
              {[
                { id: 'all', label: 'All Solutions' },
                { id: 'solar', label: '☀️ Solar Energy' },
                { id: 'ev', label: '🛵 Electric Vehicles' },
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

        {/* Dual Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Solar Energy Solutions */}
          {(activeTab === 'all' || activeTab === 'solar') && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/50 shadow-2xl flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Sun className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40">
                    ☀️ Solar Energy
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Solar Energy Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                    Power your home or business with clean, reliable and cost-effective solar energy.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {solarSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Up to ₹1,30,800 Subsidy Assistance</span>
                <button
                  onClick={() => onSelectSolution('Solar Energy Solutions')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md transition-all"
                >
                  <span>Get Solar Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Card 2: Electric Vehicles */}
          {(activeTab === 'all' || activeTab === 'ev') && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-blue-500/50 shadow-2xl flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Bike className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-500/40">
                    🛵 Electric Vehicles
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Electric Vehicles
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                    Experience economical, reliable and environmentally friendly transportation with modern electric vehicles.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {evSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">2W & 3W Regional Dealership Network</span>
                <button
                  onClick={() => onSelectSolution('Electric Vehicles')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md transition-all"
                >
                  <span>Explore EV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
