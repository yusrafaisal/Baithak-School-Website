// import { notFound } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import clientPromise from "@/lib/mongodb";

// interface NewsStory {
//   id: number;
//   category: string;
//   img: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   content?: string;
//   isPublished?: boolean;
//   isArchived?: boolean;
// }

// async function getStory(id: string): Promise<NewsStory | null> {
//   const numericId = Number(id);
//   if (isNaN(numericId)) return null;

//   const client = await clientPromise;
//   const db = client.db("baithak");
//   const collection = db.collection("news_stories");

//   const story = await collection.findOne(
//     { id: numericId, isPublished: true, isArchived: false },
//     { projection: { _id: 0 } }
//   );

//   if (!story) return null;
//   return JSON.parse(JSON.stringify(story));
// }

// export default async function BlogStoryPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const post = await getStory(id);

//   if (!post) {
//     notFound();
//   }

//   const hasFullContent = Boolean(post.content && post.content.trim());

//   return (
//     <main>
//       <Navbar />

//       <article className="bp">
//         <div className="bp__inner">
//           <span className="bp__category">{post.category}</span>

//           <h1 className="bp__title" dangerouslySetInnerHTML={{ __html: post.title }} />

//           <div className="bp__meta">
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="7" cy="7" r="6" stroke="#A6A6A6" strokeWidth="1" />
//               <path d="M7 4v3l2 2" stroke="#A6A6A6" strokeWidth="1" strokeLinecap="round" />
//             </svg>
//             <span className="bp__date">{post.date}</span>
//           </div>

//           {post.img && (
//             <div className="bp__img-wrap">
//               <img src={post.img} alt={post.title} className="bp__img" />
//             </div>
//           )}

//           <div className="bp__body">
//             {hasFullContent ? (
//               <div dangerouslySetInnerHTML={{ __html: post.content! }} />
//             ) : (
//               <p>{post.excerpt}</p>
//             )}
//           </div>

//           <a href="/blogs-stories" className="bp__back">
//             ← Back to Blogs &amp; Events
//           </a>
//         </div>

//         <style>{`
//           .bp {
//             background: #ffffff;
//             padding: 60px 24px 80px;
//           }
//           .bp__inner {
//             max-width: 760px;
//             margin: 0 auto;
//           }
//           .bp__category {
//             display: inline-block;
//             font-family: 'Poppins', sans-serif;
//             font-weight: 600;
//             font-size: 12px;
//             letter-spacing: 0.04em;
//             text-transform: uppercase;
//             color: #2AA76F;
//             margin-bottom: 12px;
//           }
//           .bp__title {
//             font-family: 'Inter', sans-serif;
//             font-weight: 700;
//             font-size: 36px;
//             line-height: 1.25;
//             color: #282727;
//             margin: 0 0 16px;
//           }
//           .bp__meta {
//             display: flex;
//             align-items: center;
//             gap: 6px;
//             margin-bottom: 24px;
//           }
//           .bp__date {
//             font-family: 'Poppins', sans-serif;
//             font-weight: 400;
//             font-size: 13px;
//             color: #737373;
//           }
//           .bp__img-wrap {
//             width: 100%;
//             border-radius: 8px;
//             overflow: hidden;
//             margin-bottom: 32px;
//             background: #e8eef8;
//           }
//           .bp__img {
//             width: 100%;
//             height: auto;
//             display: block;
//           }
//           .bp__body {
//             font-family: 'Poppins', sans-serif;
//             font-weight: 400;
//             font-size: 16px;
//             line-height: 1.7;
//             color: #333333;
//           }
//           .bp__body p {
//             margin: 0 0 20px;
//           }
//           .bp__body h2, .bp__body h3 {
//             font-family: 'Inter', sans-serif;
//             font-weight: 700;
//             color: #282727;
//             margin: 32px 0 16px;
//           }
//           .bp__body img {
//             width: 100%;
//             height: auto;
//             border-radius: 8px;
//             margin: 24px 0;
//             display: block;
//           }
//           .bp__body ul, .bp__body ol {
//             margin: 0 0 20px;
//             padding-left: 24px;
//           }
//           .bp__body a {
//             color: #2AA76F;
//           }
//           .bp__back {
//             display: inline-block;
//             margin-top: 40px;
//             font-family: 'Poppins', sans-serif;
//             font-weight: 500;
//             font-size: 14px;
//             color: #2AA76F;
//             text-decoration: none;
//           }
//           .bp__back:hover { text-decoration: underline; }

//           @media (max-width: 768px) {
//             .bp__title { font-size: 26px; }
//             .bp { padding: 40px 16px 60px; }
//           }
//         `}</style>
//       </article>

//       <Footer />
//     </main>
//   );
// }



import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryContent from "@/components/StoryContent";
import clientPromise from "@/lib/mongodb";

interface NewsStory {
  id: number;
  category: string;
  img: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  isPublished?: boolean;
  isArchived?: boolean;
}

async function getStory(id: string): Promise<NewsStory | null> {
  const numericId = Number(id);
  if (isNaN(numericId)) return null;

  const client = await clientPromise;
  const db = client.db("baithak");
  const collection = db.collection("news_stories");

  const story = await collection.findOne(
    { id: numericId, isPublished: true, isArchived: false },
    { projection: { _id: 0 } }
  );

  if (!story) return null;
  return JSON.parse(JSON.stringify(story));
}

export default async function BlogStoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getStory(id);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article className="bp">
        <div className="bp__inner">
          <span className="bp__category">{post.category}</span>

          <h1 className="bp__title">{post.title}</h1>

          <div className="bp__meta">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6" stroke="#A6A6A6" strokeWidth="1" />
              <path d="M7 4v3l2 2" stroke="#A6A6A6" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="bp__date">{post.date}</span>
          </div>

          {post.img && (
            <div className="bp__img-wrap">
              <img src={post.img} alt={post.title} className="bp__img" />
            </div>
          )}

          <div className="bp__body">
            <StoryContent content={post.content} excerpt={post.excerpt} />
          </div>

          <a href="/blogs-stories" className="bp__back">
            ← Back to Blogs &amp; Events
          </a>
        </div>

        <style>{`
          .bp {
            background: #ffffff;
            padding: 60px 24px 80px;
          }
          .bp__inner {
            max-width: 760px;
            margin: 0 auto;
          }
          .bp__category {
            display: inline-block;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #2AA76F;
            margin-bottom: 12px;
          }
          .bp__title {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 36px;
            line-height: 1.25;
            color: #282727;
            margin: 0 0 16px;
          }
          .bp__meta {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 24px;
          }
          .bp__date {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 13px;
            color: #737373;
          }
          .bp__img-wrap {
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 32px;
            background: #e8eef8;
          }
          .bp__img {
            width: 100%;
            height: auto;
            display: block;
          }
          .bp__body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.7;
            color: #333333;
          }
          .bp__body p {
            margin: 0 0 20px;
          }
          .bp__body h2, .bp__body h3 {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            color: #282727;
            margin: 32px 0 16px;
          }
          .bp__body img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 24px 0;
            display: block;
          }
          .bp__body ul, .bp__body ol {
            margin: 0 0 20px;
            padding-left: 24px;
          }
          .bp__body a {
            color: #2AA76F;
          }
          .bp__back {
            display: inline-block;
            margin-top: 40px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
            color: #2AA76F;
            text-decoration: none;
          }
          .bp__back:hover { text-decoration: underline; }

          @media (max-width: 768px) {
            .bp__title { font-size: 26px; }
            .bp { padding: 40px 16px 60px; }
          }
        `}</style>
      </article>

      <Footer />
    </main>
  );
}
