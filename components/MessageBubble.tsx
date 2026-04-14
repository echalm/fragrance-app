interface MessageBubbleProps {
  role: "assistant" | "user";
  content: string;
}

export default function MessageBubble({
  role,
  content,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isUser
            ? "bg-neutral-900 text-white"
            : "border border-neutral-200 bg-white text-neutral-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
}