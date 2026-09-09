"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Three themes, not two.
 *
 * `enableColorScheme` is off on purpose: next-themes only knows how to map
 * `light` and `dark` onto the `color-scheme` property, and would clear it for
 * `violet`. Each palette declares its own `color-scheme` in globals.css
 * instead, so form controls and scrollbars stay dark under the violet theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      themes={["light", "dark", "violet"]}
      enableSystem
      enableColorScheme={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
