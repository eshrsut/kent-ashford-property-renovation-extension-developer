export type Project = {
  slug: string;
  title: string;
  location: string;
  serviceSlug: string;
  summary: string;
  imagePrompt: string;
};

export const projects: Project[] = [
  {
    slug: "ashford-rear-extension",
    title: "Rear Kitchen Extension",
    location: "Ashford, Kent",
    serviceSlug: "extensions",
    summary:
      "A single storey rear extension with bi-fold doors, creating an open-plan kitchen and dining space.",
    imagePrompt:
      "Finished open-plan kitchen extension with bi-fold doors onto garden, light wood flooring, modern UK kitchen, daylight",
  },
  {
    slug: "canterbury-loft-conversion",
    title: "Dormer Loft Conversion",
    location: "Canterbury, Kent",
    serviceSlug: "loft-conversion",
    summary:
      "Dormer loft conversion adding a double bedroom and ensuite above an existing terraced house.",
    imagePrompt:
      "New dormer loft conversion bedroom with ensuite, roof windows, neutral decor, UK terraced house interior",
  },
  {
    slug: "folkestone-new-build",
    title: "New Build Family Home",
    location: "Folkestone, Kent",
    serviceSlug: "new-build",
    summary:
      "A four-bedroom new build family home completed from groundworks through to final landscaping.",
    imagePrompt:
      "Completed new build four bedroom detached house, brick and render exterior, driveway and landscaped front garden, UK suburb",
  },
  {
    slug: "maidstone-full-renovation",
    title: "Full Period Property Renovation",
    location: "Maidstone, Kent",
    serviceSlug: "restoration-refurbishment",
    summary:
      "A complete renovation of a Victorian terrace, including rewiring coordination, replastering and refurbished period features.",
    imagePrompt:
      "Renovated Victorian terraced house living room with restored period features, exposed beams, fresh plaster, UK home interior",
  },
  {
    slug: "whitstable-exterior-repaint",
    title: "Exterior Repaint & Render",
    location: "Whitstable, Kent",
    serviceSlug: "painting-decorating",
    summary:
      "Full exterior render repair and repaint of a seafront property, finished in a coastal colour palette.",
    imagePrompt:
      "Freshly painted coastal UK house exterior, pale blue render, clear sky, seaside town street",
  },
  {
    slug: "bromley-flooring-install",
    title: "Engineered Wood Flooring Install",
    location: "Bromley, London",
    serviceSlug: "carpets-lino-flooring",
    summary:
      "Supply and installation of engineered oak flooring throughout the ground floor of a London semi-detached home.",
    imagePrompt:
      "Bright open-plan London home with newly installed engineered oak flooring, modern furniture, daylight",
  },
  {
    slug: "dover-listed-building-groundworks",
    title: "Listed Building Groundworks & Underpinning",
    location: "Dover, Kent",
    serviceSlug: "groundwork-foundations",
    summary:
      "Major groundworks within the shell of a Grade II listed building, including excavation, reinforced concrete oversite slab and raker shoring to safely support the retained heritage walls during the works.",
    imagePrompt:
      "Real project photos supplied by the business — see public/images/projects/dover-listed-building-groundworks*.jpg",
  },
  {
    slug: "dover-kitchen-fitting",
    title: "Full Kitchen Refit",
    location: "Dover, Kent",
    serviceSlug: "kitchen-fitting",
    summary:
      "Complete kitchen refit including new units, worktops, splashback tiling and appliance installation.",
    imagePrompt:
      "A freshly fitted modern UK kitchen with new units and worktops, daylight",
  },
  {
    slug: "dartford-central-heating",
    title: "Boiler & Central Heating Upgrade",
    location: "Dartford, Kent",
    serviceSlug: "central-heating",
    summary:
      "Replacement boiler and upgraded radiators installed by a Gas Safe registered engineer.",
    imagePrompt:
      "A Gas Safe heating engineer installing a new boiler in a UK home utility room, daylight",
  },
  {
    slug: "croydon-handyman-maintenance",
    title: "Rental Property Maintenance Contract",
    location: "Croydon, London",
    serviceSlug: "handyman-maintenance",
    summary:
      "Ongoing maintenance contract for a letting agent, covering repairs across a portfolio of rental flats.",
    imagePrompt:
      "A handyman carrying out a repair in a UK rental flat, tool bag, daylight",
  },
];
