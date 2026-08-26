# Pre-Gathering Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/PreGatheringSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Pre-Gathering area)
- **Interaction model:** static

## DOM Structure
- Outer `<section>`
- Two-column layout: left image, right text + details

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px

### Grid Layout
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 64px
- max-width: 1200px
- margin: 0 auto
- align-items: center

### Image
- border-radius: 16px
- aspect-ratio: 3/2
- object-fit: cover
- width: 100%

### Label
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 600
- text-transform: uppercase
- letter-spacing: 0.1em
- color: #9E7B83
- margin-bottom: 16px

### H2 Heading
- font-family: Instrument Serif, serif
- font-size: 56px desktop, 40px tablet, 32px mobile
- font-weight: 400
- color: #54272E
- margin-bottom: 24px

### Body Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- line-height: 24px
- color: #000000
- margin-bottom: 32px

### Details Grid
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 24px

### Detail Label
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 600
- text-transform: uppercase
- letter-spacing: 0.1em
- color: #9E7B83
- margin-bottom: 8px

### Detail Value
- font-family: Montserrat, sans-serif
- font-size: 16px
- font-weight: 500
- color: #000000

## Text Content
- Label: "Pre-Gathering"
- H2: "Pre-Wedding Gathering"
- Body: "The evening before the wedding, we'd love to welcome you to a relaxed garden dinner — a chance to settle in, catch up, and celebrate together before the big day."
- Detail 1: Date — "Friday, 14 August 2026"
- Detail 2: Time — "7:00 PM – 11:00 PM"
- Detail 3: Location — "Villa Cora, Florence"

## Assets
- pre-gathering.jpg

## Responsive Behavior
- **Desktop:** image left, text right
- **Mobile:** stack vertically, image first
