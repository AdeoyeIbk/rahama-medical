'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { authService } from '@/services/auth.service';
import { ShieldPlus, Hospital, ArrowRight, LockKey } from '@phosphor-icons/react';

export default function HospitalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('contact@luth.gov.ng');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const res = await authService.hospitalLogin(email, password);
    setIsLoading(false);

    if (res.success) {
      router.push('/hospital/dashboard');
    } else {
      setError(res.error || 'Authentication failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#000066] text-white p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#000066] to-[#00004d] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6600] flex items-center justify-center text-white font-bold shadow-lg">
              <ShieldPlus className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-white">
              RAHAMA <span className="text-[#FF6600]">HOSPITAL</span>
            </span>
          </Link>
          <p className="text-xs text-blue-200">Facility Administration & Interoperability Portal</p>
        </div>

        <Card className="bg-slate-900/90 border-slate-800 p-8 shadow-2xl backdrop-blur-xl text-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-blue-950 text-[#FF6600]">
              <Hospital className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-heading text-white">Hospital Sign In</h2>
              <p className="text-xs text-slate-400">Access registered hospital services</p>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-xs text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Official Hospital Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-950 border-slate-700 text-white"
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
              Sign In to Hospital Dashboard
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>New healthcare facility?</span>
            <Link href="/hospital/register" className="text-[#FF6600] font-semibold hover:underline flex items-center gap-1">
              Apply for Verification <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-xs text-blue-200 hover:text-white transition-colors">
            ← Return to Rahama Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}
