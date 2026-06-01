import { MobileNavigation } from "@/components/navigation/mobile-navigation"
import { NavActions } from "@/components/navigation/nav-actions"
import { NavHeader } from "@/components/navigation/nav-header"
import { SiteLogo } from "@/components/navigation/site-logo"

export function SiteHeader() {
  return (
    <header className="backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <SiteLogo />
        <div className="hidden lg:block">
          <NavHeader />
        </div>
        <NavActions className="hidden lg:flex" />
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
