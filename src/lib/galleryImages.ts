type GalleryImage = {
  src: string;
  alt: string;
  key: string;
};

const imageModules = import.meta.glob("../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const EXCLUDED_FILES = new Set(["logo.png"]);

const preferredOrder = [
  "gallery-2.jpg",
  "gallery-1.jpg",
  "gallery-4.jpg",
  "gallery-3.jpg",
  "about-venue.jpg",
  "hero-venue.jpg",
];

const preferredAltMap: Record<string, string> = {
  "gallery-1.jpg": "Elegantna dekoracija stola",
  "gallery-2.jpg": "Velika svečana sala",
  "gallery-3.jpg": "Rođendanska proslava",
  "gallery-4.jpg": "Mladenci na svadbi",
  "about-venue.jpg": "Detalj enterijera sale",
  "hero-venue.jpg": "Hero slika sale",
  "img1.jpg": "Galerija slika 1",
  "slika1.jpg": "Slika 1",
  "slika2.jpg": "Slika 2",
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
  "gallery-2.jpg",
  "gallery-1.jpg",
  "gallery-4.jpg",
  "gallery-3.jpg",
  "about-venue.jpg",
];

const spanMap: Record<string, string> = {
  "gallery-2.jpg": "lg:col-span-2 lg:row-span-2",
};

export const featuredGalleryImages = featuredFilenames
  .map((filename) => galleryImages.find((image) => image.key === filename))
  .filter((image): image is GalleryImage => Boolean(image))
  .map((image) => ({
    ...image,
    span: spanMap[image.key] ?? "",
  }));
