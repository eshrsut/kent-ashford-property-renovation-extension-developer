import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services } from "@/data/services";
import { regionOrder, serviceAreaSummary, townsByRegion } from "@/data/towns";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | Builders in London, Kent & East Kent`,
  description: site.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Everything from the first brick to the final coat of paint
            </h2>
            <p className="mt-3 text-slate-600">
              New builds, extensions, roof conversions, renovations, flooring
              and decorating — all managed under one roof.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <PlaceholderImage
            seed="site-progress-build"
            label="Project in progress — team on site photo"
            className="aspect-[4/3] w-full order-last lg:order-first"
            width={900}
            height={700}
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Covering London, East Kent &amp; Kent
            </h2>
            <p className="mt-3 text-slate-600">{serviceAreaSummary}</p>
            <ul className="mt-6 space-y-4">
              {regionOrder.map((region) => (
                <li key={region}>
                  <p className="font-semibold text-slate-900">{region}</p>
                  <p className="text-sm text-slate-600">
                    {townsByRegion(region)
                      .map((t) => t.name)
                      .join(", ")}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-600"
            >
              See all areas we cover
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
