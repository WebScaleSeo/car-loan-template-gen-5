# Design Agent Guidelines

You are designing React components inside an Astro + React + Tailwind CSS project.
The project uses Astro for SSG with React components hydrated via `client:load`.

## Project Structure

- `src/components/` — React components (`.jsx` + companion `.css`)
- `src/pages/` — Astro page files
- `src/layouts/Layout.astro` — Main layout (injects theme CSS variables)
- `siteConfig.json` — All site content data
- `sitePlan.json` — Site architecture and component definitions
- `tailwind.config.js` — Tailwind config with theme token mappings

## Styling System

### Tailwind CSS Classes (for layout, spacing, sizing)
Use Tailwind utility classes in JSX for layout, spacing, sizing, and responsive design.

### CSS Variables (for ALL colors — NEVER hardcode hex)
These CSS variables are injected at runtime via Layout.astro from the resolved palette. Use them everywhere.

**⚠️ NEVER hardcode hex color values.** Any hardcoded hex in `.jsx` or `.css` will be caught and the component will be REJECTED — you will be forced to redo it.

#### Base Variables (always available)

| Variable | Tailwind Token | Purpose |
|----------|---------------|---------|
| `var(--primary-color)` | `text-primary`, `bg-primary` | Brand primary color |
| `var(--secondary-color)` | `text-secondary`, `bg-secondary` | Brand secondary color |
| `var(--accent-color)` | `text-accent`, `bg-accent` | Accent highlights |
| `var(--bg-page)` | `bg-background` | Page background |
| `var(--bg-surface)` | `bg-surface` | Card/container background |
| `var(--text-primary)` | `text-text-primary` | Default text on light backgrounds |
| `var(--text-secondary)` | `text-text-secondary` | Secondary/muted text on light backgrounds |
| `var(--text-inverse)` | `text-text-inverse` | Text on dark/colored backgrounds (usually white) |
| `var(--border-color)` | `border-border` | Borders and dividers |

#### Extended Theme Variables (also always available — use these for rich visual differentiation)

These are palette-specific variables injected alongside the base 9. The **"Resolved Theme"** section at the bottom of this file lists their current values. Use them freely in CSS for gradients, glows, dark sections, badges, decorative elements, etc.

| Variable | Typical Use |
|----------|-------------|
| `var(--hero-gradient-from)` | Hero/banner gradient start color |
| `var(--hero-gradient-to)` | Hero/banner gradient end color |
| `var(--section-dark-bg)` | Dark section backgrounds (alternating sections) |
| `var(--accent-highlight)` | Accent color for borders, highlights, emphasis elements |
| `var(--element-depth)` | Depth shadows, glow effects on any element (rgba value) |
| `var(--badge-bg)` | Background for tag pills, badges, labels |
| `var(--badge-text)` | Text color inside badges/pills |
| `var(--decorative-color)` | Floating orbs, abstract shapes, background blobs (rgba) |
| `var(--hover-highlight)` | Hover state color for links, interactive elements |
| `var(--section-divider)` | Subtle divider lines between sections |
| `var(--shadow-color)` | Drop shadow color (rgba value) |
| `var(--gradient-accent)` | A ready-made gradient string — use directly as `background: var(--gradient-accent)` |

**Example usage in CSS:**
```css
.hero {
  background: linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-to));
}
.feature-card {
  border-left: 3px solid var(--accent-highlight);
  box-shadow: 0 8px 32px var(--element-depth);
}
.dark-section {
  background: var(--section-dark-bg);
}
.badge {
  background: var(--badge-bg);
  color: var(--badge-text);
}
```

### Font Families
- Headings: `font-heading` (Tailwind class) — applies the theme heading font
- Body: `font-body` (Tailwind class) — applies the theme body font
- Prefer Tailwind classes over raw CSS variable references for fonts

### Companion CSS Files
Use the companion `.css` file for animations, keyframes, gradients, hover effects, decorative elements, and clip-paths. Tailwind handles layout; CSS handles visual effects.

