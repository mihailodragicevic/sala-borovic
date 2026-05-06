import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";

const ContactPage = () => (
  <Layout>
    <PageHeader
      eyebrow="Kontakt"
      title={<>Hajde da kreiramo <span className="text-gradient italic">vaš dan</span></>}
      subtitle="Pozovite nas, pošaljite poruku ili nas posetite u Bogatiću — odgovaramo u najkraćem roku."
    />
    <Contact />
  </Layout>
);

export default ContactPage;
