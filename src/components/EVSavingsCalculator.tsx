import React, { useState, useId } from 'react';
import { Bike, Zap, ArrowRight, TrendingUp, IndianRupee, ShieldCheck } from 'lucide-react';

interface EVSavingsCalculatorProps {
  onExploreEV: (vehicleType: string) => void;
}

export const EVSavingsCalculator: React.FC<EVSavingsCalculatorProps> = ({ onExploreEV }) => {
  const distanceInputId = useId();
  const [vehicleType, setVehicleType] = useState<'bike' | 'auto'>('bike');
  const [dailyKm, setDailyKm] = useState<number>(40);

  // Cost estimates in Assam
  // Petrol Bike: ~₹2.50 per km (40 km/l @ ₹100/L petrol)
  // EV Bike: ~₹0.18 per km (1.5 kWh full charge @ ₹7.5/unit gives 75 km)
  // Petrol Auto: ~₹4.50 per km
  // EV Auto: ~₹0.45 per km

  const petrolCostPerKm = vehicleType === 'bike' ? 2.50 : 4.50;
  const evCostPerKm = vehicleType === 'bike' ? 0.18 : 0.45;

  const monthlyKm = dailyKm * 26; // 26 working days/month
  const monthlyPetrolExpense = Math.round(monthlyKm * petrolCostPerKm);
  const monthlyEVExpense = Math.round(monthlyKm * evCostPerKm);
  
  const monthlySavings = monthlyPetrolExpense - monthlyEVExpense;
  const yearlySavings = monthlySavings * 12;
  const threeYearSavings = yearlySavings * 3;

  return (
    <section id="ev-calculator" className="py-16 bg-slate-900 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info & Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-emerald-400">
                <Zap className="w-3.5 h-3.5" />
                <span>EV SAVINGS CALCULATOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Much Can You Save with <span className="gradient-text-emerald">EV Mobility</span>?
              </h3>

              {/* Vehicle Type Switcher */}
              <div className="p-1.5 bg-slate-900 rounded-2xl border border-slate-800 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setVehicleType('bike')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${vehicleType === 'bike' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Bike className="w-4 h-4" />
                  <span>EV Bike (2-Wheeler)</span>
                </button>
                <button
                  onClick={() => setVehicleType('auto')}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${vehicleType === 'auto' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Zap className="w-4 h-4" />
                  <span>EV Auto (3-Wheeler)</span>
                </button>
              </div>

              {/* Daily Km Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <label htmlFor={distanceInputId}>Daily Commute / Run:</label>
                  <span className="text-emerald-400 text-base font-extrabold bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {dailyKm} km / day
                  </span>
                </div>

                <input
                  id={distanceInputId}
                  type="range"
                  min="10"
                  max={vehicleType === 'bike' ? 120 : 200}
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                />

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>10 km/day</span>
                  <span>{vehicleType === 'bike' ? '60 km/day' : '100 km/day'}</span>
                  <span>{vehicleType === 'bike' ? '120 km/day' : '200 km/day'}</span>
                </div>
              </div>

              <button
                onClick={() => onExploreEV(vehicleType === 'bike' ? 'EV Bikes' : 'EV Auto')}
                className="w-full py-3.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Explore Trishul {vehicleType === 'bike' ? 'EV Bikes' : 'EV Autos'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side Savings Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <span className="text-xs text-slate-400 font-semibold block">Monthly Running Cost</span>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Petrol Vehicle:</span>
                    <span className="text-red-400 font-bold line-through">₹{monthlyPetrolExpense.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Trishul EV Vehicle:</span>
                    <span className="text-emerald-400 font-extrabold text-sm">₹{monthlyEVExpense.toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Net Monthly Savings:</span>
                  <span className="text-amber-400 font-black text-lg">₹{monthlySavings.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-900 border border-emerald-500/40 space-y-4 shadow-xl">
                <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wider">Annual EV Savings</span>
                <h4 className="text-3xl font-black text-emerald-300">
                  ₹{yearlySavings.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400"> / year</span>
                </h4>
                <p className="text-xs text-slate-300">
                  In 3 years, you save <strong className="text-white">₹{threeYearSavings.toLocaleString('en-IN')}</strong> — practically paying back the cost of your vehicle!
                </p>
                <div className="pt-2 text-[11px] text-emerald-300 flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  <span>Combine with PM Surya Ghar solar for 100% Free Charging!</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
