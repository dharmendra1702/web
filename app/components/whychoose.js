"use client";

import { useEffect } from "react";

const reasons = [
  {
    title: "Fast Delivery",
    desc: "Get your website live in just 3-5 days.",
  },
  {
    title: "Modern UI Design",
    desc: "Clean, responsive, startup-quality designs.",
  },
  {
    title: "SEO Ready",
    desc: "Optimized for Google ranking from day one.",
  },
  {
    title: "Affordable Pricing",
    desc: "Premium quality at startup-friendly prices.",
  },
  {
    title: "Free Support",
    desc: "Post-launch support included for every client.",
  },
  {
    title: "Trusted Process",
    desc: "Clear steps from idea to live website.",
  },
];

export default function WhyChoose() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="py-5 pb-10 px-4 md:px-6 overflow-hidden -mt-20 md:mt-0">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
        Why Choose DWS?
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        We focus on quality, speed, and results — not just building websites.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {reasons.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center reveal hover:border-purple-500/60 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
            <p className="text-gray-400 text-sm">{r.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
