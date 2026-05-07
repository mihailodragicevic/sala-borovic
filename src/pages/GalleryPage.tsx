import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/about-venue.jpg";
import hero from "@/assets/hero-venue.jpg";

const imgs = [
  { src: hero, alt: "Glavna sala", span: "lg:col-span-2 lg:row-span-2" },
  { src: g1, alt: "Dekoracija stola" },
  { src: g2, alt: "Pogled na luster" },
  { src: g4, alt: "Mladenci" },
  { src: g3, alt: "Rođendanska torta" },
  { src: g5, alt: "Detalj enterijera" },
  { src: g2, alt: "Sala iz vazduha", span: "lg:col-span-2" },
  { src: g1, alt: "Cveće na stolu" },
  { src: g4, alt: "Prvi ples" },
];

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
    setSelectedIndex((selectedIndex + imgs.length - 1) % imgs.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % imgs.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
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
  }, [isModalOpen, selectedIndex]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Galerija"
        title={<>Trenuci u <span className="text-gradient italic">našoj sali</span></>}
        subtitle="Pogledajte atmosferu nezaboravnih večeri koje smo zajedno sa našim gostima stvarali."
      />
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
            {imgs.map((im, i) => (
              <div
                key={i}
                className={`reveal-up relative overflow-hidden rounded-2xl group cursor-pointer ${im.span ?? ""}`}
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={() => openModal(i)}
              >
                <img src={im.src} alt={im.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 right-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="text-xs tracking-widest uppercase text-primary">Sala Borović</div>
                  <div className="font-serif text-xl">{im.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="fixed inset-0 z-50 m-0 flex items-center justify-center bg-black/95 p-0 border-none shadow-none translate-x-0 translate-y-0 max-w-none max-h-none">
          {selectedIndex !== null && (
            <div className="relative w-full h-full max-h-screen max-w-[90vw] flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 transition-colors"
                aria-label="Zatvori"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 transition-colors"
                aria-label="Prethodna slika"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 transition-colors"
                aria-label="Sledeća slika"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={imgs[selectedIndex].src}
                alt={imgs[selectedIndex].alt}
                className="max-h-[90vh] max-w-full object-contain"
              />

              <div className="pointer-events-none absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                {selectedIndex + 1} / {imgs.length}
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
