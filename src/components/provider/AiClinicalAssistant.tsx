'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ClinicalNoteDraft } from '@/types';
import { Sparkle, NotePencil, ShieldCheck, CheckCircle, FloppyDisk } from '@phosphor-icons/react';

export interface AiClinicalAssistantProps {
  consultationText: string;
  setConsultationText: (val: string) => void;
  isGeneratingAi: boolean;
  onGenerateAiNote: () => void;
  aiDraft: ClinicalNoteDraft | null;
  subjectiveEdit: string;
  setSubjectiveEdit: (val: string) => void;
  objectiveEdit: string;
  setObjectiveEdit: (val: string) => void;
  assessmentEdit: string;
  setAssessmentEdit: (val: string) => void;
  planEdit: string;
  setPlanEdit: (val: string) => void;
  isSavingRecord: boolean;
  saveSuccessMessage: string;
  onDoctorApproveAndSave: () => void;
}

export const AiClinicalAssistant: React.FC<AiClinicalAssistantProps> = ({
  consultationText,
  setConsultationText,
  isGeneratingAi,
  onGenerateAiNote,
  aiDraft,
  subjectiveEdit,
  setSubjectiveEdit,
  objectiveEdit,
  setObjectiveEdit,
  assessmentEdit,
  setAssessmentEdit,
  planEdit,
  setPlanEdit,
  isSavingRecord,
  saveSuccessMessage,
  onDoctorApproveAndSave
}) => {
  return (
    <Card className="p-6 space-y-4 border-2 border-blue-200 dark:border-blue-900">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#0837ad]/10 text-[#0837ad] dark:text-blue-400">
            <Sparkle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
              AI Clinical Documentation Assistant
            </h3>
            <p className="text-xs text-slate-500">Simulates consultation listening & drafts SOAP note</p>
          </div>
        </div>
        <Badge variant="blue" size="sm">Human Approval Required</Badge>
      </div>

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
        onClick={onGenerateAiNote}
        leftIcon={<Sparkle className="w-4 h-4" />}
      >
        Generate AI Clinical Note Draft
      </Button>

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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSubjectiveEdit(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setObjectiveEdit(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAssessmentEdit(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPlanEdit(e.target.value)}
                className="w-full p-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-xs"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
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
                onClick={onDoctorApproveAndSave}
                leftIcon={<FloppyDisk className="w-4 h-4" />}
              >
                Doctor Approve & Commit to Medical Record
              </Button>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};
