import React from 'react';
import { Card } from '@/components/ui/Card';
import { Users, ArrowsLeftRight, Clock, Hospital as HospitalIcon, ShieldCheck } from '@phosphor-icons/react';

export interface HospitalOverviewStatsProps {
  patientCount: number;
  referralCount: number;
  followupCount: number;
}

export const HospitalOverviewStats: React.FC<HospitalOverviewStatsProps> = ({
  patientCount,
  referralCount,
  followupCount
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium">Registered Patients</span>
          <p className="text-2xl font-extrabold font-heading text-[#000066] dark:text-blue-300 mt-1">
            {patientCount}
          </p>
        </div>
        <div className="p-3 bg-blue-50 dark:bg-slate-800 text-[#000066] dark:text-blue-300 rounded-xl">
          <Users className="w-6 h-6" />
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium">Active Referrals</span>
          <p className="text-2xl font-extrabold font-heading text-[#FF6600] mt-1">
            {referralCount}
          </p>
        </div>
        <div className="p-3 bg-orange-50 dark:bg-slate-800 text-[#FF6600] rounded-xl">
          <ArrowsLeftRight className="w-6 h-6" />
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium">Follow-Up Tasks</span>
          <p className="text-2xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400 mt-1">
            {followupCount}
          </p>
        </div>
        <div className="p-3 bg-emerald-50 dark:bg-slate-800 text-emerald-600 rounded-xl">
          <Clock className="w-6 h-6" />
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-medium">EMR Interop Status</span>
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Live Sync Active
          </p>
        </div>
        <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-xl">
          <HospitalIcon className="w-6 h-6" />
        </div>
      </Card>
    </div>
  );
};
