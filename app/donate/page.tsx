// page.tsx  (donation page)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationHero from "@/components/DonationHero";
import DonationImpact from "@/components/DonationImpact";
import DonationSupportCards from "@/components/DonationSupportCards";
import DonationContribute from "@/components/DonationContribute";

export const metadata = {
    title: "Donate | Baithak School Network",
    description:
        "Support Baithak School Network and help bring quality education to Pakistan's most underserved communities.",
};

export default function DonationPage() {
    return (
        <main>
            <Navbar />
            <DonationHero />
            <DonationImpact />
            <DonationSupportCards />
            <DonationContribute />
            <Footer />
        </main>
    );
}