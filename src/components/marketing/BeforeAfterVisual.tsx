'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital, UserCheck, CheckCircle, Warning, Shield } from '@phosphor-icons/react';

export const BeforeAfterVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BEFORE' | 'AFTER'>('AFTER');

  return (
    <section className="py-20 bg-white dark:bg-[#080829] text-slate-900 dark:text-slate-100 transition-colors border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            One Health Record. Every Hospital. <span className="heading-accent">You&apos;re in Full Control.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            See how Rahama turns scattered paper files and duplicate lab bills into one simple, connected account you control from your phone.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner mt-4">
            <button
              onClick={() => setActiveTab('BEFORE')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'BEFORE'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              The Old Way (Lost files & duplicate bills)
            </button>
            <button
              onClick={() => setActiveTab('AFTER')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'AFTER'
                  ? 'bg-[#000066] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              The Rahama Way (One record everywhere)
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Display */}
        <div className="relative min-h-[420px] p-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'BEFORE' ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center max-w-xl mx-auto mb-4">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <Warning className="w-4 h-4" /> Disconnected Hospitals
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital #1 (Lagos)</h4>
                    <p className="text-xs text-slate-500 mt-1">Files locked inside their computer</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      Records Stay Behind
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital #2 (Abuja)</h4>
                    <p className="text-xs text-slate-500 mt-1">Doctor has no idea what was treated</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      Pay for Duplicate Tests
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital #3 (Emergency)</h4>
                    <p className="text-xs text-slate-500 mt-1">No knowledge of drug allergies</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      Dangerous Blind Spots
                    </span>
                  </div>
                </div>

                <p className="text-xs text-center text-red-600 dark:text-red-400 font-medium">
                  Without Rahama: You travel between hospitals with zero file history. Doctors have to guess while treating you.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center max-w-xl mx-auto mb-2">
                  <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <Shield className="w-4 h-4" /> The Rahama Network
                  </span>
                </div>

                {/* Patient Hub at Center */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#000066] text-white p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full relative">
                    <div className="w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center mx-auto mb-2 font-bold shadow-lg">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-wider">You&apos;re in Charge</span>
                    <h3 className="text-lg font-extrabold font-heading">Your Rahama Health ID</h3>
                    <p className="text-xs text-blue-200 mt-1 font-mono">RH-8492-9102-NG</p>
                    <div className="mt-3 text-[10px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full inline-flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Doctor Access Approved by You
                    </div>
                  </div>
                </div>

                {/* Connected Hospitals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital #1 (LUTH Lagos)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Consultations & Labs Saved
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital #2 (FMC Abuja)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Doctor Sees Past Medical History
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital #3 (AKTH Kano)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Instant Allergy & Blood Type Checks
                    </span>
                  </div>
                </div>

                <p className="text-xs text-center text-blue-900 dark:text-blue-200 font-semibold">
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
