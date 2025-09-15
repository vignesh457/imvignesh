import React from "react";
import { SignupFormDemo } from "../signup-form-demo";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 min-h-screen px-4">
      <SignupFormDemo />
    </section>
  );
}

