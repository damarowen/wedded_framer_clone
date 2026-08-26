import Image from "next/image"

const ASSET = "/wedded_framer_clone/sites/wedded-framer-website-6500aaa5/root-8a5edab2/images"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-stretch overflow-hidden">
      <Image
        src={`${ASSET}/hero.jpg`}
        alt="Wedding couple in Florence"
        fill
        priority
        className="absolute inset-0 z-0 object-cover"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(rgba(62, 64, 52, 0) 59%, rgba(30, 31, 25, 0.4) 100%)",
        }}
      />
      <div className="relative z-[2] flex w-full flex-col justify-end px-6 pb-[60px] md:px-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2.5">
            <h4
              className="font-serif text-xl font-normal text-white md:text-2xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.4 }}
            >
              We&apos;re getting married
            </h4>
            <h4
              className="font-serif text-xl font-normal text-white md:text-2xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.4 }}
            >
              Saturday, 15.08.2026, Florence
            </h4>
          </div>
          <h1
            className="mt-4 whitespace-nowrap font-serif font-normal text-wedded-bg"
            style={{
              fontSize: "clamp(60px, 16vw, 208px)",
              lineHeight: 1.2,
            }}
          >
            Sophie &amp; Matteo
          </h1>
        </div>
      </div>
    </section>
  )
}
