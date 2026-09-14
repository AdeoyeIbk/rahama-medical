'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FirstAid, Lock, Key, Pulse, Eye } from '@phosphor-icons/react';

export const JourneyTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Register Identity',
      desc: 'The patient receives their verified Rahama Health ID through their participating healthcare facility.',
      icon: <UserPlus className="w-6 h-6 text-[#FF6600]" />
    },
    {
      num: '02',
      title: 'Receive Clinical Care',
      desc: 'The hospital records consultation, labs, and diagnoses using its existing EMR system without workflow disruption.',
      icon: <FirstAid className="w-6 h-6 text-[#000066] dark:text-blue-400" />
    },
    {
      num: '03',
      title: 'Secure Linkage',
      desc: 'Medical summaries are encrypted and securely indexed under the patient\'s lifelong Rahama Health ID.',
      icon: <Lock className="w-6 h-6 text-[#FF6600]" />
    },
    {
      num: '04',
      title: 'Grant Permission',
      desc: 'When visiting another facility, the patient approves temporary record access via their portal or SMS token.',
      icon: <Key className="w-6 h-6 text-[#000066] dark:text-blue-400" />
    },
    {
      num: '05',
      title: 'Informed Care',
      desc: 'Attending doctors review complete medical history to make faster, safer, and higher-quality decisions.',
      icon: <Pulse className="w-6 h-6 text-[#FF6600]" />
    },
    {
      num: '06',
      title: 'Audit Visibility',
      desc: 'Every access event is logged to the patient\'s immutable audit trail, providing 100% transparency.',
      icon: <Eye className="w-6 h-6 text-[#000066] dark:text-blue-400" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600] px-3 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20">
            How Rahama Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            The 6-Step <span className="heading-accent">Patient Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From initial hospital onboarding to lifelong record continuity—transparent, secure, and patient-controlled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md relative hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">
                  {s.num}
                </span>
              </div>

              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
