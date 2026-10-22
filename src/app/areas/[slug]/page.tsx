import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import PhotoGallery from "@/components/PhotoGallery";
import { getTownBySlug, towns } from "@/data/towns";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { resolveGallery } from "@/lib/resolvePhotos";

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
    title: `Builders in ${town.name} | New Builds, Extensions & Renovations`,
    description: `${site.name} provides new build homes, extensions, roof conversions, renovations, painting and flooring in ${town.name}, ${town.area}. Free, no-obligation quotes.`,
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
    alt: `Completed project photo from ${town.name}`,
    topic: "team",
    seed: `town-${town.slug}`,
  });

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
            New build homes, extensions, roof conversions, renovations,
            painting and flooring for homeowners in and around {town.name}.
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
            Services available in {town.name}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
