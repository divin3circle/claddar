import {
  GithubIcon,
  InstagramIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { socialLinks } from "@/lib/footer"

const icons = {
  email: Mail01Icon,
  x: NewTwitterIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
}

export function FooterSocials() {
  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((link) => (
        <Link
          aria-label={link.label}
          className="rounded-xl border border-dashed border-foreground/25 p-2.5 transition-transform hover:-translate-y-1"
          href={link.href}
          key={link.label}
          rel="noreferrer"
          target="_blank"
        >
          <HugeiconsIcon icon={icons[link.icon]} className="size-4" />
        </Link>
      ))}
    </div>
  )
}
