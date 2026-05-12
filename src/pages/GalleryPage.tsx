import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Seo } from "@/components/site/Seo";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/lib/galleryImages";

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + galleryImages.length - 1) % galleryImages.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? current : (current + galleryImages.length - 1) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % galleryImages.length,
        );
      }
      if (event.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <Layout>
      <Seo
        title="Galerija | Svečana sala Borović Bogatić"
        description="Galerija svečane sale Borović u Bogatiću. Pogledajte salu za svadbe Bogatić, dekoraciju, rođendane i proslave kroz fotografije enterijera i atmosfere."
        pathname="/galerija"
      />
      <PageHeader
        eyebrow="Galerija"
        title={<>Trenuci u <span className="text-gradient italic">našoj sali</span></>}
        subtitle="Pogledajte atmosferu nezaboravnih večeri koje smo zajedno sa našim gostima stvarali."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:auto-rows-[260px] lg:grid-cols-4">
            {galleryImages.map((image, index) => {
              const span = index === 0 ? "lg:col-span-2 lg:row-span-2" : index % 7 === 0 ? "lg:col-span-2" : "";

              return (
                <div
                  key={image.key}
                  className={`reveal-up group relative cursor-pointer overflow-hidden rounded-2xl ${span}`}
                  style={{ transitionDelay: `${index * 35}ms` }}
                  onClick={() => openModal(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openModal(index);
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
                    sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed inset-0 z-50 m-0 flex max-h-none max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 shadow-none">
          {selectedIndex !== null && (
            <div className="relative flex h-full w-full items-center justify-center px-4 py-8 sm:px-8">
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
                aria-label="Zatvori galeriju"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
                aria-label="Prethodna slika"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
                aria-label="Sledeća slika"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="flex h-[78vh] w-full max-w-[1200px] items-center justify-center">
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  decoding="async"
                  className="h-full w-auto max-w-full rounded-2xl object-contain"
                />
              </div>

              <div className="pointer-events-none absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CtaBanner />
    </Layout>
  );
};

export default GalleryPage;
