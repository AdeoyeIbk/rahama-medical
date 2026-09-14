import React from 'react';
import { WarningCircle } from '@phosphor-icons/react';

export const PendingVerificationBanner: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <WarningCircle className="w-6 h-6 text-amber-600 shrink-0" />
        <div>
          <strong className="block font-bold">Hospital Verification Under Audit:</strong>
          Your facility accreditation documents are under active review by Rahama Health Compliance. Clinical record sync is operating in restricted sandbox mode.
        </div>
      </div>
    </div>
  );
};
