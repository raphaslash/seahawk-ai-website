# Seahawk AI — Design System

A warm, confident brand system for **Seahawk AI**, a club that presents meeting slide decks and publishes Instagram stories. The system wears a single deep-green identity across every surface: a warm cream canvas, a five-tier green palette, brass reserved for ceremony, and three disciplined typefaces (Inter / Lora / Caveat). Its signature flourish is a set of six thin-stroke **line-art motifs** — feathers, wings, flight paths, branches, sprigs, swooshes — rotated as section accents so no two surfaces feel alike.

> **What this system is for:** meeting-presentation slides (16:9) and Instagram stories (9:16). It is *not* a shopping product — retail-specific parts of the source template (gift-card tiles, cup-size selectors, nutrition tables, the FAB order button) were intentionally dropped and generalized into presentation primitives.

## Sources

- **`uploads/PRIMARY DESIGN TEMPLATE.md`** — the primary brand/visual specification this system implements. A complete, anonymized "warm retail" design template (colors, type, components, spacing, elevation, motion). Adopted **as-is** as Seahawk AI's visual language per the client's direction; retail-only components were generalized for a slides + stories use case.
- No codebase or Figma file was provided. The **logo** was supplied separately (see **Brand mark** below). See **Iconography** for the icon-set substitution.

## Brand mark (logo)

The Seahawk AI logo (a circuit-lined hawk head, originally navy + green) lives in `assets/`:
- **`seahawk-logo-original.png`** — the mark as supplied (navy + green, transparent bg).
- **`seahawk-logo-green.png`** — recolored into the palette for **light/cream slides**: deep-green hawk, Brand-Accent green circuits, white feathers. This is the deck's working logo.
- **`seahawk-logo-cream.png`** — a light/mint version for **dark Brand-Deep slides**.

The recolor keeps the mark's structure but swaps the clashing navy into the brand greens, so it “stands out partially while matching the theme.” It's wired into the slide deck: the **logo alone** (no “Seahawk AI” text) sits top-left on every slide, and the mark is featured large on the Title and Closing slides. **Not yet applied to the Stories kit or `thumbnail.html`** — say the word and I'll propagate it.

---

## CONTENT FUNDAMENTALS

How Seahawk AI copy is written — for slides and stories.

- **Voice:** warm, confident, plain-spoken. It sounds like a capable friend, not a corporation and not a hype account. Legible over clever.
- **Person:** first-person plural for the club ("**we** shipped it", "**our** crew"), second person when addressing members ("**you're** up next"). Avoid faceless third-person.
- **Casing:** **sentence case** for headlines and body ("Here's where we landed"). **UPPERCASE + wide tracking** (`0.15em`) *only* for kickers/eyebrows and small labels ("MEETING AGENDA", "Q3 RECAP"). Never all-caps a full sentence.
- **Tone by surface:** slides are calm and declarative (one idea per slide, short headline + a line of support). Stories are punchier and more personal (a single hook, a name, a date).
- **Numbers & ceremony:** lead with the number on metric moments ("312% — YoY growth"). The brass **★** glyph marks ceremony/recognition ("★ Member of the month") and nothing else.
- **Length:** ruthless. Slide headlines ≤ 8 words; story hooks ≤ 5. If a sentence survives word-removal unchanged in meaning, cut the words.
- **Emoji:** **not used.** The brand's personality comes from the line-art motifs, the script accent (Caveat), and the brass ★ — not emoji.
- **Script accent:** Caveat is used sparingly for *personal* touches — a signature, a name on a story, a hand-written aside ("for the crew"). Never for headlines or body.

**Examples**
- Section header: kicker `MEETING AGENDA` → headline "What we're covering today"
- Metric: `312%` (serif) → "YoY growth" → "vs. last quarter"
- Story hook: "You're up next." + Caveat signature "— see you Thursday"
- Ceremony: Pill (brass) "★ Featured" → "Member of the month: Dana"

---

## VISUAL FOUNDATIONS

- **Palette — five-tier greens, each with a role.** Brand Green `#1e6e57` (headings), Brand Accent `#17845c` (filled CTAs / signature fills), Brand Deep `#17332c` (bands, footers, dark ceremony), Uplift `#33574c` (decorative), Light `#d6e8e1` (mint washes/tints). Don't collapse these into "one green."
- **Brass is ceremony-only.** `#c39a5b` and its washes appear on recognition/status moments — never as a general accent.
- **Canvas is warm, never cold white.** Neutral Warm `#f1efea` is the primary canvas; Ceramic `#ebe9e6` for softer zones; white is for cards *on top of* cream. The cream temperature is load-bearing.
- **Type — three faces, three contexts.** Inter (humanist sans) for nearly everything; Lora (editorial serif) for headline/metric moments; Caveat (script) for personal touches. Tracking is **tight** almost universally: `-0.01em` (`-0.16px` at display sizes).
- **Hierarchy by weight + color, not size.** H1 and H2 are both 24px — 600/Brand-Green vs 400/Ink separates them.
- **Body ink is never pure black** — `rgba(0,0,0,0.87)` to match the warm canvas.
- **Backgrounds are solid color-block. No gradients.** Depth comes from banding (cream → white → deep-green) and from whisper-soft layered shadows, not from fills. Page rhythm: cream hero → white content → deep band → cream → deep footer (a dark bookend).
- **Decorative line-art motifs** are the signature background/foreground texture: ten thin (1–2px) stroke motifs at **15–40% opacity** (higher only when a `swoosh`/`flight` is actively pointing at a CTA). Rotate 1–2 per surface; never repeat the same motif everywhere.
- **Spacing** is a rem-based scale anchored at **16px** — the universal rhythm unit. Sections breathe generously (40–64px); whitespace separates blocks instead of dividers.
- **Radii:** `50px` full-pill on **every** button (no exceptions), `12px` cards/modals, `4px` outlined fields, `50%` circles/avatars.
- **Elevation** is whisper-soft and **layered** — 2–3 low-alpha shadows, never one heavy drop. Card `0 0 .5px/.14 + 0 1px 1px/.24`; nav is a 3-layer lift; the FAB (retail-only, retained as a token) is the most elevated element.
- **Cards** are white, 12px radius, with the layered card shadow; the `deep` variant is a Brand-Deep panel with white text.
- **Borders:** hairline `#e7e7e7` for content rules, `#d6dbde` for input borders. Used sparingly.
- **Motion** is restrained. Signature press = `transform: scale(0.95)` with `0.2s ease`. Measured ease-out `cubic-bezier(.25,.46,.45,.94)` for expanders; a springy `cubic-bezier(.32,2.32,.61,.27)` for option markers; images fade in `opacity 0.3s ease-in`. No bounces on layout, no parallax.
- **Hover / press:** hover is subtle (slight opacity/tint shift); press is the scale-down. Never a color inversion on hover.
- **Transparency & blur:** two alpha ladders (black-on-light, white-on-dark) power overlays and secondary text. No heavy backdrop-blur in the source — keep glass effects out.
- **Imagery vibe:** warm and tactile — clean product/context photography with soft shadows; illustrated moments have a hand-painted, warm feel. Cool/desaturated/grainy imagery is off-brand.

