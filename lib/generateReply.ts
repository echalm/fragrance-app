import { UserPreferences } from "@/types/preferences";

export function generateAssistantReply(prefs: UserPreferences): string {
  if (prefs.notesDisliked.length > 0) {
    return `Understood — I’ll avoid notes like ${prefs.notesDisliked.join(
      ", "
    )} and refine your options accordingly.`;
  }

  if (prefs.notesLiked.length > 0) {
    return `Great choice — I’ll focus on notes like ${prefs.notesLiked.join(
      ", "
    )} and refine your recommendations.`;
  }

  if (prefs.mood.length > 0) {
    return `Got it — I’ll refine your results around a ${prefs.mood.join(
      ", "
    )} style.`;
  }

  return "I’ve updated your preferences and refined your recommendations.";
}