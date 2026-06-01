import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CtaSection } from "@/components/sections/cta-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Page() {
  return (
    <main className="min-h-svh">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
