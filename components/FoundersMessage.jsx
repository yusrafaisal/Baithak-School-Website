export default function FoundersMessage() {
  return (
    <>
      <section className="fm">
        {/* White curved wave peeling up from the hero photo into the white section */}
        <div className="fm__top-wave">
          <svg viewBox="0 0 1512 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,160 C378,0 1134,0 1512,160 L1512,160 L0,160 Z" fill="#ffffff"/>
          </svg>
        </div>

        <div className="fm__body">
          {/* Figma: "Founder's Message" Inter 700 48px, centred, colour #000 */}
          <h2 className="fm__title">Founder's Message</h2>

          {/*
            Figma: Rectangle 151 — #EBEBEB bg, box-shadow 0 4px 4px rgba(0,0,0,.25),
            border-radius 40px, 1121×552px centred on page.
            Inner photo: 413×438px, border-radius 40px, left:247 top:1204
            Inner text block: 588px wide, Inter 600 32px lh 40px, left:696
          */}
          <div className="fm__card">
            <div className="fm__photo-wrap">
              <img
                src="/images/ayesha-baji2.jpg"
                alt="Founder of Baithak School Network"
                className="fm__photo"
              />
            </div>

            <div className="fm__quote">
              <p className="fm__text">
                Dear Supporters,<br /><br />
                "Baithak was founded on a simple belief — every child deserves
                access to quality education, regardless of where they are born.
                By working closely with communities, teachers, and families, we
                create learning spaces that nurture academic growth and character"
              </p>
            </div>
          </div>
        </div>

        {/* Blue wave transitioning into Roadmap section */}
        <div className="fm__bottom-wave">
          <svg viewBox="0 0 1512 162" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C378,162 1134,162 1512,0 L1512,162 L0,162 Z" fill="#17469E"/>
          </svg>
        </div>
      </section>

      <style>{`
        /* ─── Section ─────────────────────────────────────── */
        .fm {
          background: #ffffff;
          position: relative;
          padding-bottom: 0;
        }

        /* White top wave: sits over the hero image bottom edge */
        .fm__top-wave {
          margin-top: -78px;
          line-height: 0;
          position: relative;
          z-index: 2;
        }
        .fm__top-wave svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        .fm__body {
          padding: 40px 24px 80px;
        }

        /* Figma: Inter 700 48px line-height 77px colour #000 */
        .fm__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 77px;
          text-align: center;
          color: #000000;
          margin: 0 0 48px;
        }

        /*
          Figma card: #EBEBEB, border-radius 40px,
          box-shadow 0 4px 4px rgba(0,0,0,.25),
          1121×552px centred.
          Padding derived from:
            photo top: 1204 - 1147 = 57px → top padding
            photo left: 247 - card_left(196) = 51px → left padding
            text left: 696 - card_left = ~500, but card right = 1317, text right = 1284 → ~33px right pad
        */
        .fm__card {
          display: flex;
          align-items: flex-start;
          gap: 36px;
          background: #EBEBEB;
          border-radius: 40px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          max-width: 1121px;
          min-height: 552px;
          margin: 0 auto;
          padding: 57px 48px 57px 51px;
          box-sizing: border-box;
        }

        /* Figma: 413×438px, border-radius 40px */
        .fm__photo-wrap {
          flex-shrink: 0;
          width: 413px;
          height: 438px;
          border-radius: 40px;
          overflow: hidden;
        }
        .fm__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Figma: Inter 600 32px line-height 40px colour #000 */
        .fm__quote {
          flex: 1;
          display: flex;
          align-items: center;
          min-height: 438px;
        }
        .fm__text {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
          color: #000000;
          margin: 0;
        }

        /* Blue wave bottom */
        .fm__bottom-wave {
          line-height: 0;
          margin-top: -1px;
        }
        .fm__bottom-wave svg {
          width: 100%;
          height: 162px;
          display: block;
        }

        /* ─── Responsive ───────────────────────────────── */
        @media (max-width: 1160px) {
          .fm__card {
            padding: 40px 36px;
            min-height: unset;
            gap: 28px;
          }
          .fm__photo-wrap { width: 300px; height: 320px; }
          .fm__text { font-size: 24px; line-height: 34px; }
          .fm__title { font-size: 38px; line-height: 1.3; }
          .fm__quote { min-height: 320px; }
        }
        @media (max-width: 860px) {
          .fm__card {
            flex-direction: column;
            align-items: center;
            border-radius: 28px;
            padding: 32px 24px;
            gap: 24px;
          }
          .fm__photo-wrap { width: 100%; max-width: 380px; height: 280px; border-radius: 28px; }
          .fm__quote { min-height: unset; }
          .fm__text { font-size: 20px; line-height: 30px; text-align: center; }
          .fm__title { font-size: 32px; margin-bottom: 32px; }
          .fm__top-wave { margin-top: -40px; }
        }
        @media (max-width: 540px) {
          .fm__card { padding: 24px 16px; border-radius: 20px; }
          .fm__photo-wrap { height: 220px; border-radius: 20px; }
          .fm__text { font-size: 16px; line-height: 26px; }
          .fm__title { font-size: 26px; margin-bottom: 24px; }
          .fm__body { padding: 20px 16px 60px; }
        }
      `}</style>
    </>
  );
}