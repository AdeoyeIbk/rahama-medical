'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { authService } from '@/services/auth.service';
import { Heartbeat, LockKey } from '@phosphor-icons/react';

export default function ProviderLoginPage() {
  const router = useRouter();
  const [licenseId, setLicenseId] = useState('MCN/PAT/8892-NG');
  const [password, setPassword] = useState('docpassword');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await authService.doctorLogin(licenseId, password);
    setIsLoading(false);
    router.push('/provider/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#000066] text-white p-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0837ad] flex items-center justify-center p-1.5 shadow-lg border border-blue-400/20 overflow-hidden">
              <Image
                src="/rahama-logo-white.png"
                alt="Rahama Digital Health Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span className="text-xl font-bold font-heading tracking-tight text-white leading-tight">
                RAHAMA <span className="text-blue-300">DOCTOR & PROVIDER</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase leading-none">
                DIGITAL HEALTH
              </span>
            </div>
          </Link>
          <p className="text-xs text-blue-200">Clinical Record Lookup & AI Documentation Portal</p>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-8 text-slate-100 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400">
              <Heartbeat className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-heading text-white">Practitioner Sign In</h2>
              <p className="text-xs text-slate-400">Requires active medical license verification</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Medical License Number / MDCN ID"
              placeholder="e.g. MCN/PAT/8892-NG"
              required
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              className="bg-slate-950 border-slate-700 text-white font-mono"
            />

            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-950 border-slate-700 text-white"
            />

            <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isLoading}>
              Sign In to Provider Portal
            </Button>
          </form>

          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
            <LockKey className="w-4 h-4 shrink-0" />
            <span>Strict role-based access: Patient consent required for full clinical views.</span>
          </div>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-xs text-blue-200 hover:text-white">
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
