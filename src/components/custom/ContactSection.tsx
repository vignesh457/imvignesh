import React from "react";
import { DockerBar } from "../ui/floating-dock";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Highlighter } from "../ui/highlighter";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 px-4 flex justify-center items-center"
    >
      <div className="relative flex flex-col justify-center items-center w-[90%] md:w-[40%] h-[320px] bg-neutral-900/80 rounded-xl overflow-hidden border border-neutral-800 gap-2 p-4 transition-all duration-500">
        {/* <ShineBorder shineColor={["#79FFE1", "#0E7C86", "#adf374"]} /> */}
        <h1 className="text-4xl font-semibold mb-4 text-neutral-200">
          <Highlighter action="underline" color="#FF9800">
            Contact me
          </Highlighter>
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
              <GoMail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-md font-bold text-neutral-400">Email</p>
              <p className="text-neutral-600 text-sm">donapativigneshwar@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center">
              <IoLocationOutline className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-md font-bold text-neutral-400">Location</p>
              <p className="text-neutral-600 text-sm">Hyderabad, India</p>
            </div>
          </div>
        </div>
        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent dark:via-neutral-700" />
        <DockerBar />
      </div>
    </section>
  );
}
