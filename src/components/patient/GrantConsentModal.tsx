'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export interface GrantConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  grantTargetName: string;
  setGrantTargetName: (val: string) => void;
  grantScope: 'FULL' | 'SUMMARY' | 'EMERGENCY_ONLY';
  setGrantScope: (val: 'FULL' | 'SUMMARY' | 'EMERGENCY_ONLY') => void;
  isSubmitting: boolean;
}

export const GrantConsentModal: React.FC<GrantConsentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  grantTargetName,
  setGrantTargetName,
  grantScope,
  setGrantScope,
  isSubmitting
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Grant Temporary Record Access"
      description="Authorizes a doctor or hospital facility to view your records."
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          label="Doctor / Facility Name"
          placeholder="e.g. Dr. Fatima Abubakar (Reddington Hospital)"
          required
          value={grantTargetName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrantTargetName(e.target.value)}
        />

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Access Scope</label>
          <select
            value={grantScope}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setGrantScope(e.target.value as 'FULL' | 'SUMMARY' | 'EMERGENCY_ONLY')
            }
            className="w-full px-3 py-2 rounded-lg border text-sm bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
          >
            <option value="SUMMARY">Clinical Summary Only</option>
            <option value="FULL">Full Lifelong Records</option>
            <option value="EMERGENCY_ONLY">Emergency Profile Only</option>
          </select>
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            Authorize Consent
          </Button>
        </div>
      </form>
    </Modal>
  );
};
