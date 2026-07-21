import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import WhyChoose from "./WhyChoose";
import CTA from "./CTA";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <Hero />
      <Stats />
      <Features />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}