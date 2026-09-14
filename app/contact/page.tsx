'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Warning, CheckCircle, EnvelopeSimple, Phone, MapPin, Hospital, User, Heartbeat, Newspaper } from '@phosphor-icons/react';

type StakeholderType = 'HOSPITAL_ADMIN' | 'DOCTOR' | 'PATIENT' | 'PRESS';

export default function ContactPage() {
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
    { id: 'HOSPITAL_ADMIN', label: 'Hospital Administrator', icon: <Hospital className="w-5 h-5 text-[#000066] dark:text-blue-300" /> },
    { id: 'DOCTOR', label: 'Doctor / Provider', icon: <Heartbeat className="w-5 h-5 text-emerald-500" /> },
    { id: 'PATIENT', label: 'Patient / Public', icon: <User className="w-5 h-5 text-[#FF6600]" /> },
    { id: 'PRESS', label: 'Press / Partnerships', icon: <Newspaper className="w-5 h-5 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        {/* Header Banner */}
        <section className="bg-[#000066] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
            <Badge variant="orange" size="md">
              Inquiries & Partnerships
            </Badge>
            <h1 className="text-4xl font-extrabold font-heading text-white">
              Connect With <span className="heading-accent text-white">Rahama Digital Health</span>
            </h1>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
              Whether you represent a hospital facility, medical practice, or partnership inquiry, our infrastructure team is ready to support you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. A Rahama healthcare integration specialist will review your message and get back to you within 1 business day.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Segmented Stakeholder Selector */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 font-heading">
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
                            className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                              active
                                ? 'border-[#000066] dark:border-blue-500 bg-blue-50 dark:bg-slate-800 text-[#000066] dark:text-blue-300 shadow-sm'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                            }`}
                          >
                            <div className="mb-1">{r.icon}</div>
                            <span>{r.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="Dr. Emmanuel Okafor"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      label="Official Email"
                      type="email"
                      placeholder="e.okafor@hospital.org"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Input
                    label="Phone Number"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Message / Inquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your facility integration interest or partnership request..."
                      className="w-full px-3.5 py-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#000066]"
                    />
                  </div>

                  {/* Important Medical Privacy Warning Box */}
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-3">
                    <Warning className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Medical Record Privacy Notice:</strong>
                      This public contact form is an inquiry mechanism. Do not upload or paste confidential patient clinical notes, lab reports, or sensitive medical records here.
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
