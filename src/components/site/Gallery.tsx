import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { featuredGalleryImages, galleryImages } from "@/lib/galleryImages";

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
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
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
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Galerija"
            title={<>Atmosfera koja <span className="text-gradient italic">oduzima dah</span></>}
          />
          <Button asChild variant="outlineLux" size="lg" className="reveal-up">
            <a href="/galerija">Pogledaj celu galeriju <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 lg:auto-rows-[260px] lg:grid-cols-4">
          {featuredGalleryImages.map((image, index) => {
            const modalIndex = galleryImages.findIndex((galleryImage) => galleryImage.src === image.src);

            return (
              <div
                key={image.key}
                className={`reveal-up group relative cursor-pointer overflow-hidden rounded-2xl ${image.span}`}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => openModal(modalIndex)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
              </div>
            );
          })}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="fixed inset-0 z-50 m-0 flex max-h-none max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 shadow-none">
            {selectedImageIndex !== null && (
              <div className="relative flex h-full w-full items-center justify-center px-4 py-8 sm:px-8">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="flex h-[78vh] w-full max-w-[1200px] items-center justify-center">
                  <img
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    className="h-full w-auto max-w-full rounded-2xl object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/70 px-4 py-2 text-white">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
