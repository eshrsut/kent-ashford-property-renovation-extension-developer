import Image from "next/image";
import { curatedPhoto } from "@/lib/curatedPhotos";

type PlaceholderImageProps = {
  /** Stable seed so the same slot always gets a consistent fallback photo. */
  seed: string;
  /** Short description of what real photo should replace this sample. */
  label: string;
  /** A real uploaded photo's URL — when set, this replaces the sample entirely. */
  realSrc?: string;
  /**
   * Category key (a service slug, or "team") used to pick a relevant,
   * freely-licensed sample construction photo. Falls back to a random
   * placeholder photo if there's no curated match for this topic.
   */
  topic?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  rounded?: string;
};

export default function PlaceholderImage({
  seed,
  label,
  realSrc,
  topic,
  className = "",
  width = 800,
  height = 600,
  priority = false,
  rounded = "rounded-2xl",
}: PlaceholderImageProps) {
  if (realSrc) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={realSrc}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const sample =
    (topic && curatedPhoto(topic)) ||
    `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;

  return (
    <div className={`group relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={sample}
        alt={label}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-amber-300">
          Sample photo — replace
        </p>
        <p className="text-xs text-slate-100">{label}</p>
      </div>
    </div>
  );
}
