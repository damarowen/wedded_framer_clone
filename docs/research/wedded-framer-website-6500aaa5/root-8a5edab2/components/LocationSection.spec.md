# Wedding Location Slideshow Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/LocationSection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Wedding Location area)
- **Interaction model:** click-driven slideshow with previous/next arrows and pagination dots

## DOM Structure
- Outer `<section id="location">`
- Two-column layout: left text content, right slideshow
- Left: label, H2, address, CTA button
- Right: image slideshow with navigation arrows and dots

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

### Address
- font-family: Montserrat, sans-serif
- font-size: 16px
- color: #000000
- margin-bottom: 24px

### CTA Button
- background: #6B3844
- color: #FFFFFF
- border-radius: 8px
- padding: 10px 20px
- font-family: Montserrat, sans-serif
- font-size: 14px
- font-weight: 500
- text-decoration: none
- display: inline-flex
- align-items: center

### Slideshow Container
- position: relative
- border-radius: 16px
- overflow: hidden
- aspect-ratio: 16/10

### Slideshow Image
- position: absolute
- inset: 0
- object-fit: cover
- transition: opacity 0.5s ease

### Navigation Arrows
- position: absolute
- top: 50%
- transform: translateY(-50%)
- width: 40px
- height: 40px
- border-radius: 50%
- background: rgba(255, 255, 255, 0.9)
- color: #000000
- display: flex
- align-items: center
- justify-content: center
- border: none
- cursor: pointer
- z-index: 10

### Pagination Dots
- position: absolute
- bottom: 16px
- left: 50%
- transform: translateX(-50%)
- display: flex
- gap: 8px
- z-index: 10

### Dot
- width: 8px
- height: 8px
- border-radius: 50%
- background: rgba(255, 255, 255, 0.5)

### Active Dot
- background: #FFFFFF

## States & Behaviors
- Left/right arrow buttons cycle through images
- Active dot indicates current slide
- Transition: opacity fade 0.5s

## Text Content
- Label: "Wedding Location"
- H2: "We'll see you at Villa Cora"
- Address: "Viale Machiavelli 18, Florence, Italy"
- CTA: "Find on Google Maps"

## Assets
- location-1.jpg, location-2.jpg, location-3.jpg, location-4.jpg
- arrow-left.svg, arrow-right.svg (or use shared icons)

## Responsive Behavior
- **Desktop:** 2-column layout
- **Mobile:** stack vertically, text above slideshow
