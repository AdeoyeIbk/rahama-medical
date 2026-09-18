'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heartbeat, ShieldCheck, Globe, Scales, LockKey, Target, Eye, HandHeart } from '@phosphor-icons/react';

export const MissionVisionValuesSection: React.FC = () => {
  const pillars = [
    {
      label: 'Our Mission',
      icon: <Target className="w-6 h-6 text-[#0837ad]" />,
      title: 'Your Medical Story Travels With You',
      desc: 'To connect hospitals across Africa so patients never have to start over, repeat costly lab tests, or lose critical medical background when visiting a new doctor.'
    },
    {
      label: 'Our Vision',
      icon: <Globe className="w-6 h-6 text-[#0837ad]" />,
      title: 'One Connected Health Network',
      desc: 'An Africa where anyone can walk into any hospital and receive instant, safe, high-quality care without record barriers or administrative friction.'
    },
    {
      label: 'Our Purpose',
      icon: <HandHeart className="w-6 h-6 text-[#0837ad]" />,
      title: 'Putting Patients First',
      desc: 'Making healthcare simpler, safer, and more affordable for everyday families while treating every individual with respect, privacy, and dignity.'
    }
  ];

  const values = [
    {
      title: 'Honesty & Transparency',
      desc: 'We are completely transparent about how health data is protected and who gets to see it. Zero hidden fine print.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0837ad]" />
    },
    {
      title: 'Compassion & Care',
      desc: 'Healthcare technology should relieve stress for patients and clinical staff, eliminating redundant paperwork.',
      icon: <Heartbeat className="w-6 h-6 text-[#0837ad]" />
    },
    {
      title: 'Safety & Encryption First',
      desc: 'Medical files are guarded with bank-grade encryption, ensuring only patient-approved doctors can ever view them.',
      icon: <LockKey className="w-6 h-6 text-[#0837ad]" />
    },
    {
      title: 'Resilient Reliability',
      desc: 'We build durable digital infrastructure that hospitals and clinics can rely upon 24 hours a day, 365 days a year.',
      icon: <Globe className="w-6 h-6 text-[#0837ad]" />
    },
    {
      title: 'Humility & Responsibility',
      desc: 'We serve with respect and integrity, honoring the profound trust placed in us by everyday families and physicians.',
      icon: <Scales className="w-6 h-6 text-[#0837ad]" />
    },
    {
      title: 'Patient-First Ownership',
      desc: 'Every medical record belongs unequivocally to the patient, never sold, monetized, or locked away.',
      icon: <Eye className="w-6 h-6 text-[#0837ad]" />
    }
  ];

  return (
    <>
      {/* 1. Mission, Vision, Purpose Section (White Background, Consistent Cards) */}
      <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f8fafc] hover:bg-white p-6 sm:p-7 lg:p-8 rounded-3xl border border-slate-200/80 hover:border-blue-200 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0837ad] block mb-2">
                    {item.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Foundation Quote Banner (Card matching Homepage CTA) */}
          <div className="mt-20 max-w-5xl mx-auto rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#0837ad] via-[#0b3dc4] to-[#041d63] text-white p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl shadow-blue-900/15 border border-blue-400/20 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-200 block">
                Our Foundation
              </span>
              <blockquote className="text-2xl sm:text-4xl font-extrabold font-heading italic tracking-tight text-white leading-tight">
                &ldquo;We treat, only God heals.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                We design medical tools with humility, knowing that physicians provide dedicated care while ultimate healing comes from above.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Core Values Section (Alternating bg-[#f3f7fd]) */}
      <section className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Principles that guide <span className="text-[#0837ad]">every line of code.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The foundational standards that ensure patients remain protected and healthcare providers remain empowered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-7 lg:p-8 rounded-3xl border border-slate-200/80 hover:border-blue-200 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-[#0837ad]">
                    {v.icon}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 mb-2 leading-snug">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};
