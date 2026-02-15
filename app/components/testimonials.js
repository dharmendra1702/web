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
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="py-5 pb-10 px-4 md:px-6 overflow-hidden -mt-20 md:mt-0">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
        What Our Clients Say
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        Trusted by startups and small businesses.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 reveal hover:border-purple-500/60 transition"
          >
            <p className="text-gray-300 text-sm mb-6">“{r.text}”</p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-600 to-blue-600 flex items-center justify-center font-bold">
                {r.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <span className="text-xs text-gray-400">{r.role}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
