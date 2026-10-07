// ============================================================
// portfolioData.js – Portfolio Content
// ============================================================

// ============================================================
// PERSONAL INFORMATION
// ============================================================

export const personal = {
  name: "Turaka Prudvi",

  title: "Computer Science & AI/ML Student",

  tagline:
    "B.Tech CSE (AI/ML) student focused on building AI-powered applications using LLMs, RAG, Generative AI, AI agents, machine learning, NLP, computer vision, and modern web technologies.",

  location: "Hyderabad, Telangana, India",

  email: "prudvir340@gmail.com",

  phone: "+91 6302376837",

  github: "https://github.com/prudviraj12345",

  linkedin: "https://www.linkedin.com/in/prudvi-turaka-4453a1352/",

  profileImage: "/profile.jpeg",

  resumeLink: "/resume.pdf",

  bio: `B.Tech Computer Science and Engineering student specializing in AI/ML with a CGPA of 8.3.

I focus on building intelligent AI-powered applications using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, NLP, machine learning, and computer vision.

I also develop scalable web and backend applications using Python, FastAPI, Flask, Django, React, REST APIs, and modern AI frameworks.

My projects include AI-powered cybersecurity systems, retrieval-based question answering, multi-agent LLM systems, computer vision applications, deep learning solutions, and AI automation platforms.`,

  quote:
    "You cannot change your future, but you can change your habits, and surely your habits will change your future.",

  quoteAuthor: "A.P.J. Abdul Kalam",
};


// ============================================================
// INTERESTS
// ============================================================

export const interests = [
  "Artificial Intelligence & Machine Learning",
  "Generative AI",
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "AI Agents",
  "Agentic AI",
  "Natural Language Processing",
  "Computer Vision",
  "Deep Learning",
  "Web Development",
];


// ============================================================
// ABOUT SKILLS
// ============================================================
// Compact skills displayed on the About section.

export const aboutSkills = [
  { name: "Python", level: 95 },
  { name: "LLMs", level: 90 },
  { name: "RAG", level: 90 },
  { name: "Generative AI", level: 90 },
  { name: "AI Agents", level: 85 },
  { name: "Machine Learning", level: 90 },
  { name: "NLP", level: 85 },
  { name: "FastAPI", level: 85 },
  { name: "Flask", level: 85 },
  { name: "React", level: 80 },
];


// ============================================================
// HERO TECHNOLOGY CHIPS
// ============================================================

export const heroTechChips = [
  "Python",
  "LLMs",
  "RAG",
  "Generative AI",
  "AI Agents",
  "FastAPI",
  "Flask",
  "React",
  "LangChain",
  "Machine Learning",
];


// ============================================================
// PROJECTS
// ============================================================

