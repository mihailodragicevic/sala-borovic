import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import about from "@/assets/about-venue.webp";
import { PRIMARY_PHONE_HREF } from "@/lib/contact";

export const About = () => (
  <section id="o-nama" className="relative overflow-hidden py-28 lg:py-40">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal-up relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elegant">
            <img src={about} alt="Enterijer Sale Borović" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="glass absolute -right-4 -bottom-8 max-w-[240px] rounded-2xl p-6 shadow-elegant lg:-right-10">
            <div className="font-serif text-4xl text-gradient">13+</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Godina pretvaranja trenutaka u uspomene</div>
          </div>
        </div>

        <div className="reveal-up">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-primary/90">O Nama</div>
          <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            U srcu Mačve, <br />
            <span className="text-gradient italic">jedna priča o eleganciji.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg font-light leading-relaxed text-foreground/75">
            <p>
              Svećana sala Borović već više od trinaest godina ugošćuje najznačajnije trenutke porodica iz Bogatića i šire okoline
              - od bajkovitih svadbi do toplih porodičnih slavlja.
            </p>
            <p>
              Naš prostor spaja modernu eleganciju, prostranost i ljubaznost domaćina. Verujemo da je svako slavlje jedinstveno,
              pa svaki detalj, od menija do dekoracije, kreiramo u skladu sa vašom vizijom.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href={PRIMARY_PHONE_HREF}><Phone className="h-4 w-4" /> Zakažite obilazak</a>
            </Button>
            <Button asChild variant="outlineLux" size="lg">
              <a href="/ponude">Pogledajte ponudu</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
