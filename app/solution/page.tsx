'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { hospitalService } from '@/services/hospital.service';
import { Hospital } from '@/types';
import { BeforeAfterVisual } from '@/components/marketing/BeforeAfterVisual';
import { MagnifyingGlass, Hospital as HospitalIcon, MapPin, CheckCircle, ShieldCheck } from '@phosphor-icons/react';

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

  const handleSelectHomeHospital = (hosp: Hospital) => {
    setHomeHospitalId(hosp.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        {/* Solution Hero */}
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

        {/* Before / After Interactive Visual */}
        <BeforeAfterVisual />

        {/* Hospital Discovery & Home Hospital Selection Section */}
        <section id="discovery" className="py-20 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Hospital Discovery</span>
              <h2 className="text-3xl font-extrabold font-heading text-[#000066] dark:text-white">
                Find & Select a <span className="heading-accent">Participating Rahama Facility</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Patients can discover participating healthcare centers and designate their Home Hospital for primary record management.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:flex-1 relative">
                <Input
                  placeholder="Search hospital name, city, or specialty (e.g. Cardiology, LUTH)..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <MagnifyingGlass className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>

              <select
                value={selectedState}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedState(e.target.value)}
                className="w-full sm:w-48 px-3.5 py-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#000066]"
              >
                <option value="ALL">All States</option>
                <option value="Lagos State">Lagos State</option>
                <option value="FCT">FCT Abuja</option>
                <option value="Kano State">Kano State</option>
              </select>
            </div>

            {/* Hospital Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitals.map((hosp) => {
                const isHome = homeHospitalId === hosp.id;
                return (
                  <Card key={hosp.id} className="flex flex-col justify-between hover:border-[#000066] transition-all">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-[#000066] dark:text-blue-300">
                          <HospitalIcon className="w-6 h-6" />
                        </div>
                        {isHome ? (
                          <Badge variant="orange" size="sm">
                            <CheckCircle className="w-3.5 h-3.5" /> Home Hospital
                          </Badge>
                        ) : (
                          <Badge variant="navy" size="sm">
                            Verified Partner
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">
                        {hosp.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#FF6600]" /> {hosp.city}, {hosp.state}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {hosp.services.map((srv: string) => (
                          <span key={srv} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">Lic: {hosp.licenseNumber}</span>
                      <Button
                        size="sm"
                        variant={isHome ? 'outline' : 'primary'}
                        onClick={() => handleSelectHomeHospital(hosp)}
                      >
                        {isHome ? 'Primary Selected' : 'Select as Home Hospital'}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
