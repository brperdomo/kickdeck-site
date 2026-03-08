# KickDeck

A Next.js marketing website for KickDeck — an AI-powered soccer tournament management SaaS platform.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + `class-variance-authority`
- **Animations**: Framer Motion
- **Forms**: react-hook-form + zod
- **Email**: Resend (contact form)
- **Icons**: lucide-react

## Project Structure

- `src/app/` — App Router pages and API routes
  - `api/contact/route.ts` — Contact form email handler (uses Resend)
  - `(routes)/` — Marketing pages: about, blog, contact, features, pricing, privacy, terms
  - `layout.tsx` — Root layout (Navbar + Footer)
  - `page.tsx` — Home / landing page
- `src/components/` — UI components organized by category
- `src/lib/` — Utilities, constants, Resend config

## Environment Variables

- `RESEND_API_KEY` — Required for the contact form to send emails. Without it, the form logs a warning and returns success silently.

## Running

- Dev: `npm run dev` (port 3000)
- Build: `npm run build`
- Production: `npm run start`

## Deployment

- Target: Cloud Run
- Build command: `npm run build`
- Run command: `npm run start -- -p 3000`
