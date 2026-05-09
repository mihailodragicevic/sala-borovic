import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MessageCircle,
  PartyPopper,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_HREF } from "@/lib/contact";
import weddingImage from "@/assets/Mladenci.webp";
import birthdayImage from "@/assets/Matura.webp";
import specialImage from "@/assets/Dekoracija.webp";
import flexibilityImage from "@/assets/Unutrašnjost sale.webp";

const showcaseItems = [
  {
    eyebrow: "Sala za svadbe Bogatić",
    title: "Svadbe za pamćenje",
    text: "Elegantna atmosfera, pažljivo uređen prostor i ambijent koji svaki trenutak čini posebnim. Sala Borović pruža idealno okruženje za dan koji želite da pamtite zauvek.",
    ctaLabel: "Proverite slobodne termine",
    ctaTo: "/kontakt",
    image: weddingImage,
    alt: "Mladenci u svečanoj sali Borović u Bogatiću",
  },
  {
    eyebrow: "Rođendani Bogatić",
    title: "Rođendani u modernom ambijentu",
    text: "Proslavite važne trenutke u prostoru koji se lako prilagođava vašem stilu, broju gostiju i atmosferi koju želite da napravite.",
    ctaLabel: "Kontaktirajte nas",
    ctaTo: "/kontakt",
    image: birthdayImage,
    alt: "Rođendanska proslava u svečanoj sali Borović",
  },
  {
    eyebrow: "Proslave Bogatić",
    title: "Posebni događaji i porodična okupljanja",
    text: "Bilo da organizujete krštenje, punoletstvo, godišnjicu ili poslovni događaj, naš prostor pruža elegantan okvir za svaku vrstu proslave.",
    ctaLabel: "Zakažite razgovor",
    ctaTo: "/kontakt",
    image: specialImage,
    alt: "Elegantno dekorisan prostor za posebne proslave u Bogatiću",
  },
];

