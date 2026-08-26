"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/useInView"
import { FlipIcon } from "./icons"

const ASSET = "/wedded_framer_clone/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

type Story = {
  title: string
  date: string
  description: string
  image: string
}

const STORIES: Story[] = [
  {
    title: "The First Hello",
    date: "Sep 21, 2023",
    description:
      "A mutual friend, a crowded evening in Florence, and two people who had no idea their lives were about to change forever.",
    image: `${ASSET}/story-1.jpg`,
  },
  {
    title: "Ace",
    date: "Oct 8, 2023",
    description:
      'They went to the shelter to "just have a look". They came home with Ace. Neither of them regrets it for a single second.',
    image: `${ASSET}/story-2.jpg`,
  },
  {
    title: "First Christmas Together",
    date: "Dec 24, 2023",
    description:
      "He showed up with terrible wrapping and the most thoughtful gift she'd ever received. She knew then that she was in trouble.",
    image: `${ASSET}/story-3.jpg`,
  },
  {
    title: "The Trip to Cinque Terre",
    date: "Apr 15, 2024",
    description:
      "Four days, one tiny rented car, and the moment they both realised this was the person they wanted every adventure with.",
    image: `${ASSET}/story-4.jpg`,
  },
  {
    title: "Moving In Together",
    date: "Aug 3, 2024",
    description:
      "He had more books than shelves. She had more plants than windowsills. Somehow it all fit perfectly.",
    image: `${ASSET}/story-5.jpg`,
  },
  {
    title: "The Proposal",
    date: "Feb 14, 2025",
    description:
      "He had been planning it for three months. She had absolutely no idea. The answer was yes before he finished the question.",
    image: `${ASSET}/story-6.jpg`,
  },
]

function StoryCard({ story, index }: { story: Story; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true })
  const rotation = index % 2 === 0 ? -8 : 8

  return (
    <div
      ref={ref}
      className={`md:sticky md:top-0 md:h-[684px] flex items-center justify-center md:justify-start md:pl-[260px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className="relative h-[280px] w-[200px] md:h-[367px] md:w-[260px]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[280px] w-[220px] -translate-x-1/2 -translate-y-1/2 md:h-[400px] md:w-[308px]"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                boxShadow:
                  "rgba(81, 58, 19, 0.2) 0px 5.84px 15.18px 0px, rgba(36, 22, 7, 0.13) 0px 1px 4px 0px",
              }}
            >
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 200px, 260px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 p-4 text-center">
                <p className="font-sans text-base font-semibold text-wedded-burgundy">
                  {story.title}
                </p>
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="flex items-center gap-1 font-sans text-xs text-wedded-burgundy transition-opacity hover:opacity-70"
                >
                  <span>{story.date}</span>
                  <FlipIcon className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-wedded-border bg-white p-6 md:p-8"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="font-sans text-xs text-wedded-burgundy">{story.date}</p>
              <h3 className="mt-3 font-serif text-[28px] font-normal leading-[33.6px] text-wedded-burgundy md:text-[32px] md:leading-[38.4px]">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-[21px] text-wedded-burgundy">
                {story.description}
              </p>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="mt-6 flex items-center gap-1 self-start font-sans text-xs text-wedded-burgundy transition-opacity hover:opacity-70"
              >
                <FlipIcon className="h-3 w-3" />
                <span>FLIP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OurStorySection() {
  return (
    <section id="story" className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        {/* Header — appears first on mobile, right column on desktop */}
        <div className="lg:order-2 lg:sticky lg:top-0 lg:flex lg:h-[684px] lg:flex-col lg:justify-center">
          <h2 className="font-serif text-4xl font-normal leading-[1.2] tracking-[-0.03em] text-wedded-burgundy md:text-[56px]">
            Our Story
          </h2>
          <p
            className="mt-4 text-2xl leading-[33.6px] text-wedded-pink md:mt-6"
            style={{ fontFamily: "var(--font-handrawn)", letterSpacing: "0.02em" }}
          >
            How it began · 2023.09.21
          </p>
          <h3 className="mt-6 font-serif text-[32px] font-normal leading-[38.4px] text-wedded-burgundy">
            Meeting the right person at exactly the right time.
          </h3>
          <p className="mt-6 max-w-[500px] font-sans text-lg leading-[27px] text-wedded-burgundy">
            Sometimes the most beautiful stories begin quietly — two people, one
            city, and a shared moment that changed everything.
          </p>
        </div>

        {/* Timeline cards — left column on desktop */}
        <div className="lg:order-1">
          {STORIES.map((story, i) => (
            <StoryCard key={story.title} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
