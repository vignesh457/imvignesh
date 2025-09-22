import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/lib/data";
import { Highlighter } from "../ui/highlighter";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative flex-row justify-center items-center w-full min-h-screen overflow-clip py-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4 px-6 md:px-16 text-center">
        <Highlighter action="underline" color="#FF9800">
          Experience
        </Highlighter>
      </h1>

      <Timeline data={experienceData} />
    </section>
  );
}
