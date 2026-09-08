import Link from "next/link";

import { Section } from "@/components/site/section";

const MODULES: { clause: string; title: string; body: string; cta: string; runtime: string }[] = [
  {
    clause: "MAS PSN01 §9 · 4–5 min",
    title: "Politically Exposed Persons",
    body:
      "Also evidences PSN02, MAS 626, MAS 1014 and SFA04-N02. The PEP definition is identical " +
      "across all five, so one module closes all of them.",
    cta: "Request this module",
    runtime: "04:47",
  },
  {
    clause: "SFA Part XII Div 3 · 8 min · full episode",
    title: "Information Barriers",
    body:
      "For the staff above the wall, and for the compliance function that has to evidence they " +
      "knew where the wall was.",
    cta: "Watch the full episode",
    runtime: "08:06",
  },
];

const IN_PRODUCTION: { title: string; clause: string }[] = [
  { title: "Customer due diligence", clause: "MAS 626" },
  { title: "Insider dealing", clause: "SFA Part XII" },
  { title: "Beneficial ownership and control", clause: "MAS 626" },
  { title: "Conflicts of interest", clause: "SFA04-N02" },
  { title: "Ongoing monitoring and trigger events", clause: "PSN01" },
  { title: "Gifts and entertainment", clause: "internal" },
  { title: "Suspicious transaction reporting", clause: "CDSA" },
  { title: "Sanctions screening", clause: "MAS 626" },
];

export function Modules() {
  return (
    <Section
      id="modules"
      label="Modules"
      title="Written from the notice, one obligation at a time."
      className="border-t-0"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {MODULES.map((module) => (
          <article
            key={module.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            {/* A placeholder for the film's first frame. Drop the real still in
                here as a next/image and delete the gradient. */}
            <div className="relative aspect-16/7 border-b border-border bg-muted/75">
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                  backgroundSize: "2.25rem 2.25rem",
                }}
              />
              <span className="absolute bottom-4 left-4 z-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-2 py-1 font-mono text-[0.625rem] text-muted-foreground">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-2.5" aria-hidden>
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
                {module.runtime}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-[1.125rem]">
              <p className="font-mono text-[0.6875rem] text-muted-foreground">{module.clause}</p>
              <h3 className="mt-2 text-base font-semibold tracking-tight">{module.title}</h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {module.body}
              </p>
              <Link
                href="#send"
                className="mt-auto w-fit pt-4 text-[0.8125rem] underline decoration-border underline-offset-[3px] hover:decoration-current"
              >
                {module.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* The library, as an index rather than a third card pretending to be a
          module that exists. */}
      <div className="mt-6 border-t border-border">
        <div className="flex flex-wrap items-baseline gap-2 pt-4">
          <h3 className="text-sm font-medium tracking-tight">In production</h3>
          <span className="text-xs text-muted-foreground">
            Ask for the current list, or name one we have not built.
          </span>
        </div>
        <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
          {IN_PRODUCTION.map((item) => (
            <li
              key={item.title}
              className="flex items-baseline gap-3 border-b border-border py-2 text-[0.8125rem]"
            >
              {item.title}
              <span className="ml-auto font-mono text-[0.6875rem] text-muted-foreground">
                {item.clause}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
