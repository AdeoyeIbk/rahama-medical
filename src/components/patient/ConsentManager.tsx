import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ConsentPermission } from '@/types';
import { Plus, Trash } from '@phosphor-icons/react';

export interface ConsentManagerProps {
  consents: ConsentPermission[];
  onOpenGrantModal: () => void;
  onRevokeConsent: (id: string) => void;
}

export const ConsentManager: React.FC<ConsentManagerProps> = ({
  consents,
  onOpenGrantModal,
  onRevokeConsent
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-heading">Record Access Consent Manager</h3>
          <p className="text-xs text-slate-500">Grant or revoke record visibility to facilities and providers.</p>
        </div>
        <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={onOpenGrantModal}>
          Grant New Access Consent
        </Button>
      </div>

      <div className="space-y-3">
        {consents.map((con) => (
          <Card key={con.id} className="flex items-center justify-between p-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[#000066] dark:text-white">{con.targetName}</span>
                {con.isActive ? (
                  <Badge variant="green" size="sm">ACTIVE</Badge>
                ) : (
                  <Badge variant="slate" size="sm">REVOKED</Badge>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1">Scope: <strong>{con.scope}</strong> | Granted: {new Date(con.grantedAt).toLocaleDateString()}</p>
            </div>

            {con.isActive && (
              <Button
                size="sm"
                variant="danger"
                leftIcon={<Trash className="w-3.5 h-3.5" />}
                onClick={() => onRevokeConsent(con.id)}
              >
                Revoke Access
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
