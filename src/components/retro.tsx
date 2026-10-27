import type { CSSProperties, ReactNode } from "react";
import { TitleBar } from "./titlebar";

export const ext = { target: "_blank", rel: "noreferrer" } as const;

export function Window({
  title,
  dark,
  className = "",
  bodyClass = "",
  style,
  children,
}: {
  title: string;
  dark?: boolean;
  className?: string;
  bodyClass?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section className={`window ${dark ? "terminal" : ""} ${className}`} style={style} aria-label={title}>
      <TitleBar title={title} dark={dark} />
      <div className="shade">
        <div className="window-body">
          <div className={`window-pad ${bodyClass}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Button({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn" {...(href.startsWith("http") ? ext : {})}>
      {children}
    </a>
  );
}

/* 1-bit 8×8 glyphs. "x" = pixel on. */
const GLYPHS = {
  x: ["x......x", ".x....x.", "..x..x..", "...xx...", "...xx...", "..x..x..", ".x....x.", "x......x"],
  linkedin: ["xx......", "........", "xx..xxx.", "xx..x..x", "xx..x..x", "xx..x..x", "xx..x..x", "........"],
  github: ["..xxxx..", ".xxxxxx.", "xx.xx.xx", "xxxxxxxx", "x.xxxx.x", ".xxxxxx.", "..x..x..", "..x..x.."],
  folder: ["xxx.....", "x..xxxx.", "x......x", "x......x", "x......x", "x......x", "xxxxxxxx", "........"],
  bomb: ["......x.", ".....x..", "....x...", "..xxxx..", ".xxxxxx.", "xxxxxxxx", "xxxxxxxx", ".xxxxxx."],
} as const;

export function PixelIcon({ name, size = 16 }: { name: keyof typeof GLYPHS; size?: number }) {
  return (
    <svg viewBox="0 0 8 8" width={size} height={size} shapeRendering="crispEdges" fill="currentColor" aria-hidden="true">
      {GLYPHS[name].flatMap((row, y) =>
        row.split("").map((c, x) => (c === "x" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null)),
      )}
    </svg>
  );
}
