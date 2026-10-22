import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { regionBlurbs, regionOrder, serviceAreaSummary, townsByRegion } from "@/data/towns";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: `${site.name} covers London, East Kent and Kent, including Ashford, Canterbury, Folkestone, Maidstone, Tonbridge and Bromley. See every town we build and renovate in.`,
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Areas We Cover
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {serviceAreaSummary}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {regionOrder.map((region) => (
              <div
                key={region}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <h2 className="text-lg font-semibold text-slate-900">
                    {region}
                  </h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {regionBlurbs[region]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {townsByRegion(region).map((town) => (
                    <Link
                      key={town.slug}
                      href={`/areas/${town.slug}`}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-amber-500 hover:text-slate-900"
                    >
                      {town.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Don&apos;t see your town listed?{" "}
            <Link href="/contact" className="font-semibold text-amber-600">
              Get in touch
            </Link>{" "}
            — we take on projects throughout the wider region too.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
