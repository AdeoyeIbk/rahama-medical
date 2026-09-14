'use client';

import React from 'react';
import { cn } from '../../lib/utils';
import { CircleNotch } from '@phosphor-icons/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm';

    const variants = {
      primary: 'bg-[#FF6600] text-white hover:bg-[#e65c00] focus:ring-[#FF6600] active:scale-[0.98]',
      secondary: 'bg-[#000066] text-white hover:bg-[#00004d] focus:ring-[#000066] active:scale-[0.98]',
      navy: 'bg-[#000066] text-white hover:bg-[#00004d] focus:ring-[#000066]',
      outline: 'border border-[#000066] text-[#000066] dark:text-blue-200 dark:border-blue-400 hover:bg-[#00006610] focus:ring-[#000066]',
      ghost: 'text-[#000066] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-none',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5 font-semibold'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <CircleNotch className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
