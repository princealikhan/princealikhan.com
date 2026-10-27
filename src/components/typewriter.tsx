"use client";

import { useEffect, useState, type ReactNode } from "react";

export type Line = { text: string; node?: ReactNode };

const PAUSE = 12; // ticks between lines
const TICK = 14; // ms per character

/* Types `lines` character by character, once, on mount. Each line reserves its
   final height up front (invisible copy) so nothing shifts while typing. */
export function Typewriter({ lines }: { lines: Line[] }) {
  const total = lines.reduce((n, l) => n + l.text.length + PAUSE, 0);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(total);
      return;
    }
    const id = window.setInterval(() => {
      setN((c) => {
        if (c >= total) window.clearInterval(id);
        return Math.min(total, c + 1);
      });
    }, TICK);
    return () => window.clearInterval(id);
  }, [total]);

  // which line the cursor sits on: the last line that has started
  let budget = n;
  let cursorAt = 0;
  lines.forEach((l, i) => {
    if (budget > 0) cursorAt = i;
    budget -= l.text.length + PAUSE;
  });

  budget = n;
  return (
    <div>
      {lines.map((l, i) => {
        const shown = Math.max(0, Math.min(l.text.length, budget));
        const complete = budget >= l.text.length;
        budget -= l.text.length + PAUSE;
        return (
          <div key={i} className="relative whitespace-pre-wrap">
            <span className="sr-only">{l.text}</span>
            <span className="invisible" aria-hidden="true">
              {l.text}
            </span>
            <span className={`absolute inset-0 ${i === cursorAt ? "cursor" : ""}`} aria-hidden="true">
              {complete ? (l.node ?? l.text) : l.text.slice(0, shown)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
