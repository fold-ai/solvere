import type { Metadata } from "next";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Panel, PanelHead, Section } from "@/components/site/section";
import { SolvereMark, SolvereMarkCompact } from "@/components/site/solvere-mark";

export const metadata: Metadata = {
  title: "Brand book",
  description: "The Solvere mark, its construction, colour, typography and use.",
};

function Spec({ rows }: { rows: [string, string][] }) {
  return (
    <ul>
      {rows.map(([key, value]) => (
        <li
          key={key}
          className="flex items-baseline gap-3 border-b border-border px-4 py-2 last:border-b-0"
        >
          <span className="font-mono text-xs">{key}</span>
          <span className="ml-auto text-right font-mono text-xs text-muted-foreground">{value}</span>
        </li>
      ))}
    </ul>
  );
}

function Aside({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-t border-border px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

const PALETTES: { name: string; use: string; chips: [string, string, string][] }[] = [
  {
    name: "White",
    use: "daylight, print, anything going to a regulator",
    chips: [
      ["background", "#FFFFFF", "oklch(1 0 0)"],
      ["foreground", "#0A0A0A", "oklch(0.145 0 0)"],
      ["muted-foreground", "#737373", "oklch(0.556 0 0)"],
      ["border", "#E5E5E5", "oklch(0.922 0 0)"],
    ],
  },
  {
    name: "Black",
    use: "the default, and what the product ships in",
    chips: [
      ["background", "#0A0A0A", "oklch(0.145 0 0)"],
      ["card", "#171717", "oklch(0.205 0 0)"],
      ["muted-foreground", "#A1A1A1", "oklch(0.708 0 0)"],
      ["foreground", "#FAFAFA", "oklch(0.985 0 0)"],
    ],
  },
  {
    name: "Violet",
    use: "the brand ground, from the site's own #0a0f1e",
    chips: [
      ["background", "#0C091B", "oklch(0.155 0.038 288)"],
      ["card", "#161329", "oklch(0.202 0.044 288)"],
      ["primary", "#8E5EED", "oklch(0.605 0.205 295)"],
      ["accent", "#AE8DFC", "oklch(0.72 0.16 296)"],
      ["muted-foreground", "#A8A6BF", "oklch(0.735 0.036 290)"],
      ["foreground", "#F5F5FE", "oklch(0.972 0.012 290)"],
    ],
  },
];

const FILES: { name: string; use: string; preview: React.ReactNode }[] = [
  {
    name: "solvere-mark.svg",
    use: "The full mark, currentColor, 20px and up. The one to reach for by default.",
    preview: <SolvereMark className="size-10" />,
  },
  {
    name: "solvere-mark-compact.svg",
    use: "One solid play. Under 20px, and inside every icon regardless of the icon's size.",
    preview: <SolvereMarkCompact className="size-10" />,
  },
  {
    name: "solvere-lockup.svg",
    use: "Mark and wordmark, horizontal. The wordmark is live text; outline it before sending.",
    preview: (
      <span className="flex items-center gap-2">
        <SolvereMark className="size-7" />
        <span className="text-[22px] font-semibold tracking-tight">Solvere</span>
      </span>
    ),
  },
  {
    name: "solvere-favicon.svg",
    use: "Compact mark knocked out of a flat #8E5EED square, 22.5% corner radius.",
    preview: (
      <span className="grid size-10 place-items-center rounded-[22.5%] bg-[#8E5EED] text-white">
        <SolvereMarkCompact className="size-6" />
      </span>
    ),
  },
];

const TYPE: { sample: React.ReactNode; spec: string[] }[] = [
  {
    sample: <span className="text-3xl font-semibold tracking-tight">Prove comprehension</span>,
    spec: ["Geist SemiBold 600", "2.75rem / 1.1 · -0.02em", "page heading, one per page"],
  },
  {
    sample: (
      <span className="text-2xl font-semibold tracking-tight">Six steps, and you hold the record</span>
    ),
    spec: ["Geist SemiBold 600", "1.5rem / 1.2 · -0.02em", "section heading"],
  },
  {
    sample: <span className="text-sm font-medium">A clause-level coverage report</span>,
    spec: ["Geist Medium 500", "0.875rem", "item and card titles"],
  },
  {
    sample: (
      <span className="text-muted-foreground">
        Every checkpoint result is written down as it is given, so what you hold afterwards is
        evidence rather than a timestamp.
      </span>
    ),
    spec: ["Geist Regular 400", "0.875rem / 1.65", "body, max 34rem measure"],
  },
  {
    sample: (
      <span className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Inside a module
      </span>
    ),
    spec: ["Geist Medium 500", "0.6875rem · 0.14em · uppercase", "section label, never a sentence"],
  },
  {
    sample: <span className="font-mono text-xs">07:51 · checkpoint_09 · SFA Part XII Div 3</span>,
    spec: ["Geist Mono Regular 400", "0.75rem · tabular-nums", "timecodes, clauses, filenames"],
  },
];

export default function BrandPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* ---------------------------------------------------------- cover */}
        <section>
          <div className="mx-auto w-full max-w-5xl px-6 pt-12 pb-12 sm:pt-18 sm:pb-16">
            <p className="block w-fit max-w-full rounded-md border border-border px-2.5 py-1.5 text-xs leading-snug text-muted-foreground">
              Brand book · v0.1 · proposal, not yet adopted
            </p>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-[2.75rem]">Solvere</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              A mark, a wordmark, three palettes and the rules that keep them consistent.
              Everything here is drawn on one 24-unit grid and coloured by one set of tokens, so a
              change made once takes everywhere.
            </p>
            <p className="mt-4 max-w-lg text-[0.8125rem] leading-relaxed text-muted-foreground">
              The mark was drawn for this proposal. Solvere has no existing logo, so there was
              nothing to extract: treat this as a starting point to accept, adjust or reject, not
              as documentation of something already in use.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------- the mark */}
        <Section
          label="01 · The mark"
          title="A play, and the record kept inside it."
          note="Two nested triangles. The outer one is the module: eight minutes of film. The inner one is what the module returns, the checkpoint result written down while the film is still running. The ring between them is the thing that makes the record trustworthy, which is why it is the widest shape in the mark rather than a hairline."
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
            <div className="grid min-h-80 place-items-center rounded-xl border border-border bg-card p-8">
              <SolvereMark className="size-45" />
            </div>
            <Panel>
              <PanelHead right="solvere-mark.tsx">Mark</PanelHead>
              <Spec
                rows={[
                  ["viewBox", "0 0 24 24"],
                  ["paths", "2"],
                  ["fill", "currentColor"],
                  ["ring", "evenodd, one path"],
                  ["optical centre", "x 8.884, not 12"],
                ]}
              />
              <Aside>
                The ring and its hole live in a single path element. Split into two paths, evenodd
                resolves per element and the hole fills in solid.
              </Aside>
            </Panel>
          </div>
        </Section>

        {/* --------------------------------------------------- construction */}
        <Section
          label="02 · Construction"
          title="One triangle, scaled twice about its incentre."
          note="Every shape in the mark is the same triangle at a different size. Offsetting a triangle inward by a fixed distance is exactly the same as scaling it about its incentre, so the ring, the hole and the inner play are three scale factors rather than three drawings. Redraw the triangle and the whole mark follows."
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
            <div className="grid min-h-88 place-items-center rounded-xl border border-border p-8">
              <svg viewBox="0 0 24 24" className="h-auto w-full max-w-76" aria-label="Construction grid">
                <g style={{ stroke: "var(--border)", fill: "none" }}>
                  <g strokeWidth="0.045">
                    <path d="M1 0V24M2 0V24M4 0V24M5 0V24M7 0V24M8 0V24M10 0V24M11 0V24M13 0V24M14 0V24M16 0V24M17 0V24M19 0V24M20 0V24M22 0V24M23 0V24" />
                    <path d="M0 1H24M0 2H24M0 4H24M0 5H24M0 7H24M0 8H24M0 10H24M0 11H24M0 13H24M0 14H24M0 16H24M0 17H24M0 19H24M0 20H24M0 22H24M0 23H24" />
                  </g>
                  <g strokeWidth="0.11">
                    <path d="M0 0V24M6 0V24M12 0V24M18 0V24M24 0V24" />
                    <path d="M0 0H24M0 6H24M0 12H24M0 18H24M0 24H24" />
                  </g>
                </g>
                {/* CSS custom properties do not resolve inside SVG presentation
                    attributes. They only work from a style declaration. */}
                <g
                  style={{ stroke: "var(--accent-line)", fill: "none" }}
                  strokeWidth="0.1"
                  strokeDasharray="0.5 0.4"
                  opacity="0.75"
                >
                  <path d="M3 2L21 12L3 22Z" />
                  <circle cx="8.884" cy="12" r="5.884" />
                </g>
                <g style={{ fill: "var(--accent-line)" }} opacity="0.9">
                  <circle cx="3" cy="2" r="0.28" />
                  <circle cx="21" cy="12" r="0.28" />
                  <circle cx="3" cy="22" r="0.28" />
                  <circle cx="8.884" cy="12" r="0.2" />
                </g>
                <SolvereMark x="0" y="0" width="24" height="24" opacity="0.92" />
              </svg>
            </div>

            <Panel>
              <PanelHead right="grid units">Geometry</PanelHead>
              <Spec
                rows={[
                  ["grid", "24 × 24"],
                  ["vertices", "3,2 · 21,12 · 3,22"],
                  ["incentre", "8.884, 12"],
                  ["inradius", "5.884"],
                  ["ring wall", "2.2"],
                  ["ring → play gap", "1.4"],
                  ["scale, hole", "0.62611"],
                  ["scale, inner play", "0.38817"],
                  ["corner radii", "1.6 · 0.9 · 0.7"],
                ]}
              />
              <Aside>
                A triangle points right, so its mass sits left of centre. The mark is placed on its
                incentre at x 8.884, and anything that centres it must centre optically, not on the
                box.
              </Aside>
            </Panel>
          </div>
        </Section>

        {/* ---------------------------------------------- size, clear space */}
        <Section
          label="03 · Size and clear space"
          title="Below 20 pixels the ring closes up."
          note="At small sizes a 2.2-unit ring and a 1.4-unit gap land on less than a pixel each, and the mark turns into a filled blob. Rather than let that happen by accident, there is a second drawing: one solid play, larger corner radius, same triangle. Use it under 20px and nowhere else."
        >
          <Panel>
            <PanelHead right="20px and up">Full mark</PanelHead>
            <div className="flex flex-wrap items-end gap-8 p-8">
              {[80, 48, 32, 24, 20].map((size) => (
                <div key={size} className="grid justify-items-center gap-3">
                  <SolvereMark style={{ width: size, height: size }} />
                  <span className="font-mono text-[0.6875rem] whitespace-nowrap text-muted-foreground">
                    {size === 20 ? "20 min" : size}
                  </span>
                </div>
              ))}
            </div>
            <PanelHead right="under 20px">Compact mark</PanelHead>
            <div className="flex flex-wrap items-end gap-8 p-8">
              {[18, 16, 12].map((size) => (
                <div key={size} className="grid justify-items-center gap-3">
                  <SolvereMarkCompact style={{ width: size, height: size }} />
                  <span className="font-mono text-[0.6875rem] text-muted-foreground">{size}</span>
                </div>
              ))}
              <div className="grid justify-items-center gap-3">
                <SolvereMarkCompact className="size-12 opacity-35" />
                <span className="text-center font-mono text-[0.6875rem] text-muted-foreground">
                  shown large
                  <br />
                  for reference only
                </span>
              </div>
            </div>
          </Panel>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
            <div className="grid place-items-center rounded-xl border border-border p-8">
              <svg viewBox="0 0 36 36" className="h-auto w-full max-w-60" aria-label="Clear space">
                <rect
                  x="0.06"
                  y="0.06"
                  width="35.88"
                  height="35.88"
                  rx="1"
                  style={{ fill: "none", stroke: "var(--accent-line)" }}
                  strokeWidth="0.12"
                  strokeDasharray="0.6 0.5"
                  opacity="0.8"
                />
                <SolvereMark x="6" y="6" width="24" height="24" />
                <g style={{ stroke: "var(--accent-line)" }} strokeWidth="0.1" opacity="0.7">
                  <path d="M0 3H6M30 3H36" />
                </g>
                <text
                  x="18"
                  y="3.9"
                  textAnchor="middle"
                  style={{ fill: "var(--muted-foreground)" }}
                  fontFamily="ui-monospace, monospace"
                  fontSize="1.6"
                >
                  6 units = ¼ height
                </text>
              </svg>
            </div>
            <Panel>
              <PanelHead>Clear space</PanelHead>
              <Spec
                rows={[
                  ["all sides", "0.25 × mark height"],
                  ["at 24px", "6px"],
                  ["at 80px", "20px"],
                ]}
              />
              <Aside>
                Nothing sits inside that band: no rule, no text, no edge of a card. The wordmark in
                the lockup is the one exception, and it has its own measure.
              </Aside>
            </Panel>
          </div>
        </Section>

        {/* --------------------------------------------------------- lockup */}
        <Section
          label="04 · Lockup"
          title="Mark left, word right, one relationship."
          note="There is one lockup. It is horizontal, the wordmark is Geist SemiBold at a size fixed against the mark, and the two are never re-spaced by eye. Where the product name already appears in running text, use the mark on its own."
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
            <div className="grid min-h-56 place-items-center rounded-xl border border-border bg-card p-8">
              <div className="flex items-center gap-[0.9375rem]">
                <SolvereMark className="size-11" />
                <span className="text-[34px] font-semibold tracking-tight">Solvere</span>
              </div>
            </div>
            <Panel>
              <PanelHead right="solvere-lockup.svg">Lockup</PanelHead>
              <Spec
                rows={[
                  ["wordmark", "Geist SemiBold 600"],
                  ["tracking", "-0.02em"],
                  ["mark height", "1.3 × type size"],
                  ["gap", "0.44 × mark height"],
                  ["case", "Solvere, never SOLVERE"],
                ]}
              />
              <Aside>
                Convert the wordmark to outlines before the file leaves the building. Live text
                renders in whatever the recipient has installed, and Geist is not it.
              </Aside>
            </Panel>
          </div>
        </Section>

        {/* --------------------------------------------------------- colour */}
        <Section
          label="05 · Colour"
          title="Three palettes, one set of names."
          note="The interface never names a colour. It names a role — background, card, border, muted-foreground — and the palette supplies the value. That is why the same markup carries all three themes without a single conditional. Values are authored in oklch because lightness there is perceptual, which is what lets the violet swap out cleanly for the neutrals."
        >
          <p className="mb-8 max-w-[38rem] leading-relaxed text-muted-foreground">
            The mark itself has no colour. It fills with{" "}
            <span className="font-mono text-xs">currentColor</span> and takes the text colour of
            whatever it sits in, so there is no second asset to keep in sync.
          </p>

          {PALETTES.map((palette) => (
            <div key={palette.name}>
              <div className="mt-7 mb-3 flex items-baseline gap-2.5 first:mt-0">
                <h3 className="text-sm font-medium tracking-tight">{palette.name}</h3>
                <span className="text-xs text-muted-foreground">{palette.use}</span>
              </div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
                {palette.chips.map(([role, hex, oklch]) => (
                  <div key={role} className="bg-background p-3.5">
                    <div
                      className="h-14 rounded-md border border-border"
                      style={{ background: hex }}
                    />
                    <h4 className="mt-2.5 text-[0.8125rem] font-medium">{role}</h4>
                    <span className="mt-0.5 block font-mono text-[0.6875rem] text-muted-foreground">
                      {hex}
                      <br />
                      {oklch}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Panel className="mt-6">
            <PanelHead>Rules</PanelHead>
            <Aside>
              Violet is the only tinted primary. In the white and black themes the primary stays
              neutral, so a button never turns purple on a white page.
            </Aside>
            <Aside>
              #8E5EED is the one value allowed to appear as a literal hex, and only where a token
              cannot reach: the app icon, an email signature, a printed cover.
            </Aside>
            <Aside>No gradients on the mark, in any theme. The app icon&rsquo;s ground is flat.</Aside>
          </Panel>
        </Section>

        {/* ----------------------------------------------------------- type */}
        <Section
          label="06 · Typography"
          title="Geist for everything, Geist Mono for anything measured."
          note="One family, one companion. The monospace is not decoration: it marks the things that come out of the system rather than out of a writer — timecodes, clause references, scores, filenames, counts. If a number could be checked against the record, it is set in mono."
        >
          <ul className="border-t border-border">
            {TYPE.map((row, index) => (
              <li
                key={index}
                className="grid grid-cols-1 gap-1.5 border-b border-border py-4 md:grid-cols-[1fr_14rem] md:items-baseline md:gap-6"
              >
                <div>{row.sample}</div>
                <span className="font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
                  {row.spec.map((line, i) => (
                    <span key={line} className={i > 0 ? "block" : undefined}>
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* -------------------------------------------------------- misuse */}
        <Section label="07 · Misuse" title="Six things that break it.">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            <Dont note="A play triangle points forward. Turned, it becomes a caret or an arrow and stops meaning anything." lead="Do not rotate it.">
              <SolvereMark className="size-11 rotate-24" />
            </Dont>

            <Dont note="The mark is one colour. Tinting the inner play makes it read as a state indicator." lead="Do not colour the two parts separately.">
              <svg viewBox="0 0 24 24" className="size-11">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.377 3.321L18.482 10.601A1.6 1.6 0 0 1 18.482 13.399L5.377 20.679A1.6 1.6 0 0 1 3 19.281L3 4.719A1.6 1.6 0 0 1 5.377 3.321ZM6.537 6.482L15.054 11.213A0.9 0.9 0 0 1 15.054 12.787L6.537 17.518A0.9 0.9 0 0 1 5.2 16.732L5.2 7.268A0.9 0.9 0 0 1 6.537 6.482Z"
                />
                <path
                  fill="#8E5EED"
                  d="M7.64 8.696L12.486 11.388A0.7 0.7 0 0 1 12.486 12.612L7.64 15.304A0.7 0.7 0 0 1 6.6 14.692L6.6 9.308A0.7 0.7 0 0 1 7.64 8.696Z"
                />
              </svg>
            </Dont>

            <Dont note="The ring is already the outline. Stroking it gives four edges where there should be two." lead="Do not redraw it as an outline.">
              <svg viewBox="0 0 24 24" className="size-11" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M5.377 3.321L18.482 10.601A1.6 1.6 0 0 1 18.482 13.399L5.377 20.679A1.6 1.6 0 0 1 3 19.281L3 4.719A1.6 1.6 0 0 1 5.377 3.321Z" />
                <path d="M7.64 8.696L12.486 11.388A0.7 0.7 0 0 1 12.486 12.612L7.64 15.304A0.7 0.7 0 0 1 6.6 14.692L6.6 9.308A0.7 0.7 0 0 1 7.64 8.696Z" />
              </svg>
            </Dont>

            <Dont note="The geometry is one triangle scaled about a point. Scaling one axis breaks the ring's even wall." lead="Do not stretch it.">
              <SolvereMark className="size-11 scale-x-145" />
            </Dont>

            <Dont note="No shadow, no glow, no bevel, no gradient. The mark is flat in every theme and every medium." lead="Do not add effects.">
              <SolvereMark className="size-11 drop-shadow-lg" />
            </Dont>

            <Dont note="It exists for 16px. Above 20px it reads as a different, blunter logo." lead="Do not use the compact mark large.">
              <SolvereMarkCompact className="size-11" />
            </Dont>
          </div>
        </Section>

        {/* --------------------------------------------------------- in use */}
        <Section label="08 · In use" title="Where it actually appears.">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr]">
            <Panel>
              <PanelHead right="mark 18px · gap 8px">Site header</PanelHead>
              <div className="flex h-14 items-center justify-between gap-4 border-b border-border px-4">
                <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <SolvereMark className="size-[1.125rem]" aria-hidden />
                  Solvere
                </span>
                <span className="flex gap-4 text-xs text-muted-foreground">
                  <span>Modules</span>
                  <span>Security</span>
                </span>
              </div>
              <PanelHead right="compact, muted">Panel header</PanelHead>
              <div className="flex items-center gap-2 px-4 py-3 text-[0.6875rem] tracking-[0.12em] text-muted-foreground uppercase">
                <SolvereMarkCompact className="size-3.5" aria-hidden />
                Audit record
              </div>
            </Panel>

            <Panel>
              <PanelHead>Icons</PanelHead>
              <div className="flex flex-wrap items-center gap-6 p-6">
                <div className="grid justify-items-center gap-2.5">
                  <span className="grid size-14 place-items-center rounded-[22.5%] bg-[#8E5EED] text-white">
                    <SolvereMarkCompact className="size-[34px]" />
                  </span>
                  <span className="font-mono text-[0.6875rem] text-muted-foreground">app 56</span>
                </div>
                <div className="grid justify-items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-[22.5%] bg-[#8E5EED] text-white">
                    <SolvereMarkCompact className="size-[19px]" />
                  </span>
                  <span className="font-mono text-[0.6875rem] text-muted-foreground">favicon 32</span>
                </div>
                <div className="grid justify-items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-full bg-foreground text-background">
                    <SolvereMarkCompact className="size-[17px]" />
                  </span>
                  <span className="font-mono text-[0.6875rem] text-muted-foreground">avatar</span>
                </div>
              </div>
              <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Icons use the compact mark at every size, because an icon is read at 16px more often
                than it is drawn at 512.
              </p>
            </Panel>
          </div>
        </Section>

        {/* --------------------------------------------------------- files */}
        <Section label="09 · Files" title="Four assets, and what each is for.">
          {/* Each file next to what it actually draws, so nobody downloads the
              compact mark expecting the ring. Rendered from the same components
              the site uses, not from a screenshot that can drift. */}
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {FILES.map((file) => (
              <li key={file.name} className="flex flex-col bg-background p-5">
                <div className="grid h-20 place-items-center rounded-md bg-muted/45">
                  {file.preview}
                </div>
                <a
                  href={`/brand/${file.name}`}
                  download
                  className="mt-3.5 w-fit font-mono text-xs underline decoration-border underline-offset-[3px] hover:decoration-current"
                >
                  {file.name}
                </a>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {file.use}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            All four are plain SVG with no embedded fonts, no filters and no scripts, so they paste
            into a codebase, a slide or an email signature without carrying anything with them.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Dont({
  children,
  lead,
  note,
}: {
  children: React.ReactNode;
  lead: string;
  note: string;
}) {
  return (
    <div className="bg-background p-5">
      <div className="grid h-24 place-items-center rounded-md bg-muted/45">{children}</div>
      <p className="mt-3 text-[0.8125rem] leading-snug text-muted-foreground">
        <strong className="font-medium text-foreground">{lead}</strong> {note}
      </p>
    </div>
  );
}
