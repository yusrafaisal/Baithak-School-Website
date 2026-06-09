import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credibility from "@/components/Credibility";
import SunoMeriKahani from "@/components/SunoMeriKahani";
import DonationInAction from "@/components/DonationInAction";
import BridgingGap from "@/components/BridgingGap";
import YourSupport from "@/components/YourSupport";
import ImpactSection from "@/components/ImpactSection";
import TransformBanner from "@/components/TransformBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Credibility />
      <SunoMeriKahani />
      <DonationInAction />
      <BridgingGap />
      <YourSupport />
      <ImpactSection />
      <TransformBanner />
      <Footer />
    </main>
  );
}