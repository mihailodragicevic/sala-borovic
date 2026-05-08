import { SectionHeading } from "./SectionHeading";

const milestones = [
  { year: "2011", title: "Početak priče", desc: "Otvorena je Svečana sala Borović u srcu Bogatića, sa vizijom da svaki događaj bude poseban." },
  { year: "2015", title: "Proširenje", desc: "Kapacitet je proširen na 450 mesta, a enterijer je modernizovan da bi odgovarao svim vrstama proslava." },
  { year: "2019", title: "Nagrade", desc: "Preporuke gostiju učinile su nas jednom od najtraženijih sala u Mačvi i šire okolini." },
  { year: "2025", title: "Neprestano unapređenje", desc: "Svake godine investiramo u detalje, uslugu i doživljaj koji ostavlja bez daha." },
];

export const OurStory = () => (
  <section className="relative py-28 lg:py-36 overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-full opacity-30" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
        eyebrow="Naša priča"
        title={<>Od vizije do <span className="text-gradient italic">stvarnosti</span></>}
        subtitle="Pogledajte kako je Svečana sala Borović rasla i postala omiljeno mesto za slavlja u Mačvi."
        center
      />

      <div className="mt-20 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent -translate-x-1/2" />

        <div className="space-y-16 lg:space-y-24">
          {milestones.map((m, i) => (
            <div key={m.year} className={`reveal-up relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16">
                {i % 2 === 0 && (
                  <div className="glass rounded-2xl p-8 max-w-md shadow-elegant hover-lift">
                    <div className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-2">{m.year}</div>
                    <h3 className="font-serif text-2xl lg:text-3xl mb-3">{m.title}</h3>
                    <p className="text-foreground/70 font-light leading-relaxed">{m.desc}</p>
                  </div>
                )}
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex h-4 w-4 rounded-full bg-gradient-primary ring-4 ring-primary/20" />

              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16">
                {i % 2 === 1 && (
                  <div className="glass rounded-2xl p-8 max-w-md shadow-elegant hover-lift">
                    <div className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-2">{m.year}</div>
                    <h3 className="font-serif text-2xl lg:text-3xl mb-3">{m.title}</h3>
                    <p className="text-foreground/70 font-light leading-relaxed">{m.desc}</p>
                  </div>
                )}
              </div>

              {/* Mobile layout - both items on one side */}
              <div className="lg:hidden glass rounded-2xl p-8 max-w-md shadow-elegant">
                <div className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-2">{m.year}</div>
                <h3 className="font-serif text-2xl mb-3">{m.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
