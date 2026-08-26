# Wedding Gifts Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/WeddingGiftsSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Wedding Gifts area)
- **Interaction model:** static

## DOM Structure
- Outer `<section>`
- Centered content container
- Label + H2 heading + body paragraph + bank details

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px
- text-align: center

### Container
- max-width: 720px
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
- margin-bottom: 24px

### Body Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- line-height: 24px
- color: #000000
- margin-bottom: 32px

### Bank Details
- background: #FFFFFF
- border: 1px solid rgba(84, 39, 46, 0.12)
- border-radius: 12px
- padding: 24px
- text-align: left
- display: inline-block

### Bank Detail Row
- font-family: Montserrat, sans-serif
- font-size: 14px
- color: #000000
- margin-bottom: 8px

## Text Content
- Label: "Wedding Gifts"
- H2: "Your presence is truly the greatest gift."
- Body: "Having you there is the greatest gift of all. If you'd like to do something extra special, a contribution to our honeymoon adventures would be deeply appreciated."
- Bank Transfer: "Bank Transfer: DE1234567890"
- Message: "Message: \"Honeymoon Fund\""

## Responsive Behavior
- Centered text block, stays centered at all widths
