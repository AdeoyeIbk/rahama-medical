import React from 'react';
import { Heartbeat, ShieldCheck, Globe, Scales, LockKey } from '@phosphor-icons/react/dist/ssr';

export const MissionVisionValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Honesty & Transparency',
      desc: 'We are completely open about how your data is protected and who gets to see it. No fine print.',
      icon: <ShieldCheck className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Compassion',
      desc: 'Healthcare technology should make life easier for patients and doctors, reducing stress and paperwork.',
      icon: <Heartbeat className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Safety First',
      desc: 'Your medical files are locked behind strict security, ensuring only authorized doctors can ever view them.',
      icon: <LockKey className="w-6 h-6 text-[#FF6600]" />
    },
    {
      title: 'Reliability',
      desc: 'We build strong, dependable systems that hospitals and clinics can rely on 24 hours a day, 7 days a week.',
      icon: <Globe className="w-6 h-6 text-[#000066] dark:text-blue-300" />
    },
    {
      title: 'Humility & Responsibility',
      desc: 'We serve with respect and humility, honoring the trust placed in us by everyday families and doctors.',
      icon: <Scales className="w-6 h-6 text-[#FF6600]" />
    }
  ];

  return (
    <>
      <section className="py-20 bg-white dark:bg-[#080829] text-slate-900 dark:text-slate-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">Our Mission</span>
              <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                Your Medical Story Travels With You
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To connect hospitals across Africa so patients never have to start over or re-pay for tests when visiting a new doctor.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#000066] dark:text-blue-400">Our Vision</span>
              <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                One Connected Health Network
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A world where anyone can walk into any hospital and receive instant, safe, high-quality care without record barriers.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Our Purpose</span>
              <h3 className="text-2xl font-bold font-heading text-[#000066] dark:text-white">
                Putting Patients First
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Making healthcare simpler, safer, and cheaper for everyday families while treating every person with respect and dignity.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#000066] text-white rounded-2xl p-8 border border-blue-900 text-center space-y-3 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6600]">
              Our Foundation
            </span>
            <blockquote className="text-2xl sm:text-3xl font-extrabold font-heading italic">
              &ldquo;We treat, only God heals.&rdquo;
            </blockquote>
            <p className="text-xs text-blue-200 max-w-lg mx-auto">
              We design medical tools with humility, knowing that doctors treat patients while ultimate healing comes from above.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">What We Stand For</span>
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
    </>
  );
};
