import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvere.sg"),
  title: {
    default: "Solvere: clause-level compliance training evidence for MAS-regulated firms",
    template: "%s · Solvere",
  },
  description:
    "Short cinematic compliance modules for MAS-regulated financial institutions in Singapore, " +
    "with a clause-level coverage report and a per-learner audit record for every module.",
  openGraph: {
    type: "website",
    url: "https://solvere.sg/",
    siteName: "Solvere",
    title: "Solvere: clause-level compliance training evidence for MAS-regulated firms",
    description:
      "Short cinematic compliance modules for MAS-regulated firms. Each one returns a " +
      "clause-level coverage report.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets the class on <html> before
    // React hydrates, so the server and client markup differ here by design.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
