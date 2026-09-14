'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldPlus, Globe, Lock, Heartbeat } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00004d] text-slate-300 border-t border-[#1a1a80] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6600] flex items-center justify-center text-white">
                <ShieldPlus className="w-6 h-6 weight-bold" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                RAHAMA <span className="text-[#FF6600]">DIGITAL HEALTH</span>
              </span>
            </Link>
            <p className="text-base font-semibold text-white">
              Continuity of care, without borders.
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Rahama Digital Health sits between participating healthcare facilities to enable patients to securely own and share authorized medical records across Africa while protecting provider autonomy.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-medium">
              <Heartbeat className="w-4 h-4 text-[#FF6600]" />
              <span>Brand Principle: &ldquo;We treat, only God heals.&rdquo;</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#FF6600] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF6600] transition-colors">
                  About Rahama
                </Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-[#FF6600] transition-colors">
                  Solution & Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF6600] transition-colors">
                  Contact & Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Role Portals & Trust */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
              Role Access & Security
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/hospital/login" className="hover:text-[#FF6600] transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  Hospital Administration
                </Link>
              </li>
              <li>
                <Link href="/provider/login" className="hover:text-[#FF6600] transition-colors flex items-center gap-1.5">
                  <Heartbeat className="w-3.5 h-3.5 text-emerald-400" />
                  Healthcare Practitioner Portal
                </Link>
              </li>
              <li>
                <Link href="/patient/login" className="hover:text-[#FF6600] transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#FF6600]" />
                  Patient Rahama ID Portal
                </Link>
              </li>
              <li>
                <Link href="/solution#security" className="hover:text-[#FF6600] transition-colors">
                  Security & NDPA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Rahama Digital Health Infrastructure Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-200">
              Security Practices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
