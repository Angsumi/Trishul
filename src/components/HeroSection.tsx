import React from 'react';
import { Sun, Bike, Zap, ArrowRight, ShieldCheck, Award, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenContact: (defaultSolution?: string) => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenCalculator }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Gradients: Blue + Gold + Green Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mobile-First Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Brand Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-semibold text-blue-300 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-extrabold text-amber-400">TRISHUL INNOVATIONS</span>
              <span className="text-slate-500">•</span>
              <span>Powering a Greener & Smarter Future</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Solar Energy & <br />
              <span className="gradient-text-brand">Electric Mobility Solutions</span>
            </h1>

            {/* Core Mission Summary */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              We are committed to creating a cleaner, smarter and more sustainable future through reliable solar energy solutions and modern electric mobility across Assam and Northeast India.
            </p>

            {/* Dual Focus Pill Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Solar Solutions</h3>
                  <p className="text-[11px] text-slate-300">Rooftop Solar & PM Surya Ghar</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-amber-500/30 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Electric Mobility</h3>
                  <p className="text-[11px] text-slate-300">EV Scooters, Bikes & Autos</p>
                </div>
              </div>
            </div>

            {/* Mobile-First 3 Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => scrollToSection('surya-ghar')}
                className="px-5 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-950/60 transition-all flex items-center justify-center space-x-2 group"
              >
                <Sun className="w-4 h-4 text-slate-950" />
                <span>Explore Solar</span>
              </button>

              <button
                onClick={() => scrollToSection('ev-solutions')}
                className="px-5 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-xl shadow-blue-950/80 transition-all flex items-center justify-center space-x-2 group"
              >
                <Bike className="w-4 h-4 text-blue-300" />
                <span>Explore EV</span>
              </button>

              <button
                onClick={() => scrollToSection('dealership')}
                className="px-5 py-3.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Become a Dealer</span>
              </button>
            </div>

            {/* Trust Footer Note */}
            <p className="text-xs text-slate-400 pt-2 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Trishul Innovations — Authorized Solar & EV Solutions across Assam & Northeast India.</span>
            </p>

          </motion.div>

          {/* Right Column: Clean Interactive Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 sm:p-8 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-800/60 text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-white">Clean Energy & EV Hub</h3>
                    <p className="text-[11px] text-slate-400">Assam & Northeast Region</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-amber-950/80 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                  MNRE Approved
                </span>
              </div>

              {/* Feature Grid */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Solar Energy Solutions</h4>
                      <p className="text-[11px] text-slate-400">Rooftop Solar & PM Surya Ghar</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-950/60 px-2 py-1 rounded">
                    Save up to 90%
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Bike className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Electric Mobility</h4>
                      <p className="text-[11px] text-slate-400">EV Scooters, Bikes & Autos</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-blue-400 bg-blue-950/60 px-2 py-1 rounded">
                    Zero Fuel Cost
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Regional EV Dealership</h4>
                      <p className="text-[11px] text-slate-400">Franchise & Channel Partnering</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded">
                    12 Dealer Perks
                  </span>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => onOpenContact('Free Solar & EV Consultation')}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-amber-400 border border-amber-500/30 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Free Solar & EV Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Ambient Backlight */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
