"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { FooterSocials } from "@/components/ui/footer-socials"

export function ContactDialogContent() {
  const [step, setStep] = useState(1)

  return (
    <div>
      <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
        Step {step} of 3
      </p>
      {step === 1 && (
        <form
          className="mt-4 space-y-4"
          onSubmit={(event) => (event.preventDefault(), setStep(2))}
        >
          <label className="grid gap-2 text-sm font-medium">
            Your email
            <input
              className="h-11 rounded-xl border bg-background px-3 outline-none focus:border-primary"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
          <Button className="w-full" type="submit">
            Continue
          </Button>
        </form>
      )}
      {step === 2 && (
        <form
          className="mt-4 space-y-4"
          onSubmit={(event) => (event.preventDefault(), setStep(3))}
        >
          <label className="grid gap-2 text-sm font-medium">
            How can we help?
            <textarea
              className="min-h-28 rounded-xl border bg-background p-3 outline-none focus:border-primary"
              placeholder="Share your message"
              required
            />
          </label>
          <Button className="w-full" type="submit">
            Send message
          </Button>
        </form>
      )}
      {step === 3 && (
        <div className="mt-4 rounded-2xl bg-muted p-4">
          <p className="font-medium">Message ready.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We will keep the conversation moving from here.
          </p>
        </div>
      )}
      <div className="mt-6 border-t pt-5">
        <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
          Follow Claddar
        </p>
        <FooterSocials />
      </div>
    </div>
  )
}
