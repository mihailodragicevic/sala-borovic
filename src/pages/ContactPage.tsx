import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { Seo } from "@/components/site/Seo";
import { CONTACT_EMAIL, CONTACT_MAPS_HREF, FACEBOOK_HREF, INSTAGRAM_HREF } from "@/lib/contact";
import { DEFAULT_OG_IMAGE, SITE_LOGO, SITE_URL } from "@/lib/seo";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/EventVenue",
  name: "Svečana sala Borović Bogatić",
  url: `${SITE_URL}/kontakt`,
  image: DEFAULT_OG_IMAGE,
  logo: SITE_LOGO,
  telephone: "+381644820780",
  email: CONTACT_EMAIL,
  hasMap: CONTACT_MAPS_HREF,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pavla Orlovića 51",
    addressLocality: "Bogatić",
    addressCountry: "RS",
  },
  sameAs: [INSTAGRAM_HREF, FACEBOOK_HREF],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+381644820780",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["sr"],
    },
  ],
};

const ContactPage = () => (
  <Layout>
    <Seo
      title="Kontakt | Svečana sala Borović Bogatić"
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
