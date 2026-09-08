import { Section } from "@/components/site/section";

const VIEWS: { who: string; title: string; body: string; stub: ("full" | "half" | "wide" | "accent" | "bars")[] }[] = [
  {
    who: "learner",
    title: "A film with questions in it",
    body:
      "Eight minutes, with the comprehension checks written into the story rather than bolted " +
      "onto the end of it.",
    stub: ["wide", "half", "bars"],
  },
  {
    who: "compliance",
    title: "A map of the obligation",
    body:
      "Every clause, where it is taught, which question tests it, and how the floor actually " +
      "performed against it.",
    stub: ["accent", "wide", "half", "full"],
  },
  {
    who: "auditor",
    title: "A record that outlives the person",
    body:
      "Every attempt, including the wrong answers and the skips that were refused at the moment " +
      "they were tried.",
    stub: ["half", "wide", "accent", "wide"],
  },
];

const WIDTH = { full: "w-[70%]", half: "w-[45%]", wide: "w-[90%]", accent: "w-[70%]" } as const;

export function WhoSeesWhat() {
  return (
    <Section label="Who sees what" title="Three readings of the same eight minutes.">
      {/* gap-px over a border-coloured ground gives hairline rules without
          per-cell border bookkeeping at each breakpoint. */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {VIEWS.map((view) => (
          <div key={view.who} className="bg-card">
            <div
              aria-hidden
              className="flex flex-col gap-1.5 border-b border-border bg-muted/45 p-4"
            >
              {view.stub.map((kind, index) =>
                kind === "bars" ? (
                  <div key={index} className="mt-1 flex gap-0.5">
                    {[0, 1, 2, 3, 4, 5].map((bar) => (
                      <span
                        key={bar}
                        className={`h-5 flex-1 rounded-[2px] ${bar < 3 ? "bg-accent-line/60" : "bg-border"}`}
                      />
                    ))}
                  </div>
                ) : (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full ${WIDTH[kind]} ${kind === "accent" ? "bg-accent-line/70" : "bg-border"}`}
                  />
                ),
              )}
            </div>
            <div className="p-4">
              <p className="font-mono text-[0.6875rem] text-muted-foreground">{view.who}</p>
              <h3 className="mt-1.5 text-sm font-medium tracking-tight">{view.title}</h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {view.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
