"use client";

import { useEffect } from "react";
import useTilt from "./useTilt";

export default function Pricing() {
  const { handleTilt, resetTilt } = useTilt();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section
      id="pricing"
      className="relative pt-40 pb-32 px-6 text-center overflow-visible"    >

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900/30 via-black to-blue-900/30"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-16 reveal">
        Choose a plan that fits your business. No hidden charges. One-time payment.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto overflow-visible">

        {/* STARTER */}
        <Card
          title="Starter"
          price="₹2999"
          features={[
            "1–3 Pages Website",
            "Mobile Responsive",
            "Contact Form",
            "Basic SEO",
            "Free Hosting Setup",
          ]}
          tilt={{ handleTilt, resetTilt }}
        />

        {/* PRO */}
        <Card
          popular
          title="Pro"
          price="₹5999"
          features={[
            "Up to 6 Pages",
            "Animations + UI Effects",
            "WhatsApp Integration",
            "Advanced SEO",
            "Priority Support",
          ]}
          tilt={{ handleTilt, resetTilt }}
        />

        {/* BUSINESS */}
        <Card
          title="Business"
          price="₹9999"
          features={[
            "Unlimited Pages",
            "Admin Panel",
            "Performance Optimization",
            "Google Analytics",
            "1 Month Free Support",
          ]}
          tilt={{ handleTilt, resetTilt }}
        />

      </div>
    </section>
  );
}

/* Card Component */
function Card({ title, price, features, popular, tilt }) {
  return (
    <div
      onMouseMove={tilt.handleTilt}
      onMouseLeave={tilt.resetTilt}
      className={`tilt-card glow-card relative bg-white/5 backdrop-blur-xl border rounded-3xl p-10 w-full max-w-sm mx-auto shadow-2xl transition duration-300 reveal overflow-visible
        ${popular ? "border-purple-500 scale-105 shadow-purple-500/30 shadow-2xl" : "border-white/10"}
      `}
    >

      {popular && (
        <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 text-xs font-semibold rounded-full bg-linear-to-r from-purple-600 to-blue-600 shadow-xl">
          MOST POPULAR
        </div>
      )}



      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-5xl font-bold mb-6">{price}</p>

      <ul className="text-gray-300 space-y-3 text-sm mb-8">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-block w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 font-semibold hover:opacity-90 transition"
      >
        Get Started
      </a>
    </div>
  );
}
