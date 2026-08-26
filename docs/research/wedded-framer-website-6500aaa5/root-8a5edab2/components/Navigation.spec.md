# Navigation Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/Navigation.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (top area)
- **Interaction model:** static + smooth-scroll anchor links

## DOM Structure
- Outer `<header>` element
- Inner flex container with three columns: logo left, nav center, CTA right
- Logo: link containing "Sophie & Matteo" heading
- Nav links: Location, Hotels, The Day, FAQ (anchor links to #location, #hotels, #theday, #faq)
- CTA: "I'll be there!" link to #rsvp

## Computed Styles (desktop, extracted from live site)

### Header
- position: relative (at top)
- background-color: rgba(0, 0, 0, 0) (transparent over hero)
- z-index: 1
- width: 100%
- padding: ~24px horizontal

### Logo Text
- font-family: Instrument Serif, serif
- font-size: 24px desktop (18px mobile)
- font-weight: 400
- color: #FFFFFF
- text-decoration: none

### Nav Links
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 500
- color: #FFFFFF
- text-decoration: none
- padding: 8px 12px

### CTA Button
- background: #FFFFFF
- color: #000000
- border-radius: 8px
- padding: 10px 16px
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 500
- text-decoration: none

## States & Behaviors

### Hover states
- Nav links: subtle opacity change or underline
- CTA: slight background darken

### Scroll behavior
- Header starts transparent over hero
- May become solid/blurred after scrolling past hero (verify during QA; implement with scroll listener + backdrop-blur if needed)

## Responsive Behavior
- **Desktop (1440px):** full horizontal nav visible
- **Tablet (768px):** same nav, spacing reduced
- **Mobile (390px):** hamburger menu or simplified layout; center nav likely collapses into mobile menu

## Text Content
- Logo: "Sophie & Matteo"
- Nav: "Location", "Hotels", "The Day", "FAQ"
- CTA: "I'll be there!"

## Assets
- No images; text and icons only
