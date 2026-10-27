import type { CSSProperties } from "react";
import Image from "next/image";
import { Button, PixelIcon, Window, ext } from "@/components/retro";
import { Terminal } from "@/components/terminal";
import type { Line } from "@/components/typewriter";
import { site } from "@/data/site";

const order = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Page() {
  const now = site.now.filter((n) => !n.hidden);
  const lines: Line[] = [
    { text: "$ cat now.txt" },
    ...now.map((n) => {
      const tail = ` — ${n.line} ${n.role}. [${n.status}]`;
      return {
        text: `> ${n.url}${tail}`,
        node: (
          <>
            {"> "}
            <a href={`https://${n.url}`} {...ext}>
              {n.url}
            </a>
            {tail}
          </>
        ),
      };
    }),
  ];

  return (
    <main className="pb-8">
      {/* hero: the page's one overlapping composition */}
      <section className="halftone py-10 sm:py-16" aria-label="intro">
        <div className="relative mx-auto max-w-[960px] px-4">
          <Window title="readme.txt" className="boot sm:mr-44" style={order(0)}>
            <h1 className="font-mono text-3xl font-bold leading-none sm:text-6xl">{site.name}</h1>
            <p className="mt-5 max-w-[560px] text-lg">{site.bio}</p>
            <p className="mt-4 font-mono text-sm">{site.proof.join(" · ")}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={site.links.x}>
                <PixelIcon name="x" />
                follow on x
              </Button>
              <Button href={site.links.linkedin}>
                <PixelIcon name="linkedin" />
                linkedin
              </Button>
            </div>
          </Window>
          <Window
            title="me.png"
            className="boot mt-6 w-44 sm:absolute sm:-top-8 sm:right-4 sm:mt-0 sm:w-52"
            bodyClass="!p-2"
            style={order(2)}
          >
            <label className="flip block cursor-pointer" title="flip">
              <input type="checkbox" className="sr-only" aria-label="flip the portrait" />
              <Image src="/me.jpg" alt={site.name} width={400} height={400} priority className="scan block w-full" />
            </label>
          </Window>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-[760px] space-y-10 px-4">
        <Window title="now.sh" dark className="boot" style={order(3)}>
          <Terminal lines={lines} />
          <div className="mt-5">
            <Button href={site.links.x}>
              <PixelIcon name="x" />
              follow the build on x
            </Button>
          </div>
        </Window>

        <Window title="work" className="reveal">
          <ol className="space-y-6">
            {site.work.map((w) => (
              <li key={w.company} className="reveal">
                <div className="font-mono text-sm">
                  {w.href ? (
                    <a href={w.href} {...ext}>
                      {w.company}
                    </a>
                  ) : (
                    w.company
                  )}
                  {` · ${w.role} · ${w.start}–${w.end}`}
                </div>
                <p className="mt-1">{w.line}</p>
              </li>
            ))}
          </ol>
        </Window>

        <Window title="skills.sh" dark className="reveal">
          <div>$ tree skills/</div>
          <div>skills/</div>
          {site.skills.map((g, i) => (
            <div key={g.dir} className="reveal grid sm:grid-cols-[20ch_1fr]">
              <span className="sm:pr-4">
                {i === site.skills.length - 1 ? "└── " : "├── "}
                {g.dir}/
              </span>
              <span className="pl-8 sm:pl-0">{g.items.join(", ")}</span>
            </div>
          ))}
          <div className="cursor">$ </div>
        </Window>
      </div>
    </main>
  );
}
