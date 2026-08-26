import type { Metadata } from "next"
import { Instrument_Serif, Montserrat, Inter, Delicious_Handrawn } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
})

const deliciousHandrawn = Delicious_Handrawn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handrawn",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedded · Wedding Invitation Website Template",
  description:
    "Modern wedding invitation website template with all essentials—share location, gift details, and event schedule. Includes a built-in RSVP form that sends responses to your email.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        instrumentSerif.variable,
        montserrat.variable,
        inter.variable,
        deliciousHandrawn.variable
      )}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=libre-caslon-condensed@400,500,700,1000&display=swap"
        />
      </head>
      <body className="bg-wedded-bg font-sans">{children}</body>
    </html>
  )
}
