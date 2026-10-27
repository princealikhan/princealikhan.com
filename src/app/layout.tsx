import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans, Silkscreen } from "next/font/google";
import { CrtToggle } from "@/components/crt-toggle";
import { Eggs } from "@/components/eggs";
import { PixelIcon, ext } from "@/components/retro";
import { site } from "@/data/site";
import "./globals.css";

const pixel = Silkscreen({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });
const mono = IBM_Plex_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });
const sans = IBM_Plex_Sans({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.bio,
  openGraph: { title: site.name, description: site.bio, url: site.url, siteName: site.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.bio, creator: `@${site.handle}` },
  robots: { index: true, follow: true },
};

const ticker = ["uptime 12+ yrs", site.location, "building deepsmith.ai", "type help in now.sh"].join("  ·  ") + "  ·  ";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.variable} ${mono.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Eggs />
        <header className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-4 px-4 py-4 font-mono text-sm">
          <Link href="/" className="font-bold">
            {site.name}
          </Link>
          <nav className="flex gap-4" aria-label="primary">
            <a href={site.links.x} {...ext}>
              x
            </a>
            <a href={site.links.linkedin} {...ext}>
              linkedin
            </a>
            <CrtToggle />
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mt-16 border-t-2 border-current">
          <div className="marquee border-b-2 border-current py-1 font-mono text-xs" aria-hidden="true">
            <div className="marquee-track">
              <span>{ticker}</span>
              <span>{ticker}</span>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[960px] flex-wrap items-center justify-between gap-4 px-4 py-6 font-mono text-sm">
            <div className="flex gap-5">
              <a href={site.links.x} {...ext} className="inline-flex items-center gap-2">
                <PixelIcon name="x" />x
              </a>
              <a href={site.links.linkedin} {...ext} className="inline-flex items-center gap-2">
                <PixelIcon name="linkedin" />
                linkedin
              </a>
              <a href={site.links.github} {...ext} className="inline-flex items-center gap-2">
                <PixelIcon name="github" />
                github
              </a>
            </div>
            <span>
              © {new Date().getFullYear()} · {site.location}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
