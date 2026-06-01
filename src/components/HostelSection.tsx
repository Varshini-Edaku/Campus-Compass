import { useState, useEffect } from 'react';
import { PACKING_ITEMS } from '../data';
import { PackingNeed } from '../types';
import { Shield, Coffee, Zap, Wifi, Check, Activity, BookOpen, AlertTriangle } from 'lucide-react';

export default function HostelSection() {
  const [checkedList, setCheckedList] = useState<Record<string, boolean>>(() => {
    return PACKING_ITEMS.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const [packedCount, setPackedCount] = useState<number>(0);
  const [isMattressPacked, setIsMattressPacked] = useState<boolean>(false);

  useEffect(() => {
    const counts = Object.values(checkedList).filter(Boolean).length;
    setPackedCount(counts);
    setIsMattressPacked(!!checkedList['mattress']);
  }, [checkedList]);

  const toggleItem = (id: string) => {
    setCheckedList((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = PACKING_ITEMS.length;
  const progressRatio = totalItems > 0 ? packedCount / totalItems : 0;
  // Radius R = 32 -> Circumference = 2 * PI * R ≈ 201
  const maxDashOffset = 201;
  const strokeDashoffset = maxDashOffset - (progressRatio * maxDashOffset);

  const amenities = [
    "Fully Loaded Student Gym",
    "Modern Reference Library",
    "24/7 Central Medical Unit",
    "Dynamic Innovation Labs",
    "Volleyball & Sport Fields",
    "Interactive Multi-Cuisine Café"
  ];

  return (
    <section id="hostel" className="bg-[#faf6f2] dark:bg-[#120a0a] py-20 scroll-mt-24 border-y border-brand-maroon/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-widest uppercase bg-brand-maroon/5 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold-light font-extrabold px-4 py-1.5 rounded-xl border border-brand-maroon/10 dark:border-brand-gold/30">
            Student Housing & Conveniences
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 tracking-tight uppercase text-slate-900 dark:text-white">
            Hostels, Dining & Essentials
          </h2>
          <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
            Boarding protocols, laundry schedules, food ratings, and dynamic pacing calculators. Prepare your packing list early.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Room & General Logistics (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            
            {/* Real Campus Hostel Exterior Banner */}
            <div className="rounded-3xl overflow-hidden border border-brand-maroon/20 dark:border-brand-maroon/30 shadow-md relative h-[210px] bg-slate-900 group">
              <img 
                src="/src/assets/images/amrita_hostel_1780320971747.png" 
                alt="Amrita Student Hostels exterior" 
                className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-left">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#ebb232] uppercase">PREMIUM CAMPUS RESIDENCE</span>
                <h3 className="text-lg md:text-xl font-serif font-black text-white mt-1 uppercase">Modern Boarding Built for Comfort & Safety</h3>
                <p className="text-[11px] text-slate-200 mt-1 lines-clamp-2 md:lines-clamp-none font-medium leading-relaxed max-w-xl">
                  Featuring ultra-modern student residential chambers, equipped with centralized air conditioning options, generous personal study bays, high-speed biometric access lanes, and beautiful lush landscaping.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Girls Hostel Card */}
              <div className="bg-white dark:bg-[#181111] p-6 rounded-2xl border border-brand-maroon/15 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-maroon/5 rounded-full blur-xl -mr-6 -mt-6"></div>
                <span className="inline-block px-2.5 py-1 rounded bg-brand-maroon/5 dark:bg-brand-maroon/20 text-brand-maroon dark:text-brand-gold font-extrabold text-[9px] font-mono tracking-widest uppercase">
                  GIRLS RESIDENCE
                </span>
                <h3 className="text-base font-serif font-black mt-3 text-slate-905 dark:text-white uppercase">Cozy, En-Suite Chambers</h3>
                <ul className="text-xs text-slate-550 dark:text-slate-400 space-y-2 mt-4 leading-relaxed font-semibold">
                  <li className="flex items-center gap-2">🚪 <span className="font-bold text-slate-800 dark:text-slate-300">3-Sharing Standard:</span> Spacious rooms with personal shelves</li>
                  <li className="flex items-center gap-2">🚿 <span className="font-bold text-slate-800 dark:text-slate-300">Attached Washrooms:</span> Fully en-suite private bathroom</li>
                  <li className="flex items-center gap-2">🔒 <span className="font-bold text-brand-maroon dark:text-brand-gold-light">Curfew Lock:</span> Strictly checked biometric gate scans at <b>8:45 PM</b></li>
                </ul>
              </div>
              
              {/* Boys Hostel Card */}
              <div className="bg-white dark:bg-[#181111] p-6 rounded-2xl border border-brand-gold/30 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl -mr-6 -mt-6"></div>
                <span className="inline-block px-2.5 py-1 rounded bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold font-extrabold text-[9px] font-mono tracking-widest uppercase">
                  BOYS RESIDENCE
                </span>
                <h3 className="text-base font-serif font-black mt-3 text-slate-905 dark:text-white uppercase font-sans">Social & Dynamic Wings</h3>
                <ul className="text-xs text-slate-550 dark:text-slate-400 space-y-2 mt-4 leading-relaxed font-semibold">
                  <li className="flex items-center gap-2">🚪 <span className="font-bold text-slate-800 dark:text-slate-300">4-Sharing Standard:</span> Wide airy desks and broad window frames</li>
                  <li className="flex items-center gap-2">🚿 <span className="font-bold text-slate-800 dark:text-slate-300">Common Washrooms:</span> Large separate community showers block</li>
                  <li className="flex items-center gap-2">🔒 <span className="font-bold text-brand-gold-dark dark:text-brand-gold">Curfew Lock:</span> Strictly checked biometric gate scans at <b>9:00 PM</b></li>
                </ul>
              </div>
            </div>

            {/* General Logistics Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Mess */}
              <div className="glass-panel p-5 rounded-2xl bg-white/55 dark:bg-slate-900/55 border-slate-200/50 dark:border-slate-800/80">
                <div className="p-2 bg-orange-55/10 text-orange-600 rounded-lg w-max mb-3">
                  <Coffee className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">🍛 Mess & Dining Food</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Generally rated as highly tasty compared to other boards. Multiple North & South Indian menus rotate weekly. There stands a central cafeteria for late hot bites.
                </p>
              </div>

              {/* Laundry */}
              <div className="glass-panel p-5 rounded-2xl bg-white/55 dark:bg-slate-900/55 border-slate-200/50 dark:border-slate-800/80">
                <div className="p-2 bg-teal-55/10 text-teal-600 rounded-lg w-max mb-3">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">🧺 Included Laundry</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Standard washing services are fully covered in the standard hostel boarding fee structure. Ironing is an optional add-on priced at roughly ₹10 per item.
                </p>
              </div>

              {/* WiFi */}
              <div className="glass-panel p-5 rounded-2xl bg-white/55 dark:bg-slate-900/55 border-slate-200/50 dark:border-slate-800/80">
                <div className="p-2 bg-sky-55/10 text-sky-600 rounded-lg w-max mb-3">
                  <Wifi className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">📶 Room WiFi Speeds</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  High-speed student WiFi routers reside on matching partition blocks. Completely fine for regular study databases, GitHub pushes, and live video lectures.
                </p>
              </div>
            </div>

            {/* General Amenities */}
            <div className="bg-white dark:bg-[#181111] p-6 rounded-3xl border border-slate-205 dark:border-brand-maroon/20 shadow-sm text-left">
              <h4 className="font-serif font-black text-sm mb-4 flex items-center gap-2 text-slate-905 dark:text-white uppercase tracking-tight">
                <Activity className="h-4.5 w-4.5 text-brand-maroon dark:text-brand-gold" />
                Amaravati Core Campus Facilities Checklist
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-550 dark:text-slate-400 font-semibold">
                {amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 animate-pulse" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packing Checklist Tool (4 Columns) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#181111] p-6 rounded-3xl border border-brand-maroon/15 shadow-lg relative text-left">
            <div className="flex items-center justify-between mb-6 border-b border-slate-205 dark:border-brand-maroon/15 pb-4">
              <div>
                <h3 className="font-serif font-black text-base text-slate-905 dark:text-white uppercase tracking-tight leading-tight">
                  What Seniors Wish They Packed
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-semibold">Keep track before moving</p>
              </div>
              
              {/* Circular Dash SVG Progress indicator */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
                  <circle 
                    className="text-slate-100 dark:text-slate-900/40" 
                    strokeWidth="4.5" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="32" 
                    cx="36" 
                    cy="36" 
                  />
                  <circle 
                    className="text-brand-maroon dark:text-[#ebb232] transition-all duration-505" 
                    strokeWidth="4.5" 
                    strokeDasharray={maxDashOffset} 
                    strokeDashoffset={strokeDashoffset} 
                    strokeLinecap="round" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="32" 
                    cx="36" 
                    cy="36" 
                  />
                </svg>
                <div className="absolute text-center flex flex-col justify-center items-center">
                  <span className="text-[10px] font-mono font-black text-slate-900 dark:text-white">
                    {packedCount}/{totalItems}
                  </span>
                  <span className="text-[7px] uppercase tracking-wider text-slate-400 font-bold scale-90">
                    Packed
                  </span>
                </div>
              </div>
            </div>

            {/* Core vital mattress alert warning */}
            {!isMattressPacked && (
              <div className="mb-4 bg-amber-50 dark:bg-[#2c1a12] border border-amber-200 dark:border-brand-maroon/30 p-3 rounded-2xl flex items-start gap-2.5">
                <AlertTriangle className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5 animate-bounce" />
                <span className="text-[11px] text-brand-gold-dark dark:text-slate-200 leading-relaxed font-semibold">
                  <b>VITAL REMINDER:</b> A sturdy wooden cot is supplied, but the actual <b>Mattress is most commonly forgotten</b>! Make sure to pre-order or purchase yours nearby before travel.
                </span>
              </div>
            )}

            {/* Pack checklist inputs list */}
            <div className="space-y-3.5">
              {PACKING_ITEMS.map((item) => (
                <label 
                  key={item.id} 
                  className={`flex items-start gap-3 p-2.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                    checkedList[item.id]
                      ? 'bg-brand-maroon/5 dark:bg-[#251515] border-brand-maroon/30 text-brand-maroon dark:text-brand-gold'
                      : 'border-slate-150 dark:border-brand-maroon/10 bg-white/30 dark:bg-slate-900/30 text-slate-700 dark:text-slate-350 hover:bg-[#FAF8F5] dark:hover:bg-[#181111]'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={checkedList[item.id] || false}
                    onChange={() => toggleItem(item.id)}
                    className="w-4 h-4 accent-brand-maroon dark:accent-brand-gold rounded mt-0.5 cursor-pointer" 
                  />
                  <div className="text-xs">
                    <span className="font-bold block text-slate-800 dark:text-slate-100">
                      {item.label.split('(')[0]}
                    </span>
                    {item.label.includes('(') && (
                      <span className="text-[10px] text-slate-500 dark:text-slate-405 font-semibold block mt-0.5">
                        ({item.label.split('(')[1]}
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
