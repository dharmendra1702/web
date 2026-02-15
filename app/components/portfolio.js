"use client";

import { useEffect } from "react";

const projects = [
  {
    title: "Startup Landing Page",
    tag: "Startup",
    image: "/portfolio/2.jpg",
  },
  {
    title: "Business Website",
    tag: "Business",
    image: "/portfolio/1.jpg",
  },
  {
    title: "Personal Portfolio",
    tag: "Portfolio",
    image: "/portfolio/3.jpg",
  },
];

export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".work");

    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("active"), i * 150);
        }
      });
    });

    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="work" className="py-5 px-4 md:px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 work">
        Our Work
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 work">
        A few projects we’ve designed and developed for modern businesses.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div key={i} className="work">

            <div
              className="
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-xl border border-white/10
                hover:-translate-y-3 transition-all duration-500
                hover:shadow-[0_25px_50px_rgba(139,92,246,0.35)]
              "
            >

              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>


              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

                <span className="mb-3 px-4 py-1 rounded-full bg-white/10 text-xs text-white backdrop-blur border border-white/20">
                  {p.tag}
                </span>

                <h3 className="text-xl font-semibold">
                  {p.title}
                </h3>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Scroll animation */}
      <style>{`
        .work {
          opacity: 0;
          transform: translateY(15px);
          transition: all .7s ease;
        }

        .work.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
