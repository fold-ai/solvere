import {
  Bot,
  Clapperboard,
  Download,
  Building2,
  ListChecks,
  Archive,
  type LucideIcon,
} from "lucide-react";

import { SectionLabel } from "@/components/site/section";

const ITEMS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Clapperboard,
    title: "A film, not a slideshow",
    body:
      "Each module dramatises a real, anonymised enforcement pattern, built from the notice " +
      "itself rather than a generic library relabelled for Singapore.",
  },
  {
    icon: ListChecks,
    title: "A clause-level coverage report",
    body:
      "Every paragraph of the obligation maps to where it is taught and which question tests " +
      "it. The gaps are named in the same document as the coverage.",
  },
  {
    icon: Building2,
    title: "Your escalation layer on top",
    body:
      "Your contacts, your thresholds and your own past incidents sit over the film, reshaped " +
      "in plain language through a prompt layer rather than by a production team.",
  },
  {
    icon: Bot,
    title: "An assistant beside the video",
    body:
      "Whatever did not land can be asked in the player, answered against the module's own " +
      "material rather than the open web.",
  },
  {
    icon: Archive,
    title: "A per-learner record",
    body:
      "Every attempt including the failures, engaged time, focus loss and each blocked seek. " +
      "Evidence somebody understood the material, not a completion timestamp.",
  },
  {
    icon: Download,
    title: "An export that is ready before it is asked for",
    body:
      "Both documents come out whole as CSV or PDF, including on the morning somebody walks in " +
      "and wants them.",
  },
];

/**
 * A sticky heading against a hairline list, rather than a grid of identical
 * icon cards. Six cards would say "these are six equal features"; the list
 * says "these six things arrive together, in this order".
 */
export function EveryModule() {
  return (
    <section id="platform" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[15rem_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <SectionLabel>Every module</SectionLabel>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
              What comes with each one.
            </h2>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
              Six things, and none of them optional extras. A module that arrives without its
              coverage report is not finished.
            </p>
          </div>

          <ul className="border-t border-border">
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="border-b border-border py-[1.125rem]">
                <h3 className="flex items-center gap-2 text-sm font-medium tracking-tight">
                  <Icon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                  {title}
                </h3>
                <p className="mt-1.5 max-w-[40rem] leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
