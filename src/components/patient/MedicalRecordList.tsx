import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalRecord } from '@/types';
import { LockKey } from '@phosphor-icons/react';

export interface MedicalRecordListProps {
  records: MedicalRecord[];
}

export const MedicalRecordList: React.FC<MedicalRecordListProps> = ({ records }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LockKey className="w-4 h-4 text-[#0837ad] dark:text-blue-400" />
          <span>
            <strong>Read-Only Clinical View:</strong> Patients can view certified clinical records from participating hospitals. Clinical entries cannot be altered by patients.
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {records.map((rec) => (
          <Card key={rec.id} className="p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#0837ad] dark:text-blue-400 tracking-wider font-mono">
                  {rec.category} • {new Date(rec.recordedAt).toLocaleDateString()}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  {rec.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Facility: <strong>{rec.hospitalName}</strong> | Provider: <strong>{rec.providerName}</strong> ({rec.providerTitle})
                </p>
              </div>
              <Badge variant="navy" size="sm">256-bit Encrypted</Badge>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {rec.summary}
            </p>

            {rec.clinicalDetails.notes && (
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 font-mono">
                {rec.clinicalDetails.notes}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
