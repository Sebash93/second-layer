# Design System Specification
## sebastianhernandez.dev · v2.0

---

## 1. Color System

### 1.1 Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#FFFFFF` | Primary canvas, cards, modals |
| `bg-secondary` | `#FAFAFA` | Alternate sections, page background |
| `bg-tertiary` | `#F5F5F5` | Card fills, input backgrounds, code blocks |

```css
--bg-primary: #FFFFFF;
--bg-secondary: #FAFAFA;
--bg-tertiary: #F5F5F5;
```

### 1.2 Text

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#0A0A0A` | Headings, primary labels, high-emphasis text |
| `text-body` | `#404040` | Body paragraphs, descriptions |
| `text-secondary` | `#8A8A8A` | Captions, metadata, timestamps, helper text |
| `text-disabled` | `#C0C0C0` | Placeholders, disabled labels, decorative text |

```css
--text-primary: #0A0A0A;
--text-body: #404040;
--text-secondary: #8A8A8A;
--text-disabled: #C0C0C0;
```

### 1.3 Borders

| Token | Hex | Usage |
|-------|-----|-------|
| `border-default` | `#E5E5E5` | Card borders, dividers, input borders |
| `border-subtle` | `#F0F0F0` | Inner dividers, table rows, light separators |
| `border-focus` | `#FF6B35` | Focus rings (primary), active input borders |
| `border-focus-secondary` | `#3B82F6` | Focus rings (secondary context) |

```css
--border-default: #E5E5E5;
--border-subtle: #F0F0F0;
--border-focus: #FF6B35;
--border-focus-secondary: #3B82F6;
```

### 1.4 Primary Accent — Naranja → Coral

The action gradient. Used for CTAs, active states, hero visuals, and high-emphasis interactive elements.

| Token | Hex | Role |
|-------|-----|------|
| `accent-start` | `#FF6B35` | Gradient start, solid link color, icon color |
| `accent-mid` | `#FF8E6B` | Midpoint for 3-stop gradients, hover tints |
| `accent-end` | `#FF5E7A` | Gradient end |

```css
--accent-start: #FF6B35;
--accent-mid: #FF8E6B;
--accent-end: #FF5E7A;
--gradient-primary: linear-gradient(135deg, #FF6B35 0%, #FF5E7A 100%);
--gradient-primary-hover: linear-gradient(135deg, #FF5722 0%, #F04E6A 100%);
```

**Usage rules:**
- CTA buttons: gradient fill, white text
- Text links: `#FF6B35` solid (never gradient for inline links)
- Gradient text: only on headlines via `background-clip: text`
- Active nav indicator: 2px underline, gradient
- Hero blob: gradient mesh mapping
- Max ~15–20% visual weight per viewport
- Never as full section background
- Always on white/light backgrounds

**Opacity variants for tints:**
```css
--accent-tint-5: rgba(255, 107, 53, 0.05);   /* tag backgrounds, subtle washes */
--accent-tint-8: rgba(255, 107, 53, 0.08);    /* card hover backgrounds */
--accent-tint-12: rgba(255, 107, 53, 0.12);   /* badge backgrounds, borders */
--accent-tint-15: rgba(255, 107, 53, 0.15);   /* stronger hover states */
--accent-tint-25: rgba(255, 107, 53, 0.25);   /* box-shadow glow */
```

### 1.5 Secondary Accent — Blue → Cyan

The atmosphere gradient. Used exclusively for decorative elements: section dividers, ornamental lines, and subtle visual rhythm. Never for interactive elements or CTAs.

| Token | Hex | Role |
|-------|-----|------|
| `secondary-start` | `#3B82F6` | Gradient start |
| `secondary-end` | `#06B6D4` | Gradient end |

```css
--secondary-start: #3B82F6;
--secondary-end: #06B6D4;
--gradient-secondary: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
```

**Usage rules:**
- Section dividers: horizontal fade at 15–20% opacity
- Decorative accent bars: 3px bar at full opacity, max 48px wide
- Ornamental dots: 6px circles
- Decorative thin lines: 1–2px, 20–30% opacity
- Never on buttons, links, or interactive states
- Never as text color
- Never competing side-by-side with primary gradient in the same component

**Opacity variants:**
```css
--secondary-tint-10: rgba(59, 130, 246, 0.10);
--secondary-tint-18: rgba(59, 130, 246, 0.18);
--secondary-tint-25: rgba(59, 130, 246, 0.25);
```

### 1.6 Shadows

