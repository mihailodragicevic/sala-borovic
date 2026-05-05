import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
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

const GalleryPage = () => (
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
            <div key={i} className={`reveal-up relative overflow-hidden rounded-2xl group ${im.span ?? ""}`} style={{ transitionDelay: `${i * 50}ms` }}>
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
    <CtaBanner />
  </Layout>
);

export default GalleryPage;
