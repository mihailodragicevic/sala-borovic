import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-venue.webp";
import heroImgMobile from "@/assets/responsive/hero-venue-mobile.jpg";
import { PRIMARY_PHONE_HREF } from "@/lib/contact";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !supportsHover) {
      return;
    }

    let frameId = 0;

    const onMove = (event: MouseEvent) => {
      if (!ref.current) return;

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (event.clientX / innerWidth - 0.5) * 2;
        const y = (event.clientY / innerHeight - 0.5) * 2;
        ref.current?.style.setProperty("--mx", `${x * 18}px`);
        ref.current?.style.setProperty("--my", `${y * 18}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="pocetna" ref={ref} className="grain relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "translate3d(calc(var(--mx, 0px) * -1), calc(var(--my, 0px) * -1), 0) scale(1.04)",
        }}
      >
        <img
          src={heroImg}
          srcSet={`${heroImgMobile} 768w, ${heroImg} 1200w`}
          alt="Svečana sala Borović Bogatić - elegantan ambijent"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          width="1200"
          height="1600"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-rose/20 mix-blend-overlay" />
      </div>

      <div
        className="absolute -left-20 -top-20 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(290 80% 50% / 0.6), transparent 70%)", transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(340 80% 55% / 0.6), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/80">Bogatić · Mačva</span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight animate-fade-in sm:text-6xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
            Svečana sala
            <br />
            <span className="text-gradient italic">Borović</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 animate-fade-in lg:text-xl" style={{ animationDelay: "0.25s" }}>
            Savršeno mesto za vašu proslavu - svadbe, rođendani i nezaboravna slavlja u modernom i elegantnom ambijentu, do{" "}
            <span className="text-foreground">450 gostiju</span>.
          </p>

          <div className="mt-10 flex flex-col gap-4 animate-fade-in sm:flex-row" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
              <a href={PRIMARY_PHONE_HREF}>
                <Phone className="h-5 w-5" />
                Pozovite nas
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/kontakt">
                <MessageCircle className="h-5 w-5" />
                Pošaljite poruku
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 animate-fade-in sm:grid-cols-4" style={{ animationDelay: "0.55s" }}>
            {[
              { n: "450", l: "Kapacitet gostiju" },
              { n: "13+", l: "Godina iskustva" },
              { n: "2000+", l: "Srećnih proslava" },
              { n: "4.9/5.0", l: "Prosečna ocena" },
            ].map((stat) => (
              <div key={stat.l} className="border-l border-border/60 pl-4">
                <div className="font-serif text-3xl text-gradient lg:text-4xl">{stat.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground opacity-70">
        Skrolujte
      </div>
    </section>
  );
};
