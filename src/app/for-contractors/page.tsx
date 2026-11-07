import type { Metadata } from "next";
import { Briefcase, Building2, HardHat, ShieldCheck, Users, Wrench } from "lucide-react";
import ContractorEnquiryForm from "@/components/ContractorEnquiryForm";
import { site } from "@/data/site";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "For Contractors",
  description: `Subcontractor labour and construction workforce supply from ${site.name}, covering Kent and Greater London.`,
};

const whoWeWorkWith = [
  {
    icon: Building2,
    title: "Main contractors & developers",
    body: "Additional trades and labour on live sites, or a full subcontract package for a defined scope of work.",
  },
  {
    icon: Briefcase,
    title: "Landlords & letting agents",
    body: "Reactive and planned maintenance across a rental portfolio, with one point of contact instead of a list of individual tradespeople.",
  },
  {
    icon: Users,
    title: "Property managers & developers",
    body: "Reliable workforce for refurbishment and turnaround work between tenancies or sales.",
  },
];

const whatWeOffer = [
  {
    icon: HardHat,
    title: "A workforce ready to deploy",
    body: "Our own construction workers, available for additional labour or complete subcontractor teams at short notice.",
  },
  {
    icon: Wrench,
    title: "All 30 services, one contact",
    body: "From groundworks to electrics, you're dealing with one point of contact instead of chasing multiple trades.",
  },
  {
    icon: ShieldCheck,
    title: "Insured and compliant",
    body: "Fully insured work, with regulated plumbing, electrical and gas work carried out only by qualified, registered tradespeople.",
  },
];

export default function ForContractorsPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Workforce & Subcontracting for Contractors, Developers & Agents
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {site.name} supplies additional labour, subcontractor teams and
            full project delivery for main contractors, developers, landlords
            and property managers across Kent and Greater London.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Who we work with
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whoWeWorkWith.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            What we offer
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whatWeOffer.map(({ icon: Icon, title, body }) => (
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

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600">
            Our trades cover all six divisions: {divisions.map((d) => d.title).join(", ")}.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Submit a Contractor Enquiry
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
            Tell us what you need and we&apos;ll come back to you with
            availability and a quote.
          </p>
          <div className="mt-8">
            <ContractorEnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
