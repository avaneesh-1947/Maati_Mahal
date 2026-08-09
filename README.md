# Mati Mahal Restaurant

A premium Rajasthani vegetarian restaurant website built with React, Vite, TanStack Start, and Supabase.

## Local setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=
   VITE_SUPABASE_PUBLISHABLE_KEY=
   SUPABASE_URL=
   SUPABASE_SERVICE_ROLE_KEY=
   ```
3. Start the dev server:
   ```sh
   npm run dev
   ```

Open the app at `http://localhost:4173`.

## Build

```sh
npm run build
```

## Notes

- This project no longer uses Lovable integration.
- Tailwind CSS is configured via `@tailwindcss/vite`.
- If you are not using Supabase features, the app can still run but some routes may require Supabase credentials.
