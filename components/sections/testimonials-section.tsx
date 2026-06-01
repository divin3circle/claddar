import { Testimonials } from "@/components/ui/unique-testimonial"
import { Reveal } from "@/components/ui/reveal"

export function TestimonialsSection() {
  return (
    <section className="px-5 py-20 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
          Built around real needs
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
          Money that fits everyday life.
        </h2>
      </Reveal>
      <Reveal className="mx-auto mt-8 max-w-4xl" delay={0.12}>
        <Testimonials />
      </Reveal>
    </section>
  )
}
