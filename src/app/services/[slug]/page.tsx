import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceIcon from "@/components/ServiceIcon";
import { getServiceBySlug, services, servicesByDivision } from "@/data/services";
import { getDivisionBySlug } from "@/data/divisions";
import { projects } from "@/data/projects";
import { resolveGallery } from "@/lib/resolvePhotos";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const division = getDivisionBySlug(service.division);
  const relatedProjects = projects.filter((p) => p.serviceSlug === service.slug);
  const siblingServices = servicesByDivision(service.division).filter(
    (s) => s.slug !== service.slug
  );

  const serviceGallery = resolveGallery({
    category: "services",
    slug: service.slug,
    alt: service.imagePrompt,
    topic: service.division,
    seed: `service-${service.slug}`,
  });

  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
          {division && (
            <Link
              href={`/services#${division.slug}`}
              className="text-sm font-semibold uppercase tracking-wide text-amber-400 hover:text-amber-300"
            >
              {division.title}
            </Link>
          )}
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-slate-900">
            <ServiceIcon icon={service.icon} className="h-7 w-7" />
          </span>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-slate-300">{service.shortDescription}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start">
          <div>
            {service.description.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                  {bullet}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Get a Quote for {service.title}
            </Link>
          </div>

          <PhotoGallery
            photos={serviceGallery.photos}
            isSample={serviceGallery.isSample}
            className="aspect-[4/3] w-full"
          />
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Recent {service.title.toLowerCase()} projects
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => {
                const gallery = resolveGallery({
                  category: "projects",
                  slug: project.slug,
                  alt: project.imagePrompt,
                  topic: getServiceBySlug(project.serviceSlug)?.division,
                  seed: `project-${project.slug}`,
                });
                return (
                  <div
                    key={project.slug}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <PhotoGallery
                      photos={gallery.photos}
                      isSample={gallery.isSample}
                      className="aspect-[4/3] w-full"
                      rounded="rounded-none"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-slate-900">{project.title}</p>
                      <p className="text-sm text-slate-500">{project.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {siblingServices.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Other {division?.title.toLowerCase()} services
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {siblingServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-400 hover:text-amber-600"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-6 inline-block text-sm font-semibold text-amber-600"
            >
              View all {services.length} services →
            </Link>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
