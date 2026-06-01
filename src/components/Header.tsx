import { useState, useEffect } from 'react';
import { GraduationCap, Moon, Sun, Menu, HelpCircle, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Academic Life', href: '#academics' },
    { label: 'Hostel & Facilities', href: '#hostel' },
    { label: 'Clubs', href: '#clubs' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Survival Kit', href: '#survival' },
    { label: 'FAQs', href: '#faq' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Notice Banner - Amrita Maroon styled */}
      <div className="bg-brand-maroon dark:bg-brand-maroon-dark text-white py-2 px-4 sticky top-0 z-[60] flex items-center justify-between text-xs sm:text-sm font-medium shadow-md transition-all duration-300 border-b border-brand-gold/20">
        <div className="flex items-center gap-2 max-w-4xl mx-auto w-full justify-center text-center">
          <span className="bg-brand-gold text-brand-maroon text-[9px] uppercase font-extrabold px-2.5 py-0.5 rounded-full animate-pulse shadow-sm">NEW RELEASES</span>
          <span>🎒 <b>Seniors Notice:</b> Mattress group bookings & hostel bus routes are now active for the July 2026 Batch. Use the timeline below!</span>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-50 py-3.5 transition-all duration-300 max-w-7xl mx-auto px-4 ${
          isScrolled 
            ? 'top-2 bg-white/95 dark:bg-[#140b0b]/95 backdrop-blur-md shadow-lg rounded-2xl border border-slate-200/60 dark:border-brand-maroon/20' 
            : 'top-10 bg-transparent'
        }`}
      >
        <nav className="px-6 py-1.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group hover:scale-102 transition-transform">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-brand-maroon dark:bg-brand-maroon-light shadow-md">
              <GraduationCap className="h-5.5 w-5.5 text-brand-gold shrink-0 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-sm tracking-widest text-brand-maroon dark:text-brand-gold-light uppercase leading-none">AMRITA</span>
              <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase leading-none mt-1">CAMPUS COMPASS • AMARAVATI</span>
            </div>
          </a>
          
          {/* Desktop Navlinks */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-xs tracking-wider uppercase font-extrabold text-slate-700 dark:text-slate-350 hover:text-brand-maroon dark:hover:text-brand-gold transition-colors relative duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-brand-maroon-dark/40 border border-slate-205 dark:border-brand-maroon/30 hover:bg-slate-200 dark:hover:bg-brand-maroon/20 transition-colors group cursor-pointer" 
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-brand-gold group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="h-4 w-4 text-brand-maroon group-hover:-rotate-12 transition-transform" />
              )}
            </button>
            
            <a 
              href="#faq" 
              className="hidden sm:inline-flex bg-brand-maroon hover:bg-brand-maroon-light text-white dark:bg-brand-gold dark:hover:bg-[#dfc469] dark:text-[#2d2105] font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-maroon/20 active:scale-95"
            >
              Junior Helpdesk
            </a>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-maroon/20 transition-colors" 
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-1.5 mt-3 p-5 rounded-2xl bg-white dark:bg-[#181111] border border-slate-200 dark:border-brand-maroon/20 shadow-xl md:hidden animate-fade-in text-left">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={handleLinkClick}
                className="py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-extrabold text-slate-705 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-brand-maroon/30 hover:text-brand-maroon dark:hover:text-brand-gold border-b border-slate-100 dark:border-brand-maroon/10 transition-colors"
               >
                {link.label}
              </a>
            ))}
            <a 
              href="#faq" 
              onClick={handleLinkClick}
              className="mt-3 text-center bg-brand-maroon text-white dark:bg-brand-gold dark:text-[#2d2105] py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-transform active:scale-95 flex items-center justify-center gap-1.5"
            >
              <HelpCircle className="h-4 w-4" />
              Senior FAQ Support
            </a>
          </div>
        )}
      </header>
    </>
  );
}
