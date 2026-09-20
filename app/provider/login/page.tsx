'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { authService } from '@/services/auth.service';
import { Eye, EyeSlash } from '@phosphor-icons/react';

export default function ProviderLoginPage() {
  const router = useRouter();
  const [licenseId, setLicenseId] = useState('MCN/PAT/8892-NG');
  const [password, setPassword] = useState('docpassword');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await authService.doctorLogin(licenseId, password);
    setIsLoading(false);
    router.push('/provider/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#e8edfc] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative selection:bg-[#0837ad] selection:text-white">
      {/* Centered White Card (Exact Match to Invooce Reference) */}
      <div className="w-full max-w-xl bg-white rounded-[28px] sm:rounded-[32px] shadow-xl shadow-blue-900/5 border border-slate-100 p-8 sm:p-12 lg:p-14 relative">
        
        {/* Top Header: Logo on Left, Portal Badge on Right */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#0837ad] flex items-center justify-center p-1.5 shadow-sm transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/rahama-logo-white.png"
                alt="Rahama Logo"
                width={28}
                height={28}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-base font-black font-heading tracking-tight text-slate-900">
              Rahama
            </span>
          </Link>
          <span className="text-[11px] font-semibold text-[#0837ad] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Practitioner Portal
          </span>
        </div>

        {/* Center Title & Greeting */}
        <div className="text-center space-y-1 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Login
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Hi, Welcome back 👋
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-slate-700">
              Medical License Number / MDCN ID
            </label>
            <input
              type="text"
              placeholder="e.g. MCN/PAT/8892-NG"
              required
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-11 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0837ad] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlash className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Options: Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-[#0837ad] focus:ring-[#0837ad]"
              />
              <span>Remember Me</span>
            </label>
            <Link href="/contact" className="text-[#0837ad] font-semibold hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full rounded-xl py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-900/15"
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>
        </form>

        {/* Bottom Switch Links */}
        <div className="mt-8 text-center text-xs text-slate-500 space-y-2">
          <p>
            Licensed practitioner access requires MDCN verification.
          </p>
          <div>
            <Link href="/" className="text-[#0837ad] font-semibold hover:underline inline-flex items-center gap-1">
              ← Return to Public Website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
