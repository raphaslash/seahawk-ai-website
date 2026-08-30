# Golden Hour Kitchen — Taste Buddy Design System

Taste Buddy is a single-page cooking web app that learns how you actually like to eat, then matches whatever's in your pantry to recipes you'll genuinely love. One 20-question taste quiz; every recipe scored against your real shelf and real taste. No expiry timers, no guilt — "dinner's easy tonight."

**Sources:** brand brief + 30 uploaded image/video assets (in `uploads/`, curated copies in `assets/`). No Figma, no codebase — components below are authored from the brief's rules, not recreated from a source.

## Content fundamentals

- **Voice:** a friend who cooks, not a chef who judges. Warm, unfussy, encouraging, quietly playful.
- **Person:** speaks to "you"; the app is "we" only sparingly. Never "the user."
- **Casing:** sentence case everywhere — headings, buttons, tabs. No Title Case, no ALL CAPS except micro-labels (12px, tracked out).
- **Copy shape:** short, concrete, benefit-first. "Dinner's easy tonight" not "Optimize your meal planning."
- **Encouragement, never guilt:** no expiry warnings, no "you haven't cooked in 5 days." Streaks celebrate, absences are ignored.
- **Emoji:** YES — but only as recipe/food art on cards (recipes are dynamic; emoji stand in for photos: 🍜 🥘 🍳). Not in body copy, not in buttons.
- **Examples:**
  - Hero: "What's for dinner? You already have it."
  - Match: "97% match — you'll love this one."
  - Empty pantry: "Your shelf's looking peaceful. Add a few staples to get matched."
  - Quiz: "Last one — sweet tooth or salt tooth?"
  - Error: "Hmm, that didn't stick. One more try?"

## Visual foundations

- **Palette (strict, 6 colors + derived tints only):** Butter Cream `#FAF3E4` page backgrounds; Toasted Charcoal `#2A211B` ink + dark surfaces; Paprika `#D9542B` is the ONE loud accent (primary CTAs, 100%-match, heat/spice); Sage Leaf `#7A9B76` fresh/healthy; Honey Butter `#E9A83A` warm highlights, streaks, hovers; Terracotta `#B8714F` earthen mid-tone. No blues, no purples, no cool grays — every neutral is warm.
- **Type:** Fraunces (600, 900 for hero moments) for headings — soft, slightly wonky serif; Nunito Sans for UI/body. Headings sentence-case, tight leading (1.1). Body 16px/1.55.
- **Backgrounds:** butter cream pages; linen/paper textures (`assets/textures/`) at 4–8% opacity under text sections; watercolor tab art (`assets/tabs/`) as full-bleed per-tab Cookbook page backgrounds behind a cream protection wash; `pattern-ingredients.png` as a light repeating pattern on marketing surfaces.
- **Hero:** the oil-sizzle video (`assets/motion/motion-hero-loop.mp4`, poster `motion-poster.png`) full-bleed with a charcoal protection gradient from the left; text always in HTML, never baked into imagery.
- **Cards:** `--surface-card` (#FFFDF7) on cream, radius 14px, warm charcoal-tinted shadow (`--shadow-card`), 1px `--border-soft` optional. No cool gray shadows ever.
- **Corners:** 8 / 14 / 22 px + pill. Nothing sharp.
- **Buttons:** pill radius, Nunito Sans 600. Primary = paprika filled → darker paprika on hover; secondary = charcoal outline on cream; ghost = ink only. Press = scale(.97).
- **Hover states:** color deepens (paprika→#B84421) or honey-butter wash appears; never opacity fades on text.
- **Motion:** small and springy — `--ease-spring` for badges/streaks, `--ease-out` fades/slides, 120–400ms. Steam wisps (assets/imagery/steam-*.png) may drift slowly (4–8s loops) as ambient decoration on dark surfaces.
- **Match score:** the signature element. 90–100% paprika, 70–89% honey, 50–69% terracotta, below 50 muted ink. 100% gets the scalloped "perfect match" seal.
- **Transparency/blur:** frosted cream (rgba(250,243,228,.85) + blur 12px) only for sticky navs over imagery.
- **Imagery color vibe:** golden-hour warm, side-lit, cream linen surfaces. Illustrations are thin charcoal line-art with sparse paprika/sage/honey fills (see empty states).
- **Never:** cold blues/purples, fake recipe photography (recipes are dynamic → emoji), text baked into images, gray drop shadows, left-border-accent cards.

## Iconography

- **No proprietary icon set was provided.** UI glyphs use [Lucide](https://lucide.dev) from CDN — thin 2px strokes match the line-art illustration style. FLAGGED: substitute; swap in brand icons if they exist.
- **Emoji as content art:** recipe cards and pantry chips use food emoji as the visual (🍅 🧄 🍝). This is deliberate brand language, not a placeholder.
- **Brand marks** (`assets/logos/`): `logo-b-happy-pot.png` = app mark/favicon; `logo-c-wordmark.png` = nav wordmark; `logo-a-chat-spoon.png` = alternate chat-bubble-spoon mark (marketing).
- **Badges:** the two badge PNGs (perfect-match seal, streak flame) are rebuilt as vector components — `MatchSeal` and `StreakFlame` — so they render crisp at any size on any background; PNG originals kept in `assets/imagery/` for reference.

## Components

Authored set (no source inventory existed): Button, IconButton, Input, Select, Checkbox, Radio, Switch, Tag, Tabs, Card, Dialog, Toast, Tooltip in `components/core/`; brand-specific in `components/recipe/`: RecipeCard, MatchScore, MatchSeal, StreakFlame, PantryChip.
**Intentional additions:** MatchSeal + StreakFlame (vector rebuilds of provided badge PNGs), RecipeCard/MatchScore/PantryChip (the product's signature patterns, needed by the UI kit).

## Index

- `styles.css` → `tokens/` (colors, typography, spacing, fonts — Google Fonts CDN, no binaries provided)
- `assets/` — logos, tab watercolors, textures, heroes, steam, empty states, motion loop
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/`, `components/recipe/` — React primitives + prop types + usage prompts + cards
- `ui_kits/taste-buddy/` — interactive single-page-app recreation (Tonight / Pantry / Cookbook / Quiz)
- `SKILL.md` — agent skill entry point
