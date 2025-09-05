import Footer from "./components/Footer";
import NewsInsights from "./components/NewsInsights";
import YourFuture from "./components/YourFuture";
import Testimonials from "./components/Testimonials";
import OurWork from "./components/OurWork";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import TrustedBrands from "./components/TrustedBrands";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustedBrands />
      <AboutUs />
      <WhatWeDo />
      <OurWork />
      <Testimonials />
      <YourFuture />
 
      
      
      <NewsInsights />
      <Footer />
    </div>
  );
}