export const projects = [

  // ----------------------------------------------------------
  // AI FIREGUARD
  // ----------------------------------------------------------

  {
    title: "AI FireGuard – Intelligent Firewall with Blockchain Security",

    description:
      "AI-powered cybersecurity system that detects and classifies simulated cyber attacks such as SQL Injection, DDoS, and XSS using Machine Learning. The system dynamically evaluates attack severity and securely records attack and firewall events using Ethereum Sepolia blockchain technology.",

    image: "/fireguard.png",

    tags: [
      "Python",
      "Flask",
      "React",
      "Machine Learning",
      "Cybersecurity",
      "Ethereum",
      "Web3",
      "Blockchain",
    ],

    category: "Cybersecurity",

    liveLink: "https://frontend-amber-pi-34.vercel.app",

    githubLink:
      "https://github.com/prudviraj12345/AI-Fireguard-with-Blockchain-Technology.git",

    featured: true,
  },


  // ----------------------------------------------------------
  // NEURO LUNG
  // ----------------------------------------------------------

  {
    title: "Neuro-Lung – Lung Cancer Detection using Deep Learning",

    description:
      "Deep learning based medical image analysis system that detects lung cancer from CT scan images using a CNN model. The application uses TensorFlow/Keras for model development, OpenCV and NumPy for image processing, and Flask for model inference and web-based interaction.",

    image: "/LungCancerDetection.png",

    tags: [
      "Python",
      "Deep Learning",
      "CNN",
      "TensorFlow",
      "Keras",
      "Flask",
      "OpenCV",
      "NumPy",
    ],

    category: "AI/ML",

    liveLink:
      "https://prudviraj12345.github.io/Neuro-Lung-Cancer-Detection/",

    githubLink:
      "https://github.com/prudviraj12345/Neuro-Lung-Cancer-Detection",

    featured: true,
  },


  // ----------------------------------------------------------
  // DPR / RAG
  // ----------------------------------------------------------

  {
    title: "Dense Passage Retrieval – Open-Domain Question Answering",

    description:
      "AI-powered retrieval-based question answering system that uses Dense Passage Retrieval to find the most relevant passages from a large text corpus. The project demonstrates NLP, semantic retrieval, embeddings, and the foundations of Retrieval-Augmented Generation (RAG) for knowledge-grounded question answering.",

    image: "/DPR.png",

    tags: [
      "Python",
      "NLP",
      "RAG",
      "DPR",
      "BERT",
      "Embeddings",
      "Vector Search",
      "AI/ML",
    ],

    category: "Generative AI",

    liveLink: "https://backend-flame-delta-60.vercel.app",

    githubLink:
      "https://github.com/prudviraj12345/prudviraj12345-Dense-Passage-Retrieval-for-Open-Domain-Question-Answering",

    featured: true,
  },


  // ----------------------------------------------------------
  // MOVE WITH TRAFFIC
  // ----------------------------------------------------------

  {
    title: "MoveWithTraffic – Density-Based Smart Traffic Control System",

    description:
      "Computer vision based traffic management system that estimates real-time traffic density from video input and dynamically determines traffic signal timing. The system uses OpenCV image processing and Canny Edge Detection with a Flask backend and dashboard for monitoring traffic conditions.",

    image: "/MoveWithTraffic.png",

    tags: [
      "Python",
      "Computer Vision",
      "OpenCV",
      "Flask",
      "Image Processing",
      "Real-Time Systems",
    ],

    category: "AI/ML",

    liveLink: "https://move-with-traffic.onrender.com",

    githubLink:
      "https://github.com/prudviraj12345/Move-With-Traffic.git",

    featured: true,
  },


  // ----------------------------------------------------------
  // MULTI-AGENT LLM
  // ----------------------------------------------------------

  {
    title:
      "Multi-Agent LLM Collaboration System – 1 Problem, 4 Agents, 1 Solution",

    description:
      "Multi-agent AI system built using CrewAI where specialized AI agents collaborate to solve complex problems. Research, Coding, Review, and Explanation agents work together through an orchestrated workflow using Large Language Models for research, code generation, review, refinement, and human-friendly explanations.",

    image: "/multiagentllm.png",

    tags: [
      "Python",
      "LLMs",
      "CrewAI",
      "AI Agents",
      "Agentic AI",
      "Generative AI",
      "Automation",
    ],

    category: "Generative AI",

    liveLink: "https://vercelapp-ecru-omega.vercel.app",

    githubLink:
      "https://github.com/prudviraj12345/Multi-LLM-Collaboration-System.git",

    featured: true,
  },


  // ----------------------------------------------------------
  // MOODTUNES
  // ----------------------------------------------------------

  {
    title: "MoodTunes – Mood-Based Music Recommendation System",

    description:
      "Interactive music recommendation web application that suggests songs based on the user's selected mood and preferred language. The application provides mood selection, language filtering, a modern interface, and integrated audio playback.",

    image: "/MoodTunes.png",

    tags: [
      "React",
      "Flask",
      "JavaScript",
      "Tailwind CSS",
      "Web Development",
    ],

    category: "Web Apps",

    liveLink:
      "https://prudviraj12345.github.io/Mood-Tunes/",

    githubLink:
      "https://github.com/prudviraj12345/Mood-Tunes.git",

    featured: false,
  },


  // ----------------------------------------------------------
  // AI BUSINESS AUTOMATION
  // ----------------------------------------------------------

  {
    title: "AI-Powered Business Automation Platform",

    description:
      "AI-powered automation platform designed to streamline customer communication, lead follow-ups, appointment workflows, and business interactions using Large Language Models and intelligent automation workflows.",

    image: "/ai-business-automation.png",

    tags: [
      "Python",
      "FastAPI",
      "React",
      "LLMs",
      "Generative AI",
      "AI Automation",
      "Google Gemini",
      "CRM",
    ],

    category: "Generative AI",

    liveLink: "",

    githubLink: "",

    featured: true,
  },
];


// ============================================================
// SKILLS
// ============================================================

