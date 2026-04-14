import { Fragrance } from "@/types/fragrance";
import { UserPreferences } from "@/types/preferences";

export function recommendFragrances(
  fragrances: Fragrance[],
  preferences: UserPreferences
): Fragrance[] {
  const scored = fragrances.map((fragrance) => {
    let score = 0;

    const fragranceNotes = fragrance.notes.map((note) => note.toLowerCase());
    const fragranceOccasions = fragrance.occasion.map((item) => item.toLowerCase());
    const fragranceSeasons = fragrance.season.map((item) => item.toLowerCase());
    const fragranceTags = fragrance.tags.map((item) => item.toLowerCase());

    for (const note of preferences.notesLiked) {
      if (fragranceNotes.includes(note.toLowerCase())) {
        score += 3;
      }
    }

    for (const note of preferences.notesDisliked) {
      if (fragranceNotes.includes(note.toLowerCase())) {
        score -= 4;
      }
    }

    if (
      preferences.occasion &&
      fragranceOccasions.includes(preferences.occasion.toLowerCase())
    ) {
      score += 2;
    }

    if (
      preferences.season &&
      fragranceSeasons.includes(preferences.season.toLowerCase())
    ) {
      score += 2;
    }

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
      if (fragranceTags.includes(mood.toLowerCase())) {
        score += 1;
      }
    }

    return { fragrance, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.fragrance);
}