import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-900">
              MD
            </span>
            <span className="text-base font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">{site.description}</p>
          <SocialLinks className="mt-4" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-slate-400 hover:text-amber-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-amber-400" />
              <a href={site.phoneHref} className="hover:text-amber-400">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-amber-400" />
              <a href={`mailto:${site.email}`} className="hover:text-amber-400">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-amber-400" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.county}{" "}
                {site.address.postcode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved. Covering
        London, East Kent &amp; Kent.
      </div>
    </footer>
  );
}
