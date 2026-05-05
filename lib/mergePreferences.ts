import { UserPreferences } from "@/types/preferences";

export function mergePreferences(
  current: UserPreferences,
  incoming: UserPreferences
): UserPreferences {
  return {
    mood: Array.from(new Set([...current.mood, ...incoming.mood])),

    occasion: incoming.occasion ?? current.occasion,
    season: incoming.season ?? current.season,

    notesLiked: Array.from(
      new Set([
        ...current.notesLiked.filter(
          (note) => !incoming.notesDisliked.includes(note)
        ),
        ...incoming.notesLiked,
      ])
    ),

    notesDisliked: Array.from(
      new Set([...current.notesDisliked, ...incoming.notesDisliked])
    ),

    priceBand: incoming.priceBand ?? current.priceBand,
    projection: incoming.projection ?? current.projection,
    longevity: incoming.longevity ?? current.longevity,
    genderPreference: incoming.genderPreference ?? current.genderPreference,
  };
}