import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileCallButton } from "@/components/site/MobileCallButton";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Index;
