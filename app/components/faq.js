"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 3–5 working days depending on requirements.",
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes. Our pricing is transparent and one-time. No hidden charges.",
  },
  {
    question: "Do I get revisions?",
    answer: "Yes. We provide free minor revisions to ensure you're satisfied.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer: "Absolutely. All websites are fully responsive across devices.",
  },
  {
    question: "Do you provide hosting support?",
    answer: "Yes. We help you set up hosting and guide you through deployment.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    });
    els.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="section py-0.5 md:py-4 px-3 md:px-6">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        Everything you need to know before getting started.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#0b0f1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 reveal hover:border-purple-500/40 transition"
          >
            <button
              type="button"
              className="w-full text-left flex justify-between items-center bg-transparent"
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="font-semibold text-white">{faq.question}</span>

              <span className="text-purple-400 text-xl">
                {active === i ? "−" : "+"}
              </span>
            </button>

            {active === i && (
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

        {/* ✅ View All FAQs Button */}
        <div className="text-center pt-8 reveal">
          <Link
            href="/faq"
            className="inline-block px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition"
          >
            View All FAQs
          </Link>
        </div>

      </div>
    </section>
  );
}
