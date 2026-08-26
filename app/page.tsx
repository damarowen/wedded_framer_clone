import { Navigation } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/Navigation"
import { HeroSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/HeroSection"
import { SaveTheDateSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/SaveTheDateSection"
import { OurStorySection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/OurStorySection"
import { LocationSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/LocationSection"
import { TravelSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/TravelSection"
import { HotelsSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/HotelsSection"
import { PreGatheringSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/PreGatheringSection"
import { TheDaySection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/TheDaySection"
import { WeddingGiftsSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/WeddingGiftsSection"
import { DressCodeSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/DressCodeSection"
import { RSVPSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/RSVPSection"
import { FAQSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/FAQSection"
import { FooterSection } from "@/components/sites/wedded-framer-website-6500aaa5/root-8a5edab2/FooterSection"
import { SmoothScroll } from "@/components/sites/wedded-framer-website-6500aaa5/shared/SmoothScroll"

export default function Page() {
  return (
    <main className="bg-wedded-bg font-sans text-black">
      <SmoothScroll />
      <Navigation />
      <HeroSection />
      <SaveTheDateSection />
      <OurStorySection />
      <LocationSection />
      <TravelSection />
      <HotelsSection />
      <PreGatheringSection />
      <TheDaySection />
      <WeddingGiftsSection />
      <DressCodeSection />
      <RSVPSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
