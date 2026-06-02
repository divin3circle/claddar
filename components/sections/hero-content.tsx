import {
  ArrowRight01Icon,
  FingerPrintIcon,
  ShieldKeyIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { ContactDialogButton } from "@/components/navigation/contact-dialog-button"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

const proofPoints = [
  { label: "No seed phrase", icon: FingerPrintIcon },
  { label: "For Mobile Money", icon: SmartPhone01Icon },
  { label: "Self-custody", icon: ShieldKeyIcon },
]

export function HeroContent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-4 pb-16 text-center sm:pt-4 lg:pt-8">
      <Reveal>
        <h1 className="mt-7 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.075em] text-balance sm:text-7xl lg:text-8xl">
          Your money,
          <span className="block text-primary">without the borders.</span>
        </h1>
      </Reveal>
      <Reveal className="flex flex-col items-center" delay={0.12}>
        <p className="mt-7 max-w-2xl text-base leading-7 text-balance text-muted-foreground sm:text-lg">
          Save in digital dollars, earn as you hold, spend with a card, and move
          money to mobile money in seconds. Claddar makes self-custody feel as
          simple as mobile banking.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ContactDialogButton
            size="lg"
            className="h-12 bg-foreground px-5 text-background hover:bg-foreground/80"
          >
            Get early access
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </ContactDialogButton>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 bg-background/60 px-5 backdrop-blur"
          >
            <Link href="#about">Explore Claddar</Link>
          </Button>
        </div>
      </Reveal>
      <Reveal className="mt-12" delay={0.22}>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-medium text-muted-foreground sm:gap-x-7">
          {proofPoints.map((item) => (
            <span className="flex items-center gap-1.5" key={item.label}>
              <HugeiconsIcon
                icon={item.icon}
                className="size-4 text-foreground"
              />
              {item.label}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
