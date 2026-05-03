"use client";

import { useEffect, useRef } from "react";

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 120);
    });
  }, []);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 circuit-bg opacity-20" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-tag mb-4">Journey</p>
          <h2 className="text-5xl font-black text-white text-glow-white">
            Education & Practical Experience
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f97316]/70 to-transparent blur-[0.5px]" />

          {/* ITEMS */}
          <div className="space-y-20">

            {/* ITEM 1 */}
            <div className="flex items-center justify-between">

              {/* LEFT CARD */}
              <div className="w-[45%]">
                <div
                  onMouseMove={handleMouseMove}
                  className="card-dark card-interactive p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="text-xs text-[#f97316] font-bold">
                    2024 — PRESENT
                  </span>

                  <h3 className="text-white font-bold text-lg mt-2 text-glow-white">
                    BS in Computer Science
                  </h3>

                  <p className="text-white/50 text-sm mt-1 text-glow-white">
                    COMSATS University Lahore
                  </p>

                  <p className="text-white/40 text-sm mt-2 text-glow-white">
                    AI, Data Structures, Software Engineering with real-world implementation.
                  </p>
                </div>
              </div>

              {/* CENTER DOT */}
              <div className="w-[10%] flex justify-center">
                <div className="w-5 h-5 rounded-full bg-black border-2 border-[#f97316] shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
              </div>

              {/* RIGHT CARD */}
              <div className="w-[45%]">
                <div
                  onMouseMove={handleMouseMove}
                  className="card-dark card-interactive p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="text-xs text-[#f97316] font-bold">
                    PRESENT
                  </span>

                  <h3 className="text-white font-bold text-lg mt-2 text-glow-white">
                    Software Developer & Projects
                  </h3>

                  <p className="text-white/50 text-sm mt-1 text-glow-white">
                    Academic & Independent Work
                  </p>

                  <p className="text-white/40 text-sm mt-2 text-glow-white">
                    Built management systems and optimized database architectures.
                  </p>
                </div>
              </div>

            </div>

            {/* ITEM 2 */}
            <div className="flex items-center justify-between">

              {/* LEFT CARD */}
              <div className="w-[45%]">
                <div
                  onMouseMove={handleMouseMove}
                  className="card-dark card-interactive p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="text-xs text-[#f97316]/70 font-bold">
                    COMPLETED
                  </span>

                  <h3 className="text-white font-bold text-lg mt-2 text-glow-white">
                    FSc (Pre-Medical)
                  </h3>

                  <p className="text-white/50 text-sm mt-1 text-glow-white">
                    Chenab College Jhang
                  </p>

                  <p className="text-white/40 text-sm mt-2 text-glow-white">
                    Built strong analytical thinking and problem-solving skills.
                  </p>
                </div>
              </div>

              {/* CENTER DOT */}
              <div className="w-[10%] flex justify-center">
                <div className="w-5 h-5 rounded-full bg-black border-2 border-[#f97316]/60 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
              </div>

              {/* RIGHT CARD */}
              <div className="w-[45%]">
                <div
                  onMouseMove={handleMouseMove}
                  className="card-dark card-interactive p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="text-xs text-[#f97316]/70 font-bold">
                    RECENT
                  </span>

                  <h3 className="text-white font-bold text-lg mt-2 text-glow-white">
                    Side Projects
                  </h3>

                  <p className="text-white/50 text-sm mt-1 text-glow-white">
                    DealsFinder & WorkerFinder
                  </p>

                  <p className="text-white/40 text-sm mt-2 text-glow-white">
                    Smart platforms currently under development.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
