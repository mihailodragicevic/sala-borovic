import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.webp";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  FACEBOOK_HREF,
  INSTAGRAM_HREF,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
} from "@/lib/contact";

export const Footer = () => (
  <footer className="relative border-t border-border/60 pb-10 pt-20">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" aria-label="Sala Borović - početna" className="inline-block">
            <img src={logo} alt="Svečana sala Borović" width="157" height="64" decoding="async" className="h-16 w-auto object-contain" />
          </Link>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bogatić · Mačva</div>
          <p className="mt-5 max-w-md font-light leading-relaxed text-foreground/70">
            Elegantan ambijent za vaše najznačajnije trenutke. Više od trinaest godina kreiramo nezaboravne proslave u srcu Mačve.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">Brzi linkovi</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link to="/" className="hover:text-foreground">Početna</Link></li>
            <li><Link to="/o-nama" className="hover:text-foreground">O nama</Link></li>
            <li><Link to="/galerija" className="hover:text-foreground">Galerija</Link></li>
            <li><Link to="/ponude" className="hover:text-foreground">Ponude</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">Kontakt</div>
          <ul className="space-y-2 text-foreground/80">
            <li><a href={PRIMARY_PHONE_HREF} className="hover:text-foreground">{PRIMARY_PHONE_DISPLAY}</a></li>
            <li><a href={SECONDARY_PHONE_HREF} className="hover:text-foreground">{SECONDARY_PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">{CONTACT_EMAIL}</a></li>
            <li>{CONTACT_ADDRESS}</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-primary">Zapratite nas</div>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/30 text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:text-primary hover:shadow-glow"
            >
              <Instagram className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href={FACEBOOK_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/30 text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:text-primary hover:shadow-glow"
            >
              <Facebook className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Svečana sala Borović. Sva prava zadržana.</div>
        <Link
          to="/politika-privatnosti"
          className="relative inline-flex w-fit transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
        >
          Politika privatnosti
        </Link>
      </div>
      <div className="mt-6 text-center text-[10px] text-muted-foreground/60">
        Made by Mihailo Dragićević
      </div>
    </div>
  </footer>
);
