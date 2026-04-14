//Preference object
export interface UserPreferences {
  mood: string[];
  occasion?: string;
  season?: string;
  notesLiked: string[];
  notesDisliked: string[];
  priceBand?: "budget" | "mid" | "luxury";
  projection?: "soft" | "moderate" | "strong";
  longevity?: "low" | "medium" | "high";
  genderPreference?: "masculine" | "feminine" | "unisex";
}