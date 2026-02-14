"use client";

import { useState, useEffect } from "react";

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
    <section className="relative py-32 px-6">

      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900/20 via-black to-blue-900/20"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 reveal">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 reveal">
        Everything you need to know before getting started.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 reveal"
          >
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-purple-400">
                {active === i ? "-" : "+"}
              </span>
            </button>

            {active === i && (
              <p className="text-gray-400 mt-4 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
