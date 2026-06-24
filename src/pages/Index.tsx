import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Seo } from "@/components/site/Seo";
import { CONTACT_EMAIL, CONTACT_MAPS_HREF, FACEBOOK_HREF, INSTAGRAM_HREF } from "@/lib/contact";
import { DEFAULT_OG_IMAGE, SITE_LOGO, SITE_URL } from "@/lib/seo";

const seoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Svečana sala Borović Bogatić",
    url: SITE_URL,
    inLanguage: "sr-RS",
    publisher: {
      "@type": "Organization",
      name: "Svečana sala Borović",
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Svečana sala Borović",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
    },
    sameAs: [INSTAGRAM_HREF, FACEBOOK_HREF],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    additionalType: "https://schema.org/EventVenue",
    name: "Svečana sala Borović Bogatić",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: SITE_LOGO,
    telephone: "+381644820780",
    email: CONTACT_EMAIL,
    hasMap: CONTACT_MAPS_HREF,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pavla Orlovića 51",
      addressLocality: "Bogatić",
      addressRegion: "Mačva",
      postalCode: "15350",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.82980690904398,
      longitude: 19.479375174051405,
    },
    priceRange: "$$",
    maximumAttendeeCapacity: 450,
    description: "Svečana sala Bogatić za svadbe, rođendane i proslave u elegantnom ambijentu.",
    areaServed: {
      "@type": "Place",
      name: "Bogatić i Mačva",
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
  },
];

const Index = () => (
  <Layout>
    <Seo
      title="Svečana sala Borović Bogatić | Sala za svadbe i proslave"
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
