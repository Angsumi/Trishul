import React from 'react';
import { Eye, Target, Sparkles, ShieldCheck, HeartHandshake, MapPin, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/LOGO.webp';

export const AboutAndMission: React.FC = () => {
  const whyChooseUs = [
    'Quality Products',
    'Professional Installation',
    'Competitive Pricing',
    'Finance & Documentation Assistance',
    'Technical Support',
    'After-Sales Service',
    'Customer-Focused Approach',
    'Growing EV Network',
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main About Us Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Logo & Emblem Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden text-center group space-y-6">
              
              <div className="p-4 bg-white rounded-2xl border border-slate-200 max-w-xs mx-auto shadow-md">
                <img 
                  src={logoImg} 
                  alt="Trishul Innovations Logo" 
                  width="240"
                  height="66"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white tracking-tight">TRISHUL INNOVATIONS</h3>
                <p className="text-sm font-semibold text-amber-400">Powering a Greener & Smarter Future</p>
                <div className="pt-2 flex justify-center items-center space-x-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Assam & Northeast India</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">FOCUS</span>
                  <span className="text-xs font-bold text-slate-200">Solar & Electric Mobility</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">COVERAGE</span>
                  <span className="text-xs font-bold text-slate-200">Assam & Northeast</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: About Us Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ABOUT TRISHUL INNOVATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Building a Sustainable <span className="gradient-text-brand">Future Together</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trishul Innovations is a growing business focused on renewable energy and electric mobility solutions.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our goal is to make clean energy and electric vehicles more accessible, affordable and reliable for customers and businesses across Assam and Northeast India.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We work with customers, businesses and potential dealers to provide quality products, professional support and long-term service.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-blue-500/30 text-xs text-slate-300 flex items-start space-x-3">
              <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p>
                At Trishul Innovations, our focus is on quality products, professional service, competitive pricing, and long-term customer satisfaction.
              </p>
            </div>
          </div>

        </div>

        {/* Why Choose Trishul Innovations Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 border-t border-slate-900"
        >
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">WHY CHOOSE TRISHUL INNOVATIONS?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Your Trusted Partner for <span className="gradient-text-brand">Solar & EV Solutions</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-3 text-left hover:border-blue-500/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
