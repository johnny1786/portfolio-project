import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  expenses,
  nextTutorial,
  threejs,
  next,
  vercel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "resume",
    title: "Resume",
    external: true,
    link: "https://drive.google.com/file/d/109oTgFsE9AyqJxcfm8KNNwQT6DGPdYSs/view?usp=sharing",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "National Institute of Technology Patna (NIT Patna)",
    badge: "Premier National Institute",
    location: "Patna, India",
    highlights: [
      "Specialized in Software Engineering, Data Structures & Algorithms, Systems Programming, and Machine Learning.",
      "Represented NIT Patna at the prestigious national All India Inter-NIT Badminton Championship 2024–25.",
      "Awarded the National Scholarship Portal (NSP) Merit Scholarship for academic excellence.",
      "Earned NPTEL National Certifications in 'The Joy of Computing in Python' and 'Human Computer Interaction (HCI)'."
    ]
  }
];

const services = [
  {
    title: "Distributed Systems & Backend Engineering",
    icon: backend,
    description: "Designing high-concurrency microservices, real-time event queues, and Docker-sandboxed execution environments."
  },
  {
    title: "AI & Machine Learning Solutions",
    icon: creator,
    description: "Building deep learning architectures, multi-modal fusion models, NLP extraction, and predictive analytics."
  },
  {
    title: "Full-Stack Web Development",
    icon: web,
    description: "Crafting reactive single-page & SSR applications using Next.js, React, Node.js, Express, PostgreSQL, and MongoDB."
  },
  {
    title: "Data Processing & Workflow Automation",
    icon: mobile,
    description: "Automating operational workflows using Microsoft Power Automate, PyGeoHash, and time-series feature engineering pipelines."
  },
];

const technologies = [
  { name: "Python", icon: javascript },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: next },
  { name: "Node JS", icon: nodejs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Vercel", icon: vercel },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow / Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "SpaCy", "RoBERTa"]
  },
  {
    category: "Full-Stack & Backend",
    skills: ["React.js", "Node.js", "Express.js", "Next.js 14", "Redux Toolkit", "Socket.IO", "BullMQ", "REST APIs", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools, Cloud & Automation",
    skills: ["Git", "GitHub", "Docker Ephemeral Containers", "AWS (S3, Textract)", "Microsoft Power Automate", "Linux", "Vercel"]
  }
];

const experiences = [
  {
    title: "Enterprise Software Development Exposure",
    company_name: "Enterprise Application Project Team",
    icon: backend,
    iconBg: "#1d1836",
    date: "Enterprise Software Experience",
    points: [
      "Gained exposure to enterprise software development within a collaborative project environment.",
      "Developed, maintained, and modularized high-performance software features adhering to clean code standards.",
      "Participated in system architecture planning, code reviews, and structured software lifecycle processes.",
      "Engineered reliable front-end and back-end interface components to ensure robust system operation."
    ],
  },
  {
    title: "Workflow & Process Automation Engineer",
    company_name: "Operations Automation Project",
    icon: web,
    iconBg: "#383E56",
    date: "Automation Projects",
    points: [
      "Architected an automated email-triggered workflow using Microsoft Power Automate to streamline operational processes.",
      "Automated repetitive administrative tasks, email notification parsing, and cross-platform task triggers.",
      "Eliminated manual execution bottlenecks and established automated exception handling for workflow reliability."
    ],
  },
];

const achievements = [
  {
    title: "All India Inter-NIT Badminton Tournament 2024–25",
    organization: "NIT Patna",
    badge: "Athletics & Leadership",
    description: "Represented NIT Patna at the prestigious national All India Inter-NIT Badminton Championship."
  },
  {
    title: "National Scholarship Portal (NSP) Scholarship",
    organization: "Government of India",
    badge: "Academic Merit",
    description: "Awarded national merit scholarship in recognition of outstanding academic performance."
  },
  {
    title: "NPTEL National Certifications",
    organization: "IITs / NPTEL",
    badge: "Technical Mastery",
    description: "Earned certifications in 'The Joy of Computing in Python' and 'Human Computer Interaction (HCI)'."
  },
  {
    title: "LeetCode Knight Rating & Algorithmic Excellence",
    organization: "LeetCode / Competitive Programming",
    badge: "Problem Solving",
    description: "Achieved LeetCode Knight rank with strong proficiency in Data Structures, Algorithms, and C++."
  }
];

