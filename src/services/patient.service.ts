import { Patient, MedicalRecord, ConsentPermission, AuditLog, ApiResponse } from '../types';
import { MOCK_PATIENT, MOCK_MEDICAL_RECORDS, MOCK_CONSENTS, MOCK_AUDIT_LOGS } from '../mocks/mockData';

export interface PatientService {
  getPatientProfile(idOrHealthId?: string): Promise<ApiResponse<Patient>>;
  getMedicalRecords(rahamaHealthId: string): Promise<ApiResponse<MedicalRecord[]>>;
  getConsents(patientId: string): Promise<ApiResponse<ConsentPermission[]>>;
  grantConsent(data: Partial<ConsentPermission>): Promise<ApiResponse<ConsentPermission>>;
  revokeConsent(consentId: string): Promise<ApiResponse<boolean>>;
  getAuditLogs(patientId: string): Promise<ApiResponse<AuditLog[]>>;
}

class MockPatientServiceImpl implements PatientService {
  private patient: Patient = { ...MOCK_PATIENT };
  private records: MedicalRecord[] = [...MOCK_MEDICAL_RECORDS];
  private consents: ConsentPermission[] = [...MOCK_CONSENTS];
  private auditLogs: AuditLog[] = [...MOCK_AUDIT_LOGS];

  async getPatientProfile(idOrHealthId?: string): Promise<ApiResponse<Patient>> {
    await new Promise((res) => setTimeout(res, 200));
    return { success: true, data: this.patient };
  }

  async getMedicalRecords(rahamaHealthId: string): Promise<ApiResponse<MedicalRecord[]>> {
    await new Promise((res) => setTimeout(res, 300));
    const filtered = this.records.filter((r) => r.rahamaHealthId === rahamaHealthId);
    return { success: true, data: filtered };
  }

  async getConsents(patientId: string): Promise<ApiResponse<ConsentPermission[]>> {
    await new Promise((res) => setTimeout(res, 200));
    return { success: true, data: this.consents };
  }

  async grantConsent(data: Partial<ConsentPermission>): Promise<ApiResponse<ConsentPermission>> {
    await new Promise((res) => setTimeout(res, 400));
    const newConsent: ConsentPermission = {
      id: `con-${Date.now()}`,
      patientId: this.patient.id,
      targetId: data.targetId || 'target-unknown',
      targetName: data.targetName || 'Authorized Facility',
      targetType: data.targetType || 'HOSPITAL',
      scope: data.scope || 'SUMMARY',
      grantedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true,
      notes: data.notes || 'Granted via Patient Consent Manager'
    };
    this.consents.unshift(newConsent);

    // Add audit log
    this.auditLogs.unshift({
      id: `aud-${Date.now()}`,
      patientId: this.patient.id,
      accessedBy: this.patient.fullName,
      accessorRole: 'PATIENT',
      accessorFacility: 'Rahama Patient Portal',
      action: 'GRANTED_CONSENT',
      details: `Granted ${newConsent.scope} consent to ${newConsent.targetName}`,
      timestamp: new Date().toISOString()
    });

    return { success: true, data: newConsent };
  }

  async revokeConsent(consentId: string): Promise<ApiResponse<boolean>> {
    await new Promise((res) => setTimeout(res, 300));
    const consent = this.consents.find((c) => c.id === consentId);
    if (consent) {
      consent.isActive = false;
      this.auditLogs.unshift({
        id: `aud-${Date.now()}`,
        patientId: this.patient.id,
        accessedBy: this.patient.fullName,
        accessorRole: 'PATIENT',
        accessorFacility: 'Rahama Patient Portal',
        action: 'REVOKED_CONSENT',
        details: `Revoked access consent for ${consent.targetName}`,
        timestamp: new Date().toISOString()
      });
    }
    return { success: true, data: true };
  }

  async getAuditLogs(patientId: string): Promise<ApiResponse<AuditLog[]>> {
    await new Promise((res) => setTimeout(res, 200));
    return { success: true, data: this.auditLogs };
  }
}

export const patientService: PatientService = new MockPatientServiceImpl();
