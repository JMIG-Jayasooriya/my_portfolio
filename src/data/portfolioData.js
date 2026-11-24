export const personalInfo = {
  name: "Isumi Gayasha Jayasooriya",
  shortName: "Isumi",
  title: "Computing Undergraduate | Technology Enthusiast",
  headline: "Building my journey in technology.",
  tagline: "Computing Undergraduate | Technology Enthusiast",
  bio: "Hi, I'm Isumi Gayasha Jayasooriya. I'm a Computing undergraduate passionate about technology, software development, and creating meaningful digital solutions. I enjoy learning new technologies and applying my knowledge through practical projects.",
  extendedBio: "I am currently pursuing my degree in Computing at Sabaragamuwa University of Sri Lanka. With a strong interest in software engineering, full-stack development, and software quality assurance, I focus on writing clean, efficient code and developing intuitive, user-centric applications. My goal is to build reliable digital systems and contribute to innovative tech teams.",
  location: "Sri Lanka",
  email: "isumi.gayasha@example.com",
  phone: "+94 7X XXX XXXX",
  github: "https://github.com/isumi-gayasha",
  linkedin: "https://linkedin.com/in/isumi-gayasha",
  cvFileName: "Isumi_Gayasha_Jayasooriya_CV.pdf",
  university: "Sabaragamuwa University of Sri Lanka",
  faculty: "Faculty of Computing",
  school: "Dharmasoka College, Ambalangoda",
  status: "Undergraduate (3rd Year)",
  stats: [
    { label: "Core Projects", value: "4+" },
    { label: "Technical Skills", value: "18+" },
    { label: "Certifications", value: "5+" },
    { label: "Hands-on Focus", value: "Full Stack & QA" }
  ]
};

