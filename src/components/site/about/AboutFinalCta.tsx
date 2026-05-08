import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const AboutFinalCta = () => (
  <section className="relative py-32 lg:py-44 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 animate-float-slow"
      style={{ background: "radial-gradient(circle, hsl(320 80% 55% / 0.4), transparent 70%)" }} />

    <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
      <div className="reveal-up">
        <div className="text-xs tracking-[0.5em] uppercase text-primary/90 mb-8">— Pozivnica —</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
          Vaša proslava zaslužuje <br /><span className="text-gradient italic">poseban ambijent.</span>
        </h2>
        <p className="mt-8 text-foreground/75 text-lg lg:text-xl max-w-xl mx-auto font-light leading-relaxed">
          Kontaktirajte nas i rezervišite termin na vreme — slobodni datumi se brzo popunjavaju.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-12 animate-pulse-glow h-16 px-12 text-base">
          <a href="tel:+381641234567"><Phone className="h-5 w-5" /> Pozovite nas</a>
        </Button>
        <div className="mt-10 text-sm text-muted-foreground tracking-widest">+381 64 123 4567</div>
      </div>
    </div>
  </section>
);
