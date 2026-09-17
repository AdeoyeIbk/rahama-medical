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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            01
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              YOUR RAHAMA ID
            </span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
              ACTIVE
            </span>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white font-mono">RH-8839-2026-NGA</p>
              <p className="text-[10px] text-blue-100">Linked to your mobile number</p>
            </div>
            <QrCode className="w-6 h-6 text-blue-300" />
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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <FirstAid className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            02
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5 font-semibold">
              HOSPITAL SOFTWARE
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          </div>
          <div className="z-10 space-y-1.5 font-mono text-[10px]">
            <div className="flex justify-between bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 text-white">
              <span>Doctor Notes:</span>
              <span className="text-blue-200 font-semibold">Encrypted</span>
            </div>
            <div className="flex justify-between bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 text-white">
              <span>Lab Results:</span>
              <span className="text-blue-200 font-semibold">Synced</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            03
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10 text-blue-200">
            <div className="flex items-center space-x-1.5">
              <LockKey className="w-4 h-4 text-blue-300" />
              <span className="text-[11px] font-mono font-semibold">BANK-GRADE VAULT</span>
            </div>
            <span className="text-[10px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/30">
              AES-256
            </span>
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10 font-mono text-[10px] text-blue-100 leading-tight">
            Encrypted & protected from unauthorized access
          </div>
          <div className="z-10 flex items-center justify-between text-[10px] text-blue-200 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-blue-300" /> 100% Patient Owned
            </span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <Key className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            04
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              PATIENT PHONE APPROVAL
            </span>
            <span className="text-[10px] bg-blue-500/20 text-blue-200 px-2.5 py-0.5 rounded-full border border-blue-400/30 font-medium font-mono">
              TEMPORARY ACCESS
            </span>
          </div>
          <div className="z-10 grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
              <p className="text-blue-200 text-[9px]">Requesting Clinic</p>
              <p className="font-semibold text-white truncate">LUTH Emergency Care</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
              <p className="text-blue-200 text-[9px]">Approval Status</p>
              <p className="font-semibold text-blue-200 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-blue-300" /> Approved by You
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <Pulse className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            05
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-blue-200 flex items-center gap-1.5 font-semibold">
              VERIFIED MEDICAL HISTORY
            </span>
            <span className="text-[10px] text-blue-200 font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30">
              Zero Re-Tests
            </span>
          </div>
          <div className="z-10 space-y-1.5 text-[10px]">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 flex justify-between text-white">
              <span>Known Drug Allergies:</span>
              <span className="text-blue-200 font-bold">Penicillin (Severe)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 flex justify-between text-white">
              <span>Previous Doctor Notes:</span>
              <span className="text-blue-200 font-semibold">Instantly Available</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
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
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0837ad] border border-blue-100 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-3xl sm:text-4xl font-black font-heading text-[#0837ad]">
            06
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8.5rem] rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 flex-col justify-between border border-blue-400/20 relative overflow-hidden shadow-md text-white">
          <div className="flex items-center justify-between text-[11px] text-blue-200 z-10">
            <span className="font-mono font-semibold">ACCESS AUDIT LOG</span>
            <Eye className="w-4 h-4 text-blue-300" />
          </div>
          <div className="z-10 bg-white/10 backdrop-blur-md p-2.5 rounded-lg border border-white/10 text-[9px] font-mono text-white space-y-1">
            <p className="text-blue-200 font-semibold">✔ Dr. Okonjo (LUTH) viewed file</p>
            <p className="text-blue-100/70">Today at 8:30 AM • Phone Authorized</p>
          </div>
          <div className="z-10 flex items-center justify-between text-[10px] text-blue-200 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-blue-300" /> Tamper-Proof Trail
            </span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f3f7fd] text-slate-900 transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            How Rahama Works in <span className="text-[#0837ad]">6 Simple Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is exactly what happens when you and your doctor use Rahama—no complicated tech setup required.
          </p>
        </div>

        <BentoGrid className="max-w-full mx-auto">
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
                className="h-full bg-white border-slate-200/80 rounded-3xl p-6 sm:p-7 card-soft-shadow hover:border-[#0837ad]/40 hover:shadow-xl transition-all"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

