import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PRIMARY_PHONE_HREF } from "@/lib/contact";

export const CtaBanner = () => (
  <section className="relative py-24">
    <div className="mx-auto max-w-6xl px-5 lg:px-8">
      <div className="reveal-up relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-elegant lg:p-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(0 0% 0% / 0.3), transparent)" }} />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float-slow" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float-slower" />

        <div className="relative">
          <h2 className="font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Rezervišite svoj termin <br className="hidden sm:block" /> <span className="italic">na vreme</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/90">
            Slobodni termini se brzo popunjavaju. Pozovite nas i osigurajte savršen datum za vašu proslavu.
          </p>
          <Button asChild size="xl" className="mt-10 h-14 rounded-full bg-background px-10 text-foreground hover:bg-background/90">
            <a href={PRIMARY_PHONE_HREF}><Phone className="h-5 w-5" /> Pozovite odmah</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
