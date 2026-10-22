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
    serviceSlug: "roof-loft-conversions",
    summary:
      "Dormer loft conversion adding a double bedroom and ensuite above an existing terraced house.",
    imagePrompt:
      "New dormer loft conversion bedroom with ensuite, roof windows, neutral decor, UK terraced house interior",
  },
  {
    slug: "folkestone-new-build",
    title: "New Build Family Home",
    location: "Folkestone, Kent",
    serviceSlug: "new-build-homes",
    summary:
      "A four-bedroom new build family home completed from groundworks through to final landscaping.",
    imagePrompt:
      "Completed new build four bedroom detached house, brick and render exterior, driveway and landscaped front garden, UK suburb",
  },
  {
    slug: "maidstone-full-renovation",
    title: "Full Period Property Renovation",
    location: "Maidstone, Kent",
    serviceSlug: "renovation-refurbishment",
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
    serviceSlug: "flooring",
    summary:
      "Supply and installation of engineered oak flooring throughout the ground floor of a London semi-detached home.",
    imagePrompt:
      "Bright open-plan London home with newly installed engineered oak flooring, modern furniture, daylight",
  },
];
