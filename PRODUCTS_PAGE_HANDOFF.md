# Products Page — Handoff Documentation

**Purpose:** Hand this document plus the source `products/index.html` to another Claude/developer working in a different repository so they can replicate the same updates on a non-updated version of the products page.

**Source of truth:** `products/index.html` in this repo is the complete, working artifact. The cleanest workflow is to copy it verbatim and then apply the cross-file dependency fixes listed below. This doc explains the design intent and lists the cross-file dependencies so nothing is missed.

---

## 1. What this page is

A redesigned **/products** landing page implementing §5 of the "Editorial Red" Products spec:

- Hero with two-tone headline ("One suite. Every accelerator." — second line in MAQ red)
- Aggregated 4-card impact strip (120+ / 200+ / 500+ / 40+)
- 8-card product grid (the 6 spec products + RTIFAST + IngestFAST as cards 7-8)
- White CTA card on cool off-white section

It uses a scoped design-token system (`--maq-*` custom properties on `.products-v2`) so the new look doesn't leak into the site-wide header, footer, or other pages.

---

## 2. Files modified

### 2.1 `products/index.html` — primary artifact

**Action:** Copy the file verbatim from the source repo to the target repo at the same path.

The page is self-contained — all CSS lives in an inline `<style>` block (no new external stylesheet) and all illustrations are inline SVG (no new image binaries to ship). The only external assets it references are:

- `/images-new/isv/saas-hero-image-update.png` (hero image — verify it exists in the target repo)
- The standard MAQ stylesheets: `core.min.css`, `skin.css`, `commonstyle.css`, `isvpage.css`, `styles.css`
- Header/footer loaded via `$("#header").load("/header.html")` and `$("#footer").load("/footer.html")` — these must exist at the site root.

### 2.2 `js/sidenav.js` — mobile hamburger fix (CRITICAL)

The original `sidenav.js` bound the hamburger click handler **inside** the `$().load()` callback, so handlers were tied to a specific DOM render. If anything re-rendered `#header` (or if the load completed in an unexpected order), the hamburger stopped working.

**Replace the entire contents of `js/sidenav.js` with:**

```javascript
$("#header").load("/header.html");

// Delegated handlers — survive any later re-render of #header content
$(document).on('click', '#header .icon-menu-hamburger', function() {
    var navbar = document.getElementById('navbar-right');
    if (navbar) navbar.classList.toggle('closed');
});
$(document).on('click', '#header .dismiss-button', function() {
    var navbar = document.getElementById('navbar-right');
    if (navbar) navbar.classList.toggle('closed');
});
```

Why this matters: products page (and any other page) wraps the header in `<header id="header"></header>` which is empty until `sidenav.js` injects header.html into it via AJAX. Delegated handlers on `document` survive that injection.

### 2.3 `js/embedfast.js` — defensive null guard (CRITICAL on any page using this script)

The original script crashed on pages without a `#secondaryNav` element:

```javascript
// BEFORE — throws TypeError when navbar is null
var navbar = document.getElementById("secondaryNav");
var sticky = navbar.offsetTop;
```

**Replace the top of the file with:**

```javascript
var navbar = document.getElementById("secondaryNav");
var sticky = navbar ? navbar.offsetTop : 0;

function myFunction() {
    if (!navbar) return;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

if (navbar) {
    window.onscroll = function () { myFunction() };
}
```

The rest of the file (popup helpers, form validation, etc.) is unchanged. This fix is unrelated to the products redesign but pages that don't have `#secondaryNav` were silently failing every scroll event — easy to mistake for unrelated bugs.

---

## 3. Design system summary (Editorial Red)

All tokens are defined inline at the top of the page's `<style>` block, scoped to `.products-v2`. **Do not promote them to `:root`** — the rest of the site uses a different red (`#BA141A`) and Roboto typography.

