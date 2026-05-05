import { useEffect, useRef } from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-venue.jpg";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      ref.current.style.setProperty("--mx", `${x * 20}px`);
      ref.current.style.setProperty("--my", `${y * 20}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="pocetna" ref={ref} className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "translate3d(calc(var(--mx, 0px) * -1), calc(var(--my, 0px) * -1), 0) scale(1.08)",
        }}
      >
        <img
          src={heroImg}
          alt="Svečana sala Borović Bogatić - elegantan ambijent"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-rose/20 mix-blend-overlay" />
      </div>

      {/* Floating glow orbs */}
      <div
        className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(290 80% 50% / 0.6), transparent 70%)", transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(340 80% 55% / 0.6), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-7 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs tracking-[0.25em] uppercase text-foreground/80">Bogatić · Mačva</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Svečana sala <br />
            <span className="text-gradient italic">Borović</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-foreground/80 max-w-2xl font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.25s" }}>
            Savršeno mesto za vašu proslavu — svadbe, rođendani i nezaboravna slavlja u modernom i elegantnom ambijentu, do <span className="text-foreground">450 gostiju</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
              <a href="tel:+381641234567"><Phone className="h-5 w-5" /> Pozovite nas</a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#kontakt"><MessageCircle className="h-5 w-5" /> Pošaljite poruku</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl animate-fade-in" style={{ animationDelay: "0.55s" }}>
            {[
              { n: "450", l: "Kapacitet gostiju" },
              { n: "13+", l: "Godina iskustva" },
              { n: "2000+", l: "Srećnih proslava" },
              { n: "4.9", l: "Prosečna ocena" },
            ].map((s) => (
              <div key={s.l} className="border-l border-border/60 pl-4">
                <div className="font-serif text-3xl lg:text-4xl text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.4em] uppercase opacity-70">
        Skrolujte
      </div>
    </section>
  );
};
