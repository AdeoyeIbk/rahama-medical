'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hospital, UserCheck, Lock, CheckCircle, Warning, ArrowsLeftRight, Shield } from '@phosphor-icons/react';

export const BeforeAfterVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BEFORE' | 'AFTER'>('AFTER');

  return (
    <section className="py-20 bg-white dark:bg-[#080829] text-slate-900 dark:text-slate-100 transition-colors border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#000066] dark:text-white">
            One Record. Every Hospital. <span className="heading-accent">Total Patient Control.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            See how Rahama transforms healthcare from disconnected EMR silos into a patient-centered connected network.
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
              Without Rahama (Fragmented)
            </button>
            <button
              onClick={() => setActiveTab('AFTER')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'AFTER'
                  ? 'bg-[#000066] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              With Rahama (Connected Network)
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Display */}
        <div className="relative min-h-[420px] bg-slate-50 dark:bg-slate-950/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-center">
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
                    <Warning className="w-4 h-4" /> Disconnected Hospital Silos
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital A</h4>
                    <p className="text-xs text-slate-500 mt-1">EMR Database #1</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      Isolated Records
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital B</h4>
                    <p className="text-xs text-slate-500 mt-1">EMR Database #2</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      No Data Exchange
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-red-200 dark:border-red-900/50 shadow-md text-center">
                    <Hospital className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 font-heading">Hospital C</h4>
                    <p className="text-xs text-slate-500 mt-1">EMR Database #3</p>
                    <span className="inline-block mt-3 text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded font-mono">
                      Duplicate Testing
                    </span>
                  </div>
                </div>

                <p className="text-xs text-center text-red-600 dark:text-red-400 font-medium">
                  Patient travels between clinics with zero record continuity. Doctors diagnose with blind spots.
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
                    <Shield className="w-4 h-4" /> Rahama Connected Ecosystem
                  </span>
                </div>

                {/* Patient Hub at Center */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#000066] text-white p-6 rounded-2xl border-2 border-[#FF6600] shadow-2xl text-center max-w-sm w-full relative">
                    <div className="w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center mx-auto mb-2 font-bold shadow-lg">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-wider">Center of Care</span>
                    <h3 className="text-lg font-extrabold font-heading">Patient Rahama Health ID</h3>
                    <p className="text-xs text-blue-200 mt-1 font-mono">RH-8492-9102-NG</p>
                    <div className="mt-3 text-[10px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full inline-flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Patient Consent Controlled
                    </div>
                  </div>
                </div>

                {/* Connected Hospitals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital A (LUTH)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Encrypted API Connected
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital B (FMC Abuja)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Authorized Summary Sync
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-blue-900 text-center shadow-md">
                    <div className="flex items-center justify-center gap-2 mb-2 text-[#000066] dark:text-blue-300 font-bold text-xs">
                      <Hospital className="w-4 h-4 text-[#FF6600]" /> Hospital C (AKTH Kano)
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                      Instant Clinical Context
                    </span>
                  </div>
                </div>

                <p className="text-xs text-center text-blue-900 dark:text-blue-200 font-semibold">
                  Rahama does NOT replace hospital EMRs. It enables secure cross-facility record exchange under patient consent.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
