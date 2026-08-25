import React from 'react';
import { FileText, MapPin, FileCheck, Wrench, IndianRupee, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onStartEnquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartEnquiry }) => {
  const steps = [
    {
      num: '01',
      icon: FileText,
      title: 'Enquiry',
      desc: 'Submit your contact details or call our regional team for an initial consultation.',
    },
    {
      num: '02',
      icon: MapPin,
      title: 'Site Visit',
      desc: 'Our technical team visits your rooftop or premises anywhere in Assam & Northeast India.',
    },
    {
      num: '03',
      icon: FileCheck,
      title: 'Proposal',
      desc: 'Get optimal system design, capacity calculation & transparent quotation.',
    },
    {
      num: '04',
      icon: Wrench,
      title: 'Installation',
      desc: 'Fast, certified installation by experienced Class-II licensed solar & EV technicians.',
    },
    {
      num: '05',
      icon: IndianRupee,
      title: 'Subsidy & Net Metering',
      desc: 'Get bank subsidy credited & start enjoying up to 90% electricity bill savings.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-blue-300">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Simple 5-Step <span className="gradient-text-brand">Hassle-Free Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial site inspection to government subsidy credit and net metering activation, we handle everything for you across Northeast India.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 relative flex flex-col justify-between group hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg text-left"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-950 text-blue-300 border border-blue-800/60">
                      STEP {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-950 text-amber-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator except last step */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
