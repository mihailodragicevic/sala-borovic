import { Heart, Shield, Gem, Handshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Posvećenost",
    desc: "Svaki događaj tretiramo kao da je naš sopstveni. Vaša sreća je naša najveća nagrada.",
  },
  {
    icon: Shield,
    title: "Pouzdanost",
    desc: "Više od 13 godina porodice nam veruju najvažnije trenutke svog života.",
  },
  {
    icon: Gem,
    title: "Kvalitet",
    desc: "Od hrane do dekoracije, izbor materijala i usluge - ništa ne ostavljamo slučaju.",
  },
  {
    icon: Handshake,
    title: "Dostupnost",
    desc: "Radujemo se svakom upitu i svakom dogovoru. Slobodno nas kontaktirajte u bilo koje vreme.",
  },
];

export const OurValues = () => (
  <section className="relative py-28 lg:py-36 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(320 75% 60% / 0.08), transparent 60%)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
        eyebrow="Naša obećanja"
        title={<>Vrednosti na kojima <span className="text-gradient italic">gradimo</span></>}
        subtitle="Sve što radimo prožeto je verom da svako slavlje zaslužuje besprekoran doživljaj."
        center
      />

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <div
            key={v.title}
            className="reveal-up group glass rounded-2xl p-8 lg:p-10 border border-border/60 hover-lift"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center shadow-glow">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-2 text-foreground/70 font-light leading-relaxed">{v.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
