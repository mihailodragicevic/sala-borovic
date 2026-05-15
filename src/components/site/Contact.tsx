import { useState } from "react";
import { z } from "zod";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  FORMSPREE_ENDPOINT,
  CONTACT_MAPS_EMBED,
  CONTACT_MAPS_HREF,
  FACEBOOK_HREF,
  INSTAGRAM_HREF,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
  SECONDARY_WHATSAPP_HREF,
} from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime").max(80),
});

const emailSchema = z.string().trim().email("Unesite ispravan email");

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    links: [
      { label: PRIMARY_PHONE_DISPLAY, href: PRIMARY_PHONE_HREF },
      { label: SECONDARY_PHONE_DISPLAY, href: SECONDARY_PHONE_HREF },
    ],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Viber",
    links: [
      { label: PRIMARY_PHONE_DISPLAY, href: PRIMARY_WHATSAPP_HREF },
      { label: SECONDARY_PHONE_DISPLAY, href: SECONDARY_WHATSAPP_HREF },
    ],
  },
  {
    icon: MapPin,
    label: "Adresa",
    links: [{ label: CONTACT_ADDRESS, href: CONTACT_MAPS_HREF }],
  },
  {
    icon: Mail,
    label: "Email",
    links: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_HREF },
  { icon: Facebook, label: "Facebook", href: FACEBOOK_HREF },
];

