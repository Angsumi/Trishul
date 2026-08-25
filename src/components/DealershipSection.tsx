import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Zap, Users, Wrench, Megaphone, Truck, Lock, FileCheck, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface DealershipSectionProps {
  onApplyDealership: () => void;
}

export const DealershipSection: React.FC<DealershipSectionProps> = ({ onApplyDealership }) => {
  const perks = [
    { title: 'Official Dealership Certificate', icon: Award, desc: 'Authorized regional accreditation & dealer credentials.' },
    { title: 'Company Branding', icon: Layers, desc: 'Complete brand identity assets & marketing guidelines.' },
    { title: 'Dealer Board', icon: Megaphone, desc: 'Official showroom signage & store display boards.' },
    { title: 'Product Training', icon: Zap, desc: 'In-depth technical knowledge of 2W & 3W EV vehicles.' },
    { title: 'Sales Training', icon: Users, desc: 'Proven sales strategies & customer engagement techniques.' },
    { title: 'Digital Marketing Creatives', icon: Megaphone, desc: 'Ready-to-use digital banners, videos & campaign assets.' },
    { title: 'Social Media Promotion', icon: Users, desc: 'Targeted local ad promotion for your dealership location.' },
    { title: 'Finance Support', icon: ShieldCheck, desc: 'Customer loan assistance via SBI, HDFC & IDFC FIRST.' },
    { title: 'Warranty Support', icon: FileCheck, desc: 'Hassle-free OEM warranty claim resolution.' },
    { title: 'Spare Parts Support', icon: Truck, desc: 'Guaranteed supply of genuine EV spare parts.' },
    { title: 'Service Training', icon: Wrench, desc: 'Technical workshop training for dealership mechanics.' },
    { title: 'Territory Protection', icon: Lock, desc: 'Exclusive regional territory rights across Assam.' },
  ];

  return (
    <section id="dealership" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Glow Effects - Blue & Gold */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-xs font-bold text-blue-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>REGIONAL EV DISTRIBUTION & DEALERSHIP NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Become an Authorized <span className="gradient-text-brand">EV Dealer / Channel Partner</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Trishul Innovations is expanding its EV distribution and dealer-network across Assam and Northeast India for 2-Wheeler & 3-Wheeler Electric Vehicles. Partner with us for full technical, marketing, and operational support.
          </p>
        </motion.div>

        {/* Highlight Objective Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-950 to-amber-950/60 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">OUR DISTRIBUTION OBJECTIVE</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Establishing Assam’s Most Reliable EV Distribution Network
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              We invite interested business partners, entrepreneurs, and showroom owners across all districts of Assam to join our network as Authorized Regional Distributors and Franchisees.
            </p>
          </div>
          <button
            onClick={onApplyDealership}
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shrink-0 flex items-center space-x-2 transition-all"
          >
            <span>Apply for Dealership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 12 Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-950/90 transition-all duration-300 text-left space-y-3 shadow-lg group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 w-fit group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">{perk.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Discussion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-8 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-4 max-w-2xl mx-auto shadow-2xl"
        >
          <h4 className="text-xl font-bold text-white">Request for Partnership Discussion</h4>
          <p className="text-xs text-slate-300">
            We would appreciate an opportunity to discuss the possibility of becoming your Authorized Regional Distributor / Channel Partner for Assam & Northeast.
          </p>
          <div className="pt-2">
            <button
              onClick={onApplyDealership}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-950/80 transition-all"
            >
              <span>Submit Dealership Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
