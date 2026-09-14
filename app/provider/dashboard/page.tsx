'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService, AuthSession } from '@/services/auth.service';
import { providerService, ProviderLookupResult } from '@/services/provider.service';
import { aiNotesService } from '@/services/ai-notes.service';
import { MedicalRecord, ClinicalNoteDraft } from '@/types';
import { MOCK_AI_DRAFT } from '@/mocks/mockData';
import { ProviderSidebar } from '@/components/provider/ProviderSidebar';
import { ProviderTopbar } from '@/components/provider/ProviderTopbar';
import { PatientConsentStatusBanner } from '@/components/provider/PatientConsentStatusBanner';
import { AiClinicalAssistant } from '@/components/provider/AiClinicalAssistant';
import { AuthorizedMedicalHistoryList } from '@/components/provider/AuthorizedMedicalHistoryList';

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
      <ProviderSidebar session={session} onLogout={handleLogout} />

      <div className="flex-1 flex flex-col min-w-0">
        <ProviderTopbar
          searchHealthId={searchHealthId}
          setSearchHealthId={setSearchHealthId}
          isSearching={isSearching}
          onLookup={() => handleLookup()}
        />

        <main className="p-6 space-y-6 overflow-y-auto">
          <PatientConsentStatusBanner lookupResult={lookupResult} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <AiClinicalAssistant
                consultationText={consultationText}
                setConsultationText={setConsultationText}
                isGeneratingAi={isGeneratingAi}
                onGenerateAiNote={handleGenerateAiNote}
                aiDraft={aiDraft}
                subjectiveEdit={subjectiveEdit}
                setSubjectiveEdit={setSubjectiveEdit}
                objectiveEdit={objectiveEdit}
                setObjectiveEdit={setObjectiveEdit}
                assessmentEdit={assessmentEdit}
                setAssessmentEdit={setAssessmentEdit}
                planEdit={planEdit}
                setPlanEdit={setPlanEdit}
                isSavingRecord={isSavingRecord}
                saveSuccessMessage={saveSuccessMessage}
                onDoctorApproveAndSave={handleDoctorApproveAndSave}
              />
            </div>

            <div className="lg:col-span-5">
              <AuthorizedMedicalHistoryList patientRecords={patientRecords} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
