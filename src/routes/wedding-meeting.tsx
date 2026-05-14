import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import wedding from "@/assets/wedding-aisle.jpg";
import hall from "@/assets/wedding-hall.jpg";
import meeting from "@/assets/meeting-room.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/wedding-meeting")({
  head: () => ({
    meta: [
      { title: "Wedding & Meeting · Kurraya Hills Singkawang" },
      { name: "description", content: "Dream wedding packages and meeting packages from Rp 120K/pax at Kurraya Hills Singkawang. Garden ceremonies, ballroom and meeting rooms." },
      { property: "og:title", content: "Wedding & Meeting · Kurraya Hills" },
      { property: "og:description", content: "Garden weddings and full-day meeting packages." },
    ],
    links: [{ rel: "canonical", href: "/wedding-meeting" }],
  }),
  component: WeddingMeetingPage,
});

const meetingTiers = [
  {
    price: "Rp 120K / Pax",
    name: "Half-Day Meeting",
    items: ["Coffee break 1×", "Lunch 1×", "Meeting Room"],
  },
  {
    price: "Rp 150K / Pak",
    name: "Full-Day Meeting",
    items: ["Coffee break 2×", "Lunch 1×", "Meeting Room"],
  },
];

function WeddingMeetingPage() {
  return (
    <>
      <PageHero
        image={wedding}
        eyebrow="Wedding & Meeting"
        title="Where vows and ventures take their place."
        subtitle="From garden ceremonies under festoon lights to full-day boardrooms above the city — Kurraya Hills was made to hold the moments that matter."
      />

      {/* DREAM WEDDING */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-14 items-center">
          <img src={hall} alt="Wedding ballroom" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
          <div>
            <div className="eyebrow">Dream Wedding Package</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl leading-tight">
              Your day, <span className="italic text-gold-gradient">held by the hills.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              From intimate garden ceremonies of forty to grand ballroom evenings of
              four hundred — our team composes every wedding as a singular, bespoke
              chapter. Floral arches, festoon-lit aisles, sunset photography and a
              ballroom dressed in chandeliers.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-foreground/85">
              {[
                "Garden ceremony pavilion",
                "Cream-and-gold ballroom",
                "Floral & lighting design",
                "Bridal suite & honeymoon set-up",
                "Tasting menu by our chef",
                "Dedicated wedding planner",
              ].map((i) => (
                <li key={i} className="flex gap-2"><span className="text-gold">✦</span>{i}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-gold/40 bg-cream p-6">
              <div className="eyebrow">Investment</div>
              <div className="font-display text-3xl mt-2">Contact now for price</div>
              <p className="text-sm text-muted-foreground mt-2">
                Each wedding is composed bespoke — share your vision and we'll send a tailored proposal within 24 hours.
              </p>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-5 inline-flex">
                Request Wedding Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MEETING PACKAGES */}
      <section className="py-24 px-6 lg:px-10 bg-cream">
        <SectionHeading
          eyebrow="Meeting Package"
          title="Boardrooms with a horizon."
          subtitle="Bright, naturally-lit meeting rooms with full A/V — paired with hilltop coffee breaks and chef-prepared lunches."
        />
        <div className="mx-auto max-w-[1200px] mt-14 grid lg:grid-cols-2 gap-8">
          {meetingTiers.map((m, i) => (
            <div
              key={m.name}
              className={`rounded-2xl p-10 border ${
                i === 1
                  ? "bg-primary text-primary-foreground border-gold shadow-luxe"
                  : "bg-background border-border shadow-soft"
              }`}
            >
              <div className={`eyebrow ${i === 1 ? "text-gold" : ""}`}>{m.name}</div>
              <div className="font-display text-5xl mt-3">{m.price}</div>
              <ul className="mt-6 space-y-3">
                {m.items.map((it) => (
                  <li key={it} className="flex gap-3"><span className="text-gold">✦</span>{it}</li>
                ))}
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={i === 1 ? "btn-gold mt-8 inline-flex" : "btn-outline-gold mt-8 inline-flex"}
              >
                Book this package
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] mt-16">
          <img src={meeting} alt="Meeting room" className="rounded-2xl shadow-luxe w-full" loading="lazy" />
        </div>
      </section>
    </>
  );
}