### Custom Breakpoints
- `mobile`: 320px
- `small`: 640px
- `mid`: 768px
- `large`: 1024px

## Contrast Rules (NON-NEGOTIABLE)

These rules prevent the #1 cause of validation failure — unreadable text:

1. **Light background** (`--bg-page`, `--bg-surface`, white, light grays) → text MUST use `--text-primary` or `--text-secondary`
2. **Dark/colored background** (`--primary-color`, `--section-dark-bg`, `--hero-gradient-from/to`, dark gradients, image overlays) → text MUST use `--text-inverse` (white)
3. **NEVER** put `--text-primary` on a `--primary-color` or `--section-dark-bg` background — they are often the same dark color
4. **NEVER** put `--primary-color` text on a `--primary-color` background
5. **Gradient backgrounds**: if any part of the gradient is dark, ALL text over it must be `--text-inverse`
6. **Image backgrounds**: ALWAYS add a dark scrim/overlay (e.g., `bg-black/60`) and use `--text-inverse`
7. **Semi-transparent cards** (any technique with partial-transparency bg): the card background must provide enough contrast for text inside — test mentally: if the bg behind the card changes, is text still readable?
8. **Body text** (paragraphs, descriptions) needs MORE contrast than headlines — keep body text at full opacity, never below 0.8

## ⚠️ DESIGN QUALITY — CRITICAL (READ THIS CAREFULLY)

Your components will be validated by a visual AI reviewer. Plain, generic, "Bootstrap-looking" designs will be REJECTED. Every component must look like it belongs on a premium, award-winning website.

### MANDATORY: No Plain White/Flat Sections

**EVERY section must have visual depth.** A plain white or flat-colored background with text and cards is NOT acceptable. You MUST add at least 2-3 of these to EVERY component:

- **Background treatments**: subtle gradients (even on "light" sections — e.g., white→soft gray gradient), mesh gradients, radial glows, noise/grain textures via CSS
- **Decorative elements**: CSS-only geometric shapes, floating orbs, abstract blobs, diagonal dividers, dot grids, ring patterns
- **Depth & layering**: overlapping elements, elements that break out of their containers, z-index stacking, parallax-style offsets
- **Animated touches**: entrance animations (fade-up, slide-in, staggered reveals), floating/pulsing decorative elements, subtle hover transforms on cards

### MANDATORY: Visual Variety Across Components

You are designing ONE component, but it sits alongside others on the page. The design prompt includes a **Background Treatment** — follow it to ensure adjacent sections alternate visually:

- **DARK**: Dark gradient or --primary-color base. Use --text-inverse for all text. Layer lighter elements on top for depth.
- **LIGHT**: Light base — but NOT plain white. Must have visible depth: subtle gradients, decorative shapes, patterns, accent borders, or textures. A flat white div is NOT acceptable.
- **ACCENT**: Bold, vivid section — --primary-color, --secondary-color, or a vivid gradient as the dominant color. High visual energy.
- **IMAGE**: Stock image background (/images/image1-8.webp) with a dark scrim overlay. Layer content on top using any technique — bold typography, color-blocked panels, bordered cards, or a semi-transparent content area.
- **NEUTRAL**: Warm/cool neutral tones — off-whites, warm grays, soft beige. NOT pure white. Pair with strong accent-colored elements for contrast.
- **GRADIENT**: Multi-color gradient as the hero visual — mesh gradient, aurora blend, radial glow, or multi-stop gradient using theme colors. The gradient IS the design statement.
- **PATTERN**: CSS pattern or texture background — repeating geometric patterns (dots, grids, chevrons), noise/grain via SVG filters, or subtle organic textures. Combine with a base color.

Treatments can be **combined** — e.g., IMAGE + GRADIENT means a photo background with a gradient overlay, or DARK + PATTERN means a dark base with a subtle texture layer. Use CSS multiple backgrounds, overlays, or blend modes to layer them.

The treatment only dictates the background mood. The actual design techniques — typography choices, color blocking, shapes, patterns, depth effects, animations, compositional structure — are YOUR creative choice. Pick what fits the component's mood and the assigned creative direction. Refer to the techniques table below.

