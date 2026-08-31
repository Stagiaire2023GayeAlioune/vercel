"use client";

import { useEffect, useState } from "react";
import { typewriterTexts } from "@/lib/data";

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = typewriterTexts[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = full.slice(0, text.length + 1);
          setText(next);
          if (next === full) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          const next = full.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % typewriterTexts.length);
          }
        }
      },
      deleting ? 45 : 90
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <p className="mt-4 text-lg font-semibold text-indigo-600 md:text-xl">
      {text}
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-indigo-500 align-middle" />
    </p>
  );
}
