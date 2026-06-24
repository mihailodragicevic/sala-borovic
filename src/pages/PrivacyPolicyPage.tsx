import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
} from "@/lib/contact";

const sections = [
  {
    title: "1. Koje podatke možemo prikupljati",
    body: [
      "Kada nam se obratite putem kontakt forme ili direktno putem telefona i emaila, možemo obrađivati podatke koje sami ostavite, kao što su ime i prezime, email adresa, broj telefona i sadržaj poruke ili upita.",
      "Prilikom korišćenja kontakt forme mogu se obrađivati i tehnički podaci potrebni za bezbednost i sprečavanje zloupotreba, kao što su IP adresa, osnovni podaci o pregledaču, datum i vreme slanja upita i slični tehnički zapisi.",
      "Molimo vas da nam preko kontakt forme ne šaljete osetljive lične podatke, uključujući zdravstvene podatke, brojeve kartica, JMBG ili druge posebno osetljive informacije.",
    ],
  },
  {
    title: "2. Zašto obrađujemo podatke",
    body: [
      "Podatke obrađujemo kako bismo odgovorili na vaš upit, dali informacije o raspoloživim terminima, ponudama i organizaciji događaja, kao i radi dalje komunikacije ako zatražite saradnju ili rezervaciju.",
      "Podaci se mogu koristiti i radi zaštite sajta, sprečavanja spam poruka, otkrivanja zloupotreba, vođenja evidencije komunikacije i ispunjavanja zakonskih obaveza kada je to potrebno.",
    ],
  },
  {
    title: "3. Obrada putem Formspree servisa",
    body: [
      "Podaci poslati preko kontakt forme namenjeni su obradi putem servisa Formspree, treće strane koja služi za prijem i prosleđivanje form submit podataka.",
      "Prema zvaničnim informacijama Formspree, njihovi servisi su hostovani na Amazon Web Services infrastrukturi u Sjedinjenim Američkim Državama, mrežni saobraćaj je zaštićen TLS enkripcijom, a baze podataka su šifrovane u mirovanju AES-256 enkripcijom.",
      "Formspree u okviru svog rada može obrađivati i bezbednosne i tehničke podatke radi sprečavanja prevara, spama i zaštite servisa. Više detalja možete pogledati u njihovoj politici privatnosti i bezbednosnim informacijama.",
    ],
  },
  {
    title: "4. Pravni osnov i deljenje podataka",
    body: [
      "Vaše podatke obrađujemo prvenstveno na osnovu vašeg zahteva za komunikaciju, preduzimanja radnji pre eventualnog zaključenja saradnje, našeg legitimnog interesa da odgovorimo na upite i zaštitimo sajt, kao i kada je potrebno radi ispunjavanja zakonskih obaveza.",
      "Vaše podatke ne prodajemo i ne ustupamo trećim licima za njihove sopstvene marketinške potrebe. Podaci mogu biti dostupni samo pružaocima usluga koji učestvuju u tehničkoj obradi, kao što je Formspree, ili nadležnim organima kada to nalaže zakon.",
    ],
  },
  {
    title: "5. Međunarodni prenos podataka",
    body: [
      "Pošto Formspree koristi infrastrukturu u SAD, podaci poslati putem kontakt forme mogu biti preneti i obrađivani van Srbije i van Evropskog ekonomskog prostora.",
      "Prema zvaničnim informacijama Formspree, za ovakve prenose koriste odgovarajuće mehanizme zaštite, uključujući Standard Contractual Clauses kada su primenljive.",
    ],
  },
  {
    title: "6. Koliko dugo čuvamo podatke",
    body: [
      "Podatke čuvamo onoliko dugo koliko je razumno potrebno da odgovorimo na vaš upit, nastavimo komunikaciju u vezi sa događajem ili ispunimo zakonske i računovodstvene obaveze, kada su primenljive.",
      "Ako zatražite brisanje, obradićemo zahtev u skladu sa važećim propisima, osim kada određene podatke moramo zadržati zbog pravnih, bezbednosnih ili evidencionih razloga.",
    ],
  },
  {
    title: "7. Kolačići i slične tehnologije",
    body: [
      "Javni deo ovog sajta trenutno ne koristi analitičke ni marketinške kolačiće za profilisanje posetilaca.",
      "U slučaju budućih tehničkih izmena, funkcionalni ili neophodni kolačići mogu biti uvedeni samo u meri potrebnoj za pravilan rad sajta, a ova politika će tada biti ažurirana.",
    ],
  },
  {
    title: "8. Vaša prava",
    body: [
      "U skladu sa primenljivim propisima, možete tražiti pristup svojim podacima, ispravku netačnih podataka, brisanje podataka, ograničenje obrade, prigovor na obradu ili informacije o načinu korišćenja vaših podataka.",
      "Ako ste nam prethodno dali saglasnost za određenu obradu, imate pravo da je povučete za ubuduće. Povlačenje saglasnosti ne utiče na zakonitost obrade pre povlačenja.",
    ],
  },
  {
    title: "9. Izmene politike privatnosti",
    body: [
      "Ovu politiku privatnosti možemo povremeno ažurirati radi usklađivanja sa promenama na sajtu, promenama načina obrade podataka ili zakonskim zahtevima. Na ovoj stranici biće objavljena važeća verzija.",
    ],
  },
];

const PrivacyPolicyPage = () => (
  <Layout>
    <Seo
      title="Politika privatnosti | Svečana sala Borović Bogatić"
      description="Pročitajte politiku privatnosti sajta Svečane sale Borović u Bogatiću i saznajte kako obrađujemo kontakt podatke, upite i informacije sa sajta."
      pathname="/politika-privatnosti"
    />
    <PageHeader
      eyebrow="Politika privatnosti"
      title={<>Vaši podaci i <span className="text-gradient italic">vaša privatnost</span></>}
      subtitle="Poslednje ažuriranje: 9. maj 2026. Ovde možete pročitati koje podatke obrađujemo, zašto ih koristimo i koja prava imate."
    />

    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div
          className="reveal-up rounded-3xl border border-border/60 p-8 shadow-elegant lg:p-12"
          style={{ background: "var(--gradient-card)" }}
        >
          <p className="max-w-3xl text-lg font-light leading-relaxed text-foreground/80">
            Ova Politika privatnosti odnosi se na sajt Svečane sale Borović i objašnjava kako postupamo sa informacijama
            koje nam ostavite kada nas kontaktirate ili koristite naš sajt.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-primary/90">Kontakt</div>
              <div className="mt-3 space-y-2 text-foreground/85">
                <a href={PRIMARY_PHONE_HREF} className="block transition-colors hover:text-primary">{PRIMARY_PHONE_DISPLAY}</a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="block transition-colors hover:text-primary">{CONTACT_EMAIL}</a>
                <div>{CONTACT_ADDRESS}</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/20 p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-primary/90">Treća strana</div>
              <div className="mt-3 space-y-2 text-foreground/85">
                <div>Kontakt forma koristi obradu putem Formspree servisa.</div>
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-primary"
                >
                  Formspree politika privatnosti
                </a>
                <a
                  href="https://formspree.io/security/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-primary"
                >
                  Formspree bezbednost i zaštita podataka
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-border/50 pt-8">
                <h2 className="font-serif text-3xl leading-tight text-foreground">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-foreground/78">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicyPage;
