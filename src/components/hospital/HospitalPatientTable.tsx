import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Patient } from '@/types';

export interface HospitalPatientTableProps {
  patients: Patient[];
  hospitalName: string;
  onOpenRegisterModal: () => void;
}

export const HospitalPatientTable: React.FC<HospitalPatientTableProps> = ({
  patients,
  hospitalName,
  onOpenRegisterModal
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
          Facility Patient Roster
        </h3>
        <Button size="sm" variant="outline" onClick={onOpenRegisterModal}>
          + Register Patient
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th className="p-3">Patient Name</th>
              <th className="p-3">Rahama Health ID</th>
              <th className="p-3">Gender / Genotype</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Home Hospital</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {patients.map((pat) => (
              <tr key={pat.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <td className="p-3 font-bold text-slate-900 dark:text-white">{pat.fullName}</td>
                <td className="p-3 font-mono text-[#000066] dark:text-blue-300 font-semibold">
                  {pat.rahamaHealthId}
                </td>
                <td className="p-3">{pat.gender} ({pat.genotype})</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{pat.phone}</td>
                <td className="p-3">{pat.homeHospitalName || hospitalName}</td>
                <td className="p-3">
                  <span className="text-[11px] text-[#0837ad] dark:text-blue-400 font-semibold hover:underline cursor-pointer">
                    View Profile
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
