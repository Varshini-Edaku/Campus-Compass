// CORE FRESHERS COMPASS WEB UTILITIES ENGINE

// 1. DATA REPOSITORIES (PORTED FROM REACT SCHEMAS)
const FAQ_DATA = [
  {
    id: 1,
    question: "1. Is staying in the campus hostel mandatory?",
    answer: "No, it is not compulsory. Amrita Amaravati hosts a vibrant day scholar community. The university provides extensive bus transportation networks across critical areas in Guntur, Vijayawada, and Tenali. Both boarders and day scholars work and mix together in late-night clubs and tech competitions without any division.",
    tags: ["hostel", "rooms", "laundry", "compulsory", "boys", "girls", "dayscholars", "local"],
    category: "hostel"
  },
  {
    id: 2,
    question: "2. How exactly does relative grading work? Is maintaining a 9+ CGPA tough?",
    answer: "Relative grading fits your score to a bell-curve based on the class average. If the exam is super easy and average is 85, you might need a 92 for an 'O' grade. If the average is 45, an 70 could score an outstanding O. Maintaining a 9+ CGPA requires consistent discipline, resolving assignments timely, and scoring well in internally mapped quizzes.",
    tags: ["academic", "relative", "grading", "curve", "cgpa", "exam", "score", "classes"],
    category: "academic"
  },
  {
    id: 3,
    question: "3. What is the university bus system like for day scholars?",
    answer: "The university operates multiple air-conditioned and standard buses. They cover major pickup loops in Guntur, Vijayawada, and surrounding regions. Bus seats are allocated on a first-come, first-served basis, and subscription fees are paid annually.",
    tags: ["transport", "bus", "route", "day scholars", "local", "commute", "guntur", "vijayawada", "tenali"],
    category: "transport"
  },
  {
    id: 4,
    question: "4. What essential items should I definitely pack on my first day?",
    answer: "The biggest senior reminder: Pack or pre-order a mattress! The campus hostel provides the wooden bedframe, desk, and steel closet, but mattresses are not provided. Also, bring a bath bucket, mug, laptop extension board, plate, personal spoon, and toiletries.",
    tags: ["hostel", "mattress", "essentials", "list", "pack", "folder", "books", "packing"],
    category: "hostel"
  },
  {
    id: 5,
    question: "5. Is high-speed WiFi available inside individual hostel rooms?",
    answer: "Yes, every room has high-speed network access. The speeds are quite consistent for research, developer uploads, and regular lecture streaming. Gaming ports are usually locked or restricted by the central administrator, but academic networks are highly robust.",
    tags: ["hostel", "wifi", "rooms", "speeds", "streaming", "gaming", "router", "network"],
    category: "hostel"
  },
  {
    id: 6,
    question: "6. Can day scholars participate in late-night hackathons and club activities?",
    answer: "Absolutely! During prominent events and hackathons like 'HACK X AMRITA 2.0', day scholars are allowed on-campus overnight, provided they have parental consent and official university permissions sorted beforehand.",
    tags: ["academic", "day scholars", "clubs", "hackathons", "late night", "event", "overnight"],
    category: "club"
  },
  {
    id: 7,
    question: "7. What are the curfew times? Are they strictly enforced?",
    answer: "Yes, safety curfews are strictly maintained. For Girls Hostels, the curfew is 8:45 PM. For Boys Hostels, it is 9:00 PM. Biometric scans are completed daily at these cutoffs. Make sure you don't miss these scans unnecessarily.",
    tags: ["hostel", "curfew", "girls", "boys", "times", "locked", "hostel rules", "biometric"],
    category: "hostel"
  },
  {
    id: 8,
    question: "8. How does the laundry work? Are there extra charges?",
    answer: "Standard laundry washing loads are thoroughly covered in the campus boarding/hostel fees. Bags are submitted on designated block-days weekly and returned clean. Ironing/press is an premium service priced around ₹10 per item.",
    tags: ["hostel", "laundry", "fees", "irons", "sheets", "washers", "washing"],
    category: "hostel"
  },
  {
    id: 9,
    question: "9. When do clubs recruit, and what is the selection criteria?",
    answer: "Club listings open during Month 2 of the semester. Selective groups might host an offline test (aptitude, basic algorithms, or behavioral checks) to map your skills. Pick a group based on what you want to learn!",
    tags: ["club", "registration", "enroll", "test", "selective", "coding", "academic", "recruits"],
    category: "club"
  },
  {
    id: 10,
    question: "10. What is the mess food like?",
    answer: "The food quality is generally excellent! The mess accommodates both North and South Indian menus. The cafeteria offers outstanding alternative snacks (sandwiches, pav bhaji, cold coffee) for when you want a break from the mess.",
    tags: ["hostel", "food", "dining", "canteen", "menus", "cafeteria", "mess", "meals"],
    category: "hostel"
  },
  {
    id: 11,
    question: "11. Are the gym, sports, and laboratory spaces fully functional?",
    answer: "Yes! The classrooms and laboratories feature multi-screen setups. The reference library has a wide collection of engineering textbooks. The dynamic gym and volleyball networks are heavily utilized by students during early evening intervals.",
    tags: ["hostel", "facilities", "medical", "gym", "library", "sports", "sports play", "lab", "classroom"],
    category: "hostel"
  },
  {
    id: 12,
    question: "12. What are the engineering branches offered, and is there a lot of competition?",
    answer: "The core campus focus is on computer sciences, featuring CSE (Computer Science), CSE-AI (Artificial Intelligence), CSE-AIDS (AI and Data Science), and CCE (Computer & Communication Engineering). The competitive curve is sharp but manageable if you code consistently.",
    tags: ["academic", "cse", "cce", "aids", "branches", "curriculum", "program comparison", "competition"],
    category: "academic"
  },
  {
    id: 13,
    question: "13. What is the real breakdown of the 70-30 evaluation scheme?",
    answer: "Every course is evaluated out of 100 marks: 70 Marks are Internal (20 marks for written Mid-Terms, and 50 marks for quizzes, active projects, labRecords, presentations), and 30 Marks are External (the end-semester written paper). Maximize your internals to stay stress-free during final exams!",
    tags: ["academic", "internal", "external", "midterm", "records", "split", "marks", "evaluation", "grades"],
    category: "academic"
  },
  {
    id: 14,
    question: "14. What is the coding culture like for freshers?",
    answer: "Amrita Amaravati has a rapidly growing coding and startup culture. Juniors are heavily encouraged to form joint hack teams with senior guidance. Participating in active Github open challenges and discord forums during Semester 1 is highly beneficial!",
    tags: ["club", "teams", "coding", "hackathons", "projects", "juniors", "help", "culture", "github"],
    category: "club"
  },
  {
    id: 15,
    question: "15. What was Hack X Amrita 2.0? How can I prepare for future versions?",
    answer: "Hack X Amrita 2.0 was an outstanding 30-hour developer hackathon with a prize pool of ₹75,000! To get ready for Hack X 3.0, learn frontend layout elements, master Git version control, and focus on practical problem-solving from day one.",
    tags: ["hackathon", "events", "hackx", "details", "registrations", "criteria", "prepare", "awards"],
    category: "club"
  },
  {
    id: 16,
    question: "16. How do I approach the faculty for scientific research or co-authoring papers?",
    answer: "Simply read their research profiles on the official board. Approach them during consultation hours to express your interest in co-publishing or writing review drafts. They are extremely encouraging and supportive!",
    tags: ["academic", "careers", "research", "paper", "faculty", "publish", "scientific", "ieee"],
    category: "academic"
  },
  {
    id: 17,
    question: "17. Are there fine systems or strict rules in the hostel?",
    answer: "Yes, safety protocols are strictly maintained. Unauthorized absenteeism or skipping biometric curfews will direct alert logs to parents. Standard discipline guarantees a highly peaceful corridor for everyone.",
    tags: ["hostel", "fine", "gate", "sign out", "forms", "discipline", "rules", "regulations"],
    category: "hostel"
  },
  {
    id: 18,
    question: "18. Am I allowed to bring electronic kettles, induction stoves, or iron boxes to my room?",
    answer: "Heavy electronic items like induction stoves or private room heaters are strictly banned due to safety and power limits. Standard student gear (laptops, phones, desk light clips, multi-plug extension cords) are fully supported.",
    tags: ["hostel", "gear", "charger", "heater", "room rules", "kettle", "electronics", "stove"],
    category: "hostel"
  },
  {
    id: 19,
    question: "19. What should be my top focus during the first month?",
    answer: "Focus on making new connections! Introduce yourself, join study groups, and get familiar with the campus setup. Establishing a strong social network early on is key to navigating college life smoothly.",
    tags: ["academic", "focus", "roadmap", "study", "month 1", "general", "friends", "social"],
    category: "general"
  },
  {
    id: 20,
    question: "20. How do second-year students preparation for placement tests operate?",
    answer: "From Year 2 onwards, focus shift to specialized pathways. Leverage coding bootcamps, practice core algorithms daily, and work on building real product MVPs. There's no single path: choose what matches your long-term goals!",
    tags: ["careers", "prep", "placements", "higher study", "second year", "cc", "ml", "interviews"],
    category: "general"
  }
];

