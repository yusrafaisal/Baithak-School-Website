// page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/ProgramsHero";
import ProgramsCards from "@/components/ProgramsCards";
import EducationalPrograms from "@/components/EducationalPrograms";
import ProgramSection from "@/components/ProgramSection";

export const metadata = {
  title: "Programs | Baithak School Network",
  description:
    "Explore the programs that Baithak School Network runs across Pakistan.",
};

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />
      <ProgramsHero />
      <ProgramsCards />
      <EducationalPrograms />

      {/* Friends with Books */}
      <ProgramSection
        id="friends-with-books"
        title="Friends with Books"
        description="Inculcation of reading habits in students is SEW's top priority. In order to achieve this objective libraries are being set up as priority project in nearly all of our schools."
        imageLeft={true}
        circleImage="/images/program-friends2.png"
        descFontSize="19.85px"
      />

      {/* Health & Hygiene */}
      <ProgramSection
        id="health-hygiene"
        title="Health& Hygiene"
        description="Health and hygiene are challenges at surrounding of Baithak Schools. Awareness about diseases, preventive measures and medical checkups are built in school activities."
        imageLeft={false}
        circleImage="/images/program-hygiene2.png"
        descFontSize="19.85px"
      />

      {/* Student Volunteers */}
      <ProgramSection
        id="student-volunteers"
        title="Student Volunteers"
        description="Inculcation of reading habits in students is SEW's top priority. In order to achieve this objective libraries are being set up as priority project in nearly all of our schools. In this session we teamed up with GoRead.pk and held story telling sessions for our students."
        imageLeft={true}
        circleImage="/images/program-volunteer2.png"
        descFontSize="15.88px"
      />

      <Footer />
    </main>
  );
}