import React, { useState, useId } from 'react';
import { Bike, Zap, ArrowRight, TrendingUp, IndianRupee, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface EVSavingsCalculatorProps {
  onExploreEV: (vehicleType: string) => void;
}

export const EVSavingsCalculator: React.FC<EVSavingsCalculatorProps> = ({ onExploreEV }) => {
  const distanceInputId = useId();
  const [vehicleType, setVehicleType] = useState<'bike' | 'auto'>('bike');
  const [dailyKm, setDailyKm] = useState<number>(40);

  const petrolCostPerKm = vehicleType === 'bike' ? 2.50 : 4.50;
  const evCostPerKm = vehicleType === 'bike' ? 0.18 : 0.45;

  const monthlyKm = dailyKm * 26;
  const monthlyPetrolExpense = Math.round(monthlyKm * petrolCostPerKm);
  const monthlyEVExpense = Math.round(monthlyKm * evCostPerKm);
  
  const monthlySavings = monthlyPetrolExpense - monthlyEVExpense;
  const yearlySavings = monthlySavings * 12;
  const threeYearSavings = yearlySavings * 3;

  const evCategories = [
    {
      title: 'Electric Scooters',
      desc: 'Smart, efficient and convenient for everyday travel.',
      icon: Bike,
    },
    {
      title: 'Electric Bikes',
      desc: 'Modern electric mobility with performance and efficiency.',
      icon: Zap,
    },
    {
      title: 'Electric Auto',
      desc: 'An economical solution for commercial and passenger transportation.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="ev-solutions" className="py-20 bg-slate-900 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-blue-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>ELECTRIC MOBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Drive Electric. Save More. <span className="gradient-text-brand">Go Further.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Electric mobility is the future of transportation. We aim to bring practical and economical EV solutions to customers across Assam and Northeast India.
          </p>
        </motion.div>

        {/* 3 EV Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-left space-y-4 hover:border-blue-500/50 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-blue-950 border border-blue-800 text-blue-400 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onExploreEV(cat.title)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>View EV Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EV Calculator Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info & Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>EV SAVINGS CALCULATOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Calculate Fuel Savings with <span className="gradient-text-brand">EV Mobility</span>
              </h3>

              {/* Vehicle Type Switcher */}
              <div className="p-1.5 bg-slate-900 rounded-2xl border border-slate-800 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setVehicleType('bike')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${vehicleType === 'bike' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Bike className="w-4 h-4" />
                  <span>EV Bike / Scooter</span>
                </button>
                <button
                  onClick={() => setVehicleType('auto')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${vehicleType === 'auto' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Zap className="w-4 h-4" />
                  <span>EV Auto (3W)</span>
                </button>
              </div>

              {/* Daily Distance Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <label htmlFor={distanceInputId}>Daily Commute Distance:</label>
                  <span className="text-amber-400 text-base font-black bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    {dailyKm} km / day
                  </span>
                </div>
                <input
                  id={distanceInputId}
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* Right Output Breakdown */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Monthly EV Savings</span>
                <h4 className="text-2xl font-black text-amber-400">₹{monthlySavings.toLocaleString('en-IN')}</h4>
                <p className="text-[10px] text-slate-500">Over Petrol Vehicle</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Yearly EV Savings</span>
                <h4 className="text-2xl font-black text-blue-400">₹{yearlySavings.toLocaleString('en-IN')}</h4>
                <p className="text-[10px] text-slate-500">Annual Net Fuel Savings</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase">3-Year Fuel Savings</span>
                <h4 className="text-2xl font-black text-emerald-400">₹{threeYearSavings.toLocaleString('en-IN')}</h4>
                <p className="text-[10px] text-slate-500">Recovers Vehicle Cost</p>
              </div>

              <div className="sm:col-span-3 pt-2">
                <button
                  onClick={() => onExploreEV(vehicleType === 'bike' ? 'Electric Scooters & Bikes' : 'Electric Auto (3-Wheeler)')}
                  className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>View EV Products & Get Dealership Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
