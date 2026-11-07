import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Division } from "@/data/divisions";
import { servicesByDivision } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function DivisionCard({ division }: { division: Division }) {
  const count = servicesByDivision(division.slug).length;
  const firstService = servicesByDivision(division.slug)[0];

  return (
    <Link
      href={`/services#${division.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
        {firstService && <ServiceIcon icon={firstService.icon} className="h-6 w-6" />}
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{division.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{division.description}</p>
      <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-amber-600">
        {count} services
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
