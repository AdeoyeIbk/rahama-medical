import { Hospital, ApiResponse } from '../types';
import { MOCK_HOSPITALS } from '../mocks/mockData';

export interface HospitalService {
  getHospitals(query?: string, state?: string): Promise<ApiResponse<Hospital[]>>;
  getHospitalById(id: string): Promise<ApiResponse<Hospital>>;
  registerHospital(data: Partial<Hospital>): Promise<ApiResponse<{ hospital: Hospital; message: string }>>;
  setHomeHospital(patientId: string, hospitalId: string): Promise<ApiResponse<Hospital>>;
}

class MockHospitalServiceImpl implements HospitalService {
  private hospitals: Hospital[] = [...MOCK_HOSPITALS];

  async getHospitals(query?: string, state?: string): Promise<ApiResponse<Hospital[]>> {
    await new Promise((res) => setTimeout(res, 300));
    let filtered = [...this.hospitals];

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (h) => h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q) || h.services.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (state && state !== 'ALL') {
      filtered = filtered.filter((h) => h.state.toLowerCase() === state.toLowerCase());
    }

    return {
      success: true,
      data: filtered,
      meta: { total: filtered.length }
    };
  }

  async getHospitalById(id: string): Promise<ApiResponse<Hospital>> {
    await new Promise((res) => setTimeout(res, 200));
    const hosp = this.hospitals.find((h) => h.id === id);
    if (!hosp) {
      return { success: false, error: 'Hospital not found' };
    }
    return { success: true, data: hosp };
  }

  async registerHospital(data: Partial<Hospital>): Promise<ApiResponse<{ hospital: Hospital; message: string }>> {
    await new Promise((res) => setTimeout(res, 500));
    const newHospital: Hospital = {
      id: `hosp-${Date.now()}`,
      name: data.name || 'New Facility',
      licenseNumber: data.licenseNumber || 'PENDING-LIC-000',
      email: data.email || '',
      phone: data.phone || '',
      address: data.address || '',
      city: data.city || 'Lagos',
      state: data.state || 'Lagos State',
      country: 'Nigeria',
      verificationStatus: 'PENDING',
      primaryContactName: data.primaryContactName || 'Admin',
      services: data.services || ['General Care'],
      isHomeHospitalEligible: true
    };
    this.hospitals.unshift(newHospital);
    return {
      success: true,
      data: {
        hospital: newHospital,
        message: 'Registration submitted successfully. Your hospital verification is currently pending review.'
      }
    };
  }

  async setHomeHospital(patientId: string, hospitalId: string): Promise<ApiResponse<Hospital>> {
    await new Promise((res) => setTimeout(res, 300));
    const hosp = this.hospitals.find((h) => h.id === hospitalId);
    if (!hosp) {
      return { success: false, error: 'Invalid hospital selected.' };
    }
    return { success: true, data: hosp };
  }
}

export const hospitalService: HospitalService = new MockHospitalServiceImpl();
