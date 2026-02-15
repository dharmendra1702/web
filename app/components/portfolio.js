"use client";

import { useEffect } from "react";

const projects = [
  {
    title: "Startup Landing Page",
    tag: "Startup",
    image: "/portfolio/1.jpg",
  },
  {
    title: "Business Website",
    tag: "Business",
    image: "/portfolio/2.jpg",
  },
  {
    title: "Personal Portfolio",
    tag: "Portfolio",
    image: "/portfolio/3.jpg",
  },
];

export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="work" className="py-5 pb-10 px-4 md:px-6 overflow-hidden -mt-20 md:mt-0">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
        Our Work
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        A few projects we’ve designed and developed for modern businesses.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden border border-white/10 reveal"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-6">
              <span className="text-sm text-purple-400">{p.tag}</span>
              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
