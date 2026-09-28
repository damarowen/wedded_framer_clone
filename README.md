# Wedded Clone

Clone dari template undangan pernikahan [Wedded](https://wedded.framer.website/) menggunakan Next.js, React, TypeScript, Tailwind CSS, dan shadcn/ui.

## Development

Install dependencies dan jalankan development server:

```bash
npm install
npm run dev
```

Buka aplikasi di browser:

```
http://localhost:3000/wedded_framer_clone
```

> Catatan: URL mengandung `/wedded_framer_clone` karena project ini dikonfigurasi dengan `basePath: "/wedded_framer_clone"` di `next.config.ts` untuk deployment static export ke subpath.

## Build Production

```bash
npm run build
```

Output static export berada di folder `out/`.

## Scripts

| Script | Perintah | Keterangan |
|---|---|---|
| `npm run dev` | `next dev` | Development server dengan Turbopack |
| `npm run build` | `next build` | Build static export ke `out/` |
| `npm run start` | `next start` | Start production server |
| `npm run lint` | `eslint` | Jalankan ESLint |
| `npm run typecheck` | `tsc --noEmit` | Cek TypeScript tanpa emit |
| `npm run format` | `prettier --write "**/*.{ts,tsx}"` | Format kode |

## Deploy

Project ini dikonfigurasi untuk deploy ke GitHub Pages melalui workflow di `.github/workflows/deploy.yml`. Setiap push ke branch `master` akan otomatis build dan deploy dari folder `out/`.

## Struktur Project

```
app/              # Next.js App Router (layout, page, globals.css)
components/       # UI components (shadcn/ui + custom section components)
docs/             # Dokumentasi research dan implementasi clone
hooks/            # Custom React hooks
lib/              # Utility functions
public/           # Static assets (gambar, font, SVG)
```

## Menambahkan Komponen shadcn/ui

```bash
npx shadcn@latest add button
```

Import komponen:

```tsx
import { Button } from "@/components/ui/button";
```
