import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Referral } from '@/types';

export interface HospitalReferralListProps {
  referrals: Referral[];
}

export const HospitalReferralList: React.FC<HospitalReferralListProps> = ({ referrals }) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-bold font-heading">Secure Cross-Hospital Referrals</h3>
      <div className="space-y-3">
        {referrals.map((ref) => (
          <div key={ref.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">{ref.patientName}</span>
              <p className="text-slate-500 font-mono mt-0.5">{ref.rahamaHealthId}</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                From: <strong>{ref.fromHospitalName}</strong> → To: <strong>{ref.toHospitalName}</strong>
              </p>
              <p className="text-slate-500 italic mt-0.5">&ldquo;{ref.reason}&rdquo;</p>
            </div>
            <Badge variant="green" size="sm">{ref.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
