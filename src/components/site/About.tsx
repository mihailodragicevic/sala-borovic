import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import about from "@/assets/about-venue.jpg";

export const About = () => (
  <section id="o-nama" className="relative py-28 lg:py-40 overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="reveal-up relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={about} alt="Enterijer Sale Borović" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-10 glass rounded-2xl p-6 max-w-[240px] shadow-elegant">
            <div className="font-serif text-4xl text-gradient">13+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Godina pretvaranja trenutaka u uspomene</div>
          </div>
        </div>

        <div className="reveal-up">
          <div className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-4">O Nama</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            U srcu Mačve, <br />
            <span className="text-gradient italic">jedna priča o eleganciji.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/75 text-lg font-light leading-relaxed">
            <p>
              Svečana sala Borović već više od trinaest godina ugošćuje najznačajnije trenutke porodica iz Bogatića i šire okoline — od bajkovitih svadbi do toplih porodičnih slavlja.
            </p>
            <p>
              Naš prostor spaja modernu eleganciju, prostranost i ljubaznost domaćina. Verujemo da je svako slavlje jedinstveno, pa svaki detalj — od menija do dekoracije — kreiramo u skladu sa vašom vizijom.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="tel:+381641234567"><Phone className="h-4 w-4" /> Zakažite obilazak</a>
            </Button>
            <Button asChild variant="outlineLux" size="lg">
              <a href="#ponude">Pogledajte ponudu</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
