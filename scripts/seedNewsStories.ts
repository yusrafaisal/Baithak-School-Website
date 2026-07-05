import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import clientPromise from "../lib/mongodb";

interface NewsStory {
  id: number;
  category: string;
  img: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

const allPosts: NewsStory[] = [
  {
    id: 1,
    category: "Blogs",
    img: "/images/blog-teachers.jpg",
    title: "Teachers Who Inspire – The Heart of Baithak",
    date: "2026-03-09",
    excerpt:
      "Karachi, 9th November 2025 — The stage is set, the lights are on, and the voices of change are ready to sing again...",
    href: "https://sewpak.com/teachers-who-inspire-the-heart-of-baithak/",
  },
  {
    id: 2,
    category: "Blogs",
    img: "/images/blog-classroom.jpg",
    title: "The Power of a Classroom: Transforming Lives One Child at a Time",
    date: "2026-03-05",
    excerpt:
      "The Power of a Classroom: Transforming Lives One Child at a Time. At the heart of every Baithak School lies...",
    href: "https://sewpak.com/the-power-of-a-classroom-transforming-lives-one-child-at-a-time/",
  },
  {
    id: 3,
    category: "Blogs",
    img: "/images/blog-community.jpg",
    title: "How Baithak School Empowers Local Communities",
    date: "2026-03-05",
    excerpt:
      "How Baithak School Empowers Local Communities. Baithak School stands out not just as an institution of free education but as...",
    href: "https://sewpak.com/how-baithak-school-empowers-local-communities/",
  },
  {
    id: 4,
    category: "Success Stories",
    img: "/images/blog-story.jpg",
    title: "The Story Behind Baithak School – How It All Began",
    date: "2026-03-04",
    excerpt:
      "The Story Behind Baithak School – How It All Began In the mid-1990s, a small group of women in Karachi...",
    href: "https://sewpak.com/the-story-behind-baithak-school-how-it-all-began/",
  },
  {
    id: 5,
    category: "Blogs",
    img: "/images/blog-access.jpg",
    title: "Why Access to Education Matters: The Gap Baithak Is Filling",
    date: "2026-03-04",
    excerpt:
      "Why Access to Education Matters: The Gap Baithak Is Filling. Education Is the Key to Change Education is more than...",
    href: "https://sewpak.com/why-access-to-education-matters-the-gap-baithak-is-filling/",
  },
  {
    id: 6,
    category: "Success Stories",
    img: "/images/blog-hope.png",
    title: "A Story of Hope & Resilience",
    date: "2023-09-13",
    excerpt:
      "A STORY OF HOPE AND RESILIENCE Ahmed Aftab's story is one of resilience and hope. His parents passed away in...",
    href: "https://sewpak.com/1753-2/",
  },
  {
    id: 7,
    category: "Baithak in Media",
    img: "/images/blog-software.jpeg",
    title: "Baithak introduces software to its educational institutions",
    date: "2023-09-13",
    excerpt:
      "Baithak introduces software to its educational institutions to achieve greatness. This in-house developed software...",
    href: "https://sewpak.com/1834-2/",
  },
  {
    id: 8,
    category: "Events",
    img: "/images/blog-attitude.jpeg",
    title: "Role of attitude in effective performance",
    date: "2023-09-13",
    excerpt:
      "Society for Educational Welfare organised a capacity building training program for Head office team. Topic: Role of attitude...",
    href: "https://sewpak.com/1838-2/",
  },
  {
    id: 9,
    category: "Events",
    img: "/images/blog-independence.jpg",
    title: "Independence day Celebration",
    date: "2023-09-13",
    excerpt: "Independence Day was celebrated across all campuses of Baithak School.",
    href: "https://sewpak.com/2492-2/",
  },
];

async function seedNewsStories() {
  const client = await clientPromise;

  try {
    const db = client.db("baithak");
    const collection = db.collection<NewsStory>("news_stories");

    // Drop the collection if it already exists, so the script is idempotent
    const existingCollections = await db
      .listCollections({ name: "news_stories" })
      .toArray();

    if (existingCollections.length > 0) {
      await collection.drop();
      console.log('Dropped existing "news_stories" collection.');
    }

    await collection.insertMany(allPosts);

    allPosts.forEach((post) => {
      console.log(`Inserted: "${post.title}"`);
    });

    console.log(`Successfully inserted ${allPosts.length} news stories.`);
  } catch (error) {
    console.error("Error seeding news stories:", error);
    process.exitCode = 1;
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

seedNewsStories();