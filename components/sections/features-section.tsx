import { FeatureCarousel } from "@/components/ui/feature-carousel"
import { Reveal } from "@/components/ui/reveal"

export function FeaturesSection() {
  return (
    <section
      className="bg-cover bg-center px-5 py-20 sm:py-28 lg:px-8"
      id="about"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <p className="text-xs font-medium tracking-[0.2em] text-white uppercase">
          Built for real life
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-balance text-white sm:text-6xl">
          One wallet. Every money move.
        </h2>
        <p className="mt-5 leading-7 text-balance text-white/80">
          Claddar brings everyday payments, savings, and global transfers into
          one simple smart wallet.
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <FeatureCarousel />
      </Reveal>
    </section>
  )
}
