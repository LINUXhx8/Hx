import React from 'react';
import { TIMELINE_WEEKS } from '../data/cCurriculum';
import { Calendar, Target, Award, Rocket, CheckCircle } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline-section" className="scroll-mt-12">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              Structured Learning Pathway
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Suggested Timeline
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              A 10-week battle-tested roadmap from zero to implementing custom data structures and capstone software.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-mono shrink-0">
            <Target className="w-4 h-4 text-amber-400" />
            <span>Target: 10 Weeks Mastery</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="mt-8 relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-500 via-amber-500 to-emerald-500" />

          <div className="space-y-6">
            {TIMELINE_WEEKS.map((item, index) => (
              <div
                key={index}
                className="relative lg:pl-16 flex flex-col md:flex-row md:items-start gap-4 p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                {/* Timeline node icon */}
                <div className="hidden lg:flex absolute left-5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-amber-400 items-center justify-center text-xs font-bold text-amber-300 shadow-md">
                  {index + 1}
                </div>

                {/* Left/Header Column */}
                <div className="md:w-56 shrink-0">
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {item.weeks}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1.5">
                    {item.focusLevels}
                  </h4>
                  {index === 2 && (
                    <span className="inline-block mt-1 text-[11px] font-semibold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/50">
                      ★ Heavy Pointer Focus
                    </span>
                  )}
                  {index === 4 && (
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                      ★ Capstone Project
                    </span>
                  )}
                </div>

                {/* Center Column: Description & Milestones */}
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800/60 text-xs">
                    <div className="flex items-start gap-2 text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-300">Milestone:</strong> {item.milestone}
                      </div>
                    </div>

                    {item.projectOrDrill && (
                      <div className="flex items-start gap-2 text-slate-400">
                        <Rocket className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-300">Drill / Project:</strong> {item.projectOrDrill}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Project Callout */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-950/30 via-slate-900 to-amber-950/20 border border-red-900/30 flex items-center gap-3">
          <Award className="w-6 h-6 text-amber-400 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white">Suggested Capstone Options (Weeks 9–10):</strong> Build a complete real-world software utility such as a{' '}
            <span className="text-amber-300 font-medium">Student Database CLI</span>, a{' '}
            <span className="text-amber-300 font-medium">File-Based Inventory System</span>, or a{' '}
            <span className="text-amber-300 font-medium">Mini UNIX Shell</span> to test your memory management, structs, file I/O, and data structure implementations.
          </p>
        </div>
      </div>
    </section>
  );
};
