# Bheex.ai — Design System

Brand Manual v1.0 — Mayo 2026

---

## Philosophy

Technology as organic catalyst, not cold substitute. The visual language is premium, technological, and deeply human. Dark, bold, warm — not clinical, not generic SaaS.

---

## Colors

### Primary palette

| Role | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| Accent / Primary | Naranja Bheex | `#F67029` | 246, 112, 41 | CTAs, highlights, active states, logo fill, geometric accents |
| Text / Warm | Beige Bheex | `#FFD9AC` | 255, 217, 172 | Headlines on dark, secondary text, logo wordmark color |
| Neutral / Tech | Gris Bheex | `#575756` | 87, 87, 86 | Borders, dividers, muted text, footer bg, tech UI elements |
| Background | Negro Bheex | `#0D0D0D` | 13, 13, 13 | Primary page background |
| Surface | Negro Elevado | `#1A1A1A` | 26, 26, 26 | Cards, panels, modals |

### Extended tokens (OKLCH equivalents for impeccable)

```css
--color-brand:     oklch(62% 0.18 42);   /* #F67029 naranja */
--color-warm:      oklch(89% 0.08 60);   /* #FFD9AC beige */
--color-muted:     oklch(40% 0.00 0);    /* #575756 gris */
--color-bg:        oklch(8% 0.00 0);     /* #0D0D0D negro */
--color-surface:   oklch(13% 0.00 0);    /* #1A1A1A negro elevado */
--color-ink:       oklch(95% 0.01 60);   /* texto principal sobre oscuro */
```

### Rules

- Never change logo colors — isotipo always in `#F67029`, wordmark in `#FFD9AC` on dark
- Orange on black: always passes contrast for large text (≥18px)
- Beige body text on black: verify ≥4.5:1 — `#FFD9AC` on `#0D0D0D` passes at ~9:1
- Gray text on black: `#575756` on `#0D0D0D` = 3.5:1 — use only for labels/captions ≥14px bold
- Never use orange as body text color — accent only

---

## Typography

### Fonts

| Role | Family | Weights | Source |
|---|---|---|---|
| Primary / Display | **Rubik** | 400, 500, 600, 700 | Google Fonts |
| Secondary / Body | **Inter** | 400, 500 | Google Fonts |

```css
--font-display: 'Rubik', sans-serif;
--font-body:    'Inter', sans-serif;
```

### Scale

| Token | Size | Weight | Font | Usage |
|---|---|---|---|---|
| `--text-hero` | clamp(3rem, 6vw, 5.5rem) | 700 | Rubik | Hero headline |
| `--text-h1` | clamp(2rem, 4vw, 3.5rem) | 600 | Rubik | Section titles |
| `--text-h2` | clamp(1.5rem, 3vw, 2.25rem) | 600 | Rubik | Sub-section |
| `--text-h3` | clamp(1.125rem, 2vw, 1.5rem) | 500 | Rubik | Card titles |
| `--text-body` | 1rem | 400 | Inter | Body copy |
| `--text-small` | 0.875rem | 400 | Inter | Captions, labels |
| `--text-label` | 0.75rem | 500 | Inter | Tags, eyebrows (uppercase) |

### Rules

- `text-wrap: balance` on all headings h1–h3
- Body line-length: max 68ch
- Letter-spacing on hero: -0.02em to -0.03em (Rubik needs slight tightening at display sizes)
- Eyebrow labels: uppercase, `--text-label`, `#F67029`, letter-spacing 0.08em
- Never Inter for headlines — Rubik only above h3

---

## Geometry & Shape

The isotipo is built on a **hexagonal grid**. This motif propagates throughout the UI:

- Hexagonal background watermarks at low opacity (`#F67029` at 4–8% on black)
- Corner geometric accent elements — orange diagonal cuts (as seen in brand slides)
- Decorative hex shapes: use as section separators, card backgrounds, subtle texture
- No rounded-rectangle cards by default — either sharp corners (0) or very subtle radius (4–6px) for tech feel
- The "X" cut mark (from isotipo) can appear as a divider or section marker

### Pattern usage

```css
--radius-card: 6px;
--radius-button: 4px;
--radius-badge: 3px;
/* Hexagonal accents are SVG/clip-path, not CSS border-radius */
```

