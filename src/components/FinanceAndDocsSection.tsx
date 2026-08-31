import React from 'react';
import { Landmark, FileCheck, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';

interface FinanceAndDocsSectionProps {
  onCheckLoanEligibility: () => void;
  onViewDocuments: () => void;
}

export const FinanceAndDocsSection: React.FC<FinanceAndDocsSectionProps> = ({
  onCheckLoanEligibility,
  onViewDocuments,
}) => {
  const documents = [
    { name: 'Aadhaar Card', desc: 'Identity & Address Proof of Applicant' },
    { name: 'Electricity Bill (Latest)', desc: 'Consumer ID verification for PM Surya Ghar' },
    { name: 'Property Proof / Land Document', desc: 'Rooftop ownership declaration' },
    { name: 'Cancelled Cheque / Bank Passbook', desc: 'Direct Govt Subsidy Bank Account Transfer' },
    { name: 'Passport Size Photo', desc: '2 Copies for MNRE Registration' },
  ];

  const loanPerks = [
    'Up to 100% Finance Available',
    'Low Interest Rate Schemes (PM Surya Ghar Special Rates)',
    'Easy Monthly EMI Options',
    'Minimal Documentation & Quick Sanction',
  ];

  const whyChooseUs = [
    { title: 'Experienced Team', desc: 'Certified engineers & solar technicians across Northeast India.' },
    { title: 'Quality Products', desc: 'MNRE Tier-1 solar modules & high efficiency batteries.' },
    { title: 'Affordable Price', desc: 'Transparent pricing with no hidden charges.' },
    { title: 'On-Time Installation', desc: 'Prompt deployment & grid connectivity.' },
    { title: 'Excellent After Sales Service', desc: 'Dedicated customer helpline & long-term maintenance.' },
  ];

  return (
    <section id="loans-subsidy" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Loan & Documentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Documents Required */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Documents Required</h3>
                  <p className="text-xs text-slate-400">For PM Surya Ghar Subsidy & Solar Connection</p>
                </div>
              </div>

              <div className="space-y-3">
                {documents.map((doc, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{doc.name}</h4>
                      <p className="text-[11px] text-slate-400">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Simplified verification process</span>
              <button
                onClick={onViewDocuments}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Check Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Loan & Financing Assistance */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-amber-950 text-amber-400 border border-amber-800/60">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Loan & Finance Assistance</h3>
                  <p className="text-xs text-slate-400">In Partnership with Leading Indian Banks</p>
                </div>
              </div>

              {/* Bank Logos / Partner Names */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-6">
                <span className="text-[11px] font-semibold text-slate-400 block mb-3 uppercase tracking-wider">Banking Partners:</span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-extrabold text-xs sm:text-sm">
                    All government banks + HDFC
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {loanPerks.map((perk, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={onCheckLoanEligibility}
                className="w-full py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg flex items-center justify-center space-x-2 transition-all"
              >
                <span>Check Your Loan Eligibility & EMI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose <span className="gradient-text-emerald">Trishul Innovations</span>?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Assam's preferred clean-energy partner delivering excellence, quality, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-lg bg-slate-900 text-amber-400 w-fit">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
