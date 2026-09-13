import React from 'react';
import { RECOMMENDED_RESOURCES } from '../data/cCurriculum';
import { BookMarked, Code, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const books = RECOMMENDED_RESOURCES.filter((r) => r.type === 'book');
  const platforms = RECOMMENDED_RESOURCES.filter((r) => r.type === 'practice');

  return (
    <section id="resources-section" className="scroll-mt-12">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              <BookMarked className="w-4 h-4" />
              Essential Literature & Hands-on Coding
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Recommended Books & Practice Platforms
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              For additional hands-on exercises, coding challenges, and deep language architecture mastery.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated by CODE9 WITH HARI</span>
          </div>
        </div>

        {/* Books Section */}
        <div className="mt-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-red-500" />
            Standard Textbooks
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-red-950/80 text-red-300 border border-red-800/40">
                      {book.highlight}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Book #{idx + 1}</span>
                  </div>

                  <h5 className="text-lg font-bold text-white mt-2.5">
                    {book.title}
                  </h5>
                  <p className="text-xs font-medium text-amber-400 mt-0.5">
                    By {book.authorOrPlatform}
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="mt-10">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Code className="w-4 h-4 text-emerald-400" />
            Coding Platforms & Practice Tracks
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-5 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                      {platform.highlight}
                    </span>
                    <Code className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h5 className="text-base font-bold text-white mt-3">
                    {platform.title}
                  </h5>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">
                    {platform.authorOrPlatform}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                {platform.url && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore C Track</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
