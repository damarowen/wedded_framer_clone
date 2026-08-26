"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "../shared/icons"

const ASSET = "/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

const SLIDES = [
  `${ASSET}/location-1.jpg`,
  `${ASSET}/location-2.jpg`,
  `${ASSET}/location-3.jpg`,
  `${ASSET}/location-4.jpg`,
]

export function LocationSection() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)

  return (
    <section id="location" className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-sans text-base font-semibold text-wedded-burgundy">
            Wedding Location
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
            We&apos;ll see you at Villa Cora
          </h2>
          <p className="mt-4 font-sans text-lg leading-[27px] text-wedded-burgundy">
            Viale Machiavelli 18, Florence, Italy
          </p>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-wedded-rose px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Find on Google Maps
          </a>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          {SLIDES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Villa Cora photo ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="absolute inset-0 object-cover transition-opacity duration-500"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-wedded-burgundy transition-opacity hover:opacity-80"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-wedded-burgundy transition-opacity hover:opacity-80"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
