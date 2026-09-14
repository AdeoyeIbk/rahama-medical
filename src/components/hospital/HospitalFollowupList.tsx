import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FollowUpTask } from '@/types';

export interface HospitalFollowupListProps {
  followups: FollowUpTask[];
}

export const HospitalFollowupList: React.FC<HospitalFollowupListProps> = ({ followups }) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-bold font-heading">Patient Follow-Up Tools</h3>
      <div className="space-y-3">
        {followups.map((fol) => (
          <div key={fol.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">{fol.patientName}</span>
              <p className="text-slate-500 mt-0.5 font-semibold text-[#000066] dark:text-blue-300">
                Purpose: {fol.purpose}
              </p>
              <p className="text-slate-400 text-[11px]">Scheduled: {fol.scheduledDate} ({fol.channel})</p>
            </div>
            <Badge variant="orange" size="sm">{fol.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
