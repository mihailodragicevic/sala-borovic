import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Unesite vaše ime").max(80),
  email: z.string().trim().email("Unesite ispravan email"),
});

type CountryCode = "RS" | "BA" | "ME" | "HR" | "SI" | "MK" | "XK" | "AL" | "GR";

const countryLabels: Record<CountryCode, string> = {
  RS: "🇷🇸 +381",
  BA: "🇧🇦 +387",
  ME: "🇲🇪 +382",
  HR: "🇭🇷 +385",
  SI: "🇸🇮 +386",
  MK: "🇲🇰 +389",
  XK: "🇽🇰 +383",
  AL: "🇦🇱 +355",
  GR: "🇬🇷 +30",
};

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>("+381");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (value: string | undefined) => {
    setPhoneValue(value);
    if (value && !isValidPhoneNumber(value)) {
      setPhoneError("Broj nije ispravan");
    } else {
      setPhoneError("");
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number
    if (!phoneValue || !isValidPhoneNumber(phoneValue)) {
      setPhoneError("Broj nije ispravan");
      toast.error("Unesite ispravan broj telefona");
      return;
    }

    // Validate other fields
    const r = schema.safeParse({ name, email });
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }

    toast.success("Hvala! Pozvaćemo vas u najkraćem roku.");
    setName("");
    setEmail("");
    setPhoneValue("+381");
    setPhoneError("");
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
              { icon: MapPin, label: "Adresa", value: "Svečana sala Borović, Bogatić", href: "https://maps.google.com/?q=Svečana+sala+Borović+Bogatić" },
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
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ime i Prezime" className="h-12 bg-background/40" maxLength={80} />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" className="h-12 bg-background/40" />
                <div>
                  <style>{`
                    .PhoneInput {
                      display: flex;
                      align-items: center;
                      height: 3rem;
                      background-color: rgba(0, 0, 0, 0.1);
                      border: 2px solid transparent;
                      border-radius: 0.375rem;
                      transition: border-color 0.2s ease;
                      font-family: inherit;
                    }

                    .PhoneInput.error {
                      border-color: rgb(239, 68, 68);
                    }

                    .PhoneInput:focus-within {
                      border-color: var(--primary);
                    }

                    .PhoneInputCountry {
                      padding: 0.5rem;
                      display: flex;
                      align-items: center;
                      border-right: 1px solid rgba(0, 0, 0, 0.1);
                      gap: 0.25rem;
                    }

                    .PhoneInputCountrySelect {
                      background: none;
                      border: none;
                      cursor: pointer;
                      padding: 0.25rem 0.5rem;
                      font-size: 0.95rem;
                      font-weight: 600;
                      display: flex;
                      align-items: center;
                      gap: 0.25rem;
                      color: inherit;
                      outline: none;
                      transition: opacity 0.15s ease;
                    }

                    .PhoneInputCountrySelect:hover {
                      opacity: 0.85;
                    }

                    .PhoneInputCountrySelect::after {
                      content: '▼';
                      font-size: 0.65rem;
                      opacity: 0.7;
                      margin-left: 0.25rem;
                    }

                    .PhoneInputNumber {
                      flex: 1;
                      background: none;
                      border: none;
                      outline: none;
                      color: inherit;
                      font-size: 1rem;
                      padding: 0.5rem;
                    }

                    .PhoneInputNumber::placeholder {
                      color: rgba(0, 0, 0, 0.4);
                    }

                    .PhoneInputCountryList {
                      position: absolute;
                      top: 100%;
                      left: 0;
                      right: 0;
                      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 100%);
                      border: 2px solid var(--border);
                      border-radius: 0.5rem;
                      max-height: 280px;
                      overflow-y: auto;
                      z-index: 50;
                      margin-top: 0.5rem;
                      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.05);
                      backdrop-filter: blur(10px);
                    }

                    .PhoneInputCountryList::-webkit-scrollbar {
                      width: 6px;
                    }

                    .PhoneInputCountryList::-webkit-scrollbar-track {
                      background: transparent;
                    }

                    .PhoneInputCountryList::-webkit-scrollbar-thumb {
                      background: rgba(0, 0, 0, 0.2);
                      border-radius: 3px;
                    }

                    .PhoneInputCountryList::-webkit-scrollbar-thumb:hover {
                      background: rgba(0, 0, 0, 0.3);
                    }

                    .PhoneInputCountryOption {
                      padding: 0.85rem 1rem;
                      cursor: pointer;
                      display: flex;
                      align-items: center;
                      gap: 0.75rem;
                      transition: all 0.2s ease;
                      font-size: 0.95rem;
                      font-weight: 500;
                      color: var(--foreground);
                      border-left: 3px solid transparent;
                    }

                    .PhoneInputCountryOption:hover {
                      background-color: rgba(0, 0, 0, 0.04);
                      border-left-color: var(--primary);
                      padding-left: 1.25rem;
                    }

                    .PhoneInputCountryOption.selected {
                      background: linear-gradient(90deg, var(--primary)/0.15 0%, transparent 100%);
                      border-left-color: var(--primary);
                      color: var(--primary);
                      font-weight: 600;
                      padding-left: 1.25rem;
                    }
                  `}</style>
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RS"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    countries={["RS", "BA", "ME", "HR", "SI", "MK", "XK", "AL", "GR"]}
                    placeholder="Unesite broj telefona"
                    className={`PhoneInput ${phoneError ? "error" : ""}`}
                    numberInputProps={{
                      className: "PhoneInputNumber",
                    }}
                    countrySelectProps={{
                      className: "PhoneInputCountrySelect",
                    }}
                  />
                  {phoneError && <p className="text-red-500 text-sm mt-1.5 font-medium">{phoneError}</p>}
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">Pošaljite zahtev</Button>
              </form>

              <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] border border-border/60">
                <iframe
                  title="Lokacija Svečana sala Borović Bogatić"
                  src="https://www.google.com/maps?q=Svečana+sala+Borović+Bogatić&output=embed"
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
