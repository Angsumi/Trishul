import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValueBadges } from './components/ValueBadges';
import { SolarSavingsCalculator } from './components/SolarSavingsCalculator';
import { EVSavingsCalculator } from './components/EVSavingsCalculator';
import { SolutionsSection } from './components/SolutionsSection';
import { SynergyBanner } from './components/SynergyBanner';
import { ProcessSection } from './components/ProcessSection';
import { FinanceAndDocsSection } from './components/FinanceAndDocsSection';
import { AboutAndMission } from './components/AboutAndMission';
import { AssamCoverage } from './components/AssamCoverage';
import { ContactModalForm } from './components/ContactModalForm';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSolution, setModalSolution] = useState('PM Surya Ghar Rooftop Solar');
  const [modalKw, setModalKw] = useState<number | undefined>(undefined);
  const [modalSubsidy, setModalSubsidy] = useState<number | undefined>(undefined);

  const handleOpenContact = (solution?: string) => {
    if (solution) setModalSolution(solution);
    setModalKw(undefined);
    setModalSubsidy(undefined);
    setModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForCalculatedSystem = (kw: number, subsidy: number) => {
    setModalSolution('PM Surya Ghar Rooftop Solar');
    setModalKw(kw);
    setModalSubsidy(subsidy);
    setModalOpen(true);
  };

  const handleSelectSolution = (title: string) => {
    handleOpenContact(title);
  };

  const handleSelectLocation = (city: string) => {
    handleOpenContact(`Service Inquiry for ${city}, Assam`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* Header & Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenContact={handleOpenContact}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Value Badges Bar */}
        <ValueBadges />

        {/* Solutions Section */}
        <SolutionsSection onSelectSolution={handleSelectSolution} />

        {/* PM Surya Ghar Solar Calculator */}
        <SolarSavingsCalculator onApplyForSystem={handleApplyForCalculatedSystem} />

        {/* EV Savings Calculator */}
        <EVSavingsCalculator onExploreEV={(veh) => handleOpenContact(veh)} />

        {/* Combined Solar + EV Synergy Banner */}
        <SynergyBanner onGetConsultation={() => handleOpenContact('Solar + EV Synergy Consultation')} />

        {/* Step-by-Step Process */}
        <ProcessSection onStartEnquiry={() => handleOpenContact('Site Visit Request')} />

        {/* Loans, Financing & Document Checklist */}
        <FinanceAndDocsSection
          onCheckLoanEligibility={() => handleOpenContact('Loan & Financing Assistance')}
          onViewDocuments={() => handleOpenContact('Document Verification Support')}
        />

        {/* About Us, Vision & Mission */}
        <AboutAndMission />

        {/* Assam Coverage Map / Cities */}
        <AssamCoverage onSelectLocation={handleSelectLocation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppWidget />

      {/* Contact & Quote Modal */}
      <ContactModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultSolution={modalSolution}
        defaultKw={modalKw}
        defaultSubsidy={modalSubsidy}
      />
    </div>
  );
}

export default App;
