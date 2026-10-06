/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ServiceItem } from './data/business';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleOpenGeneralInquiry = () => {
    setSelectedService(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-neutral-200 selection:bg-red-600 selection:text-white pb-16 md:pb-0">
      {/* Top Header / Navigation */}
      <Navbar onOpenInquiry={handleOpenGeneralInquiry} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenInquiry={handleOpenGeneralInquiry} />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Service Inquiry Modal */}
      <InquiryModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Users */}
      <MobileQuickBar />
    </div>
  );
}
