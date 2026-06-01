import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { walletFeatures } from "@/lib/features"

function getStatus(index: number, currentIndex: number) {
  const length = walletFeatures.length
  const distance = ((index - currentIndex + length + 1) % length) - 1
  if (distance === 0) return "active"
  if (distance === -1) return "prev"
  if (distance === 1) return "next"
  return "hidden"
}

export function FeatureCarouselDeck({
  currentIndex,
}: {
  currentIndex: number
}) {
  return (
    <div className="relative flex min-h-120 flex-1 items-center justify-center overflow-hidden px-8 py-16 sm:min-h-140">
      <div className="relative aspect-4/5 w-full max-w-sm">
        {walletFeatures.map((feature, index) => {
          const status = getStatus(index, currentIndex)
          const isActive = status === "active"
          const isSide = status === "prev" || status === "next"
          return (
            <motion.div
              animate={{
                x: isActive ? 0 : status === "prev" ? -80 : 80,
                scale: isActive ? 1 : isSide ? 0.86 : 0.72,
                opacity: isActive ? 1 : isSide ? 0.35 : 0,
                rotate: status === "prev" ? -3 : status === "next" ? 3 : 0,
                zIndex: isActive ? 20 : isSide ? 10 : 0,
              }}
              className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white bg-background shadow-xl sm:border-8"
              initial={false}
              key={feature.id}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <Image
                alt=""
                fill
                sizes="(max-width: 1024px) 80vw, 384px"
                src={feature.image}
                className="object-cover"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black/25 transition-opacity",
                  !isActive && "opacity-70"
                )}
              />
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-7 pt-28 text-white"
                    initial={{ opacity: 0, y: 18 }}
                  >
                    <p className="mb-3 text-[10px] tracking-[0.2em] text-white/70 uppercase">
                      0{index + 1} / 0{walletFeatures.length}
                    </p>
                    <h3 className="text-2xl font-medium tracking-tight">
                      {feature.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
