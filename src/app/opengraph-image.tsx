import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.bio}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0D2280";

// IBM Plex Mono Bold as TTF (an old UA makes Google Fonts serve TTF, which satori can read).
async function plexMono() {
  try {
    const css = await fetch("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700", {
      headers: { "User-Agent": "Mozilla/4.0" },
    }).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : undefined;
  } catch {
    return undefined;
  }
}

export default async function OG() {
  const font = await plexMono();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1636B8",
          backgroundImage: "radial-gradient(#2447E0 2.2px, transparent 2.6px)",
          backgroundSize: "14px 14px",
          fontFamily: "Plex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 980,
            border: `4px solid ${INK}`,
            boxShadow: `12px 12px 0 ${INK}`,
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              borderBottom: `4px solid ${INK}`,
              backgroundImage: `linear-gradient(to bottom, ${INK} 33%, #fff 33%)`,
              backgroundSize: "100% 6px",
            }}
          >
            <div style={{ display: "flex", backgroundColor: "#fff", padding: "4px 16px", fontSize: 22, color: INK }}>readme.txt</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "48px 56px", color: INK }}>
            <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1 }}>{site.name}</div>
            <div style={{ fontSize: 34, marginTop: 28, lineHeight: 1.35 }}>{site.bio}</div>
            <div style={{ fontSize: 26, marginTop: 36, color: "#2447E0" }}>{`princealikhan.com · @${site.handle} █`}</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "Plex", data: font, weight: 700, style: "normal" }] : [] },
  );
}
