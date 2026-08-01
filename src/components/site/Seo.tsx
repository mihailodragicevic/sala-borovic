import { useEffect } from "react";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

type SchemaNode = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string;
  robots?: string;
  schema?: SchemaNode | SchemaNode[];
  preloadImages?: string[];
};

const ensureNamedMeta = (name: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensurePropertyMeta = (property: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureCanonical = () => {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  return tag;
};

export const Seo = ({
  title,
  description,
  pathname = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
  preloadImages = [],
}: SeoProps) => {
  useEffect(() => {
    const pageUrl = new URL(pathname, SITE_URL).toString();
    document.title = title;

    ensureNamedMeta("description").content = description;
    ensureNamedMeta("keywords").content = keywords;
    ensureNamedMeta("author").content = SITE_NAME;
    ensureNamedMeta("robots").content = robots;
    ensureNamedMeta("googlebot").content = robots;
    ensureNamedMeta("twitter:card").content = "summary_large_image";
    ensureNamedMeta("twitter:title").content = title;
    ensureNamedMeta("twitter:description").content = description;
    ensureNamedMeta("twitter:url").content = pageUrl;
    ensureNamedMeta("twitter:image").content = image;
    ensureNamedMeta("twitter:image:alt").content = imageAlt;

    ensurePropertyMeta("og:title").content = title;
    ensurePropertyMeta("og:description").content = description;
    ensurePropertyMeta("og:type").content = type;
    ensurePropertyMeta("og:url").content = pageUrl;
    ensurePropertyMeta("og:image").content = image;
    ensurePropertyMeta("og:image:secure_url").content = image;
    ensurePropertyMeta("og:image:type").content = "image/jpeg";
    ensurePropertyMeta("og:image:width").content = String(DEFAULT_OG_IMAGE_WIDTH);
    ensurePropertyMeta("og:image:height").content = String(DEFAULT_OG_IMAGE_HEIGHT);
    ensurePropertyMeta("og:image:alt").content = imageAlt;
    ensurePropertyMeta("og:site_name").content = SITE_NAME;
    ensurePropertyMeta("og:locale").content = "sr_RS";

    ensureCanonical().href = pageUrl;

    const createdPreloads = preloadImages.map((href, index) => {
      const id = `seo-preload-image-${index}`;
      const existing = document.getElementById(id) as HTMLLinkElement | null;
      if (existing) {
        existing.href = href;
        return existing;
      }

      const link = document.createElement("link");
      link.id = id;
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    const schemaNodes = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const createdScripts = schemaNodes.map((entry, index) => {
      const id = `seo-ld-json-${index}`;
      const script = document.getElementById(id) as HTMLScriptElement | null ?? document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(entry);
      if (!script.parentNode) {
        document.head.appendChild(script);
      }
      return script;
    });

    return () => {
      createdPreloads.forEach((link) => link.remove());
      createdScripts.forEach((script) => script.remove());
    };
  }, [description, image, imageAlt, keywords, pathname, preloadImages, robots, schema, title, type]);

  return null;
};
