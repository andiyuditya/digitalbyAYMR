export interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link?: string;
  screenshots?: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: "Certification" | "Experience" | "Academic" | "Seminar" | "Training" | string;
  image: string;
  credentialId?: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const config = {
  developer: {
    name: "Dita",
    fullName: "Andi Yuditya Mustika Ramadani",
    title: "Web Developer | Data Analyst / Visualisasi | System Analyst",
    description: "Fresh graduate in Computer and Network Engineering from Politeknik Negeri Ujung Pandang (GPA: 3.81/4.00) with proven commercial and project experience in web development, data analysis, dashboard creation, and IT support using Laravel, PHP, MySQL, Power BI, Looker Studio, JavaScript, and Python."
  },
  social: {
    github: "andiyuditya",
    email: "andiyuditya.3@gmail.com",
    phone: "085342589658",
    linkedin: "https://www.linkedin.com/in/andiyuditya?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    location: "South Jakarta, Indonesia"
  },
  about: {
    title: "About Me",
    description: "I am a Web Developer, Data Analyst / Visualisasi, and System Analyst with an Applied Bachelor (D4) in Computer and Network Engineering from Politeknik Negeri Ujung Pandang (Graduated Aug 2025 with GPA: 3.81/4.00). Experienced in developing web-based systems, managing relational databases, building business intelligence dashboards, and supporting operational processes using Laravel, PHP, MySQL, Power BI, Looker Studio, JavaScript, and Python. Strong focus on Systems Engineering, Data Analysis, Data Visualization, Dashboarding, and Reporting with emphasis on troubleshooting, system reliability, database management, and continuous improvement of technology environments."
  },
  experiences: [
    {
      position: "System Analyst",
      company: "PT Yanagi Histalaraya",
      period: "Jan 2025 - Aug 2026",
      location: "Kendari, Indonesia",
      description: "Analyzed business processes, engineered database schemas, and led the development of a web-based monitoring platform using Laravel and Chart.js to visualize sales, raw material, and revenue data in real time.",
      responsibilities: [
        "Analyzed operational business requirements and translated them into technical system specifications and database schemas",
        "Designed and architected a web-based monitoring system to visualize sales, raw material, and revenue data in real time",
        "Built a business monitoring website using the Laravel framework to improve data management efficiency and reporting processes",
        "Implemented interactive data visualizations using Chart.js to simplify business performance analysis and support data-driven decision-making",
        "Managed the system database and ensured the integrity and accuracy of operational data",
        "Analyzed sales and revenue data to identify trends, evaluate business performance, and uncover opportunities for profit improvement",
        "Collaborated with operational and management teams to develop system features based on business requirements",
        "Performed system maintenance, troubleshooting, and continuous performance improvements to ensure application reliability"
      ],
      technologies: ["System Analysis", "Laravel", "PHP", "MySQL", "Chart.js", "Data Visualization", "Sales & Revenue Analysis", "Troubleshooting"]
    },
    {
      position: "Data Analyst Intern",
      company: "Kalla Group (PT Hadji Kalla)",
      period: "Sep 2024 - Jan 2025",
      location: "Makassar, Indonesia",
      description: "Developed Power BI dashboards to visualize sales demand structure, revenue, and profit to support business analysis. Integrated interactive dashboards into PT Hadji Kalla's internal portal, enabling Kalla Toyota users to monitor real-time operational data.",
      responsibilities: [
        "Developed Power BI dashboards to visualize sales demand structure, revenue, and profit to support business analysis",
        "Integrated dashboards into PT Hadji Kalla’s internal website, enabling Kalla Toyota users to monitor real-time data",
        "Processed business data and maintained dashboards based on operational and reporting needs",
        "Formulated relational data models with custom DAX measures for executive reporting"
      ],
      technologies: ["Power BI", "Data Visualization", "Business Intelligence", "DAX", "Data Modeling", "Internal System Integration"]
    },
    {
      position: "Merdeka Student Exchange (PMM 4) - Best Journal Award",
      company: "Campus Politeknik Negeri Malang",
      period: "Feb 2024 - Jun 2024",
      location: "Malang, East Java",
      description: "Participated in the national student exchange program by Kemendikbudristek & LPDP involving academic, cultural, and collaborative initiatives. Honored with the Best Journal Award among PMM Batch 4 polytechnic participants across Indonesia.",
      responsibilities: [
        "Participated in a national student exchange program involving academic, cultural, and collaborative activities",
        "Received the Best Journal Award among PMM Batch 4 participants from polytechnics across Indonesia",
        "Collaborated with multidisciplinary engineering teams on applied computing coursework and inter-regional research"
      ],
      technologies: ["Academic Exchange", "Applied Informatics", "Inter-Campus Collaboration", "Technical Journaling"]
    },
    {
      position: "Research & Development Coordinator",
      company: "Computer and Network Community (CNC) PNUP",
      period: "Sep 2023 - Dec 2024",
      location: "Makassar, Indonesia",
      description: "Coordinated research and development activities and supported technology-focused organizational programs. Collaborated with community members to incubate ideas, projects, and technological computing initiatives.",
      responsibilities: [
        "Coordinated research and development activities and supported technology-focused organizational programs",
        "Collaborated with members to develop ideas, projects, and initiatives related to technology and computing",
        "Facilitated technology workshops and community technical mentorship"
      ],
      technologies: ["R&D Coordination", "Technology Incubation", "Project Management", "System Architecture"]
    },
    {
      position: "Human Resources Staff",
      company: "Himpunan Mahasiswa Teknik Informatika dan Komputer PNUP",
      period: "Feb 2025 - Jul 2025",
      location: "Makassar, Indonesia",
      description: "Supported HR activities, member administration, and organizational programs. Collaborated with team members to coordinate student activities and maintain effective internal communication.",
      responsibilities: [
        "Supported HR activities, member administration, and organizational programs",
        "Collaborated with team members to coordinate activities and maintain effective internal communication"
      ],
      technologies: ["HR Operations", "Organizational Administration", "Internal Communications"]
    },
    {
      position: "Secretariat Staff & Event Volunteer",
      company: "UKM Bahasa Politeknik Negeri Ujung Pandang",
      period: "Sep 2023 - Feb 2024",
      location: "Makassar, Indonesia",
      description: "Managed organizational documentation, correspondence, and administrative activities. Supported event preparation and participated as a volunteer in social community outreach at Tobalu Orphanage.",
      responsibilities: [
        "Managed organizational documentation, correspondence, and administrative activities",
        "Supported event preparation and coordination with members and other divisions",
        "Contributed to charity event activities through teamwork and community engagement at Tobalu Orphanage"
      ],
      technologies: ["Documentation", "Administrative Correspondence", "Community Service"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Website Monitoring & Visualization of Marine Products Distribution (Final Thesis)",
      category: "Data Analytics & Web Systems",
      technologies: "PHP, Laravel, Bootstrap, MySQL, Chart.js",
      image: "/images/projects/fishflow-main.png",
      description: "Developed a web-based monitoring system (FishFlow) to efficiently track the distribution of marine products. Implemented interactive data visualization using Chart.js to provide insights into distribution patterns, built real-time reporting features for business decision-making, and centralized distribution, sales, and inventory data into a single integrated platform.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 2,
      title: "Demand Structure Dashboard Monitoring",
      category: "Power BI & Business Intelligence",
      technologies: "Power BI, Data Visualization, Business Intelligence, DAX, Excel",
      image: "/images/projects/demand-structure-main.png",
      description: "Designed and developed a Power BI-based demand structure dashboard to monitor sales, profit, and revenue performance for PT Hadji Kalla (Kalla Toyota). Enabled users to visualize business data through interactive charts and reports for real-time monitoring and data-driven insights through the company's internal system.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 3,
      title: "Fingerprint Attendance System for Educational Staff of PNUP Using IoT",
      category: "IoT, Networking & System Security",
      technologies: "IoT, Networking, System Design, Security, ESP32, MQTT, Python, MySQL",
      image: "/images/projects/fingerprint-iot-main.png",
      description: "Designed an IoT-based fingerprint attendance system for educational staff, covering network architecture, algorithms, system security, and hardware requirements. Conducted surveys with staff to analyze existing processes and developed a secure, efficient attendance solution to support digital administrative transformation.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 4,
      title: "Android-based Cashier Application for UMKM Teh Tubruk Khas Solo",
      category: "Mobile Application (Android)",
      technologies: "Android Studio, Kotlin, Firebase, Figma",
      image: "/images/projects/cashier-teh-tubruk-main.png",
      description: "Designed the cashier application interface using Figma to provide an intuitive and modern user experience. Developed the front-end using Android Studio with Kotlin programming language, and built a real-time database using Firebase to support transaction recording and efficient data synchronization.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 5,
      title: "Smart Water Meter Reading with IoT & Cloud OCR",
      category: "IoT & Cloud Computer Vision",
      technologies: "Python, Google Cloud Platform (GCP), Optical Character Recognition (OCR), IoT Sensor, MySQL, Web Portal",
      image: "/images/projects/water-meter-ocr-main.png",
      description: "An automated end-to-end utility telemetry system. IoT camera nodes capture analog water meter counters and stream frames to Google Cloud Platform, where OCR algorithms extract numeric readings into a MySQL database, providing real-time consumption metrics on a dedicated web portal.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 6,
      title: "Campus Network Infrastructure & Wi-Fi Heatmap Optimization",
      category: "Network Engineering & Infrastructure",
      technologies: "MikroTik CRS125, Ubiquiti UniFi AP AC Pro, VLAN, IPv4 Subnetting, RF Heatmap Simulation",
      image: "/images/projects/network-design-main.png",
      description: "Complete enterprise network architecture and Wi-Fi signal propagation design for the Accounting Building at PNUP. Optimized Access Point placements through RF attenuation heatmap modeling (-40 to -74 dBm), implemented VLAN segmentation for offices and lecture halls, and configured high-speed switch backbones.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 7,
      title: "School Information & PPDB Admission System (SMAN 5 Bone)",
      category: "Web Development & Information Systems",
      technologies: "PHP, MySQL, JavaScript, HTML5, CSS3, Bootstrap",
      image: "/images/projects/school-sims-main.png",
      description: "A public school portal and digital student admission (PPDB) platform for SMAN 5 Bone. Features academic announcements, extracurricular activity galleries, downloadable registration materials, an online admission submission workflow, and a protected administrative backend.",
      link: "https://github.com/andiyuditya"
    },
    {
      id: 8,
      title: "Blooms for You - Bouquet Catalog & Ordering App",
      category: "Mobile Application (Android)",
      technologies: "Android Studio, Java, Kotlin, XML, SQLite",
      image: "/images/projects/blooms-bouquet-main.png",
      description: "A native Android e-commerce and floral guide application presenting assorted bouquet designs (Rose, Sunflower, Baby Breath, Lily, Carnation, Peony) alongside botanical symbolism, price breakdowns, and simple order placement.",
      link: "https://github.com/andiyuditya"
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Web Programming Certification – BNSP",
      issuer: "BNSP & LSP Politeknik Negeri Ujung Pandang",
      year: "2025",
      category: "Certification",
      image: "/images/certificates/cert-bnsp-web-programmer.png",
      credentialId: "No. Reg. TIK 119 00466 2025",
      description: "Demonstrated competency in web programming and application development. Applied programming, database integration, and web development concepts as a certified Computer Programmer."
    },
    {
      id: 2,
      title: "Test of English Proficiency and Academic (TOEFL Score: 557)",
      issuer: "Elskill English Course",
      year: "2025",
      category: "Certification",
      image: "/images/certificates/cert-toefl-557.png",
      credentialId: "No: 39984/S-T/EEC/V/2025",
      description: "Demonstrated English proficiency in listening comprehension, structure and written expression, and reading comprehension with a total score of 557."
    },
    {
      id: 3,
      title: "Sertifikat Pengalaman Kerja: Data Analyst Intern",
      issuer: "PT Hadji Kalla (Kalla Toyota)",
      year: "2024 - 2025",
      category: "Experience",
      image: "/images/certificates/cert-kalla-toyota.png",
      credentialId: "Makassar, 3 Jan 2025",
      description: "Penghargaan atas keberhasilan menyelesaikan tugas di PT Hadji Kalla (Kalla Toyota) pada divisi Sales Operation & Program, merancang Power BI demand structure dashboard dan monitoring real-time penjualan ritel."
    },
    {
      id: 4,
      title: "Merdeka Student Exchange Batch 4 (PMM)",
      issuer: "Kemendikbudristek & LPDP (PNUP ke POLINEMA)",
      year: "2024",
      category: "Academic",
      image: "/images/certificates/cert-pmm-kemendikbud-polinema.png",
      credentialId: "Nomor: 196307051989111001",
      description: "Participated in a national student exchange program involving academic and cross-cultural learning. Developed collaboration, communication, adaptability, and interpersonal skills through diverse learning environments."
    },
    {
      id: 5,
      title: "National Seminar on Socialization of Preparation for Digital Talent",
      issuer: "BAKTI Kominfo Wilayah Kerja Makassar",
      year: "2023",
      category: "Training",
      image: "/images/certificates/cert-bakti-kominfo.png",
      credentialId: "Makassar, 23-24 Nov 2023",
      description: "Gained insights into digital talent development and industry-relevant technology skills. Learned about the importance of digital competencies in supporting Indonesia's digital transformation."
    },
    {
      id: 6,
      title: "Expert Talk: Business Intelligence / Enterprise System",
      issuer: "5th Carnaval IMWORK 2023 - Universitas Sriwijaya",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-imwork-business-intelligence.jpg",
      credentialId: "Palembang, Oct 2023",
      description: "Gained insights into Business Intelligence and Enterprise Systems in modern organizations. Learned how data and enterprise technology support data-driven decision-making and business processes."
    },
    {
      id: 7,
      title: "Expert Talk: Cyber Security",
      issuer: "5th Carnaval IMWORK 2023 - Universitas Sriwijaya",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-imwork-cyber-security.jpg",
      credentialId: "Palembang, Oct 2023",
      description: "Gained knowledge of cybersecurity concepts, digital threats, and information security risks. Learned the importance of security awareness and preventive measures in protecting digital systems."
    },
    {
      id: 8,
      title: "Challenges and Strategies in Digital Transformation in Indonesia",
      issuer: "5th Carnaval IMWORK 2023 - Universitas Sriwijaya",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-imwork-digital-transformation.jpg",
      credentialId: "Palembang, Oct 2023",
      description: "Gained insights into challenges and opportunities in implementing digital transformation. Learned strategies for leveraging technology and innovation to improve organizational processes."
    },
    {
      id: 9,
      title: "Volunteer – Charity Event UKM Bahasa PNUP | Tobalu Orphanage",
      issuer: "UKM Bahasa Politeknik Negeri Ujung Pandang",
      year: "2023",
      category: "Academic",
      image: "/images/certificates/cert-baksos-ukm-bahasa.jpg",
      credentialId: "Apr 2023",
      description: "Participated as a volunteer in a charity event at Tobalu Orphanage, supporting social and community service activities through teamwork, communication, and engagement."
    },
    {
      id: 10,
      title: "Webinar Nasional K3 2026: Occupational Health & Safety",
      issuer: "Poltekkes Kerta Cendekia Sidoarjo",
      year: "2026",
      category: "Training",
      image: "/images/certificates/cert-k3-webinar-nasional.png",
      credentialId: "024/SERT/PKC/WEBNAS-K3/VII/2026",
      description: "Occupational Health and Safety Beyond Compliance: Protecting People, Enhancing Performance – Perspektif Implementasi K3 pada Industri Migas dan Pertambangan."
    },
    {
      id: 11,
      title: "Seminar Nasional Deep Learning: A New Hope of Future Transformation",
      issuer: "Himpunan Mahasiswa Elektro PNUP",
      year: "2022",
      category: "Seminar",
      image: "/images/certificates/cert-deep-learning-pnup.jpg",
      credentialId: "Makassar, 6 Mar 2022",
      description: "Eksplorasi arsitektur jaringan saraf tiruan, computer vision, dan implementasi deep learning dalam transformasi rekayasa teknologi masa depan."
    },
    {
      id: 12,
      title: "Seminar Nasional Cyber Security: Keamanan Informasi Digital",
      issuer: "Seminar Nasional Cyber Security PNUP",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-cyber-security-nasional.jpg",
      credentialId: "Jan 2023",
      description: "Moderator dan peserta seminar nasional cyber security: pendalaman tata kelola keamanan informasi digital dan mitigasi insiden siber."
    },
    {
      id: 13,
      title: "Seminar Nasional Kewirausahaan: Society 5.0",
      issuer: "Himpunan Mahasiswa Administrasi Niaga PNUP",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-seminar-kewirausahaan-pnup.png",
      credentialId: "75/PL10/DT.01.01/2023",
      description: "Be productive, creative and innovative with entrepreneurship in society 5.0."
    },
    {
      id: 14,
      title: "Pelatihan Bisnis Digital Merdeka Belajar",
      issuer: "Program Merdeka Belajar Kampus Merdeka",
      year: "2023",
      category: "Training",
      image: "/images/certificates/cert-bisnis-digital.jpg",
      credentialId: "Digital Business Track",
      description: "Pengembangan strategi bisnis digital, analisis data pasar, dan model bisnis teknologi adaptif."
    },
    {
      id: 15,
      title: "Learning Weekend Special Edition: Tech Exploration",
      issuer: "Tech & Professional Development Program",
      year: "2023",
      category: "Training",
      image: "/images/certificates/cert-learning-weekend.jpg",
      credentialId: "Special Edition Certificate",
      description: "Pengembangan keterampilan teknis intensif, collaborative engineering, dan pemecahan masalah praktis."
    },
    {
      id: 16,
      title: "Seminar Membangun Pola Pikir & Komunikasi Menuju Society 5.0",
      issuer: "Forum Kolaborasi Akademik & Mahasiswa",
      year: "2023",
      category: "Seminar",
      image: "/images/certificates/cert-society-5-komunikasi.jpg",
      credentialId: "Society 5.0 Forum",
      description: "Peningkatan keterampilan komunikasi profesional, interpersonal skills, dan kepemimpinan di era digital terhubung."
    }
  ],
  contact: {
    email: "andiyuditya.3@gmail.com",
    phone: "085342589658",
    github: "https://github.com/andiyuditya",
    linkedin: "https://www.linkedin.com/in/andiyuditya?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "https://x.com/andiyuditya",
    facebook: "https://facebook.com/andiyuditya",
    instagram: "https://instagram.com/andiyuditya",
    location: "South Jakarta, Indonesia"
  },
  skills: {
    webDev: {
      title: "WEB DEVELOPER",
      description: "Full-stack web applications, business monitoring portals & secure APIs",
      details: "Certified Web Programmer (BNSP) proficient in architecting responsive web monitoring systems, business portals, and database-driven solutions using Laravel, PHP, JavaScript, and Bootstrap. Experienced in secure RESTful APIs, modern frontend styling, and complete web system lifecycle.",
      tools: ["PHP", "Laravel", "JavaScript", "HTML5 / CSS3", "Bootstrap", "MySQL", "REST APIs", "Git", "XAMPP"]
    },
    dataAnalyst: {
      title: "DATA ANALYST / VISUALISASI",
      description: "Power BI dashboards, Looker Studio & interactive data visualization",
      details: "Specializing in business intelligence, sales demand structure analytics, and real-time operational reporting. Skilled in building interactive dashboards with Power BI, DAX, Looker Studio, Chart.js, and Excel to empower data-driven business decisions.",
      tools: ["Power BI", "Looker Studio", "Chart.js", "Microsoft Excel", "DAX", "Data Modeling", "ETL", "Sales & Revenue Analysis", "Reporting"]
    },
    systemAnalyst: {
      title: "SYSTEM ANALYST",
      description: "System architecture, requirements modeling & database management",
      details: "Experienced in analyzing operational business processes and translating complex business requirements into reliable system architectures. Skilled in UML/ERD modeling, relational database design (MySQL, Oracle SQL, SQL Server, Firebase), system reliability, troubleshooting, and UI/UX prototyping.",
      tools: ["System Analysis", "Requirements Modeling", "UML / ERD", "Database Design", "Oracle SQL", "SQL Server", "Firebase", "Troubleshooting", "Figma"]
    },
    get develop() {
      return this.webDev;
    },
    get design() {
      return this.dataAnalyst;
    }
  }
};
