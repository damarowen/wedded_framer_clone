"use client"

import { useEffect, useState } from "react"

const WEDDING_DATE = new Date("2027-08-15T00:00:00")
const pad = (n: number) => String(n).padStart(2, "0")

const LINKS = [
  { label: "Location", href: "#location" },
  { label: "Hotels", href: "#hotels" },
  { label: "The Day", href: "#theday" },
  { label: "FAQ", href: "#faq" },
  { label: "RSVP", href: "#rsvp" },
]

export function FooterSection() {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00")

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now())
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setTimeLeft(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-wedded-border bg-wedded-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-wedded-border pb-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base font-normal text-wedded-burgundy transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-16 text-center">
          <p className="font-sans text-base leading-6 text-wedded-burgundy">
            Wedding countdown:
          </p>
          <p
            className="mt-1 text-lg leading-[18px] text-wedded-burgundy"
            style={{ fontFamily: '"Libre Caslon Condensed", serif', fontWeight: 1000 }}
          >
            {timeLeft}
          </p>
          <p className="mt-2 font-sans text-3xl font-bold text-wedded-burgundy md:text-4xl">
            {timeLeft}
          </p>
          <h2 className="mx-auto mt-12 max-w-3xl font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
            We can&apos;t wait to celebrate this special day with you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-6 text-wedded-burgundy">
            Please RSVP by{" "}
            <span className="font-medium text-wedded-burgundy">15 June 2026</span>
            , and feel free to reach out if you have any questions.
          </p>
          <a
            href="#rsvp"
            className="mt-8 inline-flex rounded-lg bg-wedded-rose px-6 py-3 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            RSVP
          </a>
          <p className="mt-16 font-sans text-xs text-wedded-muted">
            <a
              href="https://www.framer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-opacity hover:opacity-70"
            >
              Create a free website with Framer, the website builder loved by
              startups, designers and agencies.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
