"use client"

import {
  ArrowUp01Icon,
  Moon02Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"

export function FooterControls() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-full border border-dashed border-foreground/25 p-1">
      <button
        className="rounded-full p-2 hover:bg-muted"
        onClick={() => setTheme("light")}
        type="button"
      >
        <HugeiconsIcon icon={Sun01Icon} className="size-4" />
        <span className="sr-only">Use light theme</span>
      </button>
      <button
        className="rounded-full p-2 hover:bg-muted"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        type="button"
      >
        <HugeiconsIcon icon={ArrowUp01Icon} className="size-4" />
        <span className="sr-only">Scroll to top</span>
      </button>
      <button
        className="rounded-full p-2 hover:bg-muted"
        onClick={() => setTheme("dark")}
        type="button"
      >
        <HugeiconsIcon icon={Moon02Icon} className="size-4" />
        <span className="sr-only">Use dark theme</span>
      </button>
    </div>
  )
}
