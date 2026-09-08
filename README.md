# solvere-web

The Solvere marketing site and brand book. Next.js App Router, Tailwind v4,
three themes, no database.

## Run it

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push the repository, import it at vercel.com, and take every default. Next.js
is detected on its own, so there is nothing to configure and no build command
to type. Both routes are static, so the whole site is served from the edge and
the only server code that ever runs is the demo form's action.

```
/           the site
/brandbook  the brand book (/brand redirects here)
```

## The demo form

The form is a Server Action. Delivery goes through Resend over plain `fetch`
rather than an SDK, so there is one fewer dependency to upgrade.

Set these in Vercel under Settings → Environment Variables:

| Variable         | Needed | What it is                                            |
| ---------------- | ------ | ----------------------------------------------------- |
| `RESEND_API_KEY` | no     | From resend.com. Without it the form falls back below. |
| `CONTACT_TO`     | no     | Defaults to `jacob.wang@solvere.sg`.                   |
| `CONTACT_FROM`   | no     | Must be a domain you have verified with Resend.        |

With no key set the form still works: it tells the visitor delivery is not
configured and offers a `mailto:` link to the same inbox. That is deliberate,
so a fresh deploy is never silently broken.

Nothing is stored. There is no database, and the fields exist only to reply to,
which is what the page promises.

## Themes

Three palettes — white, black, violet — live as `:root`, `.dark` and `.violet`
in `src/app/globals.css`. Components never name a colour; they name a role
(`bg-background`, `text-muted-foreground`, `border-border`) and the palette
supplies the value, which is why one set of markup carries all three with no
conditionals.

`enableColorScheme` is off in the theme provider on purpose: next-themes only
knows how to map `light` and `dark` onto the `color-scheme` property and would
clear it for `violet`. Each palette declares its own instead.

## Structure

```
src/app/
  layout.tsx          fonts, metadata, theme provider
  page.tsx            the site, assembled from src/components/site
  actions.ts          the demo form's Server Action
  brandbook/page.tsx  the brand book
  globals.css         tokens and the three palettes
  icon.svg            favicon, picked up by Next automatically
src/components/site/  one file per section
src/components/ui/    button variants
public/brand/         the four logo assets, downloadable from /brandbook
```

## Things worth knowing before you edit

- **The mark's ring is one path with two subpaths.** Split it into two `<path>`
  elements and `fill-rule="evenodd"` resolves per element, filling the hole in
  solid. See `src/components/site/solvere-mark.tsx`.
- **CSS custom properties do not resolve inside SVG presentation attributes.**
  In the brand book's construction diagram they are set via `style` instead.
  `stroke="var(--border)"` silently draws nothing.
- **Module thumbnails are placeholders.** They are a CSS grid pattern where the
  film's first frame should go. Drop `information-barriers-first-frame.jpg` and
  `module-first-frame.jpg` into `public/` and swap them for a `next/image` in
  `src/components/site/modules.tsx`.
- **`overflow-x: clip`, not `hidden`.** `hidden` on an ancestor makes it a
  scroll container and kills `position: sticky` on the header.
