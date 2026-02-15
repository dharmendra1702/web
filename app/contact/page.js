"use client";

import { useState, useRef } from "react";

export default function ContactPage() {

  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const submitted = useRef(false);

  function validateForm(form){

    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const message=form.message.value.trim();

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid=true;

    const setErr=(id,msg)=>{
      document.getElementById(id).innerText=msg;
      if(msg) valid=false;
    };

    setErr("err-name",name?"":"Required");
    setErr("err-email",emailRegex.test(email)?"":"Invalid");
    setErr("err-msg",message?"":"Required");

    document.getElementById("count").innerText=message.length+"/300";

    return valid;
  }

  return (
    <section className="min-h-screen px-4">

      {/* HEADER OFFSET — DO NOT REMOVE */}
      <div className="h-24 md:h-32"></div>

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-400 mb-4">
              Reach out for website development, UI/UX design, or digital solutions.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📧 dharmawebservice@gmail.com</p>
              <p>📞 +91 XXXXXXXXXX</p>
              <p>📍 Bangalore, India</p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="w-full max-w-xl mx-auto space-y-5"
            onSubmit={async(e)=>{
              e.preventDefault();

              submitted.current = true;

              if(!validateForm(e.target)) return;

              setLoading(true);

              await fetch("https://formspree.io/f/mreaqgby",{
                method:"POST",
                body:new FormData(e.target),
                headers:{Accept:"application/json"}
              });

              setLoading(false);
              setSuccess(true);

              e.target.reset();
              document.getElementById("count").innerText="0/300";

              submitted.current = false;

              setTimeout(()=>setSuccess(false),2500);
            }}

            onInput={(e)=>{
              if(submitted.current){
                validateForm(e.currentTarget);
              }
            }}
          >

            <div className="field">
              <input name="name" placeholder=" " />
              <label>Your Name</label>
              <span id="err-name" className="error-right"></span>
            </div>

            <div className="field">
              <input name="email" placeholder=" " />
              <label>Your Email</label>
              <span id="err-email" className="error-right"></span>
            </div>

            <div className="field">
              <textarea name="message" placeholder=" " maxLength="300"/>
              <label>Your Message</label>
              <span id="err-msg" className="error-right"></span>

              <div className="text-right text-xs text-gray-500 mt-1">
                <span id="count">0/300</span>
              </div>
            </div>

            <button className="w-full py-3 rounded-lg font-medium bg-white text-black transition-all duration-300 hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:scale-[1.02] active:scale-95">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* LOADER */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-modal">
            <div className="loading-spinner"></div>
            <p className="text-sm">Sending…</p>
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="success-icon">✓</div>
            <h3 className="text-xl font-semibold">Message Sent</h3>
            <p className="mt-2 text-sm text-gray-300">
              We’ll contact you shortly.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
