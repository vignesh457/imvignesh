import type { ProjectItem } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function CustomProjectCard({ content }: { content: ProjectItem}) {
  return (
    <div className="h-[460px] w-[90%] p-6 md:w-[50%] flex flex-col rounded-xl overflow-hidden bg-neutral-950 gap-4 border-1 border-neutral-700">
      
      {/* Project Image */}
      <div className="relative w-full h-[40%] md:h-[60%] flex items-center justify-center overflow-hidden rounded-xl">
        {content.image}
        <span className="absolute top-2 right-2 px-3 py-1 text-sm rounded-md bg-neutral-950 text-neutral-400 border border-neutral-700">
          <div className="bg-green-500 size-2 rounded-full relative z-0 mr-2 inline-block">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping -z-10"></div>
          </div>
          Live
        </span>
      </div>

      <div className="flex flex-col gap-1 h-[60%] md:h-[40%]">
        <div className="flex justify-center align-center gap-4 mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-200 flex-1">{content.title}</h3>
          <a
            href={content.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm px-4 py-2 rounded-xl transition"
          >
            <FaExternalLinkAlt className="inline"/>
            <span className="hidden md:inline ml-2">Live</span>
          </a>
          <a
            href={content.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm px-4 py-2 rounded-xl transition"
          >
            <FaGithub className="inline" />
            <span className="hidden md:inline ml-2">GitHub</span>
          </a>
        </div>
        <p className="text-neutral-500 text-xs md:text-sm">{content.description}</p>
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <div className="flex flex-wrap gap-2">
          {content.technologies.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-neutral-800/80 text-neutral-400 border border-neutral-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
