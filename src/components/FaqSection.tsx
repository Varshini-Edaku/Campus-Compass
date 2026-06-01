import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { Search, ChevronDown, BookOpen, Truck, Landmark, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const topicChips = [
    { label: 'All Questions', value: 'all' },
    { label: 'Rooms & Rules', value: 'hostel' },
    { label: 'CGPA & Grading', value: 'academic' },
    { label: 'Clubs & Activities', value: 'club' },
    { label: 'Transport Info', value: 'transport' }
  ];

  const handleAccordionToggle = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Filter FAQs based on search word and topic chip
  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const cleanSearch = searchTerm.toLowerCase().trim();
    
    // Topic filtering
    if (activeTopic !== 'all' && faq.category !== activeTopic) {
      return false;
    }

    // Search query filtering
    if (cleanSearch !== '') {
      const qText = faq.question.toLowerCase();
      const aText = faq.answer.toLowerCase();
      const matchTags = faq.tags.some(tag => tag.toLowerCase().includes(cleanSearch));
      
      return qText.includes(cleanSearch) || aText.includes(cleanSearch) || matchTags;
    }

    return true;
  });

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-20 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 font-mono font-bold px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50">
          Senior Helpdesk FAQs
        </span>
        <h2 className="text-3xl font-display font-extrabold mt-4 tracking-tight">
          The Ultimate Student FAQ Directory
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
          Exactly 20 highly detailed, honest answers to genuine fresher worries about Amrita Amaravati. Real insights only.
        </p>
      </div>

      {/* FAQ Search Bar & Quick Categories */}
      <div className="max-w-3xl mx-auto mb-10 px-2 space-y-5">
        <div className="flex items-center gap-2 p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm focus-within:ring-1 focus-within:ring-indigo-500/55 transition-all">
          <Search className="h-5 w-5 text-indigo-550 ml-3 shrink-0" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the 20 questions directory... (e.g., 'relative', 'curfew', 'AC bus', 'meals')" 
            className="w-full bg-transparent outline-none border-none text-xs sm:text-sm pl-1 py-1 text-slate-800 dark:text-slate-150" 
          />
        </div>
        
        {/* Navigation Categories Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {topicChips.map((chip) => (
            <button 
              key={chip.value}
              onClick={() => {
                setActiveTopic(chip.value);
                setSearchTerm(''); // Clear text search to avoid duplicate confusion
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold select-none transition-all duration-300 transform active:scale-95 cursor-pointer ${
                activeTopic === chip.value
                  ? 'bg-indigo-600 text-white shadow-sm font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-705'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* 20 Complete FAQ Accordions Stack */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div 
              key={faq.id} 
              className={`faq-accordion rounded-2xl border transition-all duration-300 ${
                isOpen 
                  ? 'bg-indigo-50/10 border-indigo-500/20 dark:bg-indigo-950/20 dark:border-indigo-900/30' 
                  : 'border-slate-200/65 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/20'
              }`}
            >
              <button 
                onClick={() => handleAccordionToggle(faq.id)}
                className="faq-header w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <h3 className="font-display font-extrabold text-xs sm:text-sm md:text-base text-slate-805 dark:text-slate-150 flex items-start gap-2">
                  <HelpCircle className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${isOpen ? 'text-indigo-550' : 'text-slate-400'}`} />
                  <span>{faq.question}</span>
                </h3>
                <span className="p-1 rounded-full bg-slate-50 dark:bg-slate-850 hover:bg-slate-105 shrink-0 ml-4 transition-colors">
                  <ChevronDown className={`h-4 w-4 text-slate-450 dark:text-slate-355 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>
              
              {/* Expandable answers body */}
              <div 
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  isOpen ? 'max-h-[500px] border-t border-slate-150 dark:border-slate-800/60 py-4 px-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-medium space-y-2">
                  <p>{faq.answer}</p>
                  
                  {/* Category badging indicator in details footer */}
                  <div className="pt-3 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                    <span className="bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                      topic: #{faq.category}
                    </span>
                    {faq.tags.slice(0, 4).map((tag, tIndex) => (
                      <span key={tIndex} className="bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty search matches placeholder */}
        {filteredFaqs.length === 0 && (
          <div className="text-center p-12 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 italic text-sm text-slate-500 dark:text-slate-400">
            🔍 No questions match your current search parameters. Try searching simpler phrases or keywords like 'rooms', 'relative' or 'curfew'!
          </div>
        )}
      </div>
    </section>
  );
}
