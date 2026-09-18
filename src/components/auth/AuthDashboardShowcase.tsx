'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Pulse,
  Heartbeat,
  Hospital,
  LockKey,
  ArrowsClockwise,
  FirstAid,
  UserCheck,
  FileText,
  TrendUp
} from '@phosphor-icons/react';

interface AuthDashboardShowcaseProps {
  type: 'patient' | 'hospital' | 'provider' | 'hospital_register';
}

export const AuthDashboardShowcase: React.FC<AuthDashboardShowcaseProps> = ({ type }) => {
  if (type === 'patient') {
    return (
      <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#0837ad] via-[#0940cc] to-[#041d63] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
        {/* Ambient Lighting */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-2 mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Effortlessly manage your health and care.
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
            Log in to access your lifelong medical timeline and manage doctor permissions in real time.
          </p>
        </div>

        {/* Elevated White Dashboard Mockup Card (Matching Reference Image) */}
        <div className="relative z-10 rounded-2xl bg-white p-4 lg:p-5 shadow-2xl text-slate-900 space-y-3.5 select-none border border-slate-100/80">
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center font-bold text-xs">
                AB
              </div>
              <div>
                <p className="text-xs font-bold font-heading text-slate-900 leading-tight">Amina Bello</p>
                <p className="text-[10px] font-mono text-slate-500">RH-8492-9102-NG</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
              <CheckCircle className="w-3 h-3 text-emerald-600" /> Active Consent
            </span>
          </div>

          {/* Quick Metrics Widgets (like Sellora Total Sales, Chat Performance) */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <p className="text-[9px] uppercase font-bold text-slate-400">Connected</p>
              <p className="text-sm font-bold font-heading text-slate-900">3 Clinics</p>
              <span className="text-[8px] text-emerald-600 flex items-center gap-0.5 mt-0.5 font-medium">
                <TrendUp className="w-2.5 h-2.5" /> 100% Synced
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <p className="text-[9px] uppercase font-bold text-slate-400">Records</p>
              <p className="text-sm font-bold font-heading text-slate-900">14 Entries</p>
              <span className="text-[8px] text-slate-500 mt-0.5 block font-medium">
                Lifelong History
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-left">
              <p className="text-[9px] uppercase font-bold text-[#0837ad]">Security</p>
              <p className="text-sm font-bold font-heading text-[#0837ad]">Protected</p>
              <span className="text-[8px] text-[#0837ad] mt-0.5 block font-medium">
                NDPA Compliant
              </span>
            </div>
          </div>

          {/* Recent Records Mini Table / Feed */}
          <div className="space-y-2 pt-0.5">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0837ad] flex items-center justify-center shrink-0">
                  <Pulse className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-900">LUTH General Hospital</p>
                  <p className="text-[9px] text-slate-500">Consultation Notes · Dr. Adebayo</p>
                </div>
              </div>
              <span className="text-[9px] text-slate-400 font-mono">10 Aug 2026</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0837ad] flex items-center justify-center shrink-0">
                  <FirstAid className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-900">Penicillin Allergy Warning</p>
                  <p className="text-[9px] text-slate-500">Verified Clinical Safety Alert</p>
                </div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0837ad] font-semibold font-mono text-[8px]">
                Flagged
              </span>
            </div>
          </div>

          {/* Micro Footer Inside Card */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <LockKey className="w-3 h-3 text-[#0837ad]" /> End-to-End Encrypted
            </span>
            <span>Bank-Grade Security</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'hospital') {
    return (
      <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#0837ad] via-[#0940cc] to-[#041d63] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-2 mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Effortlessly manage care continuity and intake.
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
            Log in to access your EMR interoperability gateway, coordinate patient referrals, and eliminate duplicate tests.
          </p>
        </div>

        {/* Elevated White Dashboard Mockup Card */}
        <div className="relative z-10 rounded-2xl bg-white p-4 lg:p-5 shadow-2xl text-slate-900 space-y-3.5 select-none border border-slate-100/80">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center font-bold text-xs">
                <Hospital className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold font-heading text-slate-900 leading-tight">LUTH Hospital Gateway</p>
                <p className="text-[10px] font-mono text-slate-500">Accreditation: HEFAMAA/2026/08</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
              <ArrowsClockwise className="w-3 h-3 text-emerald-600 animate-spin" /> Live Sync
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <p className="text-[9px] uppercase font-bold text-slate-400">Interoperable</p>
              <p className="text-sm font-bold font-heading text-slate-900">184 Clinics</p>
              <span className="text-[8px] text-emerald-600 flex items-center gap-0.5 mt-0.5 font-medium">
                <TrendUp className="w-2.5 h-2.5" /> Connected
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <p className="text-[9px] uppercase font-bold text-slate-400">Daily Intake</p>
              <p className="text-sm font-bold font-heading text-slate-900">248 Transfers</p>
              <span className="text-[8px] text-slate-500 mt-0.5 block font-medium">
                Real-time Sync
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-left">
              <p className="text-[9px] uppercase font-bold text-[#0837ad]">Latency</p>
              <p className="text-sm font-bold font-heading text-[#0837ad]">&lt; 1.2s</p>
              <span className="text-[8px] text-[#0837ad] mt-0.5 block font-medium">
                Zero Bottleneck
              </span>
            </div>
          </div>

          <div className="space-y-2 pt-0.5">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono text-[#0837ad] uppercase font-bold">Emergency Referral Intake</span>
                <p className="text-[11px] font-semibold text-slate-900">Patient: RH-8492-9102-NG</p>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-50 text-[#0837ad] border border-blue-100 font-semibold">
                Instant Consent
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-left">
              <div>
                <span className="text-[9px] font-mono text-[#0837ad] uppercase font-bold">EMR Bridge Adapter</span>
                <p className="text-[11px] font-semibold text-slate-900">HL7 / FHIR Standard Gateway</p>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Connected
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#0837ad]" /> Bank-Grade NDPA Certified
            </span>
            <span>Audit Trail Active</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'hospital_register') {
    return (
      <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#0837ad] via-[#0940cc] to-[#041d63] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-2 mb-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Bring your facility onto the connected care network.
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
            Join forward-thinking hospitals across Nigeria. Keep your existing software with zero staff retraining.
          </p>
        </div>

        {/* Elevated White Dashboard Mockup Card */}
        <div className="relative z-10 rounded-2xl bg-white p-4 lg:p-5 shadow-2xl text-slate-900 space-y-3.5 select-none border border-slate-100/80">
          <div className="pb-2 border-b border-slate-100">
            <p className="text-xs font-bold font-heading text-slate-900">Fast-Track Onboarding Pathway</p>
            <p className="text-[10px] text-slate-500">Typical integration timeline: under 7 business days</p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0837ad] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                1
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-900">Facility Accreditation Review</p>
                <p className="text-[9px] text-slate-500">State medical license and HEFAMAA verification</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0837ad] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                2
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-900">Non-Invasive EMR Bridge</p>
                <p className="text-[9px] text-slate-500">Secure FHIR adapter connects to your existing software</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0837ad] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                3
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-900">Clinical Staff Activation</p>
                <p className="text-[9px] text-slate-500">Instant patient QR scanning and record retrieval live</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#0837ad]" /> Fully NDPA Compliant
            </span>
            <span>24/7 Priority Support</span>
          </div>
        </div>
      </div>
    );
  }

  // Provider / Doctor portal
  return (
    <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#0837ad] via-[#0940cc] to-[#041d63] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-2 mb-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Complete clinical context at the point of care.
        </h2>
        <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
          Log in to access verified patient diagnostic history, active medication logs, and AI consultation notes.
        </p>
      </div>

      {/* Elevated White Dashboard Mockup Card */}
      <div className="relative z-10 rounded-2xl bg-white p-4 lg:p-5 shadow-2xl text-slate-900 space-y-3.5 select-none border border-slate-100/80">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center font-bold text-xs">
              Dr
            </div>
            <div>
              <p className="text-xs font-bold font-heading text-slate-900 leading-tight">Dr. Adebayo, MD</p>
              <p className="text-[10px] font-mono text-slate-500">MDCN/PAT/8892-NG · Verified</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[#0837ad] border border-blue-100 text-[10px] font-semibold">
            <LockKey className="w-3 h-3 text-[#0837ad]" /> Consented
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
            <p className="text-[9px] uppercase font-bold text-slate-400">Patient</p>
            <p className="text-xs font-bold font-heading text-slate-900 truncate">Amina Bello</p>
            <span className="text-[8px] text-slate-500 block mt-0.5">Female, 34</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-left">
            <p className="text-[9px] uppercase font-bold text-slate-400">Blood Group</p>
            <p className="text-xs font-bold font-heading text-slate-900">O+ Positive</p>
            <span className="text-[8px] text-emerald-600 block mt-0.5 font-medium">Verified</span>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-left">
            <p className="text-[9px] uppercase font-bold text-[#0837ad]">Allergies</p>
            <p className="text-xs font-bold font-heading text-[#0837ad]">Penicillin</p>
            <span className="text-[8px] text-[#0837ad] block mt-0.5 font-medium">Critical Alert</span>
          </div>
        </div>

        {/* AI Consultation Note Preview */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-left">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-slate-900 flex items-center gap-1">
              <FileText className="w-3 h-3 text-[#0837ad]" /> AI Clinical Documentation
            </span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0837ad] font-semibold font-mono">SOAP Sync</span>
          </div>
          <p className="text-[10px] text-slate-600 leading-snug">
            <strong className="text-slate-900">Assessment:</strong> Mild productive cough, lung fields clear. Medication history verified with LUTH pharmacy.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#0837ad]" /> Strict Role-Based Consent
          </span>
          <span>Zero Duplicate Testing</span>
        </div>
      </div>
    </div>
  );
};
