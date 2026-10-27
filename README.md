# princealikhan.com

Next.js 14 + Tailwind. No other runtime deps.

```bash
pnpm install
pnpm dev
```

All content lives in `src/data/site.ts`. The window / button / icon pieces are in `src/components/retro.tsx`; the design tokens and motion are in `src/app/globals.css`. The share image is rendered at build from `src/app/opengraph-image.tsx`, so it follows the name and bio.

`pnpm deploy` ships the project to Vercel from this machine (token in `.env`, no git integration).
