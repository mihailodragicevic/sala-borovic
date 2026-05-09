import { Heart, Cake, PartyPopper, Crown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Heart,
    title: "Svadbe",
    text: "Bajkovita venčanja sa potpunom organizacijom - dekoracija, meni, raspored sedenja i nezaboravna atmosfera.",
  },
  {
    icon: Cake,
    title: "Rođendani",
    text: "Punoletstva, dečji rođendani ili veliki jubileji - svaka godina zaslužuje proslavu koja se pamti.",
  },
  {
    icon: PartyPopper,
    title: "Proslave i veselja",
    text: "Krštenja, godišnjice, korporativni događaji - fleksibilan prostor za sve vrste slavlja.",
  },
  {
    icon: Crown,
    title: "Posebni događaji",
    text: "Proslavite završetak školovanja uz nezaboravno veče ispunjeno muzikom, elegantnom atmosferom i uspomenama koje ostaju zauvek.",
  },
];

type ServicesProps = {
  glowSide?: "left" | "right";
};

export const Services = ({ glowSide = "left" }: ServicesProps) => {
  const glowPositionClass =
    glowSide === "right"
      ? "absolute -right-[20%] top-1/2 h-[92%] w-[46%] -translate-y-1/2 opacity-55"
      : "absolute -left-[20%] top-1/2 h-[92%] w-[46%] -translate-y-1/2 opacity-55";

  const glowBackground =
    glowSide === "right"
      ? "radial-gradient(circle at right center, hsl(290 82% 58% / 0.5), transparent 64%)"
      : "radial-gradient(circle at left center, hsl(290 82% 58% / 0.5), transparent 64%)";

  return (
    <section id="ponude" className="relative overflow-hidden py-28 lg:py-36">
      <div className={glowPositionClass} style={{ background: glowBackground }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Ponude"
          title={<>Događaji koje organizujemo <span className="text-gradient italic">za vas</span></>}
          subtitle="Bez obzira na povod, kreiramo iskustvo prilagođeno vašoj viziji, ukusu i broju gostiju."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal-up group relative overflow-hidden rounded-3xl border border-border/60 p-10 hover-lift"
              style={{ background: "var(--gradient-card)", transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, hsl(320 75% 60% / 0.4), transparent 70%)" }}
              />
              <div className="relative flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