const ROADMAP_STEPS = [
  {
    month: 1,
    title: "Establish Your Social & Campus Footprint",
    subtitle: "MONTH 01 - GETTING STARTED",
    target: "Target: Orientation & Bonds",
    description: "Your first month is primarily about getting coordinates right. Walk the campus corridors, find the classrooms, locate the library, medical center, and gym. Most importantly, initiate conversations. Meet new people, build genuine friendships, and find matching day-scholar/hosteler networks.",
    advice: "Don't sit quiet inside hostel rooms. Make three new friends daily during orientation. It shapes your team dynamics."
  },
  {
    month: 2,
    title: "Calibrate Lectures & Join Student Clubs",
    subtitle: "MONTH 02 - RIGOR BEGINS",
    target: "Target: Adjust Academics",
    description: "The academic momentum accelerates here. Keep track of daily lecture paces so assignments don't group up. Simultaneously, club registration forms start circulating. Choose two that match your coding or social interests and submit early drafts.",
    advice: "Watch the attendance metrics carefully. It is extremely annoying when you get barred because of early misses!"
  },
  {
    month: 3,
    title: "Deepen Core Logic & Practice Communication",
    subtitle: "MONTH 03 - CORE SKILLS",
    target: "Target: Foundations & Speech",
    description: "Stop memorizing algorithms blindly. Focus on building clean logic. If you are learning C++, Java, or Python, solve basic problems using direct flowcharting models. Simultaneously, present project notes in front of classmates – it significantly helps in overcoming stage fright.",
    advice: "A senior core advice: Logic is King. Slide slides can wait, strong coding fundamentals stay for life."
  },
  {
    month: 4,
    title: "Participate in Competitions & Show Prototypes",
    subtitle: "MONTH 04 - BUILD DEVS",
    target: "Target: Build Confidence",
    description: "Amrita has rising technical loops. Enter local competitions even if you feel underprepared. Learn how to present Git repos, build simple index mockups, and talk to senior mentors. It triggers major practical boosts and shapes your placement portfolio early on.",
    advice: "You don't need to be an expert to enter hacks. Go to build, connect, and learn real-time skills!"
  },
  {
    month: 5,
    title: "Strategic Prep & Midterm Conversions",
    subtitle: "MONTH 05 - SHARP STRATEGY",
    target: "Target: Secure CGPAs",
    description: "Assessments peak here. Do not rely on last-gasp cramming. Leverage the 70% internal evaluation strategy. Check outstanding records, verify lab codes, and secure solid midterms converts. When your internal mark stands high, the written final becomes very relaxed!",
    advice: "A 9+ CGPA is absolutely achievable with discrete, consistent weekly attention. Keep tracking calculation averages!"
  },
  {
    month: 6,
    title: "Reflect, Celebrate & Set Second Semester",
    subtitle: "MONTH 06 - ROAD PLANNER",
    target: "Target: Future Horizons",
    description: "Your first semester finishes! Spend hours evaluating your relative standing. Celebrate the successfully cleared modules, find areas of concern, and lay down clear paths for the near future.",
    advice: "You survived! You are officially senior on radar now. Treat some freshers next and keep sharing advice."
  }
];

