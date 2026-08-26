"use client"

import Image from "next/image"
import { useInView } from "@/hooks/useInView"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useScrollScale } from "@/hooks/useScrollScale"
import { HeartIcon } from "./icons"

const ASSET = "/wedded_framer_clone/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

const TIMELINE = [
  {
    time: "14:00",
    title: "Ceremony",
    description:
      "We gather in the gardens of Villa Cora for the ceremony. Please arrive a few minutes early — doors open at 13:30.",
  },
  {
    time: "15:00",
    title: "Drinks & mingle",
    description:
      "Glasses of prosecco and Aperol spritz await — join us on the terrace for light bites and great company under the Tuscan sky.",
  },
  {
    time: "17:00",
    title: "Dinner in the hall",
    description:
      "A candlelit seated dinner in Villa Cora's grand hall. Expect Florentine-inspired cuisine, heartfelt speeches, and a surprise or two.",
  },
  {
    time: "20:00",
    title: "Party & dancing",
    description:
      "The night is ours — dancing, laughter, and music late into the warm August evening. See you on the dance floor.",
  },
]

const IMAGES = [
  `${ASSET}/day-1.jpg`,
  `${ASSET}/day-2.jpg`,
  `${ASSET}/day-3.jpg`,
  `${ASSET}/day-4.jpg`,
]

function TimelineMarker() {
  const { ref, scale } = useScrollScale<HTMLDivElement>({ min: 1, max: 1.18 })
  const fillOpacity = Math.min(1, Math.max(0, (scale - 1) / 0.18))

  return (
    <div
      ref={ref}
      className="absolute left-0 top-2 flex h-5 w-5 justify-center md:static md:order-none md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3"
    >
      <div className="relative">
        {/* Halo: buka garis di sekitar heart supaya tidak menabrak */}
        <span className="absolute -inset-1 rounded-full bg-wedded-bg" aria-hidden />
        <HeartIcon
          className="relative h-5 w-5 shrink-0 text-wedded-burgundy will-change-transform"
          fillOpacity={fillOpacity}
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  )
}

function TimelineItem({
  time,
  title,
  description,
  image,
  index,
}: {
  time: string
  title: string
  description: string
  image: string
  index: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: true })
  const imageSide = index % 2 === 0 ? "left" : "right"
  const imageCol = imageSide === "left" ? "md:col-start-1 md:col-end-2" : "md:col-start-3 md:col-end-4"
  const textCol = imageSide === "left" ? "md:col-start-3 md:col-end-4" : "md:col-start-1 md:col-end-2"

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:grid md:grid-cols-[1fr_20px_1fr] md:gap-x-12 md:h-[374px] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Image block — rendered first so desktop grid fills left-to-right */}
      <div className={`order-2 mt-6 md:order-none md:row-start-1 md:row-end-2 md:mt-0 md:h-full ${imageCol}`}>
        <div className="relative h-[477px] w-full overflow-hidden rounded-xl md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <TimelineMarker />

      {/* Text block */}
      <div className={`order-1 flex flex-col justify-center pl-10 md:order-none md:row-start-1 md:row-end-2 md:h-full md:pl-0 ${textCol}`}>
        <h3 className="font-serif text-[40px] font-normal leading-[48px] tracking-[-0.03em] text-wedded-burgundy">
          {time}
        </h3>
        <h4 className="mt-2 font-serif text-[28px] font-normal leading-[33.6px] text-wedded-burgundy">
          {title}
        </h4>
        <p className="mt-2 max-w-[360px] font-sans text-base leading-6 text-wedded-burgundy">
          {description}
        </p>
      </div>
    </div>
  )
}

export function TheDaySection() {
  const { ref: sectionRef, progress } = useScrollProgress<HTMLElement>({
    startOffset: 0.75,
    endOffset: 0.25,
  })

  return (
    <section
      id="theday"
      ref={sectionRef}
      className="bg-wedded-bg px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-left font-sans text-base font-semibold text-wedded-burgundy">
            The Day
          </p>
          <h2 className="mt-4 font-serif text-[56px] font-normal leading-[67.2px] tracking-[-0.03em] text-wedded-burgundy">
            The Wedding Day
          </h2>
          <p className="mt-4 font-sans text-lg leading-[27px] text-wedded-burgundy">
            Here&apos;s what to expect on August 15th. Everything takes place at
            Villa Cora, Florence — we&apos;ll guide you through every moment of
            the day.
          </p>
        </div>

        <div className="relative mt-16 space-y-0">
          {/* Central timeline track + continuous scroll fill */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-5 md:left-1/2 md:-translate-x-1/2">
            <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-wedded-timeline-line" />
            <div
              className="absolute top-0 bottom-0 left-1/2 w-0.5 origin-top -translate-x-1/2 rounded-full bg-wedded-rose transition-transform duration-100 ease-linear will-change-transform"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.time} {...item} image={IMAGES[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
