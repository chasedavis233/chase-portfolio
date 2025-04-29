export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'os' | 'systems' | 'tools' | 'software';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  testimonials: Testimonial[];
}

const resumeData: ResumeData = {
  name: "Chase Davis",
  title: "Computer Science Student",
  about: `Passionate and results-driven Full Stack Developer with over 8 years of experience designing and implementing innovative web solutions. Specialized in creating elegant, user-centric applications with modern JavaScript frameworks. Committed to writing clean, maintainable code and staying at the forefront of emerging technologies.`,
  email: "chasejdavis@gmail.com",
  phone: "(208) 614-7215",
  location: "Boise, ID",
  
socials: [
  {
    name: "GitHub",
    url: "https://github.com/chasedavis233",
    icon: "Github"
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/chase-davis-159995226/", 
    icon: "Linkedin"
  },
],

skills: [
  // 🖥️ Operating Systems
  { name: "Windows", level: 95, category: "os", icon: "windows" },
  { name: "macOS", level: 85, category: "os", icon: "apple" },
  { name: "Linux", level: 80, category: "os", icon: "linux" },

  // 🔧 Hardware & Systems
  { name: "PC Hardware Assembly", level: 95, category: "systems", icon: "cpu" },
  { name: "PC Hardware Understanding", level: 95, category: "systems", icon: "cpu" },
  { name: "Computer Troubleshooting", level: 90, category: "systems", icon: "tools" },
  { name: "Setup & Config", level: 85, category: "systems", icon: "settings" },

  // 🛠️ Developer Tools
  { name: "SSH", level: 90, category: "tools", icon: "terminal" },
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 95, category: "tools", icon: "github" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
  { name: "IntelliJ IDEA", level: 80, category: "tools", icon: "intellij" },
  { name: "Shell / Bash", level: 80, category: "tools", icon: "terminal" },
  { name: "Postman", level: 70, category: "tools", icon: "api" },


  // 💻 Software
  { name: "Onyx (Linux Cluster)", level: 85, category: "software", icon: "server" },
  { name: "Wireshark", level: 65, category: "software", icon: "network" },
  { name: "Virtual Machines (VMware/VirtualBox)", level: 75, category: "software", icon: "box" },
  { name: "Discord", level: 90, category: "software", icon: "message-circle" },
  { name: "Cyberduck", level: 95, category: "software", icon: "upload" },
  { name: "FileZilla", level: 95, category: "software", icon: "upload-cloud" },
],
  experiences: [
    {
      title: "Airport Ramp Agent",
      company: 'G2 Secure Staff',
      location: "Boise Airport - BOI, 3201 W Airport Way, Boise, ID 83705",
      period: 'June 2022 - Present',
      description: [
        'Safely marshaled aircraft for arrivals and departures, coordinating with aircrew to maintain precise schedules.',
        'Operated various heavy machinery and service vehicles, ensuring timely cargo handling.',
        'Conducted security checks on aircraft and supported ground operations during critical time frames',
        'Demonstrated strong adherence to safety protocols and communication under pressure.',
      ],
      technologies: [],
    },
    {
      title: "Lawn Care Technician",
      company: 'Weedman Lawn Care',
      location: "2269 E Commercial St, Meridian, ID 83642",
      period: 'June 2021 – August 2021',
      description: [
        'Performed fertilizer, weed control, and insect applications with safety and precision.',
        'Delivered excellent customer service while managing multiple service visits daily.',
        'Sold additional services and secured new clients, contributing to revenue growth.',
        'Handled hazardous chemicals with care and ensured environmental compliance.',
      ],
      technologies: [],
    },
    // {
    //   title: "Computer Science Student",
    //   company: 'WebSolutions LLC',
    //   location: "Boise, ID",
    //   period: 'Aug 2015 - Apr 2017',
    //   description: [
    //     'Developed responsive UI components using HTML, CSS, and JavaScript',
    //     'Implemented client-side validation and form handling',
    //     'Optimized web performance by reducing load times by 30%',
    //     'Collaborated with backend developers to integrate APIs',
    //   ],
    //   technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
    // },
  ],
  projects: [
    {
      title: "Website on Lua",
      description: 'A full-featured e-commerce platform with product catalog, cart functionality, and payment integration.',
      image: 'https://images.pexels.com/photos/6169/woman-hand-smartphone-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/Bloop1542/CS354-LW-Robins/tree/main',
    },
    {
      title: "Games!",
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: 'https://task-app-demo.com',
      github: 'https://github.com/chasedavis233/MyGames',
    },
    {
      title: "State machines",
      description: 'A weather forecasting application with interactive maps and detailed data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'D3.js', 'Weather API'],
      link: 'https://weather-dash.demo.com',
      github: 'https://github.com/chasedavis233/CS361-Sate-Machines/tree/main',
    },
    {
      title: "ping pong (330) or Tycoon",
      description: 'A dashboard for analyzing social media engagement and audience insights.',
      image: 'https://images.pexels.com/photos/7567491/pexels-photo-7567491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'Chart.js', 'Social APIs'],
      link: 'https://social-analytics.demo.com',
      github: 'https://github.com/chasedavis233',
    },
  ],
  education: [
    {
      degree: 'A Bachelor of Science in Computer Science',
      institution: 'Boise State University',
      location: 'Boise, ID',
      period: '2021 - Present',
      description: `I am working toward a degree in Computer Science with a focus on cybersecurity. Lately, I have been diving into things like ethical hacking, network defense, and secure coding. It's been a great mix of technical challenges and hands-on projects that really show how important security is in today's tech world. I am expected to graduate in December of 2025.

Some of my relevant coursework:

• CS 208 – Full Stack Web Development: Built dynamic front-end and back-end applications using HTML, CSS, JS  
• CS 253 – Software Development in C: Mastered pointers, memory management, and systems-level programming  
• CS 321 – Data Structures: Implemented heaps, trees, graphs; explored BFS/DFS and hashing  
• ECE 330 – Microprocessors: Programmed in assembly; understood memory systems and I/O interfacing  
• CS 155 – Version Control: Utilized Git for branching, pull requests, and merge conflict resolution  
• CS 331 – Computer Security (In Progress): Exploring threats, encryption, and network security fundamentals`

    },
  ],
  

testimonials: [
  {
    name: "Security+",
    position: "Certification",
    company: "CompTIA",
    avatar: "https://i.imgur.com/PbIUs7a.png",
    text: "The CompTIA Security+ certification validates baseline skills needed to perform core security functions and pursue an IT security career."
  },
  {
    name: "BTL1",
    position: "Certification",
    company: "Security Blue Team",
    avatar: "https://i.imgur.com/YrO7P8F.png",
    text: "Blue Team Level 1 (BTL1) is a foundational certification for aspiring defenders and analysts, covering core defensive tools and concepts."
  },
  {
    name: "CompTIA A+",
    position: "Certification",
    company: "CompTIA",
    avatar: "https://i.imgur.com/Evln6kD.png",
    text: "The CompTIA A+ certification is an industry standard for launching IT careers, covering essential support skills, hardware, software, and troubleshooting."
  },
],


};

export default resumeData;