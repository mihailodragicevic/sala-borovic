import { Users, Sparkles, CalendarHeart, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Users, title: "Kapacitet do 450 gostiju", text: "Prostrana sala koja sa lakoćom prima i najveće svadbe i porodična slavlja, bez kompromisa u udobnosti." },
  { icon: Sparkles, title: "Moderan i elegantan ambijent", text: "Pažljivo osmišljen enterijer sa kristalnim lusterima, mekim svetlom i detaljima koji ostavljaju utisak." },
  { icon: CalendarHeart, title: "Kompletna organizacija", text: "Od menija i dekoracije do rasporeda sedenja — vodimo računa o svakom detalju vašeg dana." },
  { icon: MapPin, title: "Odlična lokacija i parking", text: "U srcu Bogatića, sa lako pristupačnim ulazom i prostranim parkingom za sve vaše goste." },
];

export const Benefits = () => (
  <section className="relative py-28 lg:py-36">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
        eyebrow="Zašto Borović"
        title={<>Iskustvo koje se <span className="text-gradient italic">pamti</span></>}
        subtitle="Više od decenije pretvaramo najznačajnije trenutke u savršeno organizovane večeri."
        center
      />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="reveal-up group relative p-8 rounded-2xl border border-border/60 hover-lift"
            style={{ background: "var(--gradient-card)", transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at top, hsl(320 75% 60% / 0.12), transparent 70%)" }} />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center shadow-glow">
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{it.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
