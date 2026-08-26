# RSVP Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/RSVPSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (RSVP area)
- **Interaction model:** form inputs with focus states and submit button

## DOM Structure
- Outer `<section id="rsvp">`
- Background image with dark overlay
- Centered content card containing heading, contact info, and form

## Computed Styles

### Section
- position: relative
- min-height: 700px
- padding: 120px 24px
- display: flex
- align-items: center
- justify-content: center

### Background Image
- position: absolute
- inset: 0
- object-fit: cover
- z-index: 0

### Overlay
- position: absolute
- inset: 0
- background: rgba(30, 31, 25, 0.5)
- z-index: 1

### Content Card
- position: relative
- z-index: 2
- background: #FFFFFF
- border-radius: 24px
- padding: 48px
- max-width: 560px
- width: 100%
- box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15)

### H2 Heading
- font-family: Instrument Serif, serif
- font-size: 40px desktop, 32px mobile
- font-weight: 400
- color: #54272E
- margin-bottom: 16px

### Body Paragraph
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000
- margin-bottom: 16px

### Contact Links
- font-family: Montserrat, sans-serif
- font-size: 14px
- color: #6B3844
- text-decoration: underline
- margin-right: 16px

### Form
- display: flex
- flex-direction: column
- gap: 20px
- margin-top: 24px

### Label
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 600
- text-transform: uppercase
- letter-spacing: 0.05em
- color: #54272E

### Input / Textarea
- width: 100%
- border: 1px solid rgba(84, 39, 46, 0.2)
- border-radius: 8px
- padding: 12px 16px
- font-family: Montserrat, sans-serif
- font-size: 14px
- color: #000000
- background: #FFFFFF
- outline: none

### Input Focus
- border-color: #6B3844
- box-shadow: 0 0 0 2px rgba(107, 56, 68, 0.15)

### Submit Button
- background: #6B3844
- color: #FFFFFF
- border-radius: 8px
- padding: 14px 24px
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 600
- border: none
- cursor: pointer
- margin-top: 8px

## Text Content
- H2: "RSVP"
- Subheading: "We can't wait to celebrate this magical day with you."
- Instructions: "Please RSVP no later than June 15. Fill in the form below and let us know about any dietary needs or questions."
- Email: sophie@gmail.com
- Phone: 0123 456 789
- Labels: "Full Name", "Email", "Additional guests", "Meal preferences & Additional information"
- Button: "RSVP now!"

## Assets
- rsvp-bg.jpg

## Responsive Behavior
- **Desktop:** card centered over background
- **Mobile:** card padding reduced to 24px
