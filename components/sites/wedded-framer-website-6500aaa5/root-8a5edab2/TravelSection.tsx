const TRAVEL_CARDS = [
  {
    title: "By Air",
    description:
      "Florence Peretola Airport (FLR) is the nearest airport, just 20 minutes from Villa Cora. Alternatively, fly into Pisa (PSA) and take a train or transfer.",
  },
  {
    title: "By Shuttle",
    description:
      "We've arranged complimentary shuttles from central Florence hotels at 2:30 PM, returning at midnight and 2:00 AM. Please note your hotel name on your RSVP.",
  },
  {
    title: "By Car",
    description:
      "Parking is available on-site at Villa Cora. GPS: Viale Machiavelli 18, Florence. Please don't drink and drive — taxis and shuttles are available all evening.",
  },
]

export function TravelSection() {
  return (
    <section className="bg-wedded-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-base font-semibold text-wedded-burgundy">
          Getting Here
        </p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.2] text-wedded-burgundy md:text-[56px]">
          Travel &amp; Transportation
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TRAVEL_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-wedded-border bg-white p-8"
            >
              <h3 className="font-serif text-[28px] font-normal text-wedded-burgundy">
                {card.title}
              </h3>
              <p className="mt-4 font-sans text-base leading-6 text-wedded-burgundy">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
