"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/* Header switch for CRT scanlines. The konami code and the `crt` terminal
   command flip the same <html data-crt> attribute; the switch watches it. */
export function CrtToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setOn(html.hasAttribute("data-crt"));
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ["data-crt"] });
    sync();

    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      i = e.key === KONAMI[i] ? i + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (i === KONAMI.length) {
        i = 0;
        html.toggleAttribute("data-crt");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      mo.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <button
      type="button"
      className="crt-toggle"
      aria-pressed={on}
      title="scanlines (or ↑↑↓↓←→←→ba)"
      onClick={() => document.documentElement.toggleAttribute("data-crt")}
    >
      crt:{on ? "on" : "off"}
    </button>
  );
}
