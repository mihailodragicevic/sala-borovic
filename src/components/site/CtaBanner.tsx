import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const CtaBanner = () => (
  <section className="relative py-24">
    <div className="mx-auto max-w-6xl px-5 lg:px-8">
      <div className="reveal-up relative overflow-hidden rounded-3xl px-8 py-16 lg:p-20 text-center shadow-elegant">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(0 0% 0% / 0.3), transparent)" }} />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float-slower" />

        <div className="relative">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Rezervišite svoj termin <br className="hidden sm:block" /> <span className="italic">na vreme</span>
          </h2>
          <p className="mt-6 text-primary-foreground/90 text-lg max-w-xl mx-auto">
            Slobodni termini se brzo popunjavaju. Pozovite nas i osigurajte savršen datum za vašu proslavu.
          </p>
          <Button asChild size="xl" className="mt-10 bg-background text-foreground hover:bg-background/90 rounded-full h-14 px-10">
            <a href="tel:+381641234567"><Phone className="h-5 w-5" /> Pozovite odmah</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
