"use client"

import { useCallback, useEffect, useState } from "react"

import { FeatureCarouselDeck } from "@/components/ui/feature-carousel-deck"
import { FeatureCarouselMenu } from "@/components/ui/feature-carousel-menu"
import { walletFeatures } from "@/lib/features"

const autoplayInterval = 3500

export function FeatureCarousel() {
  const [step, setStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const currentIndex =
    ((step % walletFeatures.length) + walletFeatures.length) %
    walletFeatures.length
  const nextStep = useCallback(() => setStep((value) => value + 1), [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextStep, autoplayInterval)
    return () => clearInterval(interval)
  }, [isPaused, nextStep])

  const selectFeature = (index: number) => {
    const length = walletFeatures.length
    const distance =
      ((index - currentIndex + length + length / 2) % length) - length / 2
    setStep((value) => value + distance)
  }

  return (
    <div
      className="mx-auto flex min-h-190 w-full max-w-6xl flex-col overflow-hidden border-none lg:min-h-150 lg:flex-row"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <FeatureCarouselMenu
        currentIndex={currentIndex}
        onSelect={selectFeature}
        onPause={setIsPaused}
      />
      <FeatureCarouselDeck currentIndex={currentIndex} />
    </div>
  )
}
