import { Section } from "@/components/site/section";

const STEPS: { title: string; body: string; output: string[] }[] = [
  {
    title: "Send your documents",
    body: "Your MAS notice and your internal policy. Nothing else is needed to start.",
    output: ["your obligations, read"],
  },
  {
    title: "Get your modules",
    body: "We assign the ones that match your obligations, each arriving with its coverage report.",
    output: ["coverage report", "gaps named"],
  },
  {
    title: "Reshape them in plain language",
    body:
      "Swap a scenario for an incident that actually happened to you, adjust the questions, add " +
      "your context and your logo.",
    output: ["your version", "of the module"],
  },
  {
    title: "Deliver to the floor",
    body:
      "Staff sign in by magic link at their work address. There is no password in the system to " +
      "lose or to phish.",
    output: ["magic links sent"],
  },
  {
    title: "Train",
    body:
      "People watch and answer as they go, with the assistant beside the video for anything that " +
      "did not land.",
    output: ["checkpoint results", "graded server-side"],
  },
  {
    title: "Export",
    body: "Pull both documents whenever you need them, including on the morning somebody asks.",
    output: ["CSV, PDF"],
  },
];

const GRID = "md:grid-cols-[2.5rem_1fr_13rem] md:gap-6";

/**
 * Three columns, not two. The third one is the point: the record accumulates
 * as you go, so each step names what exists after it that did not before.
 */
export function Process() {
  return (
    <Section label="Getting started" title="Six steps, and you hold the record at the end.">
      <div
        className={`hidden pb-2.5 text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase md:grid ${GRID}`}
        aria-hidden
      >
        <span />
        <span>Step</span>
        <span>What exists after it</span>
      </div>

      <ol className="border-t border-border">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className={`grid grid-cols-1 gap-1.5 border-b border-border py-[1.125rem] md:items-baseline ${GRID}`}
          >
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-medium tracking-tight">{step.title}</h3>
              <p className="mt-1 max-w-[34rem] leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
            <p className="font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
              {step.output.map((line, i) => (
                <span key={line} className={i > 0 ? "block" : undefined}>
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
