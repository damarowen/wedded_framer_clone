import Image from "next/image"

const ASSET = "/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

const CARDS = [
  {
    title: "For Him",
    description:
      "A tailored suit or smart shirt with dress shoes fits perfectly. Think polished, warm-weather elegance — and leave the tie at home if you'd like.",
  },
  {
    title: "For Her",
    description:
      "A flowy midi or maxi dress in warm, earthy tones would be beautiful. Think Tuscan summer — romantic, relaxed, and effortlessly chic.",
  },
]

export function DressCodeSection() {
  return (
    <section className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-sans text-base font-semibold text-wedded-burgundy">
            Details
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
            The Dress Code
          </h2>
          <p className="mt-6 font-sans text-lg leading-[27px] text-wedded-burgundy">
            The bride will be wearing white, kindly reserved for her. As this is a
            summer wedding in Florence, we&apos;d love to see you in soft, colourful
            dresses and elegant summer attire.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-wedded-border bg-white p-6"
              >
                <h3 className="font-serif text-2xl font-normal text-wedded-burgundy">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-lg leading-[27px] text-wedded-burgundy">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[2/3] overflow-hidden rounded-2xl">
          <Image
            src={`${ASSET}/couple.jpg`}
            alt="Couple laughing together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
