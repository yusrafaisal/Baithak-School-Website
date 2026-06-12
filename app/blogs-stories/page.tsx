import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogsHero from "@/components/BlogsHero";
import BlogsSidebar from "@/components/BlogsSidebar";
import NewsPublications from "@/components/NewsPublications";
import PreviousReports from "@/components/PreviousReports";

export const metadata = {
  title: "Blogs & Stories | Baithak School Network",
  description: "Read the latest blogs, events, success stories and news from Baithak School Network.",
};

export default function BlogsStoriesPage() {
  return (
    <main>
      <Navbar />
      <BlogsHero />
      <BlogsSidebar />
      <NewsPublications />
      <PreviousReports />
      <Footer />
    </main>
  );
}
