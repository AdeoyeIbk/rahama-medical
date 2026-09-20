'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { hospitalService } from '@/services/hospital.service';
import { CheckCircle } from '@phosphor-icons/react';

export default function HospitalRegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Lagos State');
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await hospitalService.registerHospital({
      name,
      licenseNumber,
      email,
      phone,
      address,
      city,
      state,
      primaryContactName: contactName,
      services: ['General Practice', 'Emergency Care', 'Laboratory Services']
    });

    setIsLoading(false);
    if (res.success) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8edfc] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative selection:bg-[#0837ad] selection:text-white">
      {/* Centered White Card (Exact Match to Invooce Reference) */}
      <div className="w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[32px] shadow-xl shadow-blue-900/5 border border-slate-100 p-8 sm:p-12 lg:p-14 relative">
        
        {/* Top Header: Logo on Left, Portal Badge on Right */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#0837ad] flex items-center justify-center p-1.5 shadow-sm transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/rahama-logo-white.png"
                alt="Rahama Logo"
                width={28}
                height={28}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-base font-black font-heading tracking-tight text-slate-900">
              Rahama
            </span>
          </Link>
          <span className="text-[11px] font-semibold text-[#0837ad] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Facility Onboarding
          </span>
        </div>

        {/* Center Title & Greeting */}
        <div className="text-center space-y-1 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Register Facility
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Join the connected healthcare network 🏥
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Application Submitted</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your verification request for <strong>{name}</strong> is under review by Rahama Network Auditors.
            </p>
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-mono">
              Status: PENDING_VERIFICATION (Ref: LIC-VERIF-2026-991)
            </div>
            <div className="pt-3 flex justify-center gap-4">
              <Button variant="primary" onClick={() => router.push('/hospital/dashboard')} className="rounded-xl px-6 py-3">
                Proceed to Hospital Dashboard
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  Hospital Facility Name
                </label>
                <input
                  placeholder="e.g. St. Nicholas Hospital"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  License / Accreditation No.
                </label>
                <input
                  placeholder="e.g. HEFAMAA/SNH/2024/110"
                  required
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  Official Facility Email
                </label>
                <input
                  type="email"
                  placeholder="admin@hospital.org"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  Contact Phone
                </label>
                <input
                  placeholder="+234 800 000 0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-semibold text-slate-700">
                Physical Facility Address
              </label>
              <input
                placeholder="14 Hospital Road, Victoria Island"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  City
                </label>
                <input
                  placeholder="Lagos"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold text-slate-700">
                  State / Region
                </label>
                <input
                  placeholder="Lagos State"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-semibold text-slate-700">
                Primary Medical Administrator Name
              </label>
              <input
                placeholder="Dr. Medical Director Name"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full rounded-xl py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-900/15"
                isLoading={isLoading}
              >
                Submit Verification Application
              </Button>
            </div>
          </form>
        )}

        {/* Bottom Switch Links */}
        <div className="mt-8 text-center text-xs text-slate-500 space-y-2">
          <p>
            Already have an account?{' '}
            <Link href="/hospital/login" className="text-[#0837ad] font-semibold hover:underline inline-flex items-center gap-0.5">
              Sign In ↗
            </Link>
          </p>
          <div>
            <Link href="/" className="text-slate-500 hover:text-slate-800 transition-colors">
              ← Return to Public Website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
