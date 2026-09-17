import { BaseUser, UserRole, Hospital, Patient, ApiResponse } from '../types';
import { MOCK_HOSPITALS, MOCK_PATIENT } from '../mocks/mockData';

export interface AuthSession {
  user: BaseUser;
  token: string;
  hospitalProfile?: Hospital;
  patientProfile?: Patient;
}

export interface AuthService {
  hospitalLogin(email: string, pass: string): Promise<ApiResponse<AuthSession>>;
  providerLogin(licenseId: string, pass: string): Promise<ApiResponse<AuthSession>>;
  doctorLogin(licenseId: string, pass: string): Promise<ApiResponse<AuthSession>>;
  patientLogin(healthIdOrPhone: string, pin: string): Promise<ApiResponse<AuthSession>>;
  login(identifier: string, pass: string, role?: string): Promise<ApiResponse<AuthSession>>;
  logout(): Promise<void>;
  getCurrentSession(role: UserRole): AuthSession | null;
}

class MockAuthServiceImpl implements AuthService {
  hospitalLogin(email: string, pass: string): Promise<ApiResponse<AuthSession>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const hospital = MOCK_HOSPITALS[0];
        const session: AuthSession = {
          user: {
            id: 'usr-hosp-01',
            email: email || hospital.email,
            name: hospital.name,
            role: 'HOSPITAL',
            createdAt: new Date().toISOString()
          },
          token: 'mock-jwt-token-hospital-9921',
          hospitalProfile: hospital
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('rahama_hospital_session', JSON.stringify(session));
        }
        resolve({ success: true, data: session });
      }, 400);
    });
  }

  providerLogin(licenseId: string, pass: string): Promise<ApiResponse<AuthSession>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const session: AuthSession = {
          user: {
            id: 'usr-doc-01',
            email: 'dr.ogunlesi@luth.gov.ng',
            name: 'Dr. Olumide Ogunlesi',
            role: 'PROVIDER',
            createdAt: new Date().toISOString()
          },
          token: 'mock-jwt-token-provider-8812'
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('rahama_provider_session', JSON.stringify(session));
        }
        resolve({ success: true, data: session });
      }, 400);
    });
  }

  doctorLogin(licenseId: string, pass: string): Promise<ApiResponse<AuthSession>> {
    return this.providerLogin(licenseId, pass);
  }

  login(identifier: string, pass: string, role?: string): Promise<ApiResponse<AuthSession>> {
    if (role === 'hospital') {
      return this.hospitalLogin(identifier, pass);
    }
    if (role === 'provider' || role === 'doctor') {
      return this.providerLogin(identifier, pass);
    }
    return this.patientLogin(identifier, pass);
  }

  patientLogin(healthIdOrPhone: string, pin: string): Promise<ApiResponse<AuthSession>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const session: AuthSession = {
          user: {
            id: 'usr-pat-01',
            email: MOCK_PATIENT.email,
            name: MOCK_PATIENT.fullName,
            role: 'PATIENT',
            createdAt: new Date().toISOString()
          },
          token: 'mock-jwt-token-patient-7711',
          patientProfile: MOCK_PATIENT
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('rahama_patient_session', JSON.stringify(session));
        }
        resolve({ success: true, data: session });
      }, 400);
    });
  }

  async logout(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rahama_hospital_session');
      localStorage.removeItem('rahama_provider_session');
      localStorage.removeItem('rahama_patient_session');
    }
  }

  getCurrentSession(role: UserRole): AuthSession | null {
    if (typeof window === 'undefined') return null;
    const keyMap: Record<UserRole, string> = {
      HOSPITAL: 'rahama_hospital_session',
      PROVIDER: 'rahama_provider_session',
      PATIENT: 'rahama_patient_session',
      PUBLIC: ''
    };
    const key = keyMap[role];
    if (!key) return null;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthSession;
    } catch {
      return null;
    }
  }
}

export const authService: AuthService = new MockAuthServiceImpl();
