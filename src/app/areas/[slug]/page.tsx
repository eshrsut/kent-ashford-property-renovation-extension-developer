import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import DivisionCard from "@/components/DivisionCard";
import PhotoGallery from "@/components/PhotoGallery";
import { getTownBySlug, towns } from "@/data/towns";
import { divisions } from "@/data/divisions";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { resolveGallery } from "@/lib/resolvePhotos";

const regionFocus: Record<string, string> = {
  "Ashford Area":
    "Being based here ourselves, this is where we can usually get to site fastest and keep a closer eye on day-to-day progress — popular jobs include full renovations of the area's older cottages and village homes alongside modern extensions.",
  "East Kent":
    "Coastal and market-town properties here often need extra attention to roofing, render and exterior woodwork against the weather, alongside the usual extensions and renovations.",
  Kent: "From Victorian terraces in the Medway towns to larger detached homes further out, we handle everything from single-room refits to full renovations.",
  London:
    "Space is often the main constraint on London properties, so loft conversions, rear extensions and side-return extensions are some of our most requested jobs in this area.",
};

export function generateStaticParams() {
  return towns.map((town) => ({ slug: town.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) return {};
  return {
    title: `Builders in ${town.name} | Construction & Property Services`,
    description: `${site.name} provides construction, renovation and property maintenance services in ${town.name}, ${town.area} — new builds, extensions, kitchens, bathrooms, roofing and more. Free, no-obligation quotes.`,
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) notFound();

  const townPhoto = resolveGallery({
    category: "areas",
    slug: town.slug,
    alt: `Property in ${town.name}, ${town.area}`,
    topic: "areas",
    seed: `town-${town.slug}`,
    singleCurated: true,
  });

  const localProject = projects.find((p) =>
    p.location.toLowerCase().startsWith(town.name.toLowerCase())
  );
  const localProjectService = localProject
    ? getServiceBySlug(localProject.serviceSlug)
    : undefined;

  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-14 text-center sm:px-6">
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-400">
            <MapPin className="h-4 w-4" />
            {town.name}, {town.area}
          </span>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Builders &amp; Renovation Specialists in {town.name}
          </h1>
          <p className="max-w-2xl text-slate-300">
            Construction, renovation and property maintenance — new builds,
            extensions, kitchens, bathrooms, roofing, plumbing, electrical and
            more — for homeowners, landlords and businesses in and around{" "}
            {town.name}.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Local builders working in {town.name}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {site.name} is based in Ashford and works throughout{" "}
              {town.name} and the surrounding area, taking on everything from
              a single room renovation to a full new build. We manage every
              stage of the project ourselves, so you have one point of
              contact from the first site visit to the final finish.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whether you&apos;re planning a rear extension, a loft
              conversion, a full property renovation or just need a room
              repainted and the floor replaced, get in touch for a free,
              no-obligation quote.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {regionFocus[town.region]}
            </p>
            {localProject && localProjectService && (
              <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-slate-700">
                Recent work in {town.name}:{" "}
                <Link
                  href={`/services/${localProjectService.slug}`}
                  className="font-semibold text-amber-700 underline underline-offset-2"
                >
                  {localProject.title}
                </Link>{" "}
                — {localProject.summary}
              </p>
            )}
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Get a Free Quote in {town.name}
            </Link>
          </div>

          <PhotoGallery
            photos={townPhoto.photos}
            isSample={townPhoto.isSample}
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {services.length} services available in {town.name}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => (
              <DivisionCard key={division.slug} division={division} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
