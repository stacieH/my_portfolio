# Harlene Jaramillos — Portfolio

Personal portfolio of Harlene T. Jaramillos, Front-End Developer and Team Lead. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Sakura theme with light ("Hanami") and dark ("Yozakura") modes.

## Features

- One-page home: hero, experience timeline (including on-the-job training), work domains, skills, personal projects, certifications, education, contact
- Project detail pages at `/projects/[slug]`, generated from content
- Light and dark themes: follows the system setting, remembers the visitor's choice, no flash on load
- SEO: page metadata, canonical URLs, generated Open Graph images, `sitemap.xml`, `robots.txt`, JSON-LD `Person` data
- Accessible: skip link, semantic landmarks, labeled external links, visible focus, reduced-motion support
- Fully static: every route prerenders at build time

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
cp .env.example .env    # then edit the values (see below)
npm run dev             # http://localhost:3000
```

## Scripts

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build (all routes prerender)
npm run start   # serve the production build
npm run lint    # ESLint
```

Type check: `npx next typegen && npx tsc --noEmit`

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `CONTACT_EMAIL` | Email shown in hero, contact section, and JSON-LD. Leave empty to use the default. | `stacie.harlene@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for canonical links, sitemap, robots, Open Graph. Must be set in the build environment before `npm run build` (inlined at build time); otherwise all absolute URLs point to localhost. | `http://localhost:3000` |

## Editing content

All text lives in typed modules under `content/` (types in `content/types.ts`):

| File | Content |
|---|---|
| `content/profile.ts` | name, title, summary, stats, links, education, photo |
| `content/experience.ts` | job history and on-the-job training |
| `content/work.ts` | work domain cards |
| `content/skills.ts` | skill groups |
| `content/projects.ts` | personal projects (each gets `/projects/[slug]`) |
| `content/certifications.ts` | learning paths, certifications, courses |

Notes:

- **Experience:** an entry with an empty `bullets` array shows only its role, company, and dates.
- **Work cards:** a card with an empty `stack` array shows no technology tags.
- **Projects:** add an entry to `content/projects.ts` and put its screenshot in `public/projects/`. The detail page, Open Graph image, and sitemap entry are generated automatically.

## Theme

Colors are CSS variables in `app/globals.css`, mapped to Tailwind utilities (`bg-bg`, `text-text`, `text-accent`, `bg-sakura`, and so on). Use these tokens for colors instead of the `dark:` variant, so the no-JavaScript dark fallback keeps working. An inline script in `components/layout/theme-script.tsx` applies the saved or system theme before first paint.

The falling sakura petals in the hero are currently turned off. The component is still in `components/ui/petals.tsx`; to turn them back on, import `Petals` in `components/sections/hero.tsx` and render `<Petals />` inside the hero `<section>`.

## Deployment

1. Set `NEXT_PUBLIC_SITE_URL` (and optionally `CONTACT_EMAIL`) in the hosting provider's build environment.
2. Make sure `public/profile.jpg` and `public/projects/*.png` are committed; the hero, project pages, and the root Open Graph image need them.
3. Run `npm run build`. The output lists every route as static (○) or SSG (●).

## Structure

```
app/            routes, metadata files (Open Graph images, sitemap, robots), global styles
components/     layout (header, footer, theme), sections (home), ui (primitives, icons)
content/        typed site content
lib/            site config, navigation, JSON-LD
public/         profile photo, project screenshots
```

## Private files

Resume `.docx` files in the project root are ignored by git (`*.docx` in `.gitignore`) because they contain personal details. Keep them out of `public/`.

## Working with AI coding agents

This project uses Next.js 16, which has breaking changes from earlier versions. `AGENTS.md` tells agents to read the version-matched docs in `node_modules/next/dist/docs/` before writing code.
