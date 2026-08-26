# Hero Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (top area)
- **Interaction model:** static background with possible subtle parallax on scroll

## DOM Structure
- Outer `<section>` full viewport width and height (~100vh)
- Background image container (absolute, full coverage)
- Gradient overlay div (absolute, bottom portion)
- Content container centered at bottom
- Two H4 headings stacked
- Large centered H1 below

## Computed Styles

### Section
- width: 100%
- min-height: 100vh (684px at 1440px)
- position: relative
- overflow: hidden
- background: transparent

### Background Image
- position: absolute
- inset: 0
- object-fit: cover
- width: 100%
- height: 100%
- z-index: 0

### Gradient Overlay
- position: absolute
- inset: 0
- background: linear-gradient(rgba(62, 64, 52, 0) 59%, rgba(30, 31, 25, 0.4) 100%)
- z-index: 1

### Content Container
- position: relative
- z-index: 2
- display: flex
- flex-direction: column
- align-items: center
- justify-content: flex-end
- padding-bottom: 80px (desktop)
- text-align: center
- color: #FFFFFF

### H4 Lines
- font-family: Instrument Serif, serif
- font-size: 18px (desktop), 16px (mobile)
- font-weight: 400
- letter-spacing: normal
- line-height: 1.4
- color: #FFFFFF
- margin-bottom: 4px

### H1 Script Heading
- font-family: Instrument Serif, serif (script/decorative style)
- font-size: 80px desktop, 48px tablet, 36px mobile
- font-weight: 400
- color: #FFFFFF
- margin-top: 24px

## Text Content
- H4 line 1: "We're getting married"
- H4 line 2: "Saturday, 15.08.2026, Florence"
- H1: "Sophie & Matteo"

## Assets
- Background image: `public/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images/hero.jpg`
- Use Next.js `<Image>` with `fill`, `priority`, `object-cover`

## Responsive Behavior
- **Desktop (1440px):** full 100vh, large centered heading
- **Tablet (768px):** same structure, heading ~56px
- **Mobile (390px):** heading ~36px, padding-bottom reduced
