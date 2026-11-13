export const site = {
  // Live at moribuildcon.co.uk (Cloudflare Workers). The old
  // moribuilders.co.uk domain 301-redirects here (see worker/index.ts).
  url: "https://moribuildcon.co.uk",
  name: "Mori Build Con",
  shortName: "Mori Build Con",
  tagline:
    "Multi-Trade Construction, Renovation & Property Maintenance Across Kent & London",
  headline: "Building Better Spaces. Delivering Quality Work.",
  description:
    "Construction, renovation and property maintenance services across Kent and Greater London. From small repairs and property improvements to major extensions, conversions and complete refurbishments, Mori Build Con brings together skilled tradespeople to deliver your project.",
  phone: "07810 458712",
  phoneHref: "tel:+447810458712",
  // wa.me requires the full international number with no leading 0, +, or spaces.
  whatsappNumber: "447810458712",
  email: "anirudhsinh.mori@gmail.com",
  address: {
    line1: "41 Hillview",
    line2: "Ashford",
    county: "Kent",
    postcode: "TN24 8YE",
  },
  hours: "Mon–Fri 8:00–18:00, Sat 9:00–13:00",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    tiktok: "#",
    x: "#",
    linkedin: "#",
  },
  // Sign up free at tawk.to, then paste your Property ID and Widget ID
  // here (Admin > Channels > Chat Widget > your widget's embed code has
  // both, as the two path segments in the embed.tawk.to script URL).
  // Leave either blank to keep the live-chat widget off.
  tawkTo: {
    propertyId: "",
    widgetId: "",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/projects", label: "Projects" },
  { href: "/for-contractors", label: "For Contractors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
