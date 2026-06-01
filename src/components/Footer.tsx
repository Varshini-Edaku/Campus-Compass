import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 cursor-pointer transition-all duration-300 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
        }`}
        aria-label="Go to Top"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
      </button>

      {/* Main Footer */}
      <footer className="border-t border-slate-200/50 dark:border-slate-800/60 bg-white dark:bg-slate-950 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
            CAMPUS COMPASS AMRAVATI 2026
          </p>
          <p className="text-[11px] text-slate-450 dark:text-slate-450 max-w-2xl mx-auto leading-relaxed font-semibold">
            An authentic senior-led initiative. Built and curated entirely by seniors. 
            Not affiliated with any administrative body of Amrita Vishwa Vidyapeetham.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Made with ❤️ by Seniors of Amrita</span>
            <span className="text-slate-300 dark:text-slate-800">•</span>
            <span>Amrita Amaravati 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}
