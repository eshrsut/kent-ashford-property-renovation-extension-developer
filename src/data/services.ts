export type ServiceIconName =
  | "home"
  | "doorOpen"
  | "sun"
  | "fence"
  | "parkingSquare"
  | "droplets"
  | "flame"
  | "sprout"
  | "housePlus"
  | "building2"
  | "warehouse"
  | "building"
  | "blocks"
  | "shovel"
  | "trash2"
  | "landmark"
  | "pencilRuler"
  | "chefHat"
  | "bath"
  | "paintRoller"
  | "hammer"
  | "layoutGrid"
  | "grid3x3"
  | "layers"
  | "thermometerSnowflake"
  | "rotateCcw"
  | "droplet"
  | "zap"
  | "thermometer"
  | "wrench";

export type Service = {
  slug: string;
  title: string;
  division: string;
  shortDescription: string;
  description: string[];
  bullets: string[];
  icon: ServiceIconName;
  imagePrompt: string;
};

export const services: Service[] = [
  // Roofing & Exterior Works
  {
    slug: "roofing",
    title: "Roofing",
    division: "roofing-exterior",
    shortDescription:
      "Re-roofing, repairs and roof replacement for pitched and flat roofs across Kent and London.",
    description: [
      "From a handful of slipped tiles to a full re-roof, we assess the roof properly before recommending repair or replacement, and we work to current building regulations throughout.",
    ],
    bullets: [
      "Pitched and flat roof repairs",
      "Full re-roofing and tile/slate replacement",
      "Roof leak diagnosis and repair",
      "Felt, EPDM and GRP flat roofing",
      "Guttering and roofline inspection",
    ],
    icon: "home",
    imagePrompt:
      "A roofer working on a UK pitched roof, replacing tiles, scaffolding visible, clear daytime sky",
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    division: "roofing-exterior",
    shortDescription:
      "Supply and fitting of replacement windows and doors, including composite and uPVC options.",
    description: [
      "We measure, supply and fit replacement windows and doors, matching the style of the property and improving insulation and security in the process.",
    ],
    bullets: [
      "uPVC and composite window replacement",
      "Front and rear door installation",
      "Bi-fold and French doors",
      "Draught-proofing and reglazing",
      "Secondary glazing on request",
    ],
    icon: "doorOpen",
    imagePrompt:
      "A tradesperson fitting a new uPVC window into a UK house exterior wall, daylight",
  },
  {
    slug: "conservatories",
    title: "Conservatories",
    division: "roofing-exterior",
    shortDescription:
      "Conservatory, orangery and garden room installation to extend your living space.",
    description: [
      "A conservatory or garden room is often a quicker, lower-disruption way to add space than a full extension. We handle the base, structure and glazing from start to finish.",
    ],
    bullets: [
      "uPVC and aluminium conservatories",
      "Orangeries and garden rooms",
      "Base and groundwork preparation",
      "Roof replacement on existing conservatories",
      "Planning permission guidance",
    ],
    icon: "sun",
    imagePrompt:
      "A modern glass garden room conservatory attached to a UK house, daylight, landscaped garden",
  },
  {
    slug: "fencing",
    title: "Fencing",
    division: "roofing-exterior",
    shortDescription:
      "Garden and boundary fencing, gates and screening for residential and commercial properties.",
    description: [
      "We supply and install fencing to mark boundaries, add privacy or secure a site, using timber, panel or close-board fencing to suit the property.",
    ],
    bullets: [
      "Timber panel and close-board fencing",
      "Gates and access points",
      "Concrete posts and gravel boards",
      "Boundary repairs and replacement",
      "Commercial site hoarding",
    ],
    icon: "fence",
    imagePrompt:
      "A builder installing a timber garden fence panel in a UK back garden, daylight",
  },
  {
    slug: "driveways-paving",
    title: "Driveways & Paving",
    division: "roofing-exterior",
    shortDescription:
      "Block paving, tarmac and resin driveways, plus patios and garden paving.",
    description: [
      "A new driveway or patio is one of the most visible improvements you can make to a property. We prepare the base properly so the finished surface lasts.",
    ],
    bullets: [
      "Block paving and resin driveways",
      "Tarmac driveways and resurfacing",
      "Patios and garden paving",
      "Drainage and soakaway installation",
      "Kerbing and edging",
    ],
    icon: "parkingSquare",
    imagePrompt:
      "A newly block-paved driveway outside a UK house, clean lines, daylight",
  },
  {
    slug: "fascias-soffits-guttering",
    title: "Fascias, Soffits & Guttering",
    division: "roofing-exterior",
    shortDescription:
      "Replacement fascias, soffits and guttering to keep water away from the roofline and walls.",
    description: [
      "Worn fascias, soffits and guttering let water into the roof space and walls. We replace them in low-maintenance uPVC and clear blocked or damaged guttering.",
    ],
    bullets: [
      "uPVC fascia and soffit replacement",
      "Gutter replacement and repair",
      "Gutter clearing and realignment",
      "Downpipe installation",
      "Bargeboard replacement",
    ],
    icon: "droplets",
    imagePrompt:
      "A tradesperson on a ladder replacing guttering on a UK house roofline, daylight",
  },
  {
    slug: "chimney-fireplace",
    title: "Chimney & Fireplace",
    division: "roofing-exterior",
    shortDescription:
      "Chimney repairs, repointing and fireplace installation or removal.",
    description: [
      "We repair and repoint chimney stacks, fit chimney cowls and flashing, and can open up, install or remove fireplaces as part of a wider renovation.",
    ],
    bullets: [
      "Chimney repointing and stack repair",
      "Flashing and lead work",
      "Chimney cowls and pots",
      "Fireplace opening and installation",
      "Chimney removal and capping",
    ],
    icon: "flame",
    imagePrompt:
      "A brick chimney stack being repointed on a UK rooftop, scaffolding, daylight",
  },
  {
    slug: "gardening-landscaping",
    title: "Gardening & Landscaping",
    division: "roofing-exterior",
    shortDescription:
      "Garden clearance, landscaping and groundworks to finish off a project outside.",
    description: [
      "Once the building work is done, we can finish the garden to match — clearance, turfing, planting and basic landscaping to leave the outside as good as the inside.",
    ],
    bullets: [
      "Garden clearance and groundworks",
      "Turfing and planting",
      "Garden walls and raised beds",
      "Decking installation",
      "Post-construction site tidy-up",
    ],
    icon: "sprout",
    imagePrompt:
      "A landscaped UK garden with new turf and planting borders, daylight",
  },

  // Building & Structural Works
  {
    slug: "new-build",
    title: "New Build",
    division: "building-structural",
    shortDescription:
      "Bespoke new build houses, managed from groundworks through to final finish.",
    description: [
      "We manage new build projects from initial design and planning through to the final finish, working with architects and structural engineers to deliver a home built around how you want to live.",
    ],
    bullets: [
      "Self-build and custom new build homes",
      "Small residential developments and plots",
      "Groundworks, foundations and drainage",
      "Full project management, start to finish",
      "Building regulations and sign-off handled for you",
    ],
    icon: "housePlus",
    imagePrompt:
      "A newly completed modern detached house exterior in the UK, daylight, landscaped front garden",
  },
  {
    slug: "extensions",
    title: "Extensions",
    division: "building-structural",
    shortDescription:
      "Single and double storey extensions, rear and side returns, and wrap-around extensions.",
    description: [
      "An extension is one of the most effective ways to add space and value to your home. We handle design, planning and building control liaison alongside the build itself.",
    ],
    bullets: [
      "Rear, side-return and wrap-around extensions",
      "Single and double storey extensions",
      "Kitchen extensions and open-plan living spaces",
      "Planning permission and party wall support",
      "Matching brick, render and roofing finishes",
    ],
    icon: "building2",
    imagePrompt:
      "A rear single storey house extension under construction with brickwork and bifold door frame, UK",
  },
  {
    slug: "loft-conversion",
    title: "Loft Conversion",
    division: "building-structural",
    shortDescription:
      "Hip-to-gable, dormer, mansard and rooflight loft conversions.",
    description: [
      "Loft conversions are one of the most cost-effective ways to add a bedroom or home office without extending your footprint. We assess structural feasibility, head height and staircase access first.",
    ],
    bullets: [
      "Dormer, hip-to-gable and mansard conversions",
      "Velux rooflight conversions",
      "New staircases and structural steelwork",
      "Ensuite installations in the loft",
      "Full re-roofing where needed",
    ],
    icon: "warehouse",
    imagePrompt:
      "A dormer loft conversion being built on a UK terraced house roof, scaffolding, daylight",
  },
  {
    slug: "conversions",
    title: "Conversions",
    division: "building-structural",
    shortDescription:
      "Garage, basement and outbuilding conversions into usable living or working space.",
    description: [
      "Garages, basements and outbuildings are often underused space. We convert them into bedrooms, home offices, gyms or annexes, handling insulation, damp-proofing and services.",
    ],
    bullets: [
      "Garage conversions",
      "Basement and cellar conversions",
      "Outbuilding and annexe conversions",
      "Insulation and damp-proofing",
      "Building regulations compliance",
    ],
    icon: "building",
    imagePrompt:
      "A converted garage turned into a home office in a UK house, finished interior, daylight",
  },
  {
    slug: "bricklaying-repointing",
    title: "Bricklaying & Repointing",
    division: "building-structural",
    shortDescription:
      "Brickwork, blockwork and repointing for new structures, repairs and garden walls.",
    description: [
      "From a new garden wall to repointing an entire elevation, our bricklayers match existing brick and mortar colour wherever possible for a seamless repair.",
    ],
    bullets: [
      "New brick and block walls",
      "Repointing and brick repair",
      "Garden and boundary walls",
      "Damp-proof course installation",
      "Lintel replacement",
    ],
    icon: "blocks",
    imagePrompt:
      "A bricklayer laying bricks with a trowel and spirit level on a UK building site, daylight",
  },
  {
    slug: "groundwork-foundations",
    title: "Groundwork & Foundations",
    division: "building-structural",
    shortDescription:
      "Foundations, drainage and groundworks for new builds, extensions and outbuildings.",
    description: [
      "Every build starts below ground. We dig and pour foundations to the engineer's specification and handle drainage and services before anything above ground begins.",
    ],
    bullets: [
      "Strip and trench-fill foundations",
      "Drainage and soakaways",
      "Site clearance and levelling",
      "Concrete slabs and oversite",
      "Service trenches (water, electric, gas)",
    ],
    icon: "shovel",
    imagePrompt:
      "Groundworks and foundation trenches being dug on a UK construction site, daylight",
  },
  {
    slug: "demolition-clearance",
    title: "Demolition & Clearance",
    division: "building-structural",
    shortDescription:
      "Internal strip-outs, partial demolition and site clearance ahead of a rebuild.",
    description: [
      "Whether it's an internal strip-out before a renovation or partial demolition ahead of an extension, we clear the site safely and dispose of waste responsibly.",
    ],
    bullets: [
      "Internal strip-outs",
      "Partial and full demolition",
      "Site and garden clearance",
      "Asbestos awareness and safe handling",
      "Licensed waste disposal",
    ],
    icon: "trash2",
    imagePrompt:
      "Workers carrying out an internal strip-out demolition inside a UK house renovation, daylight",
  },
  {
    slug: "stonemasonry",
    title: "Stonemasonry",
    division: "building-structural",
    shortDescription:
      "Stone repair, restoration and new stonework for period and modern properties.",
    description: [
      "We repair and restore stonework on period properties and can also supply new stone features, matching existing materials and finishes where repair work is needed.",
    ],
    bullets: [
      "Period stonework repair and restoration",
      "Stone cladding and features",
      "Lintels, sills and copings",
      "Pointing in lime and traditional mortars",
      "Garden walls and steps",
    ],
    icon: "landmark",
    imagePrompt:
      "A stonemason repairing stone detailing on a period UK building facade, daylight",
  },
  {
    slug: "architectural-services",
    title: "Architectural Services",
    division: "building-structural",
    shortDescription:
      "Design and planning support to take a project from concept to building regulations approval.",
    description: [
      "We work with architects and designers to turn your idea into drawings suitable for planning and building regulations, so the project starts on a solid footing.",
    ],
    bullets: [
      "Concept design and feasibility",
      "Planning application drawings",
      "Building regulations drawings",
      "Structural calculations (via our engineers)",
      "Party wall advice",
    ],
    icon: "pencilRuler",
    imagePrompt:
      "Architectural house plans and drawings laid out on a desk with a pencil and ruler",
  },

  // Kitchen & Bathroom Renovations
  {
    slug: "kitchen-fitting",
    title: "Kitchen Fitting",
    division: "kitchens-bathrooms",
    shortDescription:
      "Full kitchen installation, from first-fix plumbing and electrics to units and worktops.",
    description: [
      "We fit kitchens supplied by you or sourced through us, coordinating the plumbing, electrics, plastering and tiling needed around the new units and worktops.",
    ],
    bullets: [
      "Kitchen unit and worktop installation",
      "First-fix plumbing and electrics for kitchens",
      "Kitchen islands and breakfast bars",
      "Splashback tiling",
      "Appliance installation",
    ],
    icon: "chefHat",
    imagePrompt:
      "A tradesperson fitting kitchen cabinets and worktops in a UK home renovation, daylight",
  },
  {
    slug: "bathroom-fitting",
    title: "Bathroom Fitting",
    division: "kitchens-bathrooms",
    shortDescription:
      "Full and part bathroom refits, including wet rooms, ensuites and extra WCs.",
    description: [
      "From a simple suite swap to a full wet room, we handle the plumbing, tiling, electrics and waterproofing needed for a bathroom that lasts.",
      "We also fit additional WCs and downstairs toilets — converting an understairs cupboard, utility room or box room into extra bathroom space, including the drainage and plumbing runs needed to connect back to the existing soil stack.",
    ],
    bullets: [
      "Full bathroom suite installation",
      "Wet rooms and walk-in showers",
      "Ensuite bathroom fitting",
      "Additional WCs and downstairs toilets",
      "Understairs and box room WC conversions",
      "Tiling and waterproofing (tanking)",
      "Underfloor heating in bathrooms",
    ],
    icon: "bath",
    imagePrompt:
      "A newly fitted modern UK bathroom with tiling and walk-in shower, daylight",
  },

  // Interior Finishing & Renovation
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    division: "interior-finishing",
    shortDescription:
      "Interior and exterior painting, wallpapering and decorating finishes.",
    description: [
      "A high-quality paint finish is often what makes a renovation or new build feel complete. Our decorators prepare surfaces properly before applying trade-quality paints and coatings.",
    ],
    bullets: [
      "Interior painting and wallpapering",
      "Exterior masonry and render painting",
      "Woodwork, trim and staircase finishing",
      "Commercial and rental property decorating",
      "Surface preparation and minor plaster repair",
    ],
    icon: "paintRoller",
    imagePrompt:
      "A decorator painting an interior wall with a roller in a freshly renovated UK room, daylight",
  },
  {
    slug: "carpentry-joinery",
    title: "Carpentry & Joinery",
    division: "interior-finishing",
    shortDescription:
      "Bespoke carpentry and joinery, from staircases and skirting to fitted storage.",
    description: [
      "Our carpenters handle everything from first-fix framing to bespoke fitted furniture, built-in wardrobes and staircases.",
    ],
    bullets: [
      "Staircases and balustrades",
      "Fitted wardrobes and storage",
      "Skirting, architrave and doors",
      "Timber flooring installation",
      "Bespoke joinery to order",
    ],
    icon: "hammer",
    imagePrompt:
      "A carpenter building fitted wardrobe storage in a UK home renovation, daylight",
  },
  {
    slug: "carpets-lino-flooring",
    title: "Carpets, Lino & Flooring",
    division: "interior-finishing",
    shortDescription:
      "Supply and fitting of carpets, vinyl/lino, laminate and engineered wood flooring.",
    description: [
      "We supply and fit a full range of flooring, levelling and preparing subfloors before laying your chosen finish throughout the property.",
    ],
    bullets: [
      "Carpet supply and fitting",
      "Vinyl and lino flooring",
      "Laminate and engineered wood flooring",
      "Subfloor levelling and preparation",
      "Stairs and landing carpeting",
    ],
    icon: "layoutGrid",
    imagePrompt:
      "A tradesperson installing engineered wood flooring in a bright renovated UK living room, daylight",
  },
  {
    slug: "tiling",
    title: "Tiling",
    division: "interior-finishing",
    shortDescription:
      "Wall and floor tiling for kitchens, bathrooms and other living spaces.",
    description: [
      "From a kitchen splashback to a fully tiled wet room, we set out and lay tiles precisely, including waterproofing in wet areas.",
    ],
    bullets: [
      "Kitchen and bathroom tiling",
      "Floor tiling throughout the home",
      "Waterproof tanking in wet areas",
      "Natural stone and porcelain tiling",
      "Re-grouting and tile repairs",
    ],
    icon: "grid3x3",
    imagePrompt:
      "A tiler laying floor tiles in a UK bathroom renovation, tools and tiles visible, daylight",
  },
  {
    slug: "plastering-rendering",
    title: "Plastering & Rendering",
    division: "interior-finishing",
    shortDescription:
      "Internal plastering and external rendering, including damp and crack repairs.",
    description: [
      "We skim, replaster and render both as part of larger renovations and as standalone repairs, including dealing with damp or cracked walls before finishing.",
    ],
    bullets: [
      "Skimming and replastering",
      "External rendering and repair",
      "Dry lining and partition walls",
      "Damp wall remediation",
      "Ceiling repairs",
    ],
    icon: "layers",
    imagePrompt:
      "A plasterer applying fresh plaster to an interior wall in a UK home renovation, trowel in hand, daylight",
  },
  {
    slug: "insulation",
    title: "Insulation",
    division: "interior-finishing",
    shortDescription:
      "Loft, wall and floor insulation to improve comfort and running costs.",
    description: [
      "We install loft, cavity wall and underfloor insulation as part of a renovation or as a standalone upgrade, improving comfort and reducing heating costs.",
    ],
    bullets: [
      "Loft insulation installation",
      "Cavity and external wall insulation",
      "Underfloor insulation",
      "Pipe and tank insulation",
      "Draught-proofing",
    ],
    icon: "thermometerSnowflake",
    imagePrompt:
      "A tradesperson installing loft insulation in a UK roof space, daylight through roof window",
  },
  {
    slug: "restoration-refurbishment",
    title: "Restoration & Refurbishment",
    division: "interior-finishing",
    shortDescription:
      "Full and part property renovations, including period and Grade II listed building restoration.",
    description: [
      "Whether you've bought a project that needs modernising or want to refresh a home you've lived in for years, we plan the works in a sequence that keeps disruption to a minimum.",
      "We also have direct experience working on Grade II listed buildings, carrying out sympathetic repairs and alterations that respect the property's character and comply with Listed Building Consent requirements, and liaising with conservation officers where needed.",
    ],
    bullets: [
      "Whole house renovations and refurbishments",
      "Period and Grade II listed property restoration",
      "Listed Building Consent liaison and compliant alterations",
      "Internal wall removal and structural alterations",
      "Replastering and damp remediation",
      "Coordination of all trades through to decoration",
    ],
    icon: "rotateCcw",
    imagePrompt:
      "Interior of a UK Victorian terraced house mid-renovation, exposed brick wall, natural light",
  },

  // Plumbing, Electrical & Heating — regulated work, registered tradespeople only
  {
    slug: "plumbing",
    title: "Plumbing",
    division: "plumbing-electrical-heating",
    shortDescription:
      "General plumbing repairs and installations, carried out by qualified plumbers.",
    description: [
      "From a leaking tap to a full re-pipe as part of a renovation, our plumbing work is carried out by qualified, registered plumbers. Gas work is only advertised and undertaken by Gas Safe registered engineers.",
    ],
    bullets: [
      "Bathroom and kitchen plumbing",
      "Leak detection and repair",
      "Pipework replacement and re-piping",
      "Water pressure and system issues",
      "Gas Safe registered engineers for gas work",
    ],
    icon: "droplet",
    imagePrompt:
      "A plumber working on pipework under a sink in a UK home, tools visible, daylight",
  },
  {
    slug: "electrical",
    title: "Electrical",
    division: "plumbing-electrical-heating",
    shortDescription:
      "Domestic electrical work carried out by NICEIC/NAPIT registered electricians.",
    description: [
      "All electrical work is carried out or signed off by NICEIC or NAPIT registered electricians, with the correct certification provided on completion.",
    ],
    bullets: [
      "Rewiring and partial rewires",
      "Consumer unit (fuse box) upgrades",
      "Sockets, lighting and switches",
      "EICR electrical safety certificates",
      "EV charger installation",
    ],
    icon: "zap",
    imagePrompt:
      "An electrician testing a consumer unit/fuse box in a UK home, daylight",
  },
  {
    slug: "central-heating",
    title: "Central Heating",
    division: "plumbing-electrical-heating",
    shortDescription:
      "Boiler installation, central heating systems and servicing by Gas Safe engineers.",
    description: [
      "Boiler and central heating installation, repair and servicing is carried out only by Gas Safe registered engineers, with certification provided for every job.",
    ],
    bullets: [
      "Boiler installation and replacement",
      "Central heating system design",
      "Radiator installation and balancing",
      "Annual boiler servicing",
      "Gas Safe registered engineers only",
    ],
    icon: "thermometer",
    imagePrompt:
      "A heating engineer servicing a boiler in a UK home utility room, tools and gauges visible",
  },

  // Property Maintenance & Repairs
  {
    slug: "handyman-maintenance",
    title: "Handyman & General Maintenance",
    division: "property-maintenance",
    shortDescription:
      "General property repairs and maintenance for homeowners, landlords and letting agents.",
    description: [
      "Not every job needs a full trade visit. Our handyman service covers the smaller repairs and maintenance tasks that keep a home or rental property in good order, and we offer ongoing maintenance contracts for landlords and agents.",
    ],
    bullets: [
      "General repairs and odd jobs",
      "Rental property maintenance",
      "Pre-tenancy and end-of-tenancy repairs",
      "Flat-pack assembly and fixing",
      "Ongoing maintenance contracts for landlords and agents",
    ],
    icon: "wrench",
    imagePrompt:
      "A handyman fixing a fitting in a UK home with a cordless drill, tool belt, daylight",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicesByDivision(divisionSlug: string): Service[] {
  return services.filter((s) => s.division === divisionSlug);
}
