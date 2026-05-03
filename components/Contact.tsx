"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const headingText = "HAVE A PROJECT IN MIND?";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    const speed = isDeleting ? 55 : 85;
    const pause = 1000;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < headingText.length) {
        setTypedText(headingText.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(headingText.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === headingText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, headingText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    await new Promise((r) => setTimeout(r, 1500));

    setStatus("success");
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 HEADER (MATCHED WITH EDUCATION SECTION) */}
        <div className="text-center mb-20 relative z-10">
          <p className="section-tag mb-4">CONTACT</p>

          <h2 className="text-5xl font-black text-white contact-heading">
            <span className="sr-only">HAVE A PROJECT IN MIND?</span>
            <span className="contact-typed">{typedText}</span>
            <span className="contact-cursor" aria-hidden="true" />
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-white text-sm mb-10 max-w-md leading-relaxed">
              I’m available 24/7 for freelance and full-time work. Let’s build something impactful.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-4">
              {[
                {
                  label: "EMAIL",
                  values: ["ishtiaqdab01@gmail.com", "sp24-bcs-053@cuilahore.edu.pk"],
                },
                {
                  label: "PHONE",
                  values: ["03197926170", "03456927170"],
                },
                {
                  label: "LOCATION",
                  values: ["Lahore, Pakistan"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-dark glow-card card-interactive group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <p className="text-xs text-[#f97316] mb-2 font-bold group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </p>

                  {item.values.map((v, i) => (
                    <p key={i} className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                      {v}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full">

            <div className="card-dark card-interactive relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.01]">

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                {/* NAME */}
                <div>
                  <label className="text-xs text-white block mb-2 tracking-wide">
                    Your Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#f97316] transition-all duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs text-white block mb-2 tracking-wide">
                    Email Address
                  </label>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#f97316] transition-all duration-300"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-xs text-white block mb-2 tracking-wide">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#f97316] transition-all duration-300 resize-none"
                  />
                </div>

                {/* SUCCESS */}
                {status === "success" && (
                  <p className="text-green-400 text-sm">
                    ✓ Message sent successfully
                  </p>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.98] shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                  style={{
                    background: "linear-gradient(90deg, #f97316, #ea580c)",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
