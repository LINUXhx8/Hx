import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { LevelCard } from './components/LevelCard';
import { TimelineSection } from './components/TimelineSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ApkBanner } from './components/ApkBanner';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Footer } from './components/Footer';
import { QuickRefModal } from './components/QuickRefModal';
import { C_LEVELS } from './data/cCurriculum';
import { BookOpen, Terminal, ArrowUp, Code2, Sparkles, Filter } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLevelFilter, setActiveLevelFilter] = useState<number | null>(null);
  const [isQuickRefOpen, setIsQuickRefOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Local storage persistence for checked topics
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('code9_c_topics_completed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('code9_c_topics_completed', JSON.stringify(completedTopics));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  }, [completedTopics]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTopic = (topicId: string) => {
    setCompletedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Reset all topic checkboxes?')) {
      setCompletedTopics({});
    }
  };

  // Calculate overall topic count
  const allSubtopics = useMemo(() => {
    return C_LEVELS.flatMap((level) =>
      level.sections.flatMap((section) => section.subtopics)
    );
  }, []);

  const totalTopicsCount = allSubtopics.length;
  const completedTopicsCount = useMemo(() => {
    return allSubtopics.filter((st) => completedTopics[st.id]).length;
  }, [allSubtopics, completedTopics]);

  // Filter levels based on search or active level filter
  const filteredLevels = useMemo(() => {
    let list = C_LEVELS;

    if (activeLevelFilter && activeLevelFilter > 0) {
      list = list.filter((lvl) => lvl.levelNumber === activeLevelFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((level) => {
        const matchesLevel =
          level.title.toLowerCase().includes(q) ||
          level.tagline.toLowerCase().includes(q) ||
          (level.keyHighlight && level.keyHighlight.toLowerCase().includes(q));

        const matchesSections = level.sections.some(
          (sec) =>
            sec.title.toLowerCase().includes(q) ||
            sec.subtopics.some(
              (st) =>
                st.title.toLowerCase().includes(q) ||
                st.details.some((d) => d.toLowerCase().includes(q))
            )
        );

        const matchesCode = level.codeSnippet.code.toLowerCase().includes(q);

        return matchesLevel || matchesSections || matchesCode;
      });
    }

    return list;
  }, [activeLevelFilter, searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-red-200">
      {/* Header section with big sharp CODE9 WITH HARI and title */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedTopicsCount={completedTopicsCount}
        totalTopicsCount={totalTopicsCount}
        onResetProgress={resetProgress}
        onSelectLevel={(num) => setActiveLevelFilter(num === 0 ? null : num)}
        activeLevelFilter={activeLevelFilter}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Banner: "#C is devided in 7 levels. C Language — Complete Learning" */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none pr-8">
            <span className="text-9xl font-black text-red-500 font-mono">#C</span>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-900/40 text-red-400 font-mono text-xs font-semibold mb-3 border border-red-800/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE 7 MASTER LEVELS OF C PROGRAMMING</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              #C is devided in 7 levels.
            </h2>
            <p className="text-base sm:text-xl text-red-400 font-semibold mt-1">
              C Language — Complete Learning
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              From foundational syntax, GCC compilation pipelines, bitwise operators, and modular functions, through the true heart of C — <strong className="text-white">Pointers, Dynamic Memory, and Structs</strong> — all the way to advanced file I/O, Makefiles, Valgrind debugging, and scratch-built Data Structures.
            </p>

            {/* Level Quick Matrix */}
            <div className="mt-6 flex flex-wrap gap-2">
              {C_LEVELS.map((lvl) => (
                <button
                  key={lvl.levelNumber}
                  onClick={() => setActiveLevelFilter(lvl.levelNumber)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all cursor-pointer ${
                    activeLevelFilter === lvl.levelNumber
                      ? 'bg-red-600 text-white border-red-500 shadow-md font-bold'
                      : 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:border-slate-600'
                  }`}
                >
                  <span className="text-red-400 mr-1 font-bold">L{lvl.levelNumber}:</span>
                  {lvl.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Filter or Search Notification */}
        {(activeLevelFilter !== null || searchQuery.trim() !== '') && (
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-red-400" />
              <span>
                Showing results for:{' '}
                {activeLevelFilter && (
                  <span className="font-semibold text-white mr-2">Level {activeLevelFilter}</span>
                )}
                {searchQuery && (
                  <span className="font-mono text-amber-300">"{searchQuery}"</span>
                )}
                {' '}({filteredLevels.length} level{filteredLevels.length === 1 ? '' : 's'} matching)
              </span>
            </div>

            <button
              onClick={() => {
                setActiveLevelFilter(null);
                setSearchQuery('');
              }}
              className="text-red-400 hover:text-red-300 font-medium underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 7 Levels Section */}
        <section id="levels-container" className="space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-red-500" />
              Curriculum Breakdown
            </h3>
            <span className="text-xs font-mono text-slate-400">
              7 Core Levels (Foundations to Capstone)
            </span>
          </div>

          {filteredLevels.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400">
              <Terminal className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-200">No matching C topics found</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "pointers", "malloc", "struct", "bitwise", or "scanf".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveLevelFilter(null);
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors cursor-pointer"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredLevels.map((level) => (
                <LevelCard
                  key={level.levelNumber}
                  level={level}
                  completedTopics={completedTopics}
                  onToggleTopic={toggleTopic}
                  searchQuery={searchQuery}
                />
              ))}
            </div>
          )}
        </section>

        {/* Suggested Timeline Section */}
        <TimelineSection />

        {/* Recommended Books & Practice Platforms Section */}
        <ResourcesSection />

        {/* Mobile App & APK Banner */}
        <ApkBanner />
      </main>

      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          id="open-quick-ref-btn"
          onClick={() => setIsQuickRefOpen(true)}
          className="px-3.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 shadow-xl flex items-center gap-2 text-xs font-mono font-medium transition-all hover:scale-105 cursor-pointer"
          title="Open C Compilation & Syntax Cheat Sheet"
        >
          <Code2 className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">C Cheat Sheet</span>
        </button>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-xl transition-all hover:scale-110 cursor-pointer self-end"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Reference Modal */}
      <QuickRefModal
        isOpen={isQuickRefOpen}
        onClose={() => setIsQuickRefOpen(false)}
      />

      {/* Bottom of website Footer with requested text in light green */}
      <Footer />
    </div>
  );
}