| Token | CSS | Usage |
|-------|-----|-------|
| `shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | Cards at rest, dropdowns |
| `shadow-md` | `0 4px 20px rgba(0,0,0,0.08)` | Cards on hover, popovers |
| `shadow-lg` | `0 8px 40px rgba(0,0,0,0.12)` | Modals, floating elements |
| `shadow-glow` | `0 4px 30px rgba(255,107,53,0.25)` | Primary CTA hover |
| `shadow-glow-strong` | `0 8px 40px rgba(255,107,53,0.35)` | Primary CTA active/pulse |

```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
--shadow-md: 0 4px 20px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 40px rgba(0,0,0,0.12);
--shadow-glow: 0 4px 30px rgba(255,107,53,0.25);
--shadow-glow-strong: 0 8px 40px rgba(255,107,53,0.35);
```

---

## 2. Typography

### 2.1 Font Stack

| Role | Family | Google Fonts Import |
|------|--------|-------------------|
| **Headings** | Sora | `family=Sora:wght@300;400;500;600;700` |
| **Body / UI** | Plus Jakarta Sans | `family=Plus+Jakarta+Sans:wght@300;400;500;600;700` |
| **Fallback** | `system-ui, -apple-system, sans-serif` | — |

```css
--font-heading: 'Sora', system-ui, sans-serif;
--font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
```

**Loading strategy:** Self-host via `next/font` or preload with `font-display: swap`.

### 2.2 Type Scale

| Token | Size | Weight | Tracking | Line Height | Font | Usage |
|-------|------|--------|----------|-------------|------|-------|
| `text-hero` | 64–80px | 700 | -0.03em | 1.05 | Sora | Hero headline only |
| `text-display` | 40–48px | 700 | -0.02em | 1.1 | Sora | Section headings |
| `text-heading` | 24–28px | 600 | -0.01em | 1.2 | Sora | Subsections, card titles |
| `text-title` | 20px | 700 | -0.01em | 1.3 | Sora | Component headers, step titles |
| `text-body-lg` | 18px | 400 | 0 | 1.65 | Plus Jakarta Sans | Lead paragraphs, emphasis |
| `text-body` | 16px | 400 | 0 | 1.6 | Plus Jakarta Sans | Body text, descriptions |
| `text-body-sm` | 14px | 400 | 0 | 1.5 | Plus Jakarta Sans | Secondary body, metadata |
| `text-caption` | 12px | 600 | 0.08em | 1.4 | Plus Jakarta Sans | Labels, uppercase captions |
| `text-overline` | 11px | 600 | 0.1em | 1.4 | Plus Jakarta Sans | Section labels, always uppercase |

### 2.3 Typography Rules

- **Headings:** `text-primary` (#0A0A0A), Sora Bold/SemiBold
- **Body:** `text-body` (#404040), Plus Jakarta Sans Regular
- **Max line length:** 65–75 characters (use `max-width` on text containers)
- **Gradient text:** Only on hero/display headings using `background-clip: text` on key words
- **No underlines on links** except on hover (use color change instead)
- **Uppercase:** Only for `text-caption` and `text-overline` tokens, never on body or headings

### 2.4 Responsive Type Scale

| Token | Desktop | Tablet (≤1024px) | Mobile (≤640px) |
|-------|---------|------------------|-----------------|
| `text-hero` | 72px | 56px | 40px |
| `text-display` | 44px | 36px | 28px |
| `text-heading` | 26px | 24px | 22px |
| `text-body-lg` | 18px | 18px | 17px |
| `text-body` | 16px | 16px | 15px |

Use `clamp()` for fluid scaling: `font-size: clamp(40px, 5vw, 72px);`

---

## 3. Spacing

### 3.1 Spacing Scale

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight gaps (icon-to-label, badge padding vertical) |
| `space-sm` | 8px | Inner component gaps, small padding |
| `space-md` | 16px | Element gaps, button padding, input padding |
| `space-lg` | 24px | Component internal padding, card padding |
| `space-xl` | 32px | Between components in a section |
| `space-2xl` | 48px | Between content blocks |
| `space-3xl` | 64px | Between sub-sections |
| `space-4xl` | 96px | Between major sections |
| `space-5xl` | 128px | Hero vertical padding |

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-5xl: 128px;
```

### 3.2 Container

```css
--container-max: 1200px;
--container-narrow: 720px;       /* text-heavy sections */
--container-padding-mobile: 24px;
--container-padding-tablet: 48px;
--container-padding-desktop: 64px;
```