| Token | Value | Use |
|---|---|---|
| `--maq-red` | `#c8102e` | Primary accent, icon backgrounds, headline accent |
| `--maq-red-dark` | `#9b0c24` | Hover states |
| `--maq-red-pale` | `#fde7ea` | CTA card border |
| `--maq-red-50` | `#fff5f6` | Reserved (not currently used after revisions) |
| `--maq-surface-cream` | `#f7f8fa` | Impact card fills |
| `--maq-surface-soft` | `#f0f2f5` | Tag pill backgrounds |
| `--maq-off-white` | `#f7f8fa` | Grid-section and CTA-section backgrounds |
| `--maq-black` | `#0f172a` | Card titles, learn-more text |
| `--maq-ink` | `#1f2937` | Impact-card values (the big numbers) |
| `--maq-gray-700` | `#475467` | Body copy, tag pill text, impact labels |
| `--maq-gray-500` | `#667085` | Reserved |
| `--maq-border` | `#e4e7ec` | Card borders (resting), impact card borders, strip borders |
| `--maq-border-strong` | `#cdd2da` | Reserved |
| `--maq-shadow-sm` | `0 2px 8px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)` | Reserved |
| `--maq-shadow-md` | `0 8px 24px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.05)` | Card hover lift |

**Typography:** Inter, 400/500/600/700. Loaded via Google Fonts. **Keep Roboto loaded too** — the header/footer rely on it. Both `<link>` tags must be present in `<head>`.

```html
<link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CHind+Madurai:400,500&amp;subset=latin-ext"
    rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet">
```

---

## 4. Page structure (top to bottom)

### 4.1 Hero (`.v2-hero`)

- **Background:** `linear-gradient(to bottom, #FFFFFF, #F5F6F8)` — white at top, very pale cool grey at bottom
- **Layout:** Two columns (`row flex two-columns-on-tablet`), `.column.width-6` each
- **Left column content:**
  - `<h1 class="page-title hero-headline">` with two text lines:
    - Line 1: `One suite.` (default `--maq-black`)
    - Line 2: `<span class="hero-accent">Every accelerator.</span>` (red, block display)
  - `<p class="section-subheading center-on-mobile break">` description
  - `<div class="hero-actions">` with two buttons:
    - **Primary:** `<a href="#products-grid" class="btn-primary btn-text">Explore products</a>` — anchors to the grid section
    - **Secondary:** `<a href="/contact" class="btn-secondary btn-text">Talk to our team</a>` — custom styled button (see §6.1)
