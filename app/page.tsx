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
import { Button } from '@/components/ui/Button';
import { ArrowRight, Hospital, UserCheck, Heartbeat } from '@phosphor-icons/react/dist/ssr';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. The Problem Storyteller */}
        <ProblemStoryteller />

        {/* 3. About Rahama Story Banner */}
        <section className="py-20 bg-white dark:bg-[#080829] text-slate-900 dark:text-slate-100 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
                  Creating a connected healthcare ecosystem where medical records move <span className="heading-accent">with the patient.</span>
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rahama Digital Health is a digital health infrastructure platform. Its purpose is to enable patients to securely own and access their lifelong medical records while allowing healthcare providers to exchange authorized patient information across different healthcare facilities.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-3">
                  <Heartbeat className="w-6 h-6 text-[#FF6600] shrink-0" />
                  <span>
                    <strong>B2B2C Infrastructure Model:</strong> Hospitals are paying partners, patients are the primary beneficiaries, and doctors deliver better continuity of care.
                  </span>
                </div>
                <div>
                  <Link href="/about">
                    <Button variant="navy" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Read Our Mission & Values
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stakeholder Trio Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-2">
                  <Hospital className="w-8 h-8 text-[#000066] dark:text-blue-300 mx-auto" />
                  <h4 className="font-bold text-sm font-heading">Hospitals</h4>
                  <p className="text-[11px] text-slate-500">Secure referrals, patient retention, faster intake</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-2">
                  <UserCheck className="w-8 h-8 text-[#FF6600] mx-auto" />
                  <h4 className="font-bold text-sm font-heading">Patients</h4>
                  <p className="text-[11px] text-slate-500">Lifelong identity, total record ownership & consent</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-2">
                  <Heartbeat className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-sm font-heading">Doctors</h4>
                  <p className="text-[11px] text-slate-500">Full clinical history & AI-assisted note generation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Before / After Visual */}
        <BeforeAfterVisual />

        {/* 5. How It Works (6-step timeline) */}
        <JourneyTimeline />

        {/* 6. Security Section */}
        <SecuritySection />

        {/* 7. Strong Final CTA Banner */}
        <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Ready to connect your facility to the <span className="heading-accent text-white">future of healthcare?</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join leading healthcare organizations across Africa in building a connected ecosystem where care follows the patient.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/hospital/register">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10">
                  Register Hospital Facility
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
