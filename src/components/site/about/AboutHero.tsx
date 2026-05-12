import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/Unutrasnjost sale.webp";

export const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) {
      return;
    }

    let frameId = 0;

    const applyTransform = () => {
      const y = window.scrollY;
      ref.current?.style.setProperty("transform", `translate3d(0, ${y * 0.18}px, 0) scale(${1.04 + y * 0.00012})`);
    };

    const onScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(applyTransform);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    applyTransform();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div ref={ref} className="absolute inset-0 will-change-transform">
        <img
          src={hero}
          alt="Cinematic enterijer Sale Borović"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(270 30% 4% / 0.55) 0%, hsl(270 30% 4% / 0.75) 60%, hsl(270 30% 4%) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/30 via-transparent to-rose/30 mix-blend-overlay" />
      </div>

      <div
        className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(290 80% 55% / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[640px] w-[640px] rounded-full blur-3xl opacity-30 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(340 80% 55% / 0.55), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl px-5 text-center lg:px-8">
        <div className="mb-8 text-xs uppercase tracking-[0.5em] text-primary/90 animate-fade-in">- Naša priča -</div>
        <h1 className="font-serif text-5xl leading-[1.02] tracking-tight animate-fade-in sm:text-6xl lg:text-8xl" style={{ animationDelay: "0.15s" }}>
          Mesto gde svaki
          <br />
          <span className="text-gradient italic">trenutak</span> postaje uspomena.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 animate-fade-in lg:text-xl" style={{ animationDelay: "0.3s" }}>
          Elegantan ambijent kreiran za proslave koje se pamte u srcu Mačve.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 animate-fade-in sm:flex-row" style={{ animationDelay: "0.45s" }}>
          <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
            <Link to="/galerija">
              <ImageIcon className="h-5 w-5" />
              Pogledajte galeriju
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/kontakt">
              <Phone className="h-5 w-5" />
              Kontaktirajte nas
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground opacity-70">
        Skrolujte
      </div>
    </section>
  );
};
