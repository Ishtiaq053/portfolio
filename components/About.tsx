"use client";

const cards = [
  {
    title: "A Story of Code",
    content: (
      <>
        <p className="text-white/65 text-sm leading-relaxed mb-3 font-light">
          I&apos;m <strong className="text-white font-semibold">Ishtiaq Ahmad</strong>, a dedicated Software Engineer and Full Stack Developer currently pursuing my{" "}
          <span className="text-[#f97316] font-medium">BS in Computer Science</span> at COMSATS University Islamabad, Lahore Campus.
        </p>
        <p className="text-white/65 text-sm leading-relaxed mb-3 font-light">
          I&apos;m passionate about building real-world software solutions that solve genuine problems.
        </p>
        <p className="text-white/65 text-sm leading-relaxed font-light">
          I approach my work with{" "}
          <span className="text-[#f97316] font-medium">dedication and a growth mindset</span>.
        </p>
      </>
    ),
  },
  {
    title: "The Toolkit",
    content: (
      <div>
        <p className="text-xs font-mono text-[#f97316] uppercase tracking-widest font-semibold mb-3">
          Skills & Tools
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript","TypeScript","React",
            "Next.js","Node.js","Tailwind CSS",
            "MongoDB","REST APIs","Git"
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs text-white/70 border border-[#2a2a2a] px-3 py-1.5 rounded-lg hover:border-[#f97316]/50 hover:text-white transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "What Drives Me",
    content: (
      <>
        <p className="text-white/65 text-sm leading-relaxed mb-3 font-light">
          I believe great software is built with{" "}
          <span className="text-[#f97316] font-medium">purpose and precision</span>.
        </p>
        <p className="text-white/65 text-sm leading-relaxed font-light">
          My focus is on creating scalable, efficient, and user-focused solutions that solve real-world problems.
        </p>
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000 0%, #050505 50%, #000 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <span className="section-tag block mb-2">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Building with Purpose
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {cards.slice(0, 2).map((card, i) => (
            <div
              key={i}
              className="card-dark glow-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-white font-bold text-lg mb-3">
                {card.title}
              </h3>
              {card.content}
            </div>
          ))}
        </div>

        {/* FULL WIDTH CARD */}
        <div className="card-dark glow-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.01]">
          <h3 className="text-white font-bold text-lg mb-3">
            {cards[2].title}
          </h3>
          {cards[2].content}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-[#1a1a1a]">
          {[
            { num: "3+", label: "Years Exp." },
            { num: "20+", label: "Projects Done" },
            { num: "15+", label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black text-[#f97316] mb-1">
                {s.num}
              </div>
              <div className="text-sm text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}