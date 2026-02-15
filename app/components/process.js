"use client";

import { useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    desc: "Tell us your requirements via form or WhatsApp.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We create modern UI designs based on your needs.",
  },
  {
    number: "03",
    title: "Development",
    desc: "Your website is built using latest technologies.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Final testing, deployment, and your site goes live.",
  },
];

export default function Process() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="py-5 px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
        How It Works
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        Simple process. Clear communication. Fast results.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {steps.map((s, i) => (
          <div
            key={i}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center reveal hover:border-purple-500/60 transition"
          >
            <span className="text-purple-400 text-2xl font-bold">{s.number}</span>
            <h3 className="text-lg font-semibold mt-4">{s.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{s.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
