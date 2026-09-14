'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, WarningCircle, ArrowRight, ShieldCheck, FileText, Prohibit } from '@phosphor-icons/react';

export const ProblemStoryteller: React.FC = () => {
  const cards = [
    {
      id: 'hosp-a',
      step: 'Hospital A (Lagos)',
      title: 'Isolated Medical Records',
      description: 'Patient visits Hospital A for initial diagnosis. Case notes, lab reports, and imaging are locked inside Hospital A\'s local computer database.',
      impact: 'Paper files or lost PDF exports',
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      badge: 'Fragmented Start'
    },
    {
      id: 'hosp-b',
      step: 'Hospital B (Abuja)',
      title: 'Repeated Tests & Blind Spots',
      description: 'Six months later, patient relocates to Abuja and visits Hospital B. Doctors have zero access to previous treatment history, forcing duplicate bloodwork.',
      impact: 'Duplicated cost & delayed diagnosis',
      icon: <Prohibit className="w-8 h-8 text-red-500" />,
      badge: 'Information Void'
    },
    {
      id: 'hosp-c',
      step: 'Hospital C (Kano)',
      title: 'Emergency Without Context',
      description: 'During emergency care at Hospital C, clinicians struggle to confirm drug allergies or existing conditions, risking adverse reactions.',
      impact: 'Reduced continuity of care',
      icon: <WarningCircle className="w-8 h-8 text-red-600" />,
      badge: 'Critical Vulnerability'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            A patient&apos;s journey shouldn&apos;t mean <span className="heading-accent">starting over</span> at every clinic.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            When healthcare information is trapped inside isolated hospital EMRs, patients endure repeated tests, higher expenses, and fragmented medical histories.
          </p>
        </div>

        {/* Storyteller Stacked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#000066] dark:hover:border-blue-500 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-mono text-[#000066] dark:text-blue-300 uppercase tracking-wide">
                    {card.step}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                    {card.badge}
                  </span>
                </div>

                <div className="mb-4">{card.icon}</div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-[#000066] dark:group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-red-600 dark:text-red-400 font-medium">
                <span>Consequence: {card.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Bridge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-[#000066] text-white rounded-2xl p-8 shadow-2xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase font-bold text-[#FF6600] tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> The Rahama Infrastructure Solution
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              Bridge your hospital systems without replacing existing EMRs.
            </h3>
            <p className="text-sm text-blue-100 max-w-2xl">
              Rahama sits securely between participating facilities, granting authorized clinicians instant access to patient-approved medical history.
            </p>
          </div>

          <a href="/solution" className="shrink-0">
            <button className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition-all">
              <span>Explore Solution Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
