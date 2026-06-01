"use client"

import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"

import { NavActions } from "@/components/navigation/nav-actions"
import { NavigationDialog } from "@/components/navigation/navigation-dialog"
import { SiteLogo } from "@/components/navigation/site-logo"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { navItems, type DialogNavItemId } from "@/lib/navigation"

export function MobileNavigation() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogItem, setDialogItem] = useState<DialogNavItemId | null>(null)

  return (
    <>
      <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open navigation">
            <HugeiconsIcon icon={Menu01Icon} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex-row items-center justify-between">
            <div>
              <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Explore the Claddar website.
              </DrawerDescription>
              <SiteLogo />
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation">
                <HugeiconsIcon icon={Cancel01Icon} />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <nav
            className="flex flex-col items-start gap-1 px-4 py-6"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "home") return
                  setDrawerOpen(false)
                  setDialogItem(item.id)
                }}
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium hover:bg-muted"
              >
                {item.label}
                <HugeiconsIcon icon={item.icon} className="ml-2 inline-block" />
              </button>
            ))}
          </nav>
          <NavActions stacked className="mt-auto p-4" />
        </DrawerContent>
      </Drawer>
      <NavigationDialog
        item={dialogItem}
        onOpenChange={(open) => !open && setDialogItem(null)}
      />
    </>
  )
}
