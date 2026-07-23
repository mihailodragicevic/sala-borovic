import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { Seo } from "@/components/site/Seo";
import { localBusinessSchema } from "@/lib/schema";

// Ista kanonska LocalBusiness shema kao na pocetnoj (isti @id) - Google je
// dedupe-uje u jedan entitet, bez konfliktnih/nekompletnih duplikata.
const contactSchema = localBusinessSchema;

const ContactPage = () => (
  <Layout>
    <Seo
      title="Kontakt | Svečana sala Borović, Bogatić"
      description="Kontaktirajte svečanu salu Borović u Bogatiću. Pozovite nas za salu za svadbe Bogatić, rođendane, proslave i rezervaciju termina."
      pathname="/kontakt"
      schema={contactSchema}
    />
    <PageHeader
      eyebrow="Kontakt"
      title={<>Hajde da kreiramo <span className="text-gradient italic">vaš dan</span></>}
      subtitle="Pozovite nas, pošaljite poruku ili nas posetite u Bogatiću - odgovaramo u najkraćem roku."
    />
    <Contact />
  </Layout>
);

export default ContactPage;
