"use client";

import { useState, useRef } from "react";

export default function Contact() {

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
    <section id="contact" className="py-24 text-center">

      <h2 className="text-3xl font-bold mb-3">Contact Dharma Web Services</h2>

      <p className="text-gray-400 mb-10">
        Have a project in mind? Let’s build something amazing.
      </p>

      <form
        className="max-w-md mx-auto space-y-6"
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

      {loading && (
  <div className="loading-overlay">
    <div className="loading-modal">
      <div className="loading-spinner"></div>
      <p className="text-sm">Sending…</p>
    </div>
  </div>
)}



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
