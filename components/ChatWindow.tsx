"use client";

import MessageBubble from "@/components/MessageBubble";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

interface ChatWindowProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatWindow({
  messages,
  input,
  onInputChange,
  onSend,
}: ChatWindowProps) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="h-105 overflow-y-auto rounded-2xl bg-neutral-50 p-4">
        <div className="space-y-3">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-3">
        <textarea
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Example: I want something clean and professional for work, maybe iris or neroli."
          className="min-h-27.5 w-full resize-none rounded-xl border border-neutral-200 p-3 text-sm outline-none transition focus:border-neutral-400"
        />

        <div className="mt-3 flex justify-end">
          <button
            onClick={onSend}
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}