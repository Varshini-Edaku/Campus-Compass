import { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  BookOpen, 
  Award, 
  CheckCircle, 
  TrendingUp,
  Database,
  Cpu,
  Shield,
  Layers,
  Activity,
  Mail,
  Info 
} from 'lucide-react';

const researchGroups = [
  {
    id: "cids",
    name: "Computational Intelligence & Data Sciences (CIDS)",
    description: "Empowering next-gen systems with deep learning, computer vision, natural language processing, and big data pipelines.",
    focusAreas: ["Predictive Analytics", "Large Language Models", "Autonomous Systems Modeling"],
    leadFaculty: "Dr. Rama Krishna",
    facultyEmail: "ramakrishna@ama.amrita.edu",
    iconKey: "Database"
  },
  {
    id: "cps-iot",
    name: "Cyber-Physical Systems & IoT (CPS-IoT)",
    description: "Designing modern node fabrics, automated agricultural grids, wearable biomechanical diagnostic rigs, and smart urban units.",
    focusAreas: ["Real-time Signal Systems", "Mesh Node Networks", "Edge-Computing Frameworks"],
    leadFaculty: "Dr. Sandeep Kumar",
    facultyEmail: "sandeepkumar@ama.amrita.edu",
    iconKey: "Cpu"
  },
  {
    id: "cyber-sec",
    name: "Cybersecurity, Cryptography & Privacy Group",
    description: "Protecting systems from threat actors by drafting secure key architectures, blockchain protocols, and privacy-preserving schemas.",
    focusAreas: ["Zero-Knowledge Proofs", "Secure Hardware Enclaves", "Malware Telemetry"],
    leadFaculty: "Dr. Vignesh Prasad",
    facultyEmail: "vigneshprasad@ama.amrita.edu",
    iconKey: "Shield"
  },
  {
    id: "vlsi",
    name: "VLSI, Microwaves & Next-Gen Semiconductors",
    description: "Optimizing transistor layouts, silicon architectures, high-frequency circuits, and clean energy grid controllers.",
    focusAreas: ["Mixed-Signal ICs", "RF Micro-strip Antennas", "FPGA Accelerator Blocks"],
    leadFaculty: "Dr. Meera Nair",
    facultyEmail: "meeranair@ama.amrita.edu",
    iconKey: "Layers"
  },
  {
    id: "health-tech",
    name: "Bio-Informatics & Health-Informatics Unit",
    description: "Creating computational tools to analyze genetic databases, track digital health metrics, and synthesize smart medical diagnostic models.",
    focusAreas: ["Sequence Alignment Algos", "EHR Predictive Models", "Smart Wearable Interfacing"],
    leadFaculty: "Dr. Anirudh Sen",
    facultyEmail: "anirudhsen@ama.amrita.edu",
    iconKey: "Activity"
  }
];

