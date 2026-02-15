"use client";

import { useEffect, useState } from "react";
import useTilt from "./useTilt";


export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const { handleTilt, resetTilt } = useTilt();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const text = "That Convert";
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
  const move = e => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 80,
      y: (e.clientY / window.innerHeight - 0.5) * 80,
    });
  };

  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, []);


  return (
    <section
      id="home"
      className="relative min-h-[80vh] pt-20 overflow-hidden py-5"
    >
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      {/* Dynamic Glow */}
      <div
        className="absolute w-125 h-125 bg-purple-600/30 rounded-full blur-[140px]"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      />

      <div
        className="absolute w-100 h-100 bg-blue-600/30 rounded-full blur-[140px] right-0 bottom-0"
        style={{ transform: `translate(${-mouse.x}px, ${-mouse.y}px)` }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center text-center md:text-left">


        {/* LEFT */}
        <div className="reveal">


          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            Websites{" "}
            <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            Premium UI, animations, and performance optimized websites for startups & businesses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">


            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 active:scale-95 transition-all"
            >
              Get Started
            </a>

            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-purple-500 hover:scale-105 active:scale-95 transition-all"
            >
              View Pricing
            </a>

          </div>

        </div>

        {/* RIGHT – 3D Laptop */}
        <div
  onMouseMove={handleTilt}
  onMouseLeave={resetTilt}
  className="tilt-card relative reveal group mt-6 md:mt-0 flex justify-center"
>


          {/* floating cards */}
          <div className="hidden md:block absolute -left-16 top-20 bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-white/10 animate-floatSlow">
            UI Design
          </div>

          <div className="hidden md:block absolute right-0 bottom-20 bg-white/10 backdrop-blur-xl p-3 rounded-xl border border-white/10 animate-floatSlow delay-200">
            Fast Delivery
          </div>

          <img
  src="/hero-image.png"
  alt="Website Design"
  className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto scale-110 drop-shadow-[0_80px_160px_rgba(0,0,0,0.9)] animate-float"

/>


        </div>

      </div>
    </section>
  );
}
