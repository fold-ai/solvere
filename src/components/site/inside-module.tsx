import { Panel, PanelHead, Section } from "@/components/site/section";

const SEGMENTS: { at: string; key: string; note: string; mark: number }[] = [
  { at: "00:42", key: "above_the_wall", note: "taught", mark: 9 },
  { at: "02:15", key: "checkpoint_03", note: "passed first time", mark: 28 },
  { at: "03:12", key: "seek_attempt", note: "blocked, logged", mark: 39 },
  { at: "04:30", key: "crossing_the_wall", note: "taught", mark: 56 },
  { at: "06:08", key: "escalation_contact", note: "your firm's own", mark: 75 },
  { at: "07:51", key: "checkpoint_09", note: "failed, segment replayed", mark: 96 },
];

const PLAYHEAD = 38; // 03:04 of 08:06

export function InsideModule() {
  return (
    <Section id="module" label="Inside a module" title="The story stops where the obligation is.">
      <Panel>
        <PanelHead right="03:04 / 08:06">
          <span aria-hidden className="size-1.5 rounded-full bg-accent-line" />
          Information Barriers · The Draft
        </PanelHead>
        <ul>
          {SEGMENTS.map((segment) => (
            <li
              key={segment.key}
              className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-b-0"
            >
              <span className="w-13 shrink-0 font-mono text-[0.6875rem] text-muted-foreground tabular-nums">
                {segment.at}
              </span>
              <span className="min-w-0 truncate font-mono text-xs">{segment.key}</span>
              <span className="ml-auto text-xs whitespace-nowrap text-muted-foreground">
                {segment.note}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 border-t border-border px-4 py-3">
          <span className="font-mono text-[0.6875rem] text-muted-foreground tabular-nums">03:04</span>
          <span className="relative h-0.5 flex-1 rounded-full bg-border">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-accent-line"
              style={{ width: `${PLAYHEAD}%` }}
            />
            {SEGMENTS.map((segment) => (
              <span
                key={segment.key}
                className="absolute -top-0.5 h-1.5 w-0.5 rounded-[1px] bg-muted-foreground"
                style={{ left: `${segment.mark}%` }}
              />
            ))}
          </span>
          <span className="font-mono text-[0.6875rem] text-muted-foreground tabular-nums">08:06</span>
        </div>
      </Panel>
      <p className="mt-3 text-xs text-muted-foreground">
        A wrong answer replays the segment that taught it, not the whole film.
      </p>
    </Section>
  );
}
