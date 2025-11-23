// ============================================
// MAIN CONFIGURATION FILE - EDIT THIS FILE ONLY
// ============================================

export const profile = {
  // Personal Information
  name: "[YOUR FULL NAME]",
  title: "Full-Stack Developer & Problem Solver",
  tagline: "Building scalable solutions that matter",
  location: "Tiruppur, Tamil Nadu, India",
  email: "[YOUR_EMAIL]@example.com",
  phone: "+91 [YOUR_PHONE]", // Optional
  
  // Bio
  shortBio: "College student passionate about building impactful products. Currently working on scaling innovative solutions while gaining real-world experience at top companies.",
  
  fullBio: `[EDIT THIS: Write 2-3 paragraphs about yourself.
  
  I'm a [year] year student at [College Name] majoring in [Your Major]. My journey in tech started when [how you got into coding]. What drives me is [your motivation].
  
  I've had the opportunity to work with amazing teams at Oracle and Spider R&D, where I [what you did]. Through Festember's marketing team, I learned [what you learned].
  
  Currently, I'm focused on [current goals] and always excited to collaborate on projects that [what excites you].]`,
  
  // Social Links
  social: {
    github: "https://github.com/[YOUR_USERNAME]",
    linkedin: "https://linkedin.com/in/[YOUR_USERNAME]",
    twitter: "https://twitter.com/[YOUR_USERNAME]", // Optional
    email: "[YOUR_EMAIL]@example.com",
  },
  
  // Resume
  resumeUrl: "/resume.pdf", // Add your resume to public folder
  
  // Availability
  available: true,
  availableMessage: "Open to internships and freelance projects",
  
  // Stats
  stats: {
    projectsCompleted: "3+",
    hackathonsWon: "[X]", // Add your count
    yearsOfCoding: "[X]", // Add your years
    technologiesUsed: "15+",
  },
  
  // Current Focus
  currentlyLearning: [
    "[Technology 1: e.g., System Design]",
    "[Technology 2: e.g., Kubernetes]",
    "[Technology 3: e.g., GraphQL]"
  ],
  
  interests: [
    "Open Source",
    "AI/ML",
    "System Design",
    "Product Development"
  ]
};

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    id: 1,
    name: "[PROJECT NAME 1]",
    tagline: "[One-line description of what it does]",
    description: "[2-3 sentences explaining the problem it solves and how it works]",
    detailedDescription: `[DETAILED DESCRIPTION:
    
    **The Problem:** [What problem were you solving?]
    
    **The Solution:** [How did you solve it?]
    
    **Technical Highlights:** [What makes it technically interesting?]
    
    **Impact:** [What results did it achieve?]
    ]`,
    
    status: "production", // Options: "production", "mvp", "building"
    category: "Full-Stack", // Options: "Full-Stack", "Frontend", "Backend", "Mobile", "AI/ML"
    
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    
    features: [
      "[Feature 1: e.g., Real-time data synchronization]",
      "[Feature 2: e.g., Authentication with OAuth]",
      "[Feature 3: e.g., Responsive design]",
      "[Feature 4: e.g., RESTful API]"
    ],
    
    metrics: {
      users: "[X users]", // Optional
      performance: "[Metric: e.g., 95% faster than previous solution]", // Optional
      scale: "[Scale: e.g., Handles 10K requests/day]" // Optional
    },
    
    links: {
      github: "https://github.com/[YOUR_USERNAME]/[REPO_NAME]",
      demo: "https://[YOUR_PROJECT].vercel.app",
      video: "", // Optional: YouTube/Loom link
    },
    
    featured: true,
    image: "", // Add to public/projects folder
  },
  
  {
    id: 2,
    name: "[PROJECT NAME 2]",
    tagline: "[One-line description]",
    description: "[2-3 sentences description]",
    detailedDescription: `[Same format as above]`,
    
    status: "mvp",
    category: "Backend",
    
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    
    features: [
      "[Feature 1]",
      "[Feature 2]",
      "[Feature 3]"
    ],
    
    metrics: {},
    
    links: {
      github: "https://github.com/[YOUR_USERNAME]/[REPO_NAME]",
      demo: "",
      video: "",
    },
    
    featured: true,
    image: "",
  },
  
  {
    id: 3,
    name: "[PROJECT NAME 3 - Currently Building]",
    tagline: "[One-line description]",
    description: "[What you're building and why it's exciting]",
    detailedDescription: `[Current status and plans for scaling]`,
    
    status: "building",
    category: "Full-Stack",
    
    tech: ["React", "Node.js", "MongoDB"],
    
    features: [
      "[Planned Feature 1]",
      "[Planned Feature 2]",
      "[Planned Feature 3]"
    ],
    
    metrics: {},
    
    links: {
      github: "https://github.com/[YOUR_USERNAME]/[REPO_NAME]",
      demo: "",
      video: "",
    },
    
    featured: false,
    image: "/projects/project3.jpg",
  }
];

