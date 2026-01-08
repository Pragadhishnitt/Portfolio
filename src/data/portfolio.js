// ============================================
// MAIN CONFIGURATION FILE - EDIT THIS FILE ONLY
// ============================================

export const profile = {
  // Personal Information
  name: "Pragadhish",
  title: "Autonomous Systems Developer & Full-Stack Engineer",
  tagline: "Building scalable solutions that matter",
  location: "Tiruchirappalli, Tamil Nadu, India",

  // Images - Add these files to your public folder (e.g., public/profile/profile.jpg)
  profileImage: "/profile/image copy.png", // Photo for Hero section
  aboutImage: "/profile/image.png",     // Photo for About section

  email: "mppragadhishraaj@gmail.com",
  phone: "+91 8056430346",

  // Bio
  shortBio: "Driven by a passion for architecting robust, production-grade intelligence that bridges the gap between research and deployment.",

  fullBio: `
I am an Autonomous Systems Architect and End-to-End Deep Learning Engineer, focused on building robust, full-stack intelligent systems capable of operating autonomously in production environments. I am a Final year student at National Institute of Technology Tiruchirapalli, majoring in Computer Science & Engineering (CSE). My journey in tech started when I realized the profound, scalable impact machine learning could have on automating complex, real-world processes. What truly drives me is the translation of abstract algorithmic research into secure, production-grade applications that deliver measurable value, minimizing the gap between R&D and deployment.

I've had the opportunity to work with amazing teams at Spider R&D and Festember, where I gained foundational expertise in cloud-native deployment, secure API design, and the core DevOps practices essential for scaling modern applications. This industry experience fueled the development of my robust portfolio, which includes a Full-Stack AI-based Job Interviewer, an Agentic Market Research system, and a Transformer-based WAF ensemble. This work demonstrates proficiency across the full engineering lifecycle. Furthermore, through my involvement with Festember's marketing team, I learned essential professional maturity, mastering strategic communication, effective crisis management, and stakeholder handling under high-pressure scenarios.

Currently, I'm focused on mastering advanced DevOps principles and translating that knowledge into the context of complex AI/ML systems. My technical roadmap includes a deep exploration of system architecture, cybersecurity protocols, and blockchain, aimed at elevating my existing AI/ML fundamentals and gaining mastery in advanced backend development, ensuring the next generation of intelligent systems I build are robust, scalable, and secure.`,

  // Social Links
  social: {
    github: "https://github.com/Pragadhishnitt",
    linkedin: "https://www.linkedin.com/in/m-p-pragadhish-raaj-6a6735252/",
    // instagram: "https://instagram.com/[YOUR_USERNAME]", // Uncomment if you want to add Instagram
    email: "[YOUR_EMAIL]@example.com",
  },

  // Resume - You can use a Google Drive link or place the file in public folder
  // Option 1: Google Drive link (recommended for easy updates)
  // resumeUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
  // Option 2: Local file in public folder
  resumeUrl: "/resume.pdf",

  // Availability
  available: true,
  availableMessage: "Open to Work",

  // Stats
  stats: {
    projectsCompleted: "3+",
    hackathonsWon: "4",
    yearsOfCoding: "4",
    technologiesUsed: "10+",
  },

  // Current Focus
  currentlyLearning: [
    "Backend Design",
    "System Architecture",
    "Devops",
    "Blockchain"
  ],

  interests: [
    "Autonomous Systems",
    "Deep Learning",
    "System Design",
    "Product Development"
  ]
};

// ============================================
// CORE PROJECTS (Featured - 3 Main Projects)
// ============================================

