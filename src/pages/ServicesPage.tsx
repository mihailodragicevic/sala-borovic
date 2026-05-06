import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check } from "lucide-react";

const includes = [
  "Profesionalna organizacija od A do Š",
  "Personalizovani meni po vašoj želji",
  "Elegantna dekoracija sale i stolova",
  "Ozvučenje i osvetljenje vrhunskog kvaliteta",
  "Posvećen tim domaćina tokom celog događaja",
  "Veliki parking za sve vaše goste",
];

const ServicesPage = () => (
  <Layout>
    <PageHeader
      eyebrow="Ponude"
      title={<>Događaji <span className="text-gradient italic">bez kompromisa</span></>}
      subtitle="Bilo da planirate svadbu života ili intimno porodično slavlje — kreiramo iskustvo prilagođeno vama."
    />
    <Services />
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="reveal-up rounded-3xl p-10 lg:p-14 border border-border/60 shadow-elegant" style={{ background: "var(--gradient-card)" }}>
          <h2 className="font-serif text-4xl lg:text-5xl">Šta je <span className="text-gradient italic">uključeno</span></h2>
          <p className="text-foreground/70 mt-3 max-w-2xl">Svaki paket prilagođavamo broju gostiju i vašim željama — sledeće je standard kod svake naše proslave:</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {includes.map((it) => (
              <div key={it} className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div className="text-foreground/85">{it}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </Layout>
);

export default ServicesPage;
