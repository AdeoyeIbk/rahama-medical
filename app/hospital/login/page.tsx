'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { authService } from '@/services/auth.service';
import { Hospital, ArrowRight, LockKey } from '@phosphor-icons/react';

export default function HospitalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('contact@luth.gov.ng');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await authService.login(email, password, 'hospital');
      router.push('/hospital/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate');
    } finally {
      setIsLoading(false);
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
                RAHAMA <span className="text-blue-300">HOSPITAL</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase leading-none">
                DIGITAL HEALTH
              </span>
            </div>
          </Link>
          <p className="text-xs text-blue-200">Facility Administration & Interoperability Portal</p>
        </div>

        <Card className="bg-slate-900/90 border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400">
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
            <Link href="/hospital/register" className="text-blue-400 font-semibold hover:underline flex items-center gap-1">
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
