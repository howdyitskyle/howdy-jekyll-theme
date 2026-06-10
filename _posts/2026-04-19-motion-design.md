---
layout: post
title: "Designing with Motion"
date: 2026-04-19
category: "Inspiration"
image: /assets/illustrations/online-shopping.svg
---

Motion in product design serves a purpose: it communicates relationships, directs attention, and makes interactions feel natural. When done well, users don't notice it. When done poorly, everything feels broken.

## The Rules I Follow

**Duration.** Transitions should be between 150ms and 300ms. Under 150ms feels jarring. Over 300ms feels sluggish. Page transitions can go to 400ms.

**Easing.** Linear motion feels robotic. Use `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; it feels natural and responsive. For exits, ease-out is your friend.

**Transform, not layout.** Always animate `transform` and `opacity`. Never animate `width`, `height`, `margin`, or `padding`. They trigger layout recalculation and feel choppy.

## Where Motion Matters Most

**State changes.** When a card expands into a detail view, the transition should maintain spatial continuity. Shared element transitions make this possible.

**Loading states.** Replace spinners with skeleton screens that mimic the actual content structure. Add a subtle shimmer: not too bright, not too fast.

**Feedback.** Micro-interactions like button presses, toggle switches, and checkboxes should provide tactile confirmation of the action.

<!--more-->

Motion is the glue between interface states. Without it, your product feels like a series of disconnected snapshots. With it, everything flows.
