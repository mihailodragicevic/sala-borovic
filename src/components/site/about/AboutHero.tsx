import { Button } from "@/components/ui/button";
import { Phone, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import hero from "@/assets/IMG-340b99f7a5045fc1637113fbf0429944-V.jpg";

export const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1.08 + y * 0.0002})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden grain">
      <div ref={ref} className="absolute inset-0 will-change-transform">
        <img src={hero} alt="Cinematic enterijer Sale Borović" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(270 30% 4% / 0.55) 0%, hsl(270 30% 4% / 0.75) 60%, hsl(270 30% 4%) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/30 via-transparent to-rose/30 mix-blend-overlay" />
      </div>

      <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(290 80% 55% / 0.55), transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[640px] h-[640px] rounded-full blur-3xl opacity-30 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(340 80% 55% / 0.55), transparent 70%)" }} />

      <div className="relative z-10 text-center px-5 lg:px-8 max-w-5xl">
        <div className="text-xs tracking-[0.5em] uppercase text-primary/90 mb-8 animate-fade-in">— Naša priča —</div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Mesto gde svaki <br />
          <span className="text-gradient italic">trenutak</span> postaje uspomena.
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Elegantan ambijent kreiran za proslave koje se pamte — u srcu Mačve.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
            <Link to="/galerija"><ImageIcon className="h-5 w-5" /> Pogledajte galeriju</Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/kontakt"><Phone className="h-5 w-5" /> Kontaktirajte nas</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.4em] uppercase opacity-70">
        Skrolujte
      </div>
    </section>
  );
};
