import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Mountain, Heart, Utensils, Waves } from "lucide-react";
import heroSign from "@/assets/hero-sign.jpg";
import aerial from "@/assets/aerial-resort.jpg";
import pool from "@/assets/pool.jpg";
import roomTwin from "@/assets/room-deluxe-twin.jpg";
import roomSingle from "@/assets/room-deluxe-single.jpg";
import romantic from "@/assets/romantic-dinner.jpg";
import wedding from "@/assets/wedding-aisle.jpg";
import garden from "@/assets/garden-dining.jpg";
import restaurant from "@/assets/restaurant-interior.jpg";
import honeymoon from "@/assets/honeymoon-bed.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kurraya Hills · Bright Hilltop Luxury in Singkawang" },
      { name: "description", content: "An ultra-premium 2026 hilltop resort above Singkawang. Rooms with mountain views, romantic dining, dream weddings, restaurant & pool." },
      { property: "og:title", content: "Kurraya Hills · Singkawang" },
      { property: "og:description", content: "Bright luxury reimagined on the hills of Singkawang." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Mountain View Rooms",
  "Romantic Dinner",
  "Dream Weddings",
  "Garden Pool",
  "Hilltop Sunsets",
  "Honeymoon Setup",
  "Meeting & Events",
  "Pinyon Garden",
];

function HomePage() {
  return (
    <>
      {/* HERO — non-stop motion */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSign})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

        {/* Floating ornaments */}
        <div className="absolute top-1/3 left-10 hidden lg:block animate-float-slow">
          <div className="h-24 w-24 rounded-full border border-gold/40 backdrop-blur-sm" />
        </div>
        <div className="absolute bottom-1/4 right-16 hidden lg:block animate-float-slow [animation-delay:-3s]">
          <Sparkles className="text-gold" size={28} />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 grid place-items-center text-center px-6">
            <div className="max-w-4xl animate-fade-up">
              <div className="eyebrow text-gold">Singkawang · Est. 2026</div>
              <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.95]">
                Above the city,<br />
                <span className="italic text-gold-gradient">closer to the sky.</span>
              </h1>
              <p className="mt-8 max-w-xl mx-auto text-foreground/80 text-base md:text-lg">
                A bright hilltop sanctuary where mountain air, garden ceremonies and
                hand-crafted dining unfold under a wide West Kalimantan sky.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold">
                  Book Your Stay <ArrowRight size={14} />
                </a>
                <Link to="/rooms" className="btn-outline-gold">
                  Explore Rooms
                </Link>
              </div>
            </div>
          </div>

          {/* Non-stop marquee */}
          <div className="border-y border-gold/20 bg-background/40 backdrop-blur-md py-5 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((t, i) => (
                <span
                  key={i}
                  className="mx-8 font-display italic text-2xl md:text-3xl text-foreground/80 flex items-center gap-8"
                >
                  {t}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-gold-soft to-transparent opacity-40" />
            <img src={aerial} alt="Aerial view of Kurraya Hills" className="rounded-2xl w-full shadow-luxe" width={1600} height={1024} loading="lazy" />
            <div className="absolute -bottom-8 -right-8 hidden md:flex h-40 w-40 rounded-full bg-background border border-gold/40 shadow-luxe items-center justify-center animate-spin-slow">
              <span className="font-script text-2xl text-emerald">Kurraya · Est. 2026 ·</span>
            </div>
          </div>
          <div>
            <div className="eyebrow">A 2026 hilltop reverie</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Bright luxury, <span className="italic text-gold-gradient">redefined</span> for the Bornean highlands.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Kurraya Hills is a hilltop estate above Singkawang where pavilions of
              cream stone meet emerald gardens and mountain panoramas. Every room,
              every plate, every ceremony is composed to feel both intimately warm and
              utterly cinematic.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "12+", l: "Mountain Suites" },
                { n: "3", l: "Pools & Cascades" },
                { n: "360°", l: "Panoramic View" },
              ].map((s) => (
                <div key={s.l} className="text-center md:text-left">
                  <div className="font-display text-4xl text-emerald">{s.n}</div>
                  <div className="eyebrow mt-1 text-[0.62rem]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="py-24 px-6 lg:px-10 bg-cream">
        <SectionHeading
          eyebrow="The Experiences"
          title="Six worlds, one hilltop."
          subtitle="From the spa-like quiet of a mountain-view suite to the bloom of a candlelit garden, every Kurraya moment is a chapter you choose."
        />
        <div className="mx-auto max-w-[1400px] mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: roomTwin, title: "Mountain Suites", to: "/rooms", icon: Mountain, copy: "Deluxe Twin & Single, all with hill panoramas." },
            { img: romantic, title: "Romantic Dinner", to: "/romantic-experience", icon: Heart, copy: "Candlelit terrace dinners from 350K." },
            { img: wedding, title: "Dream Weddings", to: "/wedding-meeting", icon: Sparkles, copy: "Garden ceremonies under festoon lights." },
            { img: restaurant, title: "Restaurant", to: "/restaurant-pool", icon: Utensils, copy: "Bright dining rooms, hilltop sunsets." },
            { img: pool, title: "Garden Pool", to: "/restaurant-pool", icon: Waves, copy: "Family pool from 20K weekday." },
            { img: honeymoon, title: "Honeymoon Setup", to: "/romantic-experience", icon: Heart, copy: "Inclusive room setup from 250K/Nett." },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] block shadow-soft hover:shadow-luxe transition-all duration-500"
            >
              <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                <c.icon size={24} className="text-gold mb-3" />
                <h3 className="font-display text-3xl">{c.title}</h3>
                <p className="text-sm text-primary-foreground/80 mt-1">{c.copy}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                  Discover <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HONEYMOON HIGHLIGHT */}
      <section className="py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow">Signature Setup</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Honeymoon Setup <span className="italic text-gold-gradient">Rp 250K/Nett</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">
              An inclusive room set-up for anniversaries, honeymoons and weddings.
              Petals, swans, slice cake and an exclusive room price await your arrival.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/80">
              {["Inclusive room set up (anniversary / honeymoon / wedding)", "Slice cake on arrival", "Exclusive room price"].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-gold mt-1">✦</span>{i}</li>
              ))}
            </ul>
            <Link to="/romantic-experience" className="btn-gold mt-8 inline-flex">See romantic experiences</Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img src={honeymoon} alt="Honeymoon setup" className="rounded-2xl w-full shadow-luxe" loading="lazy" />
          </div>
        </div>
      </section>

      {/* GARDEN STRIP */}
      <section
        className="relative h-[60vh] min-h-[400px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${garden})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 h-full grid place-items-center text-center px-6">
          <div className="max-w-3xl text-primary-foreground animate-fade-up">
            <div className="eyebrow text-gold">An invitation</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Come stay where the hills <span className="italic text-gold-gradient">remember your name.</span>
            </h2>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-8 inline-flex">
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM-STYLE FEED */}
      <section className="py-24 px-6 lg:px-10">
        <SectionHeading eyebrow="@kurrayahills" title="Follow our hilltop diary" />
        <div className="mx-auto max-w-[1400px] mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[heroSign, aerial, pool, romantic, wedding, garden, roomSingle, restaurant, honeymoon, roomTwin, garden, pool].map((src, i) => (
            <a
              key={i}
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="aspect-square overflow-hidden rounded-lg group relative"
            >
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
