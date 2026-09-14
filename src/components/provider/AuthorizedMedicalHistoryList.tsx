import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalRecord } from '@/types';

export interface AuthorizedMedicalHistoryListProps {
  patientRecords: MedicalRecord[];
}

export const AuthorizedMedicalHistoryList: React.FC<AuthorizedMedicalHistoryListProps> = ({
  patientRecords
}) => {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
          Authorized Medical History
        </h3>
        <Badge variant="navy" size="sm">
          {patientRecords.length} Records
        </Badge>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {patientRecords.map((rec) => (
          <div key={rec.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{new Date(rec.recordedAt).toLocaleDateString()}</span>
              <span className="text-[#FF6600] font-bold">{rec.category}</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rec.title}</h4>
            <p className="text-slate-600 dark:text-slate-300">{rec.summary}</p>
            <div className="text-[11px] text-slate-400 font-mono pt-1">
              Recorded at: {rec.hospitalName} ({rec.providerName})
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