const CLUBS_DATA = [
  {
    name: "Prachurya",
    category: "coding",
    description: "The core competitive programming and algorithmic brain trust. Organizing dynamic code sprints and platform training matches.",
    recruits: "Semester 1 Month 2",
    status: "Active Sprints",
    tagline: "Competitive Coding"
  },
  {
    name: "Anvesh",
    category: "coding",
    description: "The energetic peer learning developer club. Focusing on front-end layouts, full-stack stacks, APIs, and real-world system applications.",
    recruits: "Beginner Friendly",
    status: "Product Hackers",
    tagline: "Software Development"
  },
  {
    name: "Chakravyuha",
    category: "technical",
    description: "The official masterminds behind premier hackathons. Providing specialized mentorship for all major inter-college code combat events.",
    recruits: "Aptitude & Dev checks",
    status: "Hackathon Leaders",
    tagline: "Hackathons & Marathons"
  },
  {
    name: "Robotics Club",
    category: "technical",
    description: "Design of interactive hardware, microcontrollers, embedded circuits, and drone flight system simulators.",
    recruits: "Workshop series open",
    status: "Hands-on Hardware",
    tagline: "IoT & Automation"
  },
  {
    name: "Saptaswara",
    category: "cultural",
    description: "The official soul-stirring vocal and music society. Accommodating classical patterns, acoustic rock, and instruments.",
    recruits: "Acoustic Auditions",
    status: "Vocal Harmony",
    tagline: "Singing & Instruments"
  },
  {
    name: "Nrityasparsh",
    category: "cultural",
    description: "The vibrant campus dance squad, from traditional pieces to heavy Western beats and state choreography.",
    recruits: "Auditions Month 2",
    status: "Rhythm & Sync",
    tagline: "Dance Community"
  },
  {
    name: "Drisya Club",
    category: "cultural",
    description: "Celebrating visual arts, sketches, illustrations, painting, alongside high-grade digital photography & design workshops.",
    recruits: "All Creatives Welcome",
    status: "Visual Masterpiece",
    tagline: "Arts & Photography"
  },
  {
    name: "Relu Club",
    category: "technical",
    description: "Diving deep into Machine Learning models, Neural nets, PyTorch experiments, and active generative AI structures.",
    recruits: "August 2026",
    status: "AI Research",
    tagline: "ML & Neural Nets"
  }
];

const PACKING_ITEMS = [
  { id: "mattress", label: "Bed Mattress (Most vital! Frame supplied, mattress is NOT)", isVital: true },
  { id: "bucket", label: "Bath Bucket & Mug (Seniors highly recommend local buy)", isVital: false },
  { id: "plates", label: "Personal Plates, Mug, Spoon & Water bottle", isVital: false },
  { id: "snacks", label: "Late Night Hosteler Snacks & Energy bars", isVital: false },
  { id: "stationary", label: "Course Books, Notebooks & Stationary gear", isVital: false },
  { id: "electronics", label: "Extension Board (Extremely vital! Standard room has 1-2 slots)", isVital: true }
];

const RESEARCH_GROUPS = [
  {
    id: "cids",
    name: "Computational Intelligence & Data Sciences (CIDS)",
    description: "Empowering next-gen systems with deep learning, computer vision, natural language processing, and big data pipelines.",
    focusAreas: ["Predictive Analytics", "Large Language Models", "Autonomous Systems Modeling"],
    leadFaculty: "Dr. Rama Krishna",
    facultyEmail: "ramakrishna@ama.amrita.edu",
    iconKey: "database"
  },
  {
    id: "cps-iot",
    name: "Cyber-Physical Systems & IoT (CPS-IoT)",
    description: "Designing modern node fabrics, automated agricultural grids, wearable biomechanical diagnostic rigs, and smart urban units.",
    focusAreas: ["Signal Systems", "Mesh Node Networks", "Edge Computing Frameworks"],
    leadFaculty: "Dr. Sandeep Kumar",
    facultyEmail: "sandeepkumar@ama.amrita.edu",
    iconKey: "cpu"
  },
  {
    id: "cyber-sec",
    name: "Cybersecurity, Cryptography & Privacy Group",
    description: "Protecting systems from threat actors by drafting secure key architectures, blockchain protocols, and privacy-preserving schemas.",
    focusAreas: ["Zero-Knowledge Proofs", "Secure Enclaves", "Malware Telemetry"],
    leadFaculty: "Dr. Vignesh Prasad",
    facultyEmail: "vigneshprasad@ama.amrita.edu",
    iconKey: "shield"
  },
  {
    id: "vlsi",
    name: "VLSI, Microwaves & Next-Gen Semiconductors",
    description: "Optimizing transistor layouts, silicon architectures, high-frequency circuits, and clean energy grid controllers.",
    focusAreas: ["Mixed-Signal ICs", "RF Micro-strip Antennas", "FPGA Accelerator Blocks"],
    leadFaculty: "Dr. Meera Nair",
    facultyEmail: "meeranair@ama.amrita.edu",
    iconKey: "layers"
  },
  {
    id: "health-tech",
    name: "Bio-Informatics & Health-Informatics Unit",
    description: "Creating computational tools to analyze genetic databases, track digital health metrics, and synthesize smart medical diagnostic models.",
    focusAreas: ["Sequence Alignment", "EHR Predictive Models", "Smart Wearable Interfacing"],
    leadFaculty: "Dr. Anirudh Sen",
    facultyEmail: "anirudhsen@ama.amrita.edu",
    iconKey: "activity"
  }
];


// II. INITIALIZATION AND ROUTING HANDLERS
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initHeroFaqScroll();
  initActiveClockAndRadar();
  initGradeCalculator();
  initResearchGroupsSection();
  initPackingChecklist();
  initClubsCatalog();
  initRoadmapSlider();
  initSearchableFaqTable();

  // Create SVG elements or parse custom icon lists
  if (window.lucide) {
    window.lucide.createIcons();
  }
});


// 2. THEME CONTROLLER (LIGHT/DARK MODE SYSTEM)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  // Sync preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  toggleBtn.addEventListener('click', () => {
    const isDarkNow = document.documentElement.classList.contains('dark');
    if (isDarkNow) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}


