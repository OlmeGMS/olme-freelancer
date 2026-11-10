# Olme Marin — Portfolio Redesign

Bilingual, responsive portfolio built with **Next.js App Router**, **TypeScript**, **CSS**, and **Lucide icons**. The project is independent of the existing website; it does not contain private employer assets.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000/es/` or `/en/`.

## Production build

```bash
npm run lint
npm run build
```

Static files will be generated in `out/`.

## Deploy to GitHub Pages

The existing GitHub Pages repository uses `/my_portfolio/` as a base path. On macOS/Linux:

```bash
NEXT_PUBLIC_BASE_PATH=/my_portfolio npm run build
```

Publish the **contents** of `out/` to the GitHub Pages publishing branch/folder, or configure GitHub Actions to upload `out/` as a Pages artifact. With this setting the site routes are `/my_portfolio/es/` and `/my_portfolio/en/`. If deploying at the domain root, build without `NEXT_PUBLIC_BASE_PATH`.

**Important:** Next.js static export does not support a runtime server. The contact buttons use `mailto:` and require the visitor's configured email client.

## Customize before publishing

1. `src/lib/content.ts`: review all Spanish and English copy, project descriptions, dates, and technologies. Case studies are intentionally generalized and should be replaced with verifiable details.
2. `src/components/Portfolio.tsx`: replace the placeholder LinkedIn URL (`https://www.linkedin.com/`) with your actual profile. Confirm the GitHub URL and contact email.
3. Add approved project images or public demos if available. The current project art is CSS-only and does not imply any actual product screenshots.
4. Review the green availability indicator. Remove it if not accepting freelance work.
5. Update metadata and domain in `src/app/[locale]/layout.tsx` once you know the final URL.
6. The root layout sets `<html lang="es">` even on the English route; if strict language metadata is needed, refactor to locale-specific root layouts or an equivalent architecture. The content itself is fully bilingual.
7. Font loading uses Google Fonts CSS; add self-hosted fonts if offline availability or privacy requirements matter.

## Files

- `src/app/[locale]/page.tsx`: locale route
- `src/components/Portfolio.tsx`: complete responsive portfolio sections
- `src/lib/content.ts`: all ES/EN content
- `src/app/globals.css`: complete design system, responsive styles, animations
- `next.config.ts`: static export and optional GitHub Pages base path

## Notes

- Project cards are professional-experience examples, not verified public case studies.
- No contact form backend or analytics is included.
- No GSAP dependency is needed; lightweight CSS animation is used. GSAP can be added later for richer scroll interactions.
