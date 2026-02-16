"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {

  const [newsLoading,setNewsLoading] = useState(false);
  const [newsSuccess,setNewsSuccess] = useState(false);
  const [duplicate,setDuplicate] = useState(false);

  async function handleNewsletter(e){
    e.preventDefault();

    const email = e.target.newsletter.value.trim();
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){
      alert("Enter valid email");
      return;
    }

    const saved = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");

    if(saved.includes(email)){
      setDuplicate(true);
      setTimeout(()=>setDuplicate(false),2000);
      return;
    }

    setNewsLoading(true);

    await fetch("https://formspree.io/f/xqedqkbj",{
      method:"POST",
      body:new FormData(e.target),
      headers:{Accept:"application/json"}
    });

    saved.push(email);
    localStorage.setItem("newsletterEmails",JSON.stringify(saved));

    setNewsLoading(false);
    setNewsSuccess(true);

    e.target.reset();

    setTimeout(()=>setNewsSuccess(false),2000);
  }

  return (
    <footer className="relative bg-black text-gray-300 pt-6 pb-4">

      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl -z-10"/>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center items-start">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

  <img
    src="/dws.png"
    alt="DWS Logo"
    className="
      w-22.5 sm:w-30 md:w-35 lg:w-42.5
      transition-all duration-300
      hover:drop-shadow-[0_0_12px_rgba(99,102,241,.6)]
    "
  />

  <p className="text-sm text-gray-400 mt-3 max-w-xs">
    Premium websites for growing businesses.
  </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

{/* Facebook */}
<a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110 ">
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
</svg>
</a>

{/* X (Twitter) */}
<a href="https://x.com/DharmaServices" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110">
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M18.2 2H21l-6.6 7.5L22 22h-6.3l-5-6.2L5 22H2l7-8L2 2h6.4l4.5 5.7L18.2 2z"/>
</svg>
</a>

{/* Instagram */}
<a href="https://www.instagram.com/dharma_web_services" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110">
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
</svg>
</a>

{/* WhatsApp */}
<a
href="https://wa.me/91XXXXXXXXXX"
target="_blank"
className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110"
>
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.4c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.8-3.3c-.2-.3 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.9 3.5.5.2.9.4 1.2.5.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>
</svg>
</a>

</div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Get Exclusive Offers</h4>

          <form onSubmit={handleNewsletter} className="space-y-3">

            <div className="flex items-center border border-white/30 rounded-full overflow-hidden h-11">

  <input
    name="newsletter"
    placeholder="Enter your email"
    className="
      flex-1
      bg-transparent
      px-5
      text-sm
      outline-none
      text-white
      placeholder-gray-500
      h-full
    "
  />

  <button
  type="submit"
  style={{ backgroundColor: "#ffffff", color: "#000000" }}
  className="
    h-full
    px-6
    text-sm
    font-medium
    hover:opacity-90
    transition
  "
>
  Subscribe
</button>


</div>


            {duplicate && (
              <p className="text-red-400 text-sm">
                Already subscribed 🙂
              </p>
            )}

          </form>

          <p className="text-sm text-gray-400 mt-4">
            dharmawebservice@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 mt-4"/>

      <div className="text-center text-sm text-gray-500 py-2">
        © {new Date().getFullYear()} Dharma Web Services
      </div>

      {/* LOADER */}
      {newsLoading && (
        <div className="loading-overlay">
          <div className="loading-modal">
            <div className="loading-spinner"/>
            <p className="text-sm">Subscribing…</p>
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {newsSuccess && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="success-icon">✓</div>
            <p>Subscribed Successfully!</p>
          </div>
        </div>
      )}

    </footer>
  );
}
