import { Phone } from "lucide-react";
import { PRIMARY_PHONE_HREF } from "@/lib/contact";

export const MobileCallButton = () => (
  <a
    href={PRIMARY_PHONE_HREF}
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow animate-pulse-glow lg:hidden"
    aria-label="Pozovite nas"
  >
    <Phone className="h-5 w-5 text-primary-foreground" />
  </a>
);
