# Our Story Timeline Specification

## Overview
- **Target file:** `src/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/OurStorySection.tsx`
- **Screenshot:** `docs/design-references/wedded-framer-website-6500aaa5/root-8a5edab2/desktop-full.png` (Our Story area)
- **Interaction model:** scroll-driven card flip animation (FLIP-based)

## DOM Structure
- Outer `<section id="our-story">`
- Two-column layout: left timeline cards, right sticky heading text
- Left column: vertical stack of "story cards"
- Each card has two faces: front (image + title overlay + date) and back (date + title + description)
- Right column: section heading, subheading, tagline paragraph

## Computed Styles

### Section
- background: #FFFCFE
- padding: 120px 24px
- min-height: auto (content height ~4104px total)

### Grid Layout
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 80px
- max-width: 1200px
- margin: 0 auto

### Right Column (Sticky)
- position: sticky
- top: 120px
- align-self: start
- text-align: left

### H2 Section Heading
- font-family: Instrument Serif, serif
- font-size: 56px desktop
- font-weight: 400
- color: #54272E
- margin-bottom: 16px

### Subheading
- font-family: Instrument Serif, serif
- font-size: 24px
- font-weight: 400
- color: #54272E
- margin-bottom: 24px

### Tagline Paragraph
- font-family: Montserrat, sans-serif
- font-size: 16px
- line-height: 24px
- color: #000000

### Story Card (Front)
- position: relative
- border-radius: 16px
- overflow: hidden
- height: 400px desktop, 320px mobile
- margin-bottom: 24px
- transform-style: preserve-3d
- transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)

### Story Card Image
- width: 100%
- height: 100%
- object-fit: cover

### Story Card Title Overlay (front)
- position: absolute
- bottom: 0
- left: 0
- right: 0
- padding: 24px
- background: linear-gradient(transparent, rgba(0,0,0,0.5))
- color: #FFFFFF
- font-family: Instrument Serif, serif
- font-size: 28px

### Story Card Date (front)
- position: absolute
- top: 16px
- left: 16px
- background: #FFFFFF
- color: #000000
- padding: 4px 12px
- border-radius: 9999px
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 500

### Story Card (Back)
- background: #FFFFFF
- border-radius: 16px
- padding: 32px
- height: 100%
- display: flex
- flex-direction: column
- justify-content: center
- backface-visibility: hidden
- transform: rotateY(180deg)

### Story Card Date (back)
- font-family: Montserrat, sans-serif
- font-size: 12px
- font-weight: 600
- text-transform: uppercase
- letter-spacing: 0.1em
- color: #9E7B83
- margin-bottom: 12px

### Story Card Title (back)
- font-family: Instrument Serif, serif
- font-size: 28px
- color: #54272E
- margin-bottom: 12px

### Story Card Description (back)
- font-family: Montserrat, sans-serif
- font-size: 14px
- line-height: 22px
- color: #000000

## States & Behaviors
- Each card flips (rotateY 180deg) as it enters viewport
- Use IntersectionObserver with threshold ~0.3
- Cards start showing front face; on scroll-into-view, flip to reveal back
- Staggered by scroll position

## Text Content / Data
1. The First Hello — Sep 21, 2023 — "A mutual friend, a crowded evening in Florence, and two people who had no idea their lives were about to change forever."
2. Ace — Oct 8, 2023 — "They went to the shelter to \"just have a look\". They came home with Ace. Neither of them regrets it for a single second."
3. First Christmas Together — Dec 24, 2023 — "He showed up with terrible wrapping and the most thoughtful gift she'd ever received. She knew then that she was in trouble."
4. The Trip to Cinque Terre — Apr 15, 2024 — "Four days, one tiny rented car, and the moment they both realised this was the person they wanted every adventure with."
5. Moving In Together — Aug 3, 2024 — "He had more books than shelves. She had more plants than windowsills. Somehow it all fit perfectly."
6. The Proposal — Feb 14, 2025 — "He had been planning it for three months. She had absolutely no idea. The answer was yes before he finished the question."

## Assets
- story-1.jpg, story-2.jpg, story-3.jpg, story-4.jpg, story-5.jpg, story-6.jpg

## Responsive Behavior
- **Desktop:** 2-column, sticky right heading
- **Tablet:** 2-column, reduced gap
- **Mobile:** single column, cards full-width, heading moves above cards
