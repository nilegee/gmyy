# Family Hub

SvelteKit 2 + TypeScript application for managing shared family content.

## Tech Stack
- SvelteKit 2 with Svelte 5
- TailwindCSS v4 via `@tailwindcss/vite`
- Firebase Auth (Google), Firestore and Storage
- lucide-svelte icons
- Zod v4 for validation
- Day.js for dates
- browser-image-compression for client-side image optimization

## Setup
```bash
npm install
npm run dev
```

Environment variables are provided in `.env`.

## Firebase Deployment
```bash
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
gsutil cors set cors.json gs://familyg-719f2.appspot.com
```

## Scripts
- `npm run dev` – start development server
- `npm run build` – create production build
- `npm test` – run tests
