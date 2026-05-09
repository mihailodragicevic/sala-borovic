import d1 from "@/assets/Ulaz u salu.webp";
import d2 from "@/assets/Natpis dobrodošlice.webp";
import d3 from "@/assets/Predjelo.webp";
import d4 from "@/assets/Mladenački sto (bela dekoracija).webp";
import d5 from "@/assets/Zelena dekoracija mladenačkog stola.webp";

export const AboutDetails = () => (
  <section className="relative py-32 lg:py-44 overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="reveal-up max-w-3xl mb-16 lg:mb-24">
        <div className="text-xs tracking-[0.4em] uppercase text-primary/90 mb-5">— Detalji —</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Detalji koji prave <span className="text-gradient italic">razliku.</span>
        </h2>
        <p className="mt-6 text-foreground/70 text-lg font-light leading-relaxed max-w-xl">
          Lustera koji se odražava u kristalnim čašama. Bele tkanine sa zlatnim akcentima. Topline koja izvire iz svake niše.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        <div className="col-span-12 md:col-span-7 reveal-up">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant group">
            <img src={d1} alt="Detalj enterijera" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 reveal-up">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant group">
            <img src={d2} alt="Detalj svetla" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 reveal-up">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant group">
            <img src={d3} alt="Detalj dekoracije" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 reveal-up">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant group">
            <img src={d4} alt="Detalj stola" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 reveal-up">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant group">
            <img src={d5} alt="Detalj ambijenta" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
