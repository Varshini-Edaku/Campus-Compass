import { useState, useEffect } from 'react';
import Header from './components/Header';
import RadarSection from './components/RadarSection';
import AcademicsSection from './components/AcademicsSection';
import HostelSection from './components/HostelSection';
import ClubsSection from './components/ClubsSection';
import RoadmapSection from './components/RoadmapSection';
import SurvivalSection from './components/SurvivalSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { Compass, GraduationCap, Users, ShieldAlert, ArrowRight, MousePointer } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleHeroSearchClick = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: "Core Programs", value: "CSE / CCE / AI" },
    { label: "Intake Per Course", value: "250 - 300" },
    { label: "Student Harmony", value: "100% Day / Boarder" },
    { label: "First Year Start", value: "July 2026" }
  ];

  return (
    <div className="bg-[#FAF8F5] text-slate-800 dark:bg-dark-bg dark:text-slate-100 font-sans antialiased min-h-screen transition-colors duration-300">
      {/* Background soft ambiance blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-maroon/5 dark:bg-brand-maroon/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 dark:bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navigation Header */}
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <main className="pt-24">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#851215 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-9">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-maroon/5 text-brand-maroon dark:bg-brand-gold/10 dark:text-brand-gold-light font-extrabold text-[11px] tracking-wider uppercase border border-brand-maroon/10 dark:border-brand-gold/30">
              <span>✨ Compiled and Curated by Seniors of Amrita Amaravati</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif font-black tracking-tight leading-none text-slate-900 dark:text-white">
              Succeed In Your First Year <br className="hidden md:block"/>
              At <span className="text-brand-maroon dark:text-brand-gold text-glow-gold">Amrita Amaravati 2026</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              The premium, unfiltered senior blueprint. Master the relative academic curves, 
              explore official campus clubs, calculate assessments on-the-fly, and access direct hostel survival guides.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-3">
              <button 
                onClick={handleHeroSearchClick}
                className="bg-brand-maroon hover:bg-brand-maroon-light dark:bg-brand-gold dark:hover:bg-brand-gold-light text-white dark:text-[#2d2105] font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-maroon/15 dark:shadow-brand-gold/10 cursor-pointer flex items-center gap-2"
              >
                <span>Browse FAQ Directory</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a 
                href="#academics"
                className="bg-white hover:bg-slate-50 dark:bg-[#181111] dark:hover:bg-[#201717] text-slate-700 dark:text-brand-gold font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-xl border border-slate-200 dark:border-brand-maroon/30 transition-all hover:scale-[1.02] shadow-sm flex items-center gap-2"
              >
                <span>Assessment Simulator</span>
                <MousePointer className="h-4 w-4 text-brand-maroon dark:text-brand-gold" />
              </a>
            </div>

            {/* Premium Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 pt-10">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-[#181111] p-6 rounded-2xl border border-slate-150 dark:border-brand-maroon/10 shadow-sm transition-all duration-300 hover:border-brand-gold/30"
                >
                  <div className="text-sm md:text-base font-extrabold text-brand-maroon dark:text-brand-gold">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 font-mono font-bold uppercase mt-2 tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* High-res Curvilinear Academic Building Highlights */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/40 dark:border-brand-maroon/10 relative group aspect-[21/9] min-h-[250px] bg-[#0c0808]">
                <img 
                  src="/src/assets/images/amrita_amaravati_campus_1780320949387.png" 
                  alt="Amrita Vishwa Vidyapeetham, Amaravati Campus Highlights" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent flex flex-col justify-end p-6 md:p-10 text-left">
                  <div className="backdrop-blur-md bg-[#251515]/60 border border-brand-maroon/30 p-5 md:p-6 rounded-2xl max-w-xl text-white">
                    <span className="text-[9px] font-mono font-extrabold tracking-widest uppercase bg-brand-maroon px-2.5 py-1 rounded inline-block text-brand-gold-light border border-brand-gold/20">CAMPUS GALLERY</span>
                    <h3 className="text-xl md:text-2xl font-serif font-black mt-2 text-white tracking-tight uppercase">
                      The Majestic Curvilinear Academic Wing
                    </h3>
                    <p className="text-xs text-slate-200 mt-2 font-medium leading-relaxed">
                      Amrita Amaravati features a standard-setting, ultra-modern curvilinear campus building of glass & steel, equipped with central AC, smart labs, and spacious green sports arenas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Curfew Active Monitor */}
        <RadarSection />

        {/* Academics segment (Manual & Simulator) */}
        <AcademicsSection />

        {/* Hostels & utilities check list */}
        <HostelSection />

        {/* Clubs Catalogs */}
        <ClubsSection />

        {/* First Year timeline */}
        <RoadmapSection />

        {/* Survival kit traps advice */}
        <SurvivalSection />

        {/* Searchable Helpdesk FAQs list */}
        <FaqSection />

      </main>

      {/* Footer disclaimer and scroll trigger */}
      <Footer />
    </div>
  );
}
