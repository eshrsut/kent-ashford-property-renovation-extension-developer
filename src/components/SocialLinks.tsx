import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { site } from "@/data/site";

const links = [
  { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.social.youtube, label: "YouTube", Icon: FaYoutube },
  { href: site.social.tiktok, label: "TikTok", Icon: FaTiktok },
  { href: site.social.x, label: "X", Icon: FaXTwitter },
  { href: site.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-amber-500 hover:text-slate-900"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
