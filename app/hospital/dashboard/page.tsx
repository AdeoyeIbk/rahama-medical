'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService, AuthSession } from '@/services/auth.service';
import { hospitalService } from '@/services/hospital.service';
import { Patient, Referral, FollowUpTask } from '@/types';
import { MOCK_PATIENT, MOCK_REFERRALS, MOCK_FOLLOWUPS } from '@/mocks/mockData';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import {
  Hospital,
  Users,
  UserPlus,
  ArrowsLeftRight,
  Clock,
  WarningCircle,
  SignOut,
  CheckCircle,
  Gear,
  ChartBar,
  ShieldCheck,
  Plus
} from '@phosphor-icons/react';

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
      // Load fallback default mock session for preview ease
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
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#00004d] text-white flex flex-col justify-between p-4 hidden md:flex border-r border-blue-900/60">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white font-bold">
              <Hospital className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold font-heading text-white tracking-tight">HOSPITAL PORTAL</h2>
              <span className="text-[10px] text-blue-200 block">Rahama Infrastructure</span>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'overview' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <ChartBar className="w-4 h-4" /> Overview & Analytics
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'patients' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" /> Patient Roster & Intake
            </button>
            <button
              onClick={() => setActiveTab('referrals')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'referrals' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <ArrowsLeftRight className="w-4 h-4" /> Secure Referrals
            </button>
            <button
              onClick={() => setActiveTab('followups')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'followups' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <Clock className="w-4 h-4" /> Follow-Up Scheduler
            </button>
          </nav>
        </div>

        <div className="pt-4 border-t border-blue-900/60 space-y-3">
          <div className="px-2">
            <p className="text-xs font-bold text-white truncate">{hospital.name}</p>
            <p className="text-[10px] text-blue-300 font-mono">Lic: {hospital.licenseNumber}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <SignOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              {hospital.name}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Facility Management & Patient Interoperability Suite
            </p>
          </div>

          <div className="flex items-center gap-3">
            {hospital.verificationStatus === 'VERIFIED' ? (
              <Badge variant="green" size="sm">
                <CheckCircle className="w-3.5 h-3.5" /> Accredited Partner
              </Badge>
            ) : (
              <Badge variant="amber" size="sm">
                <WarningCircle className="w-3.5 h-3.5" /> Verification Pending Review
              </Badge>
            )}

            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Register New Patient
            </Button>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Pending Verification Notice Banner */}
          {hospital.verificationStatus === 'PENDING' && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WarningCircle className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <strong className="block font-bold">Hospital Verification Under Audit:</strong>
                  Your facility accreditation documents are under active review by Rahama Health Compliance. Clinical record sync is operating in restricted sandbox mode.
                </div>
              </div>
            </div>
          )}

          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Registered Patients</span>
                    <p className="text-2xl font-extrabold font-heading text-[#000066] dark:text-blue-300 mt-1">
                      {registeredPatients.length}
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
                      {MOCK_REFERRALS.length}
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
                      {MOCK_FOLLOWUPS.length}
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
                    <Hospital className="w-6 h-6" />
                  </div>
                </Card>
              </div>

              {/* Patient List Table */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                    Facility Patient Roster
                  </h3>
                  <Button size="sm" variant="outline" onClick={() => setIsRegisterModalOpen(true)}>
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
                      {registeredPatients.map((pat) => (
                        <tr key={pat.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                          <td className="p-3 font-bold text-slate-900 dark:text-white">{pat.fullName}</td>
                          <td className="p-3 font-mono text-[#000066] dark:text-blue-300 font-semibold">
                            {pat.rahamaHealthId}
                          </td>
                          <td className="p-3">{pat.gender} ({pat.genotype})</td>
                          <td className="p-3 text-slate-600 dark:text-slate-400">{pat.phone}</td>
                          <td className="p-3">{pat.homeHospitalName || hospital.name}</td>
                          <td className="p-3">
                            <span className="text-[11px] text-[#FF6600] font-semibold hover:underline cursor-pointer">
                              View Profile
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Patients Tab */}
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

          {/* Referrals Tab */}
          {activeTab === 'referrals' && (
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading">Secure Cross-Hospital Referrals</h3>
              <div className="space-y-3">
                {MOCK_REFERRALS.map((ref) => (
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
          )}

          {/* Follow-ups Tab */}
          {activeTab === 'followups' && (
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading">Patient Follow-Up Tools</h3>
              <div className="space-y-3">
                {MOCK_FOLLOWUPS.map((fol) => (
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
          )}
        </main>
      </div>

      {/* Patient Intake Registration Modal */}
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title="Register Patient in Rahama Ecosystem"
        description="Creates a verified Rahama Health ID linked to this hospital."
      >
        <form onSubmit={handleCreatePatient} className="space-y-4">
          <Input
            label="Patient Full Name"
            placeholder="e.g. Chukwudi Emmanuel"
            required
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Phone Number"
              placeholder="09012345678"
              required
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
            />
            <Input
              label="Date of Birth"
              type="date"
              required
              value={patientDob}
              onChange={(e) => setPatientDob(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Gender</label>
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value as 'MALE' | 'FEMALE')}
              className="w-full px-3.5 py-2 rounded-lg border text-sm bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
            >
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
            </select>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setIsRegisterModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" isLoading={isSubmittingPatient}>
              Generate Health ID & Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
