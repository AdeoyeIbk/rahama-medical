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
          <div className="p-2.5 rounded-2xl bg-orange-50 text-[#FF6600] border border-orange-100">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            01
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              YOUR RAHAMA ID
            </span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              ACTIVE
            </span>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white font-mono">RH-8839-2026-NGA</p>
              <p className="text-[10px] text-blue-100">Linked to your mobile number</p>
            </div>
            <QrCode className="w-6 h-6 text-[#FF6600]" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
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
          <div className="p-2.5 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100">
            <FirstAid className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            02
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-slate-50 p-4 flex-col justify-between border border-slate-200/80 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-700">Hospital Software</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="flex justify-between text-slate-600 bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
              <span>Doctor Notes:</span>
              <span className="text-emerald-600 font-semibold">Saved</span>
            </div>
            <div className="flex justify-between text-slate-600 bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
              <span>Lab Results:</span>
              <span className="text-[#0837ad] font-semibold">Recorded</span>
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
          <div className="p-2.5 rounded-2xl bg-orange-50 text-[#FF6600] border border-orange-100">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            03
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-gradient-to-b from-blue-50/70 to-slate-50 p-4 flex-col justify-between border border-blue-100/80 relative overflow-hidden">
          <div className="flex items-center space-x-2 text-slate-800">
            <LockKey className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[11px] font-semibold">Bank-Level Privacy</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200/80 font-mono text-[9px] text-slate-600 leading-tight shadow-2xs">
            Encrypted & protected from unauthorized access
          </div>
          <div className="flex items-center justify-between text-[10px] text-emerald-600 font-semibold">
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
          <div className="p-2.5 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100">
            <Key className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            04
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-slate-50 p-4 flex-col justify-between border border-slate-200/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">Patient Phone Approval</span>
            <span className="text-[10px] bg-blue-100 text-[#0837ad] px-2.5 py-0.5 rounded-full border border-blue-200 font-medium">
              TEMPORARY ACCESS
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
              <p className="text-slate-500 text-[9px]">Requesting Clinic</p>
              <p className="font-semibold text-slate-800 truncate">LUTH Emergency Care</p>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
              <p className="text-slate-500 text-[9px]">Approval Status</p>
              <p className="font-semibold text-emerald-600">Approved by You</p>
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
          <div className="p-2.5 rounded-2xl bg-orange-50 text-[#FF6600] border border-orange-100">
            <Pulse className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            05
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/60 p-4 flex-col justify-between border border-blue-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">Full Medical History</span>
            <span className="text-[10px] text-[#0837ad] font-mono font-semibold">No Repeated Tests</span>
          </div>
          <div className="space-y-1 text-[10px]">
            <div className="bg-white p-2 rounded-lg border border-slate-200/70 flex justify-between text-slate-700 shadow-2xs">
              <span>Known Drug Allergies:</span>
              <span className="text-rose-600 font-bold">Penicillin (Severe)</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200/70 flex justify-between text-slate-700 shadow-2xs">
              <span>Previous Doctor Notes:</span>
              <span className="text-emerald-600 font-semibold">Instantly Available</span>
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
          <div className="p-2.5 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black font-heading text-slate-300">
            06
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[7.5rem] rounded-2xl bg-slate-50 p-4 flex-col justify-between border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-700">
            <span className="font-medium">Clear Access History</span>
            <Eye className="w-4 h-4 text-[#0837ad]" />
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200/70 text-[9px] font-mono text-slate-600 space-y-1 shadow-2xs">
            <p className="text-emerald-600 font-semibold">✔ Dr. Okonjo (LUTH) viewed file</p>
            <p className="text-slate-400">Today at 8:30 AM</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0837ad] block">
            Simple Healthcare Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            How Rahama Works in <span className="text-[#0837ad]">6 Simple Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                className="h-full bg-white border-slate-200/80 rounded-3xl p-6 card-soft-shadow hover:shadow-xl transition-all"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

