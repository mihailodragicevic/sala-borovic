import { useEffect, useRef, useState } from "react";
import showcaseVideo from "@/assets/Video o nama.mp4";
import showcasePoster from "@/assets/about-venue.webp";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export const AboutShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldSaveData = (navigator as NavigatorWithConnection).connection?.saveData;

    if (prefersReducedMotion || shouldSaveData) {
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadVideo(true);
        preloadObserver.disconnect();
      },
      { rootMargin: "240px 0px" },
    );

    preloadObserver.observe(sectionElement);

    return () => {
      preloadObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaElement = mediaRef.current;
    const videoElement = videoRef.current;

    if (!mediaElement) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const shouldAnimate = !prefersReducedMotion && isDesktop;

    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    const applyTransform = () => {
      const rect = mediaElement.getBoundingClientRect();
      const offset = shouldAnimate ? (rect.top - window.innerHeight / 2) * -0.06 : 0;
      mediaElement.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
    };

    const onScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(applyTransform);
    };

    if (videoElement && shouldLoadVideo) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            videoElement.pause();
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(videoElement);
    }

    if (shouldAnimate) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }

    applyTransform();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          src={shouldLoadVideo ? showcaseVideo : undefined}
          poster={showcasePoster}
          className="h-full w-full object-cover"
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
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
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 animate-float-slower"
        style={{ background: "radial-gradient(circle, hsl(320 80% 55% / 0.5), transparent 70%)" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <div className="reveal-up">
          <div className="mb-6 text-xs uppercase tracking-[0.5em] text-primary/90">Cinematic showcase</div>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Dozivite atmosferu
            <br />
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
