import { ShieldCheck, Award, Clock, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function TrustBar() {
  const yearsTrading = new Date().getFullYear() - site.foundedYear;
  const items = [
    { icon: Clock, label: `${yearsTrading}+ years building & renovating` },
    { icon: ShieldCheck, label: "Fully insured & guaranteed work" },
    { icon: Award, label: "Free, no-obligation quotes" },
    { icon: MapPin, label: "London, East Kent & Kent" },
  ];

  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 flex-shrink-0 text-amber-600" strokeWidth={1.75} />
            <span className="text-sm font-medium text-slate-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
