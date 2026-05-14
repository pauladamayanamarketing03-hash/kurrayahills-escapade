import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import garden from "@/assets/garden-dining.jpg";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Kurraya Hills Singkawang" },
      { name: "description", content: "Reservations, weddings and events at Kurraya Hills Singkawang. WhatsApp, phone, email and map." },
      { property: "og:title", content: "Contact · Kurraya Hills" },
      { property: "og:description", content: "Get in touch with Kurraya Hills Singkawang." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={garden}
        eyebrow="Get in touch"
        title="We'd love to hear from you."
        subtitle="Reservations, private events, weddings or simply a question — our team is here, every day."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="eyebrow">Send a message</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tell us your plans.</h2>
            <form
              className="mt-10 grid sm:grid-cols-2 gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const text = `Halo Kurraya Hills,\n\nNama: ${data.get("name")}\nEmail: ${data.get("email")}\nKeperluan: ${data.get("subject")}\n\n${data.get("message")}`;
                window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
              }}
            >
              <input required name="name" placeholder="Full name" className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold" />
              <input required name="email" type="email" placeholder="Email" className="bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold" />
              <input required name="subject" placeholder="Subject (Room, Wedding, Meeting…)" className="sm:col-span-2 bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold" />
              <textarea required name="message" rows={6} placeholder="Your message" className="sm:col-span-2 bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold" />
              <button type="submit" className="btn-gold sm:col-span-2 justify-self-start">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-cream p-7 border border-border">
              <div className="eyebrow">Visit</div>
              <h3 className="font-display text-2xl mt-2">Kurraya Hills Estate</h3>
              <p className="text-muted-foreground mt-2 flex gap-3"><MapPin size={18} className="text-gold mt-1 shrink-0" />{site.address}</p>
            </div>
            <div className="rounded-2xl bg-cream p-7 border border-border space-y-3">
              <div className="eyebrow">Reach us</div>
              <a href={`tel:${site.phone}`} className="flex gap-3 items-center"><Phone size={18} className="text-gold" />{site.phone}</a>
              <a href={`mailto:${site.email}`} className="flex gap-3 items-center"><Mail size={18} className="text-gold" />{site.email}</a>
            </div>
            <div className="rounded-2xl bg-cream p-7 border border-border">
              <div className="eyebrow">Follow</div>
              <div className="flex gap-3 mt-4">
                {[
                  { Icon: Instagram, href: site.social.instagram },
                  { Icon: Facebook, href: site.social.facebook },
                  { Icon: Youtube, href: site.social.youtube },
                  { Icon: MapPin, href: site.social.maps },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full border border-gold/40 grid place-items-center text-gold hover:bg-gold hover:text-primary transition">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-[1400px] rounded-2xl overflow-hidden border border-border shadow-soft">
          <iframe
            src={site.mapsEmbed}
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kurraya Hills location"
          />
        </div>
      </section>
    </>
  );
}
