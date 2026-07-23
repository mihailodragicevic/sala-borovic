import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MessageCircle,
  PartyPopper,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/lib/contact";
import weddingImage from "@/assets/Mladenci.webp";
import birthdayImage from "@/assets/Matura.webp";
import specialImage from "@/assets/Maturanti.webp";
import appetizerImage from "@/assets/Predjelo.webp";
import dessertImage from "@/assets/Slatki sto.webp";
import flexibilityImage from "@/assets/Unutrasnjost sale.webp";

const showcaseItems = [
  {
    eyebrow: "Sala za svadbe Bogatic",
    title: "Svadbe za pamcenje",
    text: "Elegantna atmosfera, pazljivo uredjen prostor i ambijent koji svaki trenutak cini posebnim. Sala Borovic pruza idealno okruzenje za dan koji zelite da pamtite zauvek.",
    ctaLabel: "Proverite slobodne termine",
    ctaTo: "/kontakt",
    image: weddingImage,
    alt: "Mladenci u svecanoj sali Borovic u Bogaticu",
  },
  {
    eyebrow: "Rodjendani Bogatic",
    title: "Rodjendani u modernom ambijentu",
    text: "Proslavite vazne trenutke u prostoru koji se lako prilagodjava vasem stilu, broju gostiju i atmosferi koju zelite da napravite.",
    ctaLabel: "Kontaktirajte nas",
    ctaTo: "/kontakt",
    image: birthdayImage,
    alt: "Rodjendanska proslava u svecanoj sali Borovic",
  },
  {
    eyebrow: "Proslave Bogatic",
    title: "Maturske veceri za pamcenje",
    text: "Organizujemo maturske veceri u elegantnom ambijentu, sa dovoljno prostora, sjajnom atmosferom i uslugom koja svakoj generaciji omogucava proslavu za nezaboravno vece.",
    ctaLabel: "Zakazite razgovor",
    ctaTo: "/kontakt",
    image: specialImage,
    alt: "Matursko vece u svecanoj sali Borovic u Bogaticu",
  },
];

const foodItems = [
  "Predjelo",
  "Supa ili corba",
  "Sarma",
  "Pecenje ili rostilj od vlasnika sale",
];

const extraOptions = [
  {
    title: "Cokoladna fontana",
    text: "Efektan detalj koji upotpunjuje posluzenje i ostavlja lep utisak na goste.",
  },
  {
    title: "Slatki sto",
    text: "Raznovrstan izbor slatkisa za elegantnu i bogatu prezentaciju tokom proslave.",
  },
  {
    title: "Kompletna dekoracija sale",
    text: "Dekoracija se moze prilagoditi stilu vaseg dogadjaja i zeljenoj atmosferi.",
  },
  {
    title: "Prskalice i kokteli",
    text: "Dodatni efekat za jos svecaniji dozivljaj i atraktivnije kljucne trenutke veceri.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Dogovor i planiranje",
    text: "Razgovaramo o tipu dogadjaja, broju gostiju i atmosferi koju zelite da kreirate.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Priprema prostora",
    text: "Sala se organizuje tako da tok veceri bude prirodan, elegantan i prijatan za svakog gosta.",
    icon: Users,
  },
  {
    number: "03",
    title: "Dekoracija i atmosfera",
    text: "Detalji, svetlo i ambijent zajedno grade izgled proslave koji ostavlja snazan utisak.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Proslava za pamcenje",
    text: "Kada sve bude spremno, ostaje samo da vi i vasi gosti uzivate u veceri koja se dugo prepricava.",
    icon: PartyPopper,
  },
];

