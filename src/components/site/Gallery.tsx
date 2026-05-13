import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { featuredGalleryImages, galleryImages } from "@/lib/galleryImages";

const GalleryLightbox = React.lazy(() =>
  import("./GalleryLightbox").then((module) => ({ default: module.GalleryLightbox })),
);

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

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((current) =>
          current === null ? current : current === 0 ? galleryImages.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImageIndex((current) =>
          current === null ? current : current === galleryImages.length - 1 ? 0 : current + 1,
        );
      }
      if (event.key === "Escape") closeModal();
    };

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
            <Link to="/galerija">
              Pogledaj celu galeriju
              <ArrowRight className="h-4 w-4" />
            </Link>
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
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openModal(modalIndex);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Otvori sliku: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  sizes={image.span ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
              </div>
            );
          })}
        </div>

        {isModalOpen && (
          <Suspense fallback={null}>
            <GalleryLightbox
              isOpen={isModalOpen}
              selectedImageIndex={selectedImageIndex}
              onOpenChange={setIsModalOpen}
              onClose={closeModal}
              onPrevious={goToPrevious}
              onNext={goToNext}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
