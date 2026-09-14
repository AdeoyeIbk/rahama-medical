# Rahama Digital Health — Frontend API Contract Specification

This document defines the interface boundary between the Rahama Digital Health frontend and backend services. The frontend service layer is structured to consume these RESTful endpoints.

---

## 1. Authentication Endpoints

### Hospital Authentication
- `POST /api/v1/auth/hospital/register`
  - **Auth:** Public
  - **Purpose:** Onboard a new healthcare facility.
  - **Request Body:** `{ name: string, licenseNumber: string, email: string, phone: string, address: string, state: string, country: string, administratorName: string }`
  - **Response:** `{ data: { hospital: Hospital, token: string }, meta: { status: "PENDING_VERIFICATION" } }`

- `POST /api/v1/auth/hospital/login`
  - **Auth:** Public
  - **Purpose:** Hospital admin login.
  - **Request Body:** `{ email: string, password: string }`
  - **Response:** `{ data: { hospital: Hospital, token: string } }`

### Provider Authentication
- `POST /api/v1/auth/provider/login`
  - **Auth:** Public
  - **Purpose:** Doctor / Healthcare professional login.
  - **Request Body:** `{ licenseId: string, password: string }`
  - **Response:** `{ data: { provider: Provider, token: string } }`

### Patient Authentication
- `POST /api/v1/auth/patient/login`
  - **Auth:** Public
  - **Purpose:** Patient login via Rahama Health ID or phone/PIN.
  - **Request Body:** `{ rahamaHealthId: string, pin: string }`
  - **Response:** `{ data: { patient: Patient, token: string } }`

---

## 2. Hospital Services

- `GET /api/v1/hospitals`
  - **Auth:** Public / Patient
  - **Purpose:** Discover participating hospitals for discovery and Home Hospital selection.
  - **Query Params:** `query?: string, state?: string, service?: string, page?: number, limit?: number`
  - **Response:** `{ data: Hospital[], meta: { total: number, page: number, limit: number } }`

- `POST /api/v1/hospitals/home-hospital`
  - **Auth:** Patient Required
  - **Purpose:** Set or update patient's primary Home Hospital.
  - **Request Body:** `{ hospitalId: string }`
  - **Response:** `{ data: { success: boolean, updatedHomeHospital: Hospital } }`

---

## 3. Patient Medical Records & Profile

- `GET /api/v1/patient/me`
  - **Auth:** Patient Required
  - **Purpose:** Retrieve logged-in patient's full digital health identity and profile.
  - **Response:** `{ data: PatientProfile }`

- `GET /api/v1/patient/records`
  - **Auth:** Patient / Authorized Provider
  - **Purpose:** Retrieve patient's consolidated lifelong medical records across facilities.
  - **Query Params:** `rahamaHealthId?: string` (required if requested by provider)
  - **Response:** `{ data: MedicalRecord[] }`

---

## 4. Consent & Access Authorization

- `GET /api/v1/consent/active`
  - **Auth:** Patient Required
  - **Purpose:** List all active and temporary record access permissions granted to facilities/providers.
  - **Response:** `{ data: ConsentPermission[] }`

- `POST /api/v1/consent/grant`
  - **Auth:** Patient Required
  - **Purpose:** Grant temporary or facility access to a provider/hospital.
  - **Request Body:** `{ targetId: string, targetType: "HOSPITAL" | "PROVIDER", durationHours: number, scope: "FULL" | "EMERGENCY_ONLY" | "SUMMARY" }`
  - **Response:** `{ data: ConsentPermission }`

- `POST /api/v1/consent/revoke`
  - **Auth:** Patient Required
  - **Purpose:** Revoke active access permission immediately.
  - **Request Body:** `{ consentId: string }`
  - **Response:** `{ data: { revoked: boolean, consentId: string } }`

---

## 5. Audit Logging

- `GET /api/v1/audit/logs`
  - **Auth:** Patient Required
  - **Purpose:** Retrieve real-time access audit trail showing who viewed patient records and when.
  - **Response:** `{ data: AuditLog[] }`

---

## 6. Provider Patient Lookup & Clinical Actions

- `POST /api/v1/provider/lookup`
  - **Auth:** Provider Required
  - **Purpose:** Look up patient by Rahama Health ID and verify active consent status.
  - **Request Body:** `{ rahamaHealthId: string }`
  - **Response:** `{ data: { patient: PatientSummary, consentStatus: "GRANTED" | "EXPIRED" | "DENIED", activeConsent?: ConsentPermission } }`

---

## 7. AI Clinical Documentation Assistant

- `POST /api/v1/ai/consultation/draft`
  - **Auth:** Provider Required
  - **Purpose:** Process consultation transcript/audio input and generate structured clinical notes.
  - **Request Body:** `{ patientId: string, consultationNotesRaw: string }`
  - **Response:** `{ data: ClinicalNoteDraft }`

- `POST /api/v1/ai/consultation/approve`
  - **Auth:** Provider Required
  - **Purpose:** Doctor reviews, edits, and approves AI note draft to commit to the medical record.
  - **Request Body:** `{ draftId: string, finalContent: ClinicalNoteDraft, doctorSignature: string }`
  - **Response:** `{ data: { success: boolean, recordId: string, timestamp: string } }`
