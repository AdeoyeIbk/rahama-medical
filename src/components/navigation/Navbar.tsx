'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { ShieldPlus, List, X, LockKey, Hospital, UserGear, Heartbeat } from '@phosphor-icons/react';

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
    <header className="sticky top-0 z-40 w-full bg-[#000066]/95 backdrop-blur-md border-b border-[#1a1a80] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#FF6600] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <ShieldPlus className="w-6 h-6 weight-bold" />
            </div>
            <div>
              <span className="text-xl font-bold font-heading tracking-tight text-white flex items-center gap-1.5">
                RAHAMA <span className="text-[#FF6600] text-xs px-2 py-0.5 rounded bg-white/10 font-normal">DIGITAL HEALTH</span>
              </span>
              <span className="text-[10px] text-blue-200 tracking-wider uppercase block">Infrastructure for Connected Care</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF6600] relative py-1 ${
                  isActive(link.href) ? 'text-[#FF6600] font-semibold' : 'text-blue-100'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6600] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg border border-blue-300/30 text-blue-100 hover:bg-white/10 transition-colors"
              >
                <LockKey className="w-4 h-4 text-[#FF6600]" />
                <span>Portal Login</span>
              </button>

              {loginDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 text-slate-100">
                  <div className="px-3 py-1.5 border-b border-slate-800 mb-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Select Portal</p>
                  </div>
                  <Link
                    href="/hospital/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs hover:bg-[#000066] transition-colors"
                  >
                    <Hospital className="w-4 h-4 text-[#FF6600]" />
                    <div>
                      <span className="font-semibold block">Hospital Portal</span>
                      <span className="text-[10px] text-slate-400">Admin & Records Management</span>
                    </div>
                  </Link>
                  <Link
                    href="/provider/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs hover:bg-[#000066] transition-colors"
                  >
                    <Heartbeat className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="font-semibold block">Doctor / Provider</span>
                      <span className="text-[10px] text-slate-400">Clinical Lookup & AI Notes</span>
                    </div>
                  </Link>
                  <Link
                    href="/patient/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs hover:bg-[#000066] transition-colors"
                  >
                    <UserGear className="w-4 h-4 text-blue-400" />
                    <div>
                      <span className="font-semibold block">Patient Portal</span>
                      <span className="text-[10px] text-slate-400">Health ID & Consent Control</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact">
              <Button variant="primary" size="sm">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#00004d] border-b border-blue-900/60 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.href) ? 'bg-[#FF6600] text-white font-semibold' : 'text-blue-100 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-blue-900/50 space-y-2">
            <p className="text-[10px] uppercase font-bold text-blue-300 px-1">Access Portals</p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/hospital/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded bg-blue-950 border border-blue-800 text-blue-200"
              >
                Hospital
              </Link>
              <Link
                href="/provider/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded bg-blue-950 border border-blue-800 text-emerald-300"
              >
                Provider
              </Link>
              <Link
                href="/patient/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs p-2 rounded bg-blue-950 border border-blue-800 text-orange-300"
              >
                Patient
              </Link>
            </div>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block pt-2">
              <Button variant="primary" className="w-full">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
