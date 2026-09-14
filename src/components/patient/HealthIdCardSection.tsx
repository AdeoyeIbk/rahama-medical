'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Patient } from '@/types';
import { QrCode, CheckCircle, ShareNetwork } from '@phosphor-icons/react';

export interface HealthIdCardSectionProps {
  patient: Patient;
}

export const HealthIdCardSection: React.FC<HealthIdCardSectionProps> = ({ patient }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-xl mx-auto">
        <Card accentBorder className="bg-gradient-to-br from-[#000066] to-[#00004d] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-widest block">
                RAHAMA DIGITAL HEALTH ID
              </span>
              <h2 className="text-2xl font-extrabold font-heading text-white mt-1">
                {patient.fullName}
              </h2>
              <p className="text-sm font-mono text-blue-200 mt-0.5">{patient.rahamaHealthId}</p>
            </div>

            <div className="w-16 h-16 bg-white p-2 rounded-xl flex items-center justify-center text-slate-900 shadow-lg">
              <QrCode className="w-12 h-12" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-t border-b border-blue-800/80 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] block">Blood Group</span>
              <span className="font-bold text-white">{patient.bloodGroup}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Genotype</span>
              <span className="font-bold text-white">{patient.genotype}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">DOB</span>
              <span className="font-bold text-white">{patient.dateOfBirth}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Home Hospital</span>
              <span className="font-bold text-orange-300 truncate block">{patient.homeHospitalName || 'LUTH'}</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs text-blue-200">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Active Verified Profile
            </span>
            <button
              onClick={() => alert(`Shareable Emergency Token: TOKEN-EXP-${Date.now()}`)}
              className="text-[#FF6600] font-semibold hover:underline flex items-center gap-1"
            >
              <ShareNetwork className="w-3.5 h-3.5" /> Share Profile Token
            </button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <Card>
          <h4 className="text-xs uppercase font-bold text-[#FF6600] mb-2 font-heading">Known Allergies</h4>
          <div className="flex flex-wrap gap-1.5">
            {patient.allergies.map((a: string) => (
              <Badge key={a} variant="orange">{a}</Badge>
            ))}
          </div>
        </Card>

        <Card>
          <h4 className="text-xs uppercase font-bold text-[#000066] dark:text-blue-300 mb-2 font-heading">Emergency Contact</h4>
          <p className="text-sm font-bold">{patient.emergencyContact.name} ({patient.emergencyContact.relationship})</p>
          <p className="text-xs text-slate-500 font-mono">{patient.emergencyContact.phone}</p>
        </Card>
      </div>
    </div>
  );
};
