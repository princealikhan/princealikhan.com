"use client";

import { useEffect } from "react";

/* Site-wide easter eggs: blinking tab title while away, console banner. (konami lives in crt-toggle.tsx) */
export function Eggs() {
  useEffect(() => {
    const title = document.title;
    let timer: number | undefined;
    const onVisibility = () => {
      window.clearInterval(timer);
      if (!document.hidden) {
        document.title = title;
        return;
      }
      let on = true;
      timer = window.setInterval(() => {
        document.title = `${on ? "█" : " "} you left a window open`;
        on = !on;
      }, 600);
    };

    document.addEventListener("visibilitychange", onVisibility);
    console.log(
      "%c prince os 1.0 ",
      "background:#0d2280;color:#fff;font-family:monospace;padding:4px 8px",
      "\n$ cat hello.txt\n> hi. next 14 + tailwind, 3 deps, no tracking.\n> the terminal on the page is real. try: help\n> x.com/PrinceAliKhan_",
    );
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearInterval(timer);
    };
  }, []);
  return null;
}
