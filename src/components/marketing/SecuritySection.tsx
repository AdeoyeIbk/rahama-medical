'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LockKey, Eye, Scales, ShieldStar } from '@phosphor-icons/react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      title: 'Patient-Controlled Consent',
      desc: 'No doctor or hospital can view medical history without explicit authorization from the patient.',
      icon: <LockKey className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'End-to-End Encryption',
      desc: 'Clinical records are encrypted in transit and at rest using industry-standard cryptographic algorithms.',
      icon: <ShieldCheck className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Immutable Audit Trail',
      desc: 'Every lookup, consultation view, and record creation is logged with exact timestamps and facility IDs.',
      icon: <Eye className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Data Privacy Compliance',
      desc: 'Architected to align with the Nigeria Data Protection Act (NDPA) and international health privacy standards.',
      icon: <Scales className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    }
  ];

  return (
    <section className="py-24 bg-[#000066] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Security is not a feature; <span className="heading-accent text-white">it&apos;s our foundation.</span>
          </h2>
          <p className="text-base text-blue-100 leading-relaxed">
            Rahama delivers trusted global health infrastructure that enables continuity across locations while respecting ethics, autonomy, and privacy.
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
