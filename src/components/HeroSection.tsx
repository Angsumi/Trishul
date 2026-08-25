import React from 'react';
import { Sun, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenContact: (defaultSolution?: string) => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenCalculator }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Logo Matched Background Glows: Blue + Gold + Emerald */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Scheme Badge - Blue & Amber */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-semibold text-blue-300 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-bold text-amber-400">PM SURYA GHAR</span>
              <span className="text-slate-500">•</span>
              <span>Central & Assam Govt Subsidy Scheme</span>
            </div>

            {/* Main Headline - Electric Blue + Solar Gold */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              PM SURYA GHAR <br />
              <span className="gradient-text-brand">MUFT BIJLI YOJANA</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-semibold text-amber-400/95 tracking-wide">
              Save Electricity. Save Money. Save Earth.
            </p>

            {/* Subsidy Highlight Card - Blue & Gold Logo Theme */}
            <div className="p-4.5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-amber-950/50 border border-amber-500/40 shadow-xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400 mt-0.5">
                    <Sun className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">Government Subsidy</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
                      UP TO ₹1,30,800<span className="text-sm font-normal text-amber-200/80">*</span>
                    </h3>
                    <p className="text-xs text-slate-300">Under PM Surya Ghar Muft Bijli Yojana Scheme</p>
                  </div>
                </div>
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-950 text-blue-300 border border-blue-500/40">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                    Assam Govt Approved
                  </span>
                </div>
              </div>
            </div>

            {/* Key Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Subsidy up to ₹1,30,800 directly in bank account',
                'Free Electricity up to 300 units every month',
                'Government Approved MNRE Solar Equipment',
                'Easy Installation & Minimal Maintenance (25-Yr Warranty)',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-slate-900/70 p-2.5 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact('PM Surya Ghar Rooftop Solar')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-xl shadow-blue-950/80 hover:shadow-blue-900/60 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Apply for Rooftop Solar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Check Your Eligibility & Savings</span>
              </button>
            </div>

            {/* Trust Footer Note */}
            <p className="text-xs text-slate-400 pt-1 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Trishul Innovations — Authorized Solar & EV Solutions across Guwahati & Assam.</span>
            </p>

          </motion.div>

          {/* Right Column: Clean Feature Card with Scroll Animation */}
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
                  <div>
                    <h3 className="text-sm font-bold text-white">Clean Energy & EV Highlights</h3>
                    <p className="text-[11px] text-slate-400">Assam PM Surya Ghar & EV Program</p>
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
                      <h4 className="text-xs font-bold text-white">PM Surya Ghar Rooftop</h4>
                      <p className="text-[11px] text-slate-400">1kW - 10kW On-Grid Systems</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-950/60 px-2 py-1 rounded">
                    ₹1.30L Subsidy
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">EV Bikes & EV Autos</h4>
                      <p className="text-[11px] text-slate-400">Low Running Cost (15p/km)</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-blue-400 bg-blue-950/60 px-2 py-1 rounded">
                    0 Pollution
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">Bank Financing Assistance</h4>
                      <p className="text-[11px] text-slate-400">SBI, HDFC, IDFC FIRST Bank</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded">
                    Up to 100% Loan
                  </span>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => onOpenContact()}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-amber-400 border border-amber-500/30 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Free Rooftop Survey in Assam</span>
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
