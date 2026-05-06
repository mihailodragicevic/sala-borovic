import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// Import all images from assets
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutVenue from "@/assets/about-venue.jpg";
import heroVenue from "@/assets/hero-venue.jpg";
import img1 from "@/assets/img1.jpg";
import slika1 from "@/assets/slika1.jpg";
import slika2 from "@/assets/slika2.jpg";
import img1329 from "@/assets/IMG-132977e56b050c15374d951d15af7455-V.jpg";
import img1773 from "@/assets/IMG-17731db35fd770e07be242b35d62e46c-V.jpg";
import img2d94 from "@/assets/IMG-2d9418e2de076d26230a2249fe05d4f1-V.jpg";
import img340b from "@/assets/IMG-340b99f7a5045fc1637113fbf0429944-V.jpg";
import img461b from "@/assets/IMG-461bbb1b7436d27ddff6b6e28fdee244-V.jpg";
import img5280 from "@/assets/IMG-5280ba7bdb44931fb0ef620aee002067-V.jpg";
import img5371 from "@/assets/IMG-5371a154b7d358f2bfdb316b2a71af01-V.jpg";
import img5525 from "@/assets/IMG-552574492d4dec6bdac609e49caad226-V.jpg";
import img56b6 from "@/assets/IMG-56b6a97e2db7980aa97d1e0a47395fb2-V.jpg";
import img5851 from "@/assets/IMG-5851de2bd2d195576e062d4150c18796-V.jpg";
import imga0dd from "@/assets/IMG-a0ddd2c9342b23aa7b372273a3cc34b2-V.jpg";
import imga2a9 from "@/assets/IMG-a2a9ecad222a1bfe0c3fd5aebdf19027-V.jpg";
import imgc720 from "@/assets/IMG-c7204f2746042d407c06659cf1e4a00b-V.jpg";
import imge09f from "@/assets/IMG-e09bfeb9fd634a9f5569cb3546e61450-V.jpg";
import imge54d from "@/assets/IMG-e54de98a19d7bd460efc3f77cf442c84-V.jpg";

const allImages = [
  { src: g2, alt: "Velika svečana sala" },
  { src: g1, alt: "Elegantna dekoracija stola" },
  { src: g4, alt: "Mladenci na svadbi" },
  { src: g3, alt: "Rođendanska proslava" },
  { src: aboutVenue, alt: "Detalj enterijera sale" },
  { src: heroVenue, alt: "Hero slika sale" },
  { src: img1, alt: "Galerija slika 1" },
  { src: slika1, alt: "Slika 1" },
  { src: slika2, alt: "Slika 2" },
  { src: img1329, alt: "IMG-1329" },
  { src: img1773, alt: "IMG-1773" },
  { src: img2d94, alt: "IMG-2d94" },
  { src: img340b, alt: "IMG-340b" },
  { src: img461b, alt: "IMG-461b" },
  { src: img5280, alt: "IMG-5280" },
  { src: img5371, alt: "IMG-5371" },
  { src: img5525, alt: "IMG-5525" },
  { src: img56b6, alt: "IMG-56b6" },
  { src: img5851, alt: "IMG-5851" },
  { src: imga0dd, alt: "IMG-a0dd" },
  { src: imga2a9, alt: "IMG-a2a9" },
  { src: imgc720, alt: "IMG-c720" },
  { src: imge09f, alt: "IMG-e09f" },
  { src: imge54d, alt: "IMG-e54d" },
];

const displayImages = [
  { src: g2, alt: "Velika svečana sala", span: "lg:col-span-2 lg:row-span-2" },
  { src: g1, alt: "Elegantna dekoracija stola", span: "" },
  { src: g4, alt: "Mladenci na svadbi", span: "" },
  { src: g3, alt: "Rođendanska proslava", span: "" },
  { src: aboutVenue, alt: "Detalj enterijera sale", span: "" },
];

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeModal();
  };

  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="galerija" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Galerija"
            title={<>Atmosfera koja <span className="text-gradient italic">oduzima dah</span></>}
          />
          <Button asChild variant="outlineLux" size="lg" className="reveal-up">
            <a href="/galerija">Pogledaj celu galeriju <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
          {displayImages.map((im, i) => (
            <div
              key={i}
              className={`reveal-up relative overflow-hidden rounded-2xl group cursor-pointer ${im.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => openModal(i)}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-5 right-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-xs tracking-widest uppercase text-primary">Sala Borović</div>
                <div className="font-serif text-xl text-foreground">{im.alt}</div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-none">
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <img
                  src={allImages[selectedImageIndex].src}
                  alt={allImages[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
                  {selectedImageIndex + 1} / {allImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
