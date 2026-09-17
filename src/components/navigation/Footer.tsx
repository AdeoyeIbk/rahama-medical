'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Lock,
  Heartbeat,
  EnvelopeSimple,
  Phone,
  MapPin,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-radial-aura relative text-white pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Giant Bold Watermark Brand Typography Fitting Entire Screen */}
      <div className="w-full overflow-hidden text-center select-none pointer-events-none pb-4 sm:pb-8">
        <span className="text-[22vw] font-black font-heading tracking-tighter leading-none text-white/20 select-none drop-shadow-sm uppercase block w-full">
          RAHAMA
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32 relative z-10">
        {/* Main Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md transition-transform group-hover:scale-105 overflow-hidden">
                <Image
                  src="/rahama-logo-blue.png"
                  alt="Rahama Digital Health Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className="text-lg font-black font-heading tracking-tight text-white leading-tight">
                  RAHAMA
                </span>
                <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase leading-none">
                  DIGITAL HEALTH
                </span>
              </div>
            </Link>

            <p className="text-base sm:text-lg font-bold text-white tracking-tight">
              Continuity of care, without borders.
            </p>

            <p className="text-sm text-blue-50 max-w-sm leading-relaxed font-normal">
              Rahama Digital Health sits between participating healthcare facilities to enable patients to securely own and share authorized medical records across Africa while protecting provider autonomy.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-blue-200 font-medium">
              <Heartbeat className="w-4 h-4 text-blue-300 shrink-0" />
              <span>Brand Principle: &ldquo;We treat, only God heals.&rdquo;</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-200 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <XLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <LinkedinLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <InstagramLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <FacebookLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-transform hover:scale-110"
                >
                  <YoutubeLogo className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Rahama
                </Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-white transition-colors">
                  Solution & Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Role Access & Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Role Access & Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/90">
              <li>
                <Link href="/hospital/login" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-300" />
                  Hospital Administration
                </Link>
              </li>
              <li>
                <Link href="/provider/login" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Heartbeat className="w-3.5 h-3.5 text-blue-300" />
                  Healthcare Practitioner
                </Link>
              </li>
              <li>
                <Link href="/patient/login" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-300" />
                  Patient Rahama ID Portal
                </Link>
              </li>
              <li>
                <Link href="/solution#security" className="hover:text-white transition-colors">
                  Security & NDPA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-blue-100/90">
              <div className="flex items-start gap-2.5">
                <EnvelopeSimple className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-blue-200 block font-medium">Inquiries & Partnerships</span>
                  <a href="mailto:partners@rahamadigital.com" className="hover:text-white transition-colors">
                    partners@rahamadigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-blue-200 block font-medium">Facility Onboarding Hotline</span>
                  <a href="tel:+234800724262" className="hover:text-white transition-colors">
                    +234 800 RAHAMA (724262)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-blue-200 block font-medium">Regional Hubs</span>
                  <p className="text-blue-100">Lagos & Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar without harsh border */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/80 gap-4">
          <p>© {new Date().getFullYear()} Rahama Digital Health Infrastructure Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Security Practices
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
