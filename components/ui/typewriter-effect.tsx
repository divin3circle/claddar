"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type TypewriterWord = {
  text: string
  className?: string
}

type TypewriterEffectProps = {
  words: TypewriterWord[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffectSmooth({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  return (
    <div className={cn("flex max-w-full items-center", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, delay: 0.35, ease: "linear" }}
        viewport={{ once: true }}
      >
        <div className="text-3xl font-semibold tracking-[-0.07em] whitespace-nowrap sm:text-5xl lg:text-7xl">
          {words.map((word) => (
            <span className="inline-block" key={word.text}>
              <span className={word.className}>{word.text}</span>&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        animate={{ opacity: 1 }}
        className={cn(
          "h-9 w-1 shrink-0 rounded-sm bg-primary sm:h-14 lg:h-20",
          cursorClassName
        )}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  )
}
