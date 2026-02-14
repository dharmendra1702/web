"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;
        if (barRef.current) {
          barRef.current.style.width = progress + "%";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-purple-500 to-blue-500 z-999"
    />
  );
}
