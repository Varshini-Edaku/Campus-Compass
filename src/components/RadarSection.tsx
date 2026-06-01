import { useState, useEffect } from 'react';
import { Radio, Clock } from 'lucide-react';

export default function RadarSection() {
  const [time, setTime] = useState(new Date());
  const [curfewStatus, setCurfewStatus] = useState({
    title: "Campus Open ☀️",
    message: "Free movement in campus. Seniors say: Use this time to explore the academic block!",
    colorClass: "text-emerald-500",
    bgPulseClass: "bg-emerald-500"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const totalMinutesToday = (hours * 60) + minutes;

    // Girls: 8:45 PM -> 20:45 = 1245 mins
    const girlsCurfewMin = (20 * 60) + 45;
    // Boys: 9:00 PM -> 21:00 = 1260 mins
    const boysCurfewMin = (21 * 60) + 0;
    // Morning wake: 6:00 AM = 360 mins
    const morningWakeMin = 6 * 60;

    let title = "Campus Open ☀️";
    let message = "Free movement in campus. Seniors say: Use this time to explore the academic block!";
    let colorClass = "text-emerald-500 dark:text-emerald-400";
    let bgPulseClass = "bg-emerald-500";

    if (totalMinutesToday >= girlsCurfewMin && totalMinutesToday < boysCurfewMin) {
      title = "Girls Curfew Active ⚠️";
      const boysRemaining = boysCurfewMin - totalMinutesToday;
      message = `Girls are inside hostels. Boys have ${boysRemaining} minute${boysRemaining !== 1 ? 's' : ''} left before curfew bounds.`;
      colorClass = "text-amber-500 dark:text-amber-400";
      bgPulseClass = "bg-amber-400";
    } else if (totalMinutesToday >= boysCurfewMin || totalMinutesToday < morningWakeMin) {
      title = "Full Curfew Active 🔒";
      message = "All residents inside hostels. Campus is quiet. Time to study, code, or catch up with friends.";
      colorClass = "text-rose-500 dark:text-rose-400";
      bgPulseClass = "bg-rose-500";
    }

    setCurfewStatus({ title, message, colorClass, bgPulseClass });
  }, [time]);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative z-10">
      <div className="bg-white dark:bg-[#181111] border border-brand-maroon/15 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto text-left">
          <div className="flex items-center gap-3">
            <span className="relative flex h-4 w-4">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${curfewStatus.bgPulseClass} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-4 w-4 ${curfewStatus.bgPulseClass}`}></span>
            </span>
            <span className="text-xs font-extrabold text-brand-maroon dark:text-brand-gold font-mono uppercase tracking-widest flex items-center gap-1.5">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              Active Campus Radar
            </span>
          </div>

          <div className="mt-2 sm:mt-0">
            <h2 className={`font-serif font-black text-xl md:text-2xl uppercase tracking-tight ${curfewStatus.colorClass}`}>
              {curfewStatus.title}
            </h2>
            <p className="text-sm text-slate-550 dark:text-slate-400 mt-1 font-semibold leading-relaxed">
              {curfewStatus.message}
            </p>
          </div>
        </div>

        <div className="text-left md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-slate-200 dark:border-brand-maroon/15 w-full md:w-auto flex flex-col md:items-end justify-center shrink-0">
          <div className="flex items-center gap-1.5 text-sm font-mono text-brand-maroon dark:text-brand-gold-light font-extrabold bg-brand-maroon/5 dark:bg-brand-maroon/20 px-4 py-1.5 rounded-full border border-brand-maroon/10 dark:border-brand-gold/30">
            <Clock className="h-4 w-4 animate-pulse" />
            <span>TIME: {timeString}</span>
          </div>
          <div className="text-[10px] text-slate-400 dark:text-slate-400 mt-2 font-medium">
            Calculated from your browser's local timezone.
          </div>
        </div>
      </div>
    </section>
  );
}
