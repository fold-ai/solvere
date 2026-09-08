import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Panel, PanelHead } from "@/components/site/section";

/** One learner's row in the record. Illustration, not a screenshot. */
const RECORD: { key: string; value: string }[] = [
  { key: "module", value: "Information Barriers" },
  { key: "comprehension", value: "94 / 100" },
  { key: "attempts", value: "2 of 2, one failed" },
  { key: "engaged time", value: "8m 06s" },
  { key: "blocked seek", value: "03:12" },
  { key: "focus loss", value: "00:14" },
];

export function Hero() {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-6 pt-12 pb-12 sm:pt-18 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
          <div>
            {/* A statement of fact, so a plain block. It was a pill with a
                status dot, which implied something was happening live. */}
            <p className="block w-fit max-w-full rounded-md border border-border px-2.5 py-1.5 text-xs leading-snug text-muted-foreground">
              Backed by Tangent ($200k) · Singapore · July 2026
            </p>

            <h1 className="mt-5 text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-[2.75rem]">
              Every firm can prove attendance.
              <br />
              <span className="text-muted-foreground">Almost none can prove comprehension.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Short cinematic compliance modules for MAS-regulated firms. Each one returns a
              clause-level coverage report.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link href="#send" className={buttonVariants({ size: "lg" })}>
                Send me the eight-minute module
              </Link>
              <Link href="#module" className={buttonVariants({ variant: "outline", size: "lg" })}>
                See what it records
              </Link>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Working with <strong className="font-medium text-foreground">Asia&rsquo;s largest hedge fund</strong>.
            </p>
          </div>

          <figure className="m-0">
            <Panel>
              <PanelHead right="learner 0412">Audit record</PanelHead>
              <ul>
                {RECORD.map((row) => (
                  <li
                    key={row.key}
                    className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0"
                  >
                    <span className="min-w-0 truncate font-mono text-xs">{row.key}</span>
                    <span className="ml-auto text-xs whitespace-nowrap text-muted-foreground">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Written server-side as it happens. Exports as CSV or PDF.
              </p>
            </Panel>
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Illustration of what one person leaves behind after eight minutes.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