// 3. RESPONSIVE MOBILE NAVIGATION EXPANDER
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const panel = document.getElementById('mobile-nav-panel');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  if (!toggleBtn || !panel) return;

  toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close when links clicked
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// Scroll support
function initHeroFaqScroll() {
  const faqBtn = document.getElementById('hero-action-faq');
  if (faqBtn) {
    faqBtn.addEventListener('click', () => {
      const target = document.getElementById('faq');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}


// 4. LIVE RADAR CLOCK ENGINE (TIME AND BIO-TRIGGERS)
function initActiveClockAndRadar() {
  const clockEl = document.getElementById('radar-clock');
  const titleEl = document.getElementById('radar-title');
  const messageEl = document.getElementById('radar-message');
  const dotEl = document.getElementById('radar-dot');
  const pulseEl = document.getElementById('radar-dot');

  if (!clockEl) return;

  function updateRadarClock() {
    const now = new Date();
    
    // Setup locale digital standard clock
    let hoursStr = now.getHours();
    let minutesStr = now.getMinutes();
    let secondsStr = now.getSeconds();
    const ampm = hoursStr >= 12 ? 'PM' : 'AM';
    
    hoursStr = hoursStr % 12;
    hoursStr = hoursStr ? hoursStr : 12; // mapping hour '0' to '12'
    minutesStr = minutesStr < 10 ? '0' + minutesStr : minutesStr;
    secondsStr = secondsStr < 10 ? '0' + secondsStr : secondsStr;
    
    clockEl.innerText = `TIME: ${hoursStr}:${minutesStr}:${secondsStr} ${ampm}`;

    // Compute bio curfews
    const actualHour = now.getHours();
    const actualMin = now.getMinutes();
    const minutesTotal = actualHour * 60 + actualMin;

    const girlsCurfewStart = 20 * 60 + 45; // 8:45 PM -> 1245 mins
    const boysCurfewStart = 21 * 60;       // 9:00 PM -> 1260 mins
    const morningRevoke = 6 * 60;          // 6:00 AM -> 360 mins

    if (minutesTotal >= morningRevoke && minutesTotal < girlsCurfewStart) {
      // 6:00 AM - 8:45 PM
      titleEl.innerText = "Campus Open ☀️";
      titleEl.className = "font-serif font-black text-xl md:text-2xl uppercase tracking-tight text-emerald-500";
      messageEl.innerText = "Free campus corridors movement active. Seniors say: Grab some cold coffee at the food court!";
      
      dotEl.className = "relative inline-flex rounded-full h-4 w-4 bg-emerald-500";
      if (document.getElementById('radar-pulse')) {
        document.getElementById('radar-pulse').className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75";
      }
    } else if (minutesTotal >= girlsCurfewStart && minutesTotal < boysCurfewStart) {
      // 8:45 PM - 9:00 PM
      titleEl.innerText = "Girls Curfew Active ⚠️";
      titleEl.className = "font-serif font-black text-xl md:text-2xl uppercase tracking-tight text-amber-500";
      messageEl.innerText = "Girls residences gate closed. Boys scans begin. Finish your cafeteria stroll!";
      
      dotEl.className = "relative inline-flex rounded-full h-4 w-4 bg-amber-500";
      if (document.getElementById('radar-pulse')) {
        document.getElementById('radar-pulse').className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75";
      }
    } else {
      // 9:00 PM - 6:00 AM
      titleEl.innerText = "Full Curfew Active 🔒";
      titleEl.className = "font-serif font-black text-xl md:text-2xl uppercase tracking-tight text-rose-500";
      messageEl.innerText = "Biometric block checkpoints locked. Overnight hack team logs required for late-night projects!";
      
      dotEl.className = "relative inline-flex rounded-full h-4 w-4 bg-rose-500";
      if (document.getElementById('radar-pulse')) {
        document.getElementById('radar-pulse').className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75";
      }
    }
  }

  // Bind immediate loop and link timer interval
  updateRadarClock();
  setInterval(updateRadarClock, 1000);
}


// 5. ACADEMIC COMPOSITE SCORE CALCULATOR (BELL CURVE PREDICTOR)
function initGradeCalculator() {
  const inputs = [
    { id: 'midterm', max: 50 },
    { id: 'internals', max: 50 },
    { id: 'endsem', max: 100 },
    { id: 'attendance', max: 100 }
  ];

  inputs.forEach(input => {
    const range = document.getElementById(`${input.id}-range`);
    const num = document.getElementById(`${input.id}-num`);

    if (!range || !num) return;

    // Sync Slider changes to input boxes
    range.addEventListener('input', (e) => {
      num.value = e.target.value;
      calculateCompositeGrades();
    });

    // Sync Input box changes to Sliders
    num.addEventListener('input', (e) => {
      let val = parseFloat(e.target.value) || 0;
      if (val > input.max) val = input.max;
      if (val < 0) val = 0;
      num.value = val;
      range.value = val;
      calculateCompositeGrades();
    });
  });

  function calculateCompositeGrades() {
    const midtermVal = parseFloat(document.getElementById('midterm-num').value) || 0;
    const internalsVal = parseFloat(document.getElementById('internals-num').value) || 0;
    const endSemVal = parseFloat(document.getElementById('endsem-num').value) || 0;
    const attendanceVal = parseFloat(document.getElementById('attendance-num').value) || 0;

    // SCALING CODE RULES:
    // 1. Scaled Mid-terms written out of 50 to 20 marks: (mid / 50) * 20
    const pretermScaled = (midtermVal / 50) * 20;
    
    // 2. Custom student portfolio internally mapped as is / 50:
    const internalsScaled = internalsVal;
    
    // 3. End-Sem written out of 100 scaled to 30 marks: (endSem / 100) * 30
    const endsemScaled = (endSemVal / 100) * 30;

    const cumulative = pretermScaled + internalsScaled + endsemScaled;
    const roundedTotal = parseFloat(cumulative.toFixed(1));

    // Update screen elements
    document.getElementById('projected-score').innerText = `${roundedTotal} / 100`;

    const projectedGradeEl = document.getElementById('projected-grade');
    const seniorAdviceEl = document.getElementById('senior-advice-text');
    const attendanceStateEl = document.getElementById('attendance-state');
    const attendanceWarningEl = document.getElementById('attendance-warning-card');

    // Attendance labels changes
    attendanceStateEl.innerText = `${attendanceVal}% Attendance`;
    if (attendanceVal >= 85) {
      attendanceStateEl.className = "font-bold text-emerald-500";
      attendanceWarningEl.classList.add('hidden');
    } else if (attendanceVal >= 75) {
      attendanceStateEl.className = "font-bold text-amber-500";
      attendanceWarningEl.classList.add('hidden');
    } else {
      attendanceStateEl.className = "font-bold text-rose-500 block animate-pulse";
      attendanceWarningEl.classList.remove('hidden');
    }

    // Mapping Grade Brackets
    let letterGrade = "C (Pass)";
    let letterColorClass = "text-amber-500 font-extrabold";
    let adviceComment = "Warning: This is the borderline zone for relative curves. Spend an extra hour clarifying logic over brute memory.";

    if (roundedTotal >= 90) {
      letterGrade = "O (Outstanding)";
      letterColorClass = "text-emerald-500 dark:text-emerald-400 font-extrabold text-glow-gold";
      adviceComment = "🏆 Senior Peak! This puts you on track for a perfect 10 SGPA in this course. You are absolutely mastering relative grading!";
    } else if (roundedTotal >= 80) {
      letterGrade = "A+ (Excellent)";
      letterColorClass = "text-teal-500 dark:text-teal-400 font-bold";
      adviceComment = "✨ Fantastic job! Highly competitive score. Keep resolving the assignments to lock this down.";
    } else if (roundedTotal >= 70) {
      letterGrade = "A (Very Good)";
      letterColorClass = "text-sky-500 dark:text-sky-455 font-semibold";
      adviceComment = "🎯 Solid performance! Strong core foundation. It easily keeps your target of a 9+ CGPA fully active.";
    } else if (roundedTotal >= 60) {
      letterGrade = "B+ (Good)";
      letterColorClass = "text-indigo-500 dark:text-indigo-400 font-medium";
      adviceComment = "⚖️ Neutral Zone. Good, but Amrita's relative grading might pull this code score. Try asking seniors for resources to boost this class next time!";
    } else if (roundedTotal >= 50) {
      letterGrade = "B (Above Average)";
      letterColorClass = "text-orange-500 dark:text-orange-450";
      adviceComment = "⚠️ Tight margins. Ensure you score better in the remaining quizzes and end-sems to secure your averages.";
    } else if (roundedTotal >= 40) {
      letterGrade = "C (Pass)";
      letterColorClass = "text-amber-600 dark:text-amber-500";
      adviceComment = "🚩 Warning: This is the borderline zone for relative curves. Spend an extra hour clarifying logic over brute memory.";
    } else {
      letterGrade = "F (Fail)";
      letterColorClass = "text-rose-600 dark:text-rose-400 font-black animate-pulse";
      adviceComment = "🚨 High risk of fail/supplementary. Reach out to the faculty today to request support, and practice programming questions regularly!";
    }

    projectedGradeEl.innerText = letterGrade;
    projectedGradeEl.className = `text-xl md:text-2xl font-serif font-black mt-1 uppercase ${letterColorClass}`;
    seniorAdviceEl.innerText = adviceComment;
  }

  // Trigger init compute
  calculateCompositeGrades();
}


// 6. RESEARCH GROUPS AND INTERACTIVE MAIL DRAFT COMPOSER
let activeGroupId = "cids";
function initResearchGroupsSection() {
  const container = document.getElementById('research-groups-container');
  if (!container) return;

  renderGroupButtons();
  updateDraftMailbox();

  // Attach customization change hooks on inputs
  document.getElementById('draft-student-name').addEventListener('input', updateDraftMailbox);
  document.getElementById('draft-student-branch').addEventListener('input', updateDraftMailbox);
  document.getElementById('draft-student-skills').addEventListener('input', updateDraftMailbox);

  // Link Mailto launcher function
  document.getElementById('launch-email-btn').addEventListener('click', () => {
    const activeGroup = RESEARCH_GROUPS.find(g => g.id === activeGroupId) || RESEARCH_GROUPS[0];
    const studentNameVal = document.getElementById('draft-student-name').value || "[Your Name]";
    const studentBranchVal = document.getElementById('draft-student-branch').value || "[Your Branch]";
    const studentSkillsVal = document.getElementById('draft-student-skills').value;

    const emailSubject = `Inquiry: Undergrad Research Collaboration - ${activeGroup.name}`;
    
    const emailBody = `Respected Professor ${activeGroup.leadFaculty},

I hope this email finds you well.

My name is ${studentNameVal}, a B.Tech student in ${studentBranchVal} at Amrita Vishwa Vidyapeetham, Amaravati campus.

I am writing to express my strong interest in collaborating under your research guidance in the ${activeGroup.name} domain. ${studentSkillsVal ? `I have preliminary self-study background in ${studentSkillsVal}.` : "I am keen to assist on ongoing publications, algorithms, and active models."}

Would it be possible to schedule a brief 10-15 minute discussion to share my motivation and understand possible entry channels?

Thank you for your valuable time and consideration.

Sincerely,
${studentNameVal}`;

    window.location.href = `mailto:${activeGroup.facultyEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  });
}

function renderGroupButtons() {
  const container = document.getElementById('research-groups-container');
  if (!container) return;

  container.innerHTML = RESEARCH_GROUPS.map((group) => {
    const isActive = group.id === activeGroupId;
    return `
      <button 
        onclick="setActiveResearchGroup('${group.id}')" 
        class="w-full text-left p-4.5 rounded-2xl border transition-all duration-300 transform active:scale-98 flex items-start gap-3 cursor-pointer select-none ${
          isActive
            ? 'bg-brand-maroon/5 border-brand-maroon/30 text-brand-maroon dark:bg-[#251515] dark:border-brand-maroon dark:text-brand-gold shadow-sm'
            : 'bg-white dark:bg-[#181111] border-slate-200/50 dark:border-brand-maroon/10 text-slate-800 dark:text-slate-350 hover:bg-[#FAF8F5] dark:hover:bg-brand-maroon/10'
        }"
      >
        <div class="p-2 rounded-xl shrink-0 mt-0.5 ${isActive ? 'bg-brand-maroon/10 dark:bg-brand-gold/10 text-brand-maroon dark:text-brand-gold' : 'bg-slate-50 dark:bg-slate-900 text-slate-500'}">
          <i data-lucide="${group.iconKey}" class="h-5 w-5"></i>
        </div>
        <div class="space-y-1">
          <h4 class="font-bold text-xs sm:text-sm uppercase tracking-tight font-serif ${isActive ? 'text-brand-maroon dark:text-brand-gold' : 'text-slate-900 dark:text-white'}">
            ${group.name}
          </h4>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold line-clamp-2 leading-relaxed">
            ${group.description}
          </p>
        </div>
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setActiveResearchGroup(groupId) {
  activeGroupId = groupId;
  renderGroupButtons();
  updateDraftMailbox();
}

function updateDraftMailbox() {
  const activeGroup = RESEARCH_GROUPS.find(g => g.id === activeGroupId) || RESEARCH_GROUPS[0];
  
  // Pre-filled inputs config
  const nameVal = document.getElementById('draft-student-name').value || "[Your Name]";
  const branchVal = document.getElementById('draft-student-branch').value || "[Your Branch]";
  const skillsVal = document.getElementById('draft-student-skills').value;

  // Header update
  document.getElementById('draft-to-line').innerText = `To: ${activeGroup.leadFaculty} (${activeGroup.facultyEmail})`;
  document.getElementById('draft-subject').innerText = `Inquiry: Undergrad Research Collaboration - ${activeGroup.name}`;

  // Body content update
  const previewBox = document.getElementById('draft-body-preview');
  previewBox.innerHTML = `
    <p>Respected Professor ${activeGroup.leadFaculty},</p>
    <p>I hope this email finds you well.</p>
    <p>My name is <span class="bg-brand-maroon/10 dark:bg-brand-gold/20 text-brand-maroon dark:text-brand-gold px-1 rounded font-bold">${nameVal}</span>, a B.Tech student in <span class="bg-brand-maroon/10 dark:bg-brand-gold/20 text-brand-maroon dark:text-brand-gold px-1 rounded font-bold">${branchVal}</span> at Amrita Vishwa Vidyapeetham, Amaravati campus.</p>
    <p>I am writing to express my strong interest in collaborating under your research guidance in the ${activeGroup.name} domain. ${skillsVal ? `I have preliminary self-study background in <span class="bg-brand-maroon/10 dark:bg-brand-gold/20 text-brand-maroon dark:text-brand-gold px-1 rounded font-bold">${skillsVal}</span>.` : "I am keen to assist on ongoing publications, algorithms, and active models."}</p>
    <p>Would it be possible to schedule a brief 10-15 minute discussion to share my motivation and understand possible entry channels?</p>
    <p>Thank you for your valuable time and consideration.</p>
    <p>Sincerely,<br/><strong>${nameVal}</strong></p>
  `;
}


// 7. PERSISTENT PACKING CHECKS ENGINE
let checkedState = {};
function initPackingChecklist() {
  const container = document.getElementById('packing-checklist-box');
  if (!container) return;

  // Retrieve existing checklist
  const stored = localStorage.getItem('amrita_packing_history');
  if (stored) {
    try {
      checkedState = JSON.parse(stored);
    } catch(e) {
      checkedState = {};
    }
  } else {
    // defaults fill
    PACKING_ITEMS.forEach(i => {
      checkedState[i.id] = false;
    });
  }

  renderPackingCheckList();
  calculatePackingProgress();
}

function renderPackingCheckList() {
  const container = document.getElementById('packing-checklist-box');
  container.innerHTML = PACKING_ITEMS.map((item) => {
    const isChecked = !!checkedState[item.id];
    return `
      <label 
        class="flex items-start gap-3 p-2.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
          isChecked
            ? 'bg-brand-maroon/5 dark:bg-[#251515] border-brand-maroon/30 text-brand-maroon dark:text-brand-gold'
            : 'border-slate-150 dark:border-brand-maroon/10 bg-[#ffffff]/30 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 hover:bg-[#FAF8F5] dark:hover:bg-[#181111]'
        }"
      >
        <input 
          type="checkbox" 
          ${isChecked ? 'checked' : ''}
          onclick="togglePackingCheckItem('${item.id}')"
          class="w-4 h-4 accent-brand-maroon dark:accent-brand-gold rounded mt-0.5 cursor-pointer" 
        />
        <div class="text-xs">
          <span class="font-bold block text-slate-805 dark:text-slate-100">${item.label.split('(')[0]}</span>
          ${item.label.includes('(') ? `<span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block mt-0.5">(${item.label.split('(')[1]}</span>` : ''}
        </div>
      </label>
    `;
  }).join('');
}

function togglePackingCheckItem(itemId) {
  checkedState[itemId] = !checkedState[itemId];
  localStorage.setItem('amrita_packing_history', JSON.stringify(checkedState));
  
  renderPackingCheckList();
  calculatePackingProgress();
}

function calculatePackingProgress() {
  const checkedCounts = Object.values(checkedState).filter(Boolean).length;
  const totalItems = PACKING_ITEMS.length;

  // Sync circular speed stats labels
  document.getElementById('pack-ratio').innerText = `${checkedCounts}/${totalItems}`;

  // SVG parameters update: radius 32, circumference 201
  const strokeOffsetValue = 201 - (checkedCounts / totalItems) * 201;
  document.getElementById('checklist-progress').style.strokeDashoffset = strokeOffsetValue;

  // Active mattress alert logic
  const isMattChecked = !!checkedState['mattress'];
  const mattressAlert = document.getElementById('mattress-warning');
  if (isMattChecked) {
    mattressAlert.classList.add('hidden');
  } else {
    mattressAlert.classList.remove('hidden');
  }
}


// 8. CLUBS AND student directories catalog search
let activeClubCategory = "all";
function initClubsCatalog() {
  const categoryChipsRef = [
    { label: 'All Clubs', value: 'all' },
    { label: 'Coding & CP', value: 'coding' },
    { label: 'Robotics & Hardware', value: 'technical' },
    { label: 'Cultural & Art', value: 'cultural' }
  ];

  const barWrapper = document.getElementById('filter-chips-wrapper');
  if (!barWrapper) return;

  // render chips
  renderClubFilteringChips(categoryChipsRef);
  renderClubsGrid();
}

function renderClubFilteringChips(chips) {
  const barWrapper = document.getElementById('filter-chips-wrapper');
  barWrapper.innerHTML = chips.map((chip) => {
    const isSelected = chip.value === activeClubCategory;
    return `
      <button 
        onclick="setActiveClubSearchFilter('${chip.value}')"
        class="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-350 transform active:scale-95 cursor-pointer border ${
          isSelected
            ? 'bg-brand-maroon hover:bg-brand-maroon/90 text-[#ffffff] border-brand-maroon shadow-md font-bold'
            : 'bg-white dark:bg-[#161010] text-[#4d4d4d] dark:text-slate-300 border-slate-200 dark:border-brand-maroon/15 hover:bg-[#FAF8F5] dark:hover:bg-brand-maroon/10'
        }"
      >
        ${chip.label}
      </button>
    `;
  }).join('');
}

function setActiveClubSearchFilter(catValue) {
  activeClubCategory = catValue;
  
  const chipsList = [
    { label: 'All Clubs', value: 'all' },
    { label: 'Coding & CP', value: 'coding' },
    { label: 'Robotics & Hardware', value: 'technical' },
    { label: 'Cultural & Art', value: 'cultural' }
  ];
  renderClubFilteringChips(chipsList);
  renderClubsGrid();
}

function renderClubsGrid() {
  const grid = document.getElementById('clubs-grid-container');
  if (!grid) return;

  const filtered = activeClubCategory === 'all'
    ? CLUBS_DATA
    : CLUBS_DATA.filter((c) => c.category === activeClubCategory);

  grid.innerHTML = filtered.map((club) => {
    let catBadgeColorClass = "text-emerald-600 dark:text-emerald-400";
    if (club.category === 'coding') catBadgeColorClass = "text-brand-maroon dark:text-brand-gold";
    if (club.category === 'technical') catBadgeColorClass = "text-brand-gold-dark dark:text-brand-gold-light";
    if (club.category === 'cultural') catBadgeColorClass = "text-amber-600 dark:text-amber-400";
    
    return `
      <div class="hover:-translate-y-1.5 transition-transform duration-350 bg-[#faf9f6]/95 dark:bg-[#181111] p-6 rounded-2xl border border-slate-200 dark:border-brand-maroon/15 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-mono font-bold tracking-widest uppercase ${catBadgeColorClass}">
            ${club.category} • ${club.tagline}
          </span>
          <h3 class="font-serif font-bold text-lg mt-1 text-slate-900 dark:text-white uppercase">${club.name}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
            ${club.description}
          </p>
        </div>
        
        <div class="mt-5 pt-4 border-t border-slate-200 dark:border-brand-maroon/15 text-[10px] text-slate-405 dark:text-slate-500 font-mono flex justify-between items-center font-bold">
          <span class="flex items-center gap-1">
            <i data-lucide="calendar" class="h-3 w-3 shrink-0"></i>
            ${club.recruits}
          </span>
          <span class="font-extrabold text-brand-maroon dark:text-brand-gold">
            ${club.status}
          </span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}


// 9. FIRST-SEMESTER DYNAMIC TIMELINE SLIDER
let activeRoadmapMonth = 1;
function initRoadmapSlider() {
  const buttonsBar = document.getElementById('roadmap-buttons-bar');
  if (!buttonsBar) return;

  renderRoadmapToggles();
  renderRoadmapFocusCard();
}

function renderRoadmapToggles() {
  const buttonsBar = document.getElementById('roadmap-buttons-bar');
  buttonsBar.innerHTML = ROADMAP_STEPS.map((step) => {
    const isActive = step.month === activeRoadmapMonth;
    return `
      <button 
        onclick="setActiveRoadmapMonth(${step.month})"
        class="px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-350 transform active:scale-95 cursor-pointer flex items-center gap-1.5 border ${
          isActive
            ? 'bg-brand-maroon dark:bg-brand-gold text-[#ffffff] dark:text-[#2d2105] shadow-md border-transparent font-extrabold'
            : 'bg-[#ffffff] dark:bg-slate-900 text-slate-650 dark:text-slate-350 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
        }"
      >
        <span>Month ${step.month}</span>
        <span class="text-[10px] opacity-75 font-medium hidden sm:inline">• ${step.title.split(' ')[0]}</span>
      </button>
    `;
  }).join('');
}

function renderRoadmapFocusCard() {
  const wrapper = document.getElementById('selected-roadmap-card-box');
  const step = ROADMAP_STEPS.find(s => s.month === activeRoadmapMonth) || ROADMAP_STEPS[0];

  wrapper.innerHTML = `
    <div class="glass-panel p-6 md:p-8 rounded-3xl border border-brand-maroon/10 bg-white/50 dark:bg-slate-900/50 shadow-xl relative overflow-hidden transition-all duration-300 animate-fade-in">
      
      <!-- giant watermark number -->
      <div class="absolute right-0 bottom-0 select-none text-9xl font-black font-serif text-brand-maroon/[0.04] dark:text-brand-gold/[0.03] pointer-events-none -mr-8 -mb-10">
        0${step.month}
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 border-b border-slate-200/40 dark:border-slate-800/80 pb-4">
        <div>
          <span class="text-xs font-mono text-brand-maroon dark:text-brand-gold-light font-extrabold uppercase tracking-widest block">
            ${step.subtitle}
          </span>
          <span class="inline-block mt-1 bg-brand-maroon/5 dark:bg-brand-gold/15 text-brand-maroon dark:text-brand-gold-light text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            ${step.target}
          </span>
        </div>
        
        <div class="text-slate-400 text-xs font-mono font-bold">
          Step ${step.month} of 6
        </div>
      </div>

      <h3 class="font-serif font-black text-xl md:text-2xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
        <i data-lucide="compass" class="h-5 w-5 text-brand-maroon dark:text-brand-gold shrink-0"></i>
        ${step.title}
      </h3>

      <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
        ${step.description}
      </p>

      <div class="bg-brand-maroon/5 dark:bg-[#251515] p-4 rounded-2xl text-xs md:text-sm text-brand-maroon dark:text-brand-gold-light italic border-l-4 border-brand-maroon flex items-start gap-2">
        <i data-lucide="message-square" class="h-4 w-4 shrink-0 mt-0.5 text-brand-maroon dark:text-brand-gold"></i>
        <span class="font-semibold leading-relaxed">
          <strong>"Senior Core Advice:</strong> ${step.advice}"
        </span>
      </div>

      ${step.month < 6 ? `
        <button 
          onclick="incrementRoadmapMonth()"
          class="mt-6 text-xs text-brand-maroon dark:text-brand-gold font-bold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
        >
          <span>Explore Next Month</span>
          <i data-lucide="chevron-right" class="h-4.5 w-4.5"></i>
        </button>
      ` : ''}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function setActiveRoadmapMonth(m) {
  activeRoadmapMonth = m;
  renderRoadmapToggles();
  renderRoadmapFocusCard();
}

function incrementRoadmapMonth() {
  if (activeRoadmapMonth < 6) {
    setActiveRoadmapMonth(activeRoadmapMonth + 1);
  }
}


// 10. SEARCHABLE CHIPPED ACCORDIONS FAQ SYSTEM
let faqActiveCat = "all";
let faqsOpenSet = {}; // track open accordion IDs
function initSearchableFaqTable() {
  const chips = [
    { label: 'All Questions', value: 'all' },
    { label: 'Rooms & Rules', value: 'hostel' },
    { label: 'CGPA & Grading', value: 'academic' },
    { label: 'Clubs & Activities', value: 'club' },
    { label: 'Transport Info', value: 'transport' }
  ];

  renderFaqFilterChips(chips);
  renderSearchableFaqAccordion();

  // Search input change events
  document.getElementById('faq-search-input').addEventListener('input', () => {
    renderSearchableFaqAccordion();
  });
}

function renderFaqFilterChips(chips) {
  const container = document.getElementById('faq-chips-container');
  container.innerHTML = chips.map((chip) => {
    const isSelected = chip.value === faqActiveCat;
    return `
      <button 
        onclick="setActiveFaqSearchCategory('${chip.value}')"
        class="px-3.5 py-1.5 rounded-full text-xs font-semibold select-none transition-all duration-300 transform active:scale-95 cursor-pointer ${
          isSelected
            ? 'bg-brand-maroon dark:bg-brand-gold text-[#ffffff] dark:text-[#2d2105] shadow-sm font-bold'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-700'
        }"
      >
        ${chip.label}
      </button>
    `;
  }).join('');
}

function setActiveFaqSearchCategory(cat) {
  faqActiveCat = cat;
  
  // Clear search on switching categories to avoid overlap confusion
  document.getElementById('faq-search-input').value = '';

  const chips = [
    { label: 'All Questions', value: 'all' },
    { label: 'Rooms & Rules', value: 'hostel' },
    { label: 'CGPA & Grading', value: 'academic' },
    { label: 'Clubs & Activities', value: 'club' },
    { label: 'Transport Info', value: 'transport' }
  ];
  renderFaqFilterChips(chips);
  renderSearchableFaqAccordion();
}

function toggleFaqAccordionCollapse(faqId) {
  faqsOpenSet[faqId] = !faqsOpenSet[faqId];
  renderSearchableFaqAccordionAllButKeepValues(); // re-render to expand smooth
}

function renderSearchableFaqAccordion() {
  const wrapper = document.getElementById('faq-accordions-wrapper');
  const searchVal = document.getElementById('faq-search-input').value.toLowerCase().trim();

  // Filter lists!
  const filtered = FAQ_DATA.filter((faq) => {
    // 1. Topic filters
    if (faqActiveCat !== 'all' && faq.category !== faqActiveCat) {
      return false;
    }

    // 2. Search filtering
    if (searchVal !== '') {
      const matchQuest = faq.question.toLowerCase().includes(searchVal);
      const matchAns = faq.answer.toLowerCase().includes(searchVal);
      const matchTags = faq.tags.some(t => t.toLowerCase().includes(searchVal));
      return matchQuest || matchAns || matchTags;
    }

    return true;
  });

  if (filtered.length === 0) {
    wrapper.innerHTML = `
      <div class="text-center p-12 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 italic text-xs md:text-sm text-slate-500 dark:text-slate-400">
        🔍 No questions match your current search parameters. Try searching simpler phrases or keywords like 'rooms', 'relative' or 'curfew'!
      </div>
    `;
    return;
  }

  wrapper.innerHTML = filtered.map((faq) => {
    const isOpen = !!faqsOpenSet[faq.id];
    return `
      <div 
        class="faq-accordion rounded-2xl border transition-all duration-300 ${
          isOpen 
            ? 'bg-brand-maroon/[0.02] border-brand-maroon/20 dark:bg-brand-gold/5 dark:border-brand-gold/10' 
            : 'border-slate-200/65 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/10'
        }"
      >
        <button 
          onclick="toggleFaqAccordionCollapse(${faq.id})"
          class="faq-header w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
        >
          <h3 class="font-serif font-black text-xs sm:text-sm md:text-base text-slate-800 dark:text-slate-100 flex items-start gap-2.5">
            <i data-lucide="help-circle" class="h-4.5 w-4.5 shrink-0 mt-0.5 ${isOpen ? 'text-brand-maroon dark:text-brand-gold' : 'text-slate-400'}"></i>
            <span>${faq.question}</span>
          </h3>
          <span class="p-1 rounded-full bg-slate-50 dark:bg-slate-850 shrink-0 ml-4">
            <i data-lucide="chevron-down" class="h-4.5 w-4.5 text-slate-400 dark:text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}"></i>
          </span>
        </button>
        
        <div class="transition-all duration-300 ease-out overflow-hidden" style="max-height: ${isOpen ? '400px' : '0px'};">
          <div class="border-t border-slate-150 dark:border-brand-maroon/10 py-5 px-6">
            <p class="text-xs md:text-sm text-slate-600 dark:text-slate-355 leading-relaxed font-semibold">
              ${faq.answer}
            </p>
            
            <div class="pt-4 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400 font-mono font-bold">
              <span class="bg-brand-maroon/5 dark:bg-[#251515] px-2 py-0.5 rounded text-brand-maroon dark:text-brand-gold-light border border-slate-100 dark:border-brand-maroon/10">
                topic: #${faq.category}
              </span>
              ${faq.tags.slice(0, 4).map((tag) => `
                <span class="bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded">#${tag}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderSearchableFaqAccordionAllButKeepValues() {
  // Directly maps FAQ render trigger to handle collapsible states seamlessly
  renderSearchableFaqAccordion();
}
