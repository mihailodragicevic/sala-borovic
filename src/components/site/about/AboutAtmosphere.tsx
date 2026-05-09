import img1 from "@/assets/IMG-461bbb1b7436d27ddff6b6e28fdee244-V.jpg";
import img2 from "@/assets/IMG-a2a9ecad222a1bfe0c3fd5aebdf19027-V.jpg";
import img3 from "@/assets/IMG-5280ba7bdb44931fb0ef620aee002067-V.jpg";

const blocks = [
  { img: img1, title: "Elegantan ambijent", text: "Prostor koji odiše rafinmanom - visoki plafoni, raskošno svetlo i pažljivo komponovani detalji." },
  { img: img2, title: "Proslave za pamćenje", text: "Atmosfera u kojoj se vreme zaustavlja, a uspomene rastu sa svakim trenutkom." },
  { img: img3, title: "Utisak koji ostaje", text: "Topao doček, profesionalna posluga i osećaj kao da ste jedini gosti te večeri." },
];

export const AboutAtmosphere = () => (
  <section className="relative py-32 lg:py-44 overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="reveal-up max-w-3xl mb-20 lg:mb-28">
        <div className="text-xs tracking-[0.4em] uppercase text-primary/90 mb-5">- Doživljaj -</div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Atmosfera koja se <span className="text-gradient italic">oseti </span> pre nego što se izgovori.
        </h2>
      </div>

      <div className="space-y-24 lg:space-y-36">
        {blocks.map((b, i) => (
          <div key={b.title} className={`reveal-up grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-7 group">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant aspect-[4/3]">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:px-4">
              <div className="font-serif italic text-primary/70 text-2xl mb-4">0{i + 1}</div>
              <h3 className="font-serif text-3xl lg:text-5xl leading-[1.1] mb-6">{b.title}</h3>
              <p className="text-foreground/70 text-lg font-light leading-[1.85]">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
