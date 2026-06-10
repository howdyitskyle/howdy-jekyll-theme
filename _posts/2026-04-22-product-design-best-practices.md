---
layout: post
title: "Product Design Best Practices"
date: 2026-04-22
category: "Tutorials"
image: /assets/illustrations/tasks-complete.svg
excerpt: "Professional design methodology — intentional, justified decisions that hold up to user testing."
tags: [methodology, process, best practices, craft]
---

Don't guess. Make intentional, justified decisions.

> If you showed this to 10 users tomorrow, what would they remember?

## Before You Design: Discovery

Never design blind. Answer these first:

**What** are we building: Screen type, platform, scope

**Who** is this for: Audience, technical level

**What** should users do: Primary action, success metric

**What** feeling to evoke: Tone, energy

**What job** does this do: Help me decide, convince me, get me started

**What** objections exist: Is it worth it? Is it legit? Will it work?

**What** should they remember: The hook, the differentiator

**Any** constraints: Brand, tech requirements, inspirations

Write a design brief before you open Figma:

> I'm designing a **[WHAT]** for **[WHO]** that helps them **[GOAL]** and should feel **[TONE]**.

---

## Research & Analysis

### Research ≠ Copying the Average

Research is about understanding *why* choices work, not copying *what* everyone does.

- Best practices are a starting point, not a destination
- Safe often means forgettable
- Document your reasoning: "Most use X, but we chose Y because..."

### Three Lenses

**Structure:** Layout, components, information hierarchy. Common solutions to common problems.

**Visual Craft:** For each strong reference, notice typography, color, spacing, details, icons, and overall vibe.

**Conversion & Soul:** What's the hook in the first 3 seconds? How do they handle objections? Where's the trust? What's unique? What microcopy has personality? What would a user remember tomorrow?

### Build a Steal List

When you research, document specific tactics with exact details:

- "Linear: 13px/20px body, -0.01em tracking, 48px section gaps, accent at 8% opacity for hover"
- Not "Linear: clean design"

---

## Typography

### Scale

Use a consistent ratio: 1.2 (minor third) works well. Limit yourself to 6–8 sizes:

| Size | Usage |
|------|-------|
| Display (48–64px) | Hero sections |
| H1 (36–48px) | Page titles |
| H2 (24–32px) | Section headers |
| Body (16–18px) | Main content |
| Small (13–14px) | Captions, metadata |
| Caption (11–12px) | Fine print |

### Leading

Large text = tight (1.0–1.2). Body = loose (1.5–1.6).

### Letter-Spacing

This is the detail most designers skip. Don't:

| Text Type | Letter-Spacing |
|-----------|----------------|
| Body (14–18px) | `0` |
| Small text (11–13px) | `0.01–0.02em` |
| UI labels/buttons | `0.02em` |
| ALL CAPS | `0.06–0.1em` |
| Large headings (32px+) | `-0.01` to `-0.02em` |
| Display (48px+) | `-0.02` to `-0.03em` |

### Rules

- Line length: 50–75 characters
- Max 2 typefaces
- Use weights within a family before adding another font

---

## Color

### Palette Structure

**Neutrals:** 70–90% of the interface

**Primary accent:** 5–10%

**Semantic:** success, warning, danger

**Effects:** rare, used sparingly

### Working with Your Primary

Pick one brand color and build a scale (50–950). Use 600 as default, 700 for hover, 800 for active states.

### Contrast

- 4.5:1 minimum for body text
- 3:1 minimum for large text

### Dark Theme

Dark theme is not an inversion. Use `#0f0f0f` for background, not `#000`. Use `#f0f0f0` for text, not `#fff`. Build a separate neutral scale.

### Tokens

Name tokens by purpose (`--color-primary`), not by color (`--color-blue`). This makes rebranding painless.

---

## Spacing

### The Scale

Base unit: 4px or 8px. Everything multiplies from this.

```
4px scale:  4, 8, 12, 16, 24, 32, 48, 64, 96
8px scale:  8, 16, 24, 32, 48, 64, 96, 128
```

### Proximity = Relationship

Closer elements feel connected. Farther elements feel separate. Use spacing to communicate hierarchy and grouping.

### Density

Match spacing to context: dense for dashboards (8-12px padding), default for product UI (16-24px), spacious for marketing (24-32px).

### Responsive

Structural spacing (sections, containers) scales down 0.5-0.75x on mobile. Internal component spacing (icon-to-text, button padding) stays fixed.

---

## Motion

Motion serves one of three purposes: **feedback** (it worked), **continuity** (where it went), or **hierarchy** (look here). If it doesn't do one of these, remove it.

| Category | Duration |
|----------|----------|
| Instant (hover, press, toggle) | 90–150ms |
| State change (accordion, tabs) | 160–240ms |
| Large transition (modal, drawer) | 240–360ms |

### Easing

Enter = ease-out. Exit = ease-in. Change = ease-in-out.

### Rules

- Always support `prefers-reduced-motion`
- No animation over 500ms in product UI
- Never use `transition: all`

---

## Icons

- Pick one style (outline OR solid) and stick with it
- Geometric center ≠ visual center; arrows and chevrons need a 0.5–1px optical shift
- Use `currentColor` by default
- Hit area should be 44×44px minimum
- Action icons need `aria-label`

---

## The Persuasion Layer

Before you design, fill this out:

**Hook** (first 3 seconds): Hero headline + visual

**Story arc:** Problem → Solution → Proof → Action

**Objection killers:** List the top 3 reasons someone would hesitate

**Trust signals:** Social proof, guarantees, security badges, specifics

**The memorable thing:** What will users screenshot or tell someone about?

If you can't fill this out, you're designing decoration, not persuasion.

---

## The Soul

Aim for roughly 80% proven patterns and 20% unique choices.

- One bold visual choice: a color, a type treatment, an illustration style
- Voice and personality in the copy
- Micro-interactions that surprise
- One detail users will remember

The test: if someone screenshots your work, would they know it's from *this* product?

---

## Implementation Quality Gate

Before shipping, check:

**Functional:** Is the primary action obvious? Error states handled? Works on mobile?

**Visual:** Does the squint test pass? Spacing rhythm consistent? Typography intentional?

**Persuasion:** Hook in 3 seconds? Two or more trust signals? Objections addressed?

**Polish:** No orphaned words? Icons aligned? Buttons consistent?

Good design isn't about following rules blindly. It's about making decisions you can defend, and caring about the details that most people won't notice until they're missing.
