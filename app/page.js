"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Pricing from "./components/pricing";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Brands from "./components/brands";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollProgress from "./components/scrollprogress";
import Portfolio from "./components/portfolio";
import WhyChoose from "./components/whychoose";
import Process from "./components/process";
import FAQ from "./components/faq";



export default function Home() {
  return (
    <main className="text-white min-h-screen">

      <ScrollProgress />


<Hero />
<Stats />
<Services />
<WhyChoose />
<Portfolio />
<Process />
<Testimonials />
<Pricing />
<Brands />
<FAQ />
<Contact />


    </main>
  );
}
