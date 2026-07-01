"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setReply(data.reply);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-10">
      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold text-blue-500 text-center">
          BasketVision AI
        </h1>

        <p className="text-center mt-4 text-slate-400">
          Basketball Analytics Assistant
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about basketball..."
          className="w-full mt-10 rounded-xl bg-slate-800 p-4 h-40"
        />

        <button
          onClick={sendMessage}
          className="mt-4 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        <div className="mt-8 rounded-xl bg-slate-900 p-6 min-h-[150px] whitespace-pre-wrap">
          {reply}
        </div>

      </div>
    </main>
  );
}