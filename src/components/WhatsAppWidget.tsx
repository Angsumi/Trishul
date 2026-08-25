import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Hello Trishul Innovations, I would like to inquire about PM Surya Ghar Solar, EV Dealership & EV solutions in Assam.');
    window.open(`https://wa.me/919181430285?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="bg-slate-900 border border-emerald-500/40 text-slate-200 text-xs p-3 rounded-2xl shadow-2xl max-w-xs flex items-center space-x-3 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex-1">
            <p className="font-bold text-white text-[11px]">Chat with Trishul Experts</p>
            <p className="text-[10px] text-slate-400">Get PM Surya Ghar subsidy help on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all relative group"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950 animate-ping"></span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950"></span>
      </button>
    </div>
  );
};
