# princealikhan.com

Next.js 14 + Tailwind. No other runtime deps.

```bash
pnpm install
pnpm dev
```

All content lives in `src/data/site.ts`. The window / button / icon pieces are in `src/components/retro.tsx`; the design tokens and motion are in `src/app/globals.css`. `public/og.png` is the share image; it was rendered from the readme window and needs a re-render if the name or bio changes.

`pnpm build` writes a static site to `out/`. `pnpm deploy` ships it to Vercel from this machine.
