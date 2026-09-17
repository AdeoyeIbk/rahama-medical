import React from 'react';
import { CircleNotch } from '@phosphor-icons/react';

export interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading Rahama records...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center min-h-[200px]">
      <CircleNotch className="w-8 h-8 text-[#0837ad] animate-spin mb-3" />
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{message}</p>
    </div>
  );
};
