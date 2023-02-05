"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    if (!res.ok) {
      console.log(res);
    }
    const data = await res.json();
    router.refresh();
    console.log(data);
    setTitle("");
    setContent("");
  }
  return (
    <form onSubmit={submitPost}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
