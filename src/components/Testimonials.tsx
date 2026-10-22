import { Star } from "lucide-react";

const placeholderReviews = [
  {
    quote:
      "Placeholder review — replace with a real quote from Google, Checkatrade or Trustpilot once you have reviews to show.",
    name: "Customer name",
    project: "Project type, Town",
  },
  {
    quote:
      "Placeholder review — swap this for genuine feedback from a past client about communication, tidiness and finish quality.",
    name: "Customer name",
    project: "Project type, Town",
  },
  {
    quote:
      "Placeholder review — three or four short, specific quotes build far more trust than generic marketing copy.",
    name: "Customer name",
    project: "Project type, Town",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What our customers say
          </h2>
          <p className="mt-3 text-slate-600">
            Replace these placeholders with real reviews from your customers
            before launch.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {placeholderReviews.map((review, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6"
            >
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-auto text-sm font-semibold text-slate-900">
                {review.name}
                <span className="block text-xs font-normal text-slate-500">
                  {review.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