---

## Spacing

Base unit: 8px grid

```css
--space-1:  8px
--space-2:  16px
--space-3:  24px
--space-4:  32px
--space-6:  48px
--space-8:  64px
--space-12: 96px
--space-16: 128px
```

Section padding: `--space-16` top/bottom on desktop, `--space-8` on mobile.

---

## Motion

Tone: **purposeful, smooth, confident** — not flashy, not bouncy. The brand is premium B2B.

```
MOTION_INTENSITY: 5
```

- Entry animations: fade-up with slight Y translate (24px → 0), ease-out-quart, 400–600ms
- Hover states on CTAs: scale(1.02) + glow with brand orange shadow, 200ms
- Hexagonal elements: slow ambient rotation or parallax (60–90s loops), very subtle
- Stagger children: 80ms between items max
- No elastic, no bounce, no spring
- `@media (prefers-reduced-motion)`: crossfade only, no translate

---

## Logo usage

### Files (in `assets/logos/`)

| File | Use |
|---|---|
| `Bheex.Logos.principal.png` | Primary — dark backgrounds |
| `Bheex.Logo.positivo.png` | Light backgrounds |
| `Bheex.Logos.negativopng.png` | Negative/monochrome |
| `Bheex.Isotipo.principal.png` | Icon only — favicon, mobile |

### Rules

- Minimum clear space: width of the "X" symbol on all sides
- Never outline-only (no stroke without fill)
- Never recolor — isotipo = `#F67029`, wordmark = `#FFD9AC` on dark
- Never rotate or distort
- Always use PNG/SVG source files — never screenshot or re-export at low quality
- On light backgrounds: use `Bheex.Logo.positivo.png` (dark isotipo, dark wordmark)

---

## Components

### CTA Button (primary)

```css
background: #F67029;
color: #0D0D0D;
font: 500 1rem 'Rubik';
padding: 14px 28px;
border-radius: 4px;
letter-spacing: 0.01em;
/* hover */
filter: brightness(1.1);
box-shadow: 0 0 20px oklch(62% 0.18 42 / 0.4);
```

### CTA Button (secondary / ghost)

```css
background: transparent;
border: 1px solid #F67029;
color: #F67029;
/* hover */
background: oklch(62% 0.18 42 / 0.08);
```

### Card / Feature tile

```css
background: #1A1A1A;
border: 1px solid oklch(40% 0.00 0 / 0.5);
border-radius: 6px;
padding: 32px;
/* hover accent line */
border-top: 2px solid #F67029;
```

### Eyebrow label

```css
font: 500 0.75rem 'Inter';
text-transform: uppercase;
letter-spacing: 0.08em;
color: #F67029;
```

---

## Anti-patterns (NEVER do)

- No AI-purple or blue gradients — this brand is orange and black
- No glassmorphism with blue tones
- No mesh gradient backgrounds — use deep black with subtle hex geometry
- No three symmetrical feature cards in a row — vary layout
- No centered hero over generic dark mesh — use brand geometry instead
- No Inter for display/hero text — Rubik only
- No changing logo colors
- No rotating the logo
- No logo in outline/stroke mode
- No white backgrounds as primary surface — brand is fundamentally dark-first

---

## Page structure (landing)

Recommended section order:

1. **Nav** — logo left, links center, CTA right, sticky, bg transparent → `#0D0D0D/90` on scroll
2. **Hero** — headline (Rubik 700), subhead, dual CTA, hex background geometry
3. **Social proof bar** — logos or metrics strip, muted
4. **Use cases** — 3 agents (Support / Sales / Marketing), non-symmetric layout
5. **How it works** — process steps, orange accent numbering
6. **Results / metrics** — bold numbers in Rubik, brand orange
7. **Testimonials** — if available
8. **Final CTA** — full-width section, high contrast, hex decorative element
9. **Footer** — dark, logo, nav, social links

---

## Voice & Copy tone

- Direct, confident, no filler words
- B2B but human — avoid "leverage synergies" style
- Short sentences. Action-first verbs.
- Spanish primary, English secondary
- Examples: "Tus agentes trabajan. Tú decides." / "De la conversación a la conversión, automatizado."
