import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Hospital, Patient } from '@/types';

export interface HomeHospitalSelectorProps {
  hospitals: Hospital[];
  patient: Patient;
  onSetHomeHospital: (hosp: Hospital) => void;
}

export const HomeHospitalSelector: React.FC<HomeHospitalSelectorProps> = ({
  hospitals,
  patient,
  onSetHomeHospital
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold font-heading">Select Home Hospital</h3>
      <p className="text-xs text-slate-500">Your Home Hospital acts as your primary clinical registrar in Rahama.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hospitals.map((hosp) => {
          const isSelected = patient.homeHospitalId === hosp.id;
          return (
            <Card key={hosp.id} className="flex items-center justify-between p-4">
              <div>
                <h4 className="font-bold text-sm">{hosp.name}</h4>
                <p className="text-xs text-slate-500">{hosp.city}, {hosp.state}</p>
              </div>

              <Button
                size="sm"
                variant={isSelected ? 'outline' : 'primary'}
                onClick={() => onSetHomeHospital(hosp)}
              >
                {isSelected ? 'Current Primary' : 'Set as Home'}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
