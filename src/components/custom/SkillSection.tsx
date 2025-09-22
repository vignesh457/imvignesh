import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { backendSkillData, frontendSkillData } from "@/lib/data";
import yoga from '@/assets/yoga.webp';
import { Highlighter } from "../ui/highlighter";


export function SkillSection() {
  return (
    <section id='skills' className="w-full py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        <Highlighter action="underline" color="#FF9800">
          Skills
        </Highlighter>
      </h1>
      {/* Outer Orbit */}
      <div className="relative flex md:min-h-screen h-[400px] w-full flex-col items-center justify-center text-white">
        <OrbitingCircles radius={window.innerWidth<=600?175:250} speed={1} iconSize={50}>
          {/* backend technologies */}
          {backendSkillData.map(({ Icon, title, colorClass }) => (
            <div key={title} className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-radial from-neutral-800 to-neutral-900">
            <Icon
              key={title}
              // title={title}
              className={`${colorClass}`}
              size={30}
            />
            </div>
          ))}
        </OrbitingCircles>

        {/* Inner Orbit */}
        <OrbitingCircles radius={window.innerWidth<=600?135:200} speed={1} reverse iconSize={50}>
          {/* frontend technologies */}
          {frontendSkillData.map(({ Icon, title, colorClass }) => (
            <div key={title} className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-radial from-neutral-800 to-neutral-900">
            <Icon
              key={title}
              // title={title}
              className={`${colorClass}`}
              size={30}
            />
            </div>
          ))}
        </OrbitingCircles>
        {/* Center Logo */}
        <div className="flex h-64 w-64 items-center justify-center relative">
          <div className="absolute z-[-1] top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 inset-0 rounded-full opacity-20 border-2 border-yellow-300/80 scale-75 bg-yellow-300/20 animate-ping"></div>
          <div className="absolute z-[-1] top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 inset-0 rounded-full opacity-20 border-2 border-yellow-300/80 scale-90 bg-yellow-300/20 animate-ping"></div>
          <div className="absolute z-[-1] top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 inset-0 rounded-full opacity-20 border-2 border-yellow-300/80 scale-110 bg-yellow-300/20 animate-ping"></div>
         <img src={yoga} alt="🧘‍♂️" className="w-64 h-64" />
        </div>
      </div>
    </section>
  );
}
