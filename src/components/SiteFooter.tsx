import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" width={48} height={48} />
            <div>
              <div className="font-display text-2xl">{site.name}</div>
              <div className="eyebrow text-[0.6rem] mt-1 text-gold-soft">Hilltop Sanctuary · Singkawang</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            A 2026 reimagining of mountain hospitality — where bright pavilions, garden
            ceremonies, and panoramic vistas converge above the city of Singkawang.
          </p>
          <div className="flex gap-3 mt-8">
            {[
              { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
              { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
              { Icon: MapPin, href: site.social.maps, label: "Maps" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-soft mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /><span>{site.address}</span></li>
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5 shrink-0" /><a href={`tel:${site.phone}`}>{site.phone}</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5 shrink-0" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="tracking-widest uppercase">Crafted for 2026 · Bright Luxury Edition</span>
        </div>
      </div>
    </footer>
  );
}
