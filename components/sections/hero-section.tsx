import { SiteHeader } from "@/components/navigation/site-header"
import { HeroContent } from "@/components/sections/hero-content"
import { DottedSurface } from "@/components/ui/dotted-surface"

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <DottedSurface className="absolute inset-0 -z-10" aria-hidden="true" />
      <SiteHeader />
      <div className="relative flex flex-1">
        <HeroContent />
      </div>
    </section>
  )
}
