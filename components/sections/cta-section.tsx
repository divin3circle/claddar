import {
  ArrowRight01Icon,
  BookOpen01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { ContactDialogButton } from "@/components/navigation/contact-dialog-button"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Reveal } from "@/components/ui/reveal"
import { litepaperUrl } from "@/lib/links"

const ctaWords = [
  { text: "Money" },
  { text: "should" },
  { text: "move" },
  { text: "freely.", className: "text-primary" },
]

export function CtaSection() {
  return (
    <section className="px-5 py-24 sm:py-32 lg:px-8" id="waitlist">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-primary uppercase">
          <HugeiconsIcon icon={SparklesIcon} className="size-4" />
          Start your journey
        </p>
        <TypewriterEffectSmooth className="mt-7" words={ctaWords} />
        <p className="mt-5 max-w-xl leading-7 text-balance text-muted-foreground">
          Join the waitlist for early access to Claddar, or read how we are
          making everyday money simpler, faster, and truly yours.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ContactDialogButton size="lg" className="h-12 px-5">
            Join waitlist
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </ContactDialogButton>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 bg-background/60 px-5 backdrop-blur"
          >
            <Link href={litepaperUrl} rel="noreferrer" target="_blank">
              <HugeiconsIcon icon={BookOpen01Icon} data-icon="inline-start" />
              Read litepaper
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
