'use client';

import React from 'react';
import Image from 'next/image';
import { IdentificationCard, FileText, LockKey, Eye, Hospital as HospitalIcon, SignOut } from '@phosphor-icons/react';
import { Patient } from '@/types';

export interface PatientSidebarProps {
  activeTab: 'id' | 'records' | 'consent' | 'audit' | 'hospitals';
  setActiveTab: (tab: 'id' | 'records' | 'consent' | 'audit' | 'hospitals') => void;
  patient: Patient;
  onLogout: () => void;
}

export const PatientSidebar: React.FC<PatientSidebarProps> = ({
  activeTab,
  setActiveTab,
  patient,
  onLogout
}) => {
  return (
    <aside className="w-64 bg-[#00004d] text-white flex flex-col justify-between p-4 hidden md:flex border-r border-blue-900/60 shrink-0">
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-xl bg-[#0837ad] flex items-center justify-center p-1 text-white shadow-md overflow-hidden shrink-0">
            <Image
              src="/rahama-logo-white.png"
              alt="Rahama Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold font-heading text-white tracking-tight">PATIENT PORTAL</h2>
            <span className="text-[10px] text-blue-200 block">Digital Health Identity</span>
          </div>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => setActiveTab('id')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'id' ? 'bg-[#0837ad] text-white font-semibold shadow-sm' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <IdentificationCard className="w-4 h-4" /> Rahama Health ID Card
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'records' ? 'bg-[#0837ad] text-white font-semibold shadow-sm' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" /> Lifelong Medical Records
          </button>
          <button
            onClick={() => setActiveTab('consent')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'consent' ? 'bg-[#0837ad] text-white font-semibold shadow-sm' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <LockKey className="w-4 h-4" /> Consent & Permissions
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'audit' ? 'bg-[#0837ad] text-white font-semibold shadow-sm' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <Eye className="w-4 h-4" /> Access Audit Log
          </button>
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'hospitals' ? 'bg-[#0837ad] text-white font-semibold shadow-sm' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <HospitalIcon className="w-4 h-4" /> Home Hospital Selector
          </button>
        </nav>
      </div>

      <div className="pt-4 border-t border-blue-900/60 space-y-3">
        <div className="px-2">
          <p className="text-xs font-bold text-white truncate">{patient.fullName}</p>
          <p className="text-[10px] text-blue-300 font-mono">{patient.rahamaHealthId}</p>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-300 hover:bg-red-950/40 transition-colors"
        >
          <SignOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
};