### MANDATORY: Hero Sections Must Be Show-Stoppers

If your component is a **Hero** (the first content section on any page), it has the HIGHEST visual bar. A hero is the first thing users see — it sets the tone for the entire site.

**Your design prompt includes a "Creative Brief" section with randomly assigned layout, mood, visual effects, and motion keywords.** These are YOUR creative brief. Follow the layout structure for composition, and interpret the rest freely.

#### REQUIRED ELEMENTS (all heroes — non-negotiable):

1. **Follow the assigned layout structure** — this dictates the spatial composition (split-left, full-bleed, typography-first, etc.). The visual technique is yours to choose.
2. **Follow the Creative Direction keywords** — they define mood, visual effects, and animations. Interpret them creatively — they're inspiration, not a recipe.
3. **Bold typography** — oversized headline (48px+ on desktop), strong weight contrast between heading/subheading/body
4. **Animated CTA** — primary button must have hover effects (glow, gradient shift, hover scale, or pulse)
5. **Include the assigned secondary content element** — the prompt specifies which type (stat badges, feature pills, testimonial, counters, etc.). Use THAT specific type.
6. **CSS animations on load** — staggered entrance on headline → subtitle → CTA → secondary element

### Design Techniques (use DIFFERENT ones per component — don't repeat)

These are equally valid. No single technique is "more premium" than another. Pick what fits the component's mood and background treatment.

| Technique | How to Apply |
|-----------|-------------|
| **Gradient text** | `background: linear-gradient(...)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent` on headings |
| **Bold color blocking** | Large accent-colored areas contrasting with the main background — full section halves, not just card borders |
| **Oversized typography** | Giant headline as the design statement (80px+), giant numbers ("01", "02"), oversized stats as decoration |
| **Stroke/outline typography** | `-webkit-text-stroke` on headings for editorial, high-contrast look |
| **Clip-paths & shapes** | `clip-path: polygon(...)` for angled section dividers, circular reveals, geometric cards |
| **Frosted glass cards** | `backdrop-filter: blur(20px)`, semi-transparent bg — use sparingly, only when other components on the page don't already use it |
| **Dot/grid patterns** | CSS `radial-gradient` or `linear-gradient` repeating patterns as subtle background texture |
| **Noise/grain texture** | SVG `feTurbulence` filter or CSS background-image for organic, non-digital texture feel |
| **Asymmetric layouts** | Broken grids, off-center text, overlapping image+text compositions, masonry grids |
| **CSS animations** | `@keyframes` for entrance (fadeInUp, slideIn), staggered card reveals with `animation-delay` |
| **Decorative borders** | Gradient borders (`border-image`), accent-colored left/top borders on cards |
| **Micro-interactions** | Hover: card lifts with shadow increase, buttons scale, images zoom, border color transitions |
| **Editorial whitespace** | Generous, intentional whitespace as a design element — not emptiness, but breathing room that makes content feel premium |
| **Light beam / spotlight** | `conic-gradient` or `radial-gradient` to create spotlight or beam effects on dark backgrounds |
| **Blend modes** | `mix-blend-mode` for duotone image treatments, color overlays on photos |
| **Flat material + accent** | Clean flat design with a single strong accent color for all interactive/highlight elements — Swiss-grid inspired |

### Animation Safety Rules (NON-NEGOTIABLE)

Animations are validated by automated screenshots. The screenshot is taken at a specific moment — if elements are mid-animation in overlapping positions, the component FAILS validation.

1. **NEVER use CSS animations that move content elements to different positions** — no orbiting, rotating, circular-path, or transform-translate animations on cards, text blocks, or content containers. These cause elements to overlap at screenshot time.
2. **Entrance animations are SAFE** — fade-in, slide-up, scale-up from 0.95→1 are fine because they settle to a final static position quickly.
3. **Decorative-only motion is SAFE** — floating orbs, pulsing glows, rotating gradient backgrounds are fine because they don't affect content layout.
4. **DANGEROUS patterns** (avoid these):
   - Cards orbiting a center point → cards overlap mid-animation
   - Elements with `transform: rotate()` in `@keyframes` → content rotates off-axis
   - Masonry/stagger with large `translateY` → elements overlap before settling
   - Any animation where elements pass through each other's positions
