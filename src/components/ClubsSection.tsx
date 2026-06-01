import { useState } from 'react';
import { CLUBS_DATA } from '../data';
import { ClubItem } from '../types';
import { Filter, Users, Calendar, Award, Zap, Code } from 'lucide-react';

export default function ClubsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterButtons = [
    { label: 'All Clubs', category: 'all' },
    { label: 'Coding & CP', category: 'coding' },
    { label: 'Robotics & Hardware', category: 'technical' },
    { label: 'Cultural & Art', category: 'cultural' },
    { label: 'Sports League', category: 'sports' }
  ];

  const filteredClubs = selectedCategory === 'all' 
    ? CLUBS_DATA 
    : CLUBS_DATA.filter(club => club.category === selectedCategory);

  return (
    <section id="clubs" className="max-w-7xl mx-auto px-4 py-20 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] tracking-widest uppercase bg-brand-maroon/5 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold-light font-extrabold px-4 py-1.5 rounded-xl border border-brand-maroon/10 dark:border-brand-gold/30">
          In-Depth Clubs Catalog
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 tracking-tight uppercase text-slate-905 dark:text-white">
          Clubs & Student Societies
        </h2>
        <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
          Amrita's vibrant student ecosystem has a group tailored for you. Filter and discover your future team.
        </p>
      </div>

      {/* Filter Chips Selection Menu */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {filterButtons.map((btn) => (
          <button 
            key={btn.category}
            onClick={() => setSelectedCategory(btn.category)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 transform active:scale-95 cursor-pointer border ${
              selectedCategory === btn.category
                ? 'bg-brand-maroon hover:bg-brand-maroon/90 text-[#ffffff] border-brand-maroon shadow-md'
                : 'bg-white dark:bg-[#161010] text-[#4d4d4d] dark:text-slate-300 border-slate-200 dark:border-brand-maroon/15 hover:bg-[#FAF8F5] dark:hover:bg-brand-maroon/10'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Clubs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club, index) => (
          <div 
            key={index}
            className="club-item bg-[#faf9f6]/90 dark:bg-[#181111] p-6 rounded-2xl border border-slate-200 dark:border-brand-maroon/15 hover:-translate-y-1.5 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                club.category === 'coding' ? 'text-brand-maroon dark:text-brand-gold' :
                club.category === 'technical' ? 'text-brand-gold-dark dark:text-brand-gold-light' :
                club.category === 'cultural' ? 'text-amber-600 dark:text-amber-400' :
                'text-emerald-600 dark:text-emerald-400'
              }`}>
                {club.category} • {club.tagline}
              </span>
              <h3 className="font-serif font-bold text-lg mt-1 text-slate-905 dark:text-white uppercase">{club.name}</h3>
              <p className="text-xs text-slate-505 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
                {club.description}
              </p>
            </div>
            
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-brand-maroon/15 text-[10px] text-slate-400 dark:text-slate-500 font-mono flex justify-between items-center font-bold">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {club.recruits}
              </span>
              <span className="font-extrabold text-brand-maroon dark:text-brand-gold">
                {club.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Enrollment tips footer */}
      <div className="mt-12 bg-[#FAF8F5] dark:bg-[#150e0e] p-6 rounded-3xl border border-brand-maroon/10 dark:border-brand-maroon/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
        <div>
          <h4 className="font-serif font-black text-sm text-brand-maroon dark:text-brand-gold uppercase tracking-wide">💡 How Club Registration Works at Amrita Amaravati</h4>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-1.5 leading-relaxed max-w-2xl font-bold">
            Registration forms are released online within Month 2 of the semester. Selective technical blocks host offline filtering rounds (basic logic, written aptitude coding, or creative rounds) to place candidates. Pick according to your genuine energy!
          </p>
        </div>
        <span className="text-xs font-bold px-4 py-2 bg-brand-maroon/5 text-brand-maroon dark:text-brand-gold rounded-full flex-shrink-0 border border-brand-maroon/20">
          Multiple selections allowed
        </span>
      </div>

      {/* ==========================================
           HACKATHON SPOTLIGHT CELEBRATION BLOCK
           ========================================== */}
      <div id="hackathon-corner" className="mt-20 bg-[#1c0c0d] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl border border-brand-maroon/20">
        
        {/* Dynamic circular background overlay blur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,178,50,0.12),transparent_60%)]"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-gold-light font-bold text-xs rounded-full border border-white/5 uppercase tracking-wide">
              <span>🚀 FLAGSHIP EVENT CELEBRATION</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-none uppercase">
              HACK X AMRITA 2.0
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
              Amrita Amaravati's premier hackathon event that stands as a core testament to the campus's rising coding and startup atmosphere! 
              Seniors organized and students delivered, laying down robust technical ideas, hacking prototype models overnight, and presenting to panels of external corporate judges.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left border-t border-white/10 pt-6 font-semibold">
              <div>
                <div className="text-2xl font-bold font-serif text-brand-gold">30 Hours</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Intense Dev-Athon</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#fcd97f]">₹75,000</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Cash Prize Pool</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-amber-300">Epic Vibe</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">100% Student Led</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/15 bg-white/5 flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div className="h-[170px] w-full relative">
              <img 
                src="/src/assets/images/hackathon_scene_1780300788851.png" 
                alt="Hack X Amrita 2.0 Team Developers" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b0a0b] via-[#1b0a0b]/10 to-transparent"></div>
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-555 animate-pulse"></span>
                <span className="text-[9px] font-mono text-emerald-200 font-bold uppercase tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900/40">Hacking Live</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3 font-medium text-slate-300 text-xs">
                <p>⚡ <b>Open Coding Culture:</b> Junior-senior mixed team formations are heavily promoted. Learn from direct codebase mentors without friction.</p>
                <p>🍔 <b>Full Catering:</b> Fully student-managed catering systems—continuous feeds, refreshing snacks, and caffeine stations to keep the energy high.</p>
                <p>🏆 <b>Judges Support & CVs:</b> Direct technical feedback from top senior software engineers judging the final prototype presentations.</p>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#ebb232] font-mono block">Up next: HACK X AMRITA 3.0</span>
                <p className="text-[10px] text-slate-400 mt-1 font-semibold">Expect registration portals to launch around Semester 2 of 2026!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
