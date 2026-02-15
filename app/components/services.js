"use client";

import { useEffect } from "react";
import { Monitor, Layout, Rocket } from "lucide-react";

export default function Services() {

  useEffect(() => {
    const els = document.querySelectorAll(".service");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });

    els.forEach(el => observer.observe(el));
  }, []);

  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive websites optimized for performance and conversions.",
      icon: Monitor,
    },
    {
      title: "UI / UX Design",
      desc: "Clean layouts, smooth flows, and user-focused experiences.",
      icon: Layout,
    },
    {
      title: "Landing Pages",
      desc: "High-impact marketing pages built to generate leads.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-5 pb-20 px-4 md:px-6 text-center">

      <h2 className="text-4xl font-bold mb-4 service">
        Our Services
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-16 service">
        Everything you need to launch a modern digital presence.
      </p>

      <div className="flex justify-center gap-10 flex-wrap">

        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <div key={i} className="service w-[320px]">

              <div
                className="
                  group relative
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  p-10
                  h-60
                  flex flex-col items-center justify-center
                  hover:-translate-y-3
                  transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]
                "
              >

                {/* Icon */}
                <div className="mb-3 p-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {s.desc}
                </p>

              </div>
            </div>
          );
        })}

      </div>

      <style>{`
        .service {
          opacity: 0;
          transform: translateY(15px);
          transition: all .7s ease;
        }

        .service.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
