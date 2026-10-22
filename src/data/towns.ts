export type Region = "Ashford Area" | "East Kent" | "Kent" | "London";

export type Town = {
  slug: string;
  name: string;
  region: Region;
  /** County/area shown after the town name, e.g. "Kent" or "London". */
  area: string;
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function town(name: string, region: Region, area: string): Town {
  return { slug: slugify(name), name, region, area };
}

export const towns: Town[] = [
  // Ashford & the villages immediately around it — our home patch.
  town("Ashford", "Ashford Area", "Kent"),
  town("Kennington", "Ashford Area", "Kent"),
  town("Willesborough", "Ashford Area", "Kent"),
  town("Great Chart", "Ashford Area", "Kent"),
  town("Kingsnorth", "Ashford Area", "Kent"),
  town("Hothfield", "Ashford Area", "Kent"),
  town("Charing", "Ashford Area", "Kent"),
  town("Bethersden", "Ashford Area", "Kent"),
  town("Pluckley", "Ashford Area", "Kent"),
  town("Smarden", "Ashford Area", "Kent"),
  town("Hamstreet", "Ashford Area", "Kent"),
  town("Wye", "Ashford Area", "Kent"),
  town("Mersham", "Ashford Area", "Kent"),
  town("Shadoxhurst", "Ashford Area", "Kent"),
  town("Tenterden", "Ashford Area", "Kent"),

  // East Kent — the wider coastal and Canterbury district area.
  town("Canterbury", "East Kent", "Kent"),
  town("Folkestone", "East Kent", "Kent"),
  town("Dover", "East Kent", "Kent"),
  town("Faversham", "East Kent", "Kent"),
  town("Whitstable", "East Kent", "Kent"),
  town("Herne Bay", "East Kent", "Kent"),
  town("Margate", "East Kent", "Kent"),
  town("Ramsgate", "East Kent", "Kent"),
  town("Broadstairs", "East Kent", "Kent"),
  town("Sandwich", "East Kent", "Kent"),
  town("Deal", "East Kent", "Kent"),
  town("Minster", "East Kent", "Kent"),

  // The rest of Kent.
  town("Maidstone", "Kent", "Kent"),
  town("Tonbridge", "Kent", "Kent"),
  town("Tunbridge Wells", "Kent", "Kent"),
  town("Sevenoaks", "Kent", "Kent"),
  town("Sittingbourne", "Kent", "Kent"),
  town("Chatham", "Kent", "Kent"),
  town("Rochester", "Kent", "Kent"),
  town("Gillingham", "Kent", "Kent"),
  town("Gravesend", "Kent", "Kent"),
  town("Cranbrook", "Kent", "Kent"),
  town("Paddock Wood", "Kent", "Kent"),
  town("Aylesford", "Kent", "Kent"),
  town("Snodland", "Kent", "Kent"),
  town("Dartford", "Kent", "Kent"),

  // London boroughs within reach of Ashford/Kent.
  town("Bromley", "London", "London"),
  town("Orpington", "London", "London"),
  town("Sidcup", "London", "London"),
  town("Bexleyheath", "London", "London"),
  town("Welling", "London", "London"),
  town("Beckenham", "London", "London"),
  town("Croydon", "London", "London"),
  town("Greenwich", "London", "London"),
  town("Lewisham", "London", "London"),
];

export const regionOrder: Region[] = ["Ashford Area", "East Kent", "Kent", "London"];

export const regionBlurbs: Record<Region, string> = {
  "Ashford Area":
    "Our home patch — based in Ashford, this is where most of our new builds, extensions and renovations happen.",
  "East Kent":
    "New builds, extensions and roof conversions for homeowners across Canterbury, the coast and the wider East Kent district.",
  Kent: "Full construction, renovation and decorating services across the rest of Kent, from the Medway towns to the Weald.",
  London:
    "Extensions, renovations and finishing trades for homes across South East London and the surrounding boroughs.",
};

export const serviceAreaSummary =
  "Covering London, East Kent and Kent — based in Ashford and working throughout the surrounding towns and villages.";

export function getTownBySlug(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export function townsByRegion(region: Region): Town[] {
  return towns.filter((t) => t.region === region);
}
