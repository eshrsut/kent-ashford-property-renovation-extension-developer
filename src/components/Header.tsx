"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-amber-400">
            MD
          </span>
          <span className="text-base font-semibold text-slate-900 sm:text-lg">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            <Phone className="h-4 w-4 text-amber-600" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-amber-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-amber-400"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
