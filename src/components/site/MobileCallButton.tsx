import { Phone } from "lucide-react";

export const MobileCallButton = () => (
  <a
    href="tel:+381641234567"
    className="lg:hidden fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center animate-pulse-glow"
    aria-label="Pozovite nas"
  >
    <Phone className="h-5 w-5 text-primary-foreground" />
  </a>
);
