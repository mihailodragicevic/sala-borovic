import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileCallButton } from "./MobileCallButton";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useReveal();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <MobileCallButton />
    </main>
  );
};
