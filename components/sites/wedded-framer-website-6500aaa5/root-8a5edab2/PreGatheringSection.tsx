import Image from "next/image"

const ASSET = "/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

const DETAILS = [
  { label: "Date:", value: "Friday, 14 August 2026" },
  { label: "Time:", value: "7:00 PM – 11:00 PM" },
  { label: "Location:", value: "Villa Cora, Florence" },
]

export function PreGatheringSection() {
  return (
    <section className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src={`${ASSET}/pre-gathering.jpg`}
            alt="Outdoor wedding setup"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-sans text-base font-semibold text-wedded-burgundy">
            Pre-Gathering
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
            Pre-Wedding Gathering
          </h2>
          <p className="mt-6 font-sans text-lg leading-[27px] text-wedded-burgundy">
            The evening before the wedding, we&apos;d love to welcome you to a
            relaxed garden dinner — a chance to settle in, catch up, and celebrate
            together before the big day.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {DETAILS.map((detail) => (
              <div key={detail.label}>
                <h4 className="font-serif text-2xl font-normal leading-[33.6px] text-wedded-burgundy">
                  {detail.label}
                </h4>
                <p className="mt-2 font-sans text-base leading-6 text-wedded-burgundy">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
