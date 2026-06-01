"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { testimonials } from "@/lib/testimonials"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const active = testimonials[activeIndex]

  const selectTestimonial = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 250)
    }, 180)
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="relative px-8">
        <span className="pointer-events-none absolute -top-8 -left-2 font-serif text-7xl text-foreground/8">
          &ldquo;
        </span>
        <p
          className={cn(
            "max-w-2xl text-center text-2xl leading-relaxed font-light transition-all duration-300 md:text-3xl",
            isAnimating ? "scale-[0.98] opacity-0 blur-sm" : "opacity-100"
          )}
        >
          {active.quote}
        </p>
        <span className="pointer-events-none absolute -right-2 -bottom-10 font-serif text-7xl text-foreground/8">
          &rdquo;
        </span>
      </div>
      <p
        className={cn(
          "text-center text-xs tracking-[0.2em] text-muted-foreground uppercase transition-all",
          isAnimating ? "translate-y-2 opacity-0" : "opacity-100"
        )}
      >
        {active.role}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {testimonials.map((testimonial, index) => {
          const isActive = activeIndex === index
          return (
            <button
              aria-label={`Show ${testimonial.author}'s perspective`}
              className={cn(
                "flex items-center rounded-full text-sm transition-all duration-500",
                isActive
                  ? "gap-2 bg-foreground p-1 pr-3 text-background shadow-lg"
                  : "p-1 hover:bg-muted"
              )}
              key={testimonial.id}
              onClick={() => selectTestimonial(index)}
              type="button"
            >
              <Image
                alt=""
                className="size-9 rounded-full object-cover"
                height={36}
                src={testimonial.avatar}
                width={36}
              />
              <span
                className={cn(
                  "grid transition-all duration-500",
                  isActive
                    ? "ml-1 grid-cols-[1fr] opacity-100"
                    : "ml-0 grid-cols-[0fr] opacity-0"
                )}
              >
                <span className="overflow-hidden">
                  <span className="block font-medium whitespace-nowrap">
                    {testimonial.author}
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