5. **Safe patterns** (use these):
   - `opacity: 0 → 1` with slight `translateY: 20px → 0` (fade-up entrance)
   - `scale(0.95) → scale(1)` (subtle grow entrance)
   - Staggered `animation-delay` on cards with fade-in (they appear one by one)
   - Background gradient shifts, color cycling, pulsing borders (decorative, non-layout)

### What Gets REJECTED (avoid these):
- Plain white background with centered text and a card grid → REJECTED
- Header that always looks the same: logo left, links right, no creativity → REJECTED
- Cards that are just `bg-white rounded-lg shadow-md p-6` with no other visual interest → REJECTED
- Every card in a grid looking identical with no visual hierarchy → REJECTED
- No CSS animations or transitions whatsoever → REJECTED
- Timeline with just circles and lines on white background → REJECTED
- Any component that looks like it came from a free Bootstrap/Tailwind template → REJECTED
- **ALL dark/moody sections with no light sections** — pages need contrast between light and dark areas → REJECTED

### What Gets APPROVED (aim for these):

**Hero Examples — variety matters, not a specific style:**
- Hero with oversized 80px+ headline as the design statement, minimal decoration, strong accent color line
- Split layout: text left, bold visual right — asymmetric, overlapping elements for depth
- Full-bleed image background with dark scrim, centered content, staggered entrance animations
- Gradient-only background (no image), editorial typography with strong weight contrast
- Bottom-anchored content, upper portion is a visual statement, magazine-cover feel
- Diagonal clip-path dividing two color zones, content flowing across the angle

**Section Examples — these all pass equally:**
- Card section with staggered fade-in, accent-colored left borders on cards, subtle background gradient — clean and readable
- Card section on a dark background with depth from layered box shadows — not necessarily glass
- Timeline with alternating section colors, oversized year numbers, animated connecting lines
- FAQ with animated accordion, gradient section header, decorative side elements
- Clean light-background section: strong editorial typography, accent-colored elements, intentional whitespace as a design element
- Color-blocked section: bold primary-color left panel, light right panel, content spanning both

**Header Examples — MANY valid styles exist** (your design prompt includes a Header Archetype — follow it!):
- **Centered Editorial:** Logo centered at top, navigation split left/right below. Elegant whitespace. Fade-in on load.
- **Transparent Overlay:** Floats over hero background. Solidifies on scroll with subtle shadow.
- **Thick Branded:** Tall single-row header with large logo, bold nav links, thick accent bottom border. Corporate feel.
- **Ultra-Minimal:** Single horizontal line. Logo left, wide-spaced text links right. Clean negative space.
- **Split Panel:** Left half dark/branded with logo, right half light with navigation. Bold contrast.
- **Gradient Band:** Full-width gradient background, all text in --text-inverse, accent CTA button.
- **Sticky Minimal:** Thin header that shrinks on scroll, logo scales down, nav stays. Smooth transitions.

**Footer Examples — Equal variety needed:**
- **Dark Gradient:** Deep gradient background, 3-4 column grid, accent section headers, hover glow on links.
- **Neutral Warm:** Warm gray/beige background with subtle texture. Dark text. Organized link groups with visual separators.
- **Accent Bold:** Brand-colored background with gradient depth. White text. Strong visual statement.
- **Pattern Texture:** Dark base with CSS geometric pattern (dots, grid, noise). Link group containers with subtle borders.
- **Minimal Clean:** Clean dark footer, single row or compact grid, subtle hover underline animations.

## Available Stock Images

The project has 8 stock images in `/images/`:
- `/images/image1.webp` through `/images/image8.webp`
- Use them for hero backgrounds, section visuals, feature illustrations
- Always add overlays/scrims when placing text over images
- If the component is purely text-based (FAQ, form), images are optional

