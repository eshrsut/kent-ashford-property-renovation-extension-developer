import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `A selection of recent new build, extension and renovation projects from ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Recent Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            A selection of new builds, extensions, conversions and
            renovations completed across London, East Kent and Kent.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const service = getServiceBySlug(project.serviceSlug);
              return (
                <div
                  key={project.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <PlaceholderImage
                    seed={`project-${project.slug}`}
                    label={project.imagePrompt}
                    className="aspect-[4/3] w-full"
                    rounded="rounded-none"
                    width={700}
                    height={525}
                  />
                  <div className="p-5">
                    {service && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs font-semibold uppercase tracking-wide text-amber-600"
                      >
                        {service.title}
                      </Link>
                    )}
                    <h2 className="mt-1 text-lg font-semibold text-slate-900">
                      {project.title}
                    </h2>
                    <p className="text-sm text-slate-500">{project.location}</p>
                    <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
