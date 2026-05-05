type Props = { eyebrow: string; title: React.ReactNode; subtitle?: string; center?: boolean };
export const SectionHeading = ({ eyebrow, title, subtitle, center }: Props) => (
  <div className={`reveal-up max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <div className={`text-xs tracking-[0.35em] uppercase text-primary/90 mb-4 ${center ? "" : ""}`}>{eyebrow}</div>
    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">{title}</h2>
    {subtitle && <p className="mt-5 text-foreground/70 text-lg font-light leading-relaxed">{subtitle}</p>}
  </div>
);
