'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileText, Prohibit, WarningCircle } from '@phosphor-icons/react';

export const ProblemStoryteller: React.FC = () => {
  const cards = [
    {
      id: 'hosp-a',
      step: 'Case 01 • Lagos Clinic',
      title: 'Your files stay locked on their computer',
      description: 'You get treated at a clinic in Lagos. But your lab tests, prescriptions, and doctor notes stay locked inside their computer. When you leave, nothing comes with you.',
      impact: 'You leave with paper receipts or nothing at all',
      icon: <FileText className="w-7 h-7 text-[#0837ad]" />,
      iconBg: 'bg-blue-50 border-blue-100'
    },
    {
      id: 'hosp-b',
      step: 'Case 02 • Abuja Hospital',
      title: 'The new doctor has to guess and re-test',
      description: 'Months later in Abuja, you fall sick and visit a new doctor. Because they cannot see your past medical history, you end up paying for the exact same blood test all over again.',
      impact: 'Wasted money and delayed treatment',
      icon: <Prohibit className="w-7 h-7 text-[#0837ad]" />,
      iconBg: 'bg-blue-50 border-blue-100'
    },
    {
      id: 'hosp-c',
      step: 'Case 03 • Emergency Care',
      title: 'In an emergency, doctors don\'t know your allergies',
      description: 'If you\'re rushed to a hospital in an emergency, doctors won\'t know if you\'re allergic to penicillin or taking daily heart medicine. They have to make quick guesses.',
      impact: 'Dangerous medical mistakes',
      icon: <WarningCircle className="w-7 h-7 text-[#0837ad]" />,
      iconBg: 'bg-blue-50 border-blue-100'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
        
        {/* Section Header with Generous Breathing Room */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Why changing hospitals is currently a headache, and{' '}
            <span className="text-[#0837ad]">how we fix it.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            If you&apos;ve ever had to re-explain your whole medical history or pay for the exact same lab test twice, you already know the problem. Here&apos;s what happens today:
          </p>
        </div>

        {/* 3 Story Cards with Breathing Room (Reference Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 lg:p-8 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#0837ad] uppercase tracking-wider">
                    {card.step}
                  </span>
                </div>

                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} border flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-[#0837ad] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-700">
                <span>The result: {card.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Darker Blue Bridge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 rounded-[32px] bg-gradient-to-br from-[#0837ad] to-[#052370] text-white p-8 sm:p-12 shadow-xl shadow-blue-950/15 border border-blue-400/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
              Rahama connects the dots so your medical story goes wherever you go.
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Hospitals don&apos;t need to change their computers or buy new software. Rahama works quietly in the background so your doctor gets the full picture, only when you give permission.
            </p>
          </div>

          <Link href="/solution" className="shrink-0">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0837ad] font-semibold text-sm sm:text-base shadow-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
              <span>See How Rahama Works</span>
              <ArrowRight className="w-4 h-4 text-[#0837ad]" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

