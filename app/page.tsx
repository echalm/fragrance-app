import { fragrances } from "@/data/fragrances";
import { extractPreferences } from "@/lib/extractPreferences";
import { recommendFragrances } from "@/lib/recommend";

export default function Home() {
  const userInput =
    "I want something sexy and warm for evening wear with cardamom and vanilla";

  const preferences = extractPreferences(userInput);
  const results = recommendFragrances(fragrances, preferences);

  return (
    <main className="p-10">
      <h1 className="mb-4 text-2xl">User Input</h1>
      <p className="mb-6">{userInput}</p>

      <h2 className="mb-2 text-xl">Extracted Preferences</h2>
      <pre className="mb-6 rounded-lg bg-neutral-100 p-4 text-sm">
        {JSON.stringify(preferences, null, 2)}
      </pre>

      <h2 className="mb-2 text-xl">Recommendations</h2>
      {results.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        results.map((f) => (
          <div key={f.id} className="mb-3 rounded-lg border p-4">
            <p className="font-semibold">
              {f.name} - {f.brand}
            </p>
            <p className="text-sm text-neutral-600">{f.description}</p>
          </div>
        ))
      )}
    </main>
  );
}