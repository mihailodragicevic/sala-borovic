import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const AboutPage = () => (
  <Layout>
    <PageHeader
      eyebrow="O nama"
      title={<>Tradicija, elegancija, <span className="text-gradient italic">posvećenost</span></>}
      subtitle="Više od trinaest godina pretvaramo najznačajnije trenutke porodica iz Bogatića i šire okoline u nezaboravne uspomene."
    />
    <About />
    <Benefits />
    <Testimonials />
    <CtaBanner />
  </Layout>
);

export default AboutPage;
