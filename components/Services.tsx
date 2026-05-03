"use client";

import servicesData from "@/data/services.json";

const icons: Record<string, React.ReactNode> = {
  Globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  Layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Smartphone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  Palette: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/>
      <circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1a1.6 1.6 0 011.7-1.7h2c3 0 5.5-2.5 5.5-5.5C22 6 17.5 2 12 2z"/>
    </svg>
  ),
  Database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 2 4 3 9 3s9-1 9-3V5"/>
    </svg>
  ),
  Settings: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 010 2.8 2 2 0 01-2.8 0l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 01-2.8-2.8l.1-.1A1.6 1.6 0 004.6 15a1.6 1.6 0 00-1.5-1H3a2 2 0 010-4h.1A1.6 1.6 0 004.6 9a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 012.8-2.8l.1.1A1.6 1.6 0 009 4.6c.6-.3 1-.9 1-1.5V3a2 2 0 014 0v.1c0 .6.4 1.2 1 1.5a1.6 1.6 0 001.8-.3l.1-.1a2 2 0 012.8 2.8l-.1.1c-.4.5-.5 1.2-.3 1.8.3.6.9 1 1.5 1H21a2 2 0 010 4h-.1c-.6 0-1.2.4-1.5 1z"/>
    </svg>
  ),
};

export default function Services() {
  const services = servicesData;

  return (
    <section id="services" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="section-tag block mb-2">Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What I Do
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto font-light">
            Full-spectrum software engineering services tailored to turn ideas into scalable digital products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);

                const rotateX = ((y / rect.height) - 0.5) * 10;
                const rotateY = ((x / rect.width) - 0.5) * -10;

                e.currentTarget.style.transform =
                  `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
              }}
              className="card-dark glow-card card-interactive p-7 rounded-xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-[#f97316] transition-all duration-300 hover:scale-110">
                {icons[service.icon]}
              </div>

              {/* TITLE */}
              <h3 className="text-white font-bold text-lg mb-3 transition-all duration-300 group-hover:text-[#f97316]">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
