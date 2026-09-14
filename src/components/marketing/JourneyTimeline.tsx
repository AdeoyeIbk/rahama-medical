'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  UserPlus,
  FirstAid,
  Lock,
  Key,
  Pulse,
  Eye,
  CheckCircle,
  ShieldCheck,
  QrCode,
  LockKey,
} from '@phosphor-icons/react';

export const JourneyTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Register Identity',
      description: 'The patient receives their verified Rahama Health ID through their participating healthcare facility.',
      className: 'md:col-span-2',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#FF6600]">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            01
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-gradient-to-br from-slate-900 to-[#000066] p-4 flex-col justify-between border border-blue-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              VERIFIED RAHAMA ID
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ACTIVE
            </span>
          </div>
          <div className="z-10 bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white">RH-8839-2026-NGA</p>
              <p className="text-[10px] text-slate-400">National Health Infrastructure Index</p>
            </div>
            <QrCode className="w-7 h-7 text-[#FF6600]" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      ),
    },
    {
      num: '02',
      title: 'Receive Clinical Care',
      description: 'The hospital records consultation, labs, and diagnoses using its existing EMR system without workflow disruption.',
      className: 'md:col-span-1',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#000066] dark:text-blue-400">
            <FirstAid className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            02
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-slate-900 p-4 flex-col justify-between border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-300">Existing EMR Sync</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="flex justify-between text-slate-400 bg-slate-950/80 p-1.5 rounded">
              <span>Encounters:</span>
              <span className="text-emerald-400">Synced (HL7/FHIR)</span>
            </div>
            <div className="flex justify-between text-slate-400 bg-slate-950/80 p-1.5 rounded">
              <span>Vitals & Labs:</span>
              <span className="text-blue-400">Auto-Indexed</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Secure Linkage',
      description: 'Medical summaries are encrypted and securely indexed under the patient\'s lifelong Rahama Health ID.',
      className: 'md:col-span-1',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#FF6600]">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            03
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-4 flex-col justify-between border border-slate-800 relative overflow-hidden">
          <div className="flex items-center space-x-2 text-slate-300">
            <LockKey className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[11px] font-semibold">AES-256 Encryption</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-800 font-mono text-[9px] text-slate-400 break-all leading-tight">
            hash: 0x9f8a...3e2b19 | encrypted_payload
          </div>
          <div className="flex items-center justify-between text-[10px] text-emerald-400">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Zero Plaintext Storage
            </span>
          </div>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Grant Permission',
      description: 'When visiting another facility, the patient approves temporary record access via their portal or SMS token.',
      className: 'md:col-span-2',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#000066] dark:text-blue-400">
            <Key className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            04
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-slate-900 p-4 flex-col justify-between border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">Patient Explicit Consent Engine</span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
              TIME-BOUND ACCESS
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <p className="text-slate-400 text-[9px]">Requesting Facility</p>
              <p className="font-semibold text-slate-200 truncate">Lagos University Teaching Hosp.</p>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <p className="text-slate-400 text-[9px]">Consent Expiry</p>
              <p className="font-semibold text-emerald-400">24 Hours (Active)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '05',
      title: 'Informed Care',
      description: 'Attending doctors review complete medical history to make faster, safer, and higher-quality decisions.',
      className: 'md:col-span-2',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#FF6600]">
            <Pulse className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            05
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-gradient-to-r from-slate-900 to-[#000066]/70 p-4 flex-col justify-between border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Unified Clinical Dashboard</span>
            <span className="text-[10px] text-orange-400 font-mono">100% History Continuity</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <div className="bg-slate-950/70 p-1.5 rounded flex justify-between text-slate-300">
              <span>Allergies & Contraindications:</span>
              <span className="text-red-400 font-bold">Penicillin (Severe)</span>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded flex justify-between text-slate-300">
              <span>Past Surgeries & Chronic Care:</span>
              <span className="text-emerald-400">Indexed Across 3 Facilities</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '06',
      title: 'Audit Visibility',
      description: 'Every access event is logged to the patient\'s immutable audit trail, providing 100% transparency.',
      className: 'md:col-span-1',
      icon: (
        <div className="flex items-center justify-between w-full">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#000066] dark:text-blue-400">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300 dark:text-slate-700">
            06
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl bg-slate-900 p-4 flex-col justify-between border border-slate-800">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span>Immutable Access Log</span>
            <Eye className="w-4 h-4 text-blue-400" />
          </div>
          <div className="bg-slate-950 p-2 rounded text-[9px] font-mono text-slate-400 space-y-1">
            <p className="text-emerald-400">✔ Dr. Okonjo viewed Vitals</p>
            <p className="text-slate-500">2026-09-14 08:30 GMT</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            The 6-Step <span className="heading-accent">Patient Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From initial hospital onboarding to lifelong record continuity—transparent, secure, and patient-controlled.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={item.className}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
