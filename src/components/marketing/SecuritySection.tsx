'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LockKey, Eye, Scales } from '@phosphor-icons/react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: 'You Say Who Gets Access',
      desc: 'No doctor or hospital can look at your medical history unless you explicitly approve it on your phone.',
      icon: <LockKey className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Bank-Grade Protection',
      desc: 'Your medical files are locked with the same high-level digital security used by international financial institutions.',
      icon: <ShieldCheck className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Complete Access History',
      desc: 'Check your phone anytime to see a clear, un-changeable list of every doctor who opened your medical file.',
      icon: <Eye className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Strict Privacy Protection',
      desc: 'Built strictly according to national data privacy laws (including NDPA) so your personal information stays completely safe.',
      icon: <Scales className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    }
  ];

  return (
    <section className="py-24 bg-[#000066] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Your privacy is <span className="heading-accent text-white">100% in your hands.</span>
          </h2>
          <p className="text-base text-blue-100 leading-relaxed">
            We built Rahama with one strict rule: your medical records belong to you—not us, and not the hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#00004d] p-6 rounded-2xl border border-blue-800/80 hover:border-[#FF6600] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/10 w-fit mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">{p.title}</h3>
                <p className="text-xs text-blue-200 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
