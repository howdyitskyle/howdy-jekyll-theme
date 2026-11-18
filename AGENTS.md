# AGENTS.md — Howdy Jekyll Theme

Gem-based Jekyll portfolio/blog theme. The repo is both the gem source and its own demo site. Version lives in `howdy-jekyll-theme.gemspec` (not `_config.yml`).

## Commands

| Action | Command |
|---|---|
| Setup Ruby | `bundle config --local path .bundle && bundle install` |
| Setup JS | `npm ci` |
| Dev server | `bundle exec jekyll serve` → http://localhost:4000 |
| Build only | `bundle exec rake build` |
| HTML checks | `bundle exec rake test` (builds + runs html-proofer on `_site/`) |
| Config checks | `bundle exec rake validate_config` (required fields, nav shape, `fonts.primary` allowlist) |
| Playwright image | `bundle exec rake check_playwright` (fails if the CI container tag ≠ `@playwright/test`) |
| Perf/a11y | `bundle exec rake lighthouse` (needs `npm ci` first; asserts ≥0.9 on 4 categories across 5 URLs in `lighthouserc.json`) |
| All Ruby checks | `bundle exec rake all` (= validate_config + check_playwright + test + lighthouse) |
| E2E | `npm test` (Playwright; `webServer` in `playwright.config.js` auto-starts Jekyll on :4000, reuses existing server locally) |
| Build gem | `gem build howdy-jekyll-theme.gemspec` |

## Architecture

- **`lib/howdy-jekyll-theme.rb`** — `:after_init` hook pointing Jekyll's layouts/includes/sass lookup at the theme root so the gem's files resolve.
- **`_plugins/sort_projects.rb`** — Reverses `projects` docs when `sort_reverse: true`. Projects collection is `sort_by: year` (`_config.yml`).
- **`_plugins/user_colors.rb`** — Regenerates `_sass/_user-colors.scss` from `site.colors` on every build. Never hand-edit that file; change `_config.yml` `colors:` instead.
- **`howdy-jekyll-theme.gemspec`** — `spec.files` is a `Dir[]` glob list. New directories or extensions must be added there or they ship missing from the gem.
- **Pagination is `jekyll-paginate-v2`** (not v1); auto tag/category pages off (`autopages: false`). Excerpt separator is `<!--more-->`.

## Conventions

- **Sass uses `@use`, not `@import`.** Entry is `assets/css/main.scss`; keep `user-colors` last so overrides win.
- **`_config.yml` edits require a server restart** — Jekyll does not reload config (noted in the file header). Content/layout edits hot-reload.
- **Local `_config.yml` has `theme:` commented out** (line ~143); uncomment only when consuming the theme as a gem elsewhere.
- **Fonts are validated**: `fonts.primary` must be in the allowlist enforced by `rake validate_config`; fonts load from Google Fonts, Chaumont Script ships locally.
- **Release = tag**: pushing `v*` triggers `release.yml` → builds gem, `gem push` (needs `GEM_HOST_API_KEY` secret), creates GitHub release with the `.gem` attached. Bump the version in the gemspec first.

## CI/CD (`.github/workflows/ci.yml`)

- Jobs: `validate` → `test` → `lighthouse` + `playwright` (parallel) → `deploy` (only on `main` push). CI pins **Ruby 3.3**; local runs 3.4.x.
- Playwright runs in `mcr.microsoft.com/playwright:v1.64.1` container — the image tag must match `@playwright/test` in `package.json` exactly, or every test fails with "update docker image as well". `rake check_playwright` enforces this in CI and locally. Ruby needs `apt-get install -y -qq libyaml-0-2 build-essential ruby-dev` first (already in the workflow).
- Deploy builds with `JEKYLL_ENV=production bundle exec jekyll build --baseurl "/howdy-jekyll-theme"` and pushes `_site/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. Reproduce baseurl issues with that exact build command.