---

## ICONOGRAPHY

- **Source approach:** the reference used **inline SVG icons** — thin-stroke, rounded, single-color (chevrons, shopping bag, info, a sparkle ✨, cup silhouettes). No built-in icon *font* and no icon files were provided.
- **Substitution (flagged):** since no icon assets were shipped, this system standardizes on **[Lucide](https://lucide.dev)** (thin ~2px stroke, rounded caps/joins) loaded from CDN — it matches the line-art aesthetic and the source's stroke feel. If you have a specific icon set, send it and I'll swap it in. Icons should render in `currentColor` at the surrounding text color; use Brand Accent for interactive icons on light, white on dark bands.
- **Decorative vector language (bespoke, in-system):** the **`LineArt`** component is the brand's signature illustration system — ten thin-stroke motifs (`feather`, `wing`, `spark`, `branch`, `sprig`, `olive`, `flight`, `swoosh`, `sword`, `kunai`) rendered as inline SVG so they're lightweight and responsive. These are *decorative accents*, not UI icons.
- **Glyph accents:** the brass **★** is used as a ceremony/points glyph. **Emoji are not used** anywhere in the brand.

---

## Components

Reusable React primitives (import from `window.SeahawkAIDesignSystem_2e2732`). Retail-specific parts of the source were dropped; these are the presentation-focused primitives.

**Core** (`components/core/`)
- **Button** — universal full-pill CTA; variants `filled · outline · black · darkOutline · inverted · outlineOnDark`, sizes `sm/md/lg`, signature `scale(0.95)` press.
- **Pill** — small full-pill tag/label; `accent · brass · solid · mint · ondark` (brass = ceremony).
- **Card** — 12px content container with layered shadow; `default · deep · brass · cool · mint`.
- **Callout** — tinted note block with a thin accent bar; `mint · brass · deep`.
- **Stat** — large serif metric + label for stats/metrics slides.
- **Kicker** — uppercase wide-tracked eyebrow label.
- **Divider** — thin hairline rule; `hairline · soft · dashed`, `ondark`.

**Motifs** (`components/motifs/`)
- **LineArt** — the ten-motif decorative line-art system (`feather · wing · spark · branch · sprig · olive · flight · swoosh · sword · kunai`); rotate 1–2 per section. Exports `LINE_ART_VARIANTS`.

### Intentional additions
There was no source component *inventory* (the reference is a brand spec, not a component library), so the primitive set above was authored from the spec's documented button/card/pill/callout patterns, plus the client-requested **LineArt** motif system. All values trace to the source spec; `LineArt` is the requested decorative addition.

---

## UI Kits

- **`ui_kits/slides/`** — meeting-presentation deck (1280×720). Interactive click-through in `index.html`; per-slide types: Title, Agenda, Section divider, Content, Comparison, Metrics, Quote, Closing.
- **`ui_kits/stories/`** — Instagram stories (1080×1920). Interactive tap-through in `index.html`; templates: Cover, Announcement, Quote, Stat, Event, Closing.

---

## Index / manifest (root)

- `styles.css` — **the entry point consumers link.** `@import`s only.
- `tokens/` — `fonts.css` (Google Fonts webfonts), `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`.
- `components/core/`, `components/motifs/` — primitives (`.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML each).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/slides/`, `ui_kits/stories/` — full-surface recreations.
- `assets/` — the Seahawk AI logo: `seahawk-logo-original.png` + recolored `seahawk-logo-green.png` (light slides) and `seahawk-logo-cream.png` (dark slides); plus commonly-referenced AI-tool marks `logo-chatgpt.png`, `logo-gemini.png`, and the brand starburst `spark-mark.png`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

## Fonts

Inter, Lora, and Caveat are the **original specified faces** (all free on Google Fonts) — **no visual substitution**. They load via a Google Fonts `@import` in `tokens/fonts.css`. If you need fully self-hosted/offline delivery, send the go-ahead and I'll vendor the `.woff2` files and swap the `@import` for `@font-face` rules.
