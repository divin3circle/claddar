import type { DialogNavItemId } from "@/lib/navigation"

export const navDialogContent: Record<
  Exclude<DialogNavItemId, "contact">,
  {
    title: string
    description: string
    details: string[]
    action: string
    href: string
  }
> = {
  about: {
    title: "Money that works for everyday life",
    description:
      "Claddar is a smart wallet built to make digital dollars useful beyond the screen.",
    details: [
      "Save and earn as you hold",
      "Move money across borders",
      "Stay in control with passkeys",
    ],
    action: "Explore features",
    href: "#about",
  },
  developers: {
    title: "Built on open financial rails",
    description:
      "Claddar brings passkey-secured smart accounts and borderless payments into a simple consumer wallet. Technical guides and integration resources will live here.",
    details: [
      "Smart account architecture",
      "Passkey-first security",
      "Payment rail integrations",
    ],
    action: "Read litepaper",
    href: "/litepaper",
  },
  resources: {
    title: "Learn at your own pace",
    description:
      "Find clear guides for digital dollars, self-custody, mobile money, and getting the most from your Claddar wallet.",
    details: ["Wallet basics", "Security guidance", "Product updates"],
    action: "Read litepaper",
    href: "/litepaper",
  },
}
