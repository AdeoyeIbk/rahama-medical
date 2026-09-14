'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';
import { patientService } from '@/services/patient.service';
import { hospitalService } from '@/services/hospital.service';
import { Patient, MedicalRecord, ConsentPermission, AuditLog, Hospital } from '@/types';
import { MOCK_PATIENT } from '@/mocks/mockData';
import { PatientSidebar } from '@/components/patient/PatientSidebar';
import { PatientTopbar } from '@/components/patient/PatientTopbar';
import { HealthIdCardSection } from '@/components/patient/HealthIdCardSection';
import { MedicalRecordList } from '@/components/patient/MedicalRecordList';
import { ConsentManager } from '@/components/patient/ConsentManager';
import { AuditLogTable } from '@/components/patient/AuditLogTable';
import { HomeHospitalSelector } from '@/components/patient/HomeHospitalSelector';
import { GrantConsentModal } from '@/components/patient/GrantConsentModal';

export default function PatientDashboardPage() {
  const router = useRouter();
  const [patient, setPatient] = useState<Patient>(MOCK_PATIENT);
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [consents, setConsents] = useState<ConsentPermission[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [activeTab, setActiveTab] = useState<'id' | 'records' | 'consent' | 'audit' | 'hospitals'>('id');

  // Grant Consent Modal State
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  const [grantTargetName, setGrantTargetName] = useState('');
  const [grantScope, setGrantScope] = useState<'FULL' | 'SUMMARY' | 'EMERGENCY_ONLY'>('SUMMARY');
  const [isSubmittingGrant, setIsSubmittingGrant] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const pRes = await patientService.getPatientProfile();
    if (pRes.data) setPatient(pRes.data);

    const rRes = await patientService.getMedicalRecords(MOCK_PATIENT.rahamaHealthId);
    if (rRes.data) setRecords(rRes.data);

    const cRes = await patientService.getConsents(MOCK_PATIENT.id);
    if (cRes.data) setConsents(cRes.data);

    const aRes = await patientService.getAuditLogs(MOCK_PATIENT.id);
    if (aRes.data) setAuditLogs(aRes.data);

    const hRes = await hospitalService.getHospitals();
    if (hRes.data) setHospitals(hRes.data);
  };

  const handleLogout = async () => {
    await authService.logout();
    router.push('/patient/login');
  };

  const handleGrantConsent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingGrant(true);
    const res = await patientService.grantConsent({
      targetName: grantTargetName || 'Reddington Hospital Doctor',
      targetType: 'PROVIDER',
      scope: grantScope
    });
    setIsSubmittingGrant(false);
    if (res.success) {
      setIsGrantModalOpen(false);
      setGrantTargetName('');
      loadData();
    }
  };

  const handleRevokeConsent = async (id: string) => {
    await patientService.revokeConsent(id);
    loadData();
  };

  const handleSetHomeHospital = async (hosp: Hospital) => {
    setPatient({ ...patient, homeHospitalId: hosp.id, homeHospitalName: hosp.name });
    await hospitalService.setHomeHospital(patient.id, hosp.id);
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-[#030318] text-slate-900 dark:text-slate-100">
      <PatientSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        patient={patient}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <PatientTopbar patient={patient} />

        <main className="p-6 space-y-6 overflow-y-auto">
          {activeTab === 'id' && <HealthIdCardSection patient={patient} />}

          {activeTab === 'records' && <MedicalRecordList records={records} />}

          {activeTab === 'consent' && (
            <ConsentManager
              consents={consents}
              onOpenGrantModal={() => setIsGrantModalOpen(true)}
              onRevokeConsent={handleRevokeConsent}
            />
          )}

          {activeTab === 'audit' && <AuditLogTable auditLogs={auditLogs} />}

          {activeTab === 'hospitals' && (
            <HomeHospitalSelector
              hospitals={hospitals}
              patient={patient}
              onSetHomeHospital={handleSetHomeHospital}
            />
          )}
        </main>
      </div>

      <GrantConsentModal
        isOpen={isGrantModalOpen}
        onClose={() => setIsGrantModalOpen(false)}
        onSubmit={handleGrantConsent}
        grantTargetName={grantTargetName}
        setGrantTargetName={setGrantTargetName}
        grantScope={grantScope}
        setGrantScope={setGrantScope}
        isSubmitting={isSubmittingGrant}
      />
    </div>
  );
}
