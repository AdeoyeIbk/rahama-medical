'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { CircleNotch } from '@phosphor-icons/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  enableRipple?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      enableRipple = true,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableRipple && !disabled && !isLoading) {
        const rect = e.currentTarget.getBoundingClientRect();
        const rippleSize = Math.max(rect.width, rect.height) * 2.5;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple: Ripple = {
          id: Date.now() + Math.random(),
          x,
          y,
          size: rippleSize,
        };

        setRipples((prev) => [...prev.slice(-3), newRipple]);
      }

      if (onClick) {
        onClick(e);
      }
    };

    const removeRipple = (id: number) => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    };

    const baseStyles =
      'relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm active:scale-[0.97] select-none';

    const variants = {
      primary: 'bg-[#FF6600] text-white hover:bg-[#e65c00] focus:ring-[#FF6600]',
      secondary: 'bg-[#000066] text-white hover:bg-[#00004d] focus:ring-[#000066]',
      navy: 'bg-[#000066] text-white hover:bg-[#00004d] focus:ring-[#000066]',
      outline: 'border border-[#000066] text-[#000066] dark:text-blue-200 dark:border-blue-400 hover:bg-[#00006610] focus:ring-[#000066]',
      ghost: 'text-[#000066] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-none',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        onClick={handleButtonClick}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Animated Framer Motion Click Ripples */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onAnimationComplete={() => removeRipple(ripple.id)}
              style={{
                position: 'absolute',
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                marginLeft: -ripple.size / 2,
                marginTop: -ripple.size / 2,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          ))}
        </AnimatePresence>

        <span className="relative z-10 inline-flex items-center justify-center gap-2 pointer-events-none">
          {isLoading ? (
            <CircleNotch className="w-4 h-4 animate-spin text-current" />
          ) : (
            leftIcon
          )}
          <span>{children}</span>
          {!isLoading && rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
