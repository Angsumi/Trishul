import React from 'react';
import { Sun, Bike, Leaf, Plus, Equal, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SynergyBannerProps {
  onGetConsultation: () => void;
}

export const SynergyBanner: React.FC<SynergyBannerProps> = ({ onGetConsultation }) => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Commitment Banner Card */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-blue-950 via-slate-950 to-amber-950/90 border border-blue-500/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-10"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section 1: Our Commitment */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-xs font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>OUR COMMITMENT</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Clean Energy. Smart Mobility. <span className="gradient-text-brand">Better Future.</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              At Trishul Innovations, we believe that the future belongs to clean energy and sustainable transportation. We are working towards building a strong network of customers, partners and dealers who share the vision of a greener and smarter future across Assam and Northeast India.
            </p>
          </div>

          {/* Synergy Visual Equation */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-4xl mx-auto">
            
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2 shadow-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sun className="w-6 h-6 animate-spin-slow" />
              </div>
              <h4 className="text-sm font-bold text-white">Solar Energy</h4>
              <p className="text-[11px] text-slate-400">Free Rooftop Electricity</p>
            </div>

            <div className="text-center text-slate-500 flex justify-center">
              <Plus className="w-8 h-8 text-amber-400" />
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2 shadow-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Bike className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">EV Mobility</h4>
              <p className="text-[11px] text-slate-400">EV Scooters & Autos</p>
            </div>

            <div className="text-center text-slate-500 flex justify-center">
              <Equal className="w-8 h-8 text-blue-400" />
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center space-y-2 shadow-xl border border-blue-400/40">
              <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-extrabold">Greener Future</h4>
              <p className="text-[11px] text-blue-100 font-medium">100% Zero Pollution</p>
            </div>

          </div>

          {/* Section 2: Let's Build a Greener Future Together */}
          <div className="pt-6 border-t border-slate-800/80 max-w-3xl mx-auto text-center space-y-4">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">LET'S BUILD A GREENER FUTURE TOGETHER</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you are looking for a solar solution for your home, an EV for your daily transportation, or an opportunity to start an EV dealership—we are here to help.
            </p>
            <div className="pt-2">
              <button
                onClick={onGetConsultation}
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl transition-all"
              >
                <span>Get in Touch With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
