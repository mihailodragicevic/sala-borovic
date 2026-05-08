import { Layout } from "@/components/site/Layout";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutStory } from "@/components/site/about/AboutStory";
import { AboutAtmosphere } from "@/components/site/about/AboutAtmosphere";
import { AboutShowcase } from "@/components/site/about/AboutShowcase";
import { AboutDetails } from "@/components/site/about/AboutDetails";
import { AboutFinalCta } from "@/components/site/about/AboutFinalCta";

const AboutPage = () => (
  <Layout>
    <AboutHero />
    <AboutStory />
    <AboutAtmosphere />
    <AboutShowcase />
    <AboutDetails />
    <AboutFinalCta />
  </Layout>
);

export default AboutPage;
