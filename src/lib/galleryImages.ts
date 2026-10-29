type GalleryImage = {
  src: string;
  alt: string;
  key: string;
};

const imageModules = import.meta.glob("../assets/*.{png,webp,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const EXCLUDED_FILES = new Set(["logo.png", "logo.webp", "gallery-4.webp"]);

const preferredOrder = [
  "gallery-2.webp",
  "gallery-1.webp",
  "Mladenci.webp",
  "gallery-3.webp",
  "about-venue.webp",
  "hero-venue.webp",
];

const preferredAltMap: Record<string, string> = {
  "gallery-1.webp": "Elegantna dekoracija stola",
  "gallery-2.webp": "Velika svečana sala",
  "gallery-3.webp": "Rođendanska proslava",
  "Mladenci.webp": "Mladenci na svadbi",
  "about-venue.webp": "Detalj enterijera sale",
  "hero-venue.webp": "Hero slika sale",
  "img1.webp": "Galerija slika 1",
  "slika1.webp": "Slika 1",
  "slika2.webp": "Slika 2",
};

const filenameFromPath = (path: string) => path.split("/").pop() ?? path;

const prettifyFilename = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const compareByPreferredOrder = (a: string, b: string) => {
  const aIndex = preferredOrder.indexOf(a);
  const bIndex = preferredOrder.indexOf(b);

  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  }

  return a.localeCompare(b, "sr-Latn");
};

const uniqueImages = new Map<string, GalleryImage>();

Object.entries(imageModules)
  .map(([path, src]) => ({ path, src, filename: filenameFromPath(path) }))
  .filter(({ filename }) => !EXCLUDED_FILES.has(filename))
  .sort((a, b) => compareByPreferredOrder(a.filename, b.filename))
  .forEach(({ filename, src }) => {
    if (uniqueImages.has(src)) return;

    uniqueImages.set(src, {
      key: filename,
      src,
      alt: preferredAltMap[filename] ?? prettifyFilename(filename),
    });
  });

export const galleryImages = Array.from(uniqueImages.values());

const featuredFilenames = [
  "gallery-2.webp",
  "gallery-1.webp",
  "Mladenci.webp",
  "gallery-3.webp",
  "about-venue.webp",
];

const spanMap: Record<string, string> = {
  "gallery-2.webp": "lg:col-span-2 lg:row-span-2",
};

export const featuredGalleryImages = featuredFilenames
  .map((filename) => galleryImages.find((image) => image.key === filename))
  .filter((image): image is GalleryImage => Boolean(image))
  .map((image) => ({
    ...image,
    span: spanMap[image.key] ?? "",
  }));