// ============================================
// EXPERIENCE
// ============================================

export const experience = [
  {
    id: 1,
    type: "work", // "work", "education", "volunteer"
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
    
    logo: "/logos/oracle.png", // Add to public/logos folder
  },
  
  {
    id: 2,
    type: "work",
    company: "Spider R&D",
    role: "[YOUR ROLE]",
    location: "[LOCATION]",
    startDate: "[Month Year]",
    endDate: "[Month Year / Present]",
    current: false,
    
    description: "[What you did at Spider R&D]",
    
    highlights: [
      "[Achievement 1]",
      "[Achievement 2]",
      "[Achievement 3]"
    ],
    
    tech: ["React", "Node.js", "[Other tech]"],
    
    logo: "/logos/spider.png",
  },
  
  {
    id: 3,
    type: "volunteer",
    company: "Festember",
    role: "Marketing Team Member",
    location: "[LOCATION]",
    startDate: "[Month Year]",
    endDate: "[Month Year]",
    current: false,
    
    description: "[What you did in marketing team]",
    
    highlights: [
      "[Achievement 1: e.g., Managed social media campaigns reaching X people]",
      "[Achievement 2: e.g., Coordinated with team of Y members]",
      "[Achievement 3: e.g., Increased engagement by Z%]"
    ],
    
    tech: [], // No tech for marketing role
    
    logo: "/logos/festember.png",
  },
  
  {
    id: 4,
    type: "education",
    company: "[YOUR COLLEGE NAME]",
    role: "Bachelor of Technology in [YOUR MAJOR]",
    location: "[CITY, STATE]",
    startDate: "[Year]",
    endDate: "[Expected Graduation Year]",
    current: true,
    
    description: "Pursuing [Your Major] with focus on [Your focus areas]",
    
    highlights: [
      "[Achievement 1: e.g., CGPA: X.XX]",
      "[Achievement 2: e.g., Dean's List]",
      "[Achievement 3: e.g., Relevant coursework in A, B, C]"
    ],
    
    tech: [], // No tech for education
    
    logo: "/logos/college.png",
  }
];

// ============================================
// SKILLS
// ============================================

export const skills = {
  "Frontend": [
    { name: "React", level: 85, icon: "⚛️" },
    { name: "JavaScript", level: 90, icon: "📜" },
    { name: "TypeScript", level: 75, icon: "📘" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "🌐" },
    { name: "Next.js", level: 70, icon: "▲" },
  ],
  
  "Backend": [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "FastAPI", level: 75, icon: "⚡" },
    { name: "Express.js", level: 85, icon: "🚂" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "GraphQL", level: 65, icon: "◈" },
  ],
  
  "Database": [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "PostgreSQL", level: 75, icon: "🐘" },
    { name: "MySQL", level: 70, icon: "🗄️" },
    { name: "Redis", level: 65, icon: "📦" },
    { name: "Firebase", level: 75, icon: "🔥" },
  ],
  
  "Tools & Others": [
    { name: "Git", level: 90, icon: "📚" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "AWS", level: 65, icon: "☁️" },
    { name: "Vercel", level: 85, icon: "▲" },
    { name: "Linux", level: 75, icon: "🐧" },
    { name: "CI/CD", level: 70, icon: "🔄" },
  ]
};

// ============================================
// TESTIMONIALS (Add later when you get them)
// ============================================

export const testimonials = [
  // Example structure - uncomment and fill when you get testimonials
  /*
  {
    id: 1,
    name: "[Person Name]",
    role: "[Their Role]",
    company: "[Company]",
    text: "[Their testimonial about you]",
    image: "/testimonials/person1.jpg", // Optional
    linkedin: "https://linkedin.com/in/[their-profile]" // Optional
  },
  */
];

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
      devpost: "" // Optional
    }
  },
  // Add more hackathons
];

// ============================================
// CATEGORIES FOR FILTERING
// ============================================

export const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI/ML"];