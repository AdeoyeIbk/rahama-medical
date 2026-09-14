'use client';

import React from 'react';
import { Heartbeat, SignOut } from '@phosphor-icons/react';
import { AuthSession } from '@/services/auth.service';

export interface ProviderSidebarProps {
  session: AuthSession | null;
  onLogout: () => void;
}

export const ProviderSidebar: React.FC<ProviderSidebarProps> = ({ session, onLogout }) => {
  return (
    <aside className="w-64 bg-[#00004d] text-white flex flex-col justify-between p-4 hidden md:flex border-r border-blue-900/60 shrink-0">
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white font-bold">
            <Heartbeat className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold font-heading text-white tracking-tight">DOCTOR PORTAL</h2>
            <span className="text-[10px] text-blue-200 block">Clinical Lookup & AI Notes</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800 text-xs space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#FF6600]">Verified Practitioner</span>
          <p className="font-bold text-white text-sm">{session?.user.name || 'Dr. Olumide Ogunlesi'}</p>
          <p className="text-[11px] text-blue-200 font-mono">MDCN: MCN/PAT/8892-NG</p>
        </div>
      </div>

      <div className="pt-4 border-t border-blue-900/60">
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
