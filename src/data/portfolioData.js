export const personalInfo = {
  name: "Isumi Gayasha Jayasooriya",
  shortName: "Isumi",
  title: "Information Systems Undergraduate | Technology Enthusiast",
  headline: "Building my journey in technology.",
  tagline: "Information Systems Undergraduate",
  bio: "Hi, I'm Isumi Gayasha Jayasooriya. I'm an Information Systems undergraduate passionate about technology, solving problems, and creating meaningful digital solutions. I enjoy learning new technologies and applying my knowledge through practical projects.",
  extendedBio: "Currently reading for Bachelor of Honours in Information Systems at Sabaragamuwa University of Sri Lanka (Expected Graduation: 2028). I have completed hands-on projects using modern web technologies, relational databases, and cloud services, alongside operational experience at People's Bank, Kekirawa. Driven by curiosity, attention to detail, and a commitment to continuous learning.",
  location: "Colombo, Sri Lanka",
  email: "isumigayasha20@gmail.com",
  phone: "+94 76 6375625",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  cvFileName: "Isumi_Gayasha_Jayasooriya_CV.pdf",
  university: "Sabaragamuwa University of Sri Lanka",
  faculty: "Faculty of Computing",
  degree: "Bachelor of Honours in Information Systems",
  expectedGraduation: "2028",
  school: "Dharmasoka College Ambalangoda - Physical Science Stream",
  status: "Undergraduate (Class of 2028)",
  stats: [
    { label: "Core Projects", value: "3+" },
    { label: "Technical Skills", value: "20+" },
    { label: "Certifications", value: "3" },
    { label: "Honours Degree", value: "BSc (Hons)" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Vite", "Tailwind CSS"]
  },
  {
    category: "Backend & Architecture",
    icon: "Server",
    skills: ["Spring Boot", "Node.js", "REST APIs", "JWT", "Role-Based Access Control"]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "AWS (RDS / S3)", "Vercel"]
  },
  {
    category: "Software Testing & QA",
    icon: "CheckSquare",
    skills: ["Software Testing", "Test Case Design", "Postman", "Defect Tracking"]
  },
  {
    category: "Tools & Design",
    icon: "Laptop",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma", "Canva", "draw.io"]
  }
];