export default function AcademicsSection() {
  const [midterm, setMidterm] = useState<number>(38);
  const [internals, setInternals] = useState<number>(44);
  const [endSem, setEndSem] = useState<number>(78);
  const [attendance, setAttendance] = useState<number>(88);

  const [totalScore, setTotalScore] = useState<number>(82.4);
  const [projectedGrade, setProjectedGrade] = useState<string>("A+ (Excellent)");
  const [gradeColor, setGradeColor] = useState<string>("text-teal-500");
  const [seniorAdvice, setSeniorAdvice] = useState<string>("");

  const [selectedGroupId, setSelectedGroupId] = useState<string>("cids");
  const [studentName, setStudentName] = useState<string>("");
  const [studentBranch, setStudentBranch] = useState<string>("");
  const [studentSkills, setStudentSkills] = useState<string>("");

  const selectedGroup = researchGroups.find(g => g.id === selectedGroupId) || researchGroups[0];

  const handleLaunchEmail = () => {
    const subject = `Inquiry: Undergrad Research Collaboration - ${selectedGroup.name}`;
    const body = `Respected Professor ${selectedGroup.leadFaculty},

I hope this email finds you well.

My name is ${studentName || "[Your Name]"}, a first-year B.Tech student in ${studentBranch || "[Your Branch]"} at Amrita Vishwa Vidyapeetham, Amaravati campus.

I am writing to express my strong interest in collaborating under your research guidance in the ${selectedGroup.name} domain. ${studentSkills ? `I have preliminary self-study background in ${studentSkills}.` : "I am keen to assist on ongoing publications, algorithms, and active models."}

Would it be possible to schedule a brief 10-15 minute discussion to share my motivation and understand possible entry channels?

Thank you for your valuable time and consideration.

Sincerely,
${studentName || "[Your Name]"}`;

    window.location.href = `mailto:${selectedGroup.facultyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Re-calculate when scores change
  useEffect(() => {
    // scale midterm (written out of 50) to 20 marks
    const midtermConverted = (midterm / 50) * 20;
    // other internals are raw out of 50
    const internalsFinal = internals;
    // end sem (written out of 100) scaled to 30 marks
    const endSemConverted = (endSem / 100) * 30;

    const cumulative = midtermConverted + internalsFinal + endSemConverted;
    const rounded = parseFloat(cumulative.toFixed(1));
    setTotalScore(rounded);

    let grade = "C (Pass)";
    let color = "text-amber-500";
    let advice = "Warning: This is the borderline zone for relative curves. Spend an extra hour clarifying logic over brute memory.";

    if (rounded >= 90) {
      grade = "O (Outstanding)";
      color = "text-emerald-500 dark:text-emerald-400 font-extrabold";
      advice = "🏆 Senior Peak! This puts you on track for a perfect 10 SGPA in this course. You are absolutely mastering relative grading!";
    } else if (rounded >= 80) {
      grade = "A+ (Excellent)";
      color = "text-teal-500 dark:text-teal-400 font-bold";
      advice = "✨ Fantastic job! Highly competitive score. Keep resolving the assignments to lock this down.";
    } else if (rounded >= 70) {
      grade = "A (Very Good)";
      color = "text-sky-500 dark:text-sky-400 font-semibold";
      advice = "🎯 Solid performance! Strong core foundation. It easily keeps your target of a 9+ CGPA fully active.";
    } else if (rounded >= 60) {
      grade = "B+ (Good)";
      color = "text-indigo-500 dark:text-indigo-400 font-medium";
      advice = "⚖️ Neutral Zone. Good, but Amrita's relative grading might pull this code score. Try asking seniors for resources to boost this class next time!";
    } else if (rounded >= 50) {
      grade = "B (Above Average)";
      color = "text-orange-500 dark:text-orange-450";
      advice = "⚠️ Tight margins. Ensure you score better in the remaining quizzes and end-sems to secure your averages.";
    } else if (rounded >= 40) {
      grade = "C (Pass)";
      color = "text-amber-600 dark:text-amber-500";
      advice = "🚩 Warning: This is the borderline zone for relative curves. Spend an extra hour clarifying logic over brute memory.";
    } else {
      grade = "F (Fail)";
      color = "text-rose-600 dark:text-rose-400 font-bold";
      advice = "🚨 High risk of fail/supplementary. Reach out to the faculty today to request support, and practice programming questions regularly!";
    }

    setProjectedGrade(grade);
    setGradeColor(color);
    setSeniorAdvice(advice);
  }, [midterm, internals, endSem]);

  const handleNumericInput = (val: string, max: number, setter: (n: number) => void) => {
    let parsed = parseFloat(val) || 0;
    if (parsed > max) parsed = max;
    if (parsed < 0) parsed = 0;
    setter(parsed);
  };

  return (
    <section id="academics" className="max-w-7xl mx-auto px-4 py-20 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[10px] tracking-widest uppercase bg-brand-maroon/5 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold-light font-extrabold px-4 py-1.5 rounded-xl border border-brand-maroon/10 dark:border-brand-gold/30">
          Academic Policy & Systems
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 tracking-tight text-slate-900 dark:text-white uppercase">
          Academic Assessment & Simulator
        </h2>
        <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
          Attendance rules, grading thresholds, and relative bell-curves demystified. No surprises—prepare strategically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Key Guides (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div className="bg-white dark:bg-[#181111] p-6 rounded-2xl border border-slate-150 dark:border-brand-maroon/10 shadow-sm hover:border-brand-maroon/20 transition-all">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-red-50 dark:bg-brand-maroon/20 text-brand-maroon dark:text-brand-gold rounded-xl shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold font-display text-sm tracking-wide text-slate-900 dark:text-white uppercase">Mandatory 75% Attendance Rule</h3>
                <p className="text-xs text-slate-505 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                  If attendance falls below 75%, it is a direct <b>FA (Failed due to Attendance)</b> grade. 
                  Manage your medical and OD (On-Duty) leaves with absolute precision from week 1. No warnings!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#181111] p-6 rounded-2xl border border-slate-150 dark:border-brand-maroon/10 shadow-sm hover:border-brand-maroon/20 transition-all">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-gold/10 text-brand-maroon dark:text-brand-gold rounded-xl shrink-0">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold font-display text-sm tracking-wide text-slate-900 dark:text-white uppercase">Relative Grading Bell-Curve</h3>
                <p className="text-xs text-slate-505 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                  Amrita follows standard bell-curve distribution relative grading. Your letter grade depends on the 
                  <b> class average</b>. Maintaining a 9+ CGPA requires staying ahead of the crowd!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-maroon/5 dark:bg-[#201515] p-6 rounded-2xl border border-brand-maroon/15 dark:border-brand-maroon/30 text-left">
            <h3 className="font-extrabold font-display text-xs tracking-wider uppercase text-brand-maroon dark:text-brand-gold flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4" />
              CGPA 9+ Blueprint Advice
            </h3>
            <ul className="text-xs text-slate-605 dark:text-slate-400 space-y-3 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-brand-gold mt-0.5 shrink-0" />
                <span><b>Attend Classes Consistently:</b> Staying active on lectures nets you direct internal marks and avoids FA risks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-brand-gold mt-0.5 shrink-0" />
                <span><b>Clarify Doubts Immediately:</b> Don't let backlogs pile up. Teachers appreciate active feedback after lectures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-brand-gold mt-0.5 shrink-0" />
                <span><b>Master Core Logic:</b> Logic and compilation mechanics matter way more than rote slide-cramming. Practice code!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Assessment Interactive Simulator (7 Columns) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#181111] p-6 md:p-8 rounded-3xl border border-slate-200/60 dark:border-brand-maroon/20 shadow-lg text-left">
          <h3 className="font-serif font-black text-lg md:text-xl text-slate-900 dark:text-white uppercase tracking-tight">
            Academic Assessment Grade Simulator
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-semibold leading-relaxed">
            Enter your scores based on the <b>Real Evaluation Scheme (70% Internal / 30% External)</b> to view projected grade curves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Midterm (50 scaling to 20) */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-350 tracking-wide uppercase">
                Mid-Term Exam Score (0 - 50)
              </label>
              <input 
                type="number" 
                value={midterm || ''} 
                onChange={(e) => handleNumericInput(e.target.value, 50, setMidterm)}
                min="0" 
                max="50" 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-white dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none font-mono text-sm dark:text-slate-100" 
              />
            </div>

            {/* Internals */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-350 tracking-wide uppercase">
                Internals: Labs, Quizzes, Projects (0 - 50)
              </label>
              <input 
                type="number" 
                value={internals || ''} 
                onChange={(e) => handleNumericInput(e.target.value, 50, setInternals)}
                min="0" 
                max="50" 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-white dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none font-mono text-sm dark:text-slate-100" 
              />
            </div>

            {/* End Sem (100 scaled to 30) */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-350 tracking-wide uppercase">
                End-Semester Written Exam (0 - 100)
              </label>
              <input 
                type="number" 
                value={endSem || ''} 
                onChange={(e) => handleNumericInput(e.target.value, 100, setEndSem)}
                min="0" 
                max="100" 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-white dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none font-mono text-sm dark:text-slate-100" 
              />
            </div>

            {/* Attendance */}
            <div className="space-y-1.5">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-350 tracking-wide uppercase">
                Your Current Attendance % (0 - 100)
              </label>
              <input 
                type="number" 
                value={attendance || ''} 
                onChange={(e) => handleNumericInput(e.target.value, 100, setAttendance)}
                min="0" 
                max="100" 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-white dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none font-mono text-sm dark:text-slate-100" 
              />
            </div>
          </div>

          {/* Attendance Danger Prompt */}
          {attendance < 75 && (
            <div className="mt-5 p-4 bg-red-50 dark:bg-[#2c1315] border border-red-200 dark:border-brand-maroon/40 rounded-xl flex items-start gap-2.5">
              <AlertTriangle className="h-5 w-5 text-brand-maroon dark:text-brand-gold shrink-0 mt-0.5 animate-pulse" />
              <span className="text-xs text-red-905 dark:text-slate-200 font-semibold leading-relaxed">
                🚨 <b>DANGER:</b> Attendance is ({attendance}%), which falls below the mandatory 75% limit! Unless you submit official medical sheets or OD (On-Duty) approval slips to college coordinators, you will secure an <b>FA (Failed due to Attendance)</b> grade immediately. Focus on attending early lectures!
              </span>
            </div>
          )}

          {/* Score Results Layout Card */}
          <div className="mt-6 border-t border-slate-200/60 dark:border-slate-800/70 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F5] dark:bg-[#150e0e] p-5 rounded-2xl border border-slate-150 dark:border-brand-maroon/20">
              <div>
                <div className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">
                  Calculated Cumulative Score
                </div>
                <div className="text-2xl font-mono font-extrabold text-brand-maroon dark:text-brand-gold mt-1">
                  {totalScore} / 100
                </div>
              </div>
              <div className="sm:text-right">
                <div className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">
                  Estimated Relative Level
                </div>
                <div className={`text-lg font-extrabold mt-1 ${gradeColor} flex items-center gap-1.5 sm:justify-end`}>
                  <Award className="h-5 w-5 shrink-0" />
                  <span>{projectedGrade}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-401 mt-4 italic leading-relaxed">
              * <b>Advice from Seniors:</b> {seniorAdvice}
            </p>
          </div>
        </div>
      </div>

      {/* Research Interest Groups Section */}
      <div className="mt-20 border-t border-slate-200/60 dark:border-brand-maroon/20 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase bg-brand-maroon/5 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold-light font-extrabold px-4 py-1.5 rounded-xl border border-brand-maroon/10 dark:border-brand-gold/30">
            Faculty Collaboration Hub
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-black mt-3 tracking-tight text-slate-900 dark:text-white uppercase">
            Research Interest Groups
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
            Discover active research domains at Amrita Amaravati. Connect with professors, assist on publications, and gain academic leverage. Select a group and edit your details to draft your collaboration request.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Research Groups List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-1 text-left px-1">
              Select a Research Domain:
            </div>
            {researchGroups.map((group) => {
              const Icon = {
                Database: Database,
                Cpu: Cpu,
                Shield: Shield,
                Layers: Layers,
                Activity: Activity
              }[group.iconKey] || Database;
              const isSelected = selectedGroupId === group.id;

              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroupId(group.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex gap-4 items-start cursor-pointer ${
                    isSelected
                      ? 'bg-brand-maroon/[0.03] dark:bg-brand-maroon/10 border-brand-maroon dark:border-brand-gold shadow-md'
                      : 'bg-white dark:bg-[#181111] border-slate-200 dark:border-brand-maroon/10 hover:border-brand-maroon/30 dark:hover:border-brand-gold/30'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-brand-maroon text-brand-gold-light' 
                      : 'bg-[#FAF8F5] dark:bg-[#251515] text-slate-500 dark:text-slate-400'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                        {group.name}
                      </h4>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-maroon dark:bg-brand-gold shrink-0"></span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                      {group.description}
                    </p>
                    <div className="text-[10px] text-brand-maroon dark:text-brand-gold font-semibold flex items-center gap-1 pt-1">
                      <span>Lead Coordinator: {group.leadFaculty}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contact Template Composer (7 Columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#181111] p-6 md:p-8 rounded-3xl border border-slate-200/60 dark:border-brand-maroon/20 shadow-lg flex flex-col justify-between text-left">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <span className="p-1 px-2 text-[9px] font-mono tracking-widest font-extrabold bg-brand-maroon/10 dark:bg-brand-gold/20 text-brand-maroon dark:text-brand-gold rounded uppercase inline-block self-start sm:self-auto">
                  DRAFT COMPOSER
                </span>
                <span className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500">→</span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 truncate">
                  To: {selectedGroup.leadFaculty} ({selectedGroup.facultyEmail})
                </span>
              </div>
              <h3 className="font-serif font-black text-lg md:text-xl text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                Collaboration Request Letter
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-semibold leading-relaxed">
                Personalize your researcher details below. The interactive mail drafting system will construct a professional inquiry mail to professors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-705 dark:text-slate-350 tracking-wide uppercase">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Varshini E."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-[#FAF8F5] dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none text-xs dark:text-slate-100 font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-705 dark:text-slate-350 tracking-wide uppercase">
                    Your Branch / Class id
                  </label>
                  <input
                    type="text"
                    value={studentBranch}
                    onChange={(e) => setStudentBranch(e.target.value)}
                    placeholder="e.g. CSE (AI), Roll Sec A"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-[#FAF8F5] dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none text-xs dark:text-slate-100 font-semibold"
                  />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-705 dark:text-slate-350 tracking-wide uppercase">
                    Primary Technical Skills or Research Area Interest
                  </label>
                  <input
                    type="text"
                    value={studentSkills}
                    onChange={(e) => setStudentSkills(e.target.value)}
                    placeholder="e.g. Python, Linear Algebra, Neural Networks, PyTorch"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-brand-maroon/30 bg-[#FAF8F5] dark:bg-[#130d0d] focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon focus:outline-none text-xs dark:text-slate-100 font-semibold"
                  />
                </div>
              </div>

              {/* Dynamic Live Email Preview block */}
              <div className="bg-[#FAF8F5] dark:bg-[#140f0f] border border-slate-200 dark:border-brand-maroon/15 p-5 rounded-2xl font-mono text-[11px] text-slate-600 dark:text-slate-300 space-y-2 relative max-h-[220px] overflow-y-auto mb-6 text-left">
                <div className="text-slate-400 absolute top-2 right-3 font-semibold uppercase text-[8px] tracking-widest pointer-events-none select-none">
                  Draft Preview
                </div>
                <div className="font-bold text-slate-800 dark:text-white">
                  Subject: <span className="text-brand-maroon dark:text-brand-gold font-medium">Inquiry: Undergrad Research Collaboration - {selectedGroup.name}</span>
                </div>
                <hr className="border-slate-150 dark:border-brand-maroon/10 my-2" />
                <p>Respected Professor {selectedGroup.leadFaculty},</p>
                <p>I hope this email finds you well.</p>
                <p>
                  My name is <span className="text-brand-maroon dark:text-brand-gold font-bold underline decoration-dotted">{studentName || "[Your Name]"}</span>, a first-year B.Tech student in <span className="text-brand-maroon dark:text-brand-gold font-bold underline decoration-dotted">{studentBranch || "[Your Branch]"}</span> at Amrita Amaravati.
                </p>
                <p>
                  I am writing to express my strong interest in collaborating under your research guidance in the <span className="font-bold text-slate-800 dark:text-white">{selectedGroup.name}</span> domain. 
                  {studentSkills ? ` I have preliminary self-study background in ${studentSkills}.` : " I am keen to assist on ongoing publications, algorithms, and active models."}
                </p>
                <p>
                  Would it be possible to schedule a brief 10-15 minute discussion to share my motivation and understand possible entry channels?
                </p>
                <p>Thank you for your valuable time and consideration.</p>
                <p>Sincerely,</p>
                <p className="font-bold text-brand-maroon dark:text-brand-gold">
                  {studentName || "[Your Name]"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-150 dark:border-brand-maroon/15 pt-5 mt-auto">
              <div className="flex items-start gap-2 text-slate-405 dark:text-slate-500 max-w-[70%] text-[10px] leading-relaxed">
                <Info className="h-4 w-4 text-brand-maroon dark:text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Clicking "Launch Email Draft" triggers your device's native mail client (e.g. Outlook/Gmail) pre-filled with this letter configuration.
                </span>
              </div>
              <button
                onClick={handleLaunchEmail}
                className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light dark:bg-brand-gold dark:hover:bg-brand-gold-light text-white dark:text-[#2d2105] font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Mail className="h-4 w-4" />
                <span>Launch Email Draft</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
