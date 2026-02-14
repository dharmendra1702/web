"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4, // section becomes active when ~40% visible
    }
  );

  sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItem = (id, label) => (
  <a
    href={`#${id}`}
    className={`relative transition ${
      active === id ? "text-white" : "text-gray-300 hover:text-white"
    }`}
  >
    {label}

    {/* Animated underline */}
    <span
      className={`absolute left-0 -bottom-2 h-[2px] bg-white transition-all duration-300 ${
        active === id ? "w-full" : "w-0"
      }`}
    />
  </a>
);


  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl transition-all ${
          scrolled ? "bg-black/80 py-1" : "bg-black/60 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-4 md:px-6">

          {/* LOGO (20% smaller + glow on hover) */}
          <a href="#home">
            <img
              src="/dws.png"
              alt="DWS Logo"
              className="
                w-[56px] sm:w-[70px] md:w-[88px] lg:w-[104px]
                transition-all duration-300
                hover:drop-shadow-[0_0_12px_rgba(99,102,241,.6)]
              "
            />
          </a>

          {/* Desktop Nav (centered vertically by items-center above) */}
          <nav className="hidden md:flex gap-8 text-sm items-center">
            {navItem("home", "Home")}
            {navItem("pricing", "Pricing")}
            {navItem("brands", "Brands")}
            {navItem("contact", "Contact")}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-lg active:scale-90 transition"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-lg active:scale-90 transition"
        >
          ✕
        </button>

        <div className="h-full flex flex-col items-center justify-center gap-10 text-2xl font-medium text-white">
          <a onClick={() => setOpen(false)} href="#home" className="hover:scale-110 transition">Home</a>
          <a onClick={() => setOpen(false)} href="#pricing" className="hover:scale-110 transition">Pricing</a>
          <a onClick={() => setOpen(false)} href="#brands" className="hover:scale-110 transition">Brands</a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:scale-110 transition">Contact</a>
        </div>
      </div>
    </>
  );
}
