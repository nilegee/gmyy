# Engineering Guidelines

## Stack
- SvelteKit 2 with Svelte 5 and TypeScript
- TailwindCSS v4 via `@tailwindcss/vite`
- lucide-svelte for icons
- State via Svelte 5 `$state()` only
- Zod for validation, Day.js for dates
- Firebase Auth (Google), Firestore, Storage
- browser-image-compression for images

## Conventions
- Prefer components in `src/lib` and routes in `src/routes`
- Keep Firebase access within `src/lib/firebase.ts`
- Validate user email using `src/lib/allowlist.ts`
- Use Tailwind utility classes for styling
- No external state stores

## Testing
Run before committing:
```bash
npm test
npm run build
```
