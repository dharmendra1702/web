"use client";

import { useEffect } from "react";
import {
  Zap,
  Palette,
  Search,
  Wallet,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "Fast Delivery",
    desc: "Get your website live in just 3–5 days.",
    icon: Zap,
  },
  {
    title: "Modern UI Design",
    desc: "Clean, responsive, startup-quality designs.",
    icon: Palette,
  },
  {
    title: "SEO Ready",
    desc: "Optimized for Google ranking from day one.",
    icon: Search,
  },
  {
    title: "Affordable Pricing",
    desc: "Premium quality at startup-friendly prices.",
    icon: Wallet,
  },
  {
    title: "Free Support",
    desc: "Post-launch support included for every client.",
    icon: Headphones,
  },
  {
    title: "Trusted Process",
    desc: "Clear steps from idea to live website.",
    icon: CheckCircle2,
  },
];

export default function WhyChoose() {
  useEffect(() => {
    const els = document.querySelectorAll(".why");

    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("active"), i * 120);
        }
      });
    });

    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className=" py-5 pb-20 px-4 md:px-6 text-center">


      <h2 className="text-4xl md:text-5xl font-bold text-center mb-1 md:mb-4 why">
        Why Choose DWS?
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-2 md:mb-8 why">
        We focus on quality, speed, and results — not just building websites.
      </p>

      <div className="grid md:grid-cols-3 gap-3 md:gap-10 max-w-6xl mx-auto">


        {reasons.map((r, i) => {
          const Icon = r.icon;

          return (
            <div key={i} className="why">

              <div
                className="
                  group relative min-h-35 md:h-47.5
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl p-6
                  flex flex-col items-center justify-center text-center
                  md:hover:-translate-y-3 transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)]
                "
              >

                {/* Icon */}
                <div className="mb-3 p-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold mb-2">
                  {r.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {r.desc}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Animations */}
      <style>{`
        .why {
          opacity: 0;
          transform: translateY(15px);
          transition: all .7s ease;
        }

        .why.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}
