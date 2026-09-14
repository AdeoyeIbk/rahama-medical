import {
  Hospital,
  Patient,
  MedicalRecord,
  ConsentPermission,
  AuditLog,
  Referral,
  FollowUpTask,
  ClinicalNoteDraft
} from '../types';

export const MOCK_HOSPITALS: Hospital[] = [
  {
    id: 'hosp-001',
    name: 'Lagos University Teaching Hospital (LUTH)',
    licenseNumber: 'HEFAMAA/LUTH/2024/091',
    email: 'contact@luth.gov.ng',
    phone: '+234 1 774 2100',
    address: 'Ishaga Road, Idi-Araba',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    verificationStatus: 'VERIFIED',
    primaryContactName: 'Prof. Wasiu Adeyemo',
    services: ['Cardiology', 'Oncology', 'Emergency & Trauma', 'Pediatrics', 'Radiology'],
    bedCapacity: 760,
    accreditedSince: '2023-01-15',
    isHomeHospitalEligible: true
  },
  {
    id: 'hosp-002',
    name: 'Federal Medical Centre (FMC) Abuja',
    licenseNumber: 'MCN/FMC/ABJ/8821',
    email: 'info@fmcabuja.gov.ng',
    phone: '+234 9 291 4432',
    address: 'Wuse Zone 6',
    city: 'Abuja',
    state: 'FCT',
    country: 'Nigeria',
    verificationStatus: 'VERIFIED',
    primaryContactName: 'Dr. Saad Ahmed',
    services: ['General Surgery', 'Obstetrics & Gynecology', 'Internal Medicine', 'Neurology'],
    bedCapacity: 500,
    accreditedSince: '2023-03-20',
    isHomeHospitalEligible: true
  },
  {
    id: 'hosp-003',
    name: 'Reddington Specialist Hospital',
    licenseNumber: 'HEFAMAA/RED/2022/104',
    email: 'admin@reddingtonhospital.com',
    phone: '+234 1 271 5340',
    address: '39 Victoria Island',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    verificationStatus: 'VERIFIED',
    primaryContactName: 'Dr. Charles Alabi',
    services: ['Interventional Cardiology', 'Orthopedics', 'ICU Care', 'Diagnostic Imaging'],
    bedCapacity: 220,
    accreditedSince: '2023-06-10',
    isHomeHospitalEligible: true
  },
  {
    id: 'hosp-004',
    name: 'Aminu Kano Teaching Hospital (AKTH)',
    licenseNumber: 'MCN/AKTH/KN/4412',
    email: 'registry@akth.gov.ng',
    phone: '+234 64 631 800',
    address: 'Zaria Road',
    city: 'Kano',
    state: 'Kano State',
    country: 'Nigeria',
    verificationStatus: 'VERIFIED',
    primaryContactName: 'Prof. Abdurrahman Sheshe',
    services: ['Nephrology & Dialysis', 'General Medicine', 'Community Health', 'Ophthalmology'],
    bedCapacity: 600,
    accreditedSince: '2023-08-05',
    isHomeHospitalEligible: true
  },
  {
    id: 'hosp-005',
    name: 'Evercare Hospital Lekki',
    licenseNumber: 'HEFAMAA/EVC/2023/339',
    email: 'care@evercare.ng',
    phone: '+234 815 000 3837',
    address: '1 Evercare Way, Admiralty Way, Lekki Phase 1',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    verificationStatus: 'VERIFIED',
    primaryContactName: 'Dr. Temitope Fashola',
    services: ['Neuro-Surgery', 'Pediatric Care', 'Health Screening', 'Emergency Response'],
    bedCapacity: 165,
    accreditedSince: '2024-02-12',
    isHomeHospitalEligible: true
  }
];

export const MOCK_PATIENT: Patient = {
  id: 'pat-901',
  rahamaHealthId: 'RH-8492-9102-NG',
  fullName: 'Amina Ibrahim Bello',
  dateOfBirth: '1992-07-14',
  gender: 'FEMALE',
  bloodGroup: 'O+',
  genotype: 'AA',
  phone: '+234 803 456 7890',
  email: 'amina.bello@example.com',
  address: '14 Admiralty Way, Lekki',
  city: 'Lagos',
  state: 'Lagos State',
  country: 'Nigeria',
  homeHospitalId: 'hosp-001',
  homeHospitalName: 'Lagos University Teaching Hospital (LUTH)',
  allergies: ['Penicillin', 'Peanuts'],
  chronicConditions: ['Mild Asthma'],
  emergencyContact: {
    name: 'Tariq Bello',
    relationship: 'Spouse',
    phone: '+234 802 334 1122'
  }
};

