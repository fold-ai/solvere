import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Shared shell for the page sections: one hairline rule between them, one
 * container width, one vertical rhythm. Keeps the page reading like the
 * product surface rather than a stack of unrelated marketing blocks.
 */
export function Section({
  label,
  title,
  note,
  children,
  className,
  id,
}: {
  label?: string;
  title?: string;
  note?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const hasHeading = Boolean(label || title || note);

  return (
    <section id={id} className={cn("border-t border-border", className)}>
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
        {label ? <SectionLabel>{label}</SectionLabel> : null}
        {title ? (
          <h2 className="mt-3 max-w-[34rem] text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            {title}
          </h2>
        ) : null}
        {note ? (
          <p className="mt-3 max-w-[38rem] leading-relaxed text-muted-foreground">{note}</p>
        ) : null}
        <div className={cn(hasHeading && "mt-8")}>{children}</div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

/** Bordered panel with a small uppercase head. The page's one container idiom. */
export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      {children}
    </div>
  );
}

export function PanelHead({ children, right }: { children: ReactNode; right?: string }) {
  return (
    <div className="flex h-9 items-center gap-2 border-b border-border bg-muted/40 px-4 text-[0.6875rem] font-medium tracking-[0.12em] text-muted-foreground uppercase">
      {children}
      {right ? <span className="ml-auto font-mono text-[0.6875rem] normal-case tracking-normal">{right}</span> : null}
    </div>
  );
}
