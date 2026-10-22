# Monkey Wash — self-hostable website starter

A mobile-first laundry booking website starter built with Next.js App Router, TypeScript, Prisma and PostgreSQL. It includes a polished responsive marketing experience, service catalogue, booking wizard, booking persistence, phone-protected order tracking, SEO metadata/sitemap/robots and an optional server-side WhatsApp Cloud API owner notification adapter.

## No Higgsfield dependency
This project contains no Higgsfield SDK, AI generation workflow or generated media. The hero illustration is CSS-built. No AI/image/video generation is required to build or run the site.

## Important status
The public website's live HTML could not be retrieved in the build environment. As a result, this starter intentionally avoids inventing Monkey Wash prices, coverage areas, phone numbers, ratings or turnaround claims. Verify the current brand and business facts before launch. The booking and tracking flow is implemented; a secure staff/admin dashboard, production rate limiting and operational safeguards remain launch blockers. See `docs/LAUNCH-CHECKLIST.md`.

## Stack
- Next.js 15 / React 19 / TypeScript
- PostgreSQL + Prisma ORM
- Zod server-side validation
- WhatsApp Cloud API adapter (optional, credentials remain server-side)
- Docker Compose for self-hosting

## Quick start
```bash
cp .env.example .env
# Set DATABASE_URL, NEXT_PUBLIC_SITE_URL and a strong BOOKING_ADMIN_TOKEN.
docker compose up -d db
npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```
Open `http://localhost:3000`.

## Booking notifications
The API saves a booking first, then attempts a WhatsApp notification. If credentials are missing, it records `NOT_CONFIGURED`; failed sends are recorded as `FAILED`. Configure `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_OWNER_RECIPIENT` and `WHATSAPP_GRAPH_API_VERSION` on the server. For production, add a queue/retry strategy and approved templates as required by Meta's current WhatsApp Business Platform rules.

## SEO
Metadata, canonical base URL, sitemap, robots rules and LocalBusiness JSON-LD are included. Verify the legal business name, phone, physical address (if appropriate), hours and service areas before adding richer structured data. SEO foundations do not guarantee a ranking position.

## Self-host
Docker Compose runs PostgreSQL and the Next.js app. Put the app behind a reverse proxy with HTTPS, keep database ports private, use a strong unique password, configure automated backups and run migrations during deployment. See `docs/LAUNCH-CHECKLIST.md`.

## Open-source reference review
The implementation was informed by publicly visible patterns in:
- `agrayush13/laundry-lo-src` — service catalogue, order lifecycle, booking validation and relational data design.
- `GAJETOso/Laundromat` — clear booking wizard, service-specific pages, tracking and documented integration boundaries (Apache-2.0; preserve required notices if any code is reused).
- `Yecoby/AI-Assisted-Laundromat-Ecommerce-Application` — separation of request validation, business rules and database access.

These projects were treated as design/architecture references, not copied as a full codebase. Check the original repository and license notices before reusing any code.
