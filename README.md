# Velocity Studio

A motorcycle rental concept built with Next.js, React, TypeScript, and Tailwind CSS. The site includes a collection, model detail pages, a three-step demo ride planner, an about page, and a demo enquiry form.

## Run locally

```sh
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000. The existing dependency versions have peer conflicts, so installation currently needs `--legacy-peer-deps`. Development and production builds use webpack because Turbopack crashed in this Windows environment.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

## Content and design

- `lib/motorcycles-data.ts`: model names, matching local photos, sample daily rates, package durations, and pickup cities.
- `app/globals.css`: shared ivory, charcoal, olive, and burnt-orange palette; responsive layouts; form styles; focus and reduced-motion support.
- `components/sections/BookingForm.tsx`: ride selection, validation, live estimates, review, and printable demo summary.
- `lib/booking.ts`: local date formatting and return-date calculation.

Prices are illustrative INR daily rental rates. Model names describe the pictured model family, not verified inventory or model-year specifications. Old `/motorcycles/velocity-*` links redirect to the new collection.

## Demo boundaries

Bookings and enquiries are previews only. No customer data is persisted or transmitted, no emails are sent, and no payments or reservations are made. A demo plan resets when the page is refreshed; users can print a copy. Connecting a real service will require verified fleet information, availability, rental terms, and backend integrations.
