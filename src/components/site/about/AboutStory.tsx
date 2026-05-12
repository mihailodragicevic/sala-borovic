import storyImg from "@/assets/Mladenci.webp";

export const AboutStory = () => (
  <section className="relative py-32 lg:py-48 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-30" style={{ background: "var(--gradient-radial)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="reveal-up lg:col-span-7">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={storyImg}
              alt="Atmosfera Sale Borović"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform ease-out hover:scale-105"
              style={{ transitionDuration: "2s" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 lg:left-16 hidden md:block">
            <div className="font-serif italic text-7xl lg:text-9xl text-gradient opacity-90 leading-none">„</div>
          </div>
        </div>

        <div className="reveal-up lg:col-span-5 lg:pl-8">
          <div className="text-xs tracking-[0.4em] uppercase text-primary/90 mb-6">— Priča —</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Više od sale. <br />
            <span className="text-gradient italic">Doživljaj.</span>
          </h2>
          <div className="mt-8 space-y-6 text-foreground/75 text-lg font-light leading-[1.85]">
            <p>
              Postoje trenuci koji obeleže ceo život, prvi ples mladenaca, osmesi roditelja, smeh prijatelja koji se prelivaju kroz noć.
            </p>
            <p>
              U Sali Borović smo posvećeni jednoj jedinoj stvari: da ti trenuci budu okupani svetlošću, toplinom i elegancijom kakvu zaslužuju.
            </p>
            <p className="text-foreground/60 italic font-serif text-xl">
              Svaki detalj, od svetla lustera do poslednjeg cveta na stolu, pažljivo je odabran da bi vaše slavlje izgledalo onako kako ste ga uvek zamišljali.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
            <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground">Bogatić</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