const projects = [
  {
    name: "OJX — Distributed Online Judge Platform",
    description:
      "A distributed online code execution platform that judges C++, Python, and JavaScript submissions inside isolated, resource-constrained Docker containers with real-time Socket.IO verdicts and a BullMQ job queue pipeline.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Docker Ephemeral Sandbox", color: "green-text-gradient" },
      { name: "BullMQ & Redis", color: "pink-text-gradient" },
      { name: "Socket.IO", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
    ],
    category: "Distributed Systems",
    year: "2026",
    image: nextTutorial,
    source_code_link: "https://github.com/johnny1786/Online_Judge",
    live_demo_link: null,
  },
  {
    name: "AI-Powered Document Processing System",
    description:
      "Intelligent document classification, OCR extraction, and semantic search system leveraging AWS Textract, SpaCy, RoBERTa fine-tuned models, and Qwen LLM for multi-modal document analysis and automated Q&A retrieval.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "AWS Textract", color: "green-text-gradient" },
      { name: "RoBERTa & SpaCy", color: "pink-text-gradient" },
      { name: "Qwen LLM", color: "blue-text-gradient" },
      { name: "RAG Retrieval", color: "green-text-gradient" },
    ],
    category: "AI / ML",
    year: "2025",
    image: expenses,
    source_code_link: "https://github.com/johnny1786/Document_Processing",
    live_demo_link: null,
  },
  {
    name: "Gated Image–Tabular Deep Fusion IDS",
    description:
      "Unified IoT Intrusion Detection System converting tabular telemetry into image representations (PCA+LDA) with a deep Gated Fusion neural network, WCGAN-GP data balancing, and XGBoost/LightGBM late-fusion ensemble achieving 99.03% accuracy on BoT-IoT.",
    tags: [
      { name: "Keras / TensorFlow", color: "blue-text-gradient" },
      { name: "Deep Gated Fusion", color: "green-text-gradient" },
      { name: "WCGAN-GP", color: "pink-text-gradient" },
      { name: "XGBoost & LightGBM", color: "blue-text-gradient" },
    ],
    category: "AI / ML",
    year: "2025",
    image: nextTutorial,
    source_code_link: "https://github.com/johnny1786/Intrusion_Detection",
    live_demo_link: null,
  },
  {
    name: "Traffic Demand Forecasting & Analytics",
    description:
      "Time-series traffic demand prediction system analyzing 77,000+ records with PyGeoHash spatial decoding, Fourier cyclical temporal features, and gradient-boosted decision trees using time-aware continuation validation splits.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyGeoHash", color: "green-text-gradient" },
      { name: "XGBoost & CatBoost", color: "pink-text-gradient" },
      { name: "Time Series Split", color: "blue-text-gradient" },
    ],
    category: "AI / ML",
    year: "2026",
    image: expenses,
    source_code_link: "https://github.com/johnny1786/traffic_predict",
    live_demo_link: null,
  },
  {
    name: "Full-Stack Expense Tracker & Analytics",
    description:
      "Full-stack MERN expense management application featuring interactive visual analytics, expense categorization, custom transaction filtering, TanStack Query state caching, and Redux Toolkit user management.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Redux Toolkit", color: "green-text-gradient" },
      { name: "Node.js & Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "TanStack Query", color: "green-text-gradient" },
    ],
    category: "Full Stack",
    year: "2025",
    image: expenses,
    source_code_link: "https://github.com/johnny1786/mern-expenses-tracker",
    live_demo_link: "https://mern-expenses-tracker-tawny.vercel.app",
  },
  {
    name: "Next.js Financial & Invoice Dashboard",
    description:
      "Enterprise financial invoice management dashboard built with Next.js 14 App Router, React Server Components, server actions, Auth.js session authentication, and PostgreSQL database queries.",
    tags: [
      { name: "Next.js 14", color: "blue-text-gradient" },
      { name: "React Server Components", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    category: "Full Stack",
    year: "2025",
    image: nextTutorial,
    source_code_link: "https://github.com/johnny1786/nextjs-dashboard",
    live_demo_link: null,
  },
];

const testimonials = [];

export { services, technologies, skillCategories, experiences, achievements, education, projects, testimonials };



