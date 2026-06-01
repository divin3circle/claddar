"use client"

import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { ContactDialogContent } from "@/components/navigation/contact-dialog-content"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { navDialogContent } from "@/lib/nav-dialogs"
import type { DialogNavItemId } from "@/lib/navigation"

type NavigationDialogProps = {
  item: DialogNavItemId | null
  onOpenChange: (open: boolean) => void
}

export function NavigationDialog({
  item,
  onOpenChange,
}: NavigationDialogProps) {
  if (!item) return null
  if (item === "contact") {
    return (
      <Dialog open onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pr-10 text-xl">
              Start a conversation
            </DialogTitle>
            <DialogDescription>
              Tell us where to reach you, then share what is on your mind.
            </DialogDescription>
          </DialogHeader>
          <ContactDialogContent />
        </DialogContent>
      </Dialog>
    )
  }
  const content = navDialogContent[item]

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pr-10 text-xl">{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        <ul className="grid gap-2 rounded-2xl bg-muted p-4 text-sm">
          {content.details.map((detail) => (
            <li key={detail}>• {detail}</li>
          ))}
        </ul>
        <Button asChild>
          <Link href={content.href}>
            {content.action}
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