- **Right column content:** `<img class="homepage-feature-img" src="/images-new/isv/saas-hero-image-update.png" alt="MAQ Software products suite">`
- **Image scaling:** Image is 120% width with `margin-right: -10%` and a `mask-image` linear gradient that fades the bottom to transparent (removes the red glow that's baked into the source PNG). Mobile drops to 100% width and removes the mask.

```css
.v2-hero {
    background: linear-gradient(to bottom, #FFFFFF, #F5F6F8);
    padding: 96px 32px 72px;
}
.products-hero-section .homepage-feature-img {
    width: 120%;
    max-width: 120%;
    height: auto;
    max-height: none;
    object-fit: contain;
    margin-right: -10%;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 85%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 85%);
}
```

### 4.2 Impact strip (`.v2-impact-strip`)

- **Background:** `#fff` with 1px top/bottom `--maq-border`
- **Padding:** 40px vertical, 32px horizontal
- **Grid:** `repeat(4, 1fr)` desktop, `repeat(2, 1fr)` ≤720px, 16px gap
- **Card:** cream background, 1px `--maq-border`, 12px radius, centered text, 24px×22px padding
- **Value (the big number):** 36px / 700, `var(--maq-ink)` (dark grey, NOT red), `letter-spacing: -0.02em`
- **Label:** 13.5px, `var(--maq-gray-700)`, line-height 1.5
- **The four metrics (in order):**
  1. `120+` — Enterprise migrations delivered
  2. `200+` — Sources ingested in production
  3. `500+` — Reports certified per month
  4. `40+` — SaaS products embedded

### 4.3 Product grid (`.v2-grid-section`)

- **Section background:** `var(--maq-off-white)` (#F7F8FA)
- **Padding:** 80px 32px (60px 24px mobile)
- **Section heading:** `<h2 class="section-header">Explore our product suite</h2>` + subheading paragraph
- **Grid:** `repeat(3, 1fr)` ≥960px → `repeat(2, 1fr)` ≥640px → `1fr` below. 24px gap.
- **Mobile fix:** `.grid-2 { grid-auto-rows: auto !important }` override at ≤768px — the global stylesheet sets `grid-auto-rows: 0fr` on mobile which collapses cards to zero height. Without this override the cards render as flat lines on mobile.

#### Card structure (`.v2-card`)

```
<a href="..." class="v2-card" aria-label="Learn more about ...">
    <div class="v2-card-thumb">     ← cream bg, red-pale bottom border, 16px top/sides padding
        <svg viewBox="0 0 560 360">...</svg>   ← inline motif illustration
    </div>
    <div class="v2-card-body">      ← 22px 24px 24px padding, flex column
        <div class="v2-card-logo">XX</div>   ← display: none (hidden per design decision)
        <div class="v2-card-tagline">SHORT UPPERCASE TAGLINE</div>   ← red, letter-spaced
        <h2 class="v2-card-title">Product Name</h2>
        <p class="v2-card-desc">2-3 sentence pitch</p>
        <div class="v2-card-tags">
            <span class="v2-badge">Tag 1</span>
            <span class="v2-badge">Tag 2</span>
            <span class="v2-badge">Tag 3</span>
        </div>
        <span class="v2-card-link">     ← icon-button style "Learn more about X"
            <span class="v2-card-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" ...><polyline points="9 6 15 12 9 18"/></svg>
            </span>
            Learn more about {Product Name}
        </span>
    </div>
</a>
```

**Hover state:**
- `transform: translateY(-3px)`
- `box-shadow: var(--maq-shadow-md)`
- `border-color: #b0b8c4` (slightly darker grey)
- No movement animation on the icon, no underline on the link text

**Card thumb background:** `#fcfcfd` (barely off-white — sits slightly lighter than the section background `--maq-off-white`, giving the impression the thumbnail "lifts" out of the page).

**Logo block:** Initials box is intentionally hidden via `.v2-card-logo { display: none }`. The HTML is kept in place so it can be re-enabled by deleting the rule. Don't strip the markup.

#### Tag pills (`.v2-badge`)
- Background `var(--maq-surface-soft)` (#F0F2F5)
- Text `var(--maq-gray-700)` (#475467)
- No border
- 3px 10px padding, full pill radius, 11px / 500

#### Learn-more icon button (`.v2-card-link` + `.v2-card-link-icon`)
- Container: `inline-flex`, 12px gap, 14px font, `var(--maq-black)` text, 8px top margin
- Icon: 30×30px, 8px radius, `var(--maq-red)` background, white SVG chevron (13×13, stroke-width 2.5)
- **No hover animation, no background change on hover** — the icon stays solid red regardless

### 4.4 Product catalog — 8 cards, in this exact order

Each card has: image (inline SVG, see §5), tagline, title, description, tags, learn-more link.

| # | Product | Slug / href | Tagline | Tags |
|---|---|---|---|---|
| 1 | **Fabric Admin Agent** | `/products/fabricadminagent` | Capacity intelligence | Agentic AI · Fabric Admin · Capacity |
| 2 | **AI-DataLens** | `/products/AI-DataLens` | Conversational analytics | Natural language · Power BI · Multi-tenant |
| 3 | **EmbedFAST** | `/products/embedFAST` | Embedded analytics | Embedded BI · SaaS · Multi-tenant |
| 4 | **CertyFAST** | `/products/certyFAST` | Certification gates | Quality gates · DAX · Power BI |
| 5 | **LoadFAST** | `/products/loadFAST` | Pipelines & medallion | Pipelines · Medallion · Fabric |
| 6 | **MigrateFAST** | `/products/migrateFAST` | Platform migration | Tableau→Power BI · Crystal · Qlik · Fabric Warehouse |
| 7 | **RTIFAST** | `/Fabric-RTI` | Real-time intelligence | Real-time · Fabric RTI · Multi-tenant |
| 8 | **IngestFAST** | `https://blog.maqsoftware.com/2024/04/simplifying-data-ingestion-with.html` (external, `target="_blank"`) | Ingestion templates | Templates · Pipelines · Ingestion |

Card 8 is the only one that opens externally — it has no dedicated product page yet.

The order intentionally matches the header dropdown menu in `header.html` (Fabric Admin Agent → AI-DataLens → EmbedFAST → CertyFAST → LoadFAST → MigrateFAST), with the two non-nav products appended at the end.

### 4.5 CTA section (`.v2-cta-section`)

- **Section background:** `var(--maq-off-white)`
- **CTA card:** white background, 1px `--maq-red-pale` border, 20px radius, 56px 48px padding (40px 24px mobile)
- **Title:** "Find the right accelerator for your team" — 32px / 700
- **Description:** "Tell us about your initiative and we'll match you to the right product — and a team that's shipped this pattern before."
- **Primary button:** `<a href="mailto:customersuccess@maqsoftware.com?...">` with class `v2-btn-primary`. White text on red, darkens to `--maq-red-dark` on hover. Selector specificity bumped to `.products-v2 a.v2-btn-primary` so it wins over the global `.products-v2 a { color: inherit }` rule.

---

## 5. SVG illustrations (motifs)

Each product card carries an inline `<svg viewBox="0 0 560 360">` illustration. They all share a common "window" frame:

```
- Outer rect: x=10 y=10 w=540 h=340 rx=12, white fill, #e4e7ec stroke
- Cream titlebar: path drawing the top 40px with rounded top corners
- Three traffic-light dots at top-left: red, red-pale, border-grey
- Horizontal separator line at y=50
```

Each motif fills the body area (y=50 to y=350) with content-specific elements. The motifs are listed in §3b of the Editorial Red spec:

| Card | Motif | Visual content |
|---|---|---|
| Fabric Admin Agent | `gauge` | 98% donut chart + 4 capacity-utilization bars (CAP-PROD-01 etc.) |
| AI-DataLens | `chat` | Q bubble + A bubble with mini bar + Q2 bubble + input field with red "Ask" button |
| EmbedFAST | `embed` | Active red tab + bar chart + 72% donut |
| CertyFAST | `shield` | Red-outlined shield with checkmark + 3 CERTIFIED stamp panels (Sales/Finance/Ops) |
| LoadFAST | `ingest` | 3 sources (REST API / SQL CDC / EVENT HUB) → LoadFAST pipeline box → Bronze/Silver/Gold tiers |
| MigrateFAST | `swap` | LEGACY card + red swap-arrows circle + FABRIC card |
| RTIFAST | `ingest-streaming` (variant) | Event stream box with fading dots → RTIFAST → live line-chart |
| IngestFAST | `ingest-template` (variant) | YAML template panel → 3 generated pipeline instances |

**Strict palette inside SVGs** — only these hex values are used: `#c8102e` (red), `#fde7ea` (red pale), `#f7f8fa` (cream), `#475467` (slate), `#e4e7ec` (border), `#0f172a` (ink), plus `#fff` and `#667085` for muted detail. No other colors.

When recreating in the target repo, copy the SVG markup verbatim from `products/index.html` — these are hand-tuned and changing coordinates can break alignment.

---

## 6. Component implementation snippets

### 6.1 Secondary button (`.btn-secondary`)

Custom class introduced for the hero's "Talk to our team" button. Mirrors `.btn-primary` shape but with neutral colors.

```css
.btn-secondary {
    font-size: 1rem;
    display: block;
    width: fit-content;
    background-color: #fff;
    border: solid 2px var(--MAQLogoGrey);
    color: var(--MAQLogoGrey);
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    text-decoration: none;
    margin-top: 0.5rem;
}
.btn-secondary:hover {
    background-color: #f7f7f7;
    color: var(--MAQLogoGrey);
}
```

`--MAQLogoGrey` (#58595B) comes from the existing site `core.min.css` — it's the MAQ brand grey used in their logo. Do NOT use the new spec's `--maq-gray-700` here; the button is in the hero where the existing site's typography tokens apply.

### 6.2 Hero actions container

```css
.hero-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    flex-wrap: wrap;
}
@media (max-width: 768px) {
    .hero-actions {
        justify-content: center;
    }
}
```

### 6.3 Mobile grid fix

```css
@media (max-width: 768px) {
    .grid-2 {
        grid-auto-rows: auto !important;
    }
}
```

Without this, cards collapse to zero height on mobile because the global stylesheet sets `grid-auto-rows: 0fr` at this breakpoint.

---

## 7. Things intentionally NOT in this implementation

- **§6 detail pages** — only the listing page (§5) was rebuilt. The 6 per-product detail pages remain in their original layouts.
- **MegaMenu** — the global header was not touched. The existing `header.html` dropdown for Products is preserved.
- **HashRouter / SPA** — the spec describes a React/Vite app; this is a static HTML implementation translated from that spec.
- **`appearance="outline" color="danger"` Fluent UI Badges** — translated to plain `<span class="v2-badge">` with the design tokens.
- **Per-product impact band** — that's a §6 (detail page) feature, not §5.

---

## 8. Verification checklist (run after applying)

1. **Visual:** open `/products/index.html` (or `/products/`) — confirm hero gradient, 4 impact cards, 8 product cards, CTA panel render top to bottom with no horizontal scroll.
2. **Mobile:** narrow viewport ≤768px — confirm all 8 cards stack to single column and remain visible (not collapsed to flat lines).
3. **Hamburger:** on mobile width, hamburger icon in the top-right should toggle the slide-in navbar. If broken, re-check that `js/sidenav.js` was replaced (§2.2) and that hard-refresh cleared the cached old version.
4. **Header / footer:** "Services / Products / Partnerships / Resources / About us / Contact us" nav loads correctly across the top, MAQ Software footer at the bottom. (Pulled via `$().load()` from `/header.html` and `/footer.html`.)
5. **Card hover:** hover any of the 8 cards on desktop — card lifts 3px and gets a darker-grey outline with a soft drop shadow.
6. **CTA link:** clicking "Talk to our team" in the CTA card opens the user's mail client with subject `MAQ Software Products`.
7. **Anchor scroll:** clicking "Explore products" in the hero scrolls smoothly to the card grid.
8. **No console errors:** browser DevTools console should be clean. If you see `Cannot read properties of null (reading 'offsetTop')`, the `embedfast.js` fix (§2.3) wasn't applied.

---

## 9. Quick start for the recipient

If you're another Claude or developer applying this in a non-updated repo, the fastest path is:

1. **Copy `products/index.html`** verbatim from the source repo into the target repo at the same path. This delivers ~95% of the change.
2. **Replace `js/sidenav.js`** with the new content in §2.2 above.
3. **Patch the top of `js/embedfast.js`** as shown in §2.3 (rest of the file is unchanged).
4. **Confirm** `/images-new/isv/saas-hero-image-update.png` exists in the target repo. If not, either copy the asset over or swap the `<img src="...">` in the hero to a file that does exist.
5. **Confirm** the standard MAQ CSS files (`core.min.css`, `skin.css`, `commonstyle.css`, `isvpage.css`, `styles.css`) are present at `../css/` relative to `products/index.html`.
6. **Confirm** `/header.html` and `/footer.html` exist at the repo root and contain the standard MAQ navigation with the mobile hamburger markup (`#header .icon-menu-hamburger` and the `#navbar-right` panel).
7. **Run through §8 checklist.**

Do not paste sections piecemeal — the inline `<style>` block is order-sensitive (later rules override earlier ones for shared selectors like `.v2-card-link` and `.products-hero-section .homepage-feature-img` across breakpoints). The full-file copy is the safest path.
