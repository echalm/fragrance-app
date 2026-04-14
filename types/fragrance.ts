//Fragrance object
export interface Fragrance {
  id: string;
  name: string;
  brand: string;
  gender: "masculine" | "feminine" | "unisex";
  notes: string[];
  accords: string[];
  season: string[];
  occasion: string[];
  projection: "soft" | "moderate" | "strong";
  longevity: "low" | "medium" | "high";
  priceBand: "budget" | "mid" | "luxury";
  tags: string[];
  description: string;
}