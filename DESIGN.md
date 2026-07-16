---
name: Oceanic Elite MD3 - Storytelling Edition
colors:
  surface: '#fff8f5'
  surface-dim: '#efd5c5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#ffeadd'
  surface-container-high: '#fee3d2'
  surface-container-highest: '#f8decd'
  on-surface: '#26190f'
  on-surface-variant: '#41484a'
  inverse-surface: '#3d2d22'
  inverse-on-surface: '#ffede3'
  outline: '#72787a'
  outline-variant: '#c1c7ca'
  surface-tint: '#45636c'
  primary: '#45636c'
  on-primary: '#ffffff'
  primary-container: '#8cabb5'
  on-primary-container: '#214048'
  inverse-primary: '#acccd6'
  secondary: '#42636d'
  on-secondary: '#ffffff'
  secondary-container: '#c5e8f4'
  on-secondary-container: '#486973'
  tertiary: '#9b442d'
  on-tertiary: '#ffffff'
  tertiary-container: '#f4896d'
  on-tertiary-container: '#6d230e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8e8f2'
  primary-fixed-dim: '#acccd6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#2d4b54'
  secondary-fixed: '#c5e8f4'
  secondary-fixed-dim: '#aaccd7'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#2a4b55'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7c2d18'
  background: '#fff8f5'
  on-background: '#26190f'
  surface-variant: '#f8decd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 57px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  margin-desktop: 64px
  gutter: 24px
---

## Brand & Style (Narrative Framework)

The design system for **Big Planners** is built upon the foundational principles of **Material Design 3 (M3)**, structured under the lens of the **Hero's Journey storytelling framework**. The website shifts from an ordinary e-commerce catalog into a narrative pipeline where the user is the **Hero** seeking transformation, and Big Planners is the **Expert Guide**.

The visual style is **Corporate / Modern**, balanced by an organic, luxury travel journal feel. Every structural block is positioned to advance a narrative phase: from the emotional call to adventure in the hero section, passing through the social proof of previous "heroes," down to the breakdown of obstacles via strategic FAQs.

## Colors

The palette is a sophisticated "Coastal Nomad" scheme designed to provoke emotional and sensorial recall:

- **Primary (#8CABB5)**: A muted Turquoise Blue used for active paths and narrative stepping stones.
- **Secondary (#496A74)**: Ocean Blue used for anchor elements and structural surfaces.
- **Tertiary (#E17A5F)**: Coral Orange, strategically reserved for high-conversion hooks and triggers that move the traveler to act (_"Empieza tu viaje"_).
- **Neutral Sand (#907B6D)**: Grounds the interface, framing cards and text with a secure, organic touch.
- **Background (#DBD4CE)**: A sun-bleached Warm White that establishes a premium canvas for large immersive images.
- **Dark Text (#252728)**: Ensures deep contrast and high emphasis for storytelling copy and headlines.

## Typography & Copywriting Tone

This design system uses **Plus Jakarta Sans** across all levels.

The typography operates as a voice. Headlines (`headline-lg`) utilize heavy weights to state inspiring, emotional declarations rather than cold categories. Display sizes are used exclusively to highlight destination micro-stories or immersive quotes. Body text (`body-lg` / `body-md`) features generous line-heights to support an expansive, editorial reading experience. Text capitalization in metadata context (`label-sm`) replicates a rustic "travel-ticket" aesthetic.

## Layout & Spacing (Narrative Flow)

The layout follows an **8px grid system** optimized to create visual resting points that allow the storytelling elements to breathe.

- **Desktop**: A 12-column grid with a max width of 1440px. Generous `xl` margins (64px) give breathing room to landscape shots, emphasizing luxury and freedom.
- **Tablet**: An 8-column grid with 32px margins.
- **Mobile**: A 4-column grid with 16px margins.

Sections are partitioned using substantial padding to guide the reader sequentially down the page without overcrowding, mirroring the pacing of a well-told story.

## Elevation, Depth & Scrims

In accordance with M3, hierarchy is established through **Tonal Layers** rather than artificial dropshadows:

- **Level 0**: Background (#DBD4CE) – The vast blank canvas.
- **Level 1**: Surface Container (#E5E0DB) – Soft layout panels for structured content like travel summaries.
- **Level 2 (Active elements)**: Soft tinted shadow `0px 1px 3px rgba(20, 51, 66, 0.1)` to isolate interactive narrative blocks.
- **Glassmorphism**: Top navigation bars utilize a 12px backdrop blur with an 80% background opacity to give an atmospheric, misty coastal horizon feel while reading.

## Shapes

Components utilize a highly structured **Rounded Profile** to maintain safety and approachability.

Standard interactive cards, input forms, and imagery panels adopt an 8px (`0.5rem`) corner radius. This balances modern engineering precision with organic harmony. Highly critical triggers, such as floating contact buttons or active tag filters, use fully rounded pill shapes to serve as instantly recognizable callouts.

## Component Specifications (Storytelling Architecture)

- **Primary & Tertiary Buttons**: Standardized at 8px rounded corners. Primary actions use the Turquoise (#8CABB5) theme, while major conversion events use Coral Orange (#E17A5F) paired with active text like _"Elige tu próxima aventura"_.
- **Narrative Cards**: Destination layouts use a 1px solid #907B6D border at 20% opacity. They host rich imagery accompanied by sensorial copy, focusing on the destination's environment rather than technical specs.
- **Input Fields**: M3 Outlined fields with Neutral Sand borders that shift into a 2px Primary Turquoise line upon focus, welcoming the user's input.
- **Testimonial Units ("Viajeros con Historias")**: Placed higher in the page layout. Features dedicated typography blocks focusing on traveler transformation quotes, emphasizing customer satisfaction over pure service ratings.
- **Itinerary Timeline & FAQ Rails**: Vertical steps utilizing a Neutral Sand vector pathway with highly vibrant Coral Orange dots for active markers, creating a scannable map that dismantles friction points sequentially.
