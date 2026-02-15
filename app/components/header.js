"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const router = useRouter();
  const pathname = usePathname();

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

  // Active section observer (only on home)
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const goTo = id => {
    setOpen(false);
    router.push(`/#${id}`);
  };

  const navItem = (id, label) => (
    <button
      onClick={() => goTo(id)}
      className={`relative transition ${
        active === id ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {label}

      <span
        className={`absolute left-0 -bottom-2 h-0.5 bg-white transition-all duration-300 ${
          active === id ? "w-full" : "w-0"
        }`}
      />
    </button>
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

          {/* LOGO */}
          <button onClick={() => goTo("home")}>
            <img
              src="/dws.png"
              alt="DWS Logo"
              className="w-14 sm:w-17.5 md:w-22 lg:w-26 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(99,102,241,.6)]"
            />
          </button>

          {/* Desktop Nav */}
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
        className={`fixed inset-0 z-60 bg-black/90 backdrop-blur-2xl transition-all duration-500 ${
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

          <button onClick={() => goTo("home")} className="hover:scale-110 transition">Home</button>
          <button onClick={() => goTo("pricing")} className="hover:scale-110 transition">Pricing</button>
          <button onClick={() => goTo("brands")} className="hover:scale-110 transition">Brands</button>
          <button onClick={() => goTo("contact")} className="hover:scale-110 transition">Contact</button>

        </div>
      </div>
    </>
  );
}
