import { ShieldAlert, Lightbulb, GraduationCap, Code, Rocket, BookOpen, UserCheck, TrendingUp } from 'lucide-react';

export default function SurvivalSection() {
  const wisdomList = [
    {
      id: "01",
      title: "Build your network early",
      description: "Make genuine friends with both day scholars and boarders. Connect with seniors; they hold previous years' quiz blueprints, question papers, and resource drive drives!",
      icon: <UserCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      id: "02",
      title: "Focus deeply on logic over rote memory",
      description: "Memorizing code from slides gets you zero points inside labs. Learn core data structures, practice algorithms on compiler consoles, and solve problems from base fundamentals.",
      icon: <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      id: "03",
      title: "Approach Faculty for Research Opportunities",
      description: "Amrita faculty are highly active in scientific research. If you are interested in AI, Cryptography, or Material Science, book consultation hours and ask to help on papers. Co-authoring is a fantastic CV highlight!",
      icon: <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    }
  ];

  const trapsList = [
    {
      title: "❌ Trap 1: Keeping doubts locked up",
      desc: "Seniors say: Speak up! Waiting until exam night is a direct path to low relative grade averages."
    },
    {
      title: "❌ Trap 2: Ignoring essential soft skills",
      desc: "Placements filters assess verbal communication and team coordination just as much as your core scripts."
    },
    {
      title: "❌ Trap 3: Chasing points over competence",
      desc: "High GPA marks are useless if you struggle heavily inside whiteboard developer screenings."
    },
    {
      title: "❌ Trap 4: Staying isolated from clubs",
      desc: "Join cultural or development teams! It provides outstanding leadership experience and life parameters."
    },
    {
      title: "❌ Trap 5: Terribly poor weekly time tracking",
      desc: "Failing to write daily records means you'll have 10 messy files to submit during midterm weeks."
    },
    {
      title: "❌ Trap 6: Failing to connect with seniors",
      desc: "Never hesitate to drop a 'Hi' to a second or third-year student. We are completely eager to guide you!"
    }
  ];

  const careerPathways = [
    {
      title: "Competitive Programming",
      desc: "Solving logic grids on LeetCode, CodeForces, and preparing for ACM ICPC. Incredible pathway for high-paying software roles.",
      icon: "💻",
      color: "border-indigo-505/10 text-indigo-500"
    },
    {
      title: "Dynamic Tech Development",
      desc: "Building websites, React setups, Node engines, database apps, and compiling system widgets. Learn by making real-world tools.",
      icon: "👾",
      color: "border-purple-500/10 text-purple-500"
    },
    {
      title: "AI / ML Engineering",
      desc: "Implementing data preprocessing, PyTorch models, Neural networks, or tuning modern generative API nodes.",
      icon: "🤖",
      color: "border-violet-500/10 text-violet-500"
    },
    {
      title: "Aptitude & Corporate Prep",
      desc: "Diving deep into DBMS, Operating Systems, Computer Networks, and SQL challenges starting around Semester 4.",
      icon: "📊",
      color: "border-teal-500/10 text-teal-500"
    },
    {
      title: "Scientific Research Publish",
      desc: "Drafting academic papers with faculty and co-submitting them to global IEEE conferences or Springer journals.",
      icon: "🔬",
      color: "border-rose-500/10 text-rose-500"
    },
    {
      title: "Startups & Incubation",
      desc: "Ideating tech products, pitching presentation slide summaries to campus cells, and exploring seed incubation funds.",
      icon: "💼",
      color: "border-sky-500/10 text-sky-500"
    }
  ];

  return (
    <section id="survival" className="bg-slate-55/70 dark:bg-slate-900/20 py-20 scroll-mt-24 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono font-bold px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50">
            Survival Blueprint
          </span>
          <h2 className="text-3xl font-display font-extrabold mt-4 tracking-tight">
            Advice from Seniors: The Survival Kit
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Uncensored developer wisdom. The 6 critical mistakes first-year freshers make and how to avoid them easily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Senior Wisdom Board */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-indigo-500/10 bg-white/50 dark:bg-slate-900/50 shadow-md">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2 text-slate-900 dark:text-slate-100 border-b border-slate-200/40 dark:border-slate-800/80 pb-3">
              <Lightbulb className="h-5 w-5 text-amber-500 shrink-0" />
              Core Senior Wisdom Principles
            </h3>
            
            <div className="space-y-6">
              {wisdomList.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="p-3 bg-indigo-100/50 dark:bg-indigo-950/40 rounded-xl h-max shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-250">
                      {item.id}. {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Traps & Avoidance */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-rose-500/10 bg-white/50 dark:bg-slate-900/50 shadow-md">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2 text-rose-600 dark:text-rose-450 border-b border-slate-200/45 dark:border-slate-800/80 pb-3">
              <ShieldAlert className="h-5 w-5 text-rose-500 shrink-0" />
              6 Common Freshers Traps & How to Avoid
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trapsList.map((trap, index) => (
                <div 
                  key={index} 
                  className="p-3.5 bg-rose-500/5 dark:bg-rose-950/10 border border-rose-500/10 rounded-2xl flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-rose-655 dark:text-rose-400 block">
                    {trap.title}
                  </span>
                  <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-2.5 leading-normal font-medium">
                    {trap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career pathways indicator */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-mono font-bold px-3 py-1 rounded-full border border-purple-100 dark:border-purple-900/50">
              Future Milestones
            </span>
            <h3 className="text-2xl font-display font-extrabold mt-3 text-slate-900 dark:text-slate-100">
              Second Year onwards: Custom Careers Pathways
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
              At Amrita Amaravati, there is no single predetermined route. Match what aligns with your profile early on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPathways.map((pathway, index) => (
              <div 
                key={index} 
                className="glass-panel p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/80 hover:scale-102 transition-transform duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{pathway.icon}</span>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">
                    {pathway.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                  {pathway.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
