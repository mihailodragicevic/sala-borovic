import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Unesite vaše ime").max(80),
  phone: z.string().trim().min(6, "Unesite ispravan broj").max(20),
});

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse({ name, phone });
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    toast.success("Hvala! Pozvaćemo vas u najkraćem roku.");
    setName(""); setPhone("");
  };

  return (
    <section id="kontakt" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Kontakt"
          title={<>Javite se — <span className="text-gradient italic">odgovaramo brzo</span></>}
          subtitle="Pozovite nas, pošaljite poruku ili nas posetite u Bogatiću. Tu smo za sva vaša pitanja."
          center
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 reveal-up">
            {[
              { icon: Phone, label: "Telefon", value: "+381 64 123 4567", href: "tel:+381641234567" },
              { icon: MessageCircle, label: "WhatsApp / Viber", value: "+381 64 123 4567", href: "https://wa.me/381641234567" },
              { icon: MapPin, label: "Adresa", value: "Bogatić, Mačva, Srbija", href: "https://maps.google.com/?q=Bogati%C4%87" },
              { icon: Mail, label: "Email", value: "info@salaborovic.rs", href: "mailto:info@salaborovic.rs" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-5 p-5 rounded-2xl border border-border/60 hover:border-primary/60 hover-lift" style={{ background: "var(--gradient-card)" }}>
                <div className="h-12 w-12 rounded-xl bg-gradient-primary/15 border border-primary/30 flex items-center justify-center shadow-glow">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-serif text-xl">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3 reveal-up">
            <div className="rounded-3xl p-8 lg:p-10 border border-border/60 shadow-elegant" style={{ background: "var(--gradient-card)" }}>
              <h3 className="font-serif text-3xl">Pošaljite zahtev za poziv</h3>
              <p className="text-foreground/70 mt-2">Ostavite vaše ime i broj telefona — javljamo se u najkraćem roku.</p>

              <form onSubmit={submit} className="mt-8 space-y-4">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Vaše ime" className="h-12 bg-background/40" maxLength={80} />
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Broj telefona" className="h-12 bg-background/40" maxLength={20} />
                <Button type="submit" variant="hero" size="xl" className="w-full">Pozovite me</Button>
              </form>

              <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] border border-border/60">
                <iframe
                  title="Lokacija Sala Borović Bogatić"
                  src="https://www.google.com/maps?q=Bogati%C4%87,%20Srbija&output=embed"
                  className="w-full h-full grayscale-[40%] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
