import { FaqItem, ClubItem, RoadmapStep, PackingNeed } from './types';

export const FAQ_DATA: FaqItem[] = [
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

export const ROADMAP_STEPS: RoadmapStep[] = [
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

export const CLUBS_DATA: ClubItem[] = [
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
    description: "The official soul-stirring vocal and music society. Accommodating classical classical patterns, acoustic rock, and instruments.",
    recruits: "Acoustic Auditions",
    status: "Vocal Harmony",
    tagline: "Singing & Instruments"
  },
  {
    name: "Nrityasparsh",
    category: "cultural",
    description: "The vibrant campus dance squad, from traditional traditional pieces to heavy Western beats and state choreography.",
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

export const PACKING_ITEMS: PackingNeed[] = [
  { id: "mattress", label: "Bed Mattress (Most vital! Frame supplied, mattress is NOT)", isVital: true },
  { id: "bucket", label: "Bath Bucket & Mug (Seniors highly recommend local buy)", isVital: false },
  { id: "plates", label: "Personal Plates, Mug, Spoon & Water bottle", isVital: false },
  { id: "snacks", label: "Late Night Hosteler Snacks & Energy bars", isVital: false },
  { id: "stationary", label: "Course Books, Notebooks & Stationary gear", isVital: false },
  { id: "electronics", label: "Extension Board (Extremely vital! Standard room has 1-2 slots)", isVital: true }
];
