import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
            {site.tagline}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Builders you can trust, from new build to final finish.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg lg:mx-0">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="w-full rounded-md bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-400 sm:w-auto"
            >
              Request a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>

        <PlaceholderImage
          seed="hero-new-build-home"
          topic="new-build-homes"
          label="Completed new build or renovation project photo"
          className="aspect-[4/3] w-full lg:aspect-[5/4]"
          width={1000}
          height={800}
          priority
        />
      </div>
    </section>
  );
}
