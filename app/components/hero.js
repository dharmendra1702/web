"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "That Convert";
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(typing);
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className=" pt-28 animated-bg min-h-screen flex items-center py-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Build Websites <br />

            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-6 text-gray-400">
            Premium websites starting at ₹2999
          </p>

          <div className="mt-10 flex gap-6">

            <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 text-white">
              View Pricing
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-image.png"
            alt="Website Design"
            className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl scale-105 drop-shadow-2xl animate-float"
          />
        </div>

      </div>
    </section>
  );
}
