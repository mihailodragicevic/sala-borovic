import { CONTACT_EMAIL, CONTACT_MAPS_HREF, FACEBOOK_HREF, INSTAGRAM_HREF } from "@/lib/contact";
import { DEFAULT_OG_IMAGE, SITE_LOGO, SITE_NAME, SITE_URL } from "@/lib/seo";

// Stabilni identifikatori cvorova - Google dedupe-uje po @id, pa isti biznis
// referenciran sa vise stranica ostaje jedan entitet.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const TELEPHONE = "+381644820780";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "sr-RS",
  publisher: { "@id": ORGANIZATION_ID },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Svečana sala Borović",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: {
    "@type": "ImageObject",
    url: SITE_LOGO,
  },
  sameAs: [INSTAGRAM_HREF, FACEBOOK_HREF],
};

// Kanonski LocalBusiness - jedini izvor istine, koristi se na svim stranicama.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  additionalType: "https://schema.org/EventVenue",
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: SITE_LOGO,
  telephone: TELEPHONE,
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
      telephone: TELEPHONE,
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["sr"],
    },
  ],
};
