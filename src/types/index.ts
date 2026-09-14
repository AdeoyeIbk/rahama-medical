export type UserRole = 'HOSPITAL' | 'PROVIDER' | 'PATIENT' | 'PUBLIC';

export interface BaseUser {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  createdAt: string;
}

export type HospitalVerificationStatus = 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface Hospital {
  id: string;
  name: string;
  licenseNumber: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  verificationStatus: HospitalVerificationStatus;
  primaryContactName: string;
  services: string[];
  bedCapacity?: number;
  accreditedSince?: string;
  isHomeHospitalEligible: boolean;
  avatarUrl?: string;
}

export interface PatientEmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface Patient {
  id: string;
  rahamaHealthId: string; // e.g. "RH-8492-9102-NG"
  fullName: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodGroup: string;
  genotype: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  homeHospitalId?: string;
  homeHospitalName?: string;
  allergies: string[];
  chronicConditions: string[];
  emergencyContact: PatientEmergencyContact;
}

export type RecordCategory = 
  | 'CONSULTATION' 
  | 'LAB_RESULT' 
  | 'PRESCRIPTION' 
  | 'DIAGNOSTIC_IMAGING' 
  | 'SURGICAL_SUMMARY' 
  | 'IMMUNIZATION';

export interface MedicalRecord {
  id: string;
  patientId: string;
  rahamaHealthId: string;
  hospitalId: string;
  hospitalName: string;
  providerId: string;
  providerName: string;
  providerTitle: string;
  category: RecordCategory;
  title: string;
  summary: string;
  clinicalDetails: {
    chiefComplaint?: string;
    diagnosis?: string[];
    vitals?: {
      bp?: string;
      pulse?: string;
      temp?: string;
      weight?: string;
      spO2?: string;
    };
    notes?: string;
    medications?: Array<{ name: string; dosage: string; frequency: string; duration: string }>;
    labFindings?: Array<{ test: string; result: string; unit?: string; normalRange?: string }>;
  };
  recordedAt: string;
  isEncrypted: boolean;
}

export type AccessScope = 'FULL' | 'SUMMARY' | 'EMERGENCY_ONLY';

export interface ConsentPermission {
  id: string;
  patientId: string;
  targetId: string; // Hospital ID or Provider ID
  targetName: string;
  targetType: 'HOSPITAL' | 'PROVIDER';
  scope: AccessScope;
  grantedAt: string;
  expiresAt: string;
  isActive: boolean;
  notes?: string;
}

export interface AuditLog {
  id: string;
  patientId: string;
  accessedBy: string;
  accessorRole: 'PROVIDER' | 'HOSPITAL_ADMIN' | 'PATIENT';
  accessorFacility: string;
  action: 'VIEWED_RECORD' | 'GRANTED_CONSENT' | 'REVOKED_CONSENT' | 'CREATED_RECORD' | 'LOOKUP_PATIENT';
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export interface Referral {
  id: string;
  patientId: string;
  patientName: string;
  rahamaHealthId: string;
  fromHospitalId: string;
  fromHospitalName: string;
  toHospitalId: string;
  toHospitalName: string;
  referringDoctor: string;
  reason: string;
  urgency: 'ROUTINE' | 'URGENT' | 'EMERGENCY';
  status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
}

export interface FollowUpTask {
  id: string;
  patientId: string;
  patientName: string;
  rahamaHealthId: string;
  hospitalName: string;
  scheduledDate: string;
  purpose: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'MISSED';
  channel: 'IN_PERSON' | 'TELEHEALTH' | 'PHONE';
}

export interface ClinicalNoteDraft {
  id: string;
  patientId: string;
  rahamaHealthId: string;
  rawTranscript: string;
  structuredNote: {
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
    suggestedMedications?: Array<{ name: string; dosage: string; frequency: string; duration?: string }>;
    suggestedTests?: string[];
  };
  aiConfidenceScore: number;
  status: 'DRAFT' | 'REVIEWED' | 'APPROVED' | 'SAVED';
  generatedAt: string;
  editedByDoctor?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}
