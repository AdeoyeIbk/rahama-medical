'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Hospital } from '@/types';
import { MagnifyingGlass, Hospital as HospitalIcon, MapPin, CheckCircle } from '@phosphor-icons/react';

export interface HospitalDiscoverySectionProps {
  hospitals: Hospital[];
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedState: string;
  setSelectedState: (val: string) => void;
  homeHospitalId: string | null;
  onSelectHomeHospital: (hosp: Hospital) => void;
}

export const HospitalDiscoverySection: React.FC<HospitalDiscoverySectionProps> = ({
  hospitals,
  searchQuery,
  setSearchQuery,
  selectedState,
  setSelectedState,
  homeHospitalId,
  onSelectHomeHospital
}) => {
  return (
    <section id="discovery" className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Find a <span className="text-[#0837ad]">Connected Hospital Near You</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Browse accredited healthcare facilities on the Rahama network and pick your primary hospital for managing your medical history.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-lg shadow-blue-900/5 flex flex-col sm:flex-row gap-4 items-center max-w-4xl mx-auto">
          <div className="w-full sm:flex-1 relative">
            <Input
              placeholder="Search hospital name, city, or specialty (e.g. Cardiology, LUTH)..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-2xl border-slate-200 focus:ring-[#0837ad] focus:border-[#0837ad]"
            />
            <MagnifyingGlass className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          </div>

          <select
            value={selectedState}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedState(e.target.value)}
            className="w-full sm:w-52 px-4 py-3 rounded-2xl border bg-white border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0837ad] transition-all"
          >
            <option value="ALL">All Nigerian States</option>
            <option value="Lagos State">Lagos State</option>
            <option value="FCT">FCT Abuja</option>
            <option value="Kano State">Kano State</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hospitals.map((hosp) => {
            const isHome = homeHospitalId === hosp.id;
            return (
              <div
                key={hosp.id}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-blue-200 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center">
                      <HospitalIcon className="w-6 h-6" />
                    </div>
                    {isHome ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0837ad] border border-blue-200">
                        <CheckCircle className="w-3.5 h-3.5" /> Primary Hospital
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        Connected Partner
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5 leading-snug">
                    {hosp.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-4 h-4 text-[#0837ad]" /> {hosp.city}, {hosp.state}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {hosp.services.map((srv: string) => (
                      <span
                        key={srv}
                        className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70 px-2.5 py-1 rounded-lg"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Lic: {hosp.licenseNumber}</span>
                  <button
                    onClick={() => onSelectHomeHospital(hosp)}
                    className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                      isHome
                        ? 'bg-blue-50 text-[#0837ad] border border-blue-200'
                        : 'bg-[#0837ad] hover:bg-[#062c8d] text-white shadow-sm'
                    }`}
                  >
                    {isHome ? 'Primary Selected' : 'Set as Main Hospital'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
