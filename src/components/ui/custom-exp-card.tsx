import { FaCode, FaLocationDot, FaSuitcase } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export default function CustomExpCard({content}: {content: any}) {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-xs rounded-xl border border-neutral-800 border-b-0 overflow-hidden transition-all duration-500">
      {/* <ShineBorder shineColor={["#79FFE1", "#0E7C86", "#0883A3"]} /> */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neutral-200 mb-2">
          {content.position}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-sm">
          <div className="flex items-center">
            <FaSuitcase className="mr-2 text-neutral-500" />
            <span>{content.company}</span>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="mr-2 text-neutral-500" />
            <span>{content.location}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-neutral-500" />
            <span>{content.date}</span>
          </div>
        </div>
      </div>
      <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
      <div className="p-6">
        <div className="mb-5">
          <h4 className="text-md font-medium text-neutral-400 mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {content.keyResponsibilities.map((item: string, index: number) => (
              <li
                key={index}
                className="text-sm text-neutral-500 flex items-start"
              >
                <span className="text-neutral-500 mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <div className="mt-4">
          <h4 className="text-md font-medium text-neutral-400 flex items-center gap-2 mb-3">
            <FaCode />
            <span>Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {content.technologies.map((item: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-neutral-800/80 text-neutral-400 border border-neutral-700/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-neutral-500/10 via-neutral-400/20 to-neutral-300/30"></div>
    </div>
  );
}
