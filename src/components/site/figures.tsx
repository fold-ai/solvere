const FIGURES: { figure: string; body: string }[] = [
  { figure: "8:06", body: "The full Information Barriers episode, start to finish." },
  { figure: "10", body: "Comprehension checks inside it, not appended to the end." },
  { figure: "5", body: "MAS notices one PEP module evidences at once." },
  { figure: "0", body: "Passwords anywhere in the system. Sign-in is by magic link." },
];

/**
 * Four numbers on a hairline band. The dividers are per-cell rather than a
 * `divide-x` on the grid, because `divide-x` follows DOM order and would draw
 * a rule down the middle of the second row when this wraps to two columns.
 */
export function Figures() {
  return (
    <div className="border-y border-border bg-muted/30">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 px-6 md:grid-cols-4">
        {FIGURES.map((item) => (
          <div
            key={item.figure}
            className="border-l border-border py-[1.125rem] pl-5 [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 [&:nth-child(n+3)]:border-t md:[&:nth-child(2n+1)]:border-l md:[&:nth-child(2n+1)]:pl-5 md:[&:nth-child(n+3)]:border-t-0 md:first:border-l-0 md:first:pl-0"
          >
            <p className="font-mono text-[1.375rem] tracking-tight tabular-nums">{item.figure}</p>
            <p className="mt-1 max-w-[13rem] text-xs leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
