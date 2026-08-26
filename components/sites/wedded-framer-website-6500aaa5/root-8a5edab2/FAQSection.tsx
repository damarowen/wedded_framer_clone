"use client"

import { useState } from "react"
import { ChevronDownIcon } from "../shared/icons"

const FAQS = [
  {
    question: "Can I bring a plus one?",
    answer:
      "If your invitation says plus one, absolutely! If you're unsure, just reach out to Sophie directly and she'll be happy to clarify.",
  },
  {
    question: "Are kids welcome?",
    answer:
      "We adore your little ones, but this will be an adults-only evening. Take the night off and celebrate with us!",
  },
  {
    question: "What should I wear?",
    answer:
      "Summer formal — think elegant and festive. We'll be outdoors at times so flat or block-heel shoes are a smart choice on Villa Cora's grounds.",
  },
  {
    question: "Will there be vegetarian or vegan options?",
    answer:
      "Absolutely. Just note your dietary preferences in the RSVP form and we'll make sure you're well taken care of.",
  },
  {
    question: "Can I give a speech?",
    answer:
      "We'd love that! Please let our toastmaster know in advance — details will come closer to the date by email.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-sans text-base font-semibold text-wedded-burgundy">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
            Questions &amp; Answers
          </h2>
          <p className="mt-6 max-w-md font-sans text-lg leading-[27px] text-wedded-burgundy">
            We&apos;ve answered a few common questions to help you prepare for the
            day and enjoy the celebration with ease.
          </p>
        </div>
        <div>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.question} className="border-b border-wedded-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-sans text-lg leading-[27px] text-wedded-burgundy">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-wedded-burgundy transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <p className="pb-6 font-sans text-lg leading-[27px] text-wedded-burgundy">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