export const MOCK_MEDICAL_RECORDS: MedicalRecord[] = [
  {
    id: 'rec-101',
    patientId: 'pat-901',
    rahamaHealthId: 'RH-8492-9102-NG',
    hospitalId: 'hosp-001',
    hospitalName: 'Lagos University Teaching Hospital (LUTH)',
    providerId: 'doc-001',
    providerName: 'Dr. Olumide Ogunlesi',
    providerTitle: 'Consultant Pulmonologist',
    category: 'CONSULTATION',
    title: 'Routine Asthma Evaluation & Respiratory Function',
    summary: 'Patient presented for bi-annual asthma checkup. Wheezing absent on auscultation.',
    clinicalDetails: {
      chiefComplaint: 'Mild seasonal chest tightness during morning exercise.',
      diagnosis: ['Mild Persistent Asthma (ICD-10 J45.3)'],
      vitals: {
        bp: '118/76 mmHg',
        pulse: '72 bpm',
        temp: '36.6 °C',
        weight: '64 kg',
        spO2: '99%'
      },
      notes: 'Lungs clear bilaterally. Peak expiratory flow rate 420 L/min (92% predicted). Inhaler technique reviewed and confirmed compliant.',
      medications: [
        { name: 'Salbutamol Inhaler', dosage: '100mcg', frequency: '2 puffs as needed', duration: 'Ongoing' },
        { name: 'Fluticasone Inhaler', dosage: '110mcg', frequency: '2 puffs daily', duration: '3 months' }
      ]
    },
    recordedAt: '2026-08-10T10:30:00Z',
    isEncrypted: true
  },
  {
    id: 'rec-102',
    patientId: 'pat-901',
    rahamaHealthId: 'RH-8492-9102-NG',
    hospitalId: 'hosp-003',
    hospitalName: 'Reddington Specialist Hospital',
    providerId: 'doc-002',
    providerName: 'Dr. Fatima Abubakar',
    providerTitle: 'Consultant Radiologist',
    category: 'DIAGNOSTIC_IMAGING',
    title: 'Chest X-Ray (PA View)',
    summary: 'High-resolution digital chest radiograph. No consolidation or pleural effusion.',
    clinicalDetails: {
      chiefComplaint: 'Pre-procedural screening radiograph.',
      diagnosis: ['Normal Chest Radiograph'],
      labFindings: [
        { test: 'Lung Fields', result: 'Clear without focal opacities', unit: '', normalRange: 'Clear' },
        { test: 'Cardiothoracic Ratio', result: '0.46', unit: 'ratio', normalRange: '< 0.50' }
      ],
      notes: 'No pulmonary edema or hilar lymphadenopathy. Cardiac size normal.'
    },
    recordedAt: '2026-05-18T14:15:00Z',
    isEncrypted: true
  },
  {
    id: 'rec-103',
    patientId: 'pat-901',
    rahamaHealthId: 'RH-8492-9102-NG',
    hospitalId: 'hosp-002',
    hospitalName: 'Federal Medical Centre (FMC) Abuja',
    providerId: 'doc-003',
    providerName: 'Dr. Chidi Nwachukwu',
    providerTitle: 'Senior Pathologist',
    category: 'LAB_RESULT',
    title: 'Comprehensive Metabolic Panel & Lipid Profile',
    summary: 'Fasting lipid panel and kidney function tests within expected baseline limits.',
    clinicalDetails: {
      labFindings: [
        { test: 'Fasting Blood Glucose', result: '92', unit: 'mg/dL', normalRange: '70 - 99' },
        { test: 'Serum Creatinine', result: '0.85', unit: 'mg/dL', normalRange: '0.60 - 1.10' },
        { test: 'Total Cholesterol', result: '178', unit: 'mg/dL', normalRange: '< 200' },
        { test: 'HbA1c', result: '5.3', unit: '%', normalRange: '< 5.7' }
      ],
      notes: 'Metabolic markers stable. Re-evaluate annually.'
    },
    recordedAt: '2026-02-04T09:00:00Z',
    isEncrypted: true
  }
];

