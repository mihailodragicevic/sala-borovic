import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { name: "Sanja Grujić", text: "U srcu Mačve prelep prostor i neverovatni ljudi… sve pohvale za ljubaznost, gostoprimstvo i osoblje!" },
  { name: "Slaviša Matić", text: "Prelepa velika sala, ljubazno osoblje, izvrsna hrana, veliki parking. Sve preporuke za proslave i veselja." },
  { name: "Jelena Bojić", text: "Prijatan ambijent i odlična usluga. Svečanosti su uvek besprekorno organizovane uz dogovor, ispunjavaju svaku želju." },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Utisci gostiju"
          title={<>Reči onih koji su slavili <span className="text-gradient italic">sa nama</span></>}
          center
        />

        <div className="mt-16 max-w-3xl mx-auto reveal-up">
          <div className="relative glass rounded-3xl p-10 lg:p-14 shadow-elegant">
            <Quote className="absolute -top-6 left-8 h-14 w-14 text-primary/40" />
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p key={i} className="font-serif text-2xl lg:text-3xl leading-snug text-foreground/95 italic animate-fade-in">
              "{items[i].text}"
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <div className="font-medium">{items[i].name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Gost Sale Borović</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setI((p) => (p - 1 + items.length) % items.length)} className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center" aria-label="Prethodno">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setI((p) => (p + 1) % items.length)} className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center" aria-label="Sledeće">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1 rounded-full transition-all ${i === idx ? "w-10 bg-gradient-primary" : "w-4 bg-border"}`}
                  aria-label={`Utisak ${idx + 1}`}
                />
              ))}
            </div>

            <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-border">
              <div key={i} className="absolute inset-0 rounded-full bg-gradient-primary origin-left animate-testimonial-progress" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
