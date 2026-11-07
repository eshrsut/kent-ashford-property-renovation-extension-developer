import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { divisions } from "@/data/divisions";
import { services, servicesByDivision } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `${services.length} construction, renovation and property maintenance services from ${site.name}, covering Kent and Greater London.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {services.length} services across six trade divisions — from
            groundworks to the final coat of paint. Regulated plumbing,
            electrical and heating work is only carried out by suitably
            qualified and registered tradespeople.
          </p>

          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {divisions.map((division) => (
              <a
                key={division.slug}
                href={`#${division.slug}`}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-amber-400 hover:text-amber-400"
              >
                {division.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {divisions.map((division, i) => (
        <section
          key={division.slug}
          id={division.slug}
          className={`scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {division.title}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">{division.description}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByDivision(division.slug).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Running a project and need subcontractor labour?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Main contractors, developers and property managers can submit a
            labour or subcontracting enquiry directly.
          </p>
          <Link
            href="/for-contractors"
            className="mt-6 inline-flex rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            For Contractors
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
