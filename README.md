# Howdy Jekyll Theme

> A clean, modern, and minimalist Jekyll theme for personal websites and portfolios.

[![Gem Version](https://img.shields.io/badge/gem-v1.0.0-blue)](https://rubygems.org/gems/howdy-jekyll-theme)
[![CI](https://github.com/howdyitskyle/howdy-jekyll-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/howdyitskyle/howdy-jekyll-theme/actions/workflows/ci.yml)
[![Jekyll](https://img.shields.io/badge/jekyll-%E2%89%A53.9-008a1e)](https://jekyllrb.com/)
[![Ruby](https://img.shields.io/badge/ruby-%E2%89%A53.0-red)](https://www.ruby-lang.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Lighthouse](https://img.shields.io/badge/lighthouse-all%20categories%20%E2%89%A50.9-008a1e)](lighthouserc.json)

[**Live Demo**](#) · [**Installation**](#installation) · [**Configuration**](#configuration) · [**Contributing**](#contributing)

---

## Requirements

| Dependency | Version | Required |
|---|---|---|
| [Ruby](https://www.ruby-lang.org/) | >= 3.0 | Yes |
| [Jekyll](https://jekyllrb.com/) | >= 3.9 | Yes |
| [Bundler](https://bundler.io/) | >= 2.4 | Yes |
| [Node.js](https://nodejs.org/) | >= 18 | For Lighthouse CI only |

## Screenshots

| Light Mode | Dark Mode |
|---|---|
| ![Light mode](https://via.placeholder.com/600x340/f5f5f5/1e1e28?text=Howdy+%7C+Light+Mode) | ![Dark mode](https://via.placeholder.com/600x340/1a1a1a/cccccc?text=Howdy+%7C+Dark+Mode) |

## Features

| Feature | Description |
|---|---|
| **Gem-based** | Easy installation via RubyGems |
| **Light & Dark** | Toggle with persistent preference, respects system preference |
| **Responsive** | Desktop, tablet, and mobile optimized |
| **Hero Carousel** | Touch/swipe-enabled, Swiper.js powered, fade transitions, autoplay |
| **Projects** | Portfolio collection sorted by year with dedicated layouts |
| **Blog** | jekyll-paginate-v2 powered with category color accents |
| **SEO** | jekyll-seo-tag integration |
| **RSS** | Automatic feed via jekyll-feed |
| **TOC** | Auto-generated table of contents with configurable heading levels |
| **Share** | Twitter, LinkedIn, Facebook, Reddit, Hacker News, WhatsApp, Telegram, Email, and copy-link buttons |
| **Newsletter** | Mailchimp, Buttondown, or custom form support |
| **Comments** | Giscus, Disqus, or Utterances |
| **Analytics** | Google Analytics or Plausible |
| **Company Logos** | Configurable "Trusted by" marquee section |
| **Fonts** | Local DM Sans variable font + Chaumont Script logo font. Configurable via `fonts.primary` and `fonts.mono` |

## Browser Compatibility

| Browser | Version | Supported |
|---|---|---|
| Chrome | 120+ | ✅ |
| Firefox | 115+ | ✅ |
| Safari | 16+ | ✅ |
| Edge | 120+ | ✅ |

### Known Quirks

- **Firefox scrollbars**: Uses `scrollbar-color` and `scrollbar-width` (native thin scrollbars). `::-webkit-scrollbar` rules are ignored.
- **Safari `scroll-margin-top`**: Fully supported in Safari 15+. Older versions may require `padding-top` workaround on headings.
- **Safari SVG `loading="lazy"`**: SVG images do not support lazy loading in Safari; they load eagerly regardless of attribute.

## Automated Testing

This theme includes Playwright end-to-end tests covering:

| Test Suite | Coverage |
|---|---|
| `nav.spec.js` | Hamburger toggle, ESC/overlay close, desktop hide |
| `theme.spec.js` | Light/dark toggle, localStorage persistence, reload restore |
| `carousel.spec.js` | Dot navigation, swipe gestures, slide dimensions |
| `toc.spec.js` | Anchor scroll, scroll-margin offset, TOC presence |
| `transitions.spec.js` | Page fade-out, external/hash link exclusion |

```bash
npm test          # Run all tests
npm run test:ui   # Interactive UI mode
```

## Installation

### New Jekyll Site

```bash
jekyll new my-site --skip-bundle
cd my-site
```

### Add the Theme

Add to your `Gemfile`:

```ruby
gem "howdy-jekyll-theme"
```

Add to your `_config.yml`:

```yaml
theme: howdy-jekyll-theme
```

Then install:

```bash
bundle config --local path .bundle
bundle install
```

> **Troubleshooting:** If you run into permission issues or conflicts with system gems, run `bundle config --local path .bundle` before `bundle install`. This vendors all gems into the project's `.bundle/` directory, keeping your environment isolated.

### Existing Site

Remove any `theme:` and `remote_theme:` lines from `_config.yml`, delete `_layouts`, `_includes`, and `_sass` directories, then follow the steps above.

## Configuration

### Minimal Setup

```yaml
# _config.yml
title: "Your Name"
description: "Your site description"
author: "Your Name"
email: "hi@yoursite.com"

url: "https://yoursite.com"
baseurl: ""

theme: howdy-jekyll-theme

plugins:
  - jekyll-seo-tag
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-paginate-v2

collections:
  projects:
    output: true
    permalink: /projects/:slug/
    sort_by: year

pagination:
  enabled: true
  per_page: 5
  permalink: "/blog/page:num/"
  sort_reverse: true
```

### Hero Carousel

Single image or multi-image carousel:

```yaml
# Single image
hero_image: /assets/images/hero.png

# Carousel (2+ images enables touch/swipe)
hero_images:
  - /assets/images/hero-1.jpg
  - /assets/images/hero-2.jpg
  - /assets/images/hero-3.jpg
```

### Navigation

```yaml
navigation:
  - title: "Home"
    url: "/"
  - title: "Projects"
    url: "/projects/"
  - title: "Blog"
    url: "/blog/"
  - title: "About"
    url: "/about"
```

### Social Links

```yaml
social:
  github: "https://github.com/yourusername"
  twitter: "https://x.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  instagram: "https://instagram.com/yourusername"
  dribbble: "https://dribbble.com/yourusername"
```

### Homepage Hero

```yaml
hero:
  headline: "I&nbsp;shape product&nbsp;strategy<br>&amp;&nbsp;design experiences<br><span class=\"text-muted\">at scale</span>"
  subtitle: "Your tagline or short description."
  cta_text: "View case studies"
  cta_url: "/projects/"
```

### About Page

```yaml
about_bio: "Your intro paragraph. <strong>HTML</strong> supported."
about_headline: "Building products that<br>sit at the intersection<br><span class=\"text-muted\">of design and intelligence</span>"
about_paragraph_2: "Your second paragraph."
about_paragraph_3: "Your third paragraph."
about_hero_image: "/assets/illustrations/designer.svg"
about_resume:
  enabled: true
  text: "Download Resume"
  url: "/assets/resume.pdf"

# Testimonials (shown on about page)
testimonials:
  - quote: "A great testimonial quote."
    name: "Jane Doe"
    role: "Title, Company"
```

### Pagination

```yaml
pagination:
  enabled: true
  per_page: 5
  permalink: "page:num/"
  sort_reverse: true
  prev_text: "Prev"
  next_text: "Next"
```

### 404 Page

```yaml
page_404:
  title: "Page Not Found"
  message: "The page you're looking for doesn't exist or has been moved."
  button_text: "Go Home"
  button_url: "/"
```

### Fonts

```yaml
fonts:
  primary: "DM Sans"      # DM Sans, Inter, Plus Jakarta Sans, Instrument Sans, Space Grotesk, Work Sans, Outfit, Manrope, Sora
  mono: "Fragment Mono"   # Fragment Mono, JetBrains Mono, Fira Code
```

### Company Logos Marquee

```yaml
company_logos:
  enabled: true
  items:
    - name: "Company 1"
      width: 120
      url: "https://company1.com"
    - name: "Company 2"
      width: 100
      url: "https://company2.com"
```

### Newsletter, Comments, Analytics

```yaml
# Newsletter
newsletter:
  enabled: true
  provider: buttondown      # mailchimp, buttondown, custom
  action_url: "https://..." # form action URL
  title: "Stay updated"

# Comments
comments:
  enabled: false
  provider: giscus          # giscus, disqus, utterances
  giscus:
    repo: "user/repo"
    repo_id: "R_XXXXXXXX"
    category: "Announcements"
    category_id: "DIC_XXXXXXXX"

# Analytics
analytics:
  provider: plausible       # google, plausible
  plausible_domain: "yoursite.com"
```

## Content Types

### Projects

Create files in `_projects/`:

```yaml
---
layout: project
title: "Project Name"
subtitle: "Brief description"
category: "Web Design"
year: "2025"
image: /assets/images/project.jpg
---
Project content with markdown...
```

### Blog Posts

Create files in `_posts/` with naming format `YYYY-MM-DD-slug.md`:

```yaml
---
layout: post
title: "Post Title"
category: "Tutorials"      # Tutorials, Inspiration, Freebies, Interviews
image: /assets/images/post.jpg
---
Post content...
```

> **Tip:** Use `<!--more-->` to define the excerpt shown on the blog index.

## Customization

### Override Styles

Create `assets/css/main.scss` in your site:

```scss
---
---
@use "variables";
@use "base";
@use "typography";
@use "layout";
@use "components";
@use "dark-mode";

// Your styles here
```

### Override Partials

Copy any `_includes/` or `_layouts/` file into your site's directory with the same path. Jekyll will use your version instead of the theme's.

### User Color Palette

Override the green accent in your `_config.yml`:

```yaml
colors:
  accent_green: "#008a1e"
```

## Development

```bash
git clone https://github.com/howdyitskyle/howdy-jekyll-theme.git
cd howdy-jekyll-theme
bundle config --local path .bundle
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

### Testing

```bash
bundle exec rake test             # HTML validation (links, images, scripts)
bundle exec rake validate_config  # Config field checks
bundle exec rake lighthouse       # Performance & accessibility audits
bundle exec rake all              # All of the above
```

Lighthouse CI asserts accessibility >= 0.9 across 5 pages.

### Build the Gem

```bash
gem build howdy-jekyll-theme.gemspec
gem install ./howdy-jekyll-theme-1.0.0.gem
```

## File Structure

```
├── _includes/          # 12 partials (nav, hero-carousel, toc, share, etc.)
├── _layouts/           # 7 layouts (default, home, page, post, project, blog, collection)
├── _sass/              # 7 stylesheets (variables, base, typography, layout, components, dark-mode, user-colors)
├── assets/
│   ├── css/            # main.scss, swiper-bundle.min.css
│   ├── js/             # hero-carousel.js, mobile-nav.js, theme-toggle.js, swiper-bundle.min.js
│   ├── fonts/          # ChaumontScript-Regular.otf, DMSans-Variable.ttf, DMSans-Italic-Variable.ttf
│   ├── images/
│   └── illustrations/
├── _projects/          # Demo portfolio items
├── _posts/             # Demo blog posts
├── blog/               # Blog index with pagination
├── lib/                # Gem entry point
├── _config.yml         # Fully documented configuration
├── Rakefile            # Test runner
└── lighthouserc.json   # Lighthouse CI assertions
```

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Bug reports and feature requests are welcome at [Issues](https://github.com/howdyitskyle/howdy-jekyll-theme/issues).

## License

This theme is available under the [MIT License](LICENSE).

## Acknowledgments

- **[axeltmpl](https://axeltmpl.framer.website/)** — Design inspired by and remixed from this Framer template
- **[Illustration Kit](https://illustrationkit.com/illustrations/ven)** — Free SVG illustrations by Pencil
- **[Swiper.js](https://swiperjs.com/)** — Touch-enabled carousel (MIT)
- **[Chaumont Script](https://fontmeme.com/fonts/chaumont-script-font/)** — by Måns Grebäck
- **[Jekyll](https://jekyllrb.com/)** — Static site generator