export const Contact = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>(undefined);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handlePhoneChange = (value: string | undefined) => {
    setPhoneValue(value);

    if (!value) {
      setPhoneError("");
      return;
    }

    if (!isValidPhoneNumber(value)) {
      setPhoneError("Broj nije ispravan");
    } else {
      setPhoneError("");
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDescription = description.trim();
    let hasError = false;

    setSubmitError("");

    if (!trimmedName) {
      setNameError("Ovo polje je obavezno");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!phoneValue) {
      setPhoneError("Ovo polje je obavezno");
      hasError = true;
    } else if (!isValidPhoneNumber(phoneValue)) {
      setPhoneError("Broj nije ispravan");
      hasError = true;
    } else {
      setPhoneError("");
    }

    const result = schema.safeParse({ name: trimmedName });
    if (!result.success) {
      setNameError(result.error.issues[0].message);
      hasError = true;
    }

    if (trimmedEmail && !emailSchema.safeParse(trimmedEmail).success) {
      setEmailError("Unesite ispravan email");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (hasError) {
      return;
    }

    const sentAt = new Intl.DateTimeFormat("sr-RS", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date());

    const payload = {
      ime_prezime: trimmedName,
      ...(trimmedEmail ? { email: trimmedEmail } : {}),
      broj_telefona: phoneValue,
      opis_gosta: trimmedDescription || "Nije unet opis gosta.",
      vreme_slanja: sentAt,
      _gotcha: honeypot,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          result?.errors?.[0]?.message ||
          "Doslo je do greske prilikom slanja. Pokusajte ponovo ili nas pozovite.";

        setSubmitError(errorMessage);
        toast.error("Slanje nije uspelo", {
          description: errorMessage,
          position: "top-center",
        });
        return;
      }

      toast.success("Zahtev je uspesno poslat", {
        description: "Hvala vam. Javicemo se u najkracem roku.",
        position: "top-center",
      });
      setName("");
      setDescription("");
      setEmail("");
      setPhoneValue(undefined);
      setHoneypot("");
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setSubmitError("");
    } catch {
      const errorMessage = "Veza sa serverom nije uspela. Pokusajte ponovo za nekoliko minuta.";
      setSubmitError(errorMessage);
      toast.error("Slanje nije uspelo", {
        description: errorMessage,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="relative pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal-up space-y-4 lg:col-span-2">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex items-center gap-5 rounded-2xl border border-border/60 p-5 hover-lift hover:border-primary/60"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-gradient-primary/15 shadow-glow">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{card.label}</div>
                  <div className="font-sans text-lg font-medium leading-snug tracking-[0.02em] sm:text-xl">
                    {card.links.map((link) => (
                      <a key={link.href} href={link.href} className="block transition-colors hover:text-primary">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div
              className="rounded-2xl border border-border/60 p-5 hover-lift hover:border-primary/60"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Drustvene mreze</div>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/30 text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:text-primary hover:shadow-glow"
                  >
                    <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-up lg:col-span-3">
            <div
              className="rounded-3xl border border-border/60 p-8 shadow-elegant lg:p-10"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="font-serif text-3xl">Posaljite zahtev za poziv</h3>
              <p className="mt-2 text-foreground/70">Ostavite vase ime i broj telefona - javljamo se u najkracem roku.</p>

              <form onSubmit={submit} noValidate className="mt-8 space-y-4">
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground/88">
                    Ime i prezime *
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value.trim()) {
                        setNameError("");
                      }
                    }}
                    placeholder="Unesite ime i prezime"
                    className={`h-12 bg-background/40 ${nameError ? "border-red-500 focus-visible:ring-red-500/30" : ""}`}
                    maxLength={80}
                  />
                  {nameError && <p className="text-sm font-medium text-red-500">{nameError}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground/88">
                    Email (Opciono)
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    type="email"
                    placeholder="ime.prezime@email.com"
                    className={`h-12 bg-background/40 ${emailError ? "border-red-500 focus-visible:ring-red-500/30" : ""}`}
                  />
                  {emailError && <p className="text-sm font-medium text-red-500">{emailError}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground/88">
                    Broj telefona *
                  </label>
                  <style>{`
                    .PhoneInput {
                      display: flex;
                      align-items: center;
                      height: 3rem;
                      background: linear-gradient(145deg, hsl(270 20% 10% / 0.92) 0%, hsl(270 22% 7% / 0.96) 100%);
                      border: 1px solid hsl(var(--border) / 0.9);
                      border-radius: 0.9rem;
                      transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                      font-family: inherit;
                      position: relative;
                      overflow: hidden;
                      box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.03);
                    }

                    .PhoneInput.error {
                      border-color: rgb(239, 68, 68);
                    }

                    .PhoneInput:focus-within {
                      border-color: hsl(var(--primary) / 0.75);
                      box-shadow: 0 0 0 4px hsl(var(--primary) / 0.14);
                    }

                    .PhoneInputCountry {
                      position: relative;
                      display: flex;
                      align-items: center;
                      align-self: stretch;
                      gap: 0.5rem;
                      padding: 0 0.85rem 0 0.9rem;
                      border-right: 1px solid hsl(var(--border) / 0.9);
                      background: linear-gradient(180deg, hsl(290 22% 16% / 0.72) 0%, hsl(270 20% 10% / 0.86) 100%);
                    }

                    .PhoneInputCountrySelect {
                      appearance: none;
                      -webkit-appearance: none;
                      border: 0;
                      cursor: pointer;
                      height: 100%;
                      min-width: 5.4rem;
                      padding: 0 1.7rem 0 0;
                      font-size: 0.95rem;
                      font-weight: 700;
                      letter-spacing: 0.02em;
                      display: flex;
                      align-items: center;
                      background: transparent;
                      color: hsl(var(--foreground));
                      outline: none;
                      text-shadow: 0 1px 10px hsl(320 75% 60% / 0.12);
                    }

                    .PhoneInputCountrySelect:hover {
                      color: hsl(var(--primary));
                    }

                    .PhoneInputCountrySelect option {
                      background: hsl(270 18% 10%);
                      color: hsl(var(--foreground));
                      font-size: 0.95rem;
                      font-weight: 600;
                    }

                    .PhoneInputCountrySelect option:checked {
                      background: hsl(320 45% 24%);
                      color: hsl(var(--foreground));
                    }

                    .PhoneInputCountrySelect option:disabled {
                      background: hsl(270 14% 13%);
                      color: hsl(var(--muted-foreground));
                    }

                    .PhoneInputCountrySelectArrow {
                      margin-left: 0;
                      color: hsl(var(--primary));
                      opacity: 0.95;
                      transform: scale(1.05);
                    }

                    .PhoneInputNumber {
                      flex: 1;
                      background: none;
                      border: none;
                      outline: none;
                      color: hsl(var(--foreground));
                      font-size: 1rem;
                      padding: 0.5rem 0.9rem;
                      font-weight: 500;
                    }

                    .PhoneInputNumber::placeholder {
                      color: hsl(var(--muted-foreground));
                    }

                    .PhoneInputCountryIcon {
                      box-shadow: 0 0 0 1px hsl(var(--border) / 0.65);
                      border-radius: 999px;
                      overflow: hidden;
                    }

                    .PhoneInputCountryIconImg {
                      display: block;
                    }

                    @media (max-width: 640px) {
                      .PhoneInputCountry {
                        padding-right: 0.7rem;
                        padding-left: 0.75rem;
                      }

                      .PhoneInputCountrySelect {
                        min-width: 4.8rem;
                        font-size: 0.9rem;
                      }
                    }
                  `}</style>
                  <PhoneInput
                    id="contact-phone"
                    international
                    defaultCountry="RS"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    placeholder="Unesite broj telefona"
                    className={`PhoneInput ${phoneError ? "error" : ""}`}
                    numberInputProps={{
                      name: "phone",
                      className: "PhoneInputNumber",
                    }}
                  />
                  {phoneError && <p className="mt-1.5 text-sm font-medium text-red-500">{phoneError}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-description" className="block text-sm font-medium text-foreground/88">
                    Opis gosta (Opciono)
                  </label>
                  <Textarea
                    id="contact-description"
                    name="opis_gosta"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Unesite kratak opis"
                    className="min-h-32 resize-y bg-background/40"
                    maxLength={500}
                  />
                </div>

                {submitError && (
                  <div className="rounded-2xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {submitError}
                  </div>
                )}

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Saljemo zahtev..." : "Posaljite zahtev"}
                </Button>
              </form>

              <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60">
                <iframe
                  title="Lokacija Svecana sala Borovic Bogatic"
                  src={CONTACT_MAPS_EMBED}
                  className="h-full w-full grayscale-[40%] contrast-110"
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
