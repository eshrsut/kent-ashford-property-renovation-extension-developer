import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";

export function whatsappHref(message = "Hi, I'd like a free quote for a project.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
