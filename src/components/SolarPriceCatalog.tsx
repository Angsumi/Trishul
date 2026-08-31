import React, { useState } from 'react';
import { 
  Sun, CheckCircle2, ArrowRight, 
  ExternalLink, Printer
} from 'lucide-react';
import { motion } from 'motion/react';

import waareeLogo from '../assets/logos/waaree.png';
import tataLogo from '../assets/logos/tata.svg';
import adaniLogo from '../assets/logos/adani.svg';
import vikramLogo from '../assets/logos/vikram.webp';
import growattLogo from '../assets/logos/growatt.png';
import solisLogo from '../assets/logos/solis.svg';
import havellsLogo from '../assets/logos/havells.svg';

interface SolarPriceCatalogProps {
  onApplyForSystem: (kw: number, estimatedSubsidy: number) => void;
}

export const SolarPriceCatalog: React.FC<SolarPriceCatalogProps> = ({ onApplyForSystem }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'commercial'>('all');

  const solarPackages = [
    {
      kw: 1,
      category: 'residential',
      title: '1.0 kW Rooftop Solar Package',
      tagline: 'Basic Home Power Solution',
      grossPrice: 60000,
      centralSubsidy: 30000,
      stateSubsidy: 17600,
      netPrice: 12400,
      monthlyUnits: 120,
      monthlySavings: '₹900 - ₹1,000',
      emi: 350,
      popular: false,
      specs: [
        '2x 550W TOPCon Bifacial Panels',
        '1 kW Grid-Tied IP65 Inverter',
        'Hot-Dipped Galvanized Structure',
        'Net-metering & APDCL approval'
      ]
    },
    {
      kw: 2,
      category: 'residential',
      title: '2.0 kW Rooftop Solar Package',
      tagline: 'Standard Family Home Solution',
      grossPrice: 115000,
      centralSubsidy: 60000,
      stateSubsidy: 35200,
      netPrice: 19800,
      monthlyUnits: 240,
      monthlySavings: '₹1,800 - ₹2,000',
      emi: 550,
      popular: false,
      specs: [
        '4x 550W N-Type TOPCon Panels',
        '2 kW Smart Grid Inverter',
        'Complete Earthing & SPD Protection',
        'Free Wi-Fi App Remote Monitoring'
      ]
    },
    {
      kw: 3,
      category: 'residential',
      title: '3.0 kW Maximum Subsidy Package',
      tagline: 'Full 3-4 BHK Household Power Plant',
      grossPrice: 165000,
      centralSubsidy: 78000,
      stateSubsidy: 52800,
      netPrice: 34200,
      monthlyUnits: 360,
      monthlySavings: '₹2,700 - ₹3,200',
      emi: 950,
      popular: true,
      specs: [
        '6x 550W TOPCon Bifacial Modules',
        '3 kW Dual MPPT IP65 Inverter',
        'Supports 1.5T AC + Heavy Load',
        'Max Direct Subsidy ₹1,30,800'
      ]
    },
    {
      kw: 5,
      category: 'residential',
      title: '5.0 kW Premium Villa Package',
      tagline: 'High Consumption Residential Solution',
      grossPrice: 265000,
      centralSubsidy: 78000,
      stateSubsidy: 52800,
      netPrice: 134200,
      monthlyUnits: 600,
      monthlySavings: '₹4,500 - ₹5,000',
      emi: 3400,
      popular: false,
      specs: [
        '10x 550W Tier-1 Mono PERC Panels',
        '5 kW 3-Phase / 1-Phase Inverter',
        'Heavy Wind Rated Mounting Structure',
        '25-Year Performance Output Warranty'
      ]
    },
    {
      kw: 10,
      category: 'residential',
      title: '10.0 kW Mansion & Commercial',
      tagline: 'Luxury Residence & Commercial Unit',
      grossPrice: 510000,
      centralSubsidy: 78000,
      stateSubsidy: 52800,
      netPrice: 379200,
      monthlyUnits: 1200,
      monthlySavings: '₹9,000 - ₹10,500',
      emi: 9300,
      popular: false,
      specs: [
        '18x 550W High-Efficiency Solar PV',
        '10 kW Commercial Grade Inverter',
        'End-to-End HT/LT APDCL Clearance',
        '25-Year Linear Power Warranty'
      ]
    },
    {
      kw: 25,
      category: 'commercial',
      title: '25.0 kW Commercial & Industrial',
      tagline: 'Factory, Hotel & Tea Estate Solar',
      grossPrice: 1175000,
      centralSubsidy: 0,
      stateSubsidy: 0,
      netPrice: 1175000,
      taxBenefit: '40% Accelerated Depreciation',
      monthlyUnits: 3000,
      monthlySavings: '₹22,000 - ₹25,000',
      emi: 28000,
      popular: false,
      specs: [
        '45x 550W Tier-1 Bifacial PV Panels',
        '25 kW Heavy Duty Industrial Inverter',
        'Accelerated Tax Depreciation Savings',
        'Estimated Payback: ~3.2 Years'
      ]
    }
  ];

  const filteredPackages = solarPackages.filter(pkg => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  return (
    <section id="price-catalog" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-bold text-amber-300">
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>OFFICIAL SOLAR PRICE & SUBSIDY CATALOG 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing & <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">Direct Subsidies</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Standardized turnkey solar packages across Assam & Northeast India. Maximized PM Surya Ghar Central Subsidy (up to ₹78,000) and APDCL Assam State Subsidy (up to ₹52,800).
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a 
              href="solar-price-catalog.html" 
              target="_blank" 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition shadow-lg"
            >
              <ExternalLink className="w-4 h-4 text-amber-400" />
              <span>Open Standalone HTML Catalog</span>
            </a>
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print / Download Brochure</span>
            </button>
          </div>
        </motion.div>

        {/* Category Selector Tabs & Cards Grid */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Turnkey System Packages</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Standardized pricing with pre-certified Tier-1 components.</p>
            </div>

            <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(['all', 'residential', 'commercial'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition capitalize ${selectedCategory === cat ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'}`}
                >
                  {cat === 'all' ? 'All Packages' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.kw}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? 'border-amber-500/80 shadow-xl shadow-amber-500/10' : 'border-slate-800 hover:border-slate-700'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase shadow-lg">
                    🔥 Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-start pt-1">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                        {pkg.kw.toFixed(1)} kW System
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1">{pkg.title}</h4>
                    </div>
                    <div className="text-right">
                      {pkg.grossPrice !== pkg.netPrice && (
                        <div className="text-[11px] text-slate-400 line-through">MRP ₹{pkg.grossPrice.toLocaleString('en-IN')}</div>
                      )}
                      <div className="text-2xl font-black text-amber-400">₹{pkg.netPrice.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] text-emerald-400 font-semibold">Net Out-of-Pocket</div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">{pkg.tagline}</p>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Gross System Price:</span>
                      <span className="font-semibold text-white">₹{pkg.grossPrice.toLocaleString('en-IN')}</span>
                    </div>
                    {pkg.centralSubsidy > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Central Subsidy:</span>
                        <span className="font-bold">₹{pkg.centralSubsidy.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    {pkg.stateSubsidy > 0 && (
                      <div className="flex justify-between text-blue-400">
                        <span>Assam State Subsidy:</span>
                        <span className="font-bold">₹{pkg.stateSubsidy.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-white text-xs">
                      <span>Est. Monthly Savings:</span>
                      <span className="text-emerald-400">{pkg.monthlySavings}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {pkg.specs.map((spec, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onApplyForSystem(pkg.kw, pkg.centralSubsidy + pkg.stateSubsidy)}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specifications Matrix Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-300 shadow-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xl font-black text-slate-950">BOM Specifications & Tier-1 Quality Standards</h3>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
              Strictly MNRE Approved Standards
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-900">
              <thead className="bg-slate-950 text-white uppercase font-extrabold border-b border-slate-300 text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Component Category</th>
                  <th className="py-3.5 px-4 sm:px-6">Brand / Make</th>
                  <th className="py-3.5 px-4 sm:px-6">Specification Details</th>
                  <th className="py-3.5 px-4 sm:px-6">Warranty & Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">☀️</span> <span>Solar PV Modules</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">Waaree / Tata / Adani / Vikram</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    <strong className="text-slate-950 font-black">550Wp+ N-Type TOPCon / Mono PERC Bifacial</strong>, <strong className="text-emerald-700 font-bold">&gt;22% Module Efficiency</strong>, IP68 Junction Box
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-black text-emerald-700">12-Yr Product | 25-Yr Performance (84.8%)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">⚡</span> <span>Solar Inverters</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">Growatt / Solis / Sungrow / Microtek</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    <strong className="text-slate-950 font-black">Dual MPPT Grid-Tied / Hybrid Sinewave</strong>, <strong className="text-slate-950 font-bold">IP65 Outdoor Rated</strong>, Wi-Fi Remote Cloud Monitoring
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-black text-emerald-700">10-Year Full Replacement Warranty</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">🏗️</span> <span>Mounting Structure</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">HDGI / Anodized Aluminium</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    Hot-Dipped Galvanized Iron (80 Micron Coating), <strong className="text-slate-950 font-black">Engineered for 170 km/h Wind Resistance</strong>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-black text-emerald-700">25-Year Anti-Corrosion Guarantee</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">🛡️</span> <span>Protection & Safety</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">Schneider / Havells / L&T</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    ACDB & DCDB Box with <strong className="text-slate-950 font-black">Type II Surge Protection (SPD)</strong>, MCB, Class-A Copper Lightning Arrester
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">5-Year Warranty</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">🔌</span> <span>Cables & Earthing</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">Polycab / Finolex / Havells</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    UV-Resistant DC Solar Cables (4mm²/6mm²), <strong className="text-slate-950 font-black">3-Pit Maintenance-Free Chemical Earthing Rods</strong>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">BIS Certified Standard</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 sm:px-6 font-black text-slate-950 flex items-center gap-2">
                    <span className="text-lg">📊</span> <span>Net-Metering & Documentation</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900">APDCL Approved Metering</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    <strong className="text-slate-950 font-black">End-to-end net-meter feasibility</strong>, sanction load approval, CEIG inspection, Subsidy Portal upload
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-black text-emerald-700">Included in Package</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Official Brand Logos Grid Showcase */}
        <div className="border-t border-slate-800/80 pt-10 space-y-6">
          <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            Authorized Brand Partners & Equipment Manufacturers
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch justify-center">
            
            {/* Waaree Solar PV */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={waareeLogo} alt="Waaree Solar Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">WAAREE</div>
                <div className="text-[10px] font-semibold text-amber-600">Solar PV</div>
              </div>
            </div>

            {/* Tata Power Solar Systems */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={tataLogo} alt="Tata Power Solar Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">TATA POWER</div>
                <div className="text-[10px] font-semibold text-blue-600">Solar Systems</div>
              </div>
            </div>

            {/* Adani Solar */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={adaniLogo} alt="Adani Solar Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">ADANI</div>
                <div className="text-[10px] font-semibold text-emerald-600">Solar</div>
              </div>
            </div>

            {/* Vikram Solar Tier-1 Modules */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={vikramLogo} alt="Vikram Solar Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">VIKRAM SOLAR</div>
                <div className="text-[10px] font-semibold text-amber-600">Tier-1 Modules</div>
              </div>
            </div>

            {/* Growatt Inverters */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={growattLogo} alt="Growatt Inverters Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">GROWATT</div>
                <div className="text-[10px] font-semibold text-teal-600">Inverters</div>
              </div>
            </div>

            {/* Solis Smart Power */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={solisLogo} alt="Solis Smart Power Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">SOLIS</div>
                <div className="text-[10px] font-semibold text-orange-600">Smart Power</div>
              </div>
            </div>

            {/* Havells Solar Solutions */}
            <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 flex flex-col items-center justify-between space-y-2 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <div className="h-10 flex items-center justify-center">
                <img src={havellsLogo} alt="Havells Solar Logo" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-t border-slate-100 pt-1.5 w-full">
                <div className="text-[11px] font-extrabold text-slate-800 tracking-wide">HAVELLS</div>
                <div className="text-[10px] font-semibold text-red-600">Solar Solutions</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
