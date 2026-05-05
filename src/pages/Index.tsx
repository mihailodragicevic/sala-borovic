import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const Index = () => (
  <Layout>
    <Hero />
    <Benefits />
    <Gallery />
    <About />
    <Services />
    <Testimonials />
    <CtaBanner />
  </Layout>
);

export default Index;
