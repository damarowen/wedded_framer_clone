# Dress Code Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/DressCodeSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Dress Code area)
- **Interaction model:** static

## DOM Structure
- Outer `<section>`
- Two-column layout: left text content + two cards, right large portrait image

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

### Card Grid
- display: grid
- grid-template-columns: repeat(2, 1fr)
- gap: 24px

### Card
- background: #FFFFFF
- border: 1px solid rgba(84, 39, 46, 0.12)
- border-radius: 16px
- padding: 24px

### Card H3
- font-family: Instrument Serif, serif
- font-size: 24px
- font-weight: 400
- color: #54272E
- margin-bottom: 12px

### Card Paragraph
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000

### Right Image
- border-radius: 16px
- width: 100%
- aspect-ratio: 2/3
- object-fit: cover

## Text Content
- Label: "Details"
- H2: "The Dress Code"
- Body: "The bride will be wearing white, kindly reserved for her. As this is a summer wedding in Florence, we'd love to see you in soft, colourful dresses and elegant summer attire."
- Card 1 — For Him: "A tailored suit or smart shirt with dress shoes fits perfectly. Think polished, warm-weather elegance — and leave the tie at home if you'd like."
- Card 2 — For Her: "A flowy midi or maxi dress in warm, earthy tones would be beautiful. Think Tuscan summer — romantic, relaxed, and effortlessly chic."

## Assets
- couple.jpg

## Responsive Behavior
- **Desktop:** text left, image right
- **Mobile:** stack vertically, image first
