import React, { useState } from 'react';
import { Mail, Copy, Check, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hariomk6992@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer id="website-footer" className="w-full mt-20 border-t border-slate-800 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand Tag */}
        <div className="flex items-center gap-2 text-red-500 font-mono text-sm tracking-wider font-bold">
          <Terminal className="w-4 h-4" />
          <span>CODE9 WITH HARI</span>
        </div>

        {/* The Exact Contact String in Light Green Colour as requested */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-xl w-full shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span 
              id="contact-us-light-green"
              className="text-lg sm:text-xl font-bold tracking-wide text-emerald-400 select-all"
              style={{ color: '#4ade80' }} /* explicit light green color */
            >
              → Contact us: <a href={`mailto:${email}`} className="hover:underline transition-all">{email}</a>
            </span>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer shrink-0"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Reach out for C programming mentorship, course inquiries, project reviews, or code drills.
          </p>
        </div>

        {/* Copyright & Info */}
        <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} What you read in #C</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" /> for C programmers
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="text-slate-400">CODE9 WITH HARI</span>
        </div>
      </div>
    </footer>
  );
};
