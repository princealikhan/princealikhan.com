"use client";

import { useCallback, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Typewriter, type Line } from "./typewriter";
import { site } from "@/data/site";

type Entry = { cmd: string; out: ReactNode[] };
type Fx = { shake(): void; theme(t?: string): void; clear(): void; flip(): void; crt(): void; rollup(): void; history(): string[] };

function uptime() {
  const start = new Date(site.firstShipped);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  return `${Math.floor(months / 12)} years, ${months % 12} months since the first product shipped`;
}

const link = (href: string, text = href) => (
  <a key={href} href={href} target="_blank" rel="noreferrer">
    {text}
  </a>
);

// deterministic fake git hash per company
const hash = (s: string) => Array.from(s).reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7).toString(16).padStart(7, "0").slice(0, 7);

const OPEN: Record<string, string> = {
  x: site.links.x,
  twitter: site.links.x,
  linkedin: site.links.linkedin,
  github: site.links.github,
  deepsmith: "https://deepsmith.ai",
  "deepsmith.ai": "https://deepsmith.ai",
};

const FORTUNES = [
  "ship it. you can apologise in the changelog.",
  "the demo always works until the customer touches it.",
  "every pivot looks obvious from the other side.",
  "users don't read. design for that.",
  "a feature nobody asked for is a bug with ambition.",
  "if it hurts, do it more often. except migrations.",
  "the best roadmap is a list of things you stopped doing.",
  "sleep is a feature. most founders ship without it.",
];

const cowsay = (text: string) => {
  const t = text || "moo";
  const bar = "-".repeat(t.length + 2);
  return [` _${bar}_`, `< ${t} >`, ` -${bar}-`, "        \\   ^__^", "         \\  (oo)\\_______", "            (__)\\       )\\/\\", "                ||----w |", "                ||     ||"];
};

const TRAIN = ["     _____", "    |[]|  \\___", "    |__|______|", "     o o   o o", "choo choo. you meant ls."];

function run(input: string, fx: Fx): ReactNode[] {
  const [cmd = "", ...rest] = input.trim().split(/\s+/);
  const arg = rest.join(" ");
  const nowLines = site.now.filter((n) => !n.hidden).map((n) => `${n.url} — ${n.line} [${n.status}]`);

  switch (cmd.toLowerCase()) {
    case "":
      return [];
    case "help":
      return [
        "files:  ls [dir]  cat <file>  tree  whoami  uptime  neofetch  history  clear",
        "links:  open <x|linkedin|github|deepsmith>  ping x",
        "looks:  theme <dark|light|system>  crt  flip  rollup",
        "fun:    fact  facts  cowsay <text>  fortune  sl  git log  cheers  secret",
      ];
    case "ls":
      if (/^work/i.test(arg)) return site.work.map((w) => `${w.company}/  ${w.start}–${w.end}`);
      if (/^ls?\/?$/i.test(arg)) return [...site.ls, `(${site.ls.length} of them. still shipping.)`];
      if (/^skills/i.test(arg)) return site.skills.map((g) => `${g.dir}/  ${g.items.join(", ")}`);
      return ["readme.txt  now.txt  work/  skills/  Ls/"];
    case "tree":
      return [
        ".",
        "├── readme.txt",
        "├── now.txt",
        "├── work/",
        ...site.work.map((w, i) => `│   ${i === site.work.length - 1 ? "└── " : "├── "}${w.company}`),
        "├── skills/",
        ...site.skills.map((g, i) => `│   ${i === site.skills.length - 1 ? "└── " : "├── "}${g.dir}/`),
        "└── Ls/",
        ...site.ls.map((l, i) => `    ${i === site.ls.length - 1 ? "└── " : "├── "}${l}`),
      ].filter(Boolean);
    case "cat":
      if (/^now/i.test(arg)) return nowLines;
      if (/^readme/i.test(arg)) return [site.bio];
      if (/^ls/i.test(arg)) return site.ls;
      if (/motd/i.test(arg)) return ["welcome to prince os. type help. don't type rm."];
      return [`cat: ${arg || "<file>"}: no such file`];
    case "now":
      return nowLines;
    case "whoami":
      return [`${site.name.toLowerCase()} · co-founder, product · ${site.location}`];
    case "pwd":
      return ["/home/prince"];
    case "cd":
      return ["cd: there is only one screen."];
    case "uptime":
      return [uptime()];
    case "uname":
      return ["prince os 1.0 · 1-bit · blue on paper · 3 packages"];
    case "date":
      return [new Date().toString()];
    case "echo":
      return [arg];
    case "yes":
      return [Array(12).fill(arg || "y").join(" "), "(ok, that's enough.)"];
    case "history":
      return fx.history().map((h, i) => `${String(i + 1).padStart(3)}  ${h}`);
    case "neofetch":
      return [
        "prince@princealikhan.com",
        "------------------------",
        "os:         prince os 1.0 (1-bit)",
        `host:       ${site.location}`,
        `uptime:     ${uptime()}`,
        "shell:      now.sh",
        "packages:   3 (next, react, react-dom)",
        "resolution: blue on paper",
        "cpu:        product + engineering",
        "gpu:        halftone",
      ];
    case "git":
      if (/^log/.test(arg)) return site.work.map((w) => `${hash(w.company)} ${w.company} · ${w.role} (${w.start}–${w.end})`);
      if (/^status/.test(arg)) return ["on branch main", "nothing to commit, shipping clean"];
      if (/^push/.test(arg)) return ["everything up-to-date. (prince commits himself.)"];
      if (/^blame/.test(arg)) return ["prince, every line."];
      return ["usage: git <log|status|push|blame>"];
    case "open": {
      const href = OPEN[arg.toLowerCase()];
      if (!href) return [`open: ${arg || "<what>"}: unknown. try: open x`];
      window.open(href, "_blank", "noreferrer");
      return [`opening ${href}`];
    }
    case "ping":
      return [`PING ${arg || "x.com"}: 64 bytes from @${site.handle}: time=1ms`, "pong."];
    case "theme":
      fx.theme(arg.toLowerCase());
      return [`theme: ${arg || "system"}`];
    case "dark":
    case "light":
      fx.theme(cmd.toLowerCase());
      return [`theme: ${cmd}`];
    case "crt":
      fx.crt();
      return ["crt toggled. (also: the switch top right, or ↑↑↓↓←→←→ba)"];
    case "flip":
      fx.flip();
      return ["portrait flipped. (clicking it does the same.)"];
    case "rollup":
    case "shade":
      fx.rollup();
      return ["windows rolled. (click any title bar to do it by hand.)"];
    case "secret":
      return ["four more: click a title bar, click the portrait, leave the tab, visit a url that doesn't exist."];
    case "fact":
    case "fun":
    case "trivia":
      return [site.facts[Math.floor(Math.random() * site.facts.length)]];
    case "facts":
      return site.facts.map((f, i) => `${i + 1}. ${f}`);
    case "cowsay":
      return cowsay(arg);
    case "fortune":
      return [FORTUNES[Math.floor(Math.random() * FORTUNES.length)]];
    case "sl":
      return TRAIN;
    case "coffee":
    case "chai":
      return ["not a coffee person. try: cheers"];
    case "cheers":
    case "drink":
    case "beer":
    case "whisky":
    case "whiskey":
    case "bar":
      return [" ( )  ( )", " |_|  |_|   *clink*", `here's to the next one. (${uptime().split(" since")[0]} of this, mostly laughing.)`];
    case "sudo":
      return ["prince is not in the sudoers file. this incident will be reported."];
    case "rm":
      fx.shake();
      return ["nice try."];
    case "npm":
    case "pnpm":
    case "yarn":
    case "npx":
      return ["3 packages is enough."];
    case "clear":
      fx.clear();
      return [];
    case "exit":
    case "logout":
      return ["there is no exit. there is only x:", link(site.links.x)];
    case "hire":
    case "contact":
    case "email":
      return ["dms are open:", link(site.links.x)];
    case "hi":
    case "hello":
    case "hey":
      return ["hi. type help."];
    case "konami":
      return ["↑ ↑ ↓ ↓ ← → ← → b a"];
    case "man":
      return [`man ${arg || "man"}: what manual? try: help`];
    case "vim":
    case "vi":
    case "nano":
    case "emacs":
      return [`${cmd}: not installed. this is a website.`];
    default:
      return [`zsh: command not found: ${cmd}  (try: help)`];
  }
}

