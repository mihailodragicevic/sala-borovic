import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="relative pt-20 pb-10 border-t border-border/60">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" aria-label="Sala Borović — početna" className="inline-block">
            <img src={logo} alt="Svečana sala Borović" className="h-16 w-auto object-contain" />
          </Link>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bogatić · Mačva</div>
          <p className="mt-5 text-foreground/70 max-w-md font-light leading-relaxed">
            Elegantan ambijent za vaše najznačajnije trenutke. Više od trinaest godina kreiramo nezaboravne proslave u srcu Mačve.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Brzi linkovi</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link to="/" className="hover:text-foreground">Početna</Link></li>
            <li><Link to="/o-nama" className="hover:text-foreground">O nama</Link></li>
            <li><Link to="/galerija" className="hover:text-foreground">Galerija</Link></li>
            <li><Link to="/ponude" className="hover:text-foreground">Ponude</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Kontakt</div>
          <ul className="space-y-2 text-foreground/80">
            <li><a href="tel:+381641234567" className="hover:text-foreground">+381 64 123 4567</a></li>
            <li><a href="mailto:info@salaborovic.rs" className="hover:text-foreground">info@salaborovic.rs</a></li>
            <li>Bogatić, Srbija</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Svečana sala Borović. Sva prava zadržana.</div>
        <div>Sala za svadbe i proslave u Bogatiću.</div>
      </div>
    </div>
  </footer>
);
