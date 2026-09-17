'use client';

import React from 'react';
import { Patient } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck } from '@phosphor-icons/react';

export interface PatientTopbarProps {
  patient: Patient;
}

export const PatientTopbar: React.FC<PatientTopbarProps> = ({ patient }) => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
          {patient.fullName}
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          ID: {patient.rahamaHealthId} | Blood: {patient.bloodGroup} | Genotype: {patient.genotype}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="blue" size="sm">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Patient Controlled
        </Badge>
      </div>
    </header>
  );
};
