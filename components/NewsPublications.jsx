export default function NewsPublications() {
  return (
    <section className="np">
      {/* Figma: "News & Publications" Inter 700 48px white centred */}
      <h2 className="np__heading">News &amp; Publications</h2>

      {/*
        Figma Group 43 / Mask group:
        - Outer card: white, border-radius 30px, ~910×472px centred
        - Left: circular-cropped child photo bleeds out of card left edge
        - Right: title Inter 700 30px, body Inter 500 16.7px lh 34px,
                 yellow CTA button "Take me there" Inter 600 20px
        Rectangle 104: linear-gradient(180deg, #17469E 0%, #0F295A 100%)
      */}
      <div className="np__card-wrap">
        <div className="np__card">
          {/* Left: child photo in circle mask */}
          <div className="np__photo-mask">
            <img
              src="/images/annual-report-child.jpg"
              alt="Annual Report 2026"
              className="np__photo"
            />
          </div>

          {/* Right: text + button */}
          <div className="np__text">
            <h3 className="np__title">Our 2026 Annual Report is out now!</h3>
            <p className="np__desc">
              Discover how, together with our global partners, we are reshaping
              what's possible for children in Pakistan.
            </p>
            {/*
              "Take me there" opens the PDF embedded in /annual-report
              Clicking opens the embedded PDF viewer page
            */}
            <a href="/annual-report" className="np__cta">Take me there</a>
          </div>
        </div>
      </div>

      <style>{`
        /* ─── Section ─────────────────────────────────── */
        /* Figma Rectangle 104: 1512×856px linear-gradient #17469E → #0F295A */
        .np {
          background: linear-gradient(180deg, #17469E 0%, #0F295A 100%);
          padding: 80px 24px 100px;
        }

        /* Figma: Inter 700 48px lh 77px white centred */
        .np__heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 77px;
          text-align: center;
          color: #ffffff;
          margin: 0 0 60px;
        }

        /* Card container — centred, max ~910px */
        .np__card-wrap {
          max-width: 910px;
          margin: 0 auto;
        }

        /*
          Figma: Rectangle 88 white, border-radius 30px, 909×472px.
          Photo (Ellipse 4) bleeds left out of the card as a large circle.
          We use overflow: visible + negative left margin on the photo.
        */
        .np__card {
          background: #ffffff;
          border-radius: 30px;
          display: flex;
          align-items: center;
          min-height: 472px;
          position: relative;
          overflow: visible;
          padding: 40px 48px 40px 0;
        }

        /* Figma Ellipse 4: 706×732px circle photo, positioned to bleed
           out of the left edge of the card.
           left: 294.61 on 1512px canvas, card left: 310px
           → photo left edge is ~16px before card. We use negative margin. */
        .np__photo-mask {
          width: 380px;
          height: 400px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          margin-left: -80px;   /* bleeds left out of card */
          position: relative;
          z-index: 2;
        }
        .np__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* Right text block */
        .np__text {
          flex: 1;
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        /* Figma: Inter 700 30px lh 41px #000 */
        .np__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 30px;
          line-height: 41px;
          color: #000000;
          margin: 0;
        }

        /* Figma: Inter 500 16.7px lh 34px #000 */
        .np__desc {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 17px;
          line-height: 34px;
          color: #000000;
          margin: 0;
          max-width: 340px;
        }

        /* Figma Frame 4: #FFB600, border-radius 12.5px, padding 15px,
           "Take me there" Inter 600 20px #000 centred */
        .np__cta {
          display: inline-block;
          background: #FFB600;
          color: #000000;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 1;
          padding: 15px 28px;
          border-radius: 13px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .np__cta:hover { opacity: 0.88; }

        /* ─── Responsive ───────────────────────────── */
        @media (max-width: 860px) {
          .np__card {
            flex-direction: column;
            align-items: center;
            padding: 40px 32px;
            overflow: hidden;
          }
          .np__photo-mask {
            width: 260px;
            height: 260px;
            margin-left: 0;
            margin-bottom: 28px;
          }
          .np__text { padding-left: 0; align-items: center; text-align: center; }
          .np__desc { max-width: 100%; }
          .np__heading { font-size: 34px; line-height: 1.3; }
        }
        @media (max-width: 540px) {
          .np { padding: 60px 16px 80px; }
          .np__heading { font-size: 26px; }
          .np__title { font-size: 22px; line-height: 1.3; }
          .np__desc { font-size: 15px; line-height: 1.7; }
          .np__cta { font-size: 16px; padding: 12px 22px; }
          .np__photo-mask { width: 200px; height: 200px; }
        }
      `}</style>
    </section>
  );
}
