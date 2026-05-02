---
name: The Design System
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363942'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1c1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3039'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#0070f3'
  on-primary-container: '#ffffff'
  inverse-primary: '#0059c5'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#c6c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#767676'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
typography:
  display-2xl:
    fontFamily: spaceGrotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: spaceGrotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: spaceGrotesk
    fontSize: 30px
    fontWeight: '500'
    lineHeight: '1.3'
  body-base:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-snippet:
    fontFamily: spaceGrotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-uppercase:
    fontFamily: spaceGrotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 64px
  stack-xs: 4px
  stack-md: 16px
  stack-xl: 48px
---

## Brand & Style

The brand personality of this design system is **Analytical, Sophisticated, and Precision-Engineered**. It is designed specifically for a high-level Data Scientist, evoking the feeling of a high-tech laboratory or a command-line interface reimagined for a premium aesthetic. The target audience includes technical recruiters, research leads, and engineering directors who value clarity, data-driven insights, and technical mastery.

The visual style is a fusion of **Technical Minimalism** and **Glassmorphism**. It utilizes the deep obsidian void of a pitch-black background to allow "electric" elements to pop, simulating a light-emissive interface. Every element is designed to feel like part of a unified, calibrated machine—utilizing translucent layers, ultra-thin glowing strokes, and focused light to guide the user's eye through complex data narratives.

## Colors

The palette is anchored in an absolute pitch black (`#000000`) to maximize contrast and eliminate visual noise. The **Electric Blue** serves as the primary action color and the source of all "emissive" light effects. The **Dark Silver** provides a sophisticated neutral for secondary information, metadata, and structural lines, ensuring they don't compete with the primary data points.

Backgrounds are strictly black, while interactive surfaces use a highly desaturated glass effect. Sub-surfaces are defined by their borders rather than their fills. For state changes (hover, active), the blue accent transitions from a sharp stroke to a diffused outer glow, simulating a "powering up" effect of the component.

## Typography

This design system uses a dual-font approach to balance human readability with technical aesthetics. **Space Grotesk** is used for headlines, labels, and "data" displays; its geometric, slightly futuristic construction reinforces the technical nature of the work. **Inter** is utilized for body text and long-form project descriptions, providing a neutral, highly legible contrast that ensures the content remains accessible.

Visual hierarchy is enforced through extreme scale differences and tracking. Labels are often set in uppercase with wide letter-spacing to mimic blueprint annotations. Code elements and technical stats should utilize Space Grotesk to maintain the "hacker-chic" appearance of a terminal while remaining perfectly clear.

## Layout & Spacing

The layout philosophy follows a **Fixed 12-Column Grid** centered within a generous safe area. This provides a structured, rigorous framework that reflects the organized mind of a data scientist. Spacing is strictly based on an 8px baseline grid to ensure mathematical consistency across all viewports.

Margins are wide and intentional, creating a "gallery" feel for project cards. Components should be stacked using a clear vertical rhythm, with ample whitespace between major sections to prevent the dark interface from feeling claustrophobic. Gutters are kept wide (`24px`) to allow the glowing borders of adjacent cards room to breathe without overlapping their light-blooms.

## Elevation & Depth

Depth in this design system is communicated through **Glassmorphism and Emissive Borders** rather than traditional shadows. 

1.  **Base Layer:** Solid pitch black.
2.  **Surface Layer (Cards/Panels):** `backdrop-filter: blur(12px)` with a `3%` white tint. This creates a subtle frosted effect that softens the black behind it.
3.  **Boundary Layer:** A `1px` border with a linear gradient. For resting states, use Dark Silver at `20%` opacity. For active or highlighted states, use Electric Blue at `100%` opacity with a `box-shadow: 0 0 15px rgba(0, 112, 243, 0.3)`.

This "stacked glass" approach allows the user to perceive layers through transparency, while the glow indicates which layer is currently active or interactive.

## Shapes

The shape language is **Precise and Technical**. We use a "Soft" roundedness level (`0.25rem` or `4px` base) to ensure the UI feels modern without becoming "bubbly" or overly casual. 

- **Cards & Primary Sections:** Use `rounded-lg` (`8px`) to provide a clear frame.
- **Interactive Buttons:** Use `rounded-sm` (`4px`) to maintain a sharp, tactical feel.
- **Data Tags/Chips:** Use `rounded-xl` (`12px`) to distinguish metadata from structural containers.

Curves are kept minimal to emphasize the grid-based, mathematical nature of the data-science subject matter.

## Components

### Glowing Buttons
Buttons are primary call-to-actions. They feature a solid Electric Blue background or a transparent background with a 1px Electric Blue border. On hover, the button should emit a 10px-20px blue outer glow and the text should slightly increase in tracking.

### Glass Cards
Project containers utilize the glassmorphism stack described in the Elevation section. They include a "Scanline" pattern (a repeating 2px transparent black line) at 5% opacity to add a CRT-technical texture. Hover states trigger the border to transition from Dark Silver to Electric Blue.

### Vertical Timeline
Used for career or project progression. The vertical line is a 1px Dark Silver stroke. Milestone nodes are small Electric Blue squares. When a milestone is active, the square glows and a horizontal "leader line" extends to the project description, mimicking an architectural call-out.

### Code Blocks
Presented as "Terminal Insets." These are recessed surfaces with no background blur, just a solid `10%` gray fill. They use Space Grotesk for the content and feature a small "Status: Live" indicator in the top right corner with a pulsing Electric Blue dot.

### Data Visualization Accents
Small decorative elements like coordinate axes, crosshair symbols in corners of cards, and "bit-rate" style breadcrumbs (e.g., `HOME / 01_PROJECTS / 04_NEURAL_NET`) to reinforce the technical theme.