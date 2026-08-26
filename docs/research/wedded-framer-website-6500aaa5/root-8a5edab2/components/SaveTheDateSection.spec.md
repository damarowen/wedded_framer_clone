# Save The Date / Countdown Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/SaveTheDateSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (second section)
- **Interaction model:** time-driven countdown timer

## DOM Structure
- Outer `<section id="save-the-date">` (no anchor in nav, but section before Our Story)
- Centered content container with max-width
- H2 heading
- H3/body paragraph
- Countdown grid: 4 columns (days, hours, minutes, seconds)

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px (desktop), 80px 16px (mobile)
- text-align: center

### H2 Heading
- font-family: Instrument Serif, serif
- font-size: 56px desktop, 40px tablet, 32px mobile
- font-weight: 400
- letter-spacing: -1.68px desktop
- color: #54272E
- margin-bottom: 24px

### Body Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- font-weight: 400
- line-height: 24px
- color: #000000 (or slightly muted)
- max-width: 640px
- margin: 0 auto 48px

### Countdown Grid
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 16px
- max-width: 480px
- margin: 0 auto

### Countdown Item
- display: flex
- flex-direction: column
- align-items: center

### Countdown Number
- font-family: Instrument Serif, serif
- font-size: 48px desktop, 32px mobile
- font-weight: 400
- color: #54272E

### Countdown Label
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 500
- text-transform: uppercase
- letter-spacing: 0.1em
- color: #9E7B83

## States & Behaviors
- Countdown counts down to August 15, 2026
- Initial display is "00" for all values before client hydration
- Use `useEffect` to start countdown after mount to avoid hydration mismatch
- Update every second

## Text Content
- H2: "Save The Date 15.08.26"
- Body: "We are getting married and we could not be happier to share this moment with you. Here you'll find the full wedding details: the schedule, venue, what to wear, where to stay, and your RSVP. We can't wait to see you in Florence this August!"
- Labels: "days", "hours", "minutes", "seconds"

## Responsive Behavior
- **Desktop:** 4-column grid horizontal
- **Mobile:** 4-column grid, smaller numbers
