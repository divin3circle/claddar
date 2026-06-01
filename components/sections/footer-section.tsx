import Link from "next/link"

import { SiteLogo } from "@/components/navigation/site-logo"
import { FooterControls } from "@/components/ui/footer-controls"
import { FooterSocials } from "@/components/ui/footer-socials"
import { footerGroups } from "@/lib/footer"

export function FooterSection() {
  return (
    <footer
      className="border-t border-dashed border-foreground/20 px-5 py-12 lg:px-8"
      id="contact"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-dashed border-foreground/20 pb-10 md:grid-cols-[1.5fr_2fr]">
          <div>
            <SiteLogo />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              A smart wallet for saving, spending, and moving digital dollars
              without borders or seed phrases.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold tracking-[0.16em] uppercase">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <FooterSocials />
          <FooterControls />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Claddar.
          </p>
        </div>
      </div>
    </footer>
  )
}
