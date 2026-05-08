import { useEffect, useRef } from "react";
import showcaseVideo from "@/assets/SnapInsta.to_AQMgOUWlXrHWoQPk0fCcm_EN2yG8OCJbAJWkMnUWfyJoJZceq8IrmbwNyJ48JMLIsGrjttwDm8NIF2XKuq5r5j6QxdVUzfhe3u7SE1E.mp4";

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
        <video
          src={showcaseVideo}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video prikaz atmosfere sale Borovic"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(270 30% 4% / 0.7) 0%, hsl(270 30% 4% / 0.55) 50%, hsl(270 30% 4% / 0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/30 via-transparent to-rose/30 mix-blend-overlay" />
      </div>

      <div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(320 80% 55% / 0.5), transparent 70%)" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <div className="reveal-up">
          <div className="mb-6 text-xs uppercase tracking-[0.5em] text-primary/90">Cinematic showcase</div>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Dozivite atmosferu <br />
            <span className="text-gradient italic">sale Borovic.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light text-foreground/75">
            Slike govore mnogo. Atmosfera govori sve.
          </p>
        </div>
      </div>
    </section>
  );
};