const ServicesPage = () => (
    <Layout>
      <Seo
        title="Ponude | Svečana sala Borović, Bogatić"
        description="Ponude za proslave u svečanoj sali Borović u Bogatiću. Dogovor oko hrane, dodatne opcije, fleksibilna organizacija i elegantan ambijent za svadbe i proslave."
        pathname="/ponude"
        preloadImages={[appetizerImage]}
      />
      <section className="relative overflow-hidden pt-36">
        <div
          className="pointer-events-none absolute -left-36 top-8 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-55"
          style={{ background: "radial-gradient(circle, hsl(28 92% 70% / 0.52), transparent 72%)" }}
        />
        <div
          className="pointer-events-none absolute -left-6 top-36 h-80 w-56 blur-3xl opacity-35"
          style={{ background: "linear-gradient(180deg, hsl(38 96% 78% / 0.42), transparent 82%)" }}
        />
        <div
          className="pointer-events-none absolute left-24 top-24 h-48 w-48 rounded-full blur-[90px] opacity-30"
          style={{ background: "radial-gradient(circle, hsl(12 96% 76% / 0.36), transparent 68%)" }}
        />
        <h1 className="sr-only">Ponude i dodatne opcije | Svečana sala Borović, Bogatić</h1>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <div
              className="reveal-up rounded-[2rem] border border-border/70 px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-12 lg:py-12"
              style={{ background: "linear-gradient(145deg, hsl(270 20% 9%) 0%, hsl(270 18% 6%) 100%)" }}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-primary/82">Ponude hrane</div>
              <div className="mt-5 font-serif text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
                Cena po dogovoru, u zavisnosti od toga šta obezbeđuje domaćin.
              </div>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/72 sm:text-lg">
                U ponudi je moguće organizovati kompletan meni koji može obuhvatati predjelo,
                 supu ili čorbu, sarmu, kao i pečenje ili roštilj u organizaciji sale. 
                 Takođe, postoji fleksibilnost prilagođavanja ponude vašim željama, uz mogućnost da deo hrane obezbedi domaćin,
                  dok ostatak organizuje sala Borović.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {foodItems.map((item, index) => (
                  <div
                    key={item}
                    className="reveal-up flex items-start gap-3 rounded-[1.5rem] border border-border/60 bg-card/40 p-5 backdrop-blur-sm"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/78 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href={PRIMARY_PHONE_HREF}>
                    <Phone className="h-5 w-5" />
                    Pozovite nas
                  </a>
                </Button>
                <Button asChild variant="outlineLux" size="xl">
                  <Link to="/kontakt">
                    <MessageCircle className="h-5 w-5" />
                    Posaljite poruku
                  </Link>
                </Button>
              </div>
            </div>

            <div className="reveal-up group relative overflow-hidden rounded-[2rem] border border-border/70 shadow-soft">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, hsl(320 75% 60% / 0.18), transparent 55%)" }}
              />
              <img
                src={appetizerImage}
                alt="Ponuda hrane u svecanoj sali Borovic"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[560px]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-28">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(320 75% 60% / 0.45), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="reveal-up group relative overflow-hidden rounded-[2rem] border border-border/70 shadow-soft lg:order-2">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, hsl(320 75% 60% / 0.16), transparent 55%)" }}
              />
              <img
                src={dessertImage}
                alt="Dodatne opcije za proslave u svecanoj sali Borovic"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[520px]"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="reveal-up lg:order-1">
              <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Dodatne opcije</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                Sve sto dodatno ulepsa i upotpuni proslavu.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
                Pored osnovne ponude hrane, na raspolaganju su i dodatni detalji koji mogu da ulepsaju salu i celokupan
                dozivljaj gostiju.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {extraOptions.map((item, index) => (
                  <div
                    key={item.title}
                    className="reveal-up rounded-[1.5rem] border border-border/70 bg-card/45 p-6 shadow-soft"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="text-xs uppercase tracking-[0.28em] text-primary/80">Opcija {index + 1}</div>
                    <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-foreground/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="pointer-events-none absolute -right-32 top-12 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, hsl(332 84% 66% / 0.46), transparent 72%)" }}
        />
        <div
          className="pointer-events-none absolute right-8 top-1/3 h-72 w-72 rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, hsl(18 96% 74% / 0.34), transparent 68%)" }}
        />
        <div
          className="pointer-events-none absolute right-24 top-16 h-44 w-44 rounded-full blur-[80px] opacity-28"
          style={{ background: "radial-gradient(circle, hsl(352 95% 76% / 0.34), transparent 66%)" }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Ponude</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Prostor koji produbljuje <span className="text-gradient italic">utisak svakog dogadjaja</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
              Razlicite vrste proslava dobijaju svoj idealan ambijent, od svecanih vencanja do veselih rodjendana i
              posebnih porodicnih okupljanja.
            </p>
          </div>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {showcaseItems.map((item, index) => {
              const isReversed = index % 2 === 1;

              return (
                <div key={item.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`reveal-up ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 shadow-soft">
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                        style={{ background: "linear-gradient(135deg, hsl(320 75% 60% / 0.15), transparent 55%)" }}
                      />
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.04] sm:h-[520px]"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 42vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className={`reveal-up ${isReversed ? "lg:order-1" : ""}`} style={{ transitionDelay: "120ms" }}>
                    <div className="text-xs uppercase tracking-[0.32em] text-primary/80">{item.eyebrow}</div>
                    <h3 className="mt-4 font-serif text-4xl sm:text-5xl">{item.title}</h3>
                    <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-foreground/72">{item.text}</p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <Button asChild variant="outlineLux" size="lg">
                        <Link to={item.ctaTo}>
                          {item.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <a
                        href={PRIMARY_PHONE_HREF}
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-foreground/62 transition-colors hover:text-primary"
                      >
                        Pozovite nas
                        <span className="text-primary">{PRIMARY_PHONE_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Tok dogadjaja</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Kako izgleda vasa <span className="text-gradient italic">proslava kod nas</span>
            </h2>
          </div>

          <div className="relative mt-16 space-y-8 lg:space-y-10">
            <div
              className="absolute bottom-0 left-6 top-0 w-px lg:left-1/2"
              style={{
                background:
                  "linear-gradient(180deg, hsl(320 75% 60% / 0.1), hsl(320 75% 60% / 0.5), hsl(290 75% 60% / 0.1))",
              }}
            />

            {journeySteps.map((step, index) => {
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className="reveal-up relative grid gap-5 pl-16 lg:grid-cols-2 lg:gap-10 lg:pl-0"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`${isReversed ? "lg:order-2" : ""}`}>
                    <div
                      className="rounded-[2rem] border border-border/70 p-7 shadow-soft"
                      style={{ background: "var(--gradient-card)" }}
                    >
                      <div className="text-sm uppercase tracking-[0.3em] text-primary/72">{step.number}</div>
                      <h3 className="mt-4 font-serif text-3xl">{step.title}</h3>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/70">{step.text}</p>
                    </div>
                  </div>

                  <div className={`hidden lg:flex ${isReversed ? "order-1 justify-end" : "justify-start"}`}>
                    <div className="w-full max-w-md" />
                  </div>

                  <div className="absolute left-0 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background shadow-glow lg:left-1/2 lg:-translate-x-1/2">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="pointer-events-none absolute -left-28 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full blur-3xl opacity-46"
          style={{ background: "radial-gradient(circle, hsl(342 84% 66% / 0.44), transparent 72%)" }}
        />
        <div
          className="pointer-events-none absolute left-8 top-16 h-[24rem] w-36 blur-3xl opacity-30"
          style={{ background: "linear-gradient(180deg, hsl(24 92% 72% / 0.4), transparent 82%)" }}
        />
        <div
          className="pointer-events-none absolute left-24 top-40 h-56 w-56 rounded-full blur-[100px] opacity-24"
          style={{ background: "radial-gradient(circle, hsl(36 92% 74% / 0.28), transparent 68%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="reveal-up group relative overflow-hidden rounded-[2rem] border border-border/70 shadow-soft">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, hsl(320 75% 60% / 0.16), transparent 55%)" }}
              />
              <img
                src={flexibilityImage}
                alt="Enterijer svecane sale Borovic prilagodjen razlicitim tipovima proslava"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[520px]"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
              <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Fleksibilnost</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                Prilagodjeno <span className="text-gradient italic">vasim zeljama</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
                Svaka proslava ima svoju pricu. Zato prostor, raspored i atmosfera mogu biti prilagodjeni tipu dogadjaja,
                broju gostiju i vasim zeljama.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Raspored prostora prilagodljiv intimnijim i vecim proslavama.",
                  "Ambijent koji podjednako odgovara svadbama, rodjendanima i porodicnim okupljanjima u Bogaticu.",
                  "Dogovor koji ostavlja dovoljno prostora da vasa vizija ostane u centru veceri.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-border/50 pb-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-base leading-relaxed text-foreground/72">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="outlineLux" size="lg">
                  <Link to="/kontakt">
                    Posaljite upit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={PRIMARY_PHONE_HREF}>
                    <Phone className="h-4 w-4" />
                    {PRIMARY_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-28 pt-8 lg:pb-36">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="reveal-up relative overflow-hidden rounded-[2.25rem] border border-primary/20 px-6 py-12 shadow-elegant sm:px-10 lg:px-14 lg:py-16">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, hsl(270 24% 8%) 0%, hsl(270 20% 5%) 55%, hsl(290 26% 9%) 100%)",
              }}
            />
            <div
              className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl opacity-40 animate-float-slow"
              style={{ background: "radial-gradient(circle, hsl(320 80% 60% / 0.5), transparent 70%)" }}
            />
            <div
              className="absolute -right-16 bottom-0 h-72 w-72 rounded-full blur-3xl opacity-30 animate-float-slower"
              style={{ background: "radial-gradient(circle, hsl(285 78% 56% / 0.45), transparent 70%)" }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Rezervacije</div>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                  Isplanirajte proslavu <span className="text-gradient italic">za pamcenje.</span>
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
                  Kontaktirajte nas i proverite slobodne termine za vas dogadjaj.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
                  <a href={PRIMARY_PHONE_HREF}>
                    <Phone className="h-5 w-5" />
                    Pozovite nas
                  </a>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/kontakt">
                    <MessageCircle className="h-5 w-5" />
                    Posaljite poruku
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );

export default ServicesPage;
