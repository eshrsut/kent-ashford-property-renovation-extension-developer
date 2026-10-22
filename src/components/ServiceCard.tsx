import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
        <ServiceIcon icon={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>
      <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-amber-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
