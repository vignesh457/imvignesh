import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { SkillSection } from "./components/custom/SkillSection";
import { ExperienceSection } from "./components/custom/ExperienceSection";
import HeaderSection from "./components/custom/HeaderSection";
import { ScrollProgress } from "./components/magicui/scroll-progress";
import Navbar from "./components/custom/Navbar";
import ContactSection from "./components/custom/ContactSection";
import ProjectSection from "./components/custom/ProjectSection";
import FooterSection from "./components/custom/FooterSection";
import ClearCompanySection from "./components/custom/CustomLogoLoop";

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-screen bg-neutral-950 text-white">
      {/* Dots in the background */}
      <DotPattern
        className={cn(
          "opacity-40 dark:opacity-60",
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <ScrollProgress containerRef={mainRef} className="top-[65px]" />
      <Navbar />

      {/* Scrollable content */}
      <div
        ref={mainRef}
        className="relative w-screen h-screen z-10 overflow-y-scroll overflow-x-hidden no-scrollbar gap-8"
      >
        <HeaderSection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <SkillSection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <ProjectSection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <ExperienceSection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <ClearCompanySection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <ContactSection />
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