export const skillCategories = [

  // ----------------------------------------------------------
  // PROGRAMMING LANGUAGES
  // ----------------------------------------------------------

  {
    category: "Programming Languages",

    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 70 },
    ],
  },


  // ----------------------------------------------------------
  // AI, ML & GENERATIVE AI
  // ----------------------------------------------------------

  {
    category: "AI, ML & Generative AI",

    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "LLMs", level: 90 },
      { name: "Generative AI", level: 90 },
      { name: "RAG", level: 90 },
      { name: "AI Agents", level: 85 },
      { name: "Agentic AI", level: 80 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 85 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },


  // ----------------------------------------------------------
  // AI FRAMEWORKS & LIBRARIES
  // ----------------------------------------------------------

  {
    category: "AI Frameworks & Libraries",

    skills: [
      { name: "LangChain", level: 80 },
      { name: "LangGraph", level: 75 },
      { name: "CrewAI", level: 80 },
      { name: "Hugging Face", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 75 },
      { name: "Scikit-learn", level: 85 },
      { name: "OpenCV", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
    ],
  },


  // ----------------------------------------------------------
  // WEB DEVELOPMENT
  // ----------------------------------------------------------

  {
    category: "Web Development",

    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 90 },
      { name: "Django", level: 80 },
      { name: "Django REST Framework", level: 80 },
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },


  // ----------------------------------------------------------
  // DATABASES & TOOLS
  // ----------------------------------------------------------

  {
    category: "Databases & Tools",

    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
    ],
  },


  // ----------------------------------------------------------
  // AI / DATA CONCEPTS
  // ----------------------------------------------------------

  {
    category: "AI & Data Concepts",

    skills: [
      { name: "Retrieval-Augmented Generation", level: 90 },
      { name: "Vector Search", level: 85 },
      { name: "Embeddings", level: 85 },
      { name: "BERT", level: 80 },
      { name: "Dense Passage Retrieval", level: 85 },
      { name: "Model Evaluation", level: 80 },
      { name: "Data Preprocessing", level: 85 },
      { name: "Feature Engineering", level: 80 },
    ],
  },


  // ----------------------------------------------------------
  // CORE COMPUTER SCIENCE
  // ----------------------------------------------------------

  {
    category: "Core Computer Science",

    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "Computer Networks", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "Software Engineering", level: 85 },
    ],
  },


  // ----------------------------------------------------------
  // CYBERSECURITY & BLOCKCHAIN
  // ----------------------------------------------------------

  {
    category: "Cybersecurity & Blockchain",

    skills: [
      { name: "Cybersecurity", level: 80 },
      { name: "Machine Learning for Security", level: 80 },
      { name: "Ethereum", level: 70 },
      { name: "Web3", level: 70 },
      { name: "Blockchain", level: 70 },
    ],
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications = [

  {
    title: "Ceeras – Python Developer Internship Certificate",
    organization: "Ceeras",
    year: "2026",
    certificateId: "VBN70998",
    image: "/certificates/ceeras.png",
    link: "https://drive.google.com/file/d/1X_PdrjxRH_jkT3Oxfyax1nu5xcbldxFw/view?usp=drive_link",
  },

  {
    title: "Infosys Springboard – Generative AI Internship Certificate",
    organization: "Infosys Springboard",
    year: "2026",
    certificateId: "",
    image: "/certificates/infosys-generative-ai.png",
    link: "https://drive.google.com/file/d/1Kjv-3cHMx6valjQEZpqaz9F6tFKLzh_I/view?usp=sharing",
  },

  {
    title: "Oasis Infobyte – Python Development Internship Certificate",
    organization: "Oasis Infobyte",
    year: "2026",
    certificateId: "OIB/L1/IP643",
    image: "/certificates/oasis.png",
    link: "https://drive.google.com/file/d/1Kjv-3cHMx6valjQEZpqaz9F6tFKLzh_I/view?usp=sharing",
  },

  {
    title: "Swecha – Summer of AI Internship",
    organization: "Swecha",
    year: "2025",
    certificateId: "",
    image: "/certificates/swecha.png",
    link: "https://drive.google.com/file/d/1pEwkzJXOl3QS5MpPMMF9a8GP_vOnDl9H/view?usp=sharing",
  },

  {
    title: "Web Design Workshop Certificate",
    organization: "D-Code Soft Tech Solutions Pvt. Ltd.",
    year: "",
    certificateId: "",
    image: "/certificates/web-design.png",
    link: "https://drive.google.com/file/d/1vl_lC_FaRl4_3DQIz7Ts-8IhXLAcsGsA/view?usp=drive_link",
  },

  {
    title: "Google Gemini Academy – Transforming Higher Education with Google Gemini",
    organization: "Google Gemini Academy",
    year: "",
    certificateId: "",
    image: "/certificates/google-gemini.png",
    link: "https://drive.google.com/file/d/1hUp1UtBP_u4BfuQherRdOr5ql_xMQ_hA/view?usp=sharing",
  },

  {
    title: "SummerShip Program Certificate",
    organization: "GradSkills",
    year: "",
    certificateId: "",
    image: "/certificates/gradskills.png",
    link: "",
  },

  {
    title: "GEN-AI Certification",
    organization: "Techgyan Technologies",
    year: "",
    certificateId: "",
    image: "/certificates/techgyan-genai.png",
    link: "https://drive.google.com/file/d/1X8_bgNa58CLDzYPXPhvUOThkw8QXi_Ga/view?usp=sharing",
  },

  {
    title: "Coding Hackathon Participation – Aavishkaar 2024, MRCET",
    organization: "MallaReddy College of Engineering and Technology",
    year: "2024",
    certificateId: "",
    image: "/certificates/aavishkaar.png",
    link: "https://drive.google.com/file/d/1wm2tZCh0DSlMSs0nbkIrV_4Fnha_S5ju/view?usp=drive_link",
  },

  {
    title: "Cambridge English Empower C1 Level Course",
    organization: "Cambridge",
    year: "",
    certificateId: "",
    image: "/certificates/cambridge-c1.png",
    link: "https://drive.google.com/file/d/10CuJJlKkZq4Ta0c2MdEuoKOS6ESBQNay/view?usp=sharing",
  },

];

// ============================================================
// EXPERIENCE & EDUCATION
// ============================================================

export const timeline = [

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------

  {
    type: "education",

    title:
      "Bachelor of Technology – Computer Science and Engineering (AI & ML)",

    organization:
      "MallaReddy College of Engineering and Technology",

    location: "Hyderabad, Telangana, India",

    period: "Sep 2023 – Jul 2027",

    current: true,

    description:
      "Currently pursuing B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning. Maintaining a CGPA of 8.1.",

    tags: [
      "Python",
      "AI & ML",
      "Artificial Intelligence",
      "Data Structures",
      "Machine Learning",
      "Computer Science",
    ],
  },


  // ----------------------------------------------------------
  // OASIS INFOBYTE
  // ----------------------------------------------------------

  {
    type: "work",

    title: "Python Development Intern",

    organization: "Oasis Infobyte",

    location: "India",

    period: "Jul 2026 – Aug 2026",

    current: false,

    description:
      "Developed Working Alexa – an AI-powered voice assistant with voice recognition, text-to-speech, weather API integration, web search, reminders, and automation. Worked with Python, Tkinter, Flask, APIs, SQLite, Matplotlib, Git, and GitHub.",

    tags: [
      "Python",
      "Tkinter",
      "Flask",
      "APIs",
      "SQLite",
      "Matplotlib",
      "Git",
      "GitHub",
      "Voice Assistant",
    ],
  },


  // ----------------------------------------------------------
  // CEERAS
  // ----------------------------------------------------------

  {
    type: "work",

    title: "Python Developer Intern",

    organization: "Ceeras",

    location: "India",

    period: "May 2026 – Jul 2026",

    current: false,

    description:
      "Developed and maintained Django-based backend applications using Python and Django REST Framework. Designed and integrated RESTful APIs for employee, department, authentication, and email management modules. Worked with PostgreSQL and SQLite databases, implementing CRUD operations and optimizing backend functionality. Collaborated using Git and GitHub, performed debugging, API testing, and contributed to deployment preparation.",

    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "PostgreSQL",
      "SQLite",
      "Git",
      "GitHub",
    ],
  },


  // ----------------------------------------------------------
  // INFOSYS SPRINGBOARD
  // ----------------------------------------------------------

  {
    type: "work",

    title: "Intern",

    organization: "Infosys Springboard",

    location: "India",

    period: "Feb 2026 – Apr 2026",

    current: false,

    description:
      "Performed industry trend forecasting using market trends and competitor analysis. Conducted competitive positioning analysis relative to industry benchmarks. Generated real-time strategic opportunity alerts for decision-making.",

    tags: [
      "Python",
      "Generative AI",
      "AI/ML",
      "Market Analysis",
      "Trend Forecasting",
      "Data Analysis",
    ],
  },


  // ----------------------------------------------------------
  // SWECHA
  // ----------------------------------------------------------

  {
    type: "work",

    title: "Intern – AI Developer",

    organization: "Swecha Organization",

    location: "India",

    period: "Jun 2025 – Aug 2025",

    current: false,

    description:
      "Worked with Python to build real-world AI applications. Implemented Retrieval-Augmented Generation (RAG) systems and studied Transformer architectures including GPT and BERT.",

    tags: [
      "Python",
      "AI/ML",
      "RAG",
      "LLMs",
      "GPT",
      "BERT",
      "NLP",
    ],
  },
];