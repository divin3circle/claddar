import { PricingCard } from "@/components/ui/pricing-card"
import { pricingPlans } from "@/lib/pricing"

export function AnimatedGlassyPricing() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute -top-16 left-1/2 -z-10 size-72 -translate-x-1/2 animate-pulse rounded-full bg-primary/20 blur-3xl" />
      <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  )
}
