'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MagnifyingGlass } from '@phosphor-icons/react';

export interface ProviderTopbarProps {
  searchHealthId: string;
  setSearchHealthId: (val: string) => void;
  isSearching: boolean;
  onLookup: () => void;
}

export const ProviderTopbar: React.FC<ProviderTopbarProps> = ({
  searchHealthId,
  setSearchHealthId,
  isSearching,
  onLookup
}) => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
          Clinical Encounter Suite
        </h1>
        <p className="text-xs text-slate-500">
          Lookup patient by Rahama Health ID & draft AI-assisted consultation notes
        </p>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Input
          placeholder="Search Rahama Health ID..."
          value={searchHealthId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchHealthId(e.target.value)}
          className="font-mono text-xs w-full sm:w-64"
        />
        <Button
          variant="primary"
          size="sm"
          isLoading={isSearching}
          onClick={onLookup}
          leftIcon={<MagnifyingGlass className="w-4 h-4" />}
        >
          Lookup Patient
        </Button>
      </div>
    </header>
  );
};
