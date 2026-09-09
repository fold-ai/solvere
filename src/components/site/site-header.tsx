import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { SolvereMark } from "@/components/site/solvere-mark";
import { ThemeSwitcher } from "@/components/site/theme-switcher";

const LINKS = [
  { href: "/#modules", label: "Modules" },
  { href: "/#module", label: "Inside a module" },
  { href: "/#security", label: "Security" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          {/* aria-hidden because the word beside it already names the product;
              two labels would make a screen reader say it twice. */}
          <SolvereMark className="size-[1.125rem]" aria-hidden />
          Solvere
        </Link>

        {/* Three links plus the swatches plus a button is wider than a phone.
            The links come out below md rather than moving into a hamburger:
            a menu here would be a second client component and a script for
            three anchors, and they are all in the footer anyway. */}
        <nav className="flex min-w-0 items-center gap-1.5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden md:inline-flex ${buttonVariants({ variant: "ghost", size: "sm" })}`}
            >
              {link.label}
            </Link>
          ))}

          <ThemeSwitcher />

          <Link href="/#send" className={buttonVariants({ size: "sm" })}>
            {/* "Send me the module" is three words too long for a 390px header
                once the swatches sit beside it. The full label returns with
                the room. */}
            <span className="min-[30rem]:hidden">Demo</span>
            <span className="hidden min-[30rem]:inline">Send me the module</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