---

## 4. Shape & Borders

### 4.1 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-xs` | 4px | Badges, tiny elements, code inline |
| `radius-sm` | 8px | Buttons, inputs, small cards, tags |
| `radius-md` | 12px | Cards, dropdowns, popovers |
| `radius-lg` | 16px | Large cards, section containers |
| `radius-xl` | 24px | Hero containers, project cards, modals |
| `radius-full` | 9999px | Pills, toggles, avatars, round buttons |

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```

### 4.2 Border Styles

```css
/* Default border */
border: 1px solid var(--border-default);

/* Subtle inner divider (inside cards, between list items) */
border-bottom: 1px solid var(--border-subtle);

/* Focus ring — primary */
outline: none;
box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.12);
border-color: var(--accent-start);

/* Focus ring — secondary context */
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
border-color: var(--secondary-start);
```

---

## 5. Separators & Dividers

### 5.1 Section Dividers (between major page sections)

**Default — Secondary gradient fade:**
```css
.section-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--secondary-start) 30%,
    var(--secondary-end) 70%,
    transparent 100%
  );
  opacity: 0.18;
}
```

**Strong — for emphasis between key sections:**
```css
.section-divider-strong {
  height: 2px;
  width: 100%;
  border-radius: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--secondary-start) 25%,
    var(--secondary-end) 75%,
    transparent 100%
  );
  opacity: 0.25;
}
```

**Primary — rare, for high-emphasis breaks (max 1–2 per page):**
```css
.section-divider-primary {
  height: 2px;
  width: 100%;
  border-radius: 1px;
  background: var(--gradient-primary);
  opacity: 0.25;
}
```

### 5.2 Content Dividers (inside sections, between blocks)

**Default — simple line:**
```css
.divider {
  height: 1px;
  width: 100%;
  background: var(--border-default);
}
```

**Subtle — inside cards, between list items:**
```css
.divider-subtle {
  height: 1px;
  width: 100%;
  background: var(--border-subtle);
}
```

### 5.3 Decorative Accent Elements

**Accent bar — short gradient mark (used next to section labels or headings):**
```css
.accent-bar {
  height: 3px;
  width: 48px;
  border-radius: 2px;
  background: var(--gradient-secondary);
}

/* Primary variant */
.accent-bar-primary {
  background: var(--gradient-primary);
}
```

**Accent dot — small gradient circle (used in lists, timelines):**
```css
.accent-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gradient-secondary);
  flex-shrink: 0;
}

.accent-dot-primary {
  background: var(--gradient-primary);
}

