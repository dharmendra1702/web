"use client";

export default function Home() {
  function validateForm(form,shakeOnError){

const name=form.name.value.trim();
const email=form.email.value.trim();
const message=form.message.value.trim();
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let valid=true;

const setError=(input,id,msg)=>{
document.getElementById(id).innerText=msg;
input.classList.toggle("border-red",!!msg);

if(msg && shakeOnError){
input.classList.add("shake");
setTimeout(()=>input.classList.remove("shake"),300);
valid=false;
}
};

setError(form.name,"err-name",name?"":"Required");
setError(form.email,"err-email",emailRegex.test(email)?"":"Invalid");
setError(form.message,"err-msg",message?"":"Required");

document.getElementById("count").innerText=message.length+"/300";

form.dataset.valid=valid?"true":"false";
}

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      
{/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div className="flex items-center gap-3">
<img src="/dws.png" className="h-10"/>
</div>

<nav className="hidden md:flex gap-8 text-sm text-gray-300">
<a href="#home" className="hover:text-white">Home</a>
<a href="#pricing" className="hover:text-white">Pricing</a>
<a href="#brands" className="hover:text-white">Brands</a>
<a href="#contact" className="hover:text-white">Contact</a>
</nav>

</div>
</header>

{/* HERO */}
<section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

<div className="absolute inset-0 bg-linear-to-br from-purple-800/40 via-black to-blue-900/40 blur-3xl -z-10"/>

<h1 className="text-5xl md:text-6xl font-bold">Dharma Web Services</h1>

<p className="mt-4 text-gray-400 max-w-xl">
Premium Websites for Businesses That Want to Grow Online
</p>

<button className="mt-8 bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition">
Get Started
</button>

<p className="mt-4 text-sm text-gray-500">
Starting at ₹2999 | First 10 Clients ₹2499
</p>

</section>

{/* PRICING */}
<section id="pricing" className="py-24 flex justify-center">

<div className="flex gap-10 flex-wrap">

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-72 text-center hover:scale-105 transition">
<h3 className="text-xl font-semibold">Standard Website</h3>
<p className="text-4xl font-bold mt-4">₹2999</p>

<ul className="text-gray-400 mt-6 space-y-2 text-sm">
<li>✔ Professional Design</li>
<li>✔ Mobile Responsive</li>
<li>✔ Contact Form</li>
<li>✔ Free Hosting</li>
</ul>
</div>

<div className="bg-linear-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-xl border border-purple-500 rounded-2xl p-10 w-72 text-center hover:scale-105 transition">
<h3 className="text-xl font-semibold">Early Bird Offer</h3>
<p className="text-4xl font-bold mt-4">₹2499</p>

<p className="text-sm text-gray-300 mt-2">First 10 Clients Only</p>

<ul className="text-gray-300 mt-6 space-y-2 text-sm">
<li>✔ Everything in Standard</li>
<li>✔ Priority Support</li>
<li>✔ Free Minor Changes</li>
</ul>
</div>

</div>
</section>

{/* SERVICES */}
<section className="py-24 text-center">

<h2 className="text-3xl font-bold mb-12">Our Services</h2>

<div className="flex justify-center gap-10 flex-wrap">

<div className="bg-white/5 border border-white/10 p-8 rounded-xl w-64">
<h3 className="font-semibold mb-3">Website Development</h3>
<p className="text-gray-400 text-sm">Modern responsive websites for businesses.</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl w-64">
<h3 className="font-semibold mb-3">UI / UX Design</h3>
<p className="text-gray-400 text-sm">Clean and user-friendly interfaces.</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl w-64">
<h3 className="font-semibold mb-3">Landing Pages</h3>
<p className="text-gray-400 text-sm">High-converting marketing pages.</p>
</div>

</div>

</section>

{/* TESTIMONIALS */}
<section className="py-24 text-center bg-white/5">

<h2 className="text-3xl font-bold mb-12">What Clients Say</h2>

<div className="flex justify-center gap-8 flex-wrap">

<div className="bg-black border border-white/10 p-6 rounded-xl w-72">
<p className="text-gray-400 text-sm">
“Professional design and fast delivery. Highly recommended.”
</p>
<h4 className="mt-4 font-semibold">— Local Business Owner</h4>
</div>

<div className="bg-black border border-white/10 p-6 rounded-xl w-72">
<p className="text-gray-400 text-sm">
“Affordable pricing with premium quality website.”
</p>
<h4 className="mt-4 font-semibold">— Startup Founder</h4>
</div>

<div className="bg-black border border-white/10 p-6 rounded-xl w-72">
<p className="text-gray-400 text-sm">
“DWS gave my brand an online presence quickly.”
</p>
<h4 className="mt-4 font-semibold">— Entrepreneur</h4>
</div>

</div>

</section>


{/* TRUSTED BRANDS */}
<section id="brands" className="py-24 bg-white text-black text-center overflow-hidden">

<h2 className="text-3xl font-bold mb-12">
Built Using Trusted Global Technologies
</h2>

<div className="relative w-full logo-wrapper">

<div className="logo-track">

{/* SET 1 */}
<div className="logo-row">

<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
<img src="/google.png"/>
</a>

<a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
<img src="/amazon.png"/>
</a>

<a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
<img src="/flipkart.png"/>
</a>

<a href="https://www.infosys.com" target="_blank" rel="noopener noreferrer">
<img src="/infosys.png"/>
</a>

<a href="https://subiofoods.com" target="_blank" rel="noopener noreferrer">
<img src="/Subio.png"/>
</a>

<a href="https://crave-cart-82wd.onrender.com/" target="_blank" rel="noopener noreferrer">
<img src="/cravecart.png"/>
</a>

</div>

{/* SET 2 */}
<div className="logo-row">

<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
<img src="/google.png"/>
</a>

<a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
<img src="/amazon.png"/>
</a>

<a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
<img src="/flipkart.png"/>
</a>

<a href="https://www.infosys.com" target="_blank" rel="noopener noreferrer">
<img src="/infosys.png"/>
</a>

<a href="https://subiofoods.com" target="_blank" rel="noopener noreferrer">
<img src="/Subio.png"/>
</a>

<a href="https://crave-cart-82wd.onrender.com/" target="_blank" rel="noopener noreferrer">
<img src="/cravecart.png"/>
</a>

</div>


</div>

</div>

<p className="text-sm text-gray-500 mt-10">
Logos shown for demonstration purposes only.
</p>

</section>

{/* CONTACT */}
<section id="contact" className="py-24 text-center">

<h2 className="text-3xl font-bold mb-3">Contact Dharma Web Services</h2>

<p className="text-gray-400 mb-10">
Have a project in mind? Let’s build something amazing.
</p>

<form
noValidate
onSubmit={async (e)=>{
e.preventDefault();

const form=e.target;
form.dataset.submitted="true";

validateForm(form,true);

if(form.dataset.valid!=="true") return;

const spinner=document.getElementById("spinner");
const popup=document.getElementById("thanks");

spinner.classList.remove("opacity-0","pointer-events-none");

await fetch("https://formspree.io/f/mreaqgby",{
method:"POST",
body:new FormData(form),
headers:{Accept:"application/json"}
});

spinner.classList.add("opacity-0","pointer-events-none");
popup.classList.remove("opacity-0","pointer-events-none");

form.reset();
document.getElementById("count").innerText="0/300";

setTimeout(()=>{
popup.classList.add("opacity-0","pointer-events-none");
},2500);

}}

onInput={(e)=>{
const form=e.currentTarget;
if(form.dataset.submitted==="true"){
validateForm(form,false);
}
}}

className="max-w-md mx-auto space-y-6"
>

{/* NAME */}
<div className="relative">
<input name="name" placeholder="Your Name" className="input pr-16"/>
<span id="err-name" className="error-right"></span>
</div>

{/* EMAIL */}
<div className="relative">
<input name="email" placeholder="Your Email" className="input pr-16"/>
<span id="err-email" className="error-right"></span>
</div>

{/* MESSAGE */}
<div className="relative">
<textarea name="message" maxLength="300" placeholder="Tell us about your project" className="input pr-16"/>
<span id="err-msg" className="error-right"></span>

<div className="text-right text-xs text-gray-500 mt-1">
<span id="count">0/300</span>
</div>
</div>

<button
className="w-full py-3 rounded-lg font-medium bg-white text-black transition-all duration-300 hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:scale-[1.02] active:scale-95"
>
Send Message
</button>

{/* LOADING POPUP */}
<div
id="spinner"
className="fixed inset-0 grid place-items-center z-50 opacity-0 pointer-events-none transition-opacity duration-300 fade-spinner"
>

<div className="bg-white/90 p-8 rounded-xl shadow-xl text-center">

<div className="loader mx-auto mb-3"></div>

<p className="text-sm text-gray-700 font-medium">Sending…</p>

</div>

</div>

</form>

{/* THANK YOU POPUP */}
<div
id="thanks"
className="fixed inset-0 bg-black/60 backdrop-blur-sm grid place-items-center z-50 opacity-0 pointer-events-none transition"
>

<div className="bg-white/90 text-black p-10 rounded-2xl text-center w-96 shadow-2xl animate-pop">

<div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl">
✓
</div>

<h3 className="text-2xl font-bold">Message Sent!</h3>

<p className="text-gray-600 mt-2 text-sm">
We’ll contact you shortly.
</p>

</div>

</div>

</section>


{/* WHATSAPP */}
<a href="https://wa.me/91XXXXXXXXXX"
className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl">
WhatsApp
</a>

{/* NEWSLETTER SPINNER */}
<div
id="news-spinner"
className="fixed inset-0 grid place-items-center z-50 opacity-0 pointer-events-none transition"
>
<div className="bg-white/90 p-6 rounded-xl shadow-xl text-center">
<div className="loader mx-auto mb-2"></div>
<p className="text-sm text-gray-700">Subscribing…</p>
</div>
</div>

{/* NEWSLETTER SUCCESS */}
<div
id="news-popup"
className="fixed inset-0 grid place-items-center z-50 opacity-0 pointer-events-none transition"
>
<div className="bg-white/90 p-8 rounded-xl shadow-xl text-center">
<div className="text-green-500 text-3xl mb-2">✓</div>
<p className="text-gray-800 font-medium">Subscribed successfully!</p>
</div>
</div>

{/* FOOTER */}
<footer className="relative bg-black text-gray-300 pt-20">

{/* Glass background */}
<div className="absolute inset-0 bg-white/5 backdrop-blur-xl -z-10"></div>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

{/* BRAND */}
<div>
<img src="/dws.png" className="h-10 mb-4"/>
<p className="text-sm text-gray-400">
Premium websites for growing businesses.
</p>

<div className="flex gap-4 mt-6">

{/* Facebook */}
<a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110 ">
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
</svg>
</a>

{/* X (Twitter) */}
<a href="https://x.com" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110">
<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
<path d="M18.2 2H21l-6.6 7.5L22 22h-6.3l-5-6.2L5 22H2l7-8L2 2h6.4l4.5 5.7L18.2 2z"/>
</svg>
</a>

{/* Instagram */}
<a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition hover:scale-110">
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
<h4 className="text-white font-semibold mb-4">Company</h4>

<ul className="space-y-2 text-sm">
<li>
<a href="#home" className="hover:text-white transition">About Us</a>
</li>

<li>
<a href="#" className="hover:text-white transition">Blog</a>
</li>

<li>
<a href="#" className="hover:text-white transition">Careers</a>
</li>
</ul>
</div>


{/* SUPPORT */}
<div>
<h4 className="text-white font-semibold mb-4">Support</h4>

<ul className="space-y-2 text-sm">
<li>
<a href="#" className="hover:text-white transition">FAQs</a>
</li>

<li>
<a href="#contact" className="hover:text-white transition">Contact Us</a>
</li>

<li>
<a href="#" className="hover:text-white transition">Terms & Conditions</a>
</li>

<li>
<a href="#" className="hover:text-white transition">Privacy Policy</a>
</li>
</ul>
</div>

{/* NEWSLETTER */}
<div>
<h4 className="text-white font-semibold mb-4">Get Exclusive Offers</h4>

<form
onSubmit={async(e)=>{
e.preventDefault();

const form = e.target;
const email = form.newsletter.value.trim();
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email)){
alert("Enter a valid email");
return;
}

// Duplicate prevention (localStorage)
const saved = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
if(saved.includes(email)){
document.getElementById("news-dup").classList.remove("hidden");
setTimeout(()=>document.getElementById("news-dup").classList.add("hidden"),2000);
return;
}

const spinner=document.getElementById("news-spinner");
const popup=document.getElementById("news-popup");

spinner.classList.remove("opacity-0","pointer-events-none");

// Send to Formspree
await fetch("https://formspree.io/f/xqedqkbj ",{
method:"POST",
body:new FormData(form),
headers:{Accept:"application/json"}
});

// Save locally to prevent duplicates
saved.push(email);
localStorage.setItem("newsletterEmails",JSON.stringify(saved));

spinner.classList.add("opacity-0","pointer-events-none");
popup.classList.remove("opacity-0","pointer-events-none");

form.reset();

setTimeout(()=>{
popup.classList.add("opacity-0","pointer-events-none");
},2000);

}}
className="space-y-3"
>

<div className="flex">
<input
name="newsletter"
placeholder="Enter your email"
className="bg-black border border-white/20 rounded-l-full px-4 py-2 w-full text-sm"
/>

<button className="bg-orange-500 px-6 rounded-r-full text-black text-sm hover:bg-orange-400 transition">
Subscribe
</button>
</div>

<p id="news-dup" className="hidden text-red-400 text-sm">
Already subscribed 🙂
</p>

</form>

<p className="text-sm text-gray-400 mt-4">
Contact:<br/>
dharmawebservice@gmail.com<br/>
</p>

</div>


</div>

{/* Divider */}
<div className="border-t border-white/10 mt-16"></div>

{/* Bottom */}
<div className="text-center text-sm text-gray-500 py-6">
© {new Date().getFullYear()} Dharma Web Services. All rights reserved.
</div>

</footer>


</main>
  );
}
