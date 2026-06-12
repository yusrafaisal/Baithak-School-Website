import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurStoryHero from "@/components/OurStoryHero";
import FoundersMessage from "@/components/FoundersMessage";
import Roadmap from "@/components/Roadmap";

export const metadata = {
  title: "Our Story | Baithak School Network",
  description: "Learn how Baithak School Network began in 1996 and has grown to 150+ schools across Pakistan.",
};

export default function OurStoryPage() {
  return (
    <main>
      <Navbar />
      <OurStoryHero />
      <FoundersMessage />
      <Roadmap />
      <Footer />
    </main>
  );
}
