import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accentBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, accentBorder = false, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-[var(--card)] text-[var(--card-foreground)] p-6 shadow-sm transition-all duration-200',
        accentBorder && 'border-t-4 border-t-[#0837ad]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
