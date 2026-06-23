type Props = { eyebrow: string; title: React.ReactNode; subtitle?: string };
export const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="relative pt-44 pb-20 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
      style={{ background: "radial-gradient(circle, hsl(290 80% 55% / 0.5), transparent 70%)" }} />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
      <div className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-4 animate-fade-in">{eyebrow}</div>
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">{title}</h1>
      {subtitle && <p className="mt-6 max-w-2xl mx-auto text-foreground/75 text-lg font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>{subtitle}</p>}
    </div>
  </section>
);
