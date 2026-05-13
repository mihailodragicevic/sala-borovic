import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/lib/galleryImages";

type GalleryLightboxProps = {
  isOpen: boolean;
  selectedImageIndex: number | null;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export const GalleryLightbox = ({
  isOpen,
  selectedImageIndex,
  onOpenChange,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="fixed inset-0 z-50 m-0 flex max-h-none max-w-none translate-x-0 translate-y-0 items-center justify-center border-none bg-black/95 p-0 shadow-none">
      {selectedImageIndex !== null && (
        <div className="relative flex h-full w-full items-center justify-center px-4 py-8 sm:px-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Zatvori galeriju"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Prethodna slika"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Sledeca slika"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex h-[78vh] w-full max-w-[1200px] items-center justify-center">
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              decoding="async"
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
);
