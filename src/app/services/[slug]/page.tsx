import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import ServiceIcon from "@/components/ServiceIcon";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { localPhoto } from "@/lib/localPhoto";

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

  const relatedProjects = projects.filter((p) => p.serviceSlug === service.slug);

  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
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

          <PlaceholderImage
            seed={`service-${service.slug}`}
            topic={service.slug}
            label={service.imagePrompt}
            className="aspect-[4/3] w-full"
            width={900}
            height={700}
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
              {relatedProjects.map((project) => (
                <div
                  key={project.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <PlaceholderImage
                    seed={`project-${project.slug}`}
                    topic={project.serviceSlug}
                    label={project.imagePrompt}
                    realSrc={localPhoto("projects", project.slug)}
                    className="aspect-[4/3] w-full"
                    rounded="rounded-none"
                    width={700}
                    height={525}
                  />
                  <div className="p-4">
                    <p className="font-semibold text-slate-900">{project.title}</p>
                    <p className="text-sm text-slate-500">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Other services from {site.name}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-400 hover:text-amber-600"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
