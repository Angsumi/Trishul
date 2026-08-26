import React, { useState, useId } from 'react';
import { Sun, Calculator, ArrowRight, ShieldCheck, IndianRupee, Sparkles, TrendingUp, Trees, Home, Building2, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

interface SolarSavingsCalculatorProps {
  onApplyForSystem: (systemKw: number, estimatedSubsidy: number) => void;
}

export const SolarSavingsCalculator: React.FC<SolarSavingsCalculatorProps> = ({ onApplyForSystem }) => {
  const billInputId = useId();
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);

  // PM Surya Ghar Calculation Formula
  const unitsPerMonth = Math.round(monthlyBill / 7.8);
  const rawKw = unitsPerMonth / 120;
  const recommendedKw = Math.min(Math.max(Math.ceil(rawKw * 2) / 2, 1), 10);

  let centralSubsidy = 0;
  if (recommendedKw <= 1) {
    centralSubsidy = 30000;
  } else if (recommendedKw <= 2) {
    centralSubsidy = 60000;
  } else {
    centralSubsidy = 78000;
  }

  const stateSubsidy = Math.min(recommendedKw * 17600, 52800);
  const totalSubsidy = centralSubsidy + stateSubsidy;

  const estimatedCostBeforeSubsidy = Math.round(recommendedKw * 55000);
  const netCost = Math.max(estimatedCostBeforeSubsidy - totalSubsidy, 10000);

  const monthlySavings = Math.round(monthlyBill * 0.90);
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings25Yrs = yearlySavings * 25;
  const paybackPeriodYears = (netCost / yearlySavings).toFixed(1);

  const co2OffsetTonsPerYear = (recommendedKw * 1.3).toFixed(1);
  const treesPlantedEquivalent = Math.round(recommendedKw * 65);

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#f59e0b', '#10b981', '#3b82f6'],
    });
  };

  const solarServices = [
    {
      title: 'Residential Solar',
      desc: 'Reliable rooftop solar solutions for homes with direct government subsidy.',
      icon: Home,
    },
    {
      title: 'Commercial Solar',
      desc: 'Efficient solar solutions for businesses and commercial establishments.',
      icon: Building2,
    },
    {
      title: 'PM Surya Ghar Assistance',
      desc: 'Support with the PM Surya Ghar process, documentation and installation.',
      icon: Sun,
    },
    {
      title: 'Solar Finance Assistance',
      desc: 'Guidance with available financing and loan documentation.',
      icon: IndianRupee,
    },
  ];

  return (
    <section id="surya-ghar" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-bold text-amber-300">
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>PM SURYA GHAR SOLAR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turn Your Rooftop into a <span className="gradient-text-solar">Power Plant</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Generate clean electricity from your own rooftop and reduce your dependence on conventional electricity. We assist customers throughout the solar journey—from consultation and documentation to installation and support.
          </p>
        </motion.div>

        {/* 4 Solar Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solarServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3 hover:border-amber-500/40 transition-colors shadow-lg"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Solar Calculator Box */}
        <div id="calculator" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">INTERACTIVE CALCULATOR</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Calculate Your Subsidy & Savings</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Input Controls */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-8 shadow-2xl flex flex-col justify-between text-left">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={billInputId} className="text-sm font-bold text-slate-200 flex items-center">
                    <IndianRupee className="w-4 h-4 text-amber-400 mr-1" />
                    <span>Monthly Electricity Bill</span>
                  </label>
                  <span className="text-2xl font-black text-amber-400 bg-amber-950/80 px-3 py-1 rounded-xl border border-amber-500/30">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  id={billInputId}
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => {
                    setMonthlyBill(Number(e.target.value));
                    handleCelebrate();
                  }}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                />
                
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>₹1,000 / mo</span>
                  <span>₹12,500 / mo</span>
                  <span>₹25,000+ / mo</span>
                </div>
              </div>

              {/* Instant Output Summary */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold">Recommended Solar Size:</span>
                  <span className="text-base font-extrabold text-amber-300">{recommendedKw} kW System</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold">Govt. Subsidy Support:</span>
                  <span className="text-base font-extrabold text-emerald-400">₹{totalSubsidy.toLocaleString('en-IN')}*</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
                  <span className="text-slate-400 font-semibold">Estimated Net Cost:</span>
                  <span className="text-base font-extrabold text-white">₹{netCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onApplyForSystem(recommendedKw, totalSubsidy)}
                className="w-full py-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-950/80 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Free Solar Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Savings & Impact Output Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-3 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400">MONTHLY SAVINGS</span>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">₹{monthlySavings.toLocaleString('en-IN')}</h4>
                  <p className="text-xs text-slate-400 mt-1">Saved on electricity bill every month</p>
                </div>
                <div className="pt-2 text-[11px] text-amber-300 font-semibold border-t border-slate-800">
                  ⚡ Payback Period: ~{paybackPeriodYears} Years
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-3 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">25-YEAR SAVINGS</span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">₹{lifetimeSavings25Yrs.toLocaleString('en-IN')}</h4>
                  <p className="text-xs text-slate-400 mt-1">Total lifetime financial returns</p>
                </div>
                <div className="pt-2 text-[11px] text-emerald-300 font-semibold border-t border-slate-800">
                  🛡️ 25-Year Performance Guarantee
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-3 flex flex-col justify-between sm:col-span-2 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-blue-400">ENVIRONMENTAL IMPACT</span>
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Trees className="w-4 h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-2xl font-black text-white">{co2OffsetTonsPerYear} Tons</h4>
                    <p className="text-xs text-slate-400 mt-0.5">CO₂ Offset / Year</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white">{treesPlantedEquivalent} Trees</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Equivalent Planted</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
