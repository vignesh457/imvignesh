import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaJsSquare, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiSpring, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiRedux, SiGithub, SiDocker, SiReact, SiNextdotjs } from "react-icons/si";
import accenture from "@/assets/accenture.svg";
import tcs from "@/assets/tcs.svg";
import infosys from "@/assets/infosys.svg";
import virtusa from "@/assets/virtusa.svg";
import techm from "@/assets/techm.svg";
import discordBanner from "@/assets/discord-banner.webp";
import artnookBanner from "@/assets/artnook-banner.webp";
import spotifyBanner from "@/assets/spotify-banner.webp";
import numberhuntBanner from "@/assets/numberhunt-banner.webp";

export type ContactItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export type CompanyLogoItem = {
  node: React.ReactNode;
  title: string;
  href: string;
};

export type SkillIcon = {
  Icon: React.ComponentType<{ className?: string; size?: number | string }>;
  title: string;
  colorClass: string;
};

export type ExperienceContent = {
  position: string;
  company: string;
  location: string;
  date: string;
  keyResponsibilities: string[];
  technologies: string[];
};

export type ExperienceItem = {
  title: string;
  content: ExperienceContent;
};

export type ProjectItem = {
  title: string;
  image: React.ReactNode;
  description: string;
  technologies: string[];
  live_url: string;
  github_url: string;
};

const contactData: ContactItem[] = [
  {
    title: "Twitter",
    icon: <FaXTwitter size={20} color="#a0a0a0" />,
    href: "https://x.com/Vigneshwar80383",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={20} color="#a0a0a0" />,
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    title: "GitHub",
    icon: <FaGithub size={20} color="#a0a0a0" />,
    href: "https://github.com/vignesh457",
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode size={20} color="#a0a0a0" />,
    href: "https://leetcode.com/19R01A0457",
  },
  {
    title: "CodeChef",
    icon: <SiCodechef size={20} color="#a0a0a0" />,
    href: "https://www.codechef.com/users/vignesh_457",
  },
];

const clearCompanyLogoData: CompanyLogoItem[] = [
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={virtusa} alt="virtusa" className="w-full brightness-50" />
      </div>
    ),
    title: "Virtusa",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={infosys} alt="infosys" className="w-[150px]" />
      </div>
    ),
    title: "Infosys",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={tcs} alt="tcs" className="w-full brightness-70" />
      </div>
    ),
    title: "TCS",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={techm} alt="accenture" className="w-full" />
      </div>
    ),
    title: "Tech Mahindra",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={accenture} alt="accenture" className="w-full" />
      </div>
    ),
    title: "Accenture",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
];

const backendSkillData: SkillIcon[] = [
  { Icon: FaJava, title: "Java", colorClass: "text-red-400" },
  { Icon: SiSpring, title: "Spring Boot", colorClass: "text-green-500" },
  { Icon: SiExpress, title: "ExpressJS", colorClass: "text-white" },
  { Icon: FaNodeJs, title: "NodeJS", colorClass: "text-green-600" },
  { Icon: SiMongodb, title: "MongoDB", colorClass: "text-green-500" },
  { Icon: SiMysql, title: "MySQL", colorClass: "text-blue-500" },
  { Icon: SiPostgresql, title: "PostgreSQL", colorClass: "text-blue-500" },
  { Icon: FaPython, title: "Python", colorClass: "text-blue-500" },
  { Icon: SiGithub, title: "GitHub", colorClass: "text-white" },
  { Icon: SiDocker, title: "Docker", colorClass: "text-blue-400" },
];

const frontendSkillData: SkillIcon[] = [
  { Icon: SiReact, title: "ReactJS", colorClass: "text-blue-400" },
  { Icon: SiNextdotjs, title: "NextJS", colorClass: "text-white" },
  { Icon: SiTypescript, title: "TypeScript", colorClass: "text-blue-600" },
  { Icon: SiTailwindcss, title: "TailwindCSS", colorClass: "text-sky-400" },
  { Icon: SiRedux, title: "Redux", colorClass: "text-purple-600" },
  { Icon: FaJsSquare, title: "JavaScript", colorClass: "text-yellow-400" },
];

