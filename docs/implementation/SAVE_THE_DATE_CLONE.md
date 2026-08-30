# Save The Date Section — Clone Implementation

**Source:** https://wedded.framer.website/#intro  
**Component:** `components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/SaveTheDateSection.tsx`

## Approach: Import SVG from file

Ilustrasi pasangan di-render sebagai **standalone SVG asset** yang di-import ke React:

```tsx
import Image from "next/image"
import coupleIllustration from "@/public/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images/couple-illustration.svg"

<Image
  src={coupleIllustration}
  alt=""
  width={277}
  height={220}
  className="h-auto w-[220px] md:w-[277px]"
  aria-hidden="true"
/>
```

Alasan memilih approach ini:
- Warna ilustrasi **statis** (`#6B3844`) — tidak butuh theming dinamis
- Bundle JS lebih kecil (hanya URL string, bukan ~28KB path data)
- Tidak ada duplikasi — satu file SVG di `public/` sebagai source of truth
- Browser bisa cache SVG file secara terpisah

### Perbandingan dengan Inline SVG Component

| Aspek | Inline Component | Import File |
|---|---|---|
| Bundle JS | +28KB path data | ~50 bytes URL |
| Warna | `currentColor` fleksibel | Baked `#6B3844` |
| HTTP request | Tidak ada | 1 (cached) |
| Duplikasi | Inline + file public | Satu file |
| Theming | Mudah | Perlu edit file |

Karena ilustrasi ini karikatur statis dan tidak butuh theming, import file lebih masuk akal.

## File

| File | Keterangan |
|---|---|
| `SaveTheDateSection.tsx` | Section utama: ilustrasi + judul + deskripsi + countdown |
| `couple-illustration.svg` | Standalone SVG asset di public (fill `#6B3844`) |

## Struktur Komponen

```
SaveTheDateSection
├── Image (couple-illustration.svg, w-[220px] md:w-[277px])
├── h2 "Save The Date / 15.08.26"
├── h3 (deskripsi)
└── Countdown (flex, gap-6, dividers)
    ├── [00] Days
    ├── │ (1px × 40px divider)
    ├── [00] Hours
    ├── │
    ├── [00] Minutes
    ├── │
    └── [00] Seconds
```

## Token Mapping (Framer → Tailwind)

| Framer Token | Tailwind Class | Value |
|---|---|---|
| `--token-ed2d7631` (ilustrasi fill) | `text-wedded-rose` | `#6B3844` |
| `--token-7729c3e9` (teks countdown) | `text-wedded-burgundy` | `#54272E` |
| `--token-0f516fd4` (background) | `bg-wedded-bg` | `#FFFCFE` |
| Font ilustrasi area | Instrument Serif | Heading |
| Label countdown | Inter 12px | Labels |

## Countdown Logic

- Target: `2026-08-15T00:00:00`
- `setInterval` setiap 1 detik
- Format: `padStart(2, "0")`
- Mobile: angka `text-[40px]`, labels `text-xs opacity-70`
- Desktop (sm+): angka `text-[68px]`, divider `h-10 w-px bg-wedded-burgundy`

## Responsive Behavior

| Breakpoint | Illustration Width | Number Size | Dividers |
|---|---|---|---|
| < 640px | 220px | 40px | Hidden |
| ≥ 640px | 277px | 68px | Visible |

## Catatan Teknis

- **Base path:** `/wedded_framer_clone` — Next.js akan otomatis menambahkan prefix saat build static export
- **Standalone SVG** — file di `public/` di-import via `next/image`, tidak perlu component wrapper
- **Static export** (`output: "export"`) — component harus client-side compatible (`"use client"`)
- SVG file di-cache browser saat production
