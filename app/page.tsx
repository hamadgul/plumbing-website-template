import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <Reviews />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
