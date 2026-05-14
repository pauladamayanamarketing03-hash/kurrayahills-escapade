export const site = {
  name: "Kurraya Hills",
  tagline: "Singkawang's Hilltop Sanctuary",
  city: "Singkawang, Kalimantan Barat",
  phone: "+62 812-0000-0000",
  whatsapp: "https://wa.me/6281200000000",
  email: "reservation@kurrayahills.com",
  address: "Jl. Kurraya Hills, Singkawang, Kalimantan Barat 79100",
  mapsEmbed:
    "https://www.google.com/maps?q=Singkawang,+West+Kalimantan&output=embed",
  social: {
    instagram: "https://instagram.com/kurrayahills",
    facebook: "https://facebook.com/kurrayahills",
    youtube: "https://youtube.com/@kurrayahills",
    maps: "https://maps.google.com/?q=Singkawang",
  },
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/romantic-experience", label: "Romantic" },
  { to: "/wedding-meeting", label: "Wedding & Meeting" },
  { to: "/restaurant-pool", label: "Restaurant & Pool" },
  { to: "/contact", label: "Contact" },
] as const;
