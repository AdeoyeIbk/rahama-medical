'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { hospitalService } from '@/services/hospital.service';
import { Hospital } from '@/types';
import { BeforeAfterVisual } from '@/components/marketing/BeforeAfterVisual';
import { HospitalDiscoverySection } from '@/components/marketing/HospitalDiscoverySection';
import {
  ArrowRight,
  IdentificationCard,
  ArrowsClockwise,
  LockKey,
  ShieldCheck,
  Hospital as HospitalIcon,
  CheckCircle,
  Heartbeat,
  FirstAid,
  Baby,
  Pulse
} from '@phosphor-icons/react';

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

  const architectureLayers = [
    {
      layer: 'Layer 01',
      title: 'Universal Patient Digital Identity',
      subtitle: 'Patient-Controlled Health Sovereignty',
      desc: 'Every patient is provisioned a permanent, cryptographically verified Rahama Health ID. Medical history belongs to the patient—stored securely and accessed only when the patient approves.',
      icon: <IdentificationCard className="w-7 h-7 text-[#0837ad]" />,
      benefits: [
        'Dynamic QR code authentication on patient smartphone',
        'Works with SMS/USSD verification for non-smartphone users',
        'Lifelong portability across every accredited health facility',
        'Zero repeat blood tests or duplicate diagnostics'
      ]
    },
    {
      layer: 'Layer 02',
      title: 'Interoperability & Data Highway',
      subtitle: 'Zero-Disruption Facility Connectors',
      desc: 'Rahama operates as a vendor-neutral digital exchange layer. We integrate directly with existing hospital EMRs, diagnostic laboratories, and imaging centers using modern FHIR and HL7 protocols.',
      icon: <ArrowsClockwise className="w-7 h-7 text-[#0837ad]" />,
      benefits: [
        'Hospitals keep their existing software—no retraining needed',
        'Real-time automated sync of lab results, vitals, and notes',
        'Bank-grade TLS 1.3 encryption for in-transit data',
        'Zero vendor lock-in or proprietary record trapping'
      ]
    },
    {
      layer: 'Layer 03',
      title: 'Clinical Continuity & Insights',
      subtitle: 'Empowering Doctors at Point of Care',
      desc: 'Admitting physicians and specialists get instantaneous access to verified longitudinal medical history upon patient authorization, eliminating guesswork and saving lives.',
      icon: <Pulse className="w-7 h-7 text-[#0837ad]" />,
      benefits: [
        'Immediate alerts for drug allergies and chronic conditions',
        'Full chronological view of previous visits across all hospitals',
        'AI-assisted clinical consultation summaries and ICD-11 coding',
        'Instant emergency protocol with tamper-proof audit trails'
      ]
    }
  ];

  const caseStudies = [
    {
      caseNumber: 'Case 01',
      title: 'Emergency Transfer Between Facilities',
      scenario: 'A patient is involved in a road traffic incident in Ikeja and rushed to an urgent care clinic, then quickly transferred to a tertiary teaching hospital.',
      traditionalIssue: 'Paper records are delayed or lost in transit. The trauma surgical team has zero knowledge of the patient’s severe penicillin allergy or blood type.',
      rahamaSolution: 'The admitting trauma team scans the patient’s Rahama digital card. Within seconds, emergency blood typing, active medications, and allergy warnings are displayed on the clinical console.',
      icon: <FirstAid className="w-6 h-6 text-[#0837ad]" />
    },
    {
      caseNumber: 'Case 02',
      title: 'Chronic Condition & Multi-Specialist Care',
      scenario: 'A patient living with Type 2 Diabetes and Hypertension visits an endocrinologist in Lagos, a cardiologist in Abuja, and a local family clinic.',
      traditionalIssue: 'Each physician works with isolated partial records. The patient spends tens of thousands of Naira repeating HbA1c and lipid panel tests every few months.',
      rahamaSolution: 'All diagnostic labs and specialist prescription logs sync to one lifelong timeline. Both specialists review the exact same medication history and avoid redundant laboratory testing.',
      icon: <Pulse className="w-6 h-6 text-[#0837ad]" />
    },
    {
      caseNumber: 'Case 03',
      title: 'Maternal Care & Unscheduled Delivery',
      scenario: 'An expectant mother receives antenatal care at a private clinic, but goes into sudden premature labor while visiting relatives in another state.',
      traditionalIssue: 'The new hospital has no access to her gestational age scans, prenatal serology tests, or previous cesarean surgical notes.',
      rahamaSolution: 'The labor ward doctor requests instant access via the mother’s Rahama ID. With one tap on her phone, complete antenatal monitoring history is immediately available.',
      icon: <Baby className="w-6 h-6 text-[#0837ad]" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0837ad] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Full-bleed Immersive Royal Blue Hero Banner */}
        <section className="bg-gradient-to-b from-[#0837ad] via-[#0935a3] to-[#052370] text-white py-24 sm:py-32 relative overflow-hidden">
          {/* Ambient Lighting Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-blue-400/20 blur-[110px] rounded-full pointer-events-none" />

          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32 relative z-10 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              One Health Record. Every Hospital. <span className="text-blue-200">Total Control.</span>
            </h1>
            <p className="text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Rahama is the digital health interoperability highway connecting hospitals, clinics, and diagnostic labs across Africa—ensuring medical records follow the patient safely wherever care is needed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#architecture"
                className="px-8 py-4 rounded-full bg-white text-[#0837ad] font-semibold text-sm sm:text-base shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>How the Platform Works</span>
                <ArrowRight className="w-4 h-4 text-[#0837ad]" />
              </a>
              <a
                href="#discovery"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-medium text-sm sm:text-base transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Find Connected Hospitals</span>
              </a>
            </div>

            {/* Clean Feature Callouts Beneath Hero (Plain text, no pills) */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left border-t border-white/15">
              <div className="flex items-center gap-3">
                <LockKey className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">
                  Granular Patient Consent
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowsClockwise className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">
                  Universal EMR Compatibility
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">
                  Bank-Grade NDPA Compliance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Architecture: The 3 Core Infrastructure Layers (White Background) */}
        <section id="architecture" className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                A modern infrastructure layer connecting{' '}
                <span className="text-[#0837ad]">the entire continuum of care.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Rahama connects hospitals without replacing their existing software. Our three-layer architecture ensures security, speed, and absolute patient consent.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {architectureLayers.map((layer, idx) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#f8fafc] hover:bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 hover:border-blue-200 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center">
                        {layer.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0837ad] uppercase tracking-wider">
                        {layer.layer}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2 leading-snug">
                      {layer.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      {layer.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/70 space-y-2.5">
                    {layer.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#0837ad] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Interactive Before/After Visual (Alternating bg-[#f3f7fd]) */}
        <BeforeAfterVisual />

        {/* 4. Real-World Clinical Scenarios (White Background) */}
        <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                Designed for the realities of{' '}
                <span className="text-[#0837ad]">African healthcare.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Explore how Rahama eliminates dangerous information gaps across typical real-world medical encounters.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((cs, idx) => (
                <motion.div
                  key={cs.caseNumber}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#f8fafc] p-8 sm:p-10 rounded-3xl border border-slate-200/80 card-soft-shadow hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center">
                        {cs.icon}
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0837ad]">
                        {cs.caseNumber}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 leading-snug">
                      {cs.title}
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-600">
                        <strong className="block text-slate-900 font-semibold mb-1">Scenario:</strong>
                        {cs.scenario}
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200/80 text-slate-600">
                        <strong className="block text-slate-900 font-semibold mb-1">Traditional Failure:</strong>
                        {cs.traditionalIssue}
                      </div>

                      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-slate-700">
                        <strong className="block text-[#0837ad] font-semibold mb-1">With Rahama Connected:</strong>
                        {cs.rahamaSolution}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Hospital Discovery Directory (Alternating bg-[#f3f7fd]) */}
        <HospitalDiscoverySection
          hospitals={hospitals}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          homeHospitalId={homeHospitalId}
          onSelectHomeHospital={(hosp) => setHomeHospitalId(hosp.id)}
        />

        {/* 6. High-Impact CTA Banner (White Section with Royal Blue Card) */}
        <section className="py-24 sm:py-32 px-6 sm:px-16 lg:px-32 bg-white">
          <div className="max-w-6xl mx-auto rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#0837ad] via-[#0b3dc4] to-[#041d63] text-white p-10 sm:p-16 text-center space-y-8 shadow-2xl shadow-blue-900/15 border border-blue-400/20 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Bring your facility onto the{' '}
                <span className="text-blue-200">connected health network.</span>
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                Join forward-thinking hospitals, diagnostic clinics, and health systems across Nigeria. Secure integration takes less than one week.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-[#0837ad] font-semibold text-sm sm:text-base shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Request Facility Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#0837ad]" />
                </Link>
                <Link
                  href="/hospital/register"
                  className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-medium text-sm sm:text-base transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Register Facility Directly</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
