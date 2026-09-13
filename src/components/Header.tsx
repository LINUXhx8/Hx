import React from 'react';
import { Terminal, Search, CheckCircle2, RotateCcw, BookOpen, Clock, Sparkles } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedTopicsCount: number;
  totalTopicsCount: number;
  onResetProgress: () => void;
  onSelectLevel: (levelNum: number) => void;
  activeLevelFilter: number | null;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  completedTopicsCount,
  totalTopicsCount,
  onResetProgress,
  onSelectLevel,
  activeLevelFilter,
}) => {
  const percent = totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;

  return (
    <header className="relative w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-red-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Tag / Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-300 text-xs font-mono font-medium tracking-wide mb-3 shadow-inner">
          <Terminal className="w-3.5 h-3.5 text-red-400" />
          <span>OFFICIAL C PROGRAMMING ROADMAP</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>

        {/* Top Big, Sharp, and Attractive Heading in RED */}
        <h1 
          id="brand-header-hari"
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-red-600 uppercase transition-all duration-300 drop-shadow-[0_4px_24px_rgba(220,38,38,0.45)] hover:drop-shadow-[0_4px_32px_rgba(239,68,68,0.7)]"
          style={{ letterSpacing: '0.04em' }}
        >
          CODE9 WITH HARI
        </h1>

        {/* Website Name & Primary Title */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100">
          <span className="text-slate-400 font-light">Roadmap:</span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent underline decoration-red-500/60 decoration-wavy decoration-2">
            “What you read in #C”
          </span>
        </div>

        {/* Subtitle / Description */}
        <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          <span className="font-semibold text-white">C Language — Complete Learning</span>
          <span className="mx-2 text-slate-600">•</span>
          <span className="text-amber-400 font-medium">#C is devided in 7 levels</span>
        </p>

        {/* In-App PWA Install & Android APK Converter button */}
        <div className="mt-4">
          <PWAInstallButton />
        </div>

        {/* Progress & Quick Stats Bar */}
        <div className="mt-6 w-full max-w-2xl bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-xl">
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Syllabus Reading Progress:
              <span className="text-emerald-400 font-bold ml-1">{completedTopicsCount} / {totalTopicsCount} topics</span>
              <span className="text-slate-500">({percent}%)</span>
            </span>

            {completedTopicsCount > 0 && (
              <button
                id="reset-progress-btn"
                onClick={onResetProgress}
                className="text-xs text-slate-500 hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset completion checkboxes"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Progress bar line */}
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center text-xs text-slate-400">
            <div className="flex items-center justify-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-red-400" />
              <span>7 Mastery Levels</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>10-Week Timeline</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Includes Capstone</span>
            </div>
          </div>
        </div>

        {/* Search & Level Quick Filter Bar */}
        <div className="mt-6 w-full max-w-2xl flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="search-topics-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. malloc, pointers, struct, loops, qsort)..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 px-1.5 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Jump Buttons to Levels */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-xs text-slate-500 mr-1 font-mono">Jump:</span>
          <button
            id="filter-level-all"
            onClick={() => onSelectLevel(0)}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeLevelFilter === null || activeLevelFilter === 0
                ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All 7 Levels
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button
              id={`filter-level-${num}`}
              key={num}
              onClick={() => onSelectLevel(num)}
              className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-all cursor-pointer ${
                activeLevelFilter === num
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-900/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              L{num}
            </button>
          ))}
          <a
            href="#timeline-section"
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 text-amber-400 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-all"
          >
            Timeline
          </a>
          <a
            href="#resources-section"
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 text-emerald-400 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            Books & Practice
          </a>
        </div>
      </div>
    </header>
  );
};
