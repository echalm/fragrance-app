import { UserPreferences } from "@/types/preferences";

interface PreferenceSummaryProps {
  preferences: UserPreferences;
}

export default function PreferenceSummary({
  preferences,
}: PreferenceSummaryProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          Preference Summary
        </h2>
        <p className="text-sm text-neutral-600">
          Extracted from your latest message.
        </p>
      </div>

      <div className="space-y-3 text-sm text-neutral-700">
        <PreferenceRow label="Mood" value={preferences.mood.join(", ")} />
        <PreferenceRow label="Occasion" value={preferences.occasion} />
        <PreferenceRow label="Season" value={preferences.season} />
        <PreferenceRow
          label="Liked notes"
          value={preferences.notesLiked.join(", ")}
        />
        <PreferenceRow
          label="Disliked notes"
          value={preferences.notesDisliked.join(", ")}
        />
        <PreferenceRow label="Projection" value={preferences.projection} />
        <PreferenceRow label="Longevity" value={preferences.longevity} />
        <PreferenceRow label="Price band" value={preferences.priceBand} />
        <PreferenceRow
          label="Gender preference"
          value={preferences.genderPreference}
        />
      </div>
    </section>
  );
}

interface PreferenceRowProps {
  label: string;
  value?: string;
}

function PreferenceRow({ label, value }: PreferenceRowProps) {
  return (
    <div className="rounded-2xl bg-neutral-50 px-4 py-3">
      <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
        {label}
      </p>
      <p className="text-sm text-neutral-800">{value || "Not specified"}</p>
    </div>
  );
}