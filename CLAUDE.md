# Working on this site

Personal academic website for Jahir Sadik Monon (jahirsadik.github.io), built with
the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (v0.16.3, classic
Bootstrap-based release — *not* the v1.x gem-based rewrite).

## Ground rules

- **Never `git push`.** Commit the work; Jahir pushes. Same for anything outward-facing.
- **Never write credentials to a file** — no tokens, keys, or passwords in the repo,
  commit messages, or config. Authentication is handled outside this repo (`gh auth`
  or SSH).
- **Verify in the built output, not the source.** After changing anything, run the
  local build and grep `_site/` to confirm the change actually rendered. Several
  bugs here only appeared at build time (Liquid scoping, SCSS specificity,
  locale-dependent parsing).
- **Flag anything invented.** If a date, link, or fact isn't in the repo or supplied
  by Jahir, say so explicitly rather than quietly guessing.

## Local build

ImageMagick isn't installed locally (CI installs it), and `jekyll-scholar` fails to
parse the bibliography under an ASCII locale, so a plain `jekyll build` will not work.
Use a scratch override file:

```bash
# one-time
bundle config set --local path vendor/bundle && bundle install

# every build
printf 'imagemagick:\n  enabled: false\n' > /tmp/_config_local.yml
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8   # else: "invalid byte sequence in US-ASCII"
JEKYLL_ENV=production bundle exec jekyll build \
  --config _config.yml,/tmp/_config_local.yml -d /tmp/_site
```

Build into a scratch directory, never into the repo.

## Deployment

Source lives on `master`. Pushing runs `.github/workflows/deploy.yml`, which builds
and force-pushes the result to `gh-pages`; GitHub Pages serves `gh-pages`. **Never
edit `gh-pages` by hand.** The previous academicpages version of the site is preserved
on the `academicpages-archive` branch.

Keep third-party GitHub Actions pinned to a release tag, never a moving branch.

## Where content lives

| Content | Path | Notes |
|---|---|---|
| Front page | `_pages/about.md` | bio, profile photo, news + selected publications |
| Publications | `_bibliography/papers.bib` | previews in `assets/img/publication_preview/` |
| News items | `_news/` | newest 5 show on the front page |
| Presentations & blogs | `_posts/` | served at `/blog/:year/:title/` |
| Activities | `_projects/` | served at `/activities/`, grouped by `category` |
| Teaching | `_teachings/` | course cards; `instructor:` holds the *role* |
| Nav dropdown | `_pages/dropdown.md` | the "more" menu |

**Old URLs must keep working.** Pages migrated from academicpages carry
`redirect_from:` entries (`/publication/*`, `/talks/*`, `/posts/*`, `/cv/`). Jahir's
CV and external posts cite those paths — don't drop them when editing front matter.

## Content conventions

- **Copyable citations stay clean.** Equal-contribution markers (`*`) belong in the
  `author` field so they render as superscripts, plus an `annotation` field for the
  footnote. `_plugins/hide-custom-bibtex.rb` strips those markers from the BibTeX
  shown behind the **Bib** button — keep its character class in sync with the one in
  `_layouts/bib.liquid`.
- **Publication previews are uniform.** All images in `publication_preview/` are
  900×500 (centre-cropped) so every entry occupies the same space.
- **Photos never overflow horizontally.** Use responsive grids, not raw `<img width>`:
  ```liquid
  <div class="row justify-content-center">
    <div class="col-sm-6 mt-3">
      {% include figure.liquid path="assets/img/…" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
  </div>
  ```
- **Presentation posts keep only the title slide** — never dump every slide as an
  image (the repo previously carried ~270 of them, 93 MB).
- **The CV is a local PDF** in `assets/pdf/`, currently
  `CV-jahir-sadik-monon-sep9.pdf` (not a Drive link). Jahir versions the filename by
  date, so a CV update means **editing both references** or `/cv/` and the CV icon
  404: `_pages/cv.md` (`redirect_to:`) and `_data/socials.yml` (`cv_pdf:`).
- Body headings on subpages are **lowercase** ("advising", "workshops").
- No `<h1>` inside page bodies — the layout supplies the title.

## Design system

Two themes only (light ⇄ dark, **light is the default**); there is no "system" state.
Both define the same custom properties in `_sass/_themes.scss` so they swap cleanly.

| Token | Light | Dark |
|---|---|---|
| `--global-bg-color` | `#FBF3E6` | `#1C1C1C` |
| `--global-card-bg-color` / code / dropdowns | `#F3E8D4` | `#262626` |
| `--global-divider-color` | `#E3D6BE` | `#333333` |
| `--global-text-color` | `#141414` | `#E8E8E8` |
| `--global-text-color-light` (muted) | `#6B6355` | `#999999` |
| `--global-theme-color` (accent) | `#9C4221` | `#7FB49A` |
| `--global-hover-color` | `#7C3A17` | `#9CCBB4` |
| `--global-accent-fill` / `--global-accent-border` | `#F0DFCE` / `#D9B99F` | `#2A3B33` / `#3D5B4E` |
| `--global-link-underline-color` | `rgba(156,66,33,.35)` | `rgba(127,180,154,.35)` |

Rules that go with it:

- Body links: accent, underline at 35% opacity, `text-underline-offset: 3px`; on hover
  the colour goes to `--global-hover-color` and the underline becomes solid.
- Nav links: no underline; accent only on hover or for the active page.
- **Never apply the accent to muted text.**
- Venue badges get one hue each (`.venue-<abbr>` classes in `_sass/_base.scss`) at the
  accent's tone, defined per theme. A new venue without a class falls back to the
  accent fill.
- The profile photo has a light and a dark variant (`profile.image_dark` in
  `_pages/about.md`), stacked and cross-faded over 750 ms to match the theme
  transition. Both variants must be the same aspect ratio or the text reflows on
  toggle.

### SCSS gotcha

Site-specific overrides are appended to the bottom of `_sass/_base.scss`, but source
order doesn't save you — **specificity does**. The theme's `.post article h2 {
margin-top: 2.5rem }` (0,1,2) silently beat a later `.section-head h2 { margin: 0 }`
(0,1,1). Scope overrides under `.post article` when competing with theme rules, and
confirm the winner in the built CSS.
