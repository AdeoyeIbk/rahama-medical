'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LockKey, Eye, Scales, ShieldStar } from '@phosphor-icons/react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: 'You Say Who Gets Access',
      desc: 'No doctor or hospital can look at your medical history unless you explicitly approve it on your phone.',
      icon: <LockKey className="w-6 h-6 text-[#FF6600]" />,
      iconBg: 'bg-orange-50 border-orange-100 text-[#FF6600]'
    },
    {
      title: 'Bank-Grade Protection',
      desc: 'Your medical files are locked with the same high-level digital security used by international financial institutions.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600'
    },
    {
      title: 'Complete Access History',
      desc: 'Check your phone anytime to see a clear, un-changeable list of every doctor who opened your medical file.',
      icon: <Eye className="w-6 h-6 text-[#0837ad]" />,
      iconBg: 'bg-blue-50 border-blue-100 text-[#0837ad]'
    },
    {
      title: 'Strict Privacy Protection',
      desc: 'Built strictly according to national data privacy laws (including NDPA) so your personal information stays completely safe.',
      icon: <Scales className="w-6 h-6 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0837ad] block">
            Bank-Grade Trust & Compliance
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Your privacy is <span className="text-[#0837ad]">100% in your hands.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We built Rahama with one strict rule: your medical records belong to you—not us, and not the hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#f8fafc] hover:bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-blue-200 card-soft-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`p-3.5 rounded-2xl border w-fit mb-5 shadow-2xs ${p.iconBg}`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

