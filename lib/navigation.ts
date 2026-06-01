import {
  Home01Icon,
  Mail01Icon,
  CodeFolderIcon,
  BadgeInfoIcon,
  DeveloperIcon,
} from "@hugeicons/core-free-icons"

export const navItems = [
  { id: "home", label: "Home", icon: Home01Icon },
  { id: "about", label: "About", icon: BadgeInfoIcon },
  { id: "developers", label: "Developers", icon: DeveloperIcon },
  { id: "resources", label: "Resources", icon: CodeFolderIcon },
  { id: "contact", label: "Contact", icon: Mail01Icon },
] as const

export type NavItemId = (typeof navItems)[number]["id"]
export type DialogNavItemId = Exclude<NavItemId, "home">

export const navActions = [
  { label: "Start Journey", href: "#start-journey", icon: "rocket" },
] as const
