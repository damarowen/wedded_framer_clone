import Image from "next/image"

const ASSET = "/wedded_framer_clone/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

const HOTELS = [
  {
    title: "Local Agriturismos",
    description:
      "For a true Tuscan experience, we recommend the farmhouse stays around Fiesole — just a short drive from Villa Cora.",
    image: `${ASSET}/hotel-1.jpg`,
  },
  {
    title: "Hotel Davanzati",
    description:
      "Charming 4-star in the historic centre. A 10-minute taxi ride from the villa. Mention our wedding for preferred rates.",
    image: `${ASSET}/hotel-2.jpg`,
  },
  {
    title: "Four Seasons Florence",
    description:
      "5-star · 5 min from Villa Cora. Use code SOPHIE26 for a 15% discount on rooms. Highly recommended.",
    image: `${ASSET}/hotel-3.jpg`,
  },
]

export function HotelsSection() {
  return (
    <section id="hotels" className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-base font-semibold text-wedded-burgundy">
          Hotels
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
          Where to sleep, rest, and recover after the party
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HOTELS.map((hotel) => (
            <div
              key={hotel.title}
              className="overflow-hidden rounded-2xl border border-wedded-border bg-white"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-wedded-burgundy">
                  {hotel.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-6 text-wedded-burgundy">
                  {hotel.description}
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-wedded-rose pb-0.5 font-sans text-sm font-medium text-wedded-rose transition-opacity hover:opacity-75"
                >
                  Find on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
