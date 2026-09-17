'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { SegmentedContactForm } from '@/components/forms/SegmentedContactForm';
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  CaretDown,
  ArrowRight,
  Hospital,
  LockKey
} from '@phosphor-icons/react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does it take for a hospital or clinic to integrate with Rahama?',
      a: 'Most healthcare facilities connect within 3 to 5 business days. Our integration engine operates via lightweight, secure FHIR and HL7 APIs and does not require replacing your current EMR or retraining staff on completely new systems.'
    },
    {
      q: 'Do patients pay to store, access, or transfer their medical records?',
      a: 'No. Rahama is 100% free for patients and their families for lifelong record ownership, consent authorization, and cross-hospital doctor sharing.'
    },
    {
      q: 'How does Rahama comply with the Nigeria Data Protection Act (NDPA)?',
      a: 'Patient consent is cryptographic and non-repudiable. Every single record access by a doctor generates an immutable, timestamped audit log visible on the patient’s phone. No health data is ever sold, leased, or accessed without explicit authorization.'
    },
    {
      q: 'Does Rahama replace our hospital’s current Electronic Medical Records (EMR) software?',
      a: 'No. Rahama is a digital interoperability layer that bridges existing EMR systems (such as OpenMRS, Helium Health, custom databases, etc.). Hospitals retain their primary day-to-day workflow while gaining seamless cross-facility referral capabilities.'
    },
    {
      q: 'What happens in a medical emergency if an admitted patient is unconscious?',
      a: 'Accredited emergency departments can initiate an audited Emergency Clinical Override using the patient’s Rahama ID. This immediately reveals critical life-saving blood type, allergies, and chronic conditions, while automatically sending an SMS alert to the patient’s designated emergency contacts.'
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
              Connect With <span className="text-blue-200">Rahama Digital Health</span>
            </h1>
            <p className="text-base sm:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Whether you represent an accredited hospital facility, medical practice, research partner, or patient inquiry, our infrastructure team is ready to support you.
            </p>
          </div>
        </section>

        {/* 2. Main Contact Grid (Alternating bg-[#f3f7fd]) */}
        <section className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct Channels & Operational Hubs */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                    Dedicated support for <span className="text-[#0837ad]">hospitals and patients.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                    Reach our technical integration engineers, clinical liaison specialists, or data privacy officers directly.
                  </p>
                </div>

                {/* Direct Department Channels */}
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 card-soft-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center shrink-0">
                        <Hospital className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase font-bold text-[#0837ad]">Hospital Facility Onboarding</span>
                        <p className="text-sm font-semibold text-slate-900">hospitals@rahamadigital.com</p>
                        <p className="text-xs text-slate-500">API integration & facility onboarding assistance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 card-soft-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase font-bold text-[#0837ad]">Emergency Clinical Hotline</span>
                        <p className="text-sm font-semibold text-slate-900">+234 (0) 1 888 7242</p>
                        <p className="text-xs text-slate-500">24/7 priority support for hospital emergency departments</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 card-soft-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase font-bold text-[#0837ad]">Data Protection & Privacy Officer</span>
                        <p className="text-sm font-semibold text-slate-900">privacy@rahamadigital.com</p>
                        <p className="text-xs text-slate-500">Patient consent, NDPA compliance & data rights</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200/80 card-soft-shadow space-y-4">
                  <h3 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0837ad]" />
                    <span>Regional Operating Centers</span>
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <div>
                      <strong className="text-slate-900 block font-semibold">Lagos Technology Hub</strong>
                      <span>14B Adeola Odeku Street, Victoria Island, Lagos, Nigeria</span>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <strong className="text-slate-900 block font-semibold">Abuja Liaison Office</strong>
                      <span>Central Business District, Abuja, FCT, Nigeria</span>
                    </div>
                  </div>
                </div>

                {/* SLA Commitment Card */}
                <div className="p-6 rounded-3xl bg-[#0837ad] text-white space-y-2 card-soft-shadow">
                  <div className="flex items-center gap-2 text-blue-200 text-xs font-mono font-bold uppercase">
                    <Clock className="w-4 h-4" />
                    <span>Response Commitment</span>
                  </div>
                  <p className="text-sm text-white font-medium leading-relaxed">
                    Facility integration inquiries receive an assigned technical onboarding lead and initial integration review within 24 business hours.
                  </p>
                </div>
              </div>

              {/* Right Column: Segmented Contact Form */}
              <div className="lg:col-span-7">
                <SegmentedContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* 3. Frequently Asked Questions (White Background) */}
        <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 lg:px-32">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                Frequently Asked <span className="text-[#0837ad]">Questions</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Clear answers to common questions about connecting healthcare facilities, patient privacy, and data governance.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-3xl border border-slate-200/80 bg-[#f8fafc] hover:bg-white transition-all duration-200 overflow-hidden card-soft-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold font-heading text-base sm:text-lg text-slate-900 focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <CaretDown
                        className={`w-5 h-5 text-[#0837ad] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Quick Hospital Fast-Track Callout (Alternating bg-[#f3f7fd]) */}
        <section className="py-20 bg-[#f3f7fd]">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 lg:px-32">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 card-soft-shadow flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                  Ready to register your healthcare facility today?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Complete our fast-track accredited facility verification directly in under 10 minutes.
                </p>
              </div>
              <Link
                href="/hospital/register"
                className="shrink-0 px-8 py-4 rounded-full bg-[#0837ad] hover:bg-[#062c8d] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-900/15 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Register Facility</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
