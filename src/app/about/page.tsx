import type { Metadata } from "next";
import { Award, HardHat, ShieldCheck, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name}, builders covering London, East Kent and Kent.`,
};

const values = [
  {
    icon: HardHat,
    title: "Hands-on project management",
    body: "One point of contact runs your project from first site visit to final sign-off, so nothing falls between trades.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured, properly managed",
    body: "Every job is covered by appropriate insurance and run to current building regulations.",
  },
  {
    icon: Award,
    title: "Honest quotes, no surprises",
    body: "We price projects clearly up front and talk you through any changes before they happen, not after.",
  },
  {
    icon: Users,
    title: "A trusted team of trades",
    body: "In-house builders alongside vetted electricians, plumbers and plasterers we've worked with for years.",
  },
];

export default function AboutPage() {
  const yearsTrading = new Date().getFullYear() - site.foundedYear;

  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            About {site.name}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {yearsTrading}+ years building, extending and renovating homes
            across London, East Kent and Kent.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <PlaceholderImage
            seed="about-team-site"
            label="Team photo on a current project site"
            className="aspect-[4/3] w-full"
            width={900}
            height={700}
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Builders who manage the whole project, not just their trade
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {site.name} was built on a simple idea: homeowners shouldn&apos;t
              have to manage a dozen different trades themselves. We plan the
              sequence of work, coordinate the trades on site, and keep you
              updated at every stage — whether that&apos;s a new build home,
              a kitchen extension, or a full property renovation.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We work across London, East Kent and the rest of Kent, with most
              of our projects based around our home patch of Ashford and the
              surrounding towns.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            How we work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <Icon className="h-8 w-8 text-amber-600" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
