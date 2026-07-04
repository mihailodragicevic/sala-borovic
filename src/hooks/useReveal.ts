import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = (el: Element) => el.classList.add("in-view");

    let io: IntersectionObserver | null = null;

    // Measure after the next frame so freshly-navigated (and lazily-loaded)
    // content is laid out before we decide what is on screen.
    const rafId = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up:not(.in-view)"));
      if (!els.length) return;

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        els.forEach(reveal);
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            io?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
      );

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        // Elements already within the viewport on load / after a route change are
        // revealed right away: the observer's first async callback is unreliable
        // straight after navigation and could otherwise leave above-the-fold
        // content permanently invisible. Below-the-fold elements keep their
        // scroll-triggered reveal animation.
        if (el.getBoundingClientRect().top < viewportHeight) {
          reveal(el);
        } else {
          io!.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, [pathname]);
};
