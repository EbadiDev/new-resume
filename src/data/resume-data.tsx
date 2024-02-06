import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ali Ebadi",
  initials: "AE",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/place/Tehran",
  about:
    "Machine Learning Engineer focused on building tools with extra attention to detail",
  summary:
    "AI enthusiast in Computer Engineering. Committed to inclusive tech for all, especially the deaf and hard-of-hearing. Skilled in ML, Computer Vision, and NLP. Creating transformative solutions like real-time captioning and sign language recognition. Passionate about collaborative work and making a positive impact through accessible AI innovations.",
  avatarUrl: "https://avatars.githubusercontent.com/u/7106201?v=4",
  personalWebsiteUrl: "https://ali-ebadi.ir",
  contact: {
    email: "aliebadi140@gmail.com",
    tel: "-",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/EbadiDev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aliebadi-dev/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ebadidev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Fereshtegaan International Branch Azad University",
      degree: "Bachelor's Degree in Computer engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Social and Cognitive Robotics Research Lab, Sharif University of Technology",
      link: "https://en.sharif.edu/en/web/sharif-en/w/how-socio-cognitive-robotics-laboratory-of-sharif-university-of-technology-assists-children-in-education-and-healthcare-",
      badges: [],
      title: "Machine Learning Apprentice Engineer",
      logo: ClevertechLogo,
      start: "2023",
      end: "Now",
      description:
        "Hope of getting intership",
    },
    {
      company: "Yasan Academy",
      link: "https://yasanacademy.ir/",
      badges: [],
      title: "Python Tutor",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2023",
      description:
        "Python instructor with 1 year experience teaching Python programming to students of all skill levels.",
    },
    {
      company: "Bitbaan",
      link: "https://bitbaan.com/fa/home",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2022",
      end: "2023",
      description: "Creating and testing software",
    },
  ],
  skills: [
    "Python",
    "Machine Learning",
    "Algorithms",
    "C++/C",
    "Rust 🦀",
    "Django",
    "SQL",
  ],
  projects: [
    {
      title: "Battery conservation",
      techStack: [
        "Side Project",
        "Python",
        "Tkinter"
      ],
      description: "Lenovo Battery conservation mode on kde Plasma",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/Lenovo-Battery-conservation-mode-on-kde",
      },
    },
    {
      title: " CPU Scheduling",
      techStack: ["Side Project", "Python"],
      description:
        "Calculation program which simulate SJF ( Shortest Job First ) and RR ( Round Robin ) CPU scheduling algorithm",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/CPU-Scheduling-Calculation",
      },
    },
    {
      title: "Packer Detection",
      techStack: ["C++", "C", "Win API"],
      description:
        "Packer detection tool",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/bitbaan/tree/main/PackerDetection",
      },
    },
    {
      title: "Quarantine",
      techStack: ["C++", "Win API"],
      description:
        "Quarantine system to securely isolate suspicious files identified via scanning.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/bitbaan/tree/main/Quarantine",
      },
    },
    {
      title: "RegistryScan",
      techStack: ["C++", "Win API", "Bash"],
      description:
        "Registry scanning module using the Windows API to detect persistence mechanisms",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/bitbaan/tree/main/RegistryScan",
      },
    },
    {
      title: "ContainerReader",
      techStack: ["C++", "Python", "Win API"],
      description: "Implemented cryptographic hash calculations including MD5, SHA1 ,and SHA256 on both file contents and inside compressed archives",
      logo: YearProgressLogo,
      link: {
        label: "github.com",
        href: "https://github.com/EbadiDev/bitbaan/tree/main/ContainerReader",
      },
    },
  ],
} as const;
