# Neighbourhood Now — Project Memory

## Project Overview
- Corporate consulting website for Jesse Burcsik / Neighbourhood Now
- Domain: neighbourhoodnow.com (also owns .ca) — hosted on Vercel
- Supabase for dynamic content (case studies, contact form submissions)
- Domains on Rebel.ca

## Tech Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- next-intl for i18n: en (default) / fr / zh
- Supabase for DB (case studies, contact submissions)
- Vercel deployment

## Design
- Color palette: deep teal (brand-950 = #031a1a through brand-50) + gold accent (#c9a43c)
- Fonts: Inter (sans) + Playfair Display (display/headings)
- Tone: corporate, C-suite, government grant-winning jargon
- Jesse wanted: "boring as hell but trusted by the big boys" with a little flair

## Key Decisions
- NO Supabase — user prefers everything in git
- Case studies: MDX files in /content/case-studies/*.mdx, read via gray-matter + src/lib/content.ts
- Insights: MDX files in /content/insights/*.mdx, same pattern
- Contact form: Resend only (email notification, no DB storage)
- All pages are static — no runtime DB calls anywhere

## People / Content
- Jesse Burcsik — Founder & Principal Strategist (placeholder: Elmo image)
- Fabricated team: Dr. Margaret Chen PhD, Robert Thibodeau PMP, Priya Sharma MBA
- Fabricated clients: City of Calgary, Province of Ontario, BC Housing, EDC, CN Rail, Telus

## PRD Status
- PRD-001 (scaffolding): COMPLETE — builds clean, deploys to Vercel
- PRD-002 (design system components): TODO
- PRD-003 (home page): TODO
- PRD-004 (about page): TODO
- PRD-005 (services pages): TODO
- PRD-006 (case studies): TODO
- PRD-007 (contact form): TODO
- PRD-008 (i18n translations): Strings done, page content TODO
- PRD-009 (SEO/launch): TODO

## File Structure Notes
- src/app/[locale]/layout.tsx — locale-aware root layout
- src/i18n/routing.ts — locale config
- src/middleware.ts — next-intl locale routing
- messages/{en,fr,zh}.json — all translation strings
- src/lib/utils.ts — cn() helper
- src/lib/supabase.ts — Supabase client
