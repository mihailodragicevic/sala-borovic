import { Heart, Cake, PartyPopper, Crown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Heart, title: "Svadbe", text: "Bajkovita venčanja sa potpunom organizacijom - dekoracija, meni, raspored sedenja i nezaboravna atmosfera." },
  { icon: Cake, title: "Rođendani", text: "Punoletstva, dečji rođendani ili veliki jubileji - svaka godina zaslužuje proslavu koja se pamti." },
  { icon: PartyPopper, title: "Proslave i veselja", text: "Krštenja, godišnjice, korporativni događaji - fleksibilan prostor za sve vrste slavlja." },
  { icon: Crown, title: "Posebni događaji", text: "Privatne večere, ekskluzivni nastupi i tematske proslave po vašoj viziji - kreirano isključivo za vas." },
];

export const Services = () => (
  <section id="ponude" className="relative py-28 lg:py-36">
    <div className="absolute top-0 left-0 w-1/3 h-full opacity-30" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
        eyebrow="Ponude"
        title={<>Događaji koje organizujemo <span className="text-gradient italic">za vas</span></>}
        subtitle="Bez obzira na povod — kreiramo iskustvo prilagođeno vašoj viziji, ukusu i broju gostiju."
        center
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="reveal-up group relative overflow-hidden rounded-3xl p-10 border border-border/60 hover-lift"
            style={{ background: "var(--gradient-card)", transitionDelay: `${i * 80}ms` }}
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(320 75% 60% / 0.4), transparent 70%)" }} />
            <div className="relative flex items-start gap-6">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-3xl">{s.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{s.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
