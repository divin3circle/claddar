import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { walletFeatures } from "@/lib/features"

const itemHeight = 64

function wrapDistance(value: number) {
  const size = walletFeatures.length
  return ((((value + size / 2) % size) + size) % size) - size / 2
}

type FeatureCarouselMenuProps = {
  currentIndex: number
  onSelect: (index: number) => void
  onPause: (paused: boolean) => void
}

export function FeatureCarouselMenu({
  currentIndex,
  onSelect,
  onPause,
}: FeatureCarouselMenuProps) {
  return (
    <div className="relative z-20 flex min-h-80 w-full items-center overflow-hidden px-7 sm:px-12 lg:w-[42%]">
      {walletFeatures.map((feature, index) => {
        const distance = wrapDistance(index - currentIndex)
        const isActive = index === currentIndex
        return (
          <motion.button
            animate={{
              y: distance * itemHeight,
              opacity: 1 - Math.abs(distance) * 0.25,
            }}
            className={cn(
              "absolute flex items-center gap-3 rounded-full border px-5 py-3 text-left text-xs font-medium tracking-wide uppercase transition-colors sm:text-sm",
              isActive
                ? "z-10 border-white bg-white text-primary"
                : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
            )}
            key={feature.id}
            onClick={() => onSelect(index)}
            onMouseEnter={() => onPause(true)}
            onMouseLeave={() => onPause(false)}
            transition={{ type: "spring", stiffness: 90, damping: 22 }}
            type="button"
          >
            <HugeiconsIcon icon={feature.icon} size={18} />
            {feature.label}
          </motion.button>
        )
      })}
    </div>
  )
}
