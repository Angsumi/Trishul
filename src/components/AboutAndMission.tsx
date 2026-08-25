import React from 'react';
import { Eye, Target, Sparkles, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/LOGO.webp';

export const AboutAndMission: React.FC = () => {
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
                <p className="text-sm font-semibold text-emerald-400">Powering a Brighter Future</p>
                <div className="pt-2 flex justify-center items-center space-x-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Assam & Northeast India</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">FOCUS</span>
                  <span className="text-xs font-bold text-slate-200">Rooftop Solar & EV</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">COVERAGE</span>
                  <span className="text-xs font-bold text-slate-200">Entire Assam Region</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: About Us Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT TRISHUL INNOVATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Making Sustainable Technology <span className="gradient-text-emerald">Accessible & Affordable</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trishul Innovations is a socio-commercial private organization based in Assam, operating for over 5 years. Registered under <strong className="text-amber-400">Class-II Electrical Licensing Board (Govt of Assam License #8083 up to 11,000V)</strong>, <strong className="text-emerald-400">MSME UDYAM</strong>, <strong className="text-sky-400">NITI Aayog</strong>, and <strong className="text-teal-400">AMTRON (Dept of Electronics, Govt of Assam)</strong>, we are committed to making clean energy and EV technology accessible across Northeast India.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our core solutions include <strong className="text-white">PM Surya Ghar Rooftop Solar</strong>, <strong className="text-white">Solar Energy Systems</strong>, <strong className="text-white">EV Bikes & Autos</strong>, and <strong className="text-white">Authorized Regional EV Distribution</strong>. Alongside renewable energy, we actively conduct Skill Development Training (Electrical Wireman, Mechanical & Electronics) across multiple districts of Assam.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Through PM Surya Ghar, we empower homeowners and businesses to generate clean electricity with up to ₹1,30,800 subsidy. In parallel, our 2W and 3W EV mobility distribution network provides an economical, eco-friendly transport alternative for everyday commuters and commercial operators.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 text-xs text-slate-300 flex items-start space-x-3">
              <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                At Trishul Innovations, our focus is on quality products, professional service, transparent pricing, and long-term customer satisfaction. We aim to contribute towards a cleaner, greener, and more sustainable future for Assam.
              </p>
            </div>
          </div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-colors shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">OUR DIRECTION</span>
                <h3 className="text-2xl font-extrabold text-white">Our Vision</h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
              To become one of the most trusted names in solar energy and electric mobility solutions in Northeast India.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-amber-950 text-amber-400 border border-amber-800/60">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">OUR COMMITMENT</span>
                <h3 className="text-2xl font-extrabold text-white">Our Mission</h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
              To deliver reliable clean-energy and EV solutions that help our customers save money, reduce pollution, and move towards a sustainable future.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
