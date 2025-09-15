"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { DockerBar } from "./ui/floating-dock";

export function SignupFormDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setMessageStatus("Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setMessageStatus("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-black p-8 border-2 border-neutral-800">
      <h2 className="text-xl font-bold text-neutral-200">Contact Me</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-400">
        Feel free to reach out by filling the form below.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name" className="text-neutral-300">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="bg-neutral-900 text-white border border-neutral-700"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={handleChange}
            className="bg-neutral-900 text-white border border-neutral-700"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject" className="text-neutral-300">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="bg-neutral-900 text-white border border-neutral-700"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-neutral-300">
            Message
          </Label>
          <textarea
            id="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded border border-neutral-700 bg-neutral-900 p-2 text-white"
            rows={5}
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-zinc-900 to-zinc-800 font-medium text-white shadow-[inset_0px_1px_0px_0px_#27272a,inset_0px_-1px_0px_0px_#27272a]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          <BottomGradient />
        </button>

        {messageStatus && (
          <p className="mt-4 text-center text-sm text-neutral-400">{messageStatus}</p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

        <div className="flex flex-col space-y-4">
          <DockerBar />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
