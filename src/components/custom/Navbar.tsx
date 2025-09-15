import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Close menu on mobile after clicking
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 flex items-center justify-between px-6 md:px-16 h-[65px]">
      {/* Logo or Brand Name */}
      <div className="text-white text-xl font-bold cursor-pointer">
        Vignesh
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-10 text-neutral-500">
        {["home", "skills", "projects", "experience", "contact", "footer"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="hover:text-neutral-100 hover:scale-110 transition tracking-wide"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <div className="hidden md:flex text-neutral-500 items-center justify-center">
        <FaLocationDot className="inline mr-2 mt-1 animate-bounce" size={16} color="#525252" />
        Hyderabad, India
      </div>

      {/* Mobile menu button */}
      <button
        className="ml-auto md:hidden text-neutral-300 hover:text-neutral-100 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* Hamburger icon */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {menuOpen ? (
            // X icon
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Hamburger icon
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="absolute top-[65px] left-0 w-full bg-neutral-900/90 backdrop-blur-md border-t border-neutral-800 flex flex-col p-4 md:hidden">
          {["home", "skills", "projects", "experience", "contact", "footer"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="py-3 px-4 text-neutral-300 hover:text-neutral-100 hover:scale-110 text-left w-full border-b border-neutral-800 last:border-b-0"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
