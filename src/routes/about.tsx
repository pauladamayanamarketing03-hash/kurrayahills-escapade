import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import aerial from "@/assets/aerial-resort.jpg";
import garden from "@/assets/garden-dining.jpg";
import sign from "@/assets/hero-sign.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Kurraya Hills Singkawang" },
      { name: "description", content: "The story behind Kurraya Hills — a 2026 hilltop sanctuary above Singkawang built on bright luxury, garden craft and Bornean hospitality." },
      { property: "og:title", content: "About · Kurraya Hills" },
      { property: "og:description", content: "A hilltop sanctuary above Singkawang." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={sign}
        eyebrow="Our Story"
        title="A hilltop, a horizon, a home."
        subtitle="Kurraya Hills was born in 2026 to give Singkawang its own bright-luxury address — open to the sky, rooted in the soil."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-14 items-center">
          <img src={aerial} alt="" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
          <div>
            <div className="eyebrow">The Vision</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Bright. Bornean. <span className="italic text-gold-gradient">Boundless.</span></h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We took a quiet hill above Singkawang and dreamt of a place that felt
              equally at home hosting a sunrise breakfast for two and a 200-guest
              wedding under the stars. Cream stone pavilions. Emerald lawns. A
              cascading family pool. And service shaped by the warmth of West
              Kalimantan.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              In 2026, that dream opened its doors. Welcome to Kurraya Hills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-cream">
        <SectionHeading eyebrow="What guides us" title="Three quiet promises." />
        <div className="mx-auto max-w-[1200px] mt-14 grid md:grid-cols-3 gap-8">
          {[
            { t: "Bright by design", d: "Cream walls, soft gold light, garden green — every surface chosen to feel open and alive." },
            { t: "Quietly attentive", d: "Service that anticipates without intruding. The petals on your bed, the cake on your table, the candle by the pool." },
            { t: "Rooted in Singkawang", d: "Local craft, local flavour, local stories — woven into a hospitality that feels both global and grounded." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-background p-8 shadow-soft border border-border">
              <div className="text-gold text-3xl">✦</div>
              <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow">The Setting</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A garden held by hills.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              The estate sits at the city's high edge — close enough to reach in
              fifteen minutes, far enough to feel another world. Wake to fern light,
              wander to a cascading pool, end the day on a terrace washed in gold.
            </p>
          </div>
          <img src={garden} alt="" className="order-1 lg:order-2 rounded-2xl shadow-luxe w-full" loading="lazy" />
        </div>
      </section>
    </>
  );
}
