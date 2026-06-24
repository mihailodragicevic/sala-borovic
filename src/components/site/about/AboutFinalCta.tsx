import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/lib/contact";

export const AboutFinalCta = () => (
  <section className="relative overflow-hidden py-32 lg:py-44">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
      <div className="reveal-up">
        <div className="mb-8 text-xs uppercase tracking-[0.5em] text-primary/90">- Pozivnica -</div>
        <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
          Vaša proslava zaslužuje <br /><span className="text-gradient italic">poseban ambijent.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-foreground/75 lg:text-xl">
          Kontaktirajte nas i rezervišite termin na vreme - slobodni datumi se brzo popunjavaju.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-12 h-16 px-12 text-base animate-pulse-glow">
          <a href={PRIMARY_PHONE_HREF}><Phone className="h-5 w-5" /> Pozovite nas</a>
        </Button>
        <div className="mt-10 space-y-2 text-sm tracking-widest text-muted-foreground">
          <div>{PRIMARY_PHONE_DISPLAY}</div>
        </div>
      </div>
    </div>
  </section>
);
