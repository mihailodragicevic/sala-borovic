import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/about-venue.jpg";

const imgs = [
  { src: g2, alt: "Velika svečana sala", span: "lg:col-span-2 lg:row-span-2" },
  { src: g1, alt: "Elegantna dekoracija stola", span: "" },
  { src: g4, alt: "Mladenci na svadbi", span: "" },
  { src: g3, alt: "Rođendanska proslava", span: "" },
  { src: g5, alt: "Detalj enterijera sale", span: "" },
];

export const Gallery = () => (
  <section id="galerija" className="relative py-28 lg:py-36">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Galerija"
          title={<>Atmosfera koja <span className="text-gradient italic">oduzima dah</span></>}
        />
        <Button asChild variant="outlineLux" size="lg" className="reveal-up">
          <a href="#kontakt">Pogledaj celu galeriju <ArrowRight className="h-4 w-4" /></a>
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
        {imgs.map((im, i) => (
          <div
            key={i}
            className={`reveal-up relative overflow-hidden rounded-2xl group ${im.span}`}
            style={{ transitionDelay: `${i * 60}ms` }}
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
    </div>
  </section>
);
