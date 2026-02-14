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

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <ScrollProgress />

      <Header />
      <Hero />
      <Stats />
      <Pricing />
      <Services />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />


    </main>
  );
}
