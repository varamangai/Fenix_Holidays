import {
  About,
  BrandIntro,
  Contact,
  FeaturedPackages,
  Footer,
  Gallery,
  Hero,
  InstagramButton,
  Navbar,
  PopularDestinations,
  QuickHighlights,
  Reviews,
  WhatsAppButton,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <QuickHighlights />
        <About />
        <PopularDestinations />
        <FeaturedPackages />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <InstagramButton />
      <WhatsAppButton />
    </>
  );
}
