import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { whatsappHref } from "@/components/WhatsAppButton";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free quote from ${site.name}. Call, WhatsApp or send us your project details.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Request a Free Quote
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Tell us about your project and we&apos;ll get back to you with
            honest advice and a no-obligation quote.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <ContactDetail
              icon={<Phone className="h-5 w-5 text-amber-600" />}
              label="Call us"
              value={site.phone}
              href={site.phoneHref}
            />
            <ContactDetail
              icon={<FaWhatsapp className="h-5 w-5 text-amber-600" />}
              label="WhatsApp"
              value="Chat with us now"
              href={whatsappHref()}
              external
            />
            <ContactDetail
              icon={<Mail className="h-5 w-5 text-amber-600" />}
              label="Email us"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactDetail
              icon={<MapPin className="h-5 w-5 text-amber-600" />}
              label="Based in"
              value={`${site.address.line1}, ${site.address.line2}, ${site.address.county} ${site.address.postcode}`}
            />
            <ContactDetail
              icon={<Clock className="h-5 w-5 text-amber-600" />}
              label="Opening hours"
              value={site.hours}
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block transition hover:-translate-y-0.5"
      >
        {content}
      </a>
    );
  }

  return content;
}
