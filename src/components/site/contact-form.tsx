"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { requestDemo, type RequestState } from "@/app/actions";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "jacob.wang@solvere.sg";
const INITIAL: RequestState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Sending" : "Send"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(requestDemo, INITIAL);

  return (
    <form action={formAction}>
      <label className="mb-3.5 block">
        <span className="mb-1.5 block text-xs text-muted-foreground">Work email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@yourfirm.com.sg"
          className="h-9 w-full rounded-lg border border-border bg-background px-2.5 text-sm outline-none placeholder:text-muted-foreground/65 focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>

      <label className="mb-3.5 block">
        <span className="mb-1.5 block text-xs text-muted-foreground">Firm</span>
        <input
          type="text"
          name="firm"
          autoComplete="organization"
          placeholder="Your firm"
          className="h-9 w-full rounded-lg border border-border bg-background px-2.5 text-sm outline-none placeholder:text-muted-foreground/65 focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>

      {/* Hidden from people, not from bots. Kept out of the tab order and out
          of the accessibility tree. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="sr-only"
      />

      <fieldset className="mb-4 grid gap-2 min-[30rem]:grid-cols-2">
        <legend className="sr-only">What would you like?</legend>
        <Choice
          value="module"
          defaultChecked
          title="Module demo"
          note="The full module and its coverage report"
        />
        <Choice value="call" title="Book a call" note="A calendar link to walk through it" />
      </fieldset>

      <SubmitButton />

      <p
        className="mt-3 text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        {state.status === "idle" ? (
          "Used to reply with the module or the calendar link. Nothing else."
        ) : state.status === "unconfigured" ? (
          <>
            {state.message} Write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Send%20me%20the%20module`}
              className="underline underline-offset-[3px] hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and it reaches the same place.
          </>
        ) : (
          state.message
        )}
      </p>
    </form>
  );
}

function Choice({
  value,
  title,
  note,
  defaultChecked,
}: {
  value: string;
  title: string;
  note: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="block cursor-pointer rounded-lg border border-border bg-background px-3 py-2.5 has-checked:border-accent-line has-checked:bg-accent-line/8 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring">
      <input type="radio" name="want" value={value} defaultChecked={defaultChecked} className="sr-only" />
      <span className="block text-[0.8125rem] font-medium">{title}</span>
      <span className="mt-0.5 block text-xs text-muted-foreground">{note}</span>
    </label>
  );
}
