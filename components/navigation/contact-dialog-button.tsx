"use client"

import { useState, type ReactNode } from "react"

import { NavigationDialog } from "@/components/navigation/navigation-dialog"
import { Button } from "@/components/ui/button"

type ContactDialogButtonProps = {
  children: ReactNode
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function ContactDialogButton({
  children,
  className,
  variant = "default",
  size = "default",
}: ContactDialogButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        className={className}
        onClick={() => setOpen(true)}
        size={size}
        variant={variant}
      >
        {children}
      </Button>
      <NavigationDialog item={open ? "contact" : null} onOpenChange={setOpen} />
    </>
  )
}