## File Scope

You may ONLY edit the two files for your assigned component:
- `src/components/{ComponentName}.jsx`
- `src/components/{ComponentName}.css`

Do NOT create any other files. Do NOT write screenshot scripts, helper scripts, or temp files.

## Self-Review Process

After writing the component:
1. **Preview** — Navigate to the page URL and take a screenshot
2. **Check visual quality** — Does this look like a premium website? Would a designer be proud of this? If it looks generic or template-like, redesign it.
3. **Check text readability** — Can you read EVERY piece of text at a glance? If any text blends into its background, fix it immediately
4. **Check content** — Is all data from props rendered? No missing sections?
5. **Check layout** — No text cutoff, overflow, or broken alignment?
6. **Check background** — Is there visual depth? Gradients, decorative elements, animations? If the background is just plain white/flat, add visual treatments.
7. **Fix issues** — If anything fails, fix it and re-preview before signaling completion

You MUST take a screenshot and visually verify your work before signaling completion. Do NOT signal completion based on code review alone.

## Completion Signal

When done: `COMPONENT_{COMPONENTNAME}_COMPLETE` (e.g., `COMPONENT_HEADER_COMPLETE`)

## Resolved Theme: Midnight Luxe

This is the ACTIVE color palette for this project. All CSS variables resolve to these values:

| CSS Variable | Value | Use For |
|-------------|-------|---------|
| `--primary-color` | #1A1035 | Brand color, accent backgrounds, CTA buttons |
| `--secondary-color` | #2D1F5E | Supporting brand color, highlights |
| `--accent-color` | #9B2C8C | Hover states, small highlights |
| `--bg-page` | #F8F7FC | Default page/section background |
| `--bg-surface` | #FFFFFF | Card and container backgrounds |
| `--text-primary` | #1A1035 | Body text on light backgrounds |
| `--text-secondary` | #5A5270 | Muted/secondary text on light backgrounds |
| `--text-inverse` | #FFFFFF | Text on dark or colored backgrounds |
| `--border-color` | #E4E0F0 | Borders, dividers |

### Extended Theme Variables (use these for deep visual differentiation):

These extra variables are injected into `:root` automatically — use them in CSS for gradients, glows, card borders, decorative elements, etc. NEVER hardcode the underlying hex values — use the variable.

| CSS Variable | Current Value |
|-------------|---------------|
| `--hero-gradient-from` | `#1A1035` |
| `--hero-gradient-to` | `#2D1F5E` |
| `--section-dark-bg` | `#110A24` |
| `--accent-highlight` | `#9B2C8C` |
| `--element-depth` | `rgba(155, 44, 140, 0.15)` |
| `--badge-bg` | `#F0E6F5` |
| `--badge-text` | `#1A1035` |
| `--decorative-color` | `rgba(26, 16, 53, 0.12)` |
| `--hover-highlight` | `#822475` |
| `--section-divider` | `#E4E0F0` |
| `--shadow-color` | `rgba(26, 16, 53, 0.2)` |
| `--gradient-accent` | `linear-gradient(135deg, #1A1035, #9B2C8C)` |

### Contrast Pairings for THIS Palette:
- **Default sections**: bg `#F8F7FC` + text `#1A1035` ✅
- **Card sections**: bg `#FFFFFF` + text `#1A1035` ✅
- **Dark accent sections**: bg `#1A1035` + text `#FFFFFF` ✅
- **DANGER**: bg `#1A1035` + text `#1A1035` ❌ (same or similar color!)

### Fonts:
- Headings: **Playfair Display** (`font-heading`)
- Body: **Lato** (`font-body`)

### ⚠️ IMPORTANT:
- ONLY use CSS variables (e.g. `var(--primary-color)`, `var(--hero-gradient-from)`) — NEVER hardcode hex values in components
- Do NOT import or reference `theme.js`, `theme-data/`, `palettes.json`, or any theme files
- The palette is already injected via Layout.astro — just use the CSS variables
- Components that hardcode hex colors (#XXXXXX) will be REJECTED at validation
