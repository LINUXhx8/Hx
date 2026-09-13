import React, { useState } from 'react';
import { CLevel } from '../types';
import { 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  AlertCircle, 
  Clock, 
  Layers 
} from 'lucide-react';

interface LevelCardProps {
  level: CLevel;
  completedTopics: Record<string, boolean>;
  onToggleTopic: (topicId: string) => void;
  searchQuery: string;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  completedTopics,
  onToggleTopic,
  searchQuery,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Count topics completed in this level
  const allSubtopicIds = level.sections.flatMap((s) => s.subtopics.map((st) => st.id));
  const completedInLevel = allSubtopicIds.filter((id) => completedTopics[id]).length;
  const totalInLevel = allSubtopicIds.length;
  const isLevelComplete = totalInLevel > 0 && completedInLevel === totalInLevel;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(level.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const highlightMatches = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="bg-amber-400/30 text-amber-200 px-0.5 rounded font-semibold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      id={`level-card-${level.levelNumber}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isLevelComplete
          ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
      }`}
    >
      {/* Level Header Bar */}
      <div className="p-5 sm:p-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          {/* Level Number Badge */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-xl border shrink-0 ${
              level.badgeColor
            }`}
          >
            L{level.levelNumber}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400 font-semibold">
                Level {level.levelNumber}
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-mono">
                <Clock className="w-3 h-3" />
                {level.estimatedTime}
              </span>
              {level.keyHighlight && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-950/80 border border-red-800/60 text-red-300 animate-pulse">
                  <AlertCircle className="w-3 h-3 text-red-400" />
                  {level.keyHighlight}
                </span>
              )}
              {isLevelComplete && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 border border-emerald-700 text-emerald-300">
                  Completed ✓
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {highlightMatches(`Level ${level.levelNumber}: ${level.title}`, searchQuery)}
            </h3>
            <p className="text-sm text-slate-400 mt-0.5">
              {level.tagline}
            </p>
          </div>
        </div>

        {/* Level Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          {/* Progress Indicator */}
          <span className="text-xs font-mono text-slate-400 mr-2">
            {completedInLevel}/{totalInLevel} topics
          </span>

          {/* Toggle Code Snippet Button */}
          <button
            id={`toggle-code-btn-${level.levelNumber}`}
            onClick={() => setShowCode(!showCode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border cursor-pointer ${
              showCode
                ? 'bg-red-950 border-red-700 text-red-300'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
            }`}
            title="View practical C code for this level"
          >
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>{showCode ? 'Hide Code' : 'C Example'}</span>
          </button>

          {/* Expand / Collapse Button */}
          <button
            id={`collapse-level-btn-${level.levelNumber}`}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse section' : 'Expand section'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Code Snippet Drawer */}
      {showCode && (
        <div className="bg-slate-950 border-b border-slate-800 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                {level.codeSnippet.title}
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-1 rounded flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-3 italic">
            {level.codeSnippet.description}
          </p>
          <pre className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs sm:text-sm text-emerald-300 font-mono overflow-x-auto leading-relaxed shadow-inner">
            <code>{level.codeSnippet.code}</code>
          </pre>
        </div>
      )}

      {/* Topics & Subtopics Body */}
      {isExpanded && (
        <div className="p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {level.sections.map((section) => (
              <div
                key={section.id}
                className="rounded-xl bg-slate-950/60 border border-slate-800/70 p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800">
                    <Layers className="w-4 h-4 text-red-500" />
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {highlightMatches(section.title, searchQuery)}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {section.subtopics.map((subtopic) => {
                      const isChecked = !!completedTopics[subtopic.id];
                      return (
                        <div
                          key={subtopic.id}
                          className={`group rounded-lg p-3 transition-all border ${
                            isChecked
                              ? 'bg-slate-900/70 border-emerald-900/40 text-slate-300'
                              : 'bg-slate-900/30 border-slate-800/60 hover:border-slate-700/80 text-slate-200'
                          }`}
                        >
                          {/* Subtopic Header & Checkbox */}
                          <div className="flex items-start gap-2.5">
                            <button
                              id={`topic-checkbox-${subtopic.id}`}
                              onClick={() => onToggleTopic(subtopic.id)}
                              className="mt-0.5 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
                              title={isChecked ? 'Mark as incomplete' : 'Mark as read/completed'}
                            >
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                              )}
                            </button>

                            <div className="flex-1">
                              <h5
                                className={`text-sm font-semibold transition-all ${
                                  isChecked ? 'line-through text-slate-400 font-medium' : 'text-slate-100'
                                }`}
                              >
                                {highlightMatches(subtopic.title, searchQuery)}
                              </h5>

                              {/* Details bullets */}
                              <ul className="mt-2 space-y-1.5 text-xs text-slate-400 pl-2">
                                {subtopic.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <span className="text-red-500/80 font-mono text-[10px] mt-0.5">▸</span>
                                    <span className="leading-relaxed">
                                      {highlightMatches(detail, searchQuery)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
