'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { hospitalService } from '@/services/hospital.service';
import { CheckCircle, ArrowLeft } from '@phosphor-icons/react';

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
    <div className="min-h-screen bg-[#000066] text-white py-12 px-4 flex flex-col justify-center items-center relative">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0837ad] flex items-center justify-center p-1.5 shadow-lg border border-blue-400/20 overflow-hidden">
              <Image
                src="/rahama-logo-white.png"
                alt="Rahama Digital Health Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span className="text-xl font-bold font-heading tracking-tight text-white leading-tight">
                RAHAMA <span className="text-blue-300">ONBOARDING</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase leading-none">
                DIGITAL HEALTH
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold font-heading text-white">Hospital Facility Verification</h1>
          <p className="text-xs text-blue-200">
            Submit medical accreditation details for verification onto the Rahama Digital Health Network.
          </p>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-white">Application Submitted</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your hospital verification request for <strong>{name}</strong> is currently pending review by Rahama Network Auditors.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
                Status: PENDING_VERIFICATION (Ref: LIC-VERIF-2026-991)
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <Button variant="primary" onClick={() => router.push('/hospital/dashboard')}>
                  Proceed to Hospital Dashboard
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Hospital Facility Name"
                  placeholder="e.g. St. Nicholas Hospital"
                  required
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
                <Input
                  label="Medical Accreditation / License No."
                  placeholder="e.g. HEFAMAA/SNH/2024/110"
                  required
                  value={licenseNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLicenseNumber(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Official Facility Email"
                  type="email"
                  placeholder="admin@hospital.org"
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
                <Input
                  label="Contact Phone"
                  placeholder="+234 800 000 0000"
                  required
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
              </div>

              <Input
                label="Physical Facility Address"
                placeholder="14 Hospital Road, Victoria Island"
                required
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                className="bg-slate-950 border-slate-700 text-white"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="City"
                  placeholder="Lagos"
                  required
                  value={city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
                <Input
                  label="State / Region"
                  placeholder="Lagos State"
                  required
                  value={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-white"
                />
              </div>

              <Input
                label="Primary Medical Administrator Name"
                placeholder="Dr. Medical Director Name"
                required
                value={contactName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactName(e.target.value)}
                className="bg-slate-950 border-slate-700 text-white"
              />

              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
                Submit Verification Application
              </Button>
            </form>
          )}
        </Card>

        <div className="text-center">
          <Link href="/hospital/login" className="text-xs text-blue-200 hover:text-white flex items-center justify-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Already registered? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
