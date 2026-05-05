import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#galerija", label: "Galerija" },
  { href: "#ponude", label: "Ponude" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl" : ""
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <a href="#pocetna" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
              <span className="font-serif text-primary-foreground text-lg italic">B</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl tracking-wide">Sala Borović</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bogatić</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <a href="tel:+381641234567">
                <Phone className="h-4 w-4" /> Pozovite nas
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Meni"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 py-2 border-b border-border/40">
                  {l.label}
                </a>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <a href="tel:+381641234567"><Phone className="h-4 w-4" /> Pozovite nas</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
