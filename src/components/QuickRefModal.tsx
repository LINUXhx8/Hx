import React from 'react';
import { X, Terminal, Cpu, Database, Binary, HelpCircle } from 'lucide-react';

interface QuickRefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickRefModal: React.FC<QuickRefModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-bold text-white font-mono">
              C Quick Syntax & Compilation Reference
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {/* GCC Compilation Commands */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2 font-mono">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Standard GCC Compilation Commands
            </h4>
            <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 font-mono text-xs space-y-2 text-emerald-400">
              <p><span className="text-slate-500"># Standard compile with rigorous warnings:</span><br />gcc -Wall -Wextra -pedantic -std=c11 main.c -o app</p>
              <p><span className="text-slate-500"># Compile with debug symbols for GDB:</span><br />gcc -g -Wall main.c -o app_debug</p>
              <p><span className="text-slate-500"># Run memory leak inspection via Valgrind:</span><br />valgrind --leak-check=full --show-leak-kinds=all ./app</p>
            </div>
          </div>

          {/* Format Specifiers Grid */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2 font-mono">
              <Binary className="w-4 h-4 text-amber-400" />
              Key Format Specifiers
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">%d / %i</span>
                <p className="text-slate-400 text-[11px] mt-0.5">signed int</p>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">%f / %lf</span>
                <p className="text-slate-400 text-[11px] mt-0.5">float / double</p>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">%c / %s</span>
                <p className="text-slate-400 text-[11px] mt-0.5">char / string</p>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">%p / %zu</span>
                <p className="text-slate-400 text-[11px] mt-0.5">pointer / size_t</p>
              </div>
            </div>
          </div>

          {/* Memory Layout */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2 font-mono">
              <Database className="w-4 h-4 text-rose-400" />
              C Program Memory Architecture
            </h4>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5">
              <div className="p-2 rounded bg-red-950/40 border border-red-800/40 flex justify-between">
                <span>Stack (High Addresses)</span>
                <span className="text-slate-400">Local vars, parameters, returns (grows ↓)</span>
              </div>
              <div className="p-2 rounded bg-amber-950/40 border border-amber-800/40 flex justify-between">
                <span>Heap (Dynamic Allocation)</span>
                <span className="text-slate-400">malloc, calloc, realloc (grows ↑)</span>
              </div>
              <div className="p-2 rounded bg-blue-950/40 border border-blue-800/40 flex justify-between">
                <span>BSS Segment</span>
                <span className="text-slate-400">Uninitialized global & static data</span>
              </div>
              <div className="p-2 rounded bg-purple-950/40 border border-purple-800/40 flex justify-between">
                <span>Data Segment</span>
                <span className="text-slate-400">Initialized global & static variables</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-700 flex justify-between">
                <span>Text Segment (Low Addresses)</span>
                <span className="text-slate-400">Binary machine instructions (read-only)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
