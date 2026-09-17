'use client';

import React from 'react';
import Image from 'next/image';
import { Hospital as HospitalIcon, ChartBar, Users, ArrowsLeftRight, Clock, SignOut } from '@phosphor-icons/react';
import { Hospital } from '@/types';

export interface HospitalSidebarProps {
  activeTab: 'overview' | 'patients' | 'referrals' | 'followups';
  setActiveTab: (tab: 'overview' | 'patients' | 'referrals' | 'followups') => void;
  hospital: Partial<Hospital>;
  onLogout: () => void;
}

export const HospitalSidebar: React.FC<HospitalSidebarProps> = ({
  activeTab,
  setActiveTab,
  hospital,
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
            <h2 className="text-sm font-bold font-heading text-white tracking-tight">HOSPITAL PORTAL</h2>
            <span className="text-[10px] text-blue-200 block">Rahama Infrastructure</span>
          </div>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-[#0837ad] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <ChartBar className="w-4 h-4" /> Overview & Analytics
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'patients' ? 'bg-[#0837ad] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" /> Patient Roster & Intake
          </button>
          <button
            onClick={() => setActiveTab('referrals')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'referrals' ? 'bg-[#0837ad] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <ArrowsLeftRight className="w-4 h-4" /> Secure Referrals
          </button>
          <button
            onClick={() => setActiveTab('followups')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'followups' ? 'bg-[#0837ad] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
            }`}
          >
            <Clock className="w-4 h-4" /> Follow-Up Scheduler
          </button>
        </nav>
      </div>

      <div className="pt-4 border-t border-blue-900/60 space-y-3">
        <div className="px-2">
          <p className="text-xs font-bold text-white truncate">{hospital.name}</p>
          <p className="text-[10px] text-blue-300 font-mono">Lic: {hospital.licenseNumber}</p>
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
