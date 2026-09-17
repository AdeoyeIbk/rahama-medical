'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital, UserCheck, CheckCircle, Warning, Shield, FileText, Prohibit } from '@phosphor-icons/react';

export const BeforeAfterVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BEFORE' | 'AFTER'>('AFTER');

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
        
        {/* Section Title with High Breathing Space */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            One Health Record. Every Hospital.{' '}
            <span className="text-[#0837ad]">You&apos;re in Full Control.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-1">
            See how Rahama turns scattered paper files and duplicate lab bills into one simple, connected account you control from your phone.
          </p>

          {/* Interactive Toggle Control */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 gap-1">
              <button
                onClick={() => setActiveTab('BEFORE')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'BEFORE'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                The Old Way (Lost files & duplicate bills)
              </button>
              <button
                onClick={() => setActiveTab('AFTER')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'AFTER'
                    ? 'bg-[#0837ad] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                The Rahama Way (One record everywhere)
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Display Container */}
        <div className="relative min-h-[440px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'BEFORE' ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 card-soft-shadow text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200/80 border border-slate-300/80 flex items-center justify-center mx-auto text-slate-700">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-slate-800 font-heading">Hospital #1 (Lagos)</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Files locked inside their computer. When you leave, nothing comes with you.
                    </p>
                    <span className="text-xs font-semibold text-slate-700 block pt-1">
                      Records Stay Behind
                    </span>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 card-soft-shadow text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200/80 border border-slate-300/80 flex items-center justify-center mx-auto text-slate-700">
                      <Prohibit className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-slate-800 font-heading">Hospital #2 (Abuja)</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Doctor has no past files and orders the exact same lab tests again.
                    </p>
                    <span className="text-xs font-semibold text-slate-700 block pt-1">
                      Pay for Duplicate Tests
                    </span>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 card-soft-shadow text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200/80 border border-slate-300/80 flex items-center justify-center mx-auto text-slate-700">
                      <Warning className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-slate-800 font-heading">Hospital #3 (Emergency)</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Zero knowledge of drug allergies or existing prescriptions in critical hours.
                    </p>
                    <span className="text-xs font-semibold text-slate-700 block pt-1">
                      Dangerous Blind Spots
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-center text-slate-600 font-medium">
                  Without Rahama: You travel between hospitals with zero file history. Doctors have to guess while treating you.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {/* Patient Hub at Center */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-[#0837ad] to-[#052370] text-white p-7 rounded-3xl shadow-2xl shadow-blue-900/20 text-center max-w-md w-full relative border border-blue-400/30">
                    <img
                      src="/amina-avatar.jpg"
                      alt="Amina Ibrahim Bello"
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 mx-auto mb-3 shadow-md"
                    />
                    <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">
                      You&apos;re in Full Control
                    </span>
                    <h3 className="text-xl font-extrabold font-heading text-white mt-1">
                      Amina Ibrahim Bello
                    </h3>
                    <p className="text-xs text-blue-200 mt-1 font-mono tracking-wide">
                      Health ID: RH-8492-9102-NG
                    </p>
                    <div className="mt-3 text-xs text-blue-200 font-medium inline-flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-300" /> Doctor Access Approved by You
                    </div>
                  </div>
                </div>

                {/* Connected Hospitals Trio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
                  <div className="bg-white p-6 rounded-3xl border border-blue-100 text-center card-soft-shadow hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#0837ad] font-bold text-sm">
                      <Hospital className="w-4 h-4 text-[#0837ad]" /> Hospital #1 (LUTH Lagos)
                    </div>
                    <span className="text-xs text-[#0837ad] font-medium block mt-1">
                      Consultations & Labs Safely Saved
                    </span>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-blue-100 text-center card-soft-shadow hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#0837ad] font-bold text-sm">
                      <Hospital className="w-4 h-4 text-[#0837ad]" /> Hospital #2 (FMC Abuja)
                    </div>
                    <span className="text-xs text-[#0837ad] font-medium block mt-1">
                      Doctor Sees Past Medical History
                    </span>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-blue-100 text-center card-soft-shadow hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#0837ad] font-bold text-sm">
                      <Hospital className="w-4 h-4 text-[#0837ad]" /> Hospital #3 (AKTH Kano)
                    </div>
                    <span className="text-xs text-[#0837ad] font-medium block mt-1">
                      Instant Allergy & Blood Type Checks
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-center text-slate-700 font-semibold">
                  With Rahama: Hospitals don&apos;t change how they work. Your medical story just travels with you safely whenever you visit a doctor.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

