import { Rocket01Icon, Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navActions } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const actionIcons = {
  wallet: Download01Icon,
  rocket: Rocket01Icon,
}

const actionStyles = {
  rocket: {
    variant: "default" as const,
    className: "bg-primary font-semibold text-white hover:bg-chart-1-600",
  },
}

type NavActionsProps = {
  className?: string
  stacked?: boolean
}

export function NavActions({ className, stacked = false }: NavActionsProps) {
  return (
    <div className={cn("flex gap-2", stacked && "flex-col", className)}>
      {navActions.map((action) => (
        <Button asChild key={action.href} {...actionStyles[action.icon]}>
          <Link href={action.href}>
            <HugeiconsIcon
              icon={actionIcons[action.icon]}
              data-icon="inline-start"
            />
            {action.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}
