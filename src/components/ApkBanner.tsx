import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const ApkBanner: React.FC = () => {
  const { isInstallable, isInstalled, isAndroid, install } = usePWAInstall();
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="apk-app-section" className="scroll-mt-12">
      <div className="rounded-2xl border border-red-900/40 bg-gradient-to-r from-slate-900 via-red-950/20 to-slate-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-mono">
              <Smartphone className="w-3.5 h-3.5 text-red-400" />
              <span>MOBILE READY • ANDROID APK & PWA COMPLIANT</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Install as Android App or Get Standalone .APK
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              This webpage is fully built as a <strong className="text-white">Progressive Web App (PWA) & WebAPK</strong> with offline caching, fast launch, and full-screen Android support. You can install it straight to your device or export it into a standalone Google Play <strong className="text-amber-300">.apk</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Works 100% Offline
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <ShieldCheck className="w-4 h-4" /> Full Screen (No browser bar)
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Sparkles className="w-4 h-4" /> Fast 1-Tap Home Screen Launch
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
            {isInstallable ? (
              <button
                onClick={install}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Install APK / Web App</span>
              </button>
            ) : isInstalled ? (
              <div className="px-5 py-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Installed on this device!</span>
              </div>
            ) : (
              <button
                onClick={handleCopyUrl}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
                title="Copy website link to open on phone"
              >
                <Smartphone className="w-4 h-4 text-red-400" />
                <span>{copiedUrl ? 'Copied Link!' : 'Copy Link for Phone'}</span>
              </button>
            )}

            <a
              href="https://www.pwabuilder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Download .APK via PWABuilder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
