import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import accenture from "@/assets/accenture.svg";
import tcs from "@/assets/tcs.svg";
import infosys from "@/assets/infosys.svg";
import virtusa from "@/assets/virtusa.svg";
import { FaJsSquare, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiSpring,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiGithub,
  SiDocker,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export type ContactItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

// Provide icon as JSX element directly
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

const clearCompanyLogoData = [
  {
    node: (
      <div>
        <img src={infosys} alt="infosys" className="w-[150px]" />
      </div>
    ),
    title: "Infosys",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={tcs} alt="tcs" className="w-full" />
      </div>
    ),
    title: "TCS",
    href: "https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202",
  },
  {
    node: (
      <div className="w-[150px] h-[100px] flex justify-center">
        <img src={virtusa} alt="virtusa" className="w-full" />
      </div>
    ),
    title: "Virtusa",
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

const backendSkillData = [
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

const frontendSkillData = [
  { Icon: SiReact, title: "ReactJS", colorClass: "text-blue-400" },
  { Icon: SiNextdotjs, title: "NextJS", colorClass: "text-white" },
  { Icon: SiTypescript, title: "TypeScript", colorClass: "text-blue-600" },
  { Icon: SiTailwindcss, title: "TailwindCSS", colorClass: "text-sky-400" },
  { Icon: SiRedux, title: "Redux", colorClass: "text-purple-600" },
  { Icon: FaJsSquare, title: "JavaScript", colorClass: "text-yellow-400" },
];

const experienceData = [
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

export {
  contactData,
  clearCompanyLogoData,
  backendSkillData,
  frontendSkillData,
  experienceData,
};
