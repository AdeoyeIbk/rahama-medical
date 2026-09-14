import { ClinicalNoteDraft, ApiResponse, MedicalRecord } from '../types';
import { MOCK_AI_DRAFT, MOCK_PATIENT } from '../mocks/mockData';

export interface AiNotesService {
  generateDraftFromTranscript(patientId: string, transcript: string): Promise<ApiResponse<ClinicalNoteDraft>>;
  approveAndSaveNote(draftId: string, updatedDraft: ClinicalNoteDraft, providerName: string, hospitalName: string): Promise<ApiResponse<MedicalRecord>>;
}

class MockAiNotesServiceImpl implements AiNotesService {
  private currentDraft: ClinicalNoteDraft = { ...MOCK_AI_DRAFT };

  async generateDraftFromTranscript(patientId: string, transcript: string): Promise<ApiResponse<ClinicalNoteDraft>> {
    await new Promise((res) => setTimeout(res, 800)); // Simulate processing
    this.currentDraft = {
      ...MOCK_AI_DRAFT,
      id: `aid-${Date.now()}`,
      patientId,
      rawTranscript: transcript || MOCK_AI_DRAFT.rawTranscript,
      status: 'DRAFT',
      generatedAt: new Date().toISOString()
    };
    return { success: true, data: this.currentDraft };
  }

  async approveAndSaveNote(
    draftId: string,
    updatedDraft: ClinicalNoteDraft,
    providerName: string,
    hospitalName: string
  ): Promise<ApiResponse<MedicalRecord>> {
    await new Promise((res) => setTimeout(res, 500));
    
    // Create new medical record from approved draft
    const newRecord: MedicalRecord = {
      id: `rec-${Date.now()}`,
      patientId: updatedDraft.patientId,
      rahamaHealthId: updatedDraft.rahamaHealthId,
      hospitalId: 'hosp-001',
      hospitalName,
      providerId: 'doc-001',
      providerName,
      providerTitle: 'Attending Physician',
      category: 'CONSULTATION',
      title: 'AI-Assisted Clinical Encounter (Physician Approved)',
      summary: updatedDraft.structuredNote.assessment || 'Consultation encounter recorded.',
      clinicalDetails: {
        chiefComplaint: updatedDraft.structuredNote.subjective,
        diagnosis: [updatedDraft.structuredNote.assessment],
        notes: `SOAP NOTES:\n\nSubjective: ${updatedDraft.structuredNote.subjective}\n\nObjective: ${updatedDraft.structuredNote.objective}\n\nAssessment: ${updatedDraft.structuredNote.assessment}\n\nPlan: ${updatedDraft.structuredNote.plan}`,
        medications: updatedDraft.structuredNote.suggestedMedications?.map((m) => ({
          name: m.name,
          dosage: m.dosage,
          frequency: m.frequency,
          duration: '30 days'
        }))
      },
      recordedAt: new Date().toISOString(),
      isEncrypted: true
    };

    return {
      success: true,
      data: newRecord,
      message: 'Clinical note approved by physician and committed to Rahama health record.'
    };
  }
}

export const aiNotesService: AiNotesService = new MockAiNotesServiceImpl();
