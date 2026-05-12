import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutStory } from "@/components/site/about/AboutStory";
import { AboutAtmosphere } from "@/components/site/about/AboutAtmosphere";
import { AboutShowcase } from "@/components/site/about/AboutShowcase";
import { AboutFinalCta } from "@/components/site/about/AboutFinalCta";
import aboutHeroImage from "@/assets/Unutrasnjost sale.webp";

const AboutPage = () => (
  <Layout>
    <Seo
      title="O nama | Svečana sala Borović Bogatić"
      description="Upoznajte svečanu salu Borović u Bogatiću. Moderan ambijent, iskustvo u organizaciji i elegantan prostor za svadbe, proslave i porodična okupljanja."
      pathname="/o-nama"
      preloadImages={[aboutHeroImage]}
    />
    <AboutHero />
    <AboutStory />
    <AboutAtmosphere />
    <AboutShowcase />
    <AboutFinalCta />
  </Layout>
);

export default AboutPage;
