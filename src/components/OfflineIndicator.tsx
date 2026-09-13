import React from 'react';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { WifiOff, ShieldCheck } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/90 backdrop-blur-md border border-amber-400/40 px-4 py-2.5 text-xs font-medium text-white shadow-2xl animate-in slide-in-from-bottom-2">
      <WifiOff className="w-4 h-4 text-white animate-pulse" />
      <div>
        <p className="font-semibold">Offline Mode Active</p>
        <p className="text-[11px] text-amber-100 opacity-90">All 7 C levels & code snippets are fully cached and available offline!</p>
      </div>
    </div>
  );
};