const experienceData: ExperienceItem[] = [
  {
    title: "Nov 2024",
    content: {
      position: "Associate Software Engineer",
      company: "Accenture",
      location: "Hyderabad",
      date: "Nov 2024 - Present",
      keyResponsibilities: [
        "Developed and maintained cloud-based microservices and web applications for DEFRA’s platform using Java,Node.js, and Azure services, ensuring 24×7 system stability",
        "Implemented zero-downtime deployments with Blue-Green strategies in Azure DevOps, set up proactive monitoring and alerting, and resolved critical production issues to improve reliability and user experience.",
        "Built and optimized event-driven integrations via Azure Service Bus and Dynamics 365, adding automated dead-letter queue handling and replay mechanisms that improved data accuracy and workflow efficiency.",
      ],
      technologies: ["Java", "Spring Boot", "Drop Wizard", "SQL"],
    },
  },
  {
    title: "Mar 2024",
    content: {
      position: "Associate Software Engineer",
      company: "Tech Mahindra",
      location: "Hyderabad",
      date: "Mar 2024 - Nov 2024",
      keyResponsibilities: [
        "Worked on internal tool using React.js and Node.js, streamlining workflows and improving team efficiency.",
        "Implemented role-based authentication and integrated internal APIs for secure, reliable data management.",
      ],
      technologies: ["React.js", "Node.js", "MongoDB"],
    },
  },
];

const projectData: ProjectItem[] = [
  {
    title: "Dummy Project",
    image: (
      <img 
          src={numberhuntBanner}
          alt="numberhuntBanner"
          className="h-full object-cover rounded-xl"
        />
    ), // Add image JSX or import here if available
    description: "Multiplayer reflex mobile game with real-time Socket.IO gameplay, supporting solo and online modes, animations, global leaderboard, seamless UI, and released on PhonePe Indus Appstore.",
    technologies: [
      "React Native",
      "TS",
      "Socket.IO",
      "Node.js",
      "Express",
      "Redux",
      "PostgreSQL"
    ],
    live_url: "", // Add if any
    github_url: "https://github.com/vignesh457/number-hunt" // Add repo link if any
  },
  {
    title: "NumberHunt",
    image: (
      <img 
          src={numberhuntBanner}
          alt="numberhuntBanner"
          className="h-full object-cover rounded-xl"
        />
    ), // Add image JSX or import here if available
    description: "Multiplayer reflex mobile game with real-time Socket.IO gameplay, supporting solo and online modes, animations, global leaderboard, seamless UI, and released on PhonePe Indus Appstore.",
    technologies: [
      "React Native",
      "TS",
      "Socket.IO",
      "Node.js",
      "Express",
      "Redux",
      "PostgreSQL"
    ],
    live_url: "", // Add if any
    github_url: "https://github.com/vignesh457/number-hunt" // Add repo link if any
  },
  {
    title: "ArtNook",
    image: (
      <img 
          src={artnookBanner}
          alt="artnookBanner"
          className="h-full object-cover rounded-xl"
        />
    ),
    description: "Responsive full-stack artist showcase with secure authentication, user authorization, profile management, artwork CRUD operations, enhanced performance, UI filters, and search features.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT Authentication",
      "RESTful APIs"
    ],
    live_url: "https://artnook.vercel.app",
    github_url: "https://github.com/vignesh457/makeurart"
  },
  {
    title: "Discord Clone",
    image: (
      <img 
          src={discordBanner}
          alt="discordBanner"
          className="h-full object-cover rounded-xl"
        />
    ),
    description: "Built a responsive real-time chat SPA using React and Firebase with Google login, Redux state management, enabling isolated user conversation channels and seamless, intuitive UI/UX.",
    technologies: [
      "React",
      "Firebase",
      "Redux",
      "JWT"
    ],
    live_url: "https://discord-vignesh.vercel.app",
    github_url: "https://github.com/vignesh457/discord-clone"
  },
  {
    title: "Spotify Clone",
    image: (
      <img 
          src={spotifyBanner}
          alt="spotifyBanner"
          className="h-full object-cover rounded-xl"
        />
    ),
    description: "Built a responsive Spotify clone with HTML, CSS, and JavaScript featuring asynchronous play controls, volume, progress bar, search, and interactive DOM-based event handling.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Asynchronous Programming",
      "DOM Manipulation"
    ],
    live_url: "https://spotify-vignesh.netlify.app",
    github_url: "https://github.com/vignesh457/spotify"
  }
];


export {
  contactData,
  clearCompanyLogoData,
  backendSkillData,
  frontendSkillData,
  experienceData,
  projectData,
};