/* now.sh: types `lines`, then hands over a real prompt. */
export function Terminal({ lines }: { lines: Line[] }) {
  const [ready, setReady] = useState(false);
  const [history, setHistory] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const onDone = useCallback(() => setReady(true), []);

  const fx: Fx = {
    shake: () => {
      document.body.classList.add("shake");
      window.setTimeout(() => document.body.classList.remove("shake"), 400);
    },
    theme: (t) => {
      if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
      else delete document.documentElement.dataset.theme;
    },
    clear: () => setHistory([]),
    flip: () => document.querySelector<HTMLInputElement>(".flip input")?.click(),
    crt: () => document.documentElement.toggleAttribute("data-crt"),
    rollup: () => document.querySelectorAll<HTMLElement>(".window").forEach((w) => w.getAttribute("aria-label") !== "now.sh" && w.toggleAttribute("data-shaded")),
    history: () => history.map((h) => h.cmd),
  };

  function submit(e: FormEvent) {
    e.preventDefault();
    const out = run(value, fx);
    if (value.trim().toLowerCase() !== "clear") setHistory((h) => [...h, { cmd: value, out }].slice(-30)); // ponytail: 30 entries, no scrollback
    setValue("");
  }

  return (
    <div onClick={() => input.current?.focus()}>
      <Typewriter lines={lines} cursor={!ready} onDone={onDone} />
      {ready && (
        <>
          <div aria-live="polite">
            {history.map((h, i) => (
              <div key={i}>
                <div className="whitespace-pre-wrap">$ {h.cmd}</div>
                {h.out.map((o, j) => (
                  <div key={j} className="whitespace-pre-wrap">
                    {o}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="flex items-center">
            <span aria-hidden="true">$&nbsp;</span>
            <input
              ref={input}
              className="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="terminal command"
              placeholder="type help"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              style={{ width: `${value.length || 9}ch` }}
            />
            <span className="cursor" aria-hidden="true" />
          </form>
        </>
      )}
    </div>
  );
}
