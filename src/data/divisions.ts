export type Division = {
  slug: string;
  title: string;
  description: string;
  /** Key into curatedPhotos.ts for this division's sample photos. */
  photoTopic: string;
};

export const divisions: Division[] = [
  {
    slug: "roofing-exterior",
    title: "Roofing & Exterior Works",
    description:
      "Everything that protects and shapes the outside of a property, from the roof down to the driveway.",
    photoTopic: "roofing-exterior",
  },
  {
    slug: "building-structural",
    title: "Building & Structural Works",
    description:
      "New builds, extensions and the groundwork, brickwork and structural trades that make them possible.",
    photoTopic: "building-structural",
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchen & Bathroom Renovations",
    description:
      "Full kitchen and bathroom fit-outs, from first-fix plumbing and electrics to the final finish.",
    photoTopic: "kitchens-bathrooms",
  },
  {
    slug: "interior-finishing",
    title: "Interior Finishing & Renovation",
    description:
      "The trades that finish a room properly — decorating, carpentry, flooring, tiling and plastering.",
    photoTopic: "interior-finishing",
  },
  {
    slug: "plumbing-electrical-heating",
    title: "Plumbing, Electrical & Heating",
    description:
      "Plumbing, electrical and heating work carried out only by suitably qualified and registered tradespeople.",
    photoTopic: "plumbing-electrical-heating",
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance & Repairs",
    description:
      "General handyman work and day-to-day property maintenance for homeowners, landlords and agents.",
    photoTopic: "property-maintenance",
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}
