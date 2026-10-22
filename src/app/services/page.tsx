import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Construction, renovation and finishing services from ${site.name}, covering London, East Kent and Kent.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            From groundworks to the final coat of paint, we cover every stage
            of a construction or renovation project.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
