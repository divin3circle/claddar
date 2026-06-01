export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#about" },
      { label: "Pricing", href: "#pricing" },
      { label: "Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Litepaper", href: "/litepaper" },
      { label: "Developers", href: "#developers" },
      { label: "Resources", href: "#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
] as const

export const socialLinks = [
  { label: "Email", href: "mailto:hello@claddar.com", icon: "email" },
  { label: "X", href: "https://x.com", icon: "x" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
] as const
