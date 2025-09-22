import { projectData } from "@/lib/data";
import CustomProjectCard from "../ui/custom-project-card";
import CustomProjectCardSkeleton from "../ui/custom-project-card-skelton";

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full min-h-screen py-16">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-4 px-6 md:px-16">
        Projects
      </h1>

      <div className="relative w-full h-full flex flex-col pt-[40px] gap-20 mt-4 md:mt-4 px-6 md:px-16">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="sticky flex justify-center"
            style={{
              top: `${75 + index * 10}px`,
              scale: `${1 + index * 0.01}`,
            }}
          >
            {
            index == 0 ? <CustomProjectCardSkeleton /> :
            <CustomProjectCard content={item} />
            }
          </div>
        ))}
      </div>
    </section>
  );
}
