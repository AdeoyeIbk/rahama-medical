"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Hospital,
  UserCheck,
  LockKey,
  QrCode,
  FileText,
  CheckCircle,
  Pulse,
  Eye,
} from "@phosphor-icons/react";
import { Highlight } from "@/components/ui/hero-highlight";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden hero-radial-aura text-slate-900 pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-24">
      {/* Subtle Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[450px] bg-blue-400/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-24 left-10 w-80 h-80 bg-blue-300/15 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute top-24 right-10 w-80 h-80 bg-indigo-300/15 blur-[90px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32 flex flex-col items-center text-center">
        {/* 1. Main Hero Headline (Preserving current copy & type) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold font-heading text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
        >
          Your medical history should follow you{" "}
          <Highlight className="text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 dark:from-blue-600 dark:via-blue-500 dark:to-sky-400 px-2.5 rounded-xl">
            anywhere.
          </Highlight>
        </motion.h1>

        {/* 2. Subheadline with Generous Breathing Space */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-blue-50/90 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Imagine moving to a new city, walking into a hospital, and the doctor
          already knows your medical background—no lost paper files, no paying
          for the same test twice, and zero starting from scratch.
        </motion.p>

        {/* 3. Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* Primary Solid White Pill Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0837ad] font-semibold text-sm sm:text-base shadow-xl shadow-blue-950/20 hover:bg-blue-50 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Join as a Partner</span>
            <ArrowRight className="w-4 h-4 text-[#0837ad]" />
          </Link>

          {/* Secondary Frosted Glass Pill Button */}
          <Link
            href="/solution"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-medium text-sm sm:text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>See How It Works</span>
          </Link>
        </motion.div>

        {/* Sub-link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4"
        >
          <Link
            href="/solution#discovery"
            className="text-xs sm:text-sm text-blue-100/80 hover:text-white font-medium transition-colors underline underline-offset-4 decoration-blue-300/40 hover:decoration-white"
          >
            Find a Connected Hospital →
          </Link>
        </motion.div>

        {/* 4. Strategic Quick Metrics - Clean Text Only (No pills/bg/borders) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-blue-100/90"
        >
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-blue-200" />
            <span>
              <strong className="text-white font-bold">100%</strong> You Own
              Your Data
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Hospital className="w-4 h-4 text-blue-200" />
            <span>
              <strong className="text-white font-bold">Zero</strong> Extra Work
              for Hospitals
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LockKey className="w-4 h-4 text-blue-200" />
            <span>
              <strong className="text-white font-bold">Bank-Grade</strong>{" "}
              Private & Secure
            </span>
          </div>
        </motion.div>

        {/* 5. The 3-Phone Flagship Mockup Showcase */}
        <div className="w-full mt-14 sm:mt-16 pt-4 relative flex justify-center items-end">
          {/* The 3 Phones Container */}
          <div className="relative w-full max-w-5xl flex items-end justify-center gap-3 sm:gap-6 lg:gap-8 px-2">
            {/* ================= LEFT PHONE: Clinical Records Timeline ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex flex-col items-center shrink-0 w-[240px] lg:w-[270px] z-10 origin-bottom-right hover:rotate-0 transition-transform duration-300"
            >
              {/* Phone Hardware Shell */}
              <div className="w-full h-[470px] lg:h-[510px] rounded-[38px] border-[5px] border-slate-800/90 bg-slate-900 shadow-2xl hero-phone-shadow overflow-hidden flex flex-col text-left select-none relative">
                {/* Dynamic Island / Notch */}
                <div className="h-6 bg-slate-900 flex items-center justify-center pt-1.5">
                  <div className="w-16 h-3 bg-black rounded-full" />
                </div>

                {/* Screen Content */}
                <div className="flex-1 bg-[#0b1021] p-3 text-white flex flex-col justify-between overflow-hidden text-xs">
                  <div>
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="font-semibold text-[11px] text-slate-300">
                        Your Insights
                      </span>
                      <span className="text-[9px] text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded-full">
                        Live Sync
                      </span>
                    </div>

                    {/* Summary Cards */}
                    <div className="mt-3 space-y-2.5">
                      <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-blue-300">
                            Asthma Spirometry
                          </span>
                          <span className="text-slate-400 text-[8px]">
                            10 Aug 2026
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-300 leading-snug">
                          Lungs clear bilaterally. Peak flow 420 L/min.
                          Compliant.
                        </p>
                        <span className="inline-block text-[8px] text-slate-400 font-mono">
                          Facility: LUTH Lagos
                        </span>
                      </div>

                      <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-blue-300">
                            Chest Radiograph
                          </span>
                          <span className="text-slate-400 text-[8px]">
                            18 May 2026
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-300 leading-snug">
                          PA view clear. No pulmonary infiltrates.
                        </p>
                        <span className="inline-block text-[8px] text-slate-400 font-mono">
                          Facility: Reddington
                        </span>
                      </div>

                      <div className="bg-blue-950/60 p-2.5 rounded-xl border border-blue-800/50">
                        <span className="text-[9px] uppercase font-bold text-blue-300 block">
                          Vitals Summary
                        </span>
                        <div className="grid grid-cols-2 gap-1 mt-1 text-[9px] text-slate-300">
                          <div>
                            BP: <strong className="text-white">120/80</strong>
                          </div>
                          <div>
                            Pulse:{" "}
                            <strong className="text-white">72 bpm</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Status Bar */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-blue-300" /> Fully
                      Encrypted
                    </span>
                    <span>RH-NG</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= CENTER PHONE: Flagship Universal Passport ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-[280px] sm:w-[310px] lg:w-[330px] z-20 origin-bottom shrink-0 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Phone Hardware Shell */}
              <div className="w-full h-[520px] sm:h-[560px] lg:h-[590px] rounded-[42px] border-[7px] border-slate-900 bg-slate-950 shadow-2xl hero-phone-shadow-elevated overflow-hidden flex flex-col text-left select-none relative">
                {/* Dynamic Island Notch */}
                <div className="h-7 bg-slate-950 flex items-center justify-between px-6 pt-1">
                  <span className="text-[10px] font-medium text-slate-300">
                    9:41
                  </span>
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300">
                    <span>5G</span>
                    <div className="w-3.5 h-2 border border-slate-400 rounded-sm p-0.5">
                      <div className="w-full h-full bg-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Screen Content: Rahama Patient Passport */}
                <div className="flex-1 bg-[#050b1a] p-4 text-white flex flex-col justify-between overflow-hidden">
                  <div>
                    {/* Profile Header with Real Black Patient Photo */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/amina-avatar.jpg"
                          alt="Amina Ibrahim Bello"
                          className="w-10 h-10 rounded-full object-cover border-2 border-blue-400/80 shadow-md shrink-0"
                        />
                        <div>
                          <span className="text-[10px] text-slate-400 block">
                            Universal Health Passport
                          </span>
                          <h4 className="text-sm font-bold font-heading text-white leading-tight">
                            Amina Ibrahim Bello
                          </h4>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                        <QrCode className="w-4 h-4 text-blue-300" />
                      </div>
                    </div>

                    {/* The Signature Rahama Health ID Card */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-[#0837ad] to-[#052370] p-4 border border-blue-400/30 shadow-lg text-white mb-4 overflow-hidden">
                      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-[9px] tracking-wider uppercase font-bold text-blue-200">
                          <Image
                            src="/rahama-logo-white.png"
                            alt="Rahama Logo"
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                          <span>Rahama Universal ID</span>
                        </div>
                        <span className="text-[9px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full font-mono border border-blue-400/30">
                          Active Sync
                        </span>
                      </div>

                      <div className="my-2">
                        <span className="font-mono text-xs sm:text-sm font-bold tracking-wider block text-white">
                          RH-8492-9102-NG
                        </span>
                        <span className="text-[10px] text-blue-200 block mt-0.5">
                          National Patient Registry
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 mt-2 border-t border-blue-500/30 text-[9px]">
                        <div>
                          <span className="text-blue-300 block text-[8px]">
                            Blood
                          </span>
                          <span className="font-bold">O+</span>
                        </div>
                        <div>
                          <span className="text-blue-300 block text-[8px]">
                            Genotype
                          </span>
                          <span className="font-bold">AA</span>
                        </div>
                        <div>
                          <span className="text-blue-300 block text-[8px]">
                            Facility
                          </span>
                          <span className="font-bold truncate block">
                            LUTH Lagos
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Access Permission Banner */}
                    <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 mb-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span className="text-[10px] font-semibold text-slate-200">
                            Doctor Access Control
                          </span>
                        </div>
                        <span className="text-[8px] text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">
                          You&apos;re in Charge
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-300 bg-slate-950/60 p-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <img
                            src="/doctor-avatar.jpg"
                            alt="Dr. Okonjo"
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          <span>Dr. Okonjo (LUTH)</span>
                        </div>
                        <span className="text-[9px] text-blue-200 font-semibold">
                          Approved
                        </span>
                      </div>
                    </div>

                    {/* Quick Action Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800/60 flex items-center gap-2">
                        <Pulse className="w-3.5 h-3.5 text-blue-300" />
                        <span className="text-slate-200">2 Lab Tests</span>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800/60 flex items-center gap-2">
                        <LockKey className="w-3.5 h-3.5 text-blue-300" />
                        <span className="text-slate-200">Bank-Grade</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Dock */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around text-slate-400 text-xs">
                    <div className="text-blue-400 flex flex-col items-center">
                      <Image
                        src="/rahama-logo-white.png"
                        alt="Passport"
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-[8px] mt-0.5">Passport</span>
                    </div>
                    <div className="hover:text-white flex flex-col items-center">
                      <FileText className="w-4 h-4" />
                      <span className="text-[8px] mt-0.5">Records</span>
                    </div>
                    <div className="hover:text-white flex flex-col items-center">
                      <UserCheck className="w-4 h-4" />
                      <span className="text-[8px] mt-0.5">Consent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT PHONE: Doctor Consent Authorization ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex flex-col items-center shrink-0 w-[240px] lg:w-[270px] z-10 origin-bottom-left hover:rotate-0 transition-transform duration-300"
            >
              {/* Phone Hardware Shell */}
              <div className="w-full h-[470px] lg:h-[510px] rounded-[38px] border-[5px] border-slate-800/90 bg-slate-900 shadow-2xl hero-phone-shadow overflow-hidden flex flex-col text-left select-none relative">
                {/* Dynamic Island Notch */}
                <div className="h-6 bg-slate-900 flex items-center justify-center pt-1.5">
                  <div className="w-16 h-3 bg-black rounded-full" />
                </div>

                {/* Screen Content */}
                <div className="flex-1 bg-[#0b1021] p-3 text-white flex flex-col justify-between overflow-hidden text-xs">
                  <div>
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="font-semibold text-[11px] text-slate-300">
                        Access Request
                      </span>
                      <span className="text-[9px] text-blue-300 font-semibold">
                        Pending OTP
                      </span>
                    </div>

                    {/* Doctor Access Modal Card with Real Doctor Avatar */}
                    <div className="mt-3 p-3 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 space-y-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/doctor-avatar.jpg"
                          alt="Dr. M. Sani"
                          className="w-8 h-8 rounded-full object-cover border border-white/25 shadow-sm shrink-0"
                        />
                        <div>
                          <span className="text-[9px] text-slate-400 block">
                            Emergency Visit
                          </span>
                          <span className="text-[11px] font-bold text-white">
                            Dr. M. Sani (FMC Abuja)
                          </span>
                        </div>
                      </div>

                      <p className="text-[9px] text-slate-300 leading-snug">
                        Dr. M. Sani requests 24h temporary access to your
                        allergy list and past records.
                      </p>

                      <div className="pt-2 space-y-1.5">
                        <div className="w-full py-2 rounded-lg bg-[#0837ad] hover:bg-[#062c8d] text-white font-semibold text-[10px] text-center shadow-md flex items-center justify-center gap-1 cursor-pointer transition-colors">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-200" />{" "}
                          Approve 24-Hr Access
                        </div>
                        <div className="w-full py-1.5 rounded-lg bg-slate-800 text-slate-400 text-[9px] text-center">
                          Deny Access
                        </div>
                      </div>
                    </div>

                    {/* Realtime Security Audit Log */}
                    <div className="mt-3 space-y-1.5">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block">
                        Security Audit Log
                      </span>
                      <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800 text-[9px] text-slate-300 space-y-1 font-mono">
                        <div className="flex items-center justify-between text-blue-300">
                          <span>✔ Access Verified</span>
                          <span className="text-[8px] text-slate-500">
                            10:14 AM
                          </span>
                        </div>
                        <p className="text-slate-400 text-[8px]">
                          LUTH Doctor Dr. Okonjo closed file.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Status Bar */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-blue-400" /> Full Access
                      History
                    </span>
                    <span className="text-blue-300 font-semibold">
                      100% Private
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
