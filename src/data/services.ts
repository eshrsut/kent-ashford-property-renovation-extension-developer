export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  bullets: string[];
  icon:
    | "home"
    | "building2"
    | "hammer"
    | "paintRoller"
    | "layoutGrid"
    | "wrench"
    | "house";
  imagePrompt: string;
};

export const services: Service[] = [
  {
    slug: "new-build-homes",
    title: "New Build Homes",
    shortDescription:
      "Bespoke new build houses designed and constructed from the ground up, from single self-builds to small residential developments.",
    description: [
      "We manage new build projects from initial design and planning through to the final finish, working with architects and structural engineers to deliver a home built around how you want to live.",
      "Every build is project-managed in-house, so you have one point of contact from groundworks to handover.",
    ],
    bullets: [
      "Self-build and custom new build homes",
      "Small residential developments and plots",
      "Groundworks, foundations and drainage",
      "Timber frame, brick and block construction",
      "Full project management, start to finish",
      "Building regulations and sign-off handled for you",
    ],
    icon: "house",
    imagePrompt:
      "A newly completed modern detached house in the Kent countryside, red brick and render finish, landscaped front garden, clear blue sky, late afternoon light, professional architectural photography",
  },
  {
    slug: "extensions",
    title: "House Extensions",
    shortDescription:
      "Single and double storey extensions, rear and side returns, and wrap-around extensions that add space without the upheaval of moving.",
    description: [
      "An extension is one of the most effective ways to add space and value to your home. We handle design, planning and building control liaison alongside the build itself.",
      "We work closely with you to match brickwork, rooflines and finishes to your existing property wherever possible.",
    ],
    bullets: [
      "Rear, side-return and wrap-around extensions",
      "Single and double storey extensions",
      "Kitchen extensions and open-plan living spaces",
      "Orangeries and garden rooms",
      "Planning permission and party wall support",
      "Matching brick, render and roofing finishes",
    ],
    icon: "building2",
    imagePrompt:
      "A rear single storey house extension with large bi-fold glass doors opening onto a landscaped garden, builders finishing brickwork, daytime natural light, UK residential architecture",
  },
  {
    slug: "roof-loft-conversions",
    title: "Roof & Loft Conversions",
    shortDescription:
      "Hip-to-gable, dormer, mansard and rooflight loft conversions that turn unused roof space into a bedroom, office or bathroom.",
    description: [
      "Loft and roof conversions are one of the most cost-effective ways to add a bedroom or home office without extending your footprint.",
      "We assess structural feasibility, head height and staircase access before recommending the right type of conversion for your roof.",
    ],
    bullets: [
      "Dormer, hip-to-gable and mansard conversions",
      "Velux rooflight conversions",
      "New staircases and structural steelwork",
      "Ensuite and bathroom installations in the loft",
      "Full re-roofing and roof repairs",
      "Insulation and building regulations compliance",
    ],
    icon: "home",
    imagePrompt:
      "A roofer and carpenter working on a dormer loft conversion on a UK terraced house roof, scaffolding visible, clear daytime sky, wide angle construction photography",
  },
  {
    slug: "renovation-refurbishment",
    title: "Renovation & Refurbishment",
    shortDescription:
      "Full and part property renovations, from period home restorations to complete internal strip-outs and refurbishments.",
    description: [
      "Whether you have bought a project that needs modernising or want to refresh a home you have lived in for years, we plan the works in a sequence that keeps disruption to a minimum.",
      "We cover structural alterations, rewiring and replumbing coordination, plastering, and all second-fix trades through to final decoration.",
    ],
    bullets: [
      "Whole house renovations and refurbishments",
      "Period property restoration",
      "Kitchen and bathroom renovations",
      "Internal wall removal and structural alterations",
      "Replastering and damp remediation",
      "Coordination of electrics, plumbing and heating trades",
    ],
    icon: "wrench",
    imagePrompt:
      "Interior of a house mid-renovation, exposed brick wall being replastered, builder working with trowel, natural light through a window, UK home renovation site",
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    shortDescription:
      "Interior and exterior painting, wallpapering and decorating finishes for homes and commercial units across Kent and London.",
    description: [
      "A high-quality paint finish is often what makes a renovation or new build feel complete. Our decorators prepare surfaces properly before applying trade-quality paints and coatings.",
      "We take on everything from a single room refresh to full exterior repaints of rendered or pebble-dashed properties.",
    ],
    bullets: [
      "Interior painting and wallpapering",
      "Exterior masonry and render painting",
      "Woodwork, trim and staircase finishing",
      "Commercial and rental property decorating",
      "Surface preparation and minor plaster repair",
      "Colour consultation on request",
    ],
    icon: "paintRoller",
    imagePrompt:
      "A professional decorator in branded workwear painting an interior wall with a roller, drop sheets on the floor, bright freshly decorated room, UK home interior",
  },
  {
    slug: "flooring",
    title: "Flooring",
    shortDescription:
      "Supply and installation of engineered wood, laminate, tiling and karndean flooring for new builds, extensions and renovated homes.",
    description: [
      "We fit flooring as part of a larger build or as a standalone installation, levelling and preparing subfloors before laying your chosen finish.",
      "We work with a range of suppliers so you can match flooring to your budget and the style of the room.",
    ],
    bullets: [
      "Engineered and solid wood flooring",
      "Laminate and luxury vinyl (Karndean) flooring",
      "Floor and wall tiling",
      "Subfloor levelling and preparation",
      "Underfloor heating compatible installations",
      "Skirting and threshold finishing",
    ],
    icon: "layoutGrid",
    imagePrompt:
      "Close-up of a tradesperson installing engineered wood flooring planks in a bright renovated living room, tools and offcuts nearby, natural daylight",
  },
  {
    slug: "general-building",
    title: "General Building Works",
    shortDescription:
      "Brickwork, groundworks, plastering, carpentry and the day-to-day building work that keeps a home or commercial property in good order.",
    description: [
      "Not every job is a full extension or new build. We also take on smaller building works, repairs and maintenance for homeowners, landlords and commercial clients.",
      "If it fits under the construction umbrella, our in-house trades and trusted subcontractors can usually take care of it.",
    ],
    bullets: [
      "Brickwork, blockwork and repointing",
      "Groundworks, patios and driveways",
      "Plastering and rendering",
      "Carpentry and joinery",
      "Fencing, walls and garden structures",
      "General property maintenance and repairs",
    ],
    icon: "hammer",
    imagePrompt:
      "A builder laying bricks on a garden wall with a trowel and spirit level, mortar and bricks stacked nearby, outdoor UK residential setting, daylight",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
