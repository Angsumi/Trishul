import React from 'react';
import { Sun, Bike, Leaf, Plus, Equal, Sparkles, ArrowRight } from 'lucide-react';

interface SynergyBannerProps {
  onGetConsultation: () => void;
}

export const SynergyBanner: React.FC<SynergyBannerProps> = ({ onGetConsultation }) => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-950 to-amber-950/90 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ULTIMATE ZERO-COST LIFESTYLE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              One Step Towards A Better Future
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Combine your PM Surya Ghar Rooftop Solar with EV Mobility to charge your vehicles directly from the sun for <strong className="text-emerald-400">100% Free Travel</strong>.
            </p>
          </div>

          {/* Equation Visual */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-4xl mx-auto mb-10">
            
            {/* Box 1: Solar */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2 shadow-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sun className="w-6 h-6 animate-spin-slow" />
              </div>
              <h4 className="text-sm font-bold text-white">Solar Energy</h4>
              <p className="text-[11px] text-slate-400">Free Rooftop Electricity</p>
            </div>

            {/* Plus */}
            <div className="text-center text-slate-500 flex justify-center">
              <Plus className="w-8 h-8 text-amber-400" />
            </div>

            {/* Box 2: EV Mobility */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2 shadow-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Bike className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">EV Mobility</h4>
              <p className="text-[11px] text-slate-400">EV Bikes & EV Autos</p>
            </div>

            {/* Equals */}
            <div className="text-center text-slate-500 flex justify-center">
              <Equal className="w-8 h-8 text-emerald-400" />
            </div>

            {/* Box 3: Sustainable Future */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white text-center space-y-2 shadow-xl border border-emerald-400/40">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-extrabold">Sustainable Future</h4>
              <p className="text-[11px] text-emerald-100 font-medium">100% Cost Reduction</p>
            </div>

          </div>

          {/* Bottom Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-3xl mx-auto">
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Want to Save More?</h4>
              <p className="text-xs text-slate-300">Combine Solar Power with EV and reduce your household energy & travel cost up to 100%.</p>
            </div>
            <button
              onClick={onGetConsultation}
              className="px-6 py-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shrink-0 flex items-center space-x-1.5 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
