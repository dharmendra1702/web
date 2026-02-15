"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 3–5 working days depending on requirements.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. Our pricing is transparent and one-time. No hidden charges.",
  },
  {
    question: "Do I get revisions?",
    answer:
      "Yes. We provide free minor revisions to ensure you're satisfied.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Absolutely. All websites are fully responsive across devices.",
  },
  {
    question: "Do you provide hosting support?",
    answer:
      "Yes. We help you set up hosting and guide you through deployment.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can upgrade anytime based on your business needs.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. All plans include basic SEO, and advanced SEO is available.",
  },
];

export default function AllFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen py-20 px-4 md:px-6">

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        All Frequently Asked Questions
      </h1>

      <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
        Complete information about our services and process.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition hover:border-purple-500/40"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="font-semibold">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  active === i ? "rotate-180 text-purple-400" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
