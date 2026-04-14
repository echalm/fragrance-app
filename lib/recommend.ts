import { Fragrance } from "@/types/fragrance";
import { UserPreferences } from "@/types/preferences";

//Recommendation algorithm
export function recommendFragrances(
  fragrances: Fragrance[],
  preferences: UserPreferences
): Fragrance[] {
  const scored = fragrances.map((fragrance) => {
    let score = 0; //Starting score

    for (const note of preferences.notesLiked) {
      if (fragrance.notes.map((n) => n.toLowerCase()).includes(note.toLowerCase())) {
        score += 3; //If liked, add 3
      }
    }

    for (const note of preferences.notesDisliked) {
      if (fragrance.notes.map((n) => n.toLowerCase()).includes(note.toLowerCase())) {
        score -= 4; //If disliked, remove 4
      }
    }

    if (
      preferences.occasion &&
      fragrance.occasion.map((o) => o.toLowerCase()).includes(preferences.occasion.toLowerCase())
    ) {
      score += 2; //If occasion and preference match, add 2
    }

    if (
      preferences.season &&
      fragrance.season.map((s) => s.toLowerCase()).includes(preferences.season.toLowerCase())
    ) {
      score += 2; //If preference and season match, add 2
    }

    //Continue this scoring logic for other attributes
    if (preferences.projection && fragrance.projection === preferences.projection) {
      score += 2;
    }

    if (preferences.priceBand && fragrance.priceBand === preferences.priceBand) {
      score += 2;
    }

    if (
      preferences.genderPreference &&
      fragrance.gender === preferences.genderPreference
    ) {
      score += 1;
    }

    for (const mood of preferences.mood) {
      if (fragrance.tags.map((t) => t.toLowerCase()).includes(mood.toLowerCase())) {
        score += 1;
      }
    }

    return { fragrance, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.fragrance);
}