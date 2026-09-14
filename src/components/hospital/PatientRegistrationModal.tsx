'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export interface PatientRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  patientName: string;
  setPatientName: (val: string) => void;
  patientPhone: string;
  setPatientPhone: (val: string) => void;
  patientDob: string;
  setPatientDob: (val: string) => void;
  patientGender: 'MALE' | 'FEMALE';
  setPatientGender: (val: 'MALE' | 'FEMALE') => void;
  isSubmitting: boolean;
}

export const PatientRegistrationModal: React.FC<PatientRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  patientName,
  setPatientName,
  patientPhone,
  setPatientPhone,
  patientDob,
  setPatientDob,
  patientGender,
  setPatientGender,
  isSubmitting
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Register Patient in Rahama Ecosystem"
      description="Creates a verified Rahama Health ID linked to this hospital."
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          label="Patient Full Name"
          placeholder="e.g. Chukwudi Emmanuel"
          required
          value={patientName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatientName(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Phone Number"
            placeholder="09012345678"
            required
            value={patientPhone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatientPhone(e.target.value)}
          />
          <Input
            label="Date of Birth"
            type="date"
            required
            value={patientDob}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPatientDob(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
          <select
            value={patientGender}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPatientGender(e.target.value as 'MALE' | 'FEMALE')}
            className="w-full px-3.5 py-2 rounded-lg border text-sm bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
          >
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
          </select>
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            Generate Health ID & Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};
