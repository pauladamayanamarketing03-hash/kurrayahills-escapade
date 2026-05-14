import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Mountain, Bath, Coffee, Wifi, Wind } from "lucide-react";
import roomTwin from "@/assets/room-deluxe-twin.jpg";
import roomSingle from "@/assets/room-deluxe-single.jpg";
import bathroom from "@/assets/bathroom.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms · Deluxe Mountain View · Kurraya Hills" },
      { name: "description", content: "Deluxe Twin and Deluxe Single mountain-view rooms at Kurraya Hills Singkawang. Weekday from 600K, weekend 840K, high season 1.200K." },
      { property: "og:title", content: "Rooms · Kurraya Hills" },
      { property: "og:description", content: "Mountain-view Deluxe rooms in Singkawang." },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    name: "Deluxe Twin Bed",
    sub: "Mountain View",
    img: roomTwin,
    desc: "Two plush single beds, panoramic mountain windows and a serene wood-toned interior. Perfect for friends, siblings or business companions.",
    size: "32 m²",
    bed: "2 Single Beds",
  },
  {
    name: "Deluxe Single Bed",
    sub: "Mountain View",
    img: roomSingle,
    desc: "An expansive king bed framed by sheer curtains and warm sconce light. A romantic canvas for couples and honeymooners.",
    size: "32 m²",
    bed: "1 King Bed",
  },
];

const amenities = [
  { Icon: Mountain, t: "Mountain view" },
  { Icon: Bath, t: "Private bathroom" },
  { Icon: Coffee, t: "Coffee & tea set" },
  { Icon: Wifi, t: "Hi-speed Wi-Fi" },
  { Icon: Wind, t: "Air-conditioned" },
];

function RoomsPage() {
  return (
    <>
      <PageHero
        image={roomSingle}
        eyebrow="Stay With Us"
        title="Rooms with a hilltop horizon."
        subtitle="Two signature mountain-view rooms, dressed in cream linen and warm wood — built for rest, for love, for the long view."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] space-y-24">
          {rooms.map((r, idx) => (
            <article
              key={r.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                idx % 2 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img src={r.img} alt={r.name} className="rounded-2xl shadow-luxe w-full" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-gold/40 rounded-2xl px-6 py-4 shadow-luxe">
                  <div className="eyebrow text-[0.62rem]">From</div>
                  <div className="font-display text-3xl text-emerald">Rp 600K</div>
                  <div className="text-xs text-muted-foreground">/ night · weekday</div>
                </div>
              </div>
              <div>
                <div className="eyebrow">{r.sub}</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">{r.name}</h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{r.desc}</p>
                <div className="mt-6 flex gap-6 text-sm">
                  <div><span className="eyebrow text-[0.62rem]">Size</span><div className="mt-1">{r.size}</div></div>
                  <div><span className="eyebrow text-[0.62rem]">Bed</span><div className="mt-1">{r.bed}</div></div>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { l: "Weekday", v: "Rp 600K" },
                    { l: "Weekend", v: "Rp 840K" },
                    { l: "High Season", v: "Rp 1.200K" },
                  ].map((p) => (
                    <div key={p.l} className="rounded-xl border border-border bg-cream px-4 py-3">
                      <div className="eyebrow text-[0.6rem]">{p.l}</div>
                      <div className="font-display text-2xl text-emerald mt-1">{p.v}</div>
                    </div>
                  ))}
                </div>

                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-8 inline-flex">
                  Reserve this room
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bathroom */}
      <section className="py-24 px-6 lg:px-10 bg-cream">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 items-center">
          <img src={bathroom} alt="Private bathroom" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
          <div>
            <div className="eyebrow">In Every Room</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A bathroom you'll <span className="italic text-gold-gradient">linger in.</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Sit-down toilet, soft cream tile, fresh ferns and warm light — a quiet
              ritual at the start and end of every day at Kurraya Hills.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {amenities.map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-foreground/80">
                  <span className="h-10 w-10 rounded-full bg-background border border-gold/40 grid place-items-center text-gold">
                    <Icon size={16} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