export const projects = [
  {
    id: "v-mas",
    title: "V-MAS – Smart Vehicle Service Management System",
    category: "Full Stack",
    projectType: "Group Capstone Project",
    shortDescription: "A full-stack web application developed to digitalize vehicle service workflows and fleet management processes with real-time automated alerts.",
    fullDescription: "V-MAS is an enterprise-grade Smart Vehicle Service Management System. Developed as a multi-member group capstone project, it digitalizes end-to-end vehicle service tracking, maintenance logs, and fleet administrative operations. Powered by a robust React frontend and a Spring Boot RESTful backend connected to AWS RDS MySQL.",
    technologies: ["React.js", "Spring Boot", "Java", "MySQL", "JWT", "AWS (RDS/S3)", "REST API"],
    highlights: [
      "Contributed to the Notification and Alert module, including notification interfaces and notification-related REST APIs",
      "Implemented automated alerts for upcoming vehicle services, insurance expiry, and license expiry",
      "Worked with MySQL database configuration, indexing, backups, and cloud database deployment using AWS RDS",
      "Integrated secure authentication with JWT and Role-Based Access Control (RBAC)",
      "Collaborated efficiently with team members using Git and GitHub in an agile multi-member development lifecycle"
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
    badge: "Group Capstone Project"
  },
  {
    id: "travel-memories",
    title: "Travel Memories – Personal Digital Travel Journal Web Application",
    category: "Full Stack",
    projectType: "Individual Project",
    shortDescription: "An interactive personal travel journal web application featuring interactive map pinning, trip memories, itineraries, and expense records.",
    fullDescription: "Travel Memories is a personal digital travel journal designed to help users record itineraries, journal trip experiences, upload and curate memory albums, track travel budgets, and pin geographical coordinates via interactive map interfaces.",
    technologies: ["React.js", "Spring Boot", "Java", "MySQL", "Spring Security", "JWT", "REST API", "Leaflet.js", "Tailwind CSS"],
    highlights: [
      "Built with React.js and styled with modern responsive Tailwind CSS",
      "Integrated Leaflet.js interactive maps for geolocation tagging and journey visualization",
      "Secure backend developed using Java and Spring Boot with Spring Security & JWT authentication",
      "Full CRUD functionality for managing journal logs, travel milestones, and expense tracking",
      "Connected to MySQL relational database for reliable and structured data storage"
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
    badge: "Individual Project"
  },
  {
    id: "ishu-cake",
    title: "ISHU CAKE – Responsive Cake Shop Website",
    category: "Frontend",
    projectType: "Individual Project",
    shortDescription: "A modern, responsive e-commerce web application for an artisanal cake boutique featuring interactive menus, product catalogs, and mobile-friendly UI.",
    fullDescription: "ISHU CAKE is a clean, visually appetizing web storefront for a specialty cake business. It provides customers with an intuitive product showcase, category filtering, interactive flavor ordering menus, and an optimal browsing experience across desktop, tablet, and mobile devices.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Designed a clean, modern, and user-friendly interface compatible with all desktop, tablet, and mobile screen sizes",
      "Implemented dynamic responsive navigation, product filtering, and interactive showcase menus",
      "Developed structured modular JavaScript for smooth interactions and client-side form validations",
      "Focused on high accessibility, rapid load performance, and intuitive visual hierarchy"
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
    badge: "Individual Project"
  },
  {
    id: "qa-testing-suite",
    title: "Quality Assurance & API Testing Practice",
    category: "Testing & QA",
    projectType: "Academic / Practical Suite",
    shortDescription: "Comprehensive quality assurance suite covering test plan structuring, manual test case authoring, defect reporting, and Postman API verification.",
    fullDescription: "Applying software testing methodologies learned through Microsoft and university coursework. This project encompasses test design techniques (boundary value analysis, equivalence partitioning), comprehensive defect logging, regression test runs, and Postman API request collection test automation.",
    technologies: ["Manual Testing", "Test Case Design", "Postman", "API Validation", "Defect Tracking"],
    highlights: [
      "Authored test plans, test scenarios, and comprehensive manual test cases covering functional and edge cases",
      "Constructed Postman collections with automated test assertions for REST API endpoint status, latency, and payload schema validation",
      "Documented defect reports with clear reproduction steps, expected vs. actual outcomes, and severity prioritization",
      "Grounded in Software Testing Lifecycle (STLC) and standard QA best practices"
    ],
    github: "https://github.com",
    demo: "#",
    featured: true,
    badge: "QA & Testing"
  }
];

export const experience = [
  {
    id: "peoples-bank-kekirawa",
    role: "Trainee",
    organization: "People's Bank, Kekirawa",
    location: "Kekirawa, Sri Lanka",
    period: "Professional Training",
    type: "Banking Operations Trainee",
    description: "Completed professional trainee experience in retail banking operations, customer engagement, and high-precision financial record keeping.",
    responsibilities: [
      "Assisted with customer service and daily banking operations in a fast-paced branch environment",
      "Supported pawning activities, documentation verification, and valuation workflow",
      "Maintained accurate financial records and ledger entries in compliance with banking protocols",
      "Demonstrated high attention to detail, reliability, integrity, and effective professional communication"
    ]
  }
];

export const education = [
  {
    id: "susl",
    institution: "Sabaragamuwa University of Sri Lanka",
    faculty: "Faculty of Computing - Department of Computing and Information Systems",
    degree: "Bachelor of Honours in Information Systems",
    period: "Expected Graduation – 2028",
    location: "Belihuloya / Sri Lanka",
    status: "Undergraduate",
    description: "Undergraduate honours degree programme providing in-depth theoretical and practical education in information systems, software development, database architecture, software testing, and enterprise systems.",
    keyModules: [
      "Information Systems Principles",
      "Object Oriented Programming (Java)",
      "Database Management Systems (MySQL / PostgreSQL)",
      "Software Engineering & Testing Methodologies",
      "Web Technologies & Frameworks",
      "Data Structures and Algorithms"
    ]
  },
  {
    id: "dharmasoka",
    institution: "Dharmasoka College Ambalangoda",
    faculty: "Physical Science Stream",
    degree: "Secondary Education - Physical Science Stream",
    period: "Completed",
    location: "Ambalangoda, Sri Lanka",
    status: "Completed",
    description: "Completed secondary education in the Physical Science stream, building foundational mathematical, logical, and analytical problem-solving skills.",
    keyModules: [
      "Combined Mathematics",
      "Physics",
      "Chemistry"
    ]
  }
];

export const certifications = [
  {
    id: "cert-testing",
    title: "Software Testing Fundamentals and Methodologies",
    issuer: "Microsoft (via Coursera)",
    date: "Certified",
    skills: ["Software Testing", "Testing Methodologies", "Test Cases", "Quality Assurance"],
    credentialUrl: "https://www.coursera.org",
    idCode: "MS-TESTING-COURSERA"
  },
  {
    id: "cert-react",
    title: "React Basics",
    issuer: "Meta (via Coursera)",
    date: "Certified",
    skills: ["React.js", "Component Architecture", "Hooks", "State & Props"],
    credentialUrl: "https://www.coursera.org",
    idCode: "META-REACT-COURSERA"
  },
  {
    id: "cert-js",
    title: "JavaScript Programming Essentials",
    issuer: "IBM (via Coursera)",
    date: "Certified",
    skills: ["JavaScript", "ES6+", "Asynchronous Programming", "DOM Manipulation"],
    credentialUrl: "https://www.coursera.org",
    idCode: "IBM-JS-COURSERA"
  }
];

export const achievements = [
  {
    id: "ach-rotaract",
    title: "Active Member - Rotaract Club of SUSL",
    category: "Leadership & Community",
    date: "Active",
    description: "Engaged in community service projects, youth leadership development, and collaborative university initiatives organized by the Rotaract Club of Sabaragamuwa University."
  },
  {
    id: "ach-sports",
    title: "Active Team Member - University Sports",
    category: "Extracurricular & Athletics",
    date: "Active",
    description: "Represented university sports teams at Sabaragamuwa University of Sri Lanka, cultivating strong teamwork, discipline, resilience, and time management."
  },
  {
    id: "ach-hiking",
    title: "Active Member - Hiking Club of SUSL",
    category: "Extracurricular & Outdoor",
    date: "Active",
    description: "Participating in outdoor expeditions, wilderness hikes, and collaborative team adventure activities organized by the SUSL Hiking Club."
  }
];

export const references = [
  {
    id: "ref-kaushalya",
    name: "P.K.D.K. Kaushalya",
    role: "Industrial Training Coordinator",
    department: "Department of Computing and Information Systems, Faculty of Computing",
    institution: "Sabaragamuwa University of Sri Lanka",
    phone: "+94 717063574",
    email: "kaushalya@foc.sab.ac.lk"
  },
  {
    id: "ref-naveen",
    name: "K.P. Vidura Naveen Pathirage",
    role: "Software Engineer",
    company: "Databox Technologies",
    phone: "+94 717797759",
    email: "naveen.pathirage@databoxtech.io"
  }
];
