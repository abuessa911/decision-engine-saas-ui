"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback: text }),
    });
    setText("");
    alert("Saved");
  }

  return (
    <form onSubmit={submit}>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <br />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