/* Large dot — for timeline/process steps */
.accent-dot-lg {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient-secondary);
}
```

**Decorative thin line — short inline separator:**
```css
.deco-line {
  height: 1px;
  width: 32px;
  border-radius: 1px;
  background: var(--gradient-secondary);
  opacity: 0.3;
}
```

### 5.4 Separator Spacing

| Context | Margin above | Margin below |
|---------|-------------|-------------|
| Section divider (between major sections) | `space-4xl` (96px) | `space-4xl` (96px) |
| Content divider (between blocks in section) | `space-xl` (32px) | `space-xl` (32px) |
| List item divider | 0 (built into row padding) | 0 |
| Accent bar below heading | 0 | `space-lg` (24px) |

---

## 6. Component Specifications

### 6.1 Buttons

**Primary (gradient CTA):**
```css
.btn-primary {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--gradient-primary);
  border: none;
  padding: 14px 32px;
  border-radius: var(--radius-sm);
  box-shadow: 0 2px 16px rgba(255, 107, 53, 0.25);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-strong);
}
.btn-primary:active {
  transform: translateY(0);
}
```

**Secondary (outline):**
```css
.btn-secondary {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-secondary:hover {
  border-color: var(--accent-start);
  color: var(--accent-start);
}
```

**Ghost (text-only):**
```css
.btn-ghost {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: none;
  border: none;
  padding: 10px 4px;
  cursor: pointer;
  transition: color 0.25s ease;
}
.btn-ghost:hover {
  color: var(--text-primary);
}
```

**Button sizes:**

| Size | Padding | Font size | Min height |
|------|---------|-----------|------------|
| Small | 8px 16px | 13px | 32px |
| Default | 12px 24px | 14–15px | 40px |
| Large | 16px 40px | 16px | 48px |

**Arrow icon in buttons:** Include a `→` span that translates 4px right on hover:
```css
.btn-arrow { transition: transform 0.25s var(--ease-out); }
.btn:hover .btn-arrow { transform: translateX(4px); }
```

### 6.2 Cards

**Default card:**
```css
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: transparent;
}
```

**Card with gradient top accent (appears on hover):**
```css
.card-accent {
  position: relative;
  overflow: hidden;
}
.card-accent::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-accent:hover::before {
  transform: scaleX(1);
}
```

**Featured card (highlighted with subtle background):**
```css
.card-featured {
  background: var(--accent-tint-5);
  border: 1px solid var(--accent-tint-12);
  border-radius: var(--radius-xl);
  padding: var(--space-3xl);
}
```

### 6.3 Inputs

```css
.input {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  outline: none;
  width: 100%;
  transition: all 0.25s ease;
}
.input::placeholder {
  color: var(--text-disabled);
}
.input:focus {
  border-color: var(--accent-start);
  box-shadow: 0 0 0 3px var(--accent-tint-12);
}
```

### 6.4 Tags / Badges

**Gradient badge (high emphasis):**
```css
.badge-primary {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--gradient-primary);
  padding: 5px 14px;
  border-radius: var(--radius-full);
}
```

**Outline badge:**
```css
.badge-outline {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-start);
  background: transparent;
  border: 1px solid var(--accent-tint-12);
  padding: 5px 14px;
  border-radius: var(--radius-full);
}
```

**Subtle badge:**
```css
.badge-subtle {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-start);
  background: var(--accent-tint-8);
  padding: 5px 14px;
  border-radius: var(--radius-full);
}
```

**Tech tag (for stack display):**
```css
.tech-tag {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-start);
  background: var(--accent-tint-5);
  border: 1px solid var(--accent-tint-12);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  transition: background 0.25s ease;
}
.tech-tag:hover {
  background: var(--accent-tint-15);
}
```

### 6.5 Lists

**Dot list (default — uses accent dots):**
```css
.list-dot {
  list-style: none;
  padding: 0;
}
.list-dot li {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  padding: 8px 0;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;
}
.list-dot li:last-child {
  border-bottom: none;
}
.list-dot li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border-default);
  flex-shrink: 0;
  transition: background 0.2s ease;
}
.list-dot li:hover {
  padding-left: 8px;
  color: var(--accent-start);
}
.list-dot li:hover::before {
  background: var(--gradient-primary);
}
```

**Numbered list (for process steps, timelines):**
```css
.list-numbered {
  list-style: none;
  padding: 0;
  counter-reset: step;
}
.list-numbered li {
  counter-increment: step;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
}
.list-numbered li::before {
  content: counter(step);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  color: #FFFFFF;
  background: var(--gradient-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
}
```

**Inline list (for nav, tag groups, breadcrumbs):**
```css
.list-inline {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  list-style: none;
  padding: 0;
}
```

### 6.6 Toggle

```css
.toggle-track {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: var(--border-default);
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
}
.toggle-track.active {
  background: var(--gradient-primary);
}
.toggle-knob {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FFFFFF;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.toggle-track.active .toggle-knob {
  transform: translateX(20px);
}
```

### 6.7 Navigation Bar

```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 64px;
  padding: 0 var(--container-padding-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s ease;
}
.nav.scrolled {
  border-bottom-color: var(--border-default);
}
```

**Nav link with gradient underline:**
```css
.nav-link {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;
}
.nav-link:hover { color: var(--text-primary); }
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}
```

### 6.8 Social Link Icons

```css
.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.social-link:hover {
  background: var(--gradient-primary);
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
```

---

## 7. Animation System

### 7.1 Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default for all transitions |
| `ease-out-expo` | `cubic-bezier(0.33, 1, 0.68, 1)` | Entrance animations |
| `ease-out-quad` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Interactive / drag |

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-expo: cubic-bezier(0.33, 1, 0.68, 1);
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### 7.2 Durations

| Context | Duration |
|---------|----------|
| Micro interactions (hover, toggle) | 150–200ms |
| Element reveal (fade-in single item) | 400–600ms |
| Section reveal (group entrance) | 600–800ms |
| 3D / continuous animations | 60fps, requestAnimationFrame |
| Page transitions | 300–400ms |

### 7.3 Scroll Reveal Pattern

```css
/* Base state — hidden */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}

/* Visible state — triggered by IntersectionObserver */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for siblings */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
```

**IntersectionObserver config:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});
```

### 7.4 Hover Patterns

**Card lift:**
```css
transform: translateY(-4px);
box-shadow: var(--shadow-md);
```

**Button lift:**
```css
transform: translateY(-2px);
box-shadow: var(--shadow-glow-strong);
```

**Link underline grow:**
```css
transform: scaleX(1); /* from scaleX(0) */
transform-origin: left;
```

**Arrow slide:**
```css
.arrow { transition: transform 0.25s var(--ease-out); }
:hover .arrow { transform: translateX(4px); }
```

**CTA pulse glow (continuous):**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 4px 24px rgba(255, 107, 53, 0.3); }
  50%      { box-shadow: 0 4px 40px rgba(255, 107, 53, 0.5); }
}
/* Apply: animation: pulse-glow 3s ease-in-out infinite; */
```

**Gradient shimmer (on hover for buttons/banners):**
```css
.shimmer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}
.shimmer:hover::before {
  transform: translateX(100%);
}
```

### 7.5 Hero Word Reveal (headline entrance)

```css
@keyframes word-reveal {
  from {
    opacity: 0;
    transform: translateY(12px) rotateX(-10deg);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    filter: blur(0);
  }
}
/* Each word: animation-delay: 0.3s + (index * 0.08s) */
```

### 7.6 Blob Morph (CSS fallback for Three.js blob)

```css
@keyframes blob-morph {
  0%   { border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
  25%  { border-radius: 55% 45% 40% 60% / 45% 60% 40% 55%; }
  50%  { border-radius: 45% 55% 60% 40% / 60% 45% 55% 40%; }
  75%  { border-radius: 60% 40% 45% 55% / 40% 55% 45% 60%; }
  100% { border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
}
@keyframes blob-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
/* Apply: animation: blob-morph 8s ease-in-out infinite, blob-float 6s ease-in-out infinite; */
```

---

## 8. Three.js Hero Blob Spec

```
GEOMETRY
  Base: IcosahedronGeometry(1, 64)
  Displacement: Simplex noise on vertex normals
  Noise frequency: 0.8–1.2
  Noise amplitude: 0.15–0.25
  Noise speed: 0.0003/frame

MATERIAL
  Type: MeshStandardMaterial or custom ShaderMaterial
  Color map: Gradient texture (Naranja → Coral)
  Metalness: 0.1
  Roughness: 0.4
  Environment: Soft studio HDRI

LIGHTING
  Ambient: #FFFFFF @ 0.6
  Directional: #FFF5F0 @ 0.8 (top-right)
  Rim: #FF5E7A @ 0.3 (behind)

INTERACTION
  Mouse parallax: 5–10% shift toward cursor
  Lerp factor: 0.05
  Mobile: Gyroscope or static morph

PERFORMANCE
  Canvas: 50% hero width (right side)
  Pixel ratio: min(devicePixelRatio, 2)
  Antialias: desktop only
  Fallback: CSS blob-morph + blob-float animations
```

---

## 9. Responsive Breakpoints

| Token | Width | Behavior |
|-------|-------|----------|
| `mobile` | < 640px | Single column, stacked, hamburger nav |
| `tablet` | 640–1024px | Adjusted grid, smaller type, side padding 48px |
| `desktop` | 1024–1440px | Full layout, all effects active |
| `wide` | > 1440px | Max-width container, centered |

```css
--bp-mobile: 640px;
--bp-tablet: 1024px;
--bp-desktop: 1440px;
```

**Mobile adaptations:**
- Type scale: ~80% of desktop via `clamp()`
- Section padding: reduced by 40%
- Cards: single column, full width
- 3D effects: replaced with CSS fallback blob
- Nav: hamburger → full-screen overlay
- Horizontal layouts → vertical stacks

---

## 10. Technical Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | Next.js (App Router) | SSR, performance |
| Styling | Tailwind CSS | Map tokens to Tailwind config |
| Animations | Framer Motion | Scroll reveals, layout transitions |
| 3D Hero | Three.js + @react-three/fiber | Declarative 3D in React |
| Particles | Pixi.js or tsParticles | Lightweight 2D effects |
| Booking | Cal.com or Calendly | Inline embed |
| Hosting | Vercel | Edge, instant deploys |
| Analytics | Vercel Analytics or Plausible | Privacy-friendly |
| Fonts | Google Fonts (self-hosted via next/font) | Sora + Plus Jakarta Sans |

**Performance targets:**
- Lighthouse: 95+ all metrics
- FCP: < 1.2s
- LCP: < 2.5s
- TBT: < 200ms
- CLS: < 0.1

---

*Sebastián Hernández · Design System Specification · v2.0*
