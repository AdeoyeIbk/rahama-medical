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
      title: 'Get Your Free Health ID',
      description: 'When you visit a connected hospital, you get a unique Rahama Health ID linked safely to your phone number.',
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
              YOUR RAHAMA ID
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ACTIVE
            </span>
          </div>
          <div className="z-10 bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white">RH-8839-2026-NGA</p>
              <p className="text-[10px] text-slate-400">Linked to your mobile number</p>
            </div>
            <QrCode className="w-7 h-7 text-[#FF6600]" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      ),
    },
    {
      num: '02',
      title: 'Doctor Treats You Normally',
      description: 'The hospital writes down your consultation, lab tests, and prescriptions on their computer just like they always do.',
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
            <span className="text-[11px] font-semibold text-slate-300">Hospital Software</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="flex justify-between text-slate-400 bg-slate-950/80 p-1.5 rounded">
              <span>Doctor Notes:</span>
              <span className="text-emerald-400">Saved</span>
            </div>
            <div className="flex justify-between text-slate-400 bg-slate-950/80 p-1.5 rounded">
              <span>Lab Results:</span>
              <span className="text-blue-400">Recorded</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Your File Gets Saved Safely',
      description: 'A copy of your medical summary is locked with bank-grade security under your Rahama Health ID so strangers can\'t view it.',
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
            <span className="text-[11px] font-semibold">Bank-Level Privacy</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-800 font-mono text-[9px] text-slate-400 leading-tight">
            Encrypted & protected from unauthorized access
          </div>
          <div className="flex items-center justify-between text-[10px] text-emerald-400">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> 100% Private
            </span>
          </div>
        </div>
      ),
    },
    {
      num: '04',
      title: 'You Say Who Gets Access',
      description: 'When you visit a new doctor, you get a quick text message or phone code to unlock your medical records for that visit.',
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
            <span className="text-xs font-semibold text-slate-200">Patient Phone Approval</span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
              TEMPORARY ACCESS
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <p className="text-slate-400 text-[9px]">Requesting Clinic</p>
              <p className="font-semibold text-slate-200 truncate">LUTH Emergency Care</p>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <p className="text-slate-400 text-[9px]">Approval Status</p>
              <p className="font-semibold text-emerald-400">Approved by You</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '05',
      title: 'Faster, Better Treatment',
      description: 'Your new doctor instantly sees your allergies, past blood tests, and treatments—saving you time, money, and stress.',
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
            <span className="text-xs font-semibold text-white">Full Medical History</span>
            <span className="text-[10px] text-orange-400 font-mono">No Repeated Tests</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <div className="bg-slate-950/70 p-1.5 rounded flex justify-between text-slate-300">
              <span>Known Drug Allergies:</span>
              <span className="text-red-400 font-bold">Penicillin (Severe)</span>
            </div>
            <div className="bg-slate-950/70 p-1.5 rounded flex justify-between text-slate-300">
              <span>Previous Doctor Notes:</span>
              <span className="text-emerald-400">Instantly Available</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '06',
      title: 'See Who Viewed Your File',
      description: 'Check your phone anytime to see a clear list of every doctor who opened your medical file and which hospital they were from.',
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
            <span>Clear Access History</span>
            <Eye className="w-4 h-4 text-blue-400" />
          </div>
          <div className="bg-slate-950 p-2 rounded text-[9px] font-mono text-slate-400 space-y-1">
            <p className="text-emerald-400">✔ Dr. Okonjo (LUTH) viewed file</p>
            <p className="text-slate-500">Today at 8:30 AM</p>
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
            How Rahama Works in <span className="heading-accent">6 Simple Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Here is exactly what happens when you and your doctor use Rahama—no complicated tech setup required.
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
