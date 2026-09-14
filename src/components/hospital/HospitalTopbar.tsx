'use client';

import React from 'react';
import { Hospital } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, WarningCircle, Plus } from '@phosphor-icons/react';

export interface HospitalTopbarProps {
  hospital: Partial<Hospital>;
  onOpenRegisterModal: () => void;
}

export const HospitalTopbar: React.FC<HospitalTopbarProps> = ({ hospital, onOpenRegisterModal }) => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
          {hospital.name}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Facility Management & Patient Interoperability Suite
        </p>
      </div>

      <div className="flex items-center gap-3">
        {hospital.verificationStatus === 'VERIFIED' ? (
          <Badge variant="green" size="sm">
            <CheckCircle className="w-3.5 h-3.5" /> Accredited Partner
          </Badge>
        ) : (
          <Badge variant="amber" size="sm">
            <WarningCircle className="w-3.5 h-3.5" /> Verification Pending Review
          </Badge>
        )}

        <Button
          variant="primary"
          size="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={onOpenRegisterModal}
        >
          Register New Patient
        </Button>
      </div>
    </header>
  );
};
