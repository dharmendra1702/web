"use client";

import { useEffect } from "react";

const reviews = [
  {
    name: "Rahul Kumar",
    role: "Startup Founder",
    text: "DWS delivered exactly what I needed. Clean design and fast delivery.",
  },
  {
    name: "Sneha Reddy",
    role: "Business Owner",
    text: "Very professional team. My website looks premium and works perfectly.",
  },
  {
    name: "Arjun Patel",
    role: "Freelancer",
    text: "Affordable pricing with great quality. Highly recommended.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
        }
      });
    });

    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="py-12 px-4 md:px-6 overflow-hidden text-center">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal">
        What Our Clients Say
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-6 reveal">
        Trusted by startups and small businesses.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

        {reviews.map((r, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className="
              group relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl p-8 text-left
              reveal opacity-0
              transition-all duration-500
              md:hover:-translate-y-2
              hover:border-purple-500/60
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Quote */}
            <div className="text-purple-400 text-3xl mb-4">"</div>

            <p className="relative text-gray-300 text-sm leading-relaxed mb-8">
              {r.text}
            </p>

            <div className="relative flex items-center gap-4">

              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 to-blue-500 blur opacity-70"></div>
                <div className="relative w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white">
                  {r.name.charAt(0)}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <span className="text-xs text-gray-400">{r.role}</span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Reveal Animation */}
      <style>{`
        .reveal {
          transform: translateY(20px);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
