'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, LockKey, Hospital, UserGear, Heartbeat, CaretDown } from '@phosphor-icons/react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solution', href: '/solution' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 text-slate-800 transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0837ad] flex items-center justify-center p-1.5 shadow-md transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/rahama-logo-white.png"
                alt="Rahama Digital Health Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span className="text-lg font-black font-heading tracking-tight text-slate-900 leading-tight">
                RAHAMA
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#0837ad] uppercase leading-none">
                DIGITAL HEALTH
              </span>
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0837ad] flex items-center justify-center">
                      <Heartbeat className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 group-hover:text-[#0837ad]">Doctor / Provider</span>
                      <span className="text-[10px] text-slate-500">Clinical Lookup & AI Notes</span>
                    </div>
                  </Link>
                  <Link
                    href="/patient/login"
                    onClick={() => setLoginDropdownOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0837ad] flex items-center justify-center">
                      <UserGear className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 group-hover:text-[#0837ad]">Patient Portal</span>
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
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-blue-50 text-[#0837ad] border border-blue-200/80 hover:bg-blue-100 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <List className="w-6 h-6 weight-bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Portal - mounted directly on document.body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 z-[99999] bg-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
              >
                {/* Top Bar inside Overlay */}
                <div className="flex items-center justify-between shrink-0 pb-5 border-b border-slate-100">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0837ad] flex items-center justify-center p-1.5 shadow-md overflow-hidden">
                      <Image
                        src="/rahama-logo-white.png"
                        alt="Rahama Digital Health Logo"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <span className="text-lg font-black font-heading tracking-tight text-slate-900 leading-tight">
                        RAHAMA
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-[#0837ad] uppercase leading-none">
                        DIGITAL HEALTH
                      </span>
                    </div>
                  </Link>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 text-[#0837ad] flex items-center justify-center transition-all hover:bg-blue-100 active:scale-95"
                    aria-label="Close Navigation Menu"
                  >
                    <X className="w-6 h-6 weight-bold" />
                  </button>
                </div>

                {/* Middle: Generous Spaced Navigation Links */}
                <nav className="flex flex-col my-auto space-y-4 py-8">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-slate-100 group transition-all"
                    >
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight transition-colors ${
                          isActive(link.href) ? 'text-[#0837ad]' : 'text-slate-900 group-hover:text-[#0837ad]'
                        }`}
                      >
                        {link.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#0837ad]/60 group-hover:text-[#0837ad]">
                        0{idx + 1}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Bottom Area: Portals & Primary Action */}
                <div className="space-y-4 pt-4 border-t border-slate-100 shrink-0">
                  <div>
                    <p className="text-[11px] font-mono font-bold text-[#0837ad] uppercase tracking-wider mb-2.5">
                      Access Portals
                    </p>
                    <div className="grid grid-cols-3 gap-2.5">
                      <Link
                        href="/hospital/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 hover:bg-blue-50 text-xs font-semibold transition-all"
                      >
                        <Hospital className="w-5 h-5 text-[#0837ad] mb-1.5" />
                        <span>Hospital</span>
                      </Link>
                      <Link
                        href="/provider/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 hover:bg-blue-50 text-xs font-semibold transition-all"
                      >
                        <Heartbeat className="w-5 h-5 text-[#0837ad] mb-1.5" />
                        <span>Provider</span>
                      </Link>
                      <Link
                        href="/patient/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 hover:bg-blue-50 text-xs font-semibold transition-all"
                      >
                        <UserGear className="w-5 h-5 text-[#0837ad] mb-1.5" />
                        <span>Patient</span>
                      </Link>
                    </div>
                  </div>

                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block pt-1">
                    <span className="w-full py-4 rounded-full bg-[#0837ad] hover:bg-[#062c8d] text-white text-sm font-semibold shadow-lg shadow-blue-900/15 flex items-center justify-center gap-2 transition-all active:scale-[0.99]">
                      <span>Partner With Us</span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};

