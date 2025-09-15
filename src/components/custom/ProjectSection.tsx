import React from "react";

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full min-h-screen py-16">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-4 px-6 md:px-16">Projects</h1>

      <div className="relative w-full h-full flex flex-col pt-[40px] gap-20 mt-4 md:mt-4 px-6 md:px-16">
        {/* Project Card 1 */}
        <div
          className="sticky flex justify-center top-[75px]"
        >
          <div className="md:w-[60%] w-[90%] h-[300px] bg-neutral-900 flex items-center justify-center text-black font-bold text-2xl rounded-2xl scale-90">
            Project 1 (Coming Soon)
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="sticky flex justify-center top-[100px]">
          <div className="md:w-[60%] w-[90%] h-[300px] bg-neutral-800 flex items-center justify-center text-black font-bold text-2xl rounded-2xl scale-95">
            Project 2 (Coming Soon)
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="sticky flex justify-center top-[125px]">
          <div className="md:w-[60%] w-[90%] h-[300px] bg-neutral-700 flex items-center justify-center text-black font-bold text-2xl rounded-2xl scale-100">
            Project 3 (Coming Soon)
          </div>
        </div>
      </div>
    </section>
  );
}
