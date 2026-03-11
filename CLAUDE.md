# NeighbourhoodNow.ca

## Stack
- Next.js 15 (App Router) with TypeScript
- next-intl for i18n (locales in src/i18n/)
- Tailwind CSS 3 for styling
- Radix UI primitives for interactive components
- CVA (class-variance-authority) for component variants
- Zod + react-hook-form for form validation
- Deployed on Vercel

## Project Structure
- `src/app/[locale]/` — pages (locale-based routing)
- `src/components/ui/` — reusable UI components (Button, SectionWrapper, etc.)
- `src/components/layout/` — layout components (Navbar, Footer, LocaleSwitcher)
- `src/components/home/` — homepage sections
- `src/data/` — static data files (team, clients)
- `src/lib/` — utilities (content loading, cn helper)
- `src/i18n/` — internationalization config
- GitHub Issues — track bugs and feature requests (`gh issue list`)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (use to verify changes)
- `npm run lint` — ESLint
- `npm run test` — run Playwright e2e tests (chromium + mobile)
- `npm run test:ui` — Playwright interactive UI mode
- `tests/` — e2e test files (homepage, i18n, locale-switcher, navigation, accessibility)

## Conventions
- Use Tailwind for all styling, no CSS modules
- Use Radix UI primitives for interactive components
- Use CVA for component variants
- Always support both locales when adding user-facing text
- Run `npm run build` before committing to catch errors

## Workflow (TDD)
1. Read the relevant GitHub issue before starting work
2. Write failing tests FIRST based on requirements
3. Implement code until all tests pass and requirements are met
4. Clear `.next` cache (`rm -rf .next`), run `npm run build`, then run `npm run test` to verify all e2e tests pass
5. Update the GitHub issue with a comment summarizing what was done
