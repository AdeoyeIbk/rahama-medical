'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { hospitalService } from '@/services/hospital.service';
import { Hospital } from '@/types';
import { BeforeAfterVisual } from '@/components/marketing/BeforeAfterVisual';
import { HospitalDiscoverySection } from '@/components/marketing/HospitalDiscoverySection';

export default function SolutionPage() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');
  const [homeHospitalId, setHomeHospitalId] = useState<string | null>('hosp-001');

  useEffect(() => {
    loadHospitals();
  }, [searchQuery, selectedState]);

  const loadHospitals = async () => {
    const res = await hospitalService.getHospitals(searchQuery, selectedState);
    if (res.success && res.data) {
      setHospitals(res.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#000066] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <Badge variant="orange" size="md">
              Solution Architecture
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
              One Record. Every Hospital. <span className="heading-accent text-white">Total Control.</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Rahama provides a lifelong digital health identity and consent-based authorization layer without replacing existing hospital EMR systems.
            </p>
          </div>
        </section>

        <BeforeAfterVisual />

        <HospitalDiscoverySection
          hospitals={hospitals}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          homeHospitalId={homeHospitalId}
          onSelectHomeHospital={(hosp) => setHomeHospitalId(hosp.id)}
        />
      </main>

      <Footer />
    </div>
  );
}
