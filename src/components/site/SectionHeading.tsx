type Props = { eyebrow: string; title: React.ReactNode; subtitle?: string; center?: boolean };
export const SectionHeading = ({ eyebrow, title, subtitle, center }: Props) => (
  <div className={`reveal-up max-w-3xl ${center ? "mx-auto text-center" : "mx-auto text-center lg:mx-0 lg:text-left"}`}>
    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-primary/90">{eyebrow}</div>
    <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
    {subtitle && <p className="mt-5 text-lg font-light leading-relaxed text-foreground/70">{subtitle}</p>}
  </div>
);