const experienceItems = [
  {
    title: "Atmosfera koja ostavlja utisak",
    text: "Svaki kadar, svaki detalj i svako svetlo rade zajedno da prostor deluje svečano, toplo i nezaboravno od prvog trenutka.",
    icon: Sparkles,
  },
  {
    title: "Prostor prilagođen vašem događaju",
    text: "Od intimnijih okupljanja do većih slavlja, raspored i ritam večeri mogu se uskladiti sa tipom događaja i brojem gostiju.",
    icon: Users,
  },
  {
    title: "Detalji koji prave razliku",
    text: "Dobar utisak ne nastaje slučajno. Nastaje iz organizacije, udobnosti i onih sitnica koje gosti pamte dugo nakon proslave.",
    icon: Star,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Dogovor i planiranje",
    text: "Razgovaramo o tipu događaja, broju gostiju i atmosferi koju želite da kreirate.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Priprema prostora",
    text: "Sala se organizuje tako da tok večeri bude prirodan, elegantan i prijatan za svakog gosta.",
    icon: Users,
  },
  {
    number: "03",
    title: "Dekoracija i atmosfera",
    text: "Detalji, svetlo i ambijent zajedno grade izgled proslave koji ostavlja snažan utisak.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Proslava za pamćenje",
    text: "Kada sve bude spremno, ostaje samo da vi i vaši gosti uživate u večeri koja se dugo prepričava.",
    icon: PartyPopper,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    const previousTitle = document.title;

    const ensureNamedMeta = (name: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const ensurePropertyMeta = (property: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const ensureCanonical = () => {
      let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "canonical");
        document.head.appendChild(tag);
      }
      return tag;
    };

    const descriptionTag = ensureNamedMeta("description");
    const keywordsTag = ensureNamedMeta("keywords");
    const ogTitleTag = ensurePropertyMeta("og:title");
    const ogDescriptionTag = ensurePropertyMeta("og:description");
    const canonicalTag = ensureCanonical();

    const previousDescription = descriptionTag.content;
    const previousKeywords = keywordsTag.content;
    const previousOgTitle = ogTitleTag.content;
    const previousOgDescription = ogDescriptionTag.content;
    const previousCanonical = canonicalTag.href;

    document.title = "Ponude | Svečana sala Borović Bogatić";
    descriptionTag.content =
      "Organizujte svadbe, rođendane i posebne proslave u svečanoj sali Borović u Bogatiću. Moderan ambijent, fleksibilna organizacija i atmosfera za pamćenje.";
    keywordsTag.content =
      "svečana sala Bogatić, sala za svadbe Bogatić, proslave Bogatić, rođendani Bogatić, Svečana sala Borović";
    ogTitleTag.content = "Ponude | Svečana sala Borović Bogatić";
    ogDescriptionTag.content =
      "Svadbe, rođendani i posebne proslave u elegantnom ambijentu svečane sale Borović u Bogatiću.";
    canonicalTag.href = "https://salaborovic.rs/ponude";

    return () => {
      document.title = previousTitle;
      descriptionTag.content = previousDescription;
      keywordsTag.content = previousKeywords;
      ogTitleTag.content = previousOgTitle;
      ogDescriptionTag.content = previousOgDescription;
      canonicalTag.href = previousCanonical;
    };
  }, []);

  return (
    <Layout>
      <section className="pt-36">
        <h1 className="sr-only">Proslave kreirane po vašoj meri | Svečana sala Borović Bogatić</h1>
        <div className="mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-20">
          <div
            className="reveal-up rounded-[2rem] border border-border/70 px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-12 lg:py-12"
            style={{ background: "linear-gradient(145deg, hsl(270 20% 9%) 0%, hsl(270 18% 6%) 100%)" }}
          >
            <div className="max-w-4xl">
              <div className="text-xs uppercase tracking-[0.35em] text-primary/82">Ponude</div>
              <div className="mt-5 font-serif text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
                Proslave koje ostavljaju utisak, u prostoru koji je spreman da prati vašu priču.
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/72 sm:text-lg">
                Od svadbi i rođendana do posebnih događaja, svečana sala Borović u Bogatiću nudi ambijent koji deluje elegantno, prirodno i prijatno tokom cele večeri.
              </p>
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
                  Pošaljite poruku
                </Link>
              </Button>
            </div>

            <a
              href={PRIMARY_PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-foreground/58 transition-colors hover:text-primary"
            >
              Direktan kontakt
              <span className="text-primary">{PRIMARY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(320 75% 60% / 0.45), transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Ponude</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Prostor koji produbljuje <span className="text-gradient italic">utisak svakog događaja</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
              Umesto jednostavne liste usluga, ovde vas čeka pregled iskustava koja su pažljivo oblikovana za različite vrste proslava.
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
                      />
                    </div>
                  </div>

                  <div className={`reveal-up ${isReversed ? "lg:order-1" : ""}`} style={{ transitionDelay: "120ms" }}>
                    <div className="text-xs uppercase tracking-[0.32em] text-primary/80">{item.eyebrow}</div>
                    <h3 className="mt-4 font-serif text-4xl sm:text-5xl">{item.title}</h3>
                    <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-foreground/72">
                      {item.text}
                    </p>

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

      <section className="relative py-24 lg:py-28">
        <div
          className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, hsl(290 80% 58% / 0.45), transparent 70%)" }}
        />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Iskustvo</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Više od prostora <span className="text-gradient italic">za proslave</span>
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-foreground/72">
              Sala Borović nije samo sala za svadbe u Bogatiću. To je iskustvo oblikovano kroz atmosferu, komfor, organizaciju i detalje koji čine da svaka proslava deluje zaokruženo i posebno.
            </p>
          </div>

          <div className="mt-14 divide-y divide-border/70 overflow-hidden rounded-[2rem] border border-border/70 bg-card/35 backdrop-blur-sm">
            {experienceItems.map((item, index) => (
              <div
                key={item.title}
                className="reveal-up flex flex-col gap-5 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-center gap-4 lg:w-[34%]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-3xl">{item.title}</h3>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-foreground/70 lg:w-[56%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Tok događaja</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Kako izgleda vaša <span className="text-gradient italic">proslava kod nas</span>
            </h2>
          </div>

          <div className="relative mt-16 space-y-8 lg:space-y-10">
            <div
              className="absolute bottom-0 left-6 top-0 w-px lg:left-1/2"
              style={{ background: "linear-gradient(180deg, hsl(320 75% 60% / 0.1), hsl(320 75% 60% / 0.5), hsl(290 75% 60% / 0.1))" }}
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
                    <div className="rounded-[2rem] border border-border/70 p-7 shadow-soft" style={{ background: "var(--gradient-card)" }}>
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

      <section className="relative py-24 lg:py-32">
        <div
          className="absolute left-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, hsl(330 82% 62% / 0.4), transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="reveal-up group relative overflow-hidden rounded-[2rem] border border-border/70 shadow-soft">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, hsl(320 75% 60% / 0.16), transparent 55%)" }}
              />
              <img
                src={flexibilityImage}
                alt="Enterijer svečane sale Borović prilagođen različitim tipovima proslava"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[520px]"
                loading="lazy"
              />
            </div>

            <div className="reveal-up" style={{ transitionDelay: "120ms" }}>
              <div className="text-xs uppercase tracking-[0.35em] text-primary/85">Fleksibilnost</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
                Prilagođeno <span className="text-gradient italic">vašim željama</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
                Svaka proslava ima svoju priču. Zato prostor, raspored i atmosfera mogu biti prilagođeni tipu događaja, broju gostiju i vašim željama.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Raspored prostora prilagodljiv intimnijim i većim proslavama.",
                  "Ambijent koji podjednako odgovara svadbama, rođendanima i porodičnim okupljanjima u Bogatiću.",
                  "Dogovor koji ostavlja dovoljno prostora da vaša vizija ostane u centru večeri.",
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
                    Pošaljite upit
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
                  Isplanirajte proslavu <span className="text-gradient italic">za pamćenje.</span>
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-foreground/72">
                  Kontaktirajte nas i proverite slobodne termine za vaš događaj.
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
                    Pošaljite poruku
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
