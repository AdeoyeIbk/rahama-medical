'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { ShieldCheck, CheckCircle, Hospital, User, Heartbeat, Buildings } from '@phosphor-icons/react';

type StakeholderType = 'HOSPITAL_ADMIN' | 'DOCTOR' | 'PATIENT' | 'PRESS';

export const SegmentedContactForm: React.FC = () => {
  const [role, setRole] = useState<StakeholderType>('HOSPITAL_ADMIN');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const roles = [
    { id: 'HOSPITAL_ADMIN', label: 'Hospital Administrator', icon: <Hospital className="w-5 h-5 text-[#0837ad]" /> },
    { id: 'DOCTOR', label: 'Doctor / Provider', icon: <Heartbeat className="w-5 h-5 text-[#0837ad]" /> },
    { id: 'PATIENT', label: 'Patient / Public', icon: <User className="w-5 h-5 text-[#0837ad]" /> },
    { id: 'PRESS', label: 'Press / Partnerships', icon: <Buildings className="w-5 h-5 text-[#0837ad]" /> }
  ];

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 card-soft-shadow shadow-xl max-w-3xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#0837ad] flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-slate-900">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. A Rahama healthcare integration specialist will review your message and get back to you within 1 business day.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-[#0837ad] text-[#0837ad] hover:bg-blue-50 text-sm font-semibold transition-all"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-3 font-heading">
              I am a:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {roles.map((r) => {
                const active = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id as StakeholderType)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-xs font-semibold transition-all ${
                      active
                        ? 'border-[#0837ad] bg-blue-50 text-[#0837ad] shadow-sm ring-1 ring-[#0837ad]'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="mb-2">{r.icon}</div>
                    <span className="text-center leading-tight">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Dr. Emmanuel Okafor"
              required
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="rounded-2xl"
            />
            <Input
              label="Official Email"
              type="email"
              placeholder="e.okafor@hospital.org"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="rounded-2xl"
            />
          </div>

          <Input
            label="Phone Number"
            placeholder="09012345678"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            className="rounded-2xl"
          />

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">
              Message / Inquiry Details
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              placeholder="Describe your facility integration interest or partnership request..."
              className="w-full px-4 py-3 rounded-2xl border bg-white border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0837ad] transition-all"
            />
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0837ad] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="block font-semibold text-slate-900 mb-0.5">Medical Record Privacy Notice:</strong>
              This public contact form is an inquiry mechanism. Do not upload or paste confidential patient clinical notes, lab reports, or sensitive medical records here.
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-full bg-[#0837ad] hover:bg-[#062c8d] text-white font-semibold text-base shadow-lg shadow-blue-900/15 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            {isLoading ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
};
