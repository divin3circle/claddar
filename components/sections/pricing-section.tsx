import { AnimatedGlassyPricing } from "@/components/ui/animated-glassy-pricing"
import { Reveal } from "@/components/ui/reveal"

export function PricingSection() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 py-20 sm:py-28 lg:px-8"
      id="pricing"
    >
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-background via-chart-1/15 to-background" />
      <div className="absolute top-1/4 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
          Simple pricing
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
          Start free. Upgrade when it pays.
        </h2>
        <p className="mt-5 leading-7 text-balance text-muted-foreground">
          Earn, send, and withdraw from day one. Go Pro when lower mobile money
          fees and card access make sense for you.
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <AnimatedGlassyPricing />
      </Reveal>
    </section>
  )
}
