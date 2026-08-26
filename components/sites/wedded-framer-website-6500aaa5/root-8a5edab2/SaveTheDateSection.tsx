"use client"

import { useEffect, useState } from "react"

const WEDDING_DATE = new Date("2026-08-15T00:00:00")

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

export function SaveTheDateSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <section className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Save The Date <br className="md:hidden" />
          15.08.26
        </h2>
        <h3 className="mx-auto mt-6 max-w-2xl font-serif text-[32px] font-normal leading-[38.4px] text-wedded-burgundy">
          We are getting married and we could not be happier to share this moment
          with you. Here you&apos;ll find the full wedding details: the schedule,
          venue, what to wear, where to stay, and your RSVP. We can&apos;t wait to
          see you in Florence this August!
        </h3>
        <div className="mx-auto mt-12 grid max-w-md grid-cols-4 gap-4">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-serif text-[48px] font-normal leading-none text-wedded-burgundy">
                {pad(unit.value)}
              </span>
              <span
                className="mt-2 text-xs font-medium lowercase text-wedded-burgundy"
                style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
