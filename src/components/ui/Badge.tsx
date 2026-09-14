import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'orange' | 'navy' | 'green' | 'amber' | 'slate';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = 'orange',
  size = 'sm',
  ...props
}) => {
  const base = 'inline-flex items-center gap-1.5 font-semibold rounded-full border transition-colors';

  const variants = {
    orange: 'bg-[#fff0e6] text-[#FF6600] border-[#FF660030] dark:bg-amber-950/60 dark:text-orange-400 dark:border-orange-500/30',
    navy: 'bg-[#00006615] text-[#000066] border-[#00006630] dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800',
    amber: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1'
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
