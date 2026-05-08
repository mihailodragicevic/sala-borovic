import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import bg from "@/assets/IMG-c7204f2746042d407c06659cf1e4a00b-V.jpg";

export const AboutShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * -0.15;
      ref.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <div ref={ref} className="absolute inset-0 will-change-transform">
        <img src={bg} alt="Showcase Sale Borović" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(270 30% 4% / 0.7) 0%, hsl(270 30% 4% / 0.55) 50%, hsl(270 30% 4% / 0.85) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/30 via-transparent to-rose/30 mix-blend-overlay" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-40 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(320 80% 55% / 0.5), transparent 70%)" }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="reveal-up">
          <div className="mb-10 mx-auto w-24 h-24 rounded-full glass flex items-center justify-center shadow-glow group cursor-pointer hover-lift">
            <Play className="h-8 w-8 text-primary fill-primary translate-x-0.5" />
          </div>
          <div className="text-xs tracking-[0.5em] uppercase text-primary/90 mb-6">— Cinematic showcase —</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] max-w-4xl">
            Doživite atmosferu <br /><span className="text-gradient italic">sale Borović.</span>
          </h2>
          <p className="mt-8 text-foreground/75 text-lg max-w-xl mx-auto font-light">
            Slike govore mnogo. Atmosfera govori sve.
          </p>
        </div>
      </div>
    </section>
  );
};
