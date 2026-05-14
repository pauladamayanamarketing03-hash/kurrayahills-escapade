import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import romantic from "@/assets/romantic-dinner.jpg";
import honeymoon from "@/assets/honeymoon-bed.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/romantic-experience")({
  head: () => ({
    meta: [
      { title: "Romantic Experience · Honeymoon & Dinner · Kurraya Hills" },
      { name: "description", content: "Honeymoon Setup Rp 250K/Nett, romantic dinners from Rp 350K. Petals, swans, candlelight — at Kurraya Hills Singkawang." },
      { property: "og:title", content: "Romantic Experience · Kurraya Hills" },
      { property: "og:description", content: "Romance, honeymoon and candlelit dining on the hill." },
    ],
    links: [{ rel: "canonical", href: "/romantic-experience" }],
  }),
  component: RomanticPage,
});

const dinnerTiers = [
  { price: "Rp 350K", title: "Hilltop Classic", desc: "3-course set, signature mocktail, candlelit table." },
  { price: "Rp 450K", title: "Garden Soirée", desc: "4-course tasting, rose-petal table & bouquet." },
  { price: "Rp 550K", title: "Pinyon Reserve", desc: "5-course chef's menu, sparkling wine & live serenade." },
];

function RomanticPage() {
  return (
    <>
      <PageHero
        image={romantic}
        eyebrow="Just for two"
        title="A romance written in candlelight."
        subtitle="From honeymoon set-ups to terrace tasting menus — every detail is dressed for the people who matter most."
      />

      {/* HONEYMOON SETUP */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-14 items-center">
          <img src={honeymoon} alt="Honeymoon setup with rose petals and swan towels" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
          <div>
            <div className="eyebrow">Signature Setup</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">Honeymoon Setup<br /><span className="italic text-gold-gradient">Rp 250K / Nett</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Inclusive room set-up for anniversaries, honeymoons and weddings —
              petal art, swan towels, slice cake and an exclusive room price.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Inclusive room set up (anniversary / honeymoon / wedding)",
                "Slice cake on arrival",
                "Exclusive room price",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-foreground/85"><span className="text-gold">✦</span>{i}</li>
              ))}
            </ul>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-8 inline-flex">Plan our setup</a>
          </div>
        </div>
      </section>

      {/* ROMANTIC DINNER */}
      <section className="py-24 px-6 lg:px-10 bg-cream">
        <SectionHeading
          eyebrow="Romantic Dinner · Restaurant"
          title="Three ways to share a table."
          subtitle="Choose the tier that suits the night — every dinner is set under festoon lights with a view of the hills."
        />
        <div className="mx-auto max-w-[1200px] mt-14 grid md:grid-cols-3 gap-6">
          {dinnerTiers.map((t, i) => (
            <div
              key={t.price}
              className={`rounded-2xl p-8 border ${
                i === 1
                  ? "bg-primary text-primary-foreground border-gold shadow-luxe scale-[1.03]"
                  : "bg-background border-border shadow-soft"
              }`}
            >
              <div className={`eyebrow ${i === 1 ? "text-gold" : ""}`}>Tier 0{i + 1}</div>
              <div className="font-display text-5xl mt-3">{t.price}</div>
              <h3 className="mt-2 font-display text-2xl italic">{t.title}</h3>
              <p className={`mt-4 ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={i === 1 ? "btn-gold mt-8 inline-flex" : "btn-outline-gold mt-8 inline-flex"}
              >
                Reserve
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/restaurant-pool#menu" className="text-sm uppercase tracking-[0.22em] text-gold hover:underline">
            View Restaurant Menu →
          </a>
        </div>
      </section>
    </>
  );
}
