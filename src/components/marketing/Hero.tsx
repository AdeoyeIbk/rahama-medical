'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ShieldCheck, ArrowRight, Hospital, UserCheck, Lock } from '@phosphor-icons/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#000066] text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2">
              <Badge variant="orange" size="md">
                Healthcare Infrastructure Platform
              </Badge>
              <span className="text-xs text-blue-200 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#FF6600]" /> Patient-Controlled Privacy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight text-white">
              Continuity of care shouldn&apos;t <span className="heading-accent text-white">stop at a border.</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed max-w-2xl">
              Rahama connects patients, doctors, and healthcare facilities across Africa through secure infrastructure—enabling lifelong medical records to move with the patient.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Partner With Us
                </Button>
              </Link>
              <Link href="/solution">
                <Button variant="outline" size="lg" className="border-blue-300 text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </Link>
              <Link href="/solution#discovery">
                <Button variant="ghost" size="md" className="text-blue-200 hover:text-white hover:bg-white/5 underline underline-offset-4">
                  Find a Rahama Hospital
                </Button>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blue-900/60 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] font-heading">100%</p>
                <p className="text-xs text-blue-200 mt-0.5">Patient Owned</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Zero</p>
                <p className="text-xs text-blue-200 mt-0.5">EMR Replacement Needed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF6600] font-heading">E2E</p>
                <p className="text-xs text-blue-200 mt-0.5">Encrypted Consent</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-slate-900/80 border border-blue-800/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#FF6600]" /> Rahama Universal Health ID
                </span>
              </div>

              {/* Patient Card Preview */}
              <div className="bg-[#00004d] rounded-xl p-5 border border-blue-900 mb-4 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-wider">Health ID Issued</span>
                    <h4 className="text-lg font-bold font-heading text-white mt-0.5">Amina Ibrahim Bello</h4>
                    <p className="text-xs text-blue-200 font-mono mt-1">RH-8492-9102-NG</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#FF6600]/20 border border-[#FF6600]/40 flex items-center justify-center text-[#FF6600]">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-blue-800/60 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Home Hospital</span>
                    <span className="font-semibold text-blue-100 flex items-center gap-1">
                      <Hospital className="w-3.5 h-3.5 text-[#FF6600]" /> LUTH Lagos
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Consent Status</span>
                    <span className="font-semibold text-emerald-400">Active Authorized</span>
                  </div>
                </div>
              </div>

              {/* Data Flow Badge */}
              <div className="bg-slate-950/70 rounded-lg p-3 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Cross-Hospital Record Sync Active
                </span>
                <span className="text-[10px] text-[#FF6600] font-mono">256-bit Encrypted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
