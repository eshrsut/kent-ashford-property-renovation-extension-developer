"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

const companyTypes = [
  "Main contractor",
  "Property developer",
  "Property management company",
  "Landlord",
  "Letting or estate agent",
  "Other",
];

const enquiryTypes = [
  "Subcontractor labour for a project",
  "Additional construction workforce",
  "Full project / build",
  "Ongoing maintenance contract",
  "Other",
];

type FormState = {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  companyType: string;
  enquiryType: string;
  tradesNeeded: string;
  message: string;
};

const initialState: FormState = {
  companyName: "",
  contactName: "",
  phone: "",
  email: "",
  companyType: companyTypes[0],
  enquiryType: enquiryTypes[0],
  tradesNeeded: "",
  message: "",
};

export default function ContractorEnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Contractor enquiry: ${form.companyName} — ${form.enquiryType}`;

    const bodyLines = [
      `Company: ${form.companyName}`,
      `Company type: ${form.companyType}`,
      `Contact name: ${form.contactName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Enquiry type: ${form.enquiryType}`,
      `Trades/skills needed: ${form.tradesNeeded || "—"}`,
      "",
      "Details:",
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
        <Field label="Company name" required>
          <input
            required
            type="text"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className="input"
            placeholder="Acme Developments Ltd"
          />
        </Field>

        <Field label="Company type" required>
          <select
            required
            value={form.companyType}
            onChange={(e) => update("companyType", e.target.value)}
            className="input"
          >
            {companyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Contact name" required>
          <input
            required
            type="text"
            value={form.contactName}
            onChange={(e) => update("contactName", e.target.value)}
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
            placeholder="you@company.com"
          />
        </Field>

        <Field label="What do you need?" required>
          <select
            required
            value={form.enquiryType}
            onChange={(e) => update("enquiryType", e.target.value)}
            className="input"
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Trades or skills needed">
        <input
          type="text"
          value={form.tradesNeeded}
          onChange={(e) => update("tradesNeeded", e.target.value)}
          className="input"
          placeholder="e.g. bricklayers, 2x general labourers, electrician"
        />
      </Field>

      <Field label="Project / enquiry details" required>
        <textarea
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className="input resize-none"
          placeholder="Location, scale of the project, timescale, and how many people or trades you're looking for."
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 sm:w-auto"
      >
        Send Enquiry
      </button>

      <p className="text-xs text-slate-500">
        Submitting opens your email app with this enquiry pre-filled and
        addressed to {site.email}, so you can review and send it.
      </p>

      {sent && (
        <p className="rounded-md bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
          Your email app should now be open with your enquiry ready to send.
          If it didn&apos;t open, email us directly at{" "}
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
