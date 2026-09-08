import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/site/section";

const CLAIMS: { lead: string; body: string }[] = [
  { lead: "Grading is server-side.", body: "Answer keys never reach a learner's browser." },
  {
    lead: "Playback is written server-side only.",
    body: "Nobody can post a completion they did not earn.",
  },
  {
    lead: "Completion requires recorded playback.",
    body: "Refused seeks are written into the record rather than dropped.",
  },
  {
    lead: "Authentication is by magic link.",
    body: "No passwords exist anywhere in the system.",
  },
  {
    lead: "Configuration is per firm.",
    body: "Two firms can run one module against different rules.",
  },
  {
    lead: "Per-learner audit record.",
    body: "Every attempt including failures, engaged time, focus loss and each blocked seek.",
  },
  {
    lead: "Clause-level traceability.",
    body: "Every paragraph maps to where it is taught and where it is tested, gaps included.",
  },
  {
    lead: "Aligned with the MAS TRM guidelines.",
    body: "Server-side audit logs, least-privilege access and tenant isolation.",
  },
];

export function Security() {
  return (
    <Section id="security" label="Security" title="The record has to survive the person it describes.">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {CLAIMS.map((claim) => (
          <div key={claim.lead} className="flex gap-2.5 bg-background px-4 py-3.5">
            <Check className="mt-0.5 size-3.5 shrink-0 text-accent-line" aria-hidden />
            <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">{claim.lead}</strong> {claim.body}
            </p>
          </div>
        ))}
      </div>

      {/* Saying what is missing is load-bearing here, not a disclaimer. A
          procurement team finds this out anyway; better it is on the page. */}
      <div className="mt-4 rounded-xl border border-dashed border-border p-5">
        <h3 className="text-sm font-medium tracking-tight">What we do not claim</h3>
        <p className="mt-2 max-w-[42rem] leading-relaxed text-muted-foreground">
          No SOC 2. No ISO 27001. No completed penetration test. No accreditation and no TGS code.
          Better you read that here than find it halfway through procurement.
        </p>
        <a
          href="mailto:jacob.wang@solvere.sg?subject=Cybersecurity%20pack"
          className={buttonVariants({ variant: "outline", size: "sm", className: "mt-3.5" })}
        >
          Ask for the cybersecurity pack
        </a>
      </div>
    </Section>
  );
}
