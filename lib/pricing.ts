export type PricingPlan = {
  name: string
  description: string
  price: string
  priceNote: string
  features: string[]
  cta: string
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Everything you need to start moving and growing your money.",
    price: "KES 0",
    priceNote: "forever",
    cta: "Get early access",
    features: [
      "Receive USDC and XLM",
      "Send to Stellar addresses",
      "Earn yield on digital dollars",
      "30-day transaction history",
      "Mobile money withdrawals at 1.5%",
    ],
  },
  {
    name: "Claddar Pro",
    description: "Lower fees and more ways to use your money every day.",
    price: "KES 500",
    priceNote: "per month",
    cta: "Join the Pro waitlist",
    popular: true,
    features: [
      "Everything included in Free",
      "Mobile money withdrawals at 0.5%",
      "Virtual Mastercard unlocked",
      "Card spending up to $1,000/month",
      "Physical card access",
      "Unlimited history and PDF exports",
      "Priority support and early features",
    ],
  },
]
