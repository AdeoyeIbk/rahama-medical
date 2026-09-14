import { Patient, MedicalRecord, ConsentPermission, ApiResponse } from '../types';
import { MOCK_PATIENT, MOCK_MEDICAL_RECORDS, MOCK_CONSENTS } from '../mocks/mockData';

export interface ProviderLookupResult {
  patient: Patient;
  hasActiveConsent: boolean;
  consentDetails?: ConsentPermission;
}

export interface ProviderService {
  lookupPatientByHealthId(rahamaHealthId: string): Promise<ApiResponse<ProviderLookupResult>>;
  getAuthorizedRecords(rahamaHealthId: string): Promise<ApiResponse<MedicalRecord[]>>;
}

class MockProviderServiceImpl implements ProviderService {
  async lookupPatientByHealthId(rahamaHealthId: string): Promise<ApiResponse<ProviderLookupResult>> {
    await new Promise((res) => setTimeout(res, 400));
    const cleanId = rahamaHealthId.trim().toUpperCase();
    if (cleanId !== MOCK_PATIENT.rahamaHealthId && cleanId !== 'RH-8492-9102-NG') {
      return {
        success: false,
        error: 'No registered patient found matching the provided Rahama Health ID.'
      };
    }

    const activeConsent = MOCK_CONSENTS.find((c) => c.isActive && c.patientId === MOCK_PATIENT.id);

    return {
      success: true,
      data: {
        patient: MOCK_PATIENT,
        hasActiveConsent: true,
        consentDetails: activeConsent
      }
    };
  }

  async getAuthorizedRecords(rahamaHealthId: string): Promise<ApiResponse<MedicalRecord[]>> {
    await new Promise((res) => setTimeout(res, 300));
    const records = MOCK_MEDICAL_RECORDS.filter((r) => r.rahamaHealthId === rahamaHealthId);
    return { success: true, data: records };
  }
}

export const providerService: ProviderService = new MockProviderServiceImpl();
