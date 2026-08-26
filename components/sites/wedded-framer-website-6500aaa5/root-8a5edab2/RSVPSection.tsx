"use client"

import { useState } from "react"
import Image from "next/image"

const ASSET = "/wedded_framer_clone/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="rsvp" className="relative flex items-center justify-center overflow-hidden px-6 py-24 md:py-32">
      <Image
        src={`${ASSET}/rsvp-bg.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(30, 31, 25, 0.5)" }}
      />
      <div className="relative z-[2] w-full max-w-xl rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.15)] md:p-12">
        <p className="font-sans text-base font-semibold text-wedded-burgundy">
          RSVP
        </p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
          We can&apos;t wait to celebrate this magical day with you.
        </h2>
        <p className="mt-4 font-sans text-sm leading-[22px] text-wedded-burgundy">
          Please RSVP no later than June 15. Fill in the form below and let us know
          about any dietary needs or questions.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="mailto:sophie@gmail.com"
            className="font-sans text-sm text-wedded-rose underline"
          >
            sophie@gmail.com
          </a>
          <a
            href="tel:0123456789"
            className="font-sans text-sm text-wedded-rose underline"
          >
            0123 456 789
          </a>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-lg border border-wedded-border bg-wedded-cream p-6 text-center">
            <p className="font-serif text-2xl text-wedded-burgundy">
              Thank you! Your RSVP has been sent.
            </p>
          </div>
        ) : (
          <form
            className="mt-8 flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="font-sans text-base font-semibold text-wedded-burgundy"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-2 w-full rounded-lg border border-wedded-border bg-white px-4 py-3 font-sans text-sm text-wedded-burgundy outline-none transition-shadow focus:border-wedded-rose focus:shadow-[0_0_0_2px_rgba(107,56,68,0.15)]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-sans text-base font-semibold text-wedded-burgundy"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-wedded-border bg-white px-4 py-3 font-sans text-sm text-wedded-burgundy outline-none transition-shadow focus:border-wedded-rose focus:shadow-[0_0_0_2px_rgba(107,56,68,0.15)]"
              />
            </div>
            <div>
              <label
                htmlFor="guests"
                className="font-sans text-base font-semibold text-wedded-burgundy"
              >
                Additional guests
              </label>
              <input
                id="guests"
                type="text"
                placeholder="Number of additional guests"
                className="mt-2 w-full rounded-lg border border-wedded-border bg-white px-4 py-3 font-sans text-sm text-wedded-burgundy outline-none transition-shadow focus:border-wedded-rose focus:shadow-[0_0_0_2px_rgba(107,56,68,0.15)]"
              />
            </div>
            <div>
              <label
                htmlFor="notes"
                className="font-sans text-base font-semibold text-wedded-burgundy"
              >
                Meal preferences &amp; Additional information
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Dietary needs, questions, song requests..."
                className="mt-2 w-full resize-none rounded-lg border border-wedded-border bg-white px-4 py-3 font-sans text-sm text-wedded-burgundy outline-none transition-shadow focus:border-wedded-rose focus:shadow-[0_0_0_2px_rgba(107,56,68,0.15)]"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-lg bg-wedded-rose px-6 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              RSVP now!
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
