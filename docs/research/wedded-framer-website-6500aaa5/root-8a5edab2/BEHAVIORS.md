# Behaviors: Wedded · Wedding Invitation Website Template

## Global Behaviors

### Smooth Scroll
- Lenis detected (`lenis.css` loaded, smooth scroll active)
- HTML likely has `.lenis` class and wrapper
- Anchor links (#location, #hotels, #theday, #faq, #rsvp) use smooth scroll

### Color Palette (extracted)
- Page background: `#FFFCFE` (very light pink)
- Body text: `#000000`
- Heading accent (dark burgundy/brown): `#54272E`
- Primary button/CTA background: `#6B3844` (muted burgundy)
- Link text on dark/button: `#FFFFFF`
- Nav link color (on hero): `#FFFFFF`
- Card backgrounds: white with subtle shadow

### Typography
- Serif headings: `Instrument Serif` (or `Libre Caslon Condensed Variable`)
- Sans-serif body: `Montserrat`
- UI/labels: `Inter`
- Handwritten accents: `Delicious Handrawn`
- Base body size appears to be 12px (Framer default), with component-specific overrides

### Navigation
- Positioned relative/transparent at top of hero
- Background: transparent initially (`rgba(0,0,0,0)`)
- Contains logo "Sophie & Matteo", center nav links, right CTA
- Scroll behavior to be verified

## Sections & Behaviors (to be filled during sweep)

### Hero
- Full-width section, viewport height ~684px at 1440px
- Background image with gradient overlay: `linear-gradient(rgba(62, 64, 52, 0) 59%, rgba(30, 31, 25, 0.4) 100%)`
- Text overlay centered bottom
- H4: "We're getting married" in Instrument Serif, white
- H4: "Saturday, 15.08.2026, Florence" in Instrument Serif, white
- Centered H1: "Sophie & Matteo" in Instrument Serif, white, 32px

### Save The Date
- White/light pink background
- H2: "Save The Date 15.08.26" Instrument Serif 56px `#54272E`
- Body paragraph Montserrat 16px/24px
- Countdown timer with days/hours/minutes/seconds
- Numbers start at "00" then animate/coundown to wedding date

### Our Story
- Scroll-driven card flip animations (FLIP markers visible)
- Left column: vertical stack of photo cards
- Right column: sticky-ish heading content
- Cards flip to reveal date, title, description

### Wedding Location
- Heading + subheading + address
- "Find on Google Maps" button
- Slideshow of venue images with prev/next arrows
- Pagination dots

### Travel & Transportation
- 3-column layout (Air, Shuttle, Car)
- Each card with heading and description

### Hotels
- Grid of hotel/accommodation cards
- Each card: image, title, description, link

### The Day
- Vertical timeline of schedule
- Time + event title/description

### FAQ
- Accordion style
- Click to expand/collapse answer

### RSVP
- Form with fields:
  - Full name
  - Email
  - Attending (Yes/No)
  - Number of guests
  - Dietary requirements
  - Song request
  - Message
- Submit button

### Footer
- Credits and template purchase links
