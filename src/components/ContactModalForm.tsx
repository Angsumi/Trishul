import React, { useState, useEffect, useId } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle2, Sparkles, Sun, Bike, Zap, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
  defaultKw?: number;
  defaultSubsidy?: number;
}

export const ContactModalForm: React.FC<ContactModalFormProps> = ({
  isOpen,
  onClose,
  defaultSolution = 'PM Surya Ghar Rooftop Solar',
  defaultKw,
  defaultSubsidy,
}) => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const cityId = useId();
  const solutionId = useId();
  const billId = useId();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Guwahati',
    solution: defaultSolution,
    monthlyBill: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSolution) {
      setFormData((prev) => ({ ...prev, solution: defaultSolution }));
    }
  }, [defaultSolution]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#22c55e', '#f59e0b', '#3b82f6'],
    });
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Trishul Innovations,\n\nI am interested in *${formData.solution}*.\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nMonthly Bill/Requirement: ${formData.monthlyBill || 'N/A'}${defaultKw ? `\nCalculated kW: ${defaultKw}kW (Subsidy ~₹${defaultSubsidy})` : ''}`
    );
    window.open(`https://wa.me/919181430285?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800/60 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE SITE VISIT & SUBSIDY ASSISTANCE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Get Free Consultation & Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your details below. Our regional team will contact you within 2 hours.
              </p>

              {defaultKw && (
                <div className="mt-3 p-3 rounded-xl bg-amber-950/80 border border-amber-500/40 text-xs text-amber-300 font-medium">
                  ⚡ Pre-calculated System: <strong>{defaultKw} kW Rooftop Solar</strong> (Estimated Govt Subsidy: <strong>₹{defaultSubsidy?.toLocaleString('en-IN')}</strong>)
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor={nameId} className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="e.g. Anupam Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={phoneId} className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="+91 98640 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor={cityId} className="block text-xs font-bold text-slate-300 mb-1">City / Town in Assam *</label>
                  <select
                    id={cityId}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Guwahati">Guwahati</option>
                    <option value="Dhemaji">Dhemaji</option>
                    <option value="Lakhimpur">Lakhimpur</option>
                    <option value="Dibrugarh">Dibrugarh</option>
                    <option value="Tinsukia">Tinsukia</option>
                    <option value="Jorhat">Jorhat</option>
                    <option value="Nagaon">Nagaon</option>
                    <option value="Tezpur">Tezpur</option>
                    <option value="Other Assam Location">Other Location in Assam</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={solutionId} className="block text-xs font-bold text-slate-300 mb-1">Interested Solution *</label>
                  <select
                    id={solutionId}
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="PM Surya Ghar Rooftop Solar">PM Surya Ghar Rooftop Solar</option>
                    <option value="EV Dealership & Channel Partner Program">EV Dealership & Channel Partner Program</option>
                    <option value="EV Bikes (2-Wheeler)">EV Bikes (2-Wheeler)</option>
                    <option value="EV Auto (Commercial 3-Wheeler)">EV Auto (3-Wheeler)</option>
                    <option value="Solar Energy Systems (Off-Grid/Hybrid)">Solar Energy Systems (Hybrid)</option>
                    <option value="Loan & Financing Assistance">Loan & Financing Assistance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={billId} className="block text-xs font-bold text-slate-300 mb-1">Monthly Electricity Bill</label>
                  <input
                    id={billId}
                    type="text"
                    placeholder="e.g. ₹3,500 / month"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-xl shadow-emerald-950/80 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry & Get Free Call Back</span>
              </button>
            </form>

            <div className="pt-3 border-t border-slate-800 text-center">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Or Connect Instantly via WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-emerald-950 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Thank You, {formData.name}!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Your inquiry for <strong className="text-emerald-400">{formData.solution}</strong> has been received by Trishul Innovations team.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-bold text-white">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">{formData.city}, Assam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-blue-400 font-bold">Assigned to Regional Technical Team</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white flex items-center justify-center space-x-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
