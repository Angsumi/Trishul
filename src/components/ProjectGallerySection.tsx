import React, { useState } from 'react';
import { Camera, ShieldCheck, Award, FileCheck, CheckCircle2, Sparkles, Building2, Users } from 'lucide-react';

export const ProjectGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'solar' | 'ev' | 'team'>('all');

  const photos = [
    {
      title: 'Our Electric Scooter',
      category: 'ev',
      src: './gallery/Our electric Scooter.png',
      caption: 'High-efficiency 2-Wheeler EV Scooter for daily urban & rural commute in Assam.',
    },
    {
      title: 'Commercial Electric Vehicle',
      category: 'ev',
      src: './gallery/Another elctric motor vehicle.png',
      caption: 'Heavy-load 3-Wheeler Commercial EV Auto designed for commercial transit.',
    },
    {
      title: 'Installed Rooftop Solar System',
      category: 'solar',
      src: './gallery/Installed rooftop.png',
      caption: 'High-capacity PM Surya Ghar rooftop solar panel setup on residential premises in Guwahati.',
    },
    {
      title: 'Smart Meter & Electrical Installation',
      category: 'solar',
      src: './gallery/Installed meter and other system on a wall.png',
      caption: 'Net metering & smart meter infrastructure installed by certified Class-II technicians.',
    },
    {
      title: 'Solar Rooftop Working Team',
      category: 'team',
      src: './gallery/Our team at solar rooftop working site.png',
      caption: 'Trishul Innovations technical crew performing on-site rooftop solar deployment.',
    },
    {
      title: 'Customer Consultation & Advisory',
      category: 'team',
      src: './gallery/Our Agent with an client.png',
      caption: 'End-to-end solar consultation & subsidy guidance provided to local clients.',
    },
    {
      title: 'Our Happy Clients',
      category: 'team',
      src: './gallery/Our happy clients.png',
      caption: 'Satisfied homeowners & business owners enjoying zero electricity bill savings.',
    },
    {
      title: 'Solar Technician Training Session',
      category: 'team',
      src: './gallery/Solar worker\'s training session.png',
      caption: 'Skill Development Mission & wireman training session conducted by Trishul team.',
    },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const accreditations = [
    {
      title: 'Govt of Assam Electrical License',
      subtitle: 'Class-II Contractor Licence No. 8083 (Up to 11,000 Volts)',
      icon: Award,
      color: 'amber',
    },
    {
      title: 'MSME UDYAM Registration',
      subtitle: 'UDYAM-AS-03-0046792 Govt of India Certified',
      icon: ShieldCheck,
      color: 'emerald',
    },
    {
      title: 'NITI Aayog Govt of India',
      subtitle: 'Registered Socio-Commercial Organization',
      icon: FileCheck,
      color: 'sky',
    },
    {
      title: 'AMTRON Govt of Assam Partner',
      subtitle: 'Supporting Electronics & Smart Meter Programs',
      icon: Building2,
      color: 'teal',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>REAL FIELD PROJECTS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Work <span className="gradient-text-emerald">Across Assam</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore actual rooftop solar installations, EV vehicles, client interactions, training sessions, and official government certifications.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center pt-4">
            <div className="p-1 bg-slate-900 rounded-2xl border border-slate-800 inline-flex space-x-1">
              {[
                { id: 'all', label: 'All Showcase' },
                { id: 'solar', label: 'Rooftop & Meters' },
                { id: 'ev', label: 'EV Scooters & Autos' },
                { id: 'team', label: 'Team & Clients' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === tab.id ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold border border-emerald-500/40">
                  REAL PROJECT
                </span>
              </div>

              <div className="p-5 text-left space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations & Licenses Banner */}
        <div className="pt-8 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-extrabold text-white">Government Licenses & Registrations</h3>
            <p className="text-xs text-slate-400">Trishul Innovations is officially registered and recognized under Govt of Assam & Govt of India.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accreditations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-2 hover:border-slate-700 transition-colors">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 w-fit">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
