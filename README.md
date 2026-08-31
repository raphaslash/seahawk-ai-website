# Seahawk AI — Club Website

## 🌐 The live site

**https://raphaslash.github.io/seahawk-ai-website/**

Taste Buddy lives at
**https://raphaslash.github.io/seahawk-ai-website/taste-buddy/**

Those are the real links — open them from any device, no setup and no account.
Every push to `main` redeploys automatically in about a minute.

---

## Running it locally (only if you're editing it)

You do **not** need this just to look at the site — use the link above.

No build step, no dependencies. It's static HTML, but it must be served over
HTTP, not opened as a `file://` path, or the browser will block the
design-system scripts.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` — but note that address only works on the
machine running that command. It is not a link you can send anyone.

## What's in here

| Path | What it is |
| --- | --- |
| `index.html` | The page itself — all markup, styles and copy live here |
| `support.js` | Claude Design runtime (generated — don't hand-edit) |
| `_ds/seahawk-ai-design-system-.../` | The design system: tokens, styles, component bundle |
| `_ds/.../tokens/*.css` | Colors, type, spacing, radii, shadows, motion |
| `_ds/.../readme.md` | The brand guide — voice, palette rules, component inventory |
| `assets/` | Logo, founders photo, AI-tool logos |

### Editing

- **Copy and layout** → `index.html`
- **Brand values** (a green, a font size, a radius) → the matching file in
  `_ds/.../tokens/`. Change it once there and every surface follows.
- **Never edit** `support.js` or `_ds_bundle.js` — both are generated.

Read `_ds/.../readme.md` before changing anything visual. It documents the rules
the design follows (five green tiers with distinct roles, brass reserved for
ceremony, warm cream canvas, no gradients, full-pill buttons).

## Working on this with someone else

This is the reason the design lives in git instead of in Claude Design: two people
can't edit the same Claude Design project on Pro, but they can both push to a repo.

**Owner, once:**

```bash
git remote add origin https://github.com/<your-username>/seahawk-ai-website.git
git push -u origin main
```

Then on GitHub: **Settings → Collaborators → Add people**, and add your
collaborator's GitHub username.

**Collaborator:**

```bash
git clone https://github.com/<your-username>/seahawk-ai-website.git
```

**Both of you, every session:**

```bash
git pull            # before you start
git add -A && git commit -m "what you changed"
git push            # when you're done
```

Pull before you start and push when you stop, and you'll almost never collide.
If you both edit `index.html` at the same time you'll get a merge
conflict — the fix is to work on different sections, or take turns.

## Deploying

GitHub Pages is free and reads straight from the repo: **Settings → Pages →
Source: main branch**. Rename `index.html` to `index.html` first so it
loads at the root URL.
