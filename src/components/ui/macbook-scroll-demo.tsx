"use client";
import React from "react";
import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ShieldCheck, LockKey, Hospital, UserCheck } from "@phosphor-icons/react";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <MacbookScroll
        showGradient={false}
      >
        {/* Patient Record Dashboard Preview Screen on Macbook */}
        <div className="w-full h-full bg-[#030318] text-white p-3 font-sans text-left space-y-2 overflow-hidden border border-blue-900/60 rounded-lg">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-blue-900/60">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#0837ad] flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                <Image
                  src="/rahama-logo-white.png"
                  alt="Rahama Logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold font-heading text-white">RAHAMA PATIENT PORTAL</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3" /> Active Authorized Sync
            </div>
          </div>

          {/* Patient Card Banner */}
          <div className="bg-[#00004d] p-3 rounded-lg border border-blue-800 flex items-center justify-between">
            <div>
              <span className="text-[8px] uppercase font-bold text-sky-400 tracking-wider block">Universal Health ID</span>
              <h4 className="text-sm font-bold text-white font-heading">Amina Ibrahim Bello</h4>
              <p className="text-[10px] font-mono text-blue-200">RH-8492-9102-NG • O+ • AA</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-slate-300 block">Home Hospital</span>
              <span className="text-[10px] font-semibold text-blue-300 flex items-center gap-1">
                <Hospital className="w-3 h-3" /> LUTH Lagos
              </span>
            </div>
          </div>

          {/* Medical Records Summary Stream */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[9px] font-mono uppercase text-slate-400 block font-bold">Consolidated Lifelong Records</span>
            
            <div className="p-2 bg-slate-900/90 rounded border border-slate-800 text-[10px] space-y-0.5">
              <div className="flex items-center justify-between text-blue-300 font-bold">
                <span>Asthma Spirometry Evaluation</span>
                <span className="text-blue-300 text-[8px] font-mono">LUTH Lagos • 10 Aug 2026</span>
              </div>
              <p className="text-slate-300 text-[9px]">Lungs clear bilaterally. Peak flow 420 L/min. Inhaler technique confirmed compliant.</p>
            </div>

            <div className="p-2 bg-slate-900/90 rounded border border-slate-800 text-[10px] space-y-0.5">
              <div className="flex items-center justify-between text-blue-300 font-bold">
                <span>Chest Radiograph (PA View)</span>
                <span className="text-blue-300 text-[8px] font-mono">Reddington Hospital • 18 May 2026</span>
              </div>
              <p className="text-slate-300 text-[9px]">High-resolution PA radiograph. No pulmonary edema or hilar opacity.</p>
            </div>
          </div>
        </div>
      </MacbookScroll>
    </div>
  );
}
