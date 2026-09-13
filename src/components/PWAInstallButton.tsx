import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, CheckCircle2, ExternalLink, X, HelpCircle, ShieldCheck } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already installed and running standalone, display a subtle badge
  if (isInstalled) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-mono">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>Running as Installed App</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Main Install Button */}
        <button
          id="pwa-install-app-btn"
          onClick={async () => {
            if (isInstallable) {
              await install();
            } else {
              setShowGuide(true);
            }
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-red-950/40 hover:shadow-red-900/60 transition-all cursor-pointer border border-red-500/30"
          title="Install as Android App / APK or Home Screen App"
        >
          <Smartphone className="w-4 h-4" />
          <span>{isAndroid ? 'Install Android App (APK)' : 'Install App / APK'}</span>
          <Download className="w-3.5 h-3.5 opacity-80" />
        </button>

        {/* Info guide trigger */}
        <button
          onClick={() => setShowGuide(true)}
          className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
          title="How to install or get APK file"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {/* APK & App Installation Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Convert to Android App / APK
                  </h3>
                  <p className="text-xs text-slate-400">
                    Install directly on your phone or generate a standalone APK
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Option 1: Instant Native Android Installation */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Method 1: Instant Direct Install (No App Store needed)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On Android Chrome or Edge, tap the <strong>Install Android App</strong> button or tap the browser menu (<span className="text-white font-mono">⋮</span>) and select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Android automatically generates a secure <strong>WebAPK</strong> package on your home screen with offline capability and full-screen mode!</span>
                </div>
              </div>

              {/* Option 2: Standalone .apk Package via PWABuilder */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between text-amber-400 font-semibold mb-1">
                  <span>Method 2: Export to Standalone .APK / Google Play</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">Free & Instant</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  You can convert this website into a signed Android <span className="font-mono text-white">.apk</span> or <span className="font-mono text-white">.aab</span> (Android App Bundle) using Microsoft's official PWABuilder:
                </p>
                <ol className="mt-2 list-decimal list-inside text-xs text-slate-300 space-y-1">
                  <li>Copy your live website URL</li>
                  <li>Visit <strong className="text-white">pwabuilder.com</strong></li>
                  <li>Click <strong className="text-white">"Package for Android"</strong> to download your <strong className="text-amber-300">.apk</strong> file directly!</li>
                </ol>
                <div className="mt-3">
                  <a
                    href="https://www.pwabuilder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-colors"
                  >
                    <span>Open PWABuilder APK Generator</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* iOS Guide if on Apple devices */}
              {isIOS && (
                <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs">
                  <span className="text-white font-semibold">For iPhone / iPad users:</span>
                  <p className="text-slate-400 mt-1">
                    Tap the <strong>Share</strong> button in Safari's bottom toolbar, scroll down, and tap <strong>"Add to Home Screen"</strong>.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowGuide(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
              >
                Close
              </button>
              {isInstallable && (
                <button
                  onClick={async () => {
                    setShowGuide(false);
                    await install();
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold cursor-pointer"
                >
                  Install Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
