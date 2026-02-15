"use client";

import { useEffect } from "react";
import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Contact Us",
    desc: "Tell us your requirements via form or WhatsApp.",
    icon: MessageCircle,
  },
  {
    title: "Design",
    desc: "We create modern UI designs based on your needs.",
    icon: PenTool,
  },
  {
    title: "Development",
    desc: "Your website is built using latest technologies.",
    icon: Code2,
  },
  {
    title: "Launch",
    desc: "Final testing, deployment, and your site goes live.",
    icon: Rocket,
  },
];

export default function Process() {
  useEffect(() => {
    const els = document.querySelectorAll(".step");

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
    <section className="py-5 px-4 md:px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 step">
        How It Works
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 step">
        Simple process. Clear communication. Fast results.
      </p>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {steps.map((s, i) => {
          const Icon = s.icon;

          return (
            <div key={i} className="step">

              <div
                className="
                  group relative h-47.5
                  bg-white/5 backdrop-blur-xl
                  border border-white/10 rounded-2xl p-6
                  flex flex-col items-center text-center
                  hover:-translate-y-3 transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]
                "
              >

                {/* Icon */}
                <div className="mb-4 p-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {s.desc}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Scroll Animation */}
      <style>{`
        .step {
          opacity: 0;
          transform: translateY(15px);
          transition: all .7s ease;
        }

        .step.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
