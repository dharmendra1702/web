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

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="pt-10 text-center pb-10 px-4 md:px-6">

      <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-16 reveal">
        Choose a plan that fits your business. No hidden charges. One-time payment.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto">

        <Card
          title="Starter"
          price="2499"
          original="2999"
          offer="₹500 OFF • First 10 Orders"
          features={[
            "1–3 Pages Website",
            "Mobile Responsive",
            "Contact Form",
            "Basic SEO",
            "Free Hosting Setup",
          ]}
          tilt={{ handleTilt, resetTilt }}
          onClick={scrollToContact}
        />

        <Card
          popular
          title="Pro"
          price="5999"
          features={[
            "Up to 6 Pages",
            "Animations + UI Effects",
            "WhatsApp Integration",
            "Advanced SEO",
            "Priority Support",
          ]}
          tilt={{ handleTilt, resetTilt }}
          onClick={scrollToContact}
        />

        <Card
          title="Business"
          price="9999"
          features={[
            "Unlimited Pages",
            "Admin Panel",
            "Performance Optimization",
            "Google Analytics",
            "1 Month Free Support",
          ]}
          tilt={{ handleTilt, resetTilt }}
          onClick={scrollToContact}
        />

      </div>
    </section>
  );
}

function Card({ title, price, original, offer, features, popular, tilt, onClick }) {
  return (
    <div
      onMouseMove={tilt.handleTilt}
      onMouseLeave={tilt.resetTilt}
      className={`relative bg-[#0b0f1a]/80 backdrop-blur-xl border rounded-3xl p-10 w-full max-w-sm mx-auto shadow-2xl transition duration-300 reveal
        ${popular ? "border-purple-500 scale-105 shadow-purple-500/30" : "border-white/10"}
      `}
    >

      {(popular || offer) && (
        <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 text-xs font-semibold rounded-full bg-linear-to-r from-purple-600 to-blue-600 shadow-xl whitespace-nowrap">
          {popular ? "MOST POPULAR" : offer}
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-400 mb-2">Starting from</p>

      <div className="mb-6">
        {original && <span className="text-gray-500 line-through mr-2">₹{original}</span>}
        <span className="text-5xl font-bold">₹{price}</span>
      </div>

      <ul className="text-gray-300 space-y-3 text-sm mb-10">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* Glow */}
      <div className="relative">
        <div
          className="absolute inset-0 blur-xl opacity-70 rounded-full"
          style={{ background: "linear-gradient(90deg,#9333ea,#3b82f6)" }}
        />

        {/* FORCE Gradient Button */}
        <button
  onClick={onClick}
  style={{ background: "linear-gradient(90deg,#9333ea,#6366f1,#3b82f6)" }}
  className="relative w-64 md:w-72 h-12 md:h-14 px-6 flex items-center justify-center rounded-full text-white text-base font-semibold transition active:scale-95 hover:brightness-110 shadow-none"

>
  Get Started
</button>


      </div>

    </div>
  );
}
