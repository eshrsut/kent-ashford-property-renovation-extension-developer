"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  town: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  town: "",
  service: services[0]?.slug ?? "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const serviceTitle =
      services.find((s) => s.slug === form.service)?.title ?? form.service;

    const subject = `Quote request: ${serviceTitle}${
      form.town ? ` — ${form.town}` : ""
    }`;

    const bodyLines = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Town / area: ${form.town || "—"}`,
      `Service required: ${serviceTitle}`,
      "",
      "Project details:",
      form.message || "—",
    ];

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Phone number" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="07xxx xxxxxx"
          />
        </Field>

        <Field label="Email address" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Town / area">
          <input
            type="text"
            value={form.town}
            onChange={(e) => update("town", e.target.value)}
            className="input"
            placeholder="e.g. Ashford, Kent"
          />
        </Field>
      </div>

      <Field label="Service you're interested in" required>
        <select
          required
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="input"
        >
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other / not sure</option>
        </select>
      </Field>

      <Field label="Tell us about your project" required>
        <textarea
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className="input resize-none"
          placeholder="A few details about the property, the work you'd like done and your rough timescale."
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 sm:w-auto"
      >
        Send Quote Request
      </button>

      <p className="text-xs text-slate-500">
        Submitting opens your email app with this request pre-filled and
        addressed to {site.email}, so you can review and send it.
      </p>

      {sent && (
        <p className="rounded-md bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
          Your email app should now be open with your quote request ready to
          send. If it didn&apos;t open, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
      <span>
        {label}
        {required && <span className="text-amber-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
