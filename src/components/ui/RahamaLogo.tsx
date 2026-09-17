'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RahamaLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  subtitle?: string;
  className?: string;
}

export const RahamaLogo: React.FC<RahamaLogoProps> = ({
  variant = 'light',
  size = 'md',
  href = '/',
  subtitle = 'DIGITAL HEALTH',
  className = '',
}) => {
  const isDark = variant === 'dark';

  const boxSizes = {
    sm: 'w-8 h-8 rounded-lg p-1',
    md: 'w-10 h-10 rounded-xl p-1.5',
    lg: 'w-12 h-12 rounded-2xl p-2',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div
        className={`${boxSizes[size]} ${
          isDark ? 'bg-white text-[#0837ad]' : 'bg-[#0837ad] text-white'
        } flex items-center justify-center shadow-md transition-transform group-hover:scale-105 overflow-hidden shrink-0`}
      >
        <Image
          src={isDark ? '/rahama-logo-blue.png' : '/rahama-logo-white.png'}
          alt="Rahama Digital Health Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority={size === 'md' || size === 'lg'}
        />
      </div>
      <div className="flex flex-col text-left justify-center">
        <span
          className={`${titleSizes[size]} font-black font-heading tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          RAHAMA
        </span>
        <span
          className={`${subSizes[size]} font-bold tracking-widest uppercase leading-none ${
            isDark ? 'text-blue-200' : 'text-[#0837ad]'
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};
