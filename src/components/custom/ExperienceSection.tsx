import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative flex-row justify-center items-center w-full min-h-screen overflow-clip py-16"
    >
      {/* <ScrollProgress className="top-[65px]" /> */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 px-6 md:px-16 text-center">
        Experience
      </h1>

      <Timeline data={experienceData} />
    </section>
  );
}