export const skillCategories = [
  {
    category: "Programming",
    description: "Core languages used for problem solving and software architecture",
    skills: [
      { name: "Java", level: "Advanced", icon: "Code2", tag: "Backend / OOP" },
      { name: "JavaScript", level: "Proficient", icon: "FileCode", tag: "Web / ES6+" },
      { name: "Python", level: "Intermediate", icon: "Terminal", tag: "Scripting / Data" },
      { name: "SQL", level: "Proficient", icon: "Database", tag: "Relational Queries" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Designing responsive, intuitive, and accessible user interfaces",
    skills: [
      { name: "React", level: "Proficient", icon: "Atom", tag: "SPA / Hooks / State" },
      { name: "HTML5", level: "Advanced", icon: "Layout", tag: "Semantic Markup" },
      { name: "CSS3", level: "Advanced", icon: "Palette", tag: "Responsive & Flex/Grid" },
      { name: "Responsive Design", level: "Advanced", icon: "Smartphone", tag: "Mobile-First" }
    ]
  },
  {
    category: "Backend Development",
    description: "Building robust REST APIs and scalable server architectures",
    skills: [
      { name: "Spring Boot", level: "Proficient", icon: "Server", tag: "Java Microservices" },
      { name: "REST APIs", level: "Proficient", icon: "Network", tag: "Endpoint Design" },
      { name: "MVC Architecture", level: "Intermediate", icon: "Boxes", tag: "Layered Pattern" }
    ]
  },
  {
    category: "Database Management",
    description: "Structuring, querying, and optimizing relational schemas",
    skills: [
      { name: "MySQL", level: "Proficient", icon: "Database", tag: "RDBMS" },
      { name: "PostgreSQL", level: "Intermediate", icon: "Layers", tag: "Advanced SQL" }
    ]
  },
  {
    category: "Quality Assurance & Testing",
    description: "Ensuring application correctness, reliability, and standards compliance",
    skills: [
      { name: "Manual Testing", level: "Proficient", icon: "CheckSquare", tag: "Functional & Smoke" },
      { name: "Test Case Design", level: "Advanced", icon: "FileSpreadsheet", tag: "Test Scenarios" },
      { name: "Postman", level: "Proficient", icon: "Send", tag: "API Verification" },
      { name: "Bug Tracking", level: "Proficient", icon: "Bug", tag: "Reporting & Lifecycle" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Development environments and collaboration workflows",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch", tag: "Version Control" },
      { name: "GitHub", level: "Proficient", icon: "Github", tag: "Repositories / PRs" },
      { name: "VS Code", level: "Advanced", icon: "Laptop", tag: "IDE" },
      { name: "IntelliJ IDEA", level: "Proficient", icon: "Binary", tag: "Java IDE" },
      { name: "Figma", level: "Intermediate", icon: "Figma", tag: "UI Wireframing" }
    ]
  }
];

export const projects = [
  {
    id: "v-mas",
    title: "V-MAS – Vehicle Management System",
    category: "Full Stack",
    shortDescription: "A comprehensive vehicle and fleet management system built to streamline fleet tracking, maintenance records, driver assignments, and admin reporting.",
    fullDescription: "V-MAS (Vehicle Management System) is an enterprise-oriented application designed to simplify fleet logistics. It provides real-time vehicle allocation, fuel tracking, regular maintenance logs, insurance renewal alerts, and comprehensive PDF reporting for managers.",
    technologies: ["React", "Spring Boot", "MySQL", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Fleet inventory management with live operational statuses",
      "Maintenance scheduling and periodic service alerts",
      "Secure role-based access control (Admin, Officer, Driver)",
      "Automated reports and expense calculation dashboards"
    ],
    github: "https://github.com/isumi-gayasha/v-mas-fleet-management",
    demo: "https://v-mas-fleet-preview.vercel.app",
    featured: true,
    badge: "Enterprise App"
  },
  {
    id: "travel-memories",
    title: "Travel Memories",
    category: "Full Stack",
    shortDescription: "An interactive travel journal and memory curation platform allowing travelers to record trips, pin locations, organize albums, and chronicle journeys.",
    fullDescription: "Travel Memories is a responsive web application designed for avid travelers to record their adventures. Users can create trip logs, upload photo galleries, note down travel expenses, rate locations, and organize memorable journeys with an intuitive interactive UI.",
    technologies: ["React", "Spring Boot", "MySQL", "REST APIs", "CSS Modules"],
    highlights: [
      "Interactive trip logs categorized by country and dates",
      "Photo album gallery with light-box viewing and tagging",
      "Personal itinerary planner and travel expense ledger",
      "Full CRUD operations backed by Spring Boot REST API"
    ],
    github: "https://github.com/isumi-gayasha/travel-memories-app",
    demo: "https://travel-memories-preview.vercel.app",
    featured: true,
    badge: "Web Application"
  },
  {
    id: "qa-testing-practice",
    title: "QA Testing Practice & Test Suite",
    category: "Testing & QA",
    shortDescription: "End-to-end software quality assurance suite featuring formal test plans, detailed test cases, bug tracking documentation, and Postman API test automation.",
    fullDescription: "This comprehensive testing project documents standard industry QA methodologies applied across mock e-commerce and banking systems. It includes functional, regression, boundary-value, and negative test scenarios alongside structured Postman API collection test runs.",
    technologies: ["Manual Testing", "Test Case Design", "Postman", "Bug Reporting", "Jira/Sheets"],
    highlights: [
      "Structured Test Scenarios covering positive, negative, and edge cases",
      "Detailed Defect Reports following standardized severity & priority taxonomy",
      "Postman API Collections with automated assertions and environment variables",
      "Traceability matrix aligning business requirements with test execution"
    ],
    github: "https://github.com/isumi-gayasha/qa-testing-documentation",
    demo: "#",
    featured: true,
    badge: "Quality Assurance"
  },
  {
    id: "daily-expense-tracker",
    title: "Daily Expense Tracker",
    category: "Full Stack",
    shortDescription: "A personal finance management web app facilitating daily income and expense monitoring, category breakdown, budget targets, and monthly insights.",
    fullDescription: "Daily Expense Tracker empowers users to maintain financial discipline. It enables seamless transaction entries, categorized budget allocation, dynamic visual charts showing spending habits, and downloadable monthly financial summaries.",
    technologies: ["React", "Spring Boot", "MySQL", "Chart.js", "REST APIs"],
    highlights: [
      "Real-time expense & income recording with category tagging",
      "Monthly budget progress bars and overspending warnings",
      "Visual spending breakdowns via responsive interactive charts",
      "Clean RESTful backend ensuring transactional integrity"
    ],
    github: "https://github.com/isumi-gayasha/daily-expense-tracker",
    demo: "https://expense-tracker-preview.vercel.app",
    featured: true,
    badge: "FinTech App"
  }
];

export const experience = [
  {
    id: "peoples-bank",
    role: "Banking Operations Trainee",
    organization: "People's Bank",
    location: "Sri Lanka",
    period: "Previous Professional Training",
    type: "Professional Training",
    description: "Completed intensive practical training in core banking procedures, transactional reconciliation, and customer relationship management.",
    responsibilities: [
      "Gained hands-on exposure to banking enterprise software systems and core ledger operations",
      "Assisted in daily transaction validations, account opening documentation, and data verification",
      "Collaborated with operational teams while adhering strictly to financial compliance and confidentiality guidelines",
      "Strengthened professional communication, problem-solving, and attention to detail in high-accuracy environments"
    ]
  },
  {
    id: "uni-activities",
    role: "Active Member & Volunteer",
    organization: "Faculty of Computing, Sabaragamuwa University",
    location: "Belihuloya, Sri Lanka",
    period: "2023 – Present",
    type: "University Engagement",
    description: "Active contributor to university technical societies, student workshops, and faculty extracurricular initiatives.",
    responsibilities: [
      "Participated in organizing technical seminars, coding challenges, and peer-learning study circles",
      "Coordinated student logistics and public relations for faculty-wide technology showcases",
      "Engaged in group academic research and collaborative software engineering module projects"
    ]
  }
];

export const education = [
  {
    id: "susl",
    institution: "Sabaragamuwa University of Sri Lanka",
    faculty: "Faculty of Computing",
    degree: "BSc (Hons) in Computing / Information Technology",
    period: "2023 – Present (Expected Graduation: 2026)",
    location: "Belihuloya, Sri Lanka",
    status: "In Progress",
    description: "Undergraduate degree focusing on core computer science foundations, algorithms, data structures, software engineering principles, database systems, web development, and software quality assurance.",
    keyModules: [
      "Object Oriented Programming (Java)",
      "Database Systems & Design (MySQL)",
      "Web Technologies & Frameworks",
      "Software Quality Assurance & Testing",
      "Data Structures and Algorithms",
      "Operating Systems & Computer Networks"
    ]
  },
  {
    id: "dharmasoka",
    institution: "Dharmasoka College",
    faculty: "Physical Science / Mathematics Stream",
    degree: "G.C.E. Advanced Level & Ordinary Level",
    period: "Secondary Education",
    location: "Ambalangoda, Sri Lanka",
    status: "Completed",
    description: "Completed secondary education with focused studies in Mathematics, Physics, and Chemistry, cultivating strong analytical and problem-solving abilities.",
    keyModules: [
      "Combined Mathematics",
      "Physics",
      "Chemistry",
      "Information & Communication Technology"
    ]
  }
];

export const certifications = [
  {
    id: "cert-react",
    title: "Front-End Development with React",
    issuer: "Coursera / Meta",
    date: "2024",
    skills: ["React.js", "Component Design", "Hooks", "State Management"],
    credentialUrl: "https://coursera.org/verify",
    idCode: "REACT-DEV-2024"
  },
  {
    id: "cert-spring",
    title: "Spring Boot & Java Microservices",
    issuer: "Udemy Professional",
    date: "2024",
    skills: ["Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate"],
    credentialUrl: "https://udemy.com/certificate",
    idCode: "SPRING-JAVA-2024"
  },
  {
    id: "cert-qa",
    title: "Software Testing & QA Fundamentals",
    issuer: "Test Automation University / Great Learning",
    date: "2023",
    skills: ["Manual Testing", "Test Scenarios", "Bug Tracking", "SDLC/STLC"],
    credentialUrl: "https://testautomationu.applitools.com",
    idCode: "QA-TEST-2023"
  },
  {
    id: "cert-sql",
    title: "Relational Database Design & SQL",
    issuer: "HackerRank / Coursera",
    date: "2023",
    skills: ["SQL", "Relational Schemas", "Query Optimization", "MySQL"],
    credentialUrl: "https://hackerrank.com/certificates",
    idCode: "SQL-DB-2023"
  },
  {
    id: "cert-postman",
    title: "Postman API Testing Essentials",
    issuer: "Postman Student Expert",
    date: "2024",
    skills: ["Postman", "API Automation", "HTTP Methods", "JSON Validation"],
    credentialUrl: "https://badgr.com/public/badges",
    idCode: "POSTMAN-EXP-2024"
  }
];

export const achievements = [
  {
    id: "ach-1",
    title: "University Hackathon & Coding Participation",
    category: "Competition",
    date: "2024",
    description: "Competed in competitive university hackathon rounds, designing rapid software prototypes and collaborating in agile team sprints."
  },
  {
    id: "ach-2",
    title: "Academic Excellence in Computing Modules",
    category: "Academics",
    date: "2023 – 2024",
    description: "Consistently demonstrated high academic performance in Object-Oriented Programming, Database Management Systems, and Software Quality modules."
  },
  {
    id: "ach-3",
    title: "Community & Student Mentorship Outreach",
    category: "Volunteering & Leadership",
    date: "2024",
    description: "Volunteered as a peer mentor assisting junior undergraduates with foundational Java programming, debugging techniques, and Git version control."
  },
  {
    id: "ach-4",
    title: "School Prefect / Society Leadership",
    category: "Leadership",
    date: "Dharmasoka College",
    description: "Actively contributed to school clubs and committees, leading teamwork events and developing structured communication capabilities."
  }
];
