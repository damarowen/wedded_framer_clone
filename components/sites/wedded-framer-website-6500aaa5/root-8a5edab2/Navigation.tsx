"use client"

import { useEffect, useState } from "react"

const NAV_LINKS = [
  { label: "Location", href: "#location" },
  { label: "Hotels", href: "#hotels" },
  { label: "The Day", href: "#theday" },
  { label: "FAQ", href: "#faq" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(84,39,46,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#"
          className={`font-serif text-xl transition-colors md:text-2xl ${
            scrolled ? "text-wedded-burgundy" : "text-white"
          }`}
        >
          Sophie &amp; Matteo
        </a>

        <nav className="hidden items-center gap-2 md:flex lg:gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 font-sans text-sm font-medium transition-opacity hover:opacity-70 lg:px-4 ${
                scrolled ? "text-wedded-burgundy" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#rsvp"
            className="rounded-lg bg-white px-4 py-2.5 font-sans text-sm font-medium text-black transition-opacity hover:opacity-85 lg:px-5"
          >
            I&apos;ll be there!
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`md:hidden ${scrolled ? "text-wedded-burgundy" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-wedded-border bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 font-sans text-sm font-medium text-wedded-burgundy"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rsvp"
              className="mt-2 rounded-lg bg-wedded-rose px-4 py-3 text-center font-sans text-sm font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              I&apos;ll be there!
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
