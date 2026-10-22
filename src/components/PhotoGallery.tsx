"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Pause, Play, X } from "lucide-react";
import type { GalleryPhoto } from "@/lib/resolvePhotos";

const AUTOPLAY_INTERVAL_MS = 4000;

export default function PhotoGallery({
  photos,
  isSample = false,
  className = "",
  rounded = "rounded-2xl",
  priority = false,
}: {
  photos: GalleryPhoto[];
  isSample?: boolean;
  className?: string;
  rounded?: string;
  priority?: boolean;
}) {
  const hasMultiple = photos.length > 1;

  const [coverIndex, setCoverIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const close = () => setOpenIndex(null);
  const open = (index: number) => {
    setIsPlaying(true);
    setCoverIndex(index);
    setOpenIndex(index);
  };
  const showNext = () => {
    if (openIndex === null) return;
    const next = (openIndex + 1) % photos.length;
    setCoverIndex(next);
    setOpenIndex(next);
  };
  const showPrev = () => {
    if (openIndex === null) return;
    const prev = (openIndex - 1 + photos.length) % photos.length;
    setCoverIndex(prev);
    setOpenIndex(prev);
  };
  const manualNav = (fn: () => void) => {
    setIsPlaying(false);
    fn();
  };

  // Cycle the card's cover photo on its own, even before the lightbox opens.
  useEffect(() => {
    if (!hasMultiple || openIndex !== null) return;
    const id = window.setInterval(() => {
      setCoverIndex((i) => (i + 1) % photos.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [hasMultiple, openIndex, photos.length]);

  // Keyboard controls + lock page scroll while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") manualNav(showNext);
      if (e.key === "ArrowLeft") manualNav(showPrev);
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, photos.length]);

  // Auto-advance through the gallery while the lightbox is open.
  useEffect(() => {
    if (openIndex === null || !hasMultiple || !isPlaying) return;
    const id = window.setInterval(showNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, isPlaying, hasMultiple, photos.length]);

  if (photos.length === 0) return null;
  const cover = photos[coverIndex];

  return (
    <>
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <button
          type="button"
          onClick={() => open(coverIndex)}
          aria-label={`View ${cover.alt} full screen`}
          className="group absolute inset-0 block h-full w-full cursor-zoom-in"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover.src}
            alt={cover.alt}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
            <Expand className="h-8 w-8 text-white opacity-0 transition group-hover:opacity-100" />
          </span>
        </button>

        {isSample && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-3">
            <p className="text-[11px] font-medium uppercase tracking-wide text-amber-300">
              Sample photo — replace
            </p>
          </div>
        )}

        {hasMultiple && (
          <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
            {coverIndex + 1} / {photos.length}
          </span>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {photos.map((photo, i) => (
            <button
              key={photo.src + i}
              type="button"
              onClick={() => {
                setCoverIndex(i);
                open(i);
              }}
              aria-label={`View photo ${i + 1} of ${photos.length}`}
              className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === coverIndex ? "border-amber-500" : "border-slate-200"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onMouseDown={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  manualNav(showPrev);
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  manualNav(showNext);
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          {/* Clicking the photo itself also closes — only the controls above opt out. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />

          {hasMultiple && (
            <div
              onMouseDown={(e) => e.stopPropagation()}
              className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white"
            >
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="flex items-center"
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
              </button>
              <span>
                {openIndex + 1} / {photos.length}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
