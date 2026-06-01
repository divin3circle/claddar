import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { PricingPlan } from "@/lib/pricing"

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={cn(
        "relative flex flex-1 flex-col rounded-3xl border border-white/40 bg-white/45 p-7 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/8",
        plan.popular && "ring-2 ring-primary/30"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Best value
        </span>
      )}
      <h3 className="text-3xl font-semibold tracking-[-0.06em]">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
        {plan.description}
      </p>
      <div className="mt-7 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-[-0.07em]">
          {plan.price}
        </span>
        <span className="text-sm text-muted-foreground">
          / {plan.priceNote}
        </span>
      </div>
      <div className="my-6 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
      <ul className="mb-7 flex flex-col gap-3 text-sm">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-2.5" key={feature}>
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        variant={plan.popular ? "default" : "outline"}
        className="mt-auto h-11"
      >
        <Link href={plan.href}>
          {plan.cta}
          <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
        </Link>
      </Button>
    </article>
  )
}
