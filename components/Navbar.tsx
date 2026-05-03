"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Update active section
      const sections = ["home", "about", "services", "projects", "education", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-[#1A1A1A]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg border border-[#f97316] flex items-center justify-center text-[#f97316] font-bold text-lg transition-all duration-300 group-hover:bg-[#f97316] group-hover:text-black"
              style={{ fontFamily: "var(--font-display)" }}>
              A
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block">Ishtiaq Ahmad</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? "text-[#f97316]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#f97316] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#ea6a05] transition-all duration-200 shadow-lg shadow-orange-500/25"
            >
              Hire Me
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-white/80 hover:text-[#f97316] transition-colors"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#f97316] text-white px-8 py-3 rounded-lg font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