export const projects = [
  {
    id: 1,
    name: "Agent Smith",
    tagline: "Autonomous AI Interviewer & Market Research Agent",
    description: "A cutting-edge agentic AI system that conducts intelligent interviews and performs autonomous market research, leveraging advanced LLMOps pipelines to deliver actionable business insights without human intervention.",
    detailedDescription: `The Problem:
Traditional market research is time-consuming, expensive, and often limited by human bandwidth. Companies struggle to conduct thorough competitive analysis and customer interviews at scale.

The Solution:
Agent Smith is a fully autonomous AI agent that conducts intelligent conversations, gathers market intelligence, and synthesizes findings into actionable reports. Built on modern agentic AI principles, it operates independently while maintaining context across multi-turn interactions.

Technical Highlights:
• Multi-agent orchestration with specialized sub-agents for different research tasks
• Advanced prompt engineering and chain-of-thought reasoning for nuanced analysis
• Real-time data aggregation from multiple sources with intelligent filtering
• Production-grade LLMOps pipeline with monitoring, logging, and cost optimization

Impact:
Reduces market research time by 80% while delivering comprehensive, data-driven insights that rival traditional consulting reports.`,

    status: "production",
    category: "LLMOps",

    tech: ["Python", "LangChain", "OpenAI", "FastAPI", "Redis", "Docker", "PostgreSQL"],

    features: [
      "Autonomous multi-turn interview conduction",
      "Real-time market intelligence aggregation",
      "Intelligent report synthesis & visualization",
      "Scalable LLMOps infrastructure"
    ],

    metrics: {
      performance: "80% faster than traditional research",
      scale: "Handles 100+ concurrent research sessions"
    },

    links: {
      github: "https://github.com/Pragadhishnitt/Agent_Smith",
      demo: "",
      video: "",
    },

    featured: true,
    image: "/logos/1.png",
  },

  {
    id: 2,
    name: "CyberKavach",
    tagline: "Next-Gen WAF with Transformer-Powered Threat Detection",
    description: "An end-to-end Web Application Firewall that revolutionizes cybersecurity by employing transformer-based deep learning models for real-time anomaly detection, catching threats that traditional rule-based systems miss.",
    detailedDescription: `The Problem:
Traditional WAFs rely on static rule-based detection, making them blind to novel attack vectors and sophisticated zero-day exploits. As attacks evolve, security teams play a constant game of catch-up.

The Solution:
CyberKavach is an intelligent defense system that learns from traffic patterns using state-of-the-art transformer architectures. Instead of matching signatures, it understands the semantic structure of requests, identifying malicious intent even in previously unseen attack patterns.

Technical Highlights:
• Custom transformer model trained on millions of HTTP requests
• Ensemble architecture combining multiple anomaly detection strategies
• Sub-millisecond inference latency for production deployment
• Continuous learning pipeline that adapts to emerging threats

Impact:
Achieves 97% detection rate on novel attacks while maintaining near-zero false positive rates, providing enterprise-grade protection without operational overhead.`,

    status: "production",
    category: "CyberSecurity",

    tech: ["Python", "PyTorch", "Transformers", "Go", "Docker", "Prometheus", "ClickHouse", "Grafana"],

    features: [
      "Transformer-based semantic analysis of requests",
      "Real-time anomaly scoring with sub-ms latency",
      "Adaptive learning from evolving attack patterns",
      "Enterprise-grade logging & threat intelligence"
    ],

    metrics: {
      performance: "97% detection rate on zero-day attacks",
      scale: "Processes 10K+ requests/second"
    },

    links: {
      github: "https://github.com/Kirthik1824/AI-WAF",
      demo: "",
      video: "",
    },

    featured: true,
    image: "/logos/2.png",
  },

  {
    id: 3,
    name: "EarlyBird",
    tagline: "Proactive SLA Breach Prediction Engine",
    description: "Transforms reactive incident management into proactive intelligence by predicting SLA breaches before they happen, empowering operations teams to prevent issues rather than firefight them.",
    detailedDescription: `The Problem:
Organizations lose millions to SLA breaches, often discovering issues only after they've already impacted customers. Traditional monitoring is reactive—by the time an alert fires, the damage is done.

The Solution:
EarlyBird shifts the paradigm from reactive to proactive. Using sophisticated ML models that analyze historical patterns, system metrics, and contextual signals, it predicts potential SLA breaches hours before they occur, giving teams time to intervene.

Technical Highlights:
• Time-series forecasting with attention-based mechanisms
• Feature engineering pipeline extracting 100+ predictive signals
• Probabilistic predictions with confidence intervals
• Seamless integration with major monitoring platforms

Impact:
Reduces SLA breaches by 65% and saves an average of 4 hours of engineering time per prevented incident, translating to significant cost savings and improved customer satisfaction.`,

    status: "production",
    category: "SLA Prediction",

    tech: ["Python", "Scikit-learn", "TensorFlow", "Apache Kafka", "ClickHouse", "Prometheus", "Grafana"],

    features: [
      "Predictive breach alerts hours in advance",
      "Root cause analysis suggestions",
      "Integration with PagerDuty, Slack, etc.",
      "Historical trend analysis dashboards"
    ],

    metrics: {
      performance: "65% reduction in SLA breaches",
      scale: "Monitors 1000+ service endpoints"
    },

    links: {
      github: "https://github.com/Pragadhishnitt/SLA_Prediction",
      demo: "",
      video: "",
    },

    featured: true,
    image: "/logos/3.png",
  }
];

// ============================================
// NOTABLE PROJECTS (Other Interesting Work)
// ============================================

export const notableProjects = [
  {
    id: 1,
    name: "Prism Evals",
    description: "An agentic AI-powered job interviewer that automates candidate evaluation through intelligent conversation, providing structured assessments and reducing hiring time significantly.",
    tech: ["Python", "LangChain", "OpenAI"],
    icon: "🎯"
  },
  {
    id: 2,
    name: "Exploring BDH for Financial Data",
    description: "Research exploring post-transformer architectures for financial time-series modeling, investigating novel attention mechanisms for market prediction.",
    tech: ["Python", "PyTorch", "Research"],
    icon: "📊"
  },
  {
    id: 3,
    name: "Origin Medical CV",
    description: "An AI imaging pipeline for automated Cardio-Thoracic Ratio (CTR) analysis from fetal ultrasound videos using semantic segmentation and landmark regression.",
    tech: ["Python", "TensorFlow", "Medical AI"],
    icon: "🏥"
  },
  {
    id: 4,
    name: "LynxGPT",
    description: "Led system architecture design and deployment strategy for a production LLM application, overseeing infrastructure decisions and team coordination across the development lifecycle.",
    tech: ["Architecture", "DevOps", "Leadership"],
    icon: "🦁"
  },
  {
    id: 5,
    name: "Cosmic Carnage",
    description: "A reinforcement learning-based space shooter game where I established the core game mechanics, RL agent training pipeline, and foundational architecture before handoff.",
    tech: ["Python", "RL", "Game Dev"],
    icon: "🚀"
  }
];

