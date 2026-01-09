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
import ContentCalendar from "./components/ContentCalendar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemStatement />
      <Benefits/>
      <Services/>
      <HowWeWork />
      <section id="content-calendar" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-4">
            Content Calendar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with upcoming content schedule. Monitor progress from draft to publication.
          </p>
        </div>
        <ContentCalendar />
      </section>
      <FeaturedTestimonial />
      <Portfolio/>
      {/* <Blog/> */}
      <Tyshi/>
      <Testimonials/>
      <FAQ/>
      <PhotographyCTA/>
      <Footer />
    </div>
  );
}
