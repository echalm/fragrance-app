"use client";

import { useMemo, useState } from "react";
import { fragrances } from "@/data/fragrances";
import { extractPreferences } from "@/lib/extractPreferences";
import { recommendFragrances } from "@/lib/recommend";
import ChatWindow from "@/components/ChatWindow";
import PreferenceSummary from "@/components/PreferenceSummary";
import FragranceCard from "@/components/FragranceCard";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Tell me the kind of fragrance you want. You can describe a mood, occasion, season, or notes you like.",
    },
  ]);

  const [input, setInput] = useState("");

  const latestUserMessage =
    [...messages].reverse().find((message) => message.role === "user")?.content ?? "";

  const preferences = useMemo(() => {
    return extractPreferences(latestUserMessage);
  }, [latestUserMessage]);

  const recommendations = useMemo(() => {
    if (!latestUserMessage.trim()) {
      return [];
    }

    return recommendFragrances(fragrances, preferences);
  }, [latestUserMessage, preferences]);

  function handleSendMessage() {
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Got it. I’ve refined your preferences and selected some fragrances that fit the vibe you described.",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900">
            Scent Search
          </h1>
          <p className="mb-6 text-sm text-neutral-600">
            Describe the feeling, occasion, or notes you want, and the app will
            refine a shortlist for you.
          </p>

          <ChatWindow
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSend={handleSendMessage}
          />
        </section>

        <aside className="space-y-6">
          <PreferenceSummary preferences={preferences} />

          <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-neutral-900">
                Recommendations
              </h2>
              <p className="text-sm text-neutral-600">
                A refined shortlist based on your latest message.
              </p>
            </div>

            <div className="space-y-4">
              {recommendations.length === 0 ? (
                <p className="text-sm text-neutral-500">
                  Try describing:
                  <br />
                  • a mood (e.g. clean, sexy, cozy)
                  <br />
                  • notes you like (e.g. vanilla, citrus, woods)
                  <br />
                  • when you’ll wear it (e.g. work, date night)
                </p>
              ) : (
                recommendations.map((fragrance) => (
                  <FragranceCard key={fragrance.id} fragrance={fragrance} />
                ))
              )}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}