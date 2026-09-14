'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Heartbeat, ShieldCheck, Globe, Scales, Handshake, LockKey } from '@phosphor-icons/react/dist/ssr';

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity',
      desc: 'We uphold complete honesty and transparency in data handling, patient consent, and hospital partnerships.',
      icon: <ShieldCheck className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Compassion',
      desc: 'Healthcare technology must serve human dignity, easing patient burden and empowering doctors.',
      icon: <Heartbeat className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Security',
      desc: 'End-to-end cryptographic protection and strict role-based access control guide every architectural decision.',
      icon: <LockKey className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Professionalism',
      desc: 'Delivering robust, high-availability digital health infrastructure worthy of leading medical institutions.',
      icon: <Globe className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Faith & Responsibility',
      desc: 'Guided by moral duty and humility in serving human health and well-being.',
      icon: <Scales className="w-6 h-6 text-[#FF6600]" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="bg-[#000066] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <Badge variant="orange" size="md">
              About Rahama
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
              Building Infrastructure for <span className="heading-accent text-white">Connected Healthcare</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Rahama sits between patients, doctors, and hospitals—enabling authorized medical information to reach the right healthcare professionals with explicit patient permission.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Purpose Grid */}
        <section className="py-20 bg-white dark:bg-[#080829] text-slate-900 dark:text-slate-100 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Our Mission</span>
                <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                  Records Move With the Patient
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create a connected healthcare ecosystem where medical records move securely with the patient across facilities and borders.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#000066] dark:text-blue-400">Our Vision</span>
                <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                  Globally Trusted Ecosystem
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  A globally trusted health-tech ecosystem connecting patients, doctors, and hospitals without geographical or technical borders.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Our Purpose</span>
                <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                  Continuity Respecting Ethics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Trusted global health infrastructure enabling continuity across locations while respecting ethics, autonomy, and faith.
                </p>
              </div>
            </div>

            {/* Signature Brand Phrase Highlight */}
            <div className="mt-16 bg-[#000066] text-white rounded-2xl p-8 border border-blue-900 text-center space-y-3 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6600]">
                Core Brand Principle
              </span>
              <blockquote className="text-2xl sm:text-3xl font-extrabold font-heading italic">
                &ldquo;We treat, only God heals.&rdquo;
              </blockquote>
              <p className="text-xs text-blue-200 max-w-lg mx-auto">
                We design medical technology with humility, recognizing our role as facilitators of compassionate, high-quality clinical care.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Guiding Philosophy</span>
              <h2 className="text-3xl font-extrabold font-heading text-[#000066] dark:text-white">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">{v.icon}</div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white">{v.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
