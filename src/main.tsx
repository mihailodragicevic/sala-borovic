import { createRoot } from "react-dom/client";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import App from "./App.tsx";
import heroImg from "@/assets/hero-venue.webp";
import heroImgMobile from "@/assets/responsive/hero-venue-mobile.jpg";
import "./index.css";

const preloadHeroImage = () => {
  if (window.location.pathname !== "/") return;
  if (document.querySelector('link[data-critical-image="home-hero"]')) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = heroImg;
  link.setAttribute("fetchpriority", "high");
  link.setAttribute("imagesrcset", `${heroImgMobile} 768w, ${heroImg} 1200w`);
  link.setAttribute("imagesizes", "100vw");
  link.setAttribute("data-critical-image", "home-hero");
  document.head.appendChild(link);
};

preloadHeroImage();

createRoot(document.getElementById("root")!).render(<App />);
