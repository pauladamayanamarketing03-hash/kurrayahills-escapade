import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import restaurant from "@/assets/restaurant-interior.jpg";
import pool from "@/assets/pool.jpg";
import garden from "@/assets/garden-dining.jpg";
import m1 from "@/assets/menu-1.jpg";
import m2 from "@/assets/menu-2.jpg";
import m3 from "@/assets/menu-3.jpg";
import m4 from "@/assets/menu-4.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/restaurant-pool")({
  head: () => ({
    meta: [
      { title: "Restaurant & Pool · Kurraya Hills" },
      { name: "description", content: "Hilltop dining and a cascading garden pool. Pool weekday Rp 20K, weekend Rp 30K. Full menu of signature dishes." },
      { property: "og:title", content: "Restaurant & Pool · Kurraya Hills" },
      { property: "og:description", content: "Hilltop restaurant and family pool in Singkawang." },
    ],
    links: [{ rel: "canonical", href: "/restaurant-pool" }],
  }),
  component: RestaurantPoolPage,
});

const menu = [
  { img: m1, name: "Nasi Kurraya", cat: "Signature", desc: "Smoked beef, sambal hijau, jasmine rice & fried garlic.", price: "Rp 95K" },
  { img: m2, name: "Grilled Hilltop Prawns", cat: "From the Sea", desc: "Charcoal-grilled tiger prawns, lemon butter, herb salt.", price: "Rp 165K" },
  { img: m3, name: "Cocoa Mont Blanc", cat: "Dessert", desc: "Dark chocolate dome, gold leaf, wild berries, raspberry coulis.", price: "Rp 75K" },
  { img: m4, name: "Singkawang Sunset", cat: "Mocktail", desc: "Pineapple, mango, lemongrass, bitters, crushed ice.", price: "Rp 55K" },
  { img: garden, name: "Garden Tasting Board", cat: "To Share", desc: "Charcuterie, local cheeses, pickles, sourdough.", price: "Rp 185K" },
  { img: m1, name: "Sayur Asem Hilltop", cat: "Soup", desc: "Tamarind broth, garden vegetables, fried shallots.", price: "Rp 65K" },
];

function RestaurantPoolPage() {
  return (
    <>
      <PageHero
        image={restaurant}
        eyebrow="Restaurant & Pool"
        title="Bright dining. Cool blue hours."
        subtitle="A cream-walled dining room above the gardens, and a cascading family pool below — the two daily rituals of Kurraya Hills."
      />

      {/* RESTAURANT */}
      <section className="py-24 px-6 lg:px-10" id="menu">
        <SectionHeading
          eyebrow="The Restaurant"
          title="A menu of small ceremonies."
          subtitle="Modern Bornean and Indonesian fine-dining, plated for the long view."
        />
        <div className="mx-auto max-w-[1400px] mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((d) => (
            <article key={d.name} className="bg-background rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-luxe transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="eyebrow text-[0.62rem]">{d.cat}</div>
                <div className="flex items-baseline justify-between gap-3 mt-2">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span className="font-display text-xl text-emerald shrink-0">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold inline-flex">Reserve a table</a>
        </div>
      </section>

      {/* POOL */}
      <section className="py-24 px-6 lg:px-10 bg-cream">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-14 items-center">
          <img src={pool} alt="Garden pool with slides" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
          <div>
            <div className="eyebrow">The Garden Pool</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">A cascade for <span className="italic text-gold-gradient">every age.</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Kurraya Hills' family pool wraps around tropical gardens, with a
              children's slide cluster, sun loungers under umbrellas and a quiet
              adult basin overlooking the valley.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                { l: "Weekday", v: "Rp 20K" },
                { l: "Weekend", v: "Rp 30K" },
              ].map((p) => (
                <div key={p.l} className="rounded-xl bg-background border border-border p-5">
                  <div className="eyebrow text-[0.62rem]">{p.l}</div>
                  <div className="font-display text-3xl text-emerald mt-1">{p.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">/ person</div>
                </div>
              ))}
            </div>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-outline-gold mt-8 inline-flex">Visit the pool</a>
          </div>
        </div>
      </section>
    </>
  );
}
