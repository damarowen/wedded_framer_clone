# FAQ Section Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/FAQSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (FAQ area)
- **Interaction model:** click-driven accordion expand/collapse

## DOM Structure
- Outer `<section id="faq">`
- Two-column layout: left heading text, right accordion list

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px

### Grid Layout
- display: grid
- grid-template-columns: 1fr 1.2fr
- gap: 64px
- max-width: 1200px
- margin: 0 auto

### Left Column
- position: sticky
- top: 120px
- align-self: start

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

### Accordion Item
- border-bottom: 1px solid rgba(84, 39, 46, 0.12)
- padding: 24px 0

### Accordion Trigger
- display: flex
- justify-content: space-between
- align-items: center
- width: 100%
- text-align: left
- background: transparent
- border: none
- cursor: pointer
- padding: 0

### Question Text
- font-family: Instrument Serif, serif
- font-size: 24px desktop, 20px mobile
- font-weight: 400
- color: #54272E

### Chevron Icon
- width: 20px
- height: 20px
- color: #54272E
- transition: transform 0.3s ease

### Expanded Chevron
- transform: rotate(180deg)

### Answer Text
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000
- padding-top: 16px
- max-height: 0
- overflow: hidden
- transition: max-height 0.3s ease, padding 0.3s ease

### Expanded Answer
- max-height: 500px

## States & Behaviors
- Click question to expand/collapse answer
- Only one item open at a time (optional; implement single-open behavior)
- Chevron rotates 180deg when open

## Text Content
- Label: "FAQ"
- H2: "Questions & Answers"
- Body: "We've answered a few common questions to help you prepare for the day and enjoy the celebration with ease."
1. Q: "Can I bring a plus one?"
   A: "If your invitation says plus one, absolutely! If you're unsure, just reach out to Sophie directly and she'll be happy to clarify."
2. Q: "Are kids welcome?"
   A: "We adore your little ones, but this will be an adults-only evening. Take the night off and celebrate with us!"
3. Q: "What should I wear?"
   A: "Summer formal — think elegant and festive. We'll be outdoors at times so flat or block-heel shoes are a smart choice on Villa Cora's grounds."
4. Q: "Will there be vegetarian or vegan options?"
   A: "Absolutely. Just note your dietary preferences in the RSVP form and we'll make sure you're well taken care of."
5. Q: "Can I give a speech?"
   A: "We'd love that! Please let our toastmaster know in advance — details will come closer to the date by email."

## Responsive Behavior
- **Desktop:** 2-column, heading sticky left
- **Mobile:** stack vertically, heading above accordion
