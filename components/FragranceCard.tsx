import { Fragrance } from "@/types/fragrance";

interface FragranceCardProps {
  fragrance: Fragrance;
}

function generateMatchReason(fragrance: Fragrance) {
  return `This fragrance aligns with your preferences through its ${fragrance.tags
    .slice(0, 2)
    .join(", ")} character, supported by notes like ${fragrance.notes
    .slice(0, 2)
    .join(" and ")}. It works particularly well for ${fragrance.occasion.join(
    ", "
  )} settings.`;
}

export default function FragranceCard({ fragrance }: FragranceCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-neutral-900">
          {fragrance.name}
        </h3>
        <p className="text-sm text-neutral-600">{fragrance.brand}</p>
      </div>

      <p className="mb-4 text-sm leading-6 text-neutral-700">
      {generateMatchReason(fragrance)}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {fragrance.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-2 text-sm text-neutral-700">
        <p>
          <span className="font-medium text-neutral-900">Notes:</span>{" "}
          {fragrance.notes.join(", ")}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Best for:</span>{" "}
          {fragrance.occasion.join(", ")}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Season:</span>{" "}
          {fragrance.season.join(", ")}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Projection:</span>{" "}
          {fragrance.projection}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Longevity:</span>{" "}
          {fragrance.longevity}
        </p>
        <p>
          <span className="font-medium text-neutral-900">Price band:</span>{" "}
          {fragrance.priceBand}
        </p>
      </div>
    </article>
  );
}