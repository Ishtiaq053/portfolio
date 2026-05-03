"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger hero animations immediately
    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 120);
    });
  }, []);


  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden circuit-bg"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-600/4 blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Circuit lines decoration */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 50 H40 V20 H60 V50 H90" stroke="#f97316" strokeWidth="0.5" fill="none"/>
              <path d="M50 10 V40 H80 V60 H50 V90" stroke="#f97316" strokeWidth="0.5" fill="none"/>
              <circle cx="40" cy="20" r="2" fill="#f97316"/>
              <circle cx="60" cy="50" r="2" fill="#f97316"/>
              <circle cx="80" cy="60" r="2" fill="#f97316"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Text content */}
          <div className="space-y-5">
            <p className="reveal text-white/50 text-base font-light tracking-wide">Hi I am</p>

            <h1
              className="reveal delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
            >
              Ishtiaq Ahmad Khan
            </h1>

            <h2 className="reveal delay-200 shimmer-text text-2xl md:text-3xl font-bold leading-tight">
              Software Engineer &amp; Full Stack Developer
            </h2>

            <p className="reveal delay-300 text-white/40 text-sm font-medium tracking-wide">
              BS CS — COMSATS University Islamabad, Lahore Campus
            </p>

            {/* Social icons */}
            <div className="reveal delay-300 flex items-center gap-3 pt-1">
              {/* GitHub */}
              <a
                href="https://github.com/Ishtiaq053"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] flex items-center justify-center text-white/50 hover:text-[#f97316] hover:border-[#f97316] transition-all duration-200"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ishtiaq-ahmad-khan-84a396353/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] flex items-center justify-center text-white/50 hover:text-[#f97316] hover:border-[#f97316] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="reveal delay-400 flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-[#f97316] text-white font-semibold px-8 py-3.5 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
              >
                <span className="relative z-10">Hire Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ea6a05] to-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:border-[#f97316] hover:text-[#f97316] transition-all duration-300 hover:scale-105"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:animate-bounce">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="reveal delay-500 flex gap-0 pt-4 border-t border-[#1a1a1a] mt-4">
              {[
                { num: "3+", label: "Years Coding" },
                { num: "20+", label: "Projects Done" },
                { num: "15+", label: "Happy Clients" },
              ].map((s, i) => (
                <div key={s.label} className={`pr-8 py-3 ${i !== 0 ? "pl-8 border-l border-[#1a1a1a]" : ""}`}>
                  <div className="text-3xl font-black text-[#f97316]" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>{s.num}</div>
                  <div className="text-xs text-white/40 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile photo in hexagon */}
          <div className="reveal delay-300 flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f97316]/20 to-transparent blur-2xl scale-110 animate-pulse" />

              {/* Hexagon container */}
              <div
                className="relative hex-glow"
                style={{ width: 340, height: 380 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--x", `${x}px`);
                  e.currentTarget.style.setProperty("--y", `${y}px`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.removeProperty("--x");
                  e.currentTarget.style.removeProperty("--y");
                }}
              >
                {/* Hex background glow */}
                <div
                  className="absolute inset-0 hex-clip animate-pulse"
                  style={{
                    background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(194,65,12,0.08) 100%)",
                    animationDuration: "3s",
                  }}
                />
                {/* Hex border */}
                <div
                  className="absolute inset-0 hex-clip"
                  style={{
                    background: "linear-gradient(135deg, rgba(249,115,22,0.6) 0%, rgba(249,115,22,0.1) 50%, rgba(249,115,22,0.4) 100%)",
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full hex-clip overflow-hidden" style={{ background: "#0a0a0a" }}>
                    <Image
                      src="/profile.png"
                      alt="Ishtiaq Ahmad"
                      width={340}
                      height={380}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                {/* ❌ Corner dots REMOVED */}
              </div>

              {/* ❌ Sparkle REMOVED */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 scroll-indicator">
        <span className="text-xs text-white/60 font-mono tracking-widest uppercase scroll-indicator-text">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#f97316] to-transparent scroll-indicator-line" />
      </div>
    </section>
  );
}