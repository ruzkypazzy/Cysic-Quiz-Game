# Cysic Knowledge Challenge - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Tech/Crypto Platform Aesthetic)  
**Primary Inspiration:** Cyberpunk tech aesthetic blending Stripe's clarity + crypto platform visual language (Ethereum.org, Solana) + gaming UI polish

**Core Principle:** Create an immersive, tech-forward quiz experience that communicates Cysic's cutting-edge blockchain technology through visual design while maintaining functional clarity.

---

## Typography

**Font Stack:**
- Primary: 'Orbitron' (Google Fonts) for headings - conveys technical precision
- Secondary: 'Inter' (Google Fonts) for body text - optimal readability
- Monospace: 'JetBrains Mono' for score displays and technical elements

**Hierarchy:**
- Quiz Title: 2xl (24px), bold, Orbitron
- Question Text: lg (18px), semibold, Inter
- Answer Options: base (16px), medium, Inter
- Result Title: 3xl (30px), bold, Orbitron
- Score Display: 4xl-6xl (36-60px), bold, Inter
- Metadata: sm (14px), regular, Inter

---

## Layout System

**Spacing Units:** Tailwind units of 2, 4, 6, 8 (p-2, m-4, gap-6, h-8, etc.)

**Container Strategy:**
- Quiz card: max-w-md (448px) centered with p-8
- Full viewport height: min-h-screen
- Card internal spacing: 4-6 units between elements
- Button/option spacing: gap-3 for stacked elements

**Grid Structure:**
- Quiz options: Single column stacked (grid gap-3)
- No multi-column layouts - maintains focus and mobile-first design

---

## Component Library

### Core Components

**Quiz Card Container:**
- Background: Glassmorphic dark panel (gray-900/90 opacity)
- Border: 1px cyan-600/30 (30% opacity)
- Border radius: 2xl (16px)
- Padding: p-8
- Shadow: Large blur with cyan tint
- Z-index: Elevated above background effects

**Answer Buttons:**
- Base state: bg-gray-800, border cyan-600
- Hover: bg-cyan-500/40 with smooth transition
- Border radius: lg (8px)
- Padding: py-2, px-4
- Full width, left-aligned text
- Transition: all 200ms

**Primary CTA (Share Badge):**
- Background: solid cyan-500
- Hover: cyan-600
- Border radius: xl (12px)
- Padding: px-6 py-3
- Font: semibold
- Icon: emoji suffix (🪩)

**Progress Indicator:**
- Text-based: "Question X of Y"
- Color: gray-400 (muted)
- Size: sm-base
- Position: Above question text

**Score Display:**
- Large numeric: 4xl-6xl size
- Color: cyan-400 accent
- Format: "X/5" with fraction
- Supporting text in gray-400

### Animated Background Elements

**Floating Orbs:**
- Two positioned circles (top-left, bottom-right)
- Size: w-[400px] h-[400px]
- Colors: cyan-500/20 and sky-600/10
- Effect: rounded-full + blur-3xl
- Animation: Pulse (subtle breathing effect)
- Position: absolute, behind main content

### Badge Canvas Design

**Canvas Dimensions:** 600x400px

**Visual Treatment:**
- Background: Diagonal gradient (slate-950 → cyan-600)
- Glowing ring: Centered circle with cyan glow effect
- Logo watermark: 15% opacity, centered
- Text layers:
  - Title: Bold 26px Orbitron (white)
  - Achievement tier: 22px (white)
  - Score: Bold 64px (white)
  - Footer: 18px, cyan-100 shade

---

## Visual Effects

**Glassmorphism:**
- Applied to main quiz card
- Blur backdrop with semi-transparent backgrounds
- Subtle borders with low opacity accent colors

**Glow Effects:**
- Canvas ring: Shadow blur 40px, cyan-500
- Background orbs: Large blur-3xl
- No glow on interactive elements (buttons handle their own states)

**Animations:**
- Background orbs: Subtle pulse (animate-pulse)
- NO animations on buttons/interactions
- NO hover/active states on hero-style buttons
- Transitions: 200ms for color/background changes only

---

## Color Treatment (Layout Context Only)

**Semantic Usage (No specific colors - focus on hierarchy):**
- Primary container: Darkest background tier
- Card surface: Mid-dark with transparency
- Accent elements: Bright technical accent (borders, highlights)
- Text primary: Lightest shade
- Text secondary: Muted mid-tone
- Interactive elements: Accent color at multiple opacity levels (40%, 30%)

---

## Accessibility Implementation

- All buttons: Full keyboard navigation support
- Focus states: Match hover treatments
- Text contrast: Ensure readability against all backgrounds
- Quiz flow: Linear, predictable progression
- Canvas alt text: Descriptive title for screenreaders

---

## Images

**No hero image required.** This is a single-page quiz application where the focus is on the interactive quiz experience and badge generation. The animated gradient background orbs provide sufficient visual interest without needing hero imagery.

**Logo usage:** Cysic logo appears as watermark in generated badge canvas (15% opacity, centered positioning).

---

## Implementation Notes

- Maintain consistent 2-4-6-8 spacing rhythm
- All interactive elements use standard button patterns (no custom hover states)
- Badge generation happens client-side via Canvas API
- Single viewport card-based layout - no scrolling required
- Mobile-first responsive (single column maintained across breakpoints)
- Results screen replaces quiz UI (no navigation between states)