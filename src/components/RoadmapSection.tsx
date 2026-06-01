import { useState } from 'react';
import { ROADMAP_STEPS } from '../data';
import { Bookmark, Compass, MessageSquare, ArrowRight } from 'lucide-react';

export default function RoadmapSection() {
  const [activeMonth, setActiveMonth] = useState<number>(1);

  const activeStep = ROADMAP_STEPS.find(step => step.month === activeMonth) || ROADMAP_STEPS[0];

  return (
    <section id="roadmap" className="max-w-7xl mx-auto px-4 py-20 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono font-bold px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50">
          Semester 1 Timeline
        </span>
        <h2 className="text-3xl font-display font-extrabold mt-4 tracking-tight">
          First Semester Month-by-Month Roadmap
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
          A real student's journey mapped month-by-month. Know what lies ahead and adjust strategically.
        </p>
      </div>

      {/* Month Picker Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {ROADMAP_STEPS.map((step) => (
          <button 
            key={step.month}
            onClick={() => setActiveMonth(step.month)}
            className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center gap-1.5 ${
              activeMonth === step.month
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-350 border border-slate-200/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span>Month {step.month}</span>
            <span className="text-[10px] opacity-75 font-medium hidden sm:inline">• {step.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Roadmap Step Interactive Card */}
      <div className="max-w-3xl mx-auto">
        <div className="roadmap-month-card glass-panel p-6 md:p-8 rounded-3xl border border-indigo-500/10 bg-white/50 dark:bg-slate-900/50 shadow-xl relative overflow-hidden transition-all duration-300 animate-fade-in">
          
          {/* Subtle decor line watermark */}
          <div className="absolute right-0 bottom-0 select-none text-9xl font-black font-display text-indigo-500/5 pointer-events-none -mr-8 -mb-10">
            0{activeStep.month}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 border-b border-slate-200/40 dark:border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-indigo-500 dark:text-indigo-400 font-bold uppercase tracking-widest block">
                {activeStep.subtitle}
              </span>
              <span className="inline-block mt-1 bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                {activeStep.target}
              </span>
            </div>
            
            <div className="text-slate-400 text-xs font-mono font-bold">
              Step {activeStep.month} of 6
            </div>
          </div>

          <h3 className="font-display font-extrabold text-xl md:text-2xl mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Compass className="h-5 w-5 text-indigo-550 shrink-0" />
            {activeStep.title}
          </h3>

          <p className="text-xs md:text-sm text-slate-605 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            {activeStep.description}
          </p>

          <div className="bg-indigo-500/5 dark:bg-slate-950/40 p-4 rounded-2xl text-xs md:text-sm text-indigo-750 dark:text-indigo-400 italic border-l-4 border-indigo-500/80 flex items-start gap-2">
            <MessageSquare className="h-4 w-4 shrink-0 mt-0.5 text-indigo-550" />
            <span className="font-medium">
              <b>"Senior Core Advice:</b> {activeStep.advice}"
            </span>
          </div>

          {activeStep.month < 6 && (
            <button 
              onClick={() => setActiveMonth((prev) => Math.min(6, prev + 1))}
              className="mt-6 text-xs text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 hover:gap-2 transition-all group scale-100 hover:scale-102 cursor-pointer border-indigo-500/20"
            >
              <span>Explore Next month</span>
              <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
