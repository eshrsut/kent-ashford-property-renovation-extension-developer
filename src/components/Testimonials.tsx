import { Star } from "lucide-react";

// These are EXAMPLE reviews for layout purposes only — not real customer
// feedback. Each is tagged "Example review" on the page itself so nothing
// here could be mistaken for a genuine testimonial if this goes live
// before real reviews are added (fabricated reviews presented as genuine
// are against UK consumer protection rules, so this stays labelled).
const exampleReviews = [
  {
    quote:
      "They managed the whole extension from the first site visit to the final coat of paint. Communication was spot on and they left the place spotless every day.",
    name: "David Carter",
    project: "Rear extension, Ashford",
  },
  {
    quote:
      "Had the loft converted into a bedroom and ensuite. The team was tidy, turned up when they said they would, and the price didn't move from the original quote.",
    name: "Sarah Whitfield",
    project: "Loft conversion, Canterbury",
  },
  {
    quote:
      "Full renovation of a Victorian terrace we'd just bought. They talked us through every decision and the finish quality was better than we expected.",
    name: "James Okafor",
    project: "Full renovation, Maidstone",
  },
  {
    quote:
      "Repainted the whole exterior after some render repairs. Neat edges, no mess on the patio, and they matched the colour exactly to what we asked for.",
    name: "Emily Hartley",
    project: "Exterior painting, Whitstable",
  },
  {
    quote:
      "New engineered oak flooring throughout the ground floor. Quick, clean job and they moved all the furniture back afterwards without being asked.",
    name: "Michael Osei",
    project: "Flooring, Bromley",
  },
  {
    quote:
      "Used them for a new build on a plot we'd held onto for years. Genuinely project-managed it — we only ever had one phone number to call.",
    name: "Lucy Fairweather",
    project: "New build home, Folkestone",
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
            Example reviews shown for layout only — swap these for real
            customer feedback (Google, Checkatrade, Trustpilot) before this
            site goes live.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {exampleReviews.map((review, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
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
