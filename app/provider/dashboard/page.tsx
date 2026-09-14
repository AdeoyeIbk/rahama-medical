'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService, AuthSession } from '@/services/auth.service';
import { providerService, ProviderLookupResult } from '@/services/provider.service';
import { aiNotesService } from '@/services/ai-notes.service';
import { MedicalRecord, ClinicalNoteDraft } from '@/types';
import { MOCK_AI_DRAFT, MOCK_PATIENT } from '@/mocks/mockData';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Heartbeat,
  MagnifyingGlass,
  CheckCircle,
  WarningCircle,
  Sparkle,
  FileText,
  SignOut,
  ShieldCheck,
  Check,
  NotePencil,
  FloppyDisk
} from '@phosphor-icons/react';

export default function ProviderDashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<AuthSession | null>(null);
  
  // Patient Lookup State
  const [searchHealthId, setSearchHealthId] = useState('RH-8492-9102-NG');
  const [lookupResult, setLookupResult] = useState<ProviderLookupResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [patientRecords, setPatientRecords] = useState<MedicalRecord[]>([]);

  // AI Documentation Assistant State
  const [consultationText, setConsultationText] = useState(MOCK_AI_DRAFT.rawTranscript);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiDraft, setAiDraft] = useState<ClinicalNoteDraft | null>(null);
  
  // Doctor Approval & Edit State
  const [subjectiveEdit, setSubjectiveEdit] = useState('');
  const [objectiveEdit, setObjectiveEdit] = useState('');
  const [assessmentEdit, setAssessmentEdit] = useState('');
  const [planEdit, setPlanEdit] = useState('');
  const [isDoctorApproved, setIsDoctorApproved] = useState(false);
  const [isSavingRecord, setIsSavingRecord] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');

  useEffect(() => {
    const s = authService.getCurrentSession('PROVIDER');
    if (!s) {
      authService.providerLogin('MCN/PAT/8892-NG', 'docpass').then((res) => {
        if (res.data) setSession(res.data);
      });
    } else {
      setSession(s);
    }
    // Auto-search default patient for initial view
    handleLookup('RH-8492-9102-NG');
  }, []);

  const handleLookup = async (idToSearch?: string) => {
    const query = idToSearch || searchHealthId;
    if (!query) return;
    setIsSearching(true);
    setLookupResult(null);

    const res = await providerService.lookupPatientByHealthId(query);
    setIsSearching(false);

    if (res.success && res.data) {
      setLookupResult(res.data);
      const recRes = await providerService.getAuthorizedRecords(res.data.patient.rahamaHealthId);
      if (recRes.data) setPatientRecords(recRes.data);
    }
  };

  const handleGenerateAiNote = async () => {
    setIsGeneratingAi(true);
    const res = await aiNotesService.generateDraftFromTranscript(
      lookupResult?.patient.id || 'pat-901',
      consultationText
    );
    setIsGeneratingAi(false);

    if (res.success && res.data) {
      setAiDraft(res.data);
      setSubjectiveEdit(res.data.structuredNote.subjective);
      setObjectiveEdit(res.data.structuredNote.objective);
      setAssessmentEdit(res.data.structuredNote.assessment);
      setPlanEdit(res.data.structuredNote.plan);
      setIsDoctorApproved(false);
      setSaveSuccessMessage('');
    }
  };

  const handleDoctorApproveAndSave = async () => {
    if (!aiDraft) return;
    setIsSavingRecord(true);

    const updatedDraft: ClinicalNoteDraft = {
      ...aiDraft,
      status: 'APPROVED',
      editedByDoctor: true,
      structuredNote: {
        ...aiDraft.structuredNote,
        subjective: subjectiveEdit,
        objective: objectiveEdit,
        assessment: assessmentEdit,
        plan: planEdit
      }
    };

    const res = await aiNotesService.approveAndSaveNote(
      aiDraft.id,
      updatedDraft,
      session?.user.name || 'Dr. Olumide Ogunlesi',
      'Lagos University Teaching Hospital (LUTH)'
    );

    setIsSavingRecord(false);
    if (res.success && res.data) {
      setIsDoctorApproved(true);
      setSaveSuccessMessage(res.message || 'Clinical note approved and committed to patient record.');
      setPatientRecords([res.data, ...patientRecords]);
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    router.push('/provider/login');
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-[#030318] text-slate-900 dark:text-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#00004d] text-white flex flex-col justify-between p-4 hidden md:flex border-r border-blue-900/60">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white font-bold">
              <Heartbeat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold font-heading text-white tracking-tight">DOCTOR PORTAL</h2>
              <span className="text-[10px] text-blue-200 block">Clinical Lookup & AI Notes</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800 text-xs space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#FF6600]">Verified Practitioner</span>
            <p className="font-bold text-white text-sm">{session?.user.name || 'Dr. Olumide Ogunlesi'}</p>
            <p className="text-[11px] text-blue-200 font-mono">MDCN: MCN/PAT/8892-NG</p>
          </div>
        </div>

        <div className="pt-4 border-t border-blue-900/60">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <SignOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Lookup Bar */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              Clinical Encounter Suite
            </h1>
            <p className="text-xs text-slate-500">
              Lookup patient by Rahama Health ID & draft AI-assisted consultation notes
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Input
              placeholder="Search Rahama Health ID..."
              value={searchHealthId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchHealthId(e.target.value)}
              className="font-mono text-xs w-full sm:w-64"
            />
            <Button
              variant="primary"
              size="sm"
              isLoading={isSearching}
              onClick={() => handleLookup()}
              leftIcon={<MagnifyingGlass className="w-4 h-4" />}
            >
              Lookup Patient
            </Button>
          </div>
        </header>

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Patient Context & Consent Status Banner */}
          {lookupResult ? (
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
          ) : (
            <Card className="p-8 text-center">
              <p className="text-sm text-slate-500">Enter a valid Rahama Health ID to retrieve authorized records.</p>
            </Card>
          )}

          {/* TWO COLUMN CLINICAL WORKSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Col: AI Clinical Documentation Assistant (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <Card className="p-6 space-y-4 border-2 border-blue-200 dark:border-blue-900">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#FF6600]/10 text-[#FF6600]">
                      <Sparkle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                        AI Clinical Documentation Assistant
                      </h3>
                      <p className="text-xs text-slate-500">Simulates consultation listening & drafts SOAP note</p>
                    </div>
                  </div>
                  <Badge variant="orange" size="sm">Human Approval Required</Badge>
                </div>

                {/* Consultation Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Consultation Audio Transcript Input
                  </label>
                  <textarea
                    rows={4}
                    value={consultationText}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setConsultationText(e.target.value)}
                    placeholder="Doctor: Good morning. How are you feeling today?..."
                    className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#000066]"
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  isLoading={isGeneratingAi}
                  onClick={handleGenerateAiNote}
                  leftIcon={<Sparkle className="w-4 h-4" />}
                >
                  Generate AI Clinical Note Draft
                </Button>

                {/* AI Draft Review & Edit Panel */}
                {aiDraft && (
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-[#000066] dark:text-blue-300 uppercase tracking-wide">
                        AI Draft Output (Confidence: {Math.round(aiDraft.aiConfidenceScore * 100)}%)
                      </span>
                      <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                        <NotePencil className="w-3.5 h-3.5" /> Doctor Review Mode
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          S — Subjective (History & Symptoms)
                        </label>
                        <textarea
                          rows={2}
                          value={subjectiveEdit}
                          onChange={(e) => setSubjectiveEdit(e.target.value)}
                          className="w-full p-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          O — Objective (Vitals & Physical Exam)
                        </label>
                        <textarea
                          rows={2}
                          value={objectiveEdit}
                          onChange={(e) => setObjectiveEdit(e.target.value)}
                          className="w-full p-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          A — Assessment (Diagnosis)
                        </label>
                        <textarea
                          rows={2}
                          value={assessmentEdit}
                          onChange={(e) => setAssessmentEdit(e.target.value)}
                          className="w-full p-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          P — Plan & Prescription
                        </label>
                        <textarea
                          rows={2}
                          value={planEdit}
                          onChange={(e) => setPlanEdit(e.target.value)}
                          className="w-full p-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-xs"
                        />
                      </div>
                    </div>

                    {/* Important Safeguard Rule: Doctor Approval Button */}
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
                      <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
                        <span>Safeguard: AI notes are never saved automatically. Doctor review & signature required.</span>
                      </div>

                      {saveSuccessMessage ? (
                        <div className="p-3 rounded bg-emerald-950 border border-emerald-800 text-xs text-emerald-300 font-semibold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" /> {saveSuccessMessage}
                        </div>
                      ) : (
                        <Button
                          variant="primary"
                          size="md"
                          className="w-full"
                          isLoading={isSavingRecord}
                          onClick={handleDoctorApproveAndSave}
                          leftIcon={<FloppyDisk className="w-4 h-4" />}
                        >
                          Doctor Approve & Commit to Medical Record
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Col: Authorized Medical History Viewer (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
