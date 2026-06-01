import Image from "next/image"
import Link from "next/link"

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold tracking-tight"
      aria-label="Claddar home"
    >
      <Image
        src="/favicon.ico"
        alt="Claddar logo"
        width={500}
        height={500}
        className="h-8 w-auto"
      />
      <span>claddar</span>
    </Link>
  )
}
