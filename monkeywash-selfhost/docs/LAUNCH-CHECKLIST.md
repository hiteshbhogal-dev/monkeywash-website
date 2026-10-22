# Monkey Wash launch checklist

## Before implementation is production-ready
- [ ] Confirm current logo, colors, typography and brand assets from the existing website.
- [ ] Confirm the exact service catalogue, price units, taxes, minimum order, delivery charges and turnaround promises. Update `lib/config.ts` and seed data only with approved facts.
- [ ] Confirm exact serviceable PIN codes/areas, business hours, holiday handling and pickup capacity.
- [ ] Add a protected staff dashboard: list/filter bookings, booking details, status transitions, slot blocking, service/price editing and audit log.
- [ ] Add shared rate limiting (reverse proxy/WAF or Redis), request-size limits and alerting.
- [ ] Add customer notification policy, consent language and privacy policy/terms appropriate to the business and jurisdiction.
- [ ] Configure WhatsApp Cloud API credentials in the server environment; register the business sender, ensure owner recipient is opted in, and use approved templates where required for business-initiated notifications. Test failure/retry paths.
- [ ] Configure backups, TLS, uptime monitoring, log retention and database restore test.
- [ ] Test responsive design on real iOS/Android devices, accessibility and all booking edge cases.
- [ ] Replace placeholder phone/WhatsApp details, verify metadata and LocalBusiness schema, submit sitemap in Google Search Console and Bing Webmaster Tools.
- [ ] Run `npm install`, `npx prisma migrate dev --name init`, `npm run db:seed`, `npm run build` and end-to-end tests in a clean environment.

## Local development
1. Copy `.env.example` to `.env` and set a strong `POSTGRES_PASSWORD` for Docker Compose plus `DATABASE_URL` for local development.
2. Run `docker compose up -d db`.
3. Run `npm install`.
4. Run `npx prisma migrate dev --name init` and `npm run db:seed`.
5. Run `npm run dev` and open `http://localhost:3000`.

## Self-host with Docker
1. Configure `.env` values and secrets on the host.
2. Run `docker compose up -d --build`.
3. Apply migrations using a controlled release step (e.g. `docker compose run --rm web npx prisma migrate deploy`).
4. Put the app behind Caddy/Nginx/Traefik with HTTPS; do not expose PostgreSQL publicly.
5. Configure DNS, verify canonical site URL, then test booking and WhatsApp end-to-end.

This is a functional starter, not a production certification. The admin workflow, rate limiting, complete legal pages, service availability rules and operational monitoring are launch blockers listed above.
