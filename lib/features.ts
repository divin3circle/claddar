import {
  ChartIncreaseIcon,
  CreditCardIcon,
  FingerPrintIcon,
  GlobalIcon,
  ShieldKeyIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"

export const walletFeatures = [
  {
    id: "passkeys",
    label: "Passkey Wallet",
    icon: FingerPrintIcon,
    image: "/passkey-wallet.png",
    description:
      "Create your wallet with Face ID. No seed phrase to write down, hide, or lose.",
  },
  {
    id: "yield",
    label: "Dollar Yield",
    icon: ChartIncreaseIcon,
    image: "/yield.png",
    description:
      "Put your digital dollars to work with a simple earn toggle and daily growth.",
  },
  {
    id: "mobile-money",
    label: "Mobile Money",
    icon: SmartPhone01Icon,
    image: "/mobile-transfer.png",
    description:
      "Move between USDC and mobile money in seconds, with the exchange rate shown upfront.",
  },
  {
    id: "card",
    label: "Global Card",
    icon: CreditCardIcon,
    image: "/global-card.png",
    description:
      "Spend from your wallet anywhere Mastercard is accepted with a virtual card.",
  },
  {
    id: "borderless",
    label: "Borderless Sends",
    icon: GlobalIcon,
    image: "/borderless.png",
    description:
      "Send digital dollars across borders quickly without the usual remittance costs.",
  },
  {
    id: "custody",
    label: "Always Yours",
    icon: ShieldKeyIcon,
    image: "/always-yours.png",
    description:
      "Stay in control with a self-custody smart wallet secured by your trusted devices.",
  },
] as const
