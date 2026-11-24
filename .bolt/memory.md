# Project memory

## Product intent & audience

- Personal/portfolio-style site with a contact form for visitors to send messages.
- Production-oriented; expected to be deployed on a hosting platform that injects Supabase credentials at build/deploy time.

## Brand personality & voice

- Friendly, clear, user-facing communication; fallback messaging speaks directly to visitors.

## Visual design & UX direction

- Stack: Vite + React (JSX), Tailwind CSS, lucide-react icons; `@/` path alias maps to `src/`.
- Contact form surfaces a clear fallback message (email-direct prompt) when backend config is missing instead of failing silently.

## Decisions, constraints & rationale

- Supabase used as backend for contact messages; env vars `SUPABASE_URL` and `SUPABASE_ANON_KEY` are injected via Vite (VITE-prefixed) at build time by the hosting platform.
- Local dev may lack these vars; app must handle missing config gracefully.
- `contact_messages` table: public role restricted to INSERT only; SELECT/UPDATE/DELETE removed to prevent unauthorized access. RLS enabled.
- Admin/owner read access intended through secure admin side, not public grants.
- No additional UI/icon/theme packages beyond what the template provides.

## Open questions & assumptions

- Exact Supabase project URL and anon key are not stored in memory; assumed provided by hosting environment at deploy.
- Admin-side access path for reading messages is referenced but not yet detailed.
- Full scope of pages/features beyond contact form is not yet known.