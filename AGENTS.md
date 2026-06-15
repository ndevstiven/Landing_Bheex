# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

---

## Quick commands

```bash
# Development
npm run dev          # Start local dev server (http://localhost:3000)

# Build & preview
npm run build        # Build static site to ./dist/
npm run preview      # Preview built site locally

# Direct astro CLI
npm run astro -- --help
```

---

## Project overview

**Bheex.ai** — Landing page for AI agent platform (support, sales, marketing automation).

- **Framework**: Astro 6.4 (SSR via Node adapter)
- **Tech stack**: Astro components, TypeScript, i18n content layer, Lenis (smooth scroll), GSAP (animations)
- **Node requirement**: >=22.12.0
- **Output**: Server (not static) — allows future API routes, A/B testing

---

## Architecture & structure

### `src/components/`
Modular Astro components for page sections. Each follows the design system (DESIGN.md):
- `Nav.astro` — sticky navbar, logo + links + CTA button
- `Hero.astro` — headline, subhead, dual CTAs, hexagonal geometry
- `ProofBar.astro` — social proof metrics or client logos
- `Agents.astro` — 3 use-case cards (Support / Sales / Marketing)
- `HowItWorks.astro` — process flow with steps
- `Results.astro` — metrics/outcomes section
- `CTA.astro` — final call-to-action block
- `Footer.astro` — nav + social + legal links
- `AgentDemo.astro` — interactive demo (if applicable)
- `ChatWidget.astro` — chat interface component

### `src/pages/`
- `index.astro` — main landing page (home)
- `api/chat.ts` — API endpoint for demo chat (uses Anthropic SDK)

### `src/i18n/`
- `content.ts` — centralized copy/CTA text for the site (Spanish primary, English secondary)

### `src/styles/`
Global styles. Implement CSS variables from DESIGN.md (colors, typography, spacing, motion tokens).

---

## Design system (DESIGN.md)

**Critical**: The design system is locked in DESIGN.md. Follow exactly:

### Colors (CSS variables)
```css
--color-brand:      #F67029;   /* Orange Bheex — CTAs, accents only */
--color-warm:       #FFD9AC;   /* Beige — headlines on dark */
--color-muted:      #575756;   /* Gray — borders, muted text */
--color-bg:         #0D0D0D;   /* Black — primary background */
--color-surface:    #1A1A1A;   /* Raised black — cards, panels */
```

### Typography
- `Rubik` (400, 500, 600, 700) — headlines only (h1–h3)
- `Inter` (400, 500) — body, labels, captions
- Use `text-wrap: balance` on all headings

### Geometry
- Hexagonal motif (logo grid) — propagates to background accents, decorative elements
- No rounded-rectangle cards by default — sharp (0px) or subtle (4–6px) radius
- Orange diagonal cuts as visual dividers

### Motion
- Entry: fade-up (24px Y translate), 400–600ms, ease-out-quart
- Hover CTAs: scale(1.02) + glow with orange shadow, 200ms
- Hex elements: slow ambient rotation (60–90s), very subtle
- No elastic/bounce/spring — B2B premium tone

### Anti-patterns (NEVER)
- No AI-purple/blue gradients — brand is orange + black
- No glassmorphism
- No mesh gradients
- No centered hero over generic dark background
- No white primary surface — dark-first brand
- No recoloring logos

---

## Key dependencies & integrations

### Astro
- SSR via `@astrojs/node` (standalone mode)
- Components use `.astro` syntax (no React/JSX)

### Anthropic SDK
- `@anthropic-ai/sdk` — powers `/api/chat.ts` endpoint
- **Setup**: Requires `ANTHROPIC_API_KEY` in `.env` (see `.env.example`)

### Animation
- `gsap` (3.15) — complex animations (if needed beyond CSS)
- `@studio-freight/lenis` (1.0.42) — smooth scrolling integration

### i18n approach
- Content centralized in `src/i18n/content.ts` — no file-based routing yet
- Components consume text from content layer (avoid hardcoded strings)

---

## Environment variables

Required for chat API to function:

```bash
# .env
ANTHROPIC_API_KEY=sk-ant-...
```

See `.env.example` for template.

---

## Component patterns

### New component template
```astro
---
// src/components/MyComponent.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<section class="my-component">
  <h2 class="text-h2">{title}</h2>
  {/* content */}
</section>

<style>
  .my-component {
    padding: var(--space-8);
    background: var(--color-surface);
    border-radius: var(--radius-card);
    border: 1px solid var(--color-muted);
  }
  
  .my-component h2 {
    color: var(--color-warm);
    font-family: var(--font-display);
    text-wrap: balance;
  }
</style>
```

### Styling rules
- Always use CSS variables from `src/styles/` (not hardcoded hex)
- Use 8px spacing grid (`--space-1` through `--space-16`)
- Never override design tokens — extend them in `src/styles/variables.css`

---

## API endpoint: `/api/chat`

**File**: `src/pages/api/chat.ts`

- Receives chat messages from frontend demo
- Calls Anthropic Codex API
- Returns streamed or batched responses

**Note**: Uses `ANTHROPIC_API_KEY` from env. Requires Node >=22.12.0.

---

## Copy & localization (i18n)

All user-facing text lives in `src/i18n/content.ts` — not in components.

Example:
```typescript
// src/i18n/content.ts
export const es = {
  nav: {
    home: 'Inicio',
    demo: 'Demo',
    cta: 'Solicitar demo',
  },
  hero: {
    headline: 'Tus agentes trabajan. Tú decides.',
    subhead: 'Deploy AI agents en horas, no meses.',
  },
  // ...
};

export const en = { /* English versions */ };
```

Components import and use:
```astro
---
import { es } from '../i18n/content';
const t = es; // Switch to `en` if needed
---
<h1>{t.hero.headline}</h1>
```

---

## Build & deployment

### Local preview
```bash
npm run build
npm run preview
```

### Production
- Build outputs to `./dist/`
- Deployed via Node adapter (SSR server, not static)
- Requires Node >=22.12.0 in production

---

## Design assets

All logos and brand files in `identidad_visual/`:
- `Logos/Bheex.Logos.principal.png` — primary logo (dark bg)
- `Logos/Bheex.Logo.positivo.png` — light bg variant
- `Logos/Bheex.Isotipo.principal.png` — icon only (favicon, mobile)
- `Logos sin fondo/` — transparent background variants

**Important**: Never recolor, rotate, or re-export logos at low quality. Always use source PNG/SVG files.

---

## Notes for future work

1. **i18n routing**: Currently manual switching in components. Consider Astro i18n plugin for `/es/` and `/en/` routes if needed.
2. **Analytics**: No tracking integrated yet — add Segment/Mixpanel/GA4 when metrics requirements defined.
3. **Demo integration**: `ChatWidget.astro` and `api/chat.ts` are placeholder foundations. Enhance as needed.
4. **Social proof**: `ProofBar.astro` expects client logos or metrics — populate with real data.
5. **Testimonials**: Section not yet implemented — add `Testimonials.astro` following design system.
