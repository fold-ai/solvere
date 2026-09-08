import Link from "next/link";

const LINKS = [
  { href: "/#modules", label: "Modules" },
  { href: "/#module", label: "Inside a module" },
  { href: "/#security", label: "Security" },
  { href: "/brandbook", label: "Brand book" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Solvere · Singapore</span>
        <nav className="flex flex-wrap items-center gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:jacob.wang@solvere.sg"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            jacob.wang@solvere.sg
          </a>
          <a
            href="https://www.linkedin.com/company/solveresg"
            rel="noopener"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
