import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { OurStory } from "@/components/site/OurStory";
import { OurValues } from "@/components/site/OurValues";

const AboutPage = () => (
  <Layout>
    <PageHeader
      eyebrow="O nama"
      title={<>Tradicija, elegancija, <span className="text-gradient italic">posvećenost</span></>}
      subtitle="Više od trinaest godina pretvaramo najznačajnije trenutke porodica iz Bogatića i šire okoline u nezaboravne uspomene."
    />
    <About />
    <Benefits />
    <OurStory />
    <OurValues />
  </Layout>
);

export default AboutPage;
