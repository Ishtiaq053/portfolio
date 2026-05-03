"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";

const allTags = ["All", ...Array.from(new Set(projectsData.flatMap((p) => p.tags)))];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeWord, setActiveWord] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const titleWords = ["Selected", "Projects"];

  // Windows cache reset (if images look stale): stop dev server, `Remove-Item -Recurse -Force .next`, `npm run dev`, hard refresh.
  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchTag = activeTag === "All" || p.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % titleWords.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [titleWords.length]);

  useEffect(() => {
    const updateFrame = () => {
      const container = headingRef.current;
      const frame = frameRef.current;
      if (!container || !frame) return;

      const words = Array.from(container.querySelectorAll<HTMLElement>(".projects-word"));
      const target = words[activeWord];
      if (!target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const left = targetRect.left - containerRect.left;
      const top = targetRect.top - containerRect.top;

      frame.style.width = `${targetRect.width}px`;
      frame.style.height = `${targetRect.height}px`;
      frame.style.transform = `translate(${left}px, ${top}px)`;
      frame.style.opacity = "1";
    };

    requestAnimationFrame(updateFrame);
    window.addEventListener("resize", updateFrame);

    return () => window.removeEventListener("resize", updateFrame);
  }, [activeWord]);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #000 0%, #030303 50%, #000 100%)" }}>
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Curved marquee ribbon */}
        <div className="projects-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="projects-curve-path"
                d="M0,80 C240,20 480,20 720,80 C960,140 1200,140 1440,80"
              />
            </defs>
            <text className="projects-curve-text">
              <textPath href="#projects-curve-path" startOffset="0%">
                WHERE IDEAS BECOMES REALITY • WHERE IDEAS BECOMES REALITY • WHERE IDEAS BECOMES REALITY • WHERE IDEAS BECOMES REALITY •
                <animate attributeName="startOffset" from="0%" to="-100%" dur="18s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>
        </div>

        {/* Header */}
        <div className="mb-12 text-center relative z-10">
          <span className="reveal section-tag block mb-3">Portfolio</span>
          <h2 className="reveal delay-100 text-4xl md:text-5xl font-black text-white">
            <div className="projects-heading" ref={headingRef}>
              {titleWords.map((word, index) => (
                <span
                  key={word}
                  className={`projects-word ${index === activeWord ? "is-active" : "is-blurred"}`}
                >
                  {word}
                </span>
              ))}
              <span className="projects-focus-frame" ref={frameRef} aria-hidden="true" />
            </div>
          </h2>
          <p className="reveal delay-200 text-white/40 text-sm mt-3 max-w-md mx-auto font-light">
            A showcase of real-world software — each solving genuine problems.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 mb-10 relative z-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs px-4 py-2.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-white/30"
          />

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs px-3 py-1.5 rounded-lg border ${
                  activeTag === tag
                    ? "bg-[#f97316] border-[#f97316] text-white"
                    : "border-[#1a1a1a] text-white/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark group overflow-hidden flex flex-col"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >

              {/* Image */}
              <div className="relative h-[180px] w-full overflow-hidden">
                {/* Public folder is served at root ("/"), so use "/filename.png" paths from projects.json. */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  // `sizes` is required with `fill` so Next can pick the right image size.
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={project.id === 1}
                />
                {/* <img src={project.image} className="w-full h-full object-cover" alt="" /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="bg-black/60 px-4 py-2 rounded-lg text-sm text-orange-400">
                    View on GitHub
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-white font-bold">{project.title}</h3>
                <p className="text-white/50 text-sm">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-orange-400 border px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
