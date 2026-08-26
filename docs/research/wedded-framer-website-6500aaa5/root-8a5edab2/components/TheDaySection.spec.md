# The Day (Schedule) Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/TheDaySection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (The Day area)
- **Interaction model:** scroll-driven timeline reveal with real-time vertical progress line

## DOM Structure
- Outer `<section id="theday">` observed for scroll progress
- Two-column layout: left text + timeline, right scattered collage of small photos
- Each timeline item is wrapped in `TimelineItem` and observed via `IntersectionObserver`
- Vertical track + animated fill bar run alongside the timeline

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px

### Grid Layout
- display: grid
- grid-template-columns: 1.2fr 1fr
- gap: 64px
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
- margin-bottom: 16px

### Body Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- line-height: 24px
- color: #000000
- margin-bottom: 48px

### Timeline Track
- position: absolute left: 0 top: 0 height: 100% width: 1px
- background: rgba(84, 39, 46, 0.2)

### Timeline Progress Fill
- position: absolute left: 0 top: 0 width: 1px
- background: #9E7B83
- transform-origin: top
- transform: scaleY(progress) where progress is 0..1 based on scroll position
- will-change: transform

### Timeline Item (revealed)
- transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1)
- initial state: opacity: 0, translateY: 32px
- in-view state: opacity: 1, translateY: 0

### Timeline Dot
- position: absolute left: -31px top: 8px
- width: 10px, height: 10px, border-radius: 9999px
- background: #9E7B83
- transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1)
- scales from 0.75 to 1 when item enters view

### Timeline Time
- font-family: Instrument Serif, serif
- font-size: 40px desktop, 28px mobile
- font-weight: 400
- color: #54272E
- margin-bottom: 8px

### Timeline Title
- font-family: Instrument Serif, serif
- font-size: 24px
- font-weight: 400
- color: #54272E
- margin-bottom: 8px

### Timeline Description
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000

### Right Collage
- display: grid
- grid-template-columns: repeat(2, 1fr)
- gap: 16px
- align-items: start

### Collage Image
- border-radius: 12px
- object-fit: cover

## Scroll Behavior
- Section listens to scroll via `useScrollProgress` hook
- Progress starts when section top reaches 75% of viewport
- Progress completes when section bottom reaches 25% of viewport
- Fill bar height tracks progress in real time
- Each `TimelineItem` flips state once when ~35% visible (IntersectionObserver)

## Text Content
- Label: "The Day"
- H2: "The Wedding Day"
- Body: "Here's what to expect on August 15th. Everything takes place at Villa Cora, Florence — we'll guide you through every moment of the day."
- 14:00 — Ceremony — "We gather in the gardens of Villa Cora for the ceremony. Please arrive a few minutes early — doors open at 13:30."
- 15:00 — Drinks & mingle — "Glasses of prosecco and Aperol spritz await — join us on the terrace for light bites and great company under the Tuscan sky."
- 17:00 — Dinner in the hall — "A candlelit seated dinner in Villa Cora's grand hall. Expect Florentine-inspired cuisine, heartfelt speeches, and a surprise or two."
- 20:00 — Party & dancing — "The night is ours — dancing, laughter, and music late into the warm August evening. See you on the dance floor."

## Assets
- day-1.jpg (3:2), day-2.jpg (3:4), day-3.jpg (2:3), day-4.jpg (3:2)

## Related Hooks
- `hooks/useInView.ts` — reusable IntersectionObserver hook
- `hooks/useScrollProgress.ts` — scroll progress calculator with viewport offsets
