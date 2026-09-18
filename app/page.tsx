'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Hero } from '@/components/marketing/Hero';
import { ProblemStoryteller } from '@/components/marketing/ProblemStoryteller';
import { BeforeAfterVisual } from '@/components/marketing/BeforeAfterVisual';
import { JourneyTimeline } from '@/components/marketing/JourneyTimeline';
import { SecuritySection } from '@/components/marketing/SecuritySection';
import Link from 'next/link';
import { ArrowRight, Hospital, UserCheck, Heartbeat, Sparkle } from '@phosphor-icons/react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0837ad] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Revamped Reference-Matched Hero with Royal Blue Aura & 3 Phones */}
        <Hero />

        {/* 2. The Problem Storyteller (3 Tall Cards with Generous Breathing Room) */}
        <ProblemStoryteller />

        {/* 3. About Rahama Healthcare Ecosystem Section (Full-bleed alternating bg-[#f3f7fd]) */}
        <section className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Mission & Value Proposition */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                  Creating a connected healthcare ecosystem where medical records move{' '}
                  <span className="text-[#0837ad]">with the patient.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Rahama Digital Health is a digital health infrastructure platform. Its purpose is to enable patients to securely own and access their lifelong medical records while allowing healthcare providers to exchange authorized patient information across different healthcare facilities.
                </p>

                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 text-sm font-medium text-slate-700 flex items-start gap-4 card-soft-shadow">
                  <Heartbeat className="w-7 h-7 text-[#0837ad] shrink-0 mt-0.5" />
                  <div className="space-y-1 leading-relaxed">
                    <span className="font-bold text-slate-900 block font-heading text-base">
                      B2B2C Infrastructure Model
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Hospitals are paying partners, patients are the primary beneficiaries, and doctors deliver better continuity of care.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0837ad] hover:bg-[#062c8d] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Read Our Mission & Values</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Stakeholder Trio Cards with Consistent Padding & Clear Hierarchy */}
              <div className="lg:col-span-6 space-y-5">
                {/* 1. Hospitals Card */}
                <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-3xl border border-slate-200/80 card-soft-shadow hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center shrink-0">
                      <Hospital className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg font-heading text-slate-900">Hospitals & Clinics</h4>
                        <span className="text-[11px] font-mono font-semibold text-[#0837ad]">Institutional Partners</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Secure patient referrals, faster intake workflows, and seamless inter-facility interoperability without replacing existing EMR systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Patients Card */}
                <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-3xl border border-slate-200/80 card-soft-shadow hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center shrink-0">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg font-heading text-slate-900">Patients & Families</h4>
                        <span className="text-[11px] font-mono font-semibold text-[#0837ad]">Primary Beneficiaries</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Lifelong digital identity, complete ownership of medical history, and granular phone-based consent control over every record access.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Doctors Card */}
                <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-3xl border border-slate-200/80 card-soft-shadow hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center shrink-0">
                      <Heartbeat className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg font-heading text-slate-900">Physicians & Specialists</h4>
                        <span className="text-[11px] font-mono font-semibold text-[#0837ad]">Care Continuity</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Full clinical background on intake, zero repeat diagnostic tests, and AI-assisted clinical consultation note generation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Before / After Interactive Visual */}
        <BeforeAfterVisual />

        {/* 5. How It Works (6-step timeline) */}
        <JourneyTimeline />

        {/* 6. Bank-Grade Security Section */}
        <SecuritySection />

        {/* 7. Strong Final CTA Banner (Reference-Matched Rounded Card on alternating bg-[#f3f7fd]) */}
        <section className="py-24 sm:py-32 px-6 sm:px-16 lg:px-32 bg-[#f3f7fd]">
          <div className="max-w-6xl mx-auto rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#0837ad] via-[#0b3dc4] to-[#041d63] text-white p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl shadow-blue-900/15 border border-blue-400/20 relative overflow-hidden">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Ready to connect your facility to the{' '}
                <span className="text-blue-200">future of healthcare?</span>
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                Join leading healthcare organizations across Africa in building a connected ecosystem where care follows the patient.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-[#0837ad] font-semibold text-sm sm:text-base shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 text-[#0837ad]" />
                </Link>
                <Link
                  href="/hospital/register"
                  className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-medium text-sm sm:text-base transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Register Hospital Facility</span>
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

