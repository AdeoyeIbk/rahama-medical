'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService, AuthSession } from '@/services/auth.service';
import { Patient } from '@/types';
import { MOCK_PATIENT, MOCK_REFERRALS, MOCK_FOLLOWUPS } from '@/mocks/mockData';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HospitalSidebar } from '@/components/hospital/HospitalSidebar';
import { HospitalTopbar } from '@/components/hospital/HospitalTopbar';
import { PendingVerificationBanner } from '@/components/hospital/PendingVerificationBanner';
import { HospitalOverviewStats } from '@/components/hospital/HospitalOverviewStats';
import { HospitalPatientTable } from '@/components/hospital/HospitalPatientTable';
import { HospitalReferralList } from '@/components/hospital/HospitalReferralList';
import { HospitalFollowupList } from '@/components/hospital/HospitalFollowupList';
import { PatientRegistrationModal } from '@/components/hospital/PatientRegistrationModal';

export default function HospitalDashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<AuthSession | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'patients' | 'referrals' | 'followups'>('overview');
  
  // Registration Modal State
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientDob, setPatientDob] = useState('');
  const [patientGender, setPatientGender] = useState<'MALE' | 'FEMALE'>('FEMALE');
  const [registeredPatients, setRegisteredPatients] = useState<Patient[]>([MOCK_PATIENT]);
  const [isSubmittingPatient, setIsSubmittingPatient] = useState(false);

  useEffect(() => {
    const s = authService.getCurrentSession('HOSPITAL');
    if (!s) {
      authService.hospitalLogin('contact@luth.gov.ng', 'pass').then((res) => {
        if (res.data) setSession(res.data);
      });
    } else {
      setSession(s);
    }
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    router.push('/hospital/login');
  };

  const handleCreatePatient = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPatient(true);
    setTimeout(() => {
      const newPat: Patient = {
        id: `pat-${Date.now()}`,
        rahamaHealthId: `RH-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-NG`,
        fullName: patientName,
        dateOfBirth: patientDob || '1995-04-12',
        gender: patientGender,
        bloodGroup: 'B+',
        genotype: 'AA',
        phone: patientPhone,
        email: `${patientName.toLowerCase().replace(/\s+/g, '.')}@example.com`,
        address: '15 Ikeja GRA',
        city: 'Lagos',
        state: 'Lagos State',
        country: 'Nigeria',
        homeHospitalName: session?.hospitalProfile?.name || 'Lagos University Teaching Hospital (LUTH)',
        allergies: ['None Reported'],
        chronicConditions: ['None Reported'],
        emergencyContact: { name: 'Next of Kin', relationship: 'Family', phone: patientPhone }
      };
      setRegisteredPatients([newPat, ...registeredPatients]);
      setIsSubmittingPatient(false);
      setIsRegisterModalOpen(false);
      setPatientName('');
      setPatientPhone('');
    }, 400);
  };

  const hospital = session?.hospitalProfile || {
    name: 'Lagos University Teaching Hospital (LUTH)',
    licenseNumber: 'HEFAMAA/LUTH/2024/091',
    verificationStatus: 'VERIFIED',
    city: 'Lagos',
    state: 'Lagos State'
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-[#030318] text-slate-900 dark:text-slate-100">
      <HospitalSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hospital={hospital}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <HospitalTopbar
          hospital={hospital}
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />

        <main className="p-6 space-y-6 overflow-y-auto">
          {hospital.verificationStatus === 'PENDING' && <PendingVerificationBanner />}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <HospitalOverviewStats
                patientCount={registeredPatients.length}
                referralCount={MOCK_REFERRALS.length}
                followupCount={MOCK_FOLLOWUPS.length}
              />
              <HospitalPatientTable
                patients={registeredPatients}
                hospitalName={hospital.name}
                onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
              />
            </div>
          )}

          {activeTab === 'patients' && (
            <Card className="p-6">
              <h3 className="text-lg font-bold font-heading mb-4">Patient Intake & Registration</h3>
              <p className="text-xs text-slate-500 mb-4">
                Hospitals issue Rahama Health IDs to patients during intake, creating a lifelong digital identity.
              </p>
              <Button variant="primary" onClick={() => setIsRegisterModalOpen(true)}>
                + Register New Patient ID
              </Button>
            </Card>
          )}

          {activeTab === 'referrals' && <HospitalReferralList referrals={MOCK_REFERRALS} />}

          {activeTab === 'followups' && <HospitalFollowupList followups={MOCK_FOLLOWUPS} />}
        </main>
      </div>

      <PatientRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSubmit={handleCreatePatient}
        patientName={patientName}
        setPatientName={setPatientName}
        patientPhone={patientPhone}
        setPatientPhone={setPatientPhone}
        patientDob={patientDob}
        setPatientDob={setPatientDob}
        patientGender={patientGender}
        setPatientGender={setPatientGender}
        isSubmitting={isSubmittingPatient}
      />
    </div>
  );
}
