import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Seo } from "@/components/site/Seo";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const seoSchema = [websiteSchema, organizationSchema, localBusinessSchema];

const Index = () => (
  <Layout>
    <Seo
      title="Svečana sala Borović | Sala za svadbe i proslave Bogatić"
      description="Svečana sala Bogatić za svadbe, rođendane i proslave do 450 gostiju. Elegantna sala za svadbe Bogatić sa organizacijom, dekoracijom i rezervacijama."
      pathname="/"
      schema={seoSchema}
    />
    <Hero />
    <div className="content-auto">
      <Benefits />
    </div>
    <div className="content-auto">
      <Gallery />
    </div>
    <div className="content-auto">
      <About />
    </div>
    <div className="content-auto">
      <Services />
    </div>
    <div className="content-auto">
      <Testimonials />
    </div>
    <div className="content-auto">
      <CtaBanner />
    </div>
  </Layout>
);

export default Index;
