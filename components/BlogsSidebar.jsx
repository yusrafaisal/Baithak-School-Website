"use client";
import { useState } from "react";

/* ── Blog data ─────────────────────────────────── */
const allPosts = [
  {
    id: 1,
    category: "Blogs",
    img: "/images/blog-teachers.jpg",
    title: "Teachers Who Inspire – The Heart of Baithak",
    date: "2026-03-09",
    excerpt: "Karachi, 9th November 2025 — The stage is set, the lights are on, and the voices of change are ready to sing again...",
    href: "https://sewpak.com/teachers-who-inspire-the-heart-of-baithak/",
  },
  {
    id: 2,
    category: "Blogs",
    img: "/images/blog-classroom.jpg",
    title: "The Power of a Classroom: Transfor.....",
    date: "2026-03-05",
    excerpt: "The Power of a Classroom: Transforming Lives One Child at a Time. At the heart of every Baithak School lies...",
    href: "https://sewpak.com/the-power-of-a-classroom-transforming-lives-one-child-at-a-time/",
  },
  {
    id: 3,
    category: "Blogs",
    img: "/images/blog-community.jpg",
    title: "How Baithak School Empowers Local Com...",
    date: "2026-03-05",
    excerpt: "How Baithak School Empowers Local Communities. Baithak School stands out not just as an institution of free education but as...",
    href: "https://sewpak.com/how-baithak-school-empowers-local-communities/",
  },
  {
    id: 4,
    category: "Success Stories",
    img: "/images/blog-story.jpg",
    title: "The Story Behind Baithak School – How It All Began",
    date: "2026-03-04",
    excerpt: "The Story Behind Baithak School – How It All Began In the mid-1990s, a small group of women in Karachi...",
    href: "https://sewpak.com/the-story-behind-baithak-school-how-it-all-began/",
  },
  {
    id: 5,
    category: "Blogs",
    img: "/images/blog-access.jpg",
    title: "Why Access to Education Matters: The Gap Baitha...",
    date: "2026-03-04",
    excerpt: "Why Access to Education Matters: The Gap Baithak Is Filling. Education Is the Key to Change Education is more than...",
    href: "https://sewpak.com/why-access-to-education-matters-the-gap-baithak-is-filling/",
  },
  {
    id: 6,
    category: "Success Stories",
    img: "/images/blog-hope.png",
    title: "A Story of Hope &amp; Resilience",
    date: "2023-09-13",
    excerpt: "A STORY OF HOPE AND RESILIENCE Ahmed Aftab's story is one of resilience and hope. His parents passed away in...",
    href: "https://sewpak.com/1753-2/",
  },
  {
    id: 7,
    category: "Baithak in Media",
    img: "/images/blog-software.jpeg",
    title: "Baithak introduces software to its educatio....",
    date: "2023-09-13",
    excerpt: "Baithak introduces software to its educational institutions to achieve greatness. This in-house developed soft...",
    href: "https://sewpak.com/1834-2/",
  },
  {
    id: 8,
    category: "Events",
    img: "/images/blog-attitude.jpeg",
    title: "Role of attitude in effective performance",
    date: "2023-09-13",
    excerpt: "Society for Educational Welfare organised a capacity building training program for Head office team. Topic: Ro...",
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

const categories = ["All", "Blogs", "Events", "Success Stories", "Baithak in Media", "Videos"];

/* ── Blog Card ─────────────────────────────────── */
function BlogCard({ post }) {
  return (
    <article className="bc">
      {/* Figma: image 239×174–176px */}
      <div className="bc__img-wrap">
        <img src={post.img} alt={post.title} className="bc__img" />
      </div>

      <div className="bc__body">
        {/* Title — Poppins 500 20px lh 20px #000 */}
        <h3 className="bc__title" dangerouslySetInnerHTML={{ __html: post.title }} />

        {/* Date — Poppins 400 10px lh 16px #737373 with clock icon */}
        <div className="bc__meta">
          {/* Clock SVG (Figma: 14×14px, border 1px solid #A6A6A6) */}
          <svg className="bc__clock" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#A6A6A6" strokeWidth="1"/>
            <path d="M7 4v3l2 2" stroke="#A6A6A6" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span className="bc__date">{post.date}</span>
        </div>

        {/* Excerpt — Poppins 400 12px lh 16px #737373 */}
        <p className="bc__excerpt">{post.excerpt}</p>

        {/* Read More button — Figma: 239×38px, border 2px solid #2AA76F, border-radius 4px */}
        <a href={post.href} target="_blank" rel="noopener noreferrer" className="bc__btn">
          Read More
        </a>
      </div>
    </article>
  );
}

/* ── Main Component ────────────────────────────── */
export default function BlogsSidebar() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="bs">
      <div className="bs__inner">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="bs__sidebar">

          {/* Search — Figma Frame 18 + Frame 17 */}
          <div className="bs__section-label">
            <span className="bs__section-title">Search</span>
            <div className="bs__divider" />
          </div>
          <div className="bs__search-wrap">
            <input
              type="text"
              placeholder="Type Keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bs__search-input"
            />
            {/* Figma: green search icon */}
            <svg className="bs__search-icon" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="#2AA76F" strokeWidth="2.5"/>
              <path d="M14 14l4 4" stroke="#2AA76F" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Categories — Figma Frame 19 */}
          <div className="bs__section-label" style={{ marginTop: 24 }}>
            <span className="bs__section-title">Categories</span>
            <div className="bs__divider" />
          </div>
          <ul className="bs__cats">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`bs__cat-btn ${activeCategory === cat ? "bs__cat-btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
                <div className="bs__cat-line" />
              </li>
            ))}
          </ul>

          {/* What to explore next — Figma Frame 26 */}
          <div className="bs__section-label" style={{ marginTop: 24 }}>
            <span className="bs__section-title">What to explore next</span>
            <div className="bs__divider" />
          </div>
        </aside>

        {/* ── BLOG GRID — Figma: 3 columns of 239px cards ── */}
        {/* Figma: progress bar at left:424px — replicated as sidebar right border */}
        <div className="bs__grid-wrap">
          {/* Figma: vertical progress bar Rectangle 102/103 */}
          <div className="bs__progress-track">
            <div className="bs__progress-fill" />
          </div>

          <div className="bs__grid">
            {filtered.length > 0
              ? filtered.map((post) => <BlogCard key={post.id} post={post} />)
              : <p className="bs__empty">No posts found.</p>
            }
          </div>
        </div>
      </div>

      <style>{`
        /* ─── Section ──────────────────────────────── */
        .bs {
          background: #ffffff;
          padding: 40px 0 80px;
        }
        .bs__inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          gap: 0;
          align-items: flex-start;
        }

        /* ─── Sidebar ────────────────────────────── */
        /* Figma: sidebar content starts at left:145, width 235px */
        .bs__sidebar {
          width: 260px;
          flex-shrink: 0;
          padding-right: 32px;
        }

        /* Section label group: bold title + green underline */
        /* Figma: Poppins 600 20px #737373, Vector 10: 255px 2px solid #2AA76F */
        .bs__section-label { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
        .bs__section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 41px;
          color: #737373;
        }
        .bs__divider {
          width: 100%;
          height: 2px;
          background: #2AA76F;
          border-radius: 1px;
        }

        /* Search box — Figma Frame 17: 235×35px, border 1px solid #A6A6A6, border-radius 4px */
        .bs__search-wrap {
          position: relative;
          width: 100%;
        }
        .bs__search-input {
          width: 100%;
          height: 35px;
          border: 1px solid #A6A6A6;
          border-radius: 4px;
          padding: 0 36px 0 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #737373;
          background: #fff;
          outline: none;
          box-sizing: border-box;
        }
        .bs__search-input::placeholder { color: #A6A6A6; }
        .bs__search-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        /* Category list — Figma: Poppins 500 14px #000, Vector 11: 249px 1px solid #737373 */
        .bs__cats { list-style: none; padding: 0; margin: 0; }
        .bs__cats li { display: flex; flex-direction: column; gap: 4px; margin-bottom: 4px; }
        .bs__cat-btn {
          background: none;
          border: none;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 41px;
          color: #000;
          cursor: pointer;
          padding: 0;
          transition: color 0.15s;
        }
        .bs__cat-btn:hover { color: #2AA76F; }
        .bs__cat-btn--active { color: #17469E; font-weight: 700; }
        .bs__cat-line {
          width: 100%;
          height: 1px;
          background: #737373;
          opacity: 0.4;
        }

        /* ─── Progress bar + Grid wrap ─────────────── */
        .bs__grid-wrap {
          flex: 1;
          display: flex;
          gap: 0;
          align-items: flex-start;
          min-width: 0;
        }

        /* Figma Rectangle 102: 7px wide 1177px tall #BCD0F5 with Rectangle 103 blue fill on top 346px */
        .bs__progress-track {
          width: 7px;
          background: #BCD0F5;
          border-radius: 65px;
          flex-shrink: 0;
          align-self: stretch;
          position: relative;
          margin-right: 24px;
          min-height: 400px;
        }
        .bs__progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 346px;
          background: #17469E;
          border-radius: 65px;
        }

        /* ─── Blog grid — Figma: 3 columns ~239px each, gap ~12px ── */
        .bs__grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px 12px;
          min-width: 0;
        }

        /* ─── Blog Card ─────────────────────────────── */
        /* Figma: 239×371px column: image 176px top, body below */
        .bc {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .bc__img-wrap {
          width: 100%;
          height: 176px;
          overflow: hidden;
          flex-shrink: 0;
          background: #e8eef8;
        }
        .bc__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bc__body {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 10px 0 0;
          flex: 1;
        }

        /* Figma: Poppins 500 20px lh 20px colour #000 */
        .bc__title {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #000000;
          margin: 0 0 8px;
        }

        /* Figma: clock 14px + date Poppins 400 10px #737373 */
        .bc__meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }
        .bc__clock { flex-shrink: 0; }
        .bc__date {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 10px;
          line-height: 16px;
          color: #737373;
        }

        /* Figma: Poppins 400 12px lh 16px #737373 */
        .bc__excerpt {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #737373;
          margin: 0 0 12px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Figma Frame 30: 239×38px, border 2px solid #2AA76F, border-radius 4px */
        /* "Read More" Poppins 500 16px #2AA76F centred */
        .bc__btn {
          display: block;
          width: 100%;
          height: 38px;
          border: 2px solid #2AA76F;
          border-radius: 4px;
          background: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 36px;
          color: #2AA76F;
          text-align: center;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          margin-top: auto;
          box-sizing: border-box;
        }
        .bc__btn:hover { background: #2AA76F; color: #fff; }

        .bs__empty {
          grid-column: 1 / -1;
          color: #737373;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          padding: 40px 0;
          text-align: center;
        }

        /* ─── Responsive ─────────────────────────── */
        @media (max-width: 1024px) {
          .bs__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .bs__inner { flex-direction: column; }
          .bs__sidebar { width: 100%; padding-right: 0; margin-bottom: 32px; }
          .bs__progress-track { display: none; }
          .bs__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .bs__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
