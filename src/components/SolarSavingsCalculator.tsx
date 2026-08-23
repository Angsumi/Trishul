import React, { useState, useId } from 'react';
import { Sun, Calculator, ArrowRight, ShieldCheck, IndianRupee, Sparkles, TrendingUp, Trees } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SolarSavingsCalculatorProps {
  onApplyForSystem: (systemKw: number, estimatedSubsidy: number) => void;
}

export const SolarSavingsCalculator: React.FC<SolarSavingsCalculatorProps> = ({ onApplyForSystem }) => {
  const billInputId = useId();
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);

  // PM Surya Ghar Calculation Formula
  // Average electricity cost in Assam approx ₹7.5 - ₹8.5 per unit
  // 1 kW solar generates ~120-130 units per month
  const unitsPerMonth = Math.round(monthlyBill / 7.8);
  
  // Recommended kW (approx 1kW for every 120 units/month, min 1kW, max 10kW)
  const rawKw = unitsPerMonth / 120;
  const recommendedKw = Math.min(Math.max(Math.ceil(rawKw * 2) / 2, 1), 10);

  // PM Surya Ghar Subsidy Structure:
  // Central Subsidy: 1 kW = ₹30,000 | 2 kW = ₹60,000 | 3 kW+ = ₹78,000
  // Assam State Add-on Subsidy: Up to ₹52,800 depending on rooftop eligibility
  let centralSubsidy = 0;
  if (recommendedKw <= 1) {
    centralSubsidy = 30000;
  } else if (recommendedKw <= 2) {
    centralSubsidy = 60000;
  } else {
    centralSubsidy = 78000;
  }

  // Combined Maximum Government Subsidy (up to ₹1,30,800)
  const stateSubsidy = Math.min(recommendedKw * 17600, 52800);
  const totalSubsidy = centralSubsidy + stateSubsidy;

  // Approx System Cost (₹50,000 - ₹55,000 per kW)
  const estimatedCostBeforeSubsidy = Math.round(recommendedKw * 55000);
  const netCost = Math.max(estimatedCostBeforeSubsidy - totalSubsidy, 10000);

  // Savings: up to 90% of electricity bill saved monthly
  const monthlySavings = Math.round(monthlyBill * 0.90);
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings25Yrs = yearlySavings * 25;
  const paybackPeriodYears = (netCost / yearlySavings).toFixed(1);

  // Environmental impact
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

  return (
    <section id="calculator" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-bold text-amber-300">
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>INTERACTIVE SOLAR CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="gradient-text-solar">PM Surya Ghar</span> Subsidy & Savings
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Enter your current monthly electricity bill to estimate your rooftop solar system size, government subsidy, and 25-year financial savings in Assam.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Input Controls */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-8 shadow-2xl flex flex-col justify-between">
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
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                onMouseUp={handleCelebrate}
                onTouchEnd={handleCelebrate}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />

              <div className="flex justify-between text-xs text-slate-400 font-medium mt-2">
                <span>₹1,000/mo</span>
                <span>₹10,000/mo</span>
                <span>₹25,000+/mo</span>
              </div>

              {/* Preset quick selectors */}
              <div className="pt-4">
                <span className="text-xs text-slate-400 font-semibold block mb-2">Quick Presets:</span>
                <div className="flex flex-wrap gap-2">
                  {[2000, 3500, 5000, 8000, 12000].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setMonthlyBill(val);
                        handleCelebrate();
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${monthlyBill === val ? 'bg-emerald-600 text-white border-emerald-400 shadow-md' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'}`}
                    >
                      ₹{val.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Sizing Output Summary */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Recommended System Sizing:</span>
                <span className="text-emerald-400 font-bold text-sm bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-800/60">
                  {recommendedKw} kW On-Grid
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Estimated Monthly Solar Generation:</span>
                <span className="text-slate-200 font-semibold">{unitsPerMonth} Units / Mo</span>
              </div>

              <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
                <span className="text-slate-400 font-medium">Govt Approved Equipment:</span>
                <span className="text-emerald-400 font-semibold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> MNRE Tier-1
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onApplyForSystem(recommendedKw, totalSubsidy)}
              className="w-full py-4 rounded-xl text-sm font-extrabold bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-xl shadow-emerald-950/80 hover:shadow-emerald-900/60 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Claim ₹{totalSubsidy.toLocaleString('en-IN')} Subsidy & Free Site Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Calculated Financial Breakdowns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Subsidy Highlight Card */}
            <div className="bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-900 border border-amber-500/40 p-6 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sun className="w-24 h-24 text-amber-400" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Government Subsidy</span>
                <h3 className="text-3xl sm:text-4xl font-black text-amber-300 mt-1">
                  ₹{totalSubsidy.toLocaleString('en-IN')}
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  Direct Bank Credit under PM Surya Ghar Muft Bijli Yojana scheme in Assam.
                </p>
              </div>
              <div className="pt-4 border-t border-amber-500/20 text-[11px] text-amber-200/90 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zero documentation hassle — handled end-to-end by Trishul Innovations.</span>
              </div>
            </div>

            {/* Net Out of Pocket Cost Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Net Out-of-Pocket Cost</span>
                <h3 className="text-3xl sm:text-4xl font-black text-white mt-1">
                  ₹{netCost.toLocaleString('en-IN')}
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Estimated cost after deducting ₹{totalSubsidy.toLocaleString('en-IN')} government subsidy.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>100% Loan Finance Available</span>
                <span className="text-emerald-400 font-bold">Easy EMI from ₹1,499/mo</span>
              </div>
            </div>

            {/* Monthly & Annual Savings */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Estimated Monthly Bill Saving</span>
                <h3 className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                  ₹{monthlySavings.toLocaleString('en-IN')}<span className="text-sm font-medium text-slate-400">/mo</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  Annual Savings: <strong className="text-white">₹{yearlySavings.toLocaleString('en-IN')} / year</strong>
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Payback Period:</span>
                <span className="text-amber-400 font-bold">{paybackPeriodYears} Years (ROI)</span>
              </div>
            </div>

            {/* 25-Year Lifetime Savings & CO2 Card */}
            <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/40 p-6 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">25-Year Lifetime Savings</span>
                <h3 className="text-3xl sm:text-4xl font-black text-emerald-300 mt-1">
                  ₹{lifetimeSavings25Yrs.toLocaleString('en-IN')}
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  Based on 25-year performance warranty of solar panels.
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-200">
                <span className="flex items-center space-x-1">
                  <Trees className="w-4 h-4 text-emerald-400" />
                  <span>{treesPlantedEquivalent} Trees Planted Eq.</span>
                </span>
                <span className="text-[11px] bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300">
                  {co2OffsetTonsPerYear} Tons CO2 / Yr
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
