"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const OPTIONS = [
  { value: "light", label: "White", swatch: "bg-white" },
  { value: "dark", label: "Black", swatch: "bg-neutral-900" },
  { value: "violet", label: "Violet", swatch: "bg-linear-135 from-violet-700 to-violet-400" },
] as const;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server has no idea which theme the browser will resolve, so the
  // pressed state is only truthful after hydration. Rendering it before then
  // is a hydration mismatch and a frame of the wrong ring.
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="mr-1 inline-flex items-center gap-1 rounded-full border border-border p-[0.1875rem]"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={option.label}
          aria-pressed={mounted ? theme === option.value : undefined}
          onClick={() => setTheme(option.value)}
          className={`size-[1.125rem] rounded-full border border-border transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${option.swatch} ${
            mounted && theme === option.value
              ? "ring-3 ring-accent-line ring-offset-1 ring-offset-background"
              : ""
          }`}
        />
      ))}
    </div>
  );
}