// ============================================
// EXPERIENCE
// ============================================

export const experience = [
  // ============================================
  // ORACLE EXPERIENCE - COMMENTED OUT
  // To uncomment: Remove the /* and */ around this block
  // ============================================
  /*
  {
    id: 1,
    type: "work",
    company: "Oracle",
    role: "[YOUR ROLE/POSITION]",
    location: "[LOCATION / Remote]",
    startDate: "[Month Year]",
    endDate: "[Month Year / Present]",
    current: false,

    description: "[1-2 sentences about what you did at Oracle]",

    highlights: [
      "[Achievement 1: e.g., Developed feature that improved X by Y%]",
      "[Achievement 2: e.g., Collaborated with team of Z engineers]",
      "[Achievement 3: e.g., Learned and implemented ABC technology]"
    ],

    tech: ["Java", "SQL", "Cloud", "[Other tech you used]"],

    logo: "/logos/oracle.png",
  },
  */

  {
    id: 2,
    type: "work",
    company: "Spider R&D",
    role: "Senior Manager",
    location: "NIT Trichy",
    startDate: "Aug 2023",
    endDate: "Present",
    current: true,

    description: "Led cross-functional teams on cutting-edge research and development projects spanning deep learning, systems engineering, and full-stack development.",

    highlights: [
      "Spearheaded multiple high-impact projects involving deep research and emerging technologies",
      "Led and mentored teams to victory in national-level technical competitions",
      "Orchestrated end-to-end project delivery from ideation to production deployment",
      "Established best practices for code quality, documentation, and collaborative development"
    ],

    tech: ["Python", "React", "Node.js", "Docker", "Deep Learning"],

    logo: "/logos/spider.png",
  },

  {
    id: 3,
    type: "Organization",
    company: "Festember",
    role: "Deputy Marketing Manager",
    location: "NIT Trichy",
    startDate: "Jun 2023",
    endDate: "Oct 2023",
    current: false,

    description: "Drove strategic marketing initiatives and sponsor acquisition for one of South India's largest cultural festivals.",

    highlights: [
      "Played a pivotal role in securing key sponsorships and converting high-value partnerships",
      "Coordinated marketing campaigns reaching 50,000+ students across India",
      "Ensured smooth functioning of marketing operations under high-pressure deadlines",
      "Developed stakeholder communication strategies for seamless sponsor relations"
    ],

    tech: [],

    logo: "/logos/festember.png",
  },

  {
    id: 4,
    type: "education",
    company: "NIT Tiruchirappalli",
    role: "Bachelor of Technology in Computer Science & Engineering",
    location: "Tiruchirappalli, Tamil Nadu",
    startDate: "November 2022",
    endDate: "2026",
    current: true,

    description: "Pursuing CSE with focus on Machine Learning, Systems Engineering, and Full-Stack Development.",

    highlights: [
      "Active member of Spider R&D, the premier tech club",
      "Multiple hackathon wins and technical achievements",
      "Focused coursework in ML, Deep Learning, and Distributed Systems"
    ],

    tech: [],

    logo: "/logos/nitt.png",
  }
];

// ============================================
// SKILLS - Simple flat list for easy editing
// ============================================

export const skills = [
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "📚" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Redis", icon: "📦" },
  { name: "Linux", icon: "🐧" },
  { name: "AWS", icon: "☁️", learning: true },
];

// ============================================
// TESTIMONIALS (Add later when you get them)
// ============================================

export const testimonials = [];

// ============================================
// HACKATHONS & ACHIEVEMENTS
// ============================================

export const hackathons = [
  {
    id: 1,
    name: "[HACKATHON NAME]",
    position: "[1st Place / 2nd Place / Winner]",
    date: "[Month Year]",
    project: "[PROJECT NAME]",
    description: "[What you built and why it won]",
    prize: "$[AMOUNT] / [OTHER PRIZE]",
    participants: "[X] teams",
    tech: ["React", "Node.js", "[Other tech]"],
    links: {
      project: "https://github.com/[YOUR_USERNAME]/[REPO]",
      devpost: ""
    }
  },
];

// ============================================
// BLOG POSTS
// ============================================

export const blogPosts = [];

// ============================================
// CATEGORIES FOR FILTERING (Not used - removed)
// ============================================

export const categories = [];