export const MOCK_CONSENTS: ConsentPermission[] = [
  {
    id: 'con-501',
    patientId: 'pat-901',
    targetId: 'hosp-001',
    targetName: 'Lagos University Teaching Hospital (LUTH)',
    targetType: 'HOSPITAL',
    scope: 'FULL',
    grantedAt: '2024-01-10T08:00:00Z',
    expiresAt: '2027-01-10T08:00:00Z',
    isActive: true,
    notes: 'Home Hospital default authorization'
  },
  {
    id: 'con-502',
    patientId: 'pat-901',
    targetId: 'doc-002',
    targetName: 'Dr. Fatima Abubakar (Reddington Hospital)',
    targetType: 'PROVIDER',
    scope: 'SUMMARY',
    grantedAt: '2026-05-18T12:00:00Z',
    expiresAt: '2026-11-18T12:00:00Z',
    isActive: true,
    notes: 'Temporary consultation access for radiological review'
  }
];

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'aud-901',
    patientId: 'pat-901',
    accessedBy: 'Dr. Olumide Ogunlesi',
    accessorRole: 'PROVIDER',
    accessorFacility: 'Lagos University Teaching Hospital (LUTH)',
    action: 'VIEWED_RECORD',
    details: 'Accessed Respiratory Consultation Note (rec-101) with active patient consent.',
    timestamp: '2026-08-10T10:32:15Z',
    ipAddress: '197.210.28.14'
  },
  {
    id: 'aud-902',
    patientId: 'pat-901',
    accessedBy: 'Amina Ibrahim Bello',
    accessorRole: 'PATIENT',
    accessorFacility: 'Rahama Patient Portal Mobile',
    action: 'GRANTED_CONSENT',
    details: 'Granted 6-month summary access consent to Dr. Fatima Abubakar.',
    timestamp: '2026-05-18T12:00:00Z',
    ipAddress: '102.89.23.109'
  },
  {
    id: 'aud-903',
    patientId: 'pat-901',
    accessedBy: 'Dr. Fatima Abubakar',
    accessorRole: 'PROVIDER',
    accessorFacility: 'Reddington Specialist Hospital',
    action: 'LOOKUP_PATIENT',
    details: 'Searched Rahama Health ID RH-8492-9102-NG and verified active consent.',
    timestamp: '2026-05-18T14:10:02Z',
    ipAddress: '197.210.44.89'
  },
  {
    id: 'aud-904',
    patientId: 'pat-901',
    accessedBy: 'Dr. Chidi Nwachukwu',
    accessorRole: 'PROVIDER',
    accessorFacility: 'Federal Medical Centre (FMC) Abuja',
    action: 'CREATED_RECORD',
    details: 'Uploaded certified Lab Result record (rec-103).',
    timestamp: '2026-02-04T09:05:44Z',
    ipAddress: '197.210.5.12'
  }
];

export const MOCK_REFERRALS: Referral[] = [
  {
    id: 'ref-701',
    patientId: 'pat-901',
    patientName: 'Amina Ibrahim Bello',
    rahamaHealthId: 'RH-8492-9102-NG',
    fromHospitalId: 'hosp-001',
    fromHospitalName: 'Lagos University Teaching Hospital (LUTH)',
    toHospitalId: 'hosp-003',
    toHospitalName: 'Reddington Specialist Hospital',
    referringDoctor: 'Dr. Olumide Ogunlesi',
    reason: 'High-resolution chest CT evaluation for persistent morning tightness.',
    urgency: 'ROUTINE',
    status: 'ACCEPTED',
    createdAt: '2026-05-15T11:00:00Z'
  }
];

export const MOCK_FOLLOWUPS: FollowUpTask[] = [
  {
    id: 'fol-801',
    patientId: 'pat-901',
    patientName: 'Amina Ibrahim Bello',
    rahamaHealthId: 'RH-8492-9102-NG',
    hospitalName: 'Lagos University Teaching Hospital (LUTH)',
    scheduledDate: '2026-11-14',
    purpose: 'Bi-annual Asthma Spirometry & Prescription Renewal',
    status: 'SCHEDULED',
    channel: 'IN_PERSON'
  }
];

export const MOCK_AI_DRAFT: ClinicalNoteDraft = {
  id: 'aid-301',
  patientId: 'pat-901',
  rahamaHealthId: 'RH-8492-9102-NG',
  rawTranscript: `Doctor: Good morning Amina. How have you been feeling since your last visit?
Patient: Morning Doctor. Overall good, but I noticed a slight wheeze when running outdoors early in the morning when it's chilly.
Doctor: Okay. Are you using your Fluticasone inhaler every day?
Patient: Yes, 2 puffs every morning.
Doctor: Great. Lungs sound clear today. BP is 118/76. Let's maintain your current inhaler dosage and add a pre-exercise Salbutamol puff 15 minutes before running.`,
  structuredNote: {
    subjective: '34-year-old female presents with mild cold-air induced exertional wheeze during morning runs. Reports strict compliance with daily Fluticasone inhaler (2 puffs AM). Denies nocturnal awakenings or emergency department visits.',
    objective: 'Vitals: BP 118/76 mmHg, Pulse 72 bpm, SpO2 99% on room air. Auscultation: Vesicular breath sounds bilaterally without ronchi or crepitations. Peak Flow: 420 L/min.',
    assessment: 'Well-controlled Asthma with mild exercise-induced bronchospasm.',
    plan: '1. Continue Fluticasone 110mcg inhaler 2 puffs daily.\n2. Add pre-exercise Salbutamol 100mcg 1-2 puffs 15 minutes prior to outdoor cold-air exposure.\n3. Return for follow-up in 3 months or if symptoms deteriorate.',
    suggestedMedications: [
      { name: 'Salbutamol Inhaler', dosage: '100mcg', frequency: 'Pre-exercise 15 mins prior', duration: 'As needed' },
      { name: 'Fluticasone Inhaler', dosage: '110mcg', frequency: '2 puffs daily', duration: '3 months' }
    ]
  },
  aiConfidenceScore: 0.94,
  status: 'DRAFT',
  generatedAt: '2026-09-14T02:00:00Z',
  editedByDoctor: false
};
