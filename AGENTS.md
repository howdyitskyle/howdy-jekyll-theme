# AGENTS.md — Howdy Jekyll Theme

## What this is

A gem-based Jekyll theme (`howdy-jekyll-theme`, v1.0.0) for personal sites and portfolios. Ruby >= 3.0, runs on 3.4.0 locally. No tests, no CI, no linter.

## Commands

| Action | Command |
|---|---|
| Setup | `bundle config --local path .bundle && bundle install` |
| Dev server | `bundle exec jekyll serve` → http://localhost:4000 |
| Build gem | `gem build howdy-jekyll-theme.gemspec` |
| Install local gem | `gem install ./howdy-jekyll-theme-1.0.0.gem` |

## Architecture

- **`lib/howdy-jekyll-theme.rb`** — Entry point. Registers a `Jekyll::Hooks.register :site, :after_init` hook that injects the theme's `_layouts`, `_includes`, and `_sass` paths into Jekyll's lookup.
- **`howdy-jekyll-theme.gemspec`** — `spec.files` uses `Dir[]` glob patterns. Any new files must match an existing pattern to be included in the built gem.
- **`_config.yml`** — Uses `theme: howdy-jekyll-theme` so the repo serves as both the gem source and its own demo site.

## Key conventions

- **Sass**: Uses modern `@use` syntax (not `@import`). All partials live directly under `_sass/`.
- **Pagination**: Uses `jekyll-paginate-v2` (NOT `jekyll-paginate`). Config in `_config.yml` under `pagination:`.
- **Excerpts**: `<!--more-->` is the separator, not the default.
- **Projects collection**: Sorted by `year` front-matter field. Lives in `_projects/`.
- **Blog**: Entry page is `blog/index.html` (layout: `blog`). Posts in `_posts/` follow `YYYY-MM-DD-slug.md` naming.
- **Categories** have color accents: Tutorials=blue, Inspiration=orange, Freebies=green, Interviews=purple.
- **Dark mode**: Toggled via `assets/js/theme-toggle.js`, persisted in `localStorage`, respects `prefers-color-scheme`.

## File structure

```
_layouts/     — 7 layouts: default, home, page, post, project, blog, autopage_collection
_includes/    — 12 partials (analytics, blog-pagination, comments, dark-mode-toggle, head, hero-carousel, logo, navigation, newsletter, share-buttons, social-links, toc)
_sass/        — 6 partials: variables, base, typography, layout, components, dark-mode
assets/       — css/main.scss (entry), js/theme-toggle.js, fonts/, images/
_projects/    — Demo project content
_posts/       — Demo blog posts
blog/         — Blog index page (pagination entry)
lib/          — Gem entry point (Jekyll hook)
```

## Gotchas

- The `_config.yml` excludes `Gemfile`, `Gemfile.lock`, `*.gemspec`, `README.md`, `LICENSE` from the Jekyll build — do not put content there expecting it to render.
- Font files (Inter, Chaumont Script, Fragment Mono) in `assets/fonts/` are licensed; verify licensing before redistributing.
- The `.bundle/` directory contains vendored gems — do not edit files inside it.
