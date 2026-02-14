"use client";

import { useEffect } from "react";
import useTilt from "./useTilt";

export default function Pricing() {

  const { handleTilt, resetTilt } = useTilt();

  // Scroll Reveal
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
    <section id="pricing" className="pt-20 pb-24 px-6 text-center py-3">

      <h2 className="text-3xl font-bold mb-12 reveal">Pricing</h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">

        {/* STANDARD */}
        <div
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          className="tilt-card glow-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 w-full md:w-72 text-center transition duration-300 shadow-xl reveal"
        >

          <h3 className="text-xl font-semibold">Standard Website</h3>
          <p className="text-4xl font-bold mt-4">₹2999</p>

          <ul className="text-gray-400 mt-6 space-y-2 text-sm">
            <li>✔ Professional Design</li>
            <li>✔ Mobile Responsive</li>
            <li>✔ Contact Form</li>
            <li>✔ Free Hosting</li>
          </ul>

        </div>

        {/* EARLY BIRD */}
        <div
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          className="tilt-card glow-card bg-linear-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-xl border border-purple-500 rounded-2xl p-8 sm:p-10 w-full md:w-72 text-center transition duration-300 shadow-xl reveal"
        >

          <h3 className="text-xl font-semibold">Early Bird Offer</h3>
          <p className="text-4xl font-bold mt-4">₹2499</p>

          <p className="text-sm text-gray-300 mt-2">First 10 Clients Only</p>

          <ul className="text-gray-300 mt-6 space-y-2 text-sm">
            <li>✔ Everything in Standard</li>
            <li>✔ Priority Support</li>
            <li>✔ Free Minor Changes</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
