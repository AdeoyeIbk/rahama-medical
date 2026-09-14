import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ProviderLookupResult } from '@/services/provider.service';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react';

export interface PatientConsentStatusBannerProps {
  lookupResult: ProviderLookupResult | null;
}

export const PatientConsentStatusBanner: React.FC<PatientConsentStatusBannerProps> = ({ lookupResult }) => {
  if (!lookupResult) {
    return (
      <Card className="p-8 text-center">
        <p className="text-sm text-slate-500">Enter a valid Rahama Health ID to retrieve authorized records.</p>
      </Card>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
            {lookupResult.patient.fullName}
          </h2>
          <span className="text-xs font-mono text-[#000066] dark:text-blue-300 font-bold bg-blue-50 dark:bg-slate-800 px-2 py-0.5 rounded">
            {lookupResult.patient.rahamaHealthId}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          DOB: {lookupResult.patient.dateOfBirth} | Blood: {lookupResult.patient.bloodGroup} | Genotype: {lookupResult.patient.genotype} | Home Hosp: {lookupResult.patient.homeHospitalName}
        </p>
      </div>

      <div>
        {lookupResult.hasActiveConsent ? (
          <Badge variant="green" size="md">
            <CheckCircle className="w-4 h-4" /> Active Patient Consent Verified
          </Badge>
        ) : (
          <Badge variant="orange" size="md">
            <WarningCircle className="w-4 h-4" /> Consent Required from Patient
          </Badge>
        )}
      </div>
    </div>
  );
};
