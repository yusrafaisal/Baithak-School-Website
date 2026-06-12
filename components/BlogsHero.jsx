export default function BlogsHero() {
  return (
    <section className="bh">
      {/* Figma: Inter 700 48px "Blogs & Events" centred, top ~204px on 1512px canvas */}
      <h1 className="bh__title">Blogs &amp; Events</h1>

      <style>{`
        .bh {
          background: #ffffff;
          padding: 60px 24px 0;
          text-align: center;
        }
        .bh__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 77px;
          color: #282727;
          margin: 0;
        }
        @media (max-width: 768px) {
          .bh__title { font-size: 32px; line-height: 1.3; }
          .bh { padding: 40px 16px 0; }
        }
      `}</style>
    </section>
  );
}
