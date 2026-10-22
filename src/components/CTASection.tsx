import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export default function CTASection() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mt-2 text-slate-300">
            Get a free, no-obligation quote for your new build, extension or
            renovation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
