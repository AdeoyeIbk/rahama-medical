'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService, AuthSession } from '@/services/auth.service';
import { patientService } from '@/services/patient.service';
import { hospitalService } from '@/services/hospital.service';
import { Patient, MedicalRecord, ConsentPermission, AuditLog, Hospital } from '@/types';
import { MOCK_PATIENT } from '@/mocks/mockData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import {
  User,
  IdentificationCard,
  FileText,
  LockKey,
  Eye,
  Hospital as HospitalIcon,
  SignOut,
  CheckCircle,
  Plus,
  Trash,
  QrCode,
  ShieldCheck,
  WarningCircle,
  ShareNetwork,
  Clock
} from '@phosphor-icons/react';

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
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#00004d] text-white flex flex-col justify-between p-4 hidden md:flex border-r border-blue-900/60">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold font-heading text-white tracking-tight">PATIENT PORTAL</h2>
              <span className="text-[10px] text-blue-200 block">Digital Health Identity</span>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('id')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'id' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <IdentificationCard className="w-4 h-4" /> Rahama Health ID Card
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'records' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <FileText className="w-4 h-4" /> Lifelong Medical Records
            </button>
            <button
              onClick={() => setActiveTab('consent')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'consent' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <LockKey className="w-4 h-4" /> Consent & Permissions
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'audit' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <Eye className="w-4 h-4" /> Access Audit Log
            </button>
            <button
              onClick={() => setActiveTab('hospitals')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'hospitals' ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
              }`}
            >
              <HospitalIcon className="w-4 h-4" /> Home Hospital Selector
            </button>
          </nav>
        </div>

        <div className="pt-4 border-t border-blue-900/60 space-y-3">
          <div className="px-2">
            <p className="text-xs font-bold text-white truncate">{patient.fullName}</p>
            <p className="text-[10px] text-blue-300 font-mono">{patient.rahamaHealthId}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <SignOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              {patient.fullName}
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              ID: {patient.rahamaHealthId} | Blood: {patient.bloodGroup} | Genotype: {patient.genotype}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="orange" size="sm">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Patient Controlled
            </Badge>
          </div>
        </header>

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* TAB 1: DIGITAL HEALTH ID CARD */}
          {activeTab === 'id' && (
            <div className="space-y-6">
              <div className="max-w-xl mx-auto">
                <Card accentBorder className="bg-gradient-to-br from-[#000066] to-[#00004d] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-widest block">
                        RAHAMA DIGITAL HEALTH ID
                      </span>
                      <h2 className="text-2xl font-extrabold font-heading text-white mt-1">
                        {patient.fullName}
                      </h2>
                      <p className="text-sm font-mono text-blue-200 mt-0.5">{patient.rahamaHealthId}</p>
                    </div>

                    <div className="w-16 h-16 bg-white p-2 rounded-xl flex items-center justify-center text-slate-900 shadow-lg">
                      <QrCode className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-t border-b border-blue-800/80 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Blood Group</span>
                      <span className="font-bold text-white">{patient.bloodGroup}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Genotype</span>
                      <span className="font-bold text-white">{patient.genotype}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">DOB</span>
                      <span className="font-bold text-white">{patient.dateOfBirth}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Home Hospital</span>
                      <span className="font-bold text-orange-300 truncate block">{patient.homeHospitalName || 'LUTH'}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs text-blue-200">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" /> Active Verified Profile
                    </span>
                    <button
                      onClick={() => alert(`Shareable Emergency Token: TOKEN-EXP-${Date.now()}`)}
                      className="text-[#FF6600] font-semibold hover:underline flex items-center gap-1"
                    >
                      <ShareNetwork className="w-3.5 h-3.5" /> Share Profile Token
                    </button>
                  </div>
                </Card>
              </div>

              {/* Emergency Contact & Allergy Notice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <Card>
                  <h4 className="text-xs uppercase font-bold text-[#FF6600] mb-2 font-heading">Known Allergies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {patient.allergies.map((a: string) => (
                      <Badge key={a} variant="orange">{a}</Badge>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h4 className="text-xs uppercase font-bold text-[#000066] dark:text-blue-300 mb-2 font-heading">Emergency Contact</h4>
                  <p className="text-sm font-bold">{patient.emergencyContact.name} ({patient.emergencyContact.relationship})</p>
                  <p className="text-xs text-slate-500 font-mono">{patient.emergencyContact.phone}</p>
                </Card>
              </div>
            </div>
          )}

          {/* TAB 2: LIFELONG MEDICAL RECORDS (READ ONLY!) */}
          {activeTab === 'records' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LockKey className="w-4 h-4 text-[#FF6600]" />
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
                        <span className="text-[10px] uppercase font-bold text-[#FF6600] tracking-wider font-mono">
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
          )}

          {/* TAB 3: CONSENT MANAGER */}
          {activeTab === 'consent' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading">Record Access Consent Manager</h3>
                  <p className="text-xs text-slate-500">Grant or revoke record visibility to facilities and providers.</p>
                </div>
                <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={() => setIsGrantModalOpen(true)}>
                  Grant New Access Consent
                </Button>
              </div>

              <div className="space-y-3">
                {consents.map((con) => (
                  <Card key={con.id} className="flex items-center justify-between p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">{con.targetName}</span>
                        {con.isActive ? (
                          <Badge variant="green" size="sm">ACTIVE</Badge>
                        ) : (
                          <Badge variant="slate" size="sm">REVOKED</Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Scope: <strong>{con.scope}</strong> | Granted: {new Date(con.grantedAt).toLocaleDateString()}</p>
                    </div>

                    {con.isActive && (
                      <Button
                        size="sm"
                        variant="danger"
                        leftIcon={<Trash className="w-3.5 h-3.5" />}
                        onClick={() => handleRevokeConsent(con.id)}
                      >
                        Revoke Access
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: AUDIT LOG */}
          {activeTab === 'audit' && (
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading">Real-Time Access Audit Trail</h3>
              <p className="text-xs text-slate-500">Immutable record of every lookup, consultation, and consent update.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="p-3">Timestamp</th>
                      <th className="p-3">Accessor</th>
                      <th className="p-3">Facility</th>
                      <th className="p-3">Action</th>
                      <th className="p-3">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {auditLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="p-3 font-mono text-slate-500">{new Date(log.timestamp).toLocaleString()}</td>
                        <td className="p-3 font-bold">{log.accessedBy} ({log.accessorRole})</td>
                        <td className="p-3">{log.accessorFacility}</td>
                        <td className="p-3 font-mono text-[#FF6600] font-semibold">{log.action}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-400">{log.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* TAB 5: HOME HOSPITAL SELECTOR */}
          {activeTab === 'hospitals' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-heading">Select Home Hospital</h3>
              <p className="text-xs text-slate-500">Your Home Hospital acts as your primary clinical registrar in Rahama.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospitals.map((hosp) => {
                  const isSelected = patient.homeHospitalId === hosp.id;
                  return (
                    <Card key={hosp.id} className="flex items-center justify-between p-4">
                      <div>
                        <h4 className="font-bold text-sm">{hosp.name}</h4>
                        <p className="text-xs text-slate-500">{hosp.city}, {hosp.state}</p>
                      </div>

                      <Button
                        size="sm"
                        variant={isSelected ? 'outline' : 'primary'}
                        onClick={() => handleSetHomeHospital(hosp)}
                      >
                        {isSelected ? 'Current Primary' : 'Set as Home'}
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Grant Consent Modal */}
      <Modal
        isOpen={isGrantModalOpen}
        onClose={() => setIsGrantModalOpen(false)}
        title="Grant Temporary Record Access"
        description="Authorizes a doctor or hospital facility to view your records."
      >
        <form onSubmit={handleGrantConsent} className="space-y-4">
          <Input
            label="Doctor / Facility Name"
            placeholder="e.g. Dr. Fatima Abubakar (Reddington Hospital)"
            required
            value={grantTargetName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrantTargetName(e.target.value)}
          />

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Access Scope</label>
            <select
              value={grantScope}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGrantScope(e.target.value as any)}
              className="w-full px-3 py-2 rounded-lg border text-sm bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
            >
              <option value="SUMMARY">Clinical Summary Only</option>
              <option value="FULL">Full Lifelong Records</option>
              <option value="EMERGENCY_ONLY">Emergency Profile Only</option>
            </select>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setIsGrantModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" isLoading={isSubmittingGrant}>
              Authorize Consent
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
