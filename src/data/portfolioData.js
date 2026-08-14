export const PORTFOLIO_DATA = {
  personal: {
    name: "Gunashekhar Ammajigari",
    title: "Hi, I'm Gunashekhar Ammajigari",
    subtitle: "B.Tech CSE Student | Full Stack Developer",
    description: "Passionate about building web applications, learning modern technologies, and solving real-world problems through software.",
    role: "Full Stack Developer",
    subRoles: ["B.Tech CSE Student", "Java & Web Developer"],
    tagline: "Passionate about building web applications, learning modern technologies, and solving real-world problems through software.",
    education: {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Kalasalingam Academy of Research and Education",
      graduationYear: 2028,
      status: "Undergraduate Student"
    },
    profileImage: "/assets/images/IMG.jpg",
    resumeUrl: "/assets/resume/Gunashekhar_Resume.pdf",
    socials: {
      github: "https://github.com/guna5045",
      linkedin: "https://www.linkedin.com/in/gunashekhar-ammajigari",
      email: "iamgunashekhar555@gmail.com"
    }
  },

  about: {
    title: "About Me",
    bio: [
      "I am a Computer Science and Engineering student at Kalasalingam Academy of Research and Education.",
      "I enjoy building full-stack web applications, exploring new technologies, and continuously improving my technical skills.",
      "My interests include web development, backend systems, cloud technologies, and software engineering fundamentals."
    ],
    highlights: [
      { label: "Degree Program", value: "B.Tech CSE (Grad 2028)" },
      { label: "Institution", value: "Kalasalingam University" },
      { label: "Core Stack", value: "React, Node, PostgreSQL" },
      { label: "Primary Language", value: "Java & JavaScript" }
    ]
  },

  // Timeline Items
  timeline: [
    {
      year: "2024",
      title: "Started B.Tech CSE",
      institution: "Kalasalingam Academy of Research and Education",
      description: "Commenced undergraduate studies in Computer Science and Engineering focusing on Java programming, Discrete Mathematics, Data Structures, and Core CS fundamentals."
    },
    {
      year: "2025",
      title: "Started Full Stack Development",
      institution: "Web Engineering Focus",
      description: "Mastered modern JavaScript (ES6+), React.js, Node.js, Express.js REST API creation, and PostgreSQL relational database modeling."
    },
    {
      year: "2025",
      title: "Became Creative Head of IKSC",
      institution: "Institution Innovation & Student Club",
      description: "Appointed to lead technical design workshops, hackathon organization, and student tech community initiatives across campus."
    },
    {
      year: "2025",
      title: "Participated in Smart India Hackathon",
      institution: "Ministry of Education & Govt of India",
      description: "Collaborated in national level hackathon solving real-world civic and government problem statements under strict deadline constraints."
    },
    {
      year: "2026",
      title: "Presented Project at ICTIEE 2026 Conference",
      institution: "International Conference on Engineering Education",
      description: "Selected to showcase technical engineering project before global academia and industry leaders at ICTIEE 2026."
    },
    {
      year: "2026",
      title: "Won IEEE Hackathon",
      institution: "IEEE Student Branch",
      description: "Awarded 1st Place for building an automated problem-solving pipeline evaluated on system latency and execution efficiency."
    },
    {
      year: "2026",
      title: "Built Civic Resolve",
      institution: "Crowdsourced Civic Platform",
      description: "Architected end-to-end civic reporting platform with geospatial upvoting, automated duplicate detection, and department SLA tracking."
    },
    {
      year: "2026",
      title: "Built Apex Pulse",
      institution: "Real-Time Telemetry & Observability Engine",
      description: "Engineered high-throughput API observability platform leveraging Redis stream queues, PostgreSQL, Docker containers, and AWS."
    },
    {
      year: "2027",
      title: "Continuous Learning & Growth",
      institution: "Software Development & Systems",
      description: "Continuously improving software engineering skills, building projects, exploring cloud technologies, and learning modern development practices."
    }
  ],

  // Simplified Developer Philosophy
  philosophy: [
    {
      title: "Clean Code & Readability",
      desc: "Writing modular, well-structured, and expressive code that is easy for teammates to understand and maintain.",
      icon: "Code"
    },
    {
      title: "User Experience First",
      desc: "Designing intuitive, responsive, and accessible interfaces that make applications simple and enjoyable to use.",
      icon: "Users"
    },
    {
      title: "Practical Problem Solving",
      desc: "Breaking down complex requirements into manageable steps and building practical software solutions.",
      icon: "Brain"
    },
    {
      title: "Scalability & Performance",
      desc: "Structuring backend APIs and database queries efficiently to deliver fast response times.",
      icon: "Zap"
    },
    {
      title: "Cloud & Containerization",
      desc: "Utilizing Docker and cloud platform services to deploy reliable, isolated application environments.",
      icon: "Cloud"
    },
    {
      title: "Continuous Learning",
      desc: "Actively exploring modern technologies, frameworks, and engineering practices to expand my technical skills.",
      icon: "BookOpen"
    }
  ],

  // Accomplishments
  achievements: [
    {
      id: "ieee-winner",
      title: "IEEE Hackathon Winner",
      organization: "IEEE Student Branch",
      category: "Hackathon Champion",
      badge: "1st Place",
      description: "Won 1st place for developing an automated real-time data processing pipeline evaluated on execution speed and accuracy.",
      icon: "Award"
    },
    {
      id: "hackathon-winner",
      title: "Hackathon Winner",
      organization: "Inter-College Tech Fest",
      category: "Coding & Development",
      badge: "1st Place",
      description: "Secured 1st place by engineering a functional full-stack web application within a 24-hour hackathon timeline.",
      icon: "Trophy"
    },
    {
      id: "ictiee-2026",
      title: "ICTIEE 2026 Project Presenter",
      organization: "International Conference on Engineering Education",
      category: "Research Presentation",
      badge: "Presenter",
      description: "Selected to present software engineering project work at the ICTIEE 2026 international conference.",
      icon: "Presentation"
    },
    {
      id: "sih-participant",
      title: "Smart India Hackathon Participant",
      organization: "Ministry of Education & Govt. of India",
      category: "National Hackathon",
      badge: "Participant",
      description: "Participated in the national Smart India Hackathon solving real-world public sector problem statements.",
      icon: "Flag"
    },
    {
      id: "iksc-creative-head",
      title: "Creative Head - IKSC",
      organization: "Institution Innovation & Student Club",
      category: "Student Leadership",
      badge: "Leadership",
      description: "Led technical workshops, design activities, and student tech community initiatives across campus.",
      icon: "Users"
    },
    {
      id: "design-thinking",
      title: "Design Thinking Practitioner",
      organization: "Kalasalingam University",
      category: "Product & UI Methodology",
      badge: "Certified",
      description: "Completed training in 5-stage human-centered design thinking for user-focused software development.",
      icon: "Lightbulb"
    }
  ],

  // Featured Highlights
  highlights: [
    {
      title: "Software Engineering",
      desc: "Computer science fundamentals, Data Structures, Object-Oriented Design, and Software Architecture.",
      icon: "Cpu"
    },
    {
      title: "Full Stack Development",
      desc: "Building web applications with React.js, Node.js, Express.js, and PostgreSQL.",
      icon: "Layers"
    },
    {
      title: "Cloud & Tools",
      desc: "Containerization with Docker, cloud infrastructure with AWS, and Git version control.",
      icon: "Cloud"
    },
    {
      title: "Problem Solving",
      desc: "Algorithmic thinking, data structure selection, and query optimization.",
      icon: "Brain"
    },
    {
      title: "Design Thinking",
      desc: "Human-centered design, prototyping, and responsive user interface development.",
      icon: "Layout"
    },
    {
      title: "Leadership & Community",
      desc: "Mentoring peer developers, organizing workshops, and student tech club leadership.",
      icon: "Users"
    }
  ],

  skillCategories: [
    {
      category: "Languages",
      icon: "Code2",
      description: "Primary programming languages for development.",
      skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frontend",
      icon: "Layout",
      description: "Building responsive, modern user interfaces.",
      skills: ["React.js", "Component Architecture", "State Management", "DOM Manipulation", "Vanilla CSS"]
    },
    {
      category: "Backend",
      icon: "Server",
      description: "Designing RESTful APIs and server applications.",
      skills: ["Node.js", "Express.js", "REST APIs", "API Routing", "Middleware Architecture"]
    },
    {
      category: "Database",
      icon: "Database",
      description: "Relational database design and query execution.",
      skills: ["PostgreSQL", "Relational Modeling", "Indexing", "ACID Compliance"]
    },
    {
      category: "Cloud",
      icon: "Cloud",
      description: "Cloud services and deployment.",
      skills: ["AWS EC2", "AWS S3", "AWS RDS", "CloudFront"]
    },
    {
      category: "Tools & DevOps",
      icon: "Wrench",
      description: "Containerization and development tooling.",
      skills: ["Docker", "Git", "GitHub", "Linux Basics", "Postman", "Vite"]
    },
    {
      category: "Core Computer Science",
      icon: "Cpu",
      description: "Fundamental CS engineering principles.",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks"]
    }
  ]
};
