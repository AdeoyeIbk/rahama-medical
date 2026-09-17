import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'navy' | 'orange' | 'green' | 'amber' | 'slate';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = 'blue',
  size = 'sm',
  ...props
}) => {
  const base = 'inline-flex items-center gap-1.5 font-semibold rounded-full border transition-colors';

  const variants = {
    blue: 'bg-blue-50 text-[#0837ad] border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
    navy: 'bg-blue-50 text-[#0837ad] border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
    orange: 'bg-blue-50 text-[#0837ad] border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
    green: 'bg-blue-50 text-[#0837ad] border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
    amber: 'bg-blue-50 text-[#0837ad] border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
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
