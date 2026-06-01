"use client"

import { useRef, useState, type Dispatch, type SetStateAction } from "react"
import { motion } from "framer-motion"

import { NavigationDialog } from "@/components/navigation/navigation-dialog"
import {
  navItems,
  type DialogNavItemId,
  type NavItemId,
} from "@/lib/navigation"

type Position = { left: number; width: number; opacity: number }
type SetPosition = Dispatch<SetStateAction<Position>>

export function NavHeader() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const [dialogItem, setDialogItem] = useState<DialogNavItemId | null>(null)

  return (
    <nav aria-label="Primary navigation">
      <ul
        className="relative flex rounded-full border border-foreground/10 p-1 shadow-sm"
        onMouseLeave={() =>
          setPosition((current) => ({ ...current, opacity: 0 }))
        }
      >
        {navItems.map((item) => (
          <Tab
            id={item.id}
            key={item.id}
            onSelect={setDialogItem}
            setPosition={setPosition}
          >
            {item.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
      <NavigationDialog
        item={dialogItem}
        onOpenChange={(open) => !open && setDialogItem(null)}
      />
    </nav>
  )
}

function Tab({
  children,
  id,
  onSelect,
  setPosition,
}: {
  children: React.ReactNode
  id: NavItemId
  onSelect: (item: DialogNavItemId) => void
  setPosition: SetPosition
}) {
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        setPosition({
          left: ref.current.offsetLeft,
          width: ref.current.getBoundingClientRect().width,
          opacity: 1,
        })
      }}
      className="relative z-10"
    >
      <button
        onClick={() => id !== "home" && onSelect(id)}
        type="button"
        className="block px-4 py-2 text-xs font-medium tracking-wide text-foreground uppercase transition-colors hover:text-white"
      >
        {children}
      </button>
    </li>
  )
}

function Cursor({ position }: { position: Position }) {
  return (
    <motion.li
      animate={position}
      className="absolute inset-y-1 z-0 rounded-full bg-primary transition-[width,opacity] duration-300"
    />
  )
}
