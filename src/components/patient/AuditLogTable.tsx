import React from 'react';
import { Card } from '@/components/ui/Card';
import { AuditLog } from '@/types';

export interface AuditLogTableProps {
  auditLogs: AuditLog[];
}

export const AuditLogTable: React.FC<AuditLogTableProps> = ({ auditLogs }) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-bold font-heading">Real-Time Access Audit Trail</h3>
      <p className="text-xs text-slate-500">Immutable record of every lookup, consultation, and consent update.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase font-mono border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th className="p-3">Timestamp</th>
              <th className="p-3">Accessor</th>
              <th className="p-3">Facility</th>
              <th className="p-3">Action</th>
              <th className="p-3">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {auditLogs.map((log) => (
              <tr key={log.id}>
                <td className="p-3 font-mono text-slate-500">{new Date(log.timestamp).toLocaleString()}</td>
                <td className="p-3 font-bold">{log.accessedBy} ({log.accessorRole})</td>
                <td className="p-3">{log.accessorFacility}</td>
                <td className="p-3 font-mono text-[#0837ad] dark:text-blue-400 font-semibold">{log.action}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
