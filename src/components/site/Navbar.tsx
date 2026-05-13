import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/responsive/logo-navbar.png";
import { PRIMARY_PHONE_HREF } from "@/lib/contact";

const links = [
  { to: "/", label: "Početna" },
  { to: "/o-nama", label: "O nama" },
  { to: "/galerija", label: "Galerija" },
  { to: "/ponude", label: "Ponude" },
  { to: "/kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-5 transition-all duration-500 lg:px-8 ${scrolled ? "glass rounded-2xl" : ""}`}>
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="group flex items-center" aria-label="Sala Borović - početna">
            <img
              src={logo}
              alt="Svečana sala Borović"
              width="176"
              height="56"
              decoding="async"
              className="h-12 w-auto object-contain lg:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-gradient-primary after:transition-all hover:after:w-full ${
                    isActive ? "text-foreground after:w-full" : "text-foreground/70 after:w-0 hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <a href={PRIMARY_PHONE_HREF}>
                <Phone className="h-4 w-4" />
                Pozovite nas
              </a>
            </Button>
          </div>

          <button
            className="p-2 text-foreground lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Meni"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="animate-fade-in pb-6 pt-2 lg:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} className="border-b border-border/40 py-2 text-foreground/90">
                  {link.label}
                </NavLink>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <a href={PRIMARY_PHONE_HREF}>
                  <Phone className="h-4 w-4" />
                  Pozovite nas
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
