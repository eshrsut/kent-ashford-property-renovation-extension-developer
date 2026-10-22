import Image from "next/image";

type PlaceholderImageProps = {
  /** Stable seed so the same slot always gets the same sample photo. */
  seed: string;
  /** Short description of what real photo should replace this sample. */
  label: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  rounded?: string;
};

export default function PlaceholderImage({
  seed,
  label,
  className = "",
  width = 800,
  height = 600,
  priority = false,
  rounded = "rounded-2xl",
}: PlaceholderImageProps) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;

  return (
    <div className={`group relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
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
