'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WarningCircle, ArrowRight, ShieldCheck, FileText, Prohibit } from '@phosphor-icons/react';

export const ProblemStoryteller: React.FC = () => {
  const cards = [
    {
      id: 'hosp-a',
      step: '1. Hospital #1 (Lagos)',
      title: 'Your files stay locked on their computer',
      description: 'You get treated at a clinic in Lagos. But your lab tests, prescriptions, and doctor notes stay locked inside their computer. When you leave, nothing comes with you.',
      impact: 'You leave with paper receipts or nothing at all',
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      badge: 'Files Left Behind'
    },
    {
      id: 'hosp-b',
      step: '2. Hospital #2 (Abuja)',
      title: 'The new doctor has to guess and re-test',
      description: 'Months later in Abuja, you fall sick and visit a new doctor. Because they cannot see your past medical history, you end up paying for the exact same blood test all over again.',
      impact: 'Wasted money and delayed treatment',
      icon: <Prohibit className="w-8 h-8 text-red-500" />,
      badge: 'Paying Twice'
    },
    {
      id: 'hosp-c',
      step: '3. Hospital #3 (Emergency)',
      title: 'In an emergency, doctors don\'t know your allergies',
      description: 'If you\'re rushed to a hospital in an emergency, doctors won\'t know if you\'re allergic to penicillin or taking daily heart medicine. They have to make quick guesses.',
      impact: 'Dangerous medical mistakes',
      icon: <WarningCircle className="w-8 h-8 text-red-600" />,
      badge: 'High Risk'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            Why changing hospitals is currently a headache—and <span className="heading-accent">how we fix it.</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            If you&apos;ve ever had to re-explain your whole medical history or pay for the exact same lab test twice, you already know the problem. Here&apos;s what happens today:
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
                <span>The result: {card.impact}</span>
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
              <ShieldCheck className="w-4 h-4" /> How Rahama Changes Everything
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              Rahama connects the dots so your medical story goes wherever you go.
            </h3>
            <p className="text-sm text-blue-100 max-w-2xl">
              Hospitals don&apos;t need to change their computers or buy new software. Rahama works quietly in the background so your doctor gets the full picture—only when you give permission.
            </p>
          </div>

          <a href="/solution" className="shrink-0">
            <button className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition-all">
              <span>See How Rahama Works</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
