# Hotels Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/HotelsSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Hotels area)
- **Interaction model:** static cards with links

## DOM Structure
- Outer `<section id="hotels">`
- Centered content container
- Label + H2 heading
- Grid of hotel cards

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px

### Container
- max-width: 1200px
- margin: 0 auto

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
- margin-bottom: 48px
- max-width: 700px

### Hotel Grid
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 24px

### Hotel Card
- background: #FFFFFF
- border-radius: 16px
- overflow: hidden
- border: 1px solid rgba(84, 39, 46, 0.12)

### Card Image
- width: 100%
- aspect-ratio: 3/2
- object-fit: cover

### Card Content
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
- margin-bottom: 16px

### Card Link
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 500
- color: #6B3844
- text-decoration: none
- border-bottom: 1px solid currentColor
- padding-bottom: 2px

## Text Content
- Label: "Hotels"
- H2: "Where to sleep, rest, and recover after the party"
- Card 1: Local Agriturismos — "For a true Tuscan experience, we recommend the farmhouse stays around Fiesole — just a short drive from Villa Cora."
- Card 2: Hotel Davanzati — "Charming 4-star in the historic centre. A 10-minute taxi ride from the villa. Mention our wedding for preferred rates."
- Card 3: Four Seasons Florence — "5-star · 5 min from Villa Cora. Use code SOPHIE26 for a 15% discount on rooms. Highly recommended."
- Link text on all cards: "Find on Google Maps"

## Assets
- hotel-1.jpg, hotel-2.jpg, hotel-3.jpg

## Responsive Behavior
- **Desktop:** 3 columns
- **Mobile:** single column
