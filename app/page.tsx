import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import FeaturedTestimonial from "./components/FeaturedTestimonial";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Blog from "./components/Blog";
import PhotographyCTA from "./components/PhotographyCTA";
import FAQ from "./components/FAQ";
import Tyshi from "./components/Tyshi";
import HowWeWork from "./components/HowWeWork";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemStatement />
      <Benefits/>
      <Services/>
      <HowWeWork />
      <FeaturedTestimonial />
      <Portfolio/>
      <Blog/>
      <Tyshi/>
      <Testimonials/>
      <FAQ/>
      <PhotographyCTA/>
      <Footer />
    </div>
  );
}
