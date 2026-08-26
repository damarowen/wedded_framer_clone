# Footer Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/FooterSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (footer area)
- **Interaction model:** static links and text

## DOM Structure
- Outer `<footer>`
- Two sections: top nav links, bottom closing message + countdown + credit
- Top: horizontal nav links (Location, Hotels, The Day, FAQ, RSVP)
- Bottom: large heading, closing text, countdown, Framer credit link

## Computed Styles

### Footer
- background: #FFFCFE
- border-top: 1px solid rgba(84, 39, 46, 0.12)
- padding: 80px 24px

### Container
- max-width: 1200px
- margin: 0 auto

### Nav Links Grid
- display: flex
- gap: 32px
- justify-content: center
- margin-bottom: 80px
- border-bottom: 1px solid rgba(84, 39, 46, 0.12)
- padding-bottom: 32px

### Nav Link
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 500
- color: #000000
- text-decoration: none

### Bottom Section
- text-align: center

### Countdown Text
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 600
- text-transform: uppercase
- letter-spacing: 0.1em
- color: #9E7B83
- margin-bottom: 8px

### Countdown Display
- font-family: Montserrat, sans-serif
- font-size: 32px
- font-weight: 700
- color: #54272E
- margin-bottom: 32px

### Closing H2
- font-family: Instrument Serif, serif
- font-size: 40px desktop, 32px mobile
- font-weight: 400
- color: #54272E
- margin-bottom: 16px

### Closing Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- line-height: 24px
- color: #000000
- margin-bottom: 24px

### Credit Link
- font-family: Montserrat, sans-serif
- font-size: 12px
- color: #9E7B83
- text-decoration: underline

## Text Content
- Nav links: "Location", "Hotels", "The Day", "FAQ", "RSVP"
- Countdown label: "Wedding countdown:"
- Countdown display: "00:00:00:00" (days:hours:minutes:seconds)
- Closing H2: "We can't wait to celebrate this special day with you."
- Closing text: "Please RSVP by 15 June 2026, and feel free to reach out if you have any questions."
- RSVP link: "RSVP"
- Credit: "Create a free website with Framer, the website builder loved by startups, designers and agencies."

## Responsive Behavior
- Centered text and links at all widths
- Nav links wrap on mobile
