"use client";

import { usePathname } from "next/navigation";
import { Button, PixelIcon, Window } from "@/components/retro";
import { site } from "@/data/site";

export default function NotFound() {
  const path = usePathname();
  return (
    <main className="mx-auto max-w-[600px] px-4 py-16">
      <Window title="system error" className="boot">
        <div className="flex gap-5">
          <div className="shrink-0 pt-1">
            <PixelIcon name="bomb" size={48} />
          </div>
          <div>
            <p className="font-mono text-sm">Sorry, a system error occurred.</p>
            <p className="mt-2">
              <span className="font-mono">{path}</span> could not be found. (error -43)
            </p>
            <p className="mt-2 font-mono text-sm">the old pages were deleted on purpose. everything lives on one screen now.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/">restart</Button>
              <Button href={site.links.x}>
                <PixelIcon name="x" />
                follow on x
              </Button>
            </div>
          </div>
        </div>
      </Window>
    </main>
  );
}
