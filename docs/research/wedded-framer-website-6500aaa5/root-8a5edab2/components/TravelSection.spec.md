# Travel & Transportation Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/TravelSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Getting Here area)
- **Interaction model:** static

## DOM Structure
- Outer `<section>`
- Centered content container
- Label + H2 heading
- 3-column grid of travel cards

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

### Card Grid
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 32px

### Card
- background: #FFFFFF
- border: 1px solid rgba(84, 39, 46, 0.12)
- border-radius: 16px
- padding: 32px

### Card H3
- font-family: Instrument Serif, serif
- font-size: 28px
- font-weight: 400
- color: #54272E
- margin-bottom: 16px

### Card Paragraph
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000

## Text Content
- Label: "Getting Here"
- H2: "Travel & Transportation"
- Card 1 — By Air: "Florence Peretola Airport (FLR) is the nearest airport, just 20 minutes from Villa Cora. Alternatively, fly into Pisa (PSA) and take a train or transfer."
- Card 2 — By Shuttle: "We've arranged complimentary shuttles from central Florence hotels at 2:30 PM, returning at midnight and 2:00 AM. Please note your hotel name on your RSVP."
- Card 3 — By Car: "Parking is available on-site at Villa Cora. GPS: Viale Machiavelli 18, Florence. Please don't drink and drive — taxis and shuttles are available all evening."

## Responsive Behavior
- **Desktop:** 3 columns
- **Mobile:** single column
