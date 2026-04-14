import { UserPreferences } from "@/types/preferences";

const NOTE_KEYWORDS = [
  "vanilla",
  "cardamom",
  "vetiver",
  "bergamot",
  "pepper",
  "lavender",
  "tobacco",
  "rum",
  "amber",
  "iris",
  "neroli",
  "sandalwood",
  "cinnamon",
  "patchouli",
  "violet",
  "ambroxan",
  "marine notes"
];

const MOOD_KEYWORDS = [
  "sexy",
  "clean",
  "confident",
  "warm",
  "soft",
  "fresh",
  "professional",
  "cozy",
  "rich",
  "elegant",
  "minimal",
  "intimate",
  "bold",
  "smooth"
];

const OCCASION_KEYWORDS = [
  "day",
  "evening",
  "date",
  "work",
  "formal",
  "casual",
  "special"
];

const SEASON_KEYWORDS = ["spring", "summer", "autumn", "winter"];

const PROJECTION_KEYWORDS = ["soft", "moderate", "strong"];
const LONGEVITY_KEYWORDS = ["low", "medium", "high"];
const PRICE_KEYWORDS = ["budget", "mid", "luxury"];
const GENDER_KEYWORDS = ["masculine", "feminine", "unisex"];

function findKeywords(text: string, keywords: string[]) {
  return keywords.filter((keyword) => text.includes(keyword));
}

export function extractPreferences(input: string): UserPreferences {
  const text = input.toLowerCase();

  const notesLiked = findKeywords(text, NOTE_KEYWORDS);
  const mood = findKeywords(text, MOOD_KEYWORDS);
  const occasion = OCCASION_KEYWORDS.find((keyword) => text.includes(keyword));
  const season = SEASON_KEYWORDS.find((keyword) => text.includes(keyword));
  const projection = PROJECTION_KEYWORDS.find((keyword) => text.includes(keyword)) as
    | "soft"
    | "moderate"
    | "strong"
    | undefined;
  const longevity = LONGEVITY_KEYWORDS.find((keyword) => text.includes(keyword)) as
    | "low"
    | "medium"
    | "high"
    | undefined;
  const priceBand = PRICE_KEYWORDS.find((keyword) => text.includes(keyword)) as
    | "budget"
    | "mid"
    | "luxury"
    | undefined;
  const genderPreference = GENDER_KEYWORDS.find((keyword) =>
    text.includes(keyword)
  ) as "masculine" | "feminine" | "unisex" | undefined;

  const notesDisliked: string[] = [];

  return {
    mood,
    occasion,
    season,
    notesLiked,
    notesDisliked,
    priceBand,
    projection,
    longevity,
    genderPreference,
  };
}