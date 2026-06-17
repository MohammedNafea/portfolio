# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static SPA portfolio** for Mohammed Nafea (Mobile App Developer), deployed on GitHub Pages at `https://mohammednafea.github.io/portfolio/`. It is a PWA with offline support, 15-language i18n, and no build step.

## Running Locally

```bash
# Any static file server works — no build required
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080`. The Service Worker only activates over HTTPS or localhost.

## File Architecture

| File | Purpose |
|------|---------|
| `index.html` | Entire SPA (~1900 lines). All sections, JS logic, inline scripts. |
| `style.css` | All styles (~3750 lines). CSS variables at top of `:root`. |
| `translations.js` | `window.translations` object — 94 keys × 15 languages. |
| `cv-generator.js` | `generateAndDownloadCV()` and `openCVModal()` — PDF CV generation via html2pdf.js. |
| `crown_data.js` | Data arrays for projects/skills/testimonials rendered dynamically. |
| `service-worker.js` | PWA cache (network-first strategy). Cache name must be bumped on each release. |
| `manifest.json` | PWA manifest. |

## i18n System

All user-visible text must use `data-i18n="key"` attributes on HTML elements. The `applyTranslations(lang)` function in `index.html` reads `window.translations[lang]` and sets `innerHTML` on every `[data-i18n]` element.

- **Placeholders** use `data-i18n-placeholder="key"` (sets `placeholder` attribute only).
- **RTL/LTR**: Arabic (`ar`) sets `<html dir="rtl">`, all others set `dir="ltr"`. Font switches between Cairo (Arabic) and Outfit (Latin).
- **Adding a new key**: Add to `ar` and `en` blocks first, then propagate to all 15 language blocks (`ar en tr es fr de zh ja ru pt it ko id ur hi`).
- **Missing keys fall back** to the raw key string — never silently drop text, always add the key to every language block.
- The language selector is `#lang-select` (`<select>`). `currentLang` is a global variable persisted to `localStorage`.

## Z-Index System (CSS Variables)

```
--z-base: 1        cards/content
--z-card: 10
--z-header: 500    floating navbar
--z-fab: 600       WhatsApp / scroll FABs
--z-progress: 700  reading-progress bar
--z-floating: 800
--z-modal: 1000    QR modal, project modal
--z-modal-ui: 1001 close buttons inside modals
--z-preloader: 1100 skeleton / preloader
--z-cursor: 9000   custom cursor dot
```

Never use raw magic numbers for `z-index` — always use these variables.

## Key Globals in index.html

| Variable/Function | Description |
|---|---|
| `currentLang` | Active language code (`"ar"`, `"en"`, ...) |
| `applyTranslations(lang)` | Applies i18n, sets dir/font, updates lang select |
| `toggleFAQ(el)` | Open/close FAQ accordion (also updates `aria-expanded`) |
| `moveSlider(galleryId, dir)` | Scroll project image sliders (±1 image) |
| `moveTestimonials(dir)` | Scroll testimonial carousel |
| `toggleTheme()` | Light/dark mode toggle (persisted in `localStorage`) |
| `generateAndDownloadCV()` | Generate PDF CV via html2pdf.js (always English) |
| `openCVModal()` / `closeCVModal()` | Web-preview CV modal |
| `downloadContactQR()` / `downloadSiteQR()` | QR generation |
| `saveVCard()` | Download vCard `.vcf` file |

## Contact Information (Canonical)

| Type | Value |
|------|-------|
| WhatsApp | `+966546532955` → `https://wa.me/966546532955` |
| Email | `king.darkmn@gmail.com` |
| GitHub | `https://github.com/MohammedNafea` |
| LinkedIn | `https://www.linkedin.com/in/mohammed-nafea-62a32b160` |

**Never change these** — they appear in the FAB button, contact section, footer, vCard, and `cv-generator.js`.

## PWA Cache Invalidation

When modifying `index.html`, `style.css`, or `translations.js`, bump the cache name in `service-worker.js`:
```js
const CACHE_NAME = 'nafea-portfolio-v2026-b4'; // increment suffix
```

## CSS Conventions

- All transitions use `--transition-fast/med/slow` variables.
- Dark mode is default; light mode toggled via `body.light-mode`.
- Glassmorphism cards: `.glass-card` with `backdrop-filter: blur`.
- Never add `width: 100vw` to `body` or `html` — it causes horizontal scrollbar. Use `max-width: 100%`.

## Git / Deployment

- Production branch: `main` → auto-deploys to GitHub Pages.
- Feature branches follow `claude/<description>` convention.
- Always create a PR; do not push directly to `main`.
