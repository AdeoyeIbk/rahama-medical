'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldPlus, List, X, LockKey, Hospital, UserGear, Heartbeat, CaretDown } from '@phosphor-icons/react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solution', href: '/solution' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 text-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0837ad] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <ShieldPlus className="w-6 h-6 weight-bold" />
            </div>
            <div>
              <span className="text-xl font-bold font-heading tracking-tight text-[#000066] flex items-center gap-1.5">
                RAHAMA <span className="text-[#FF6600] text-xs px-2 py-0.5 rounded bg-orange-50 font-semibold border border-orange-200">DIGITAL HEALTH</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase block">Infrastructure for Connected Care</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#0837ad] relative py-1 ${
                  isActive(link.href) ? 'text-[#0837ad] font-semibold' : 'text-slate-600'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0837ad] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all shadow-xs"
              >
                <LockKey className="w-3.5 h-3.5 text-[#0837ad]" />
                <span>Portal Login</span>
                <CaretDown className="w-3 h-3 text-slate-400" />
              </button>

              {loginDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Select Portal</p>
                  </div>
                  <Link
                    href="/hospital/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0837ad] flex items-center justify-center">
                      <Hospital className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 group-hover:text-[#0837ad]">Hospital Portal</span>
                      <span className="text-[10px] text-slate-500">Admin & Records Management</span>
                    </div>
                  </Link>
                  <Link
                    href="/provider/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs hover:bg-emerald-50/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Heartbeat className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 group-hover:text-emerald-700">Doctor / Provider</span>
                      <span className="text-[10px] text-slate-500">Clinical Lookup & AI Notes</span>
                    </div>
                  </Link>
                  <Link
                    href="/patient/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs hover:bg-orange-50/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#FF6600] flex items-center justify-center">
                      <UserGear className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 group-hover:text-[#FF6600]">Patient Portal</span>
                      <span className="text-[10px] text-slate-500">Health ID & Consent Control</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact">
              <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0837ad] hover:bg-[#062c8d] text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02]">
                Partner With Us
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.href) ? 'bg-blue-50 text-[#0837ad] font-semibold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <p className="text-[10px] uppercase font-bold text-slate-400 px-1">Access Portals</p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/hospital/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium"
              >
                Hospital
              </Link>
              <Link
                href="/provider/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 font-medium"
              >
                Provider
              </Link>
              <Link
                href="/patient/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 hover:bg-orange-100 font-medium"
              >
                Patient
              </Link>
            </div>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block pt-2">
              <span className="w-full inline-flex items-center justify-center py-2.5 rounded-full bg-[#0837ad] text-white text-xs font-semibold shadow-sm">
                Partner With Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

