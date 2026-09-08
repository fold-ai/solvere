import { ContactForm } from "@/components/site/contact-form";
import { Section } from "@/components/site/section";

export function Contact() {
  return (
    <Section id="send">
      <div className="grid grid-cols-1 gap-8 rounded-xl border border-border bg-card p-6 md:grid-cols-2 md:gap-12 md:p-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">See exactly what Solvere does.</h2>
          <p className="mt-2.5 max-w-md leading-relaxed text-muted-foreground">
            Tell us where to reach you and pick what you want: the full Information Barriers module
            with its coverage report, or a call to walk through it together.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Solvere · Singapore ·{" "}
            <a
              href="mailto:jacob.wang@solvere.sg"
              className="underline underline-offset-[3px] hover:text-foreground"
            >
              jacob.wang@solvere.sg
            </a>
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
