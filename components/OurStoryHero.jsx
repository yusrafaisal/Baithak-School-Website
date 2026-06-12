export default function OurStoryHero() {
  return (
    <section className="os-hero">
      <img
        src="/images/our-story-hero.jpg"
        alt="Baithak School children"
        className="os-hero__img"
      />

      {/*
        Figma Ellipse 11: 165×164px, border 4px solid #FFB600, opacity 0.59
        Positioned at left:1409 on 1512px canvas = right: ~6.5%
        top:180 (page) - top:58 (navbar) = top: ~122px within hero
      */}
      <div className="os-hero__ring os-hero__ring--tr" />

      {/*
        Figma Ellipse 12: 91×90px, border 4px solid #FFB600, opacity 0.59
        Positioned at left:-40px top:845 — near bottom-left of hero
        relative to hero (starts at page top 58): 845 - 58 = 787px from hero top
      */}
      <div className="os-hero__ring os-hero__ring--bl" />

      {/*
        Figma Ellipse 7 (border ring): 166×165px, border 4px solid #FFB600
        left:77 top:300 (page) → top: 300-58=242 within hero
        Figma Ellipse 8 (filled circle): 117×117px, #2AA76F
        left:125 top:326 (page) → top: 326-58=268 within hero
        "Our Story" text: Inter 700 64px, left:179 top:381 (page) → top: 381-58=323
      */}
      <div className="os-hero__story-group">
        {/* Outer yellow border ring */}
        <div className="os-hero__border-ring" />
        {/* Green filled circle */}
        <div className="os-hero__green-circle" />
        {/* "Our Story" label */}
        <span className="os-hero__label">Our Story</span>
      </div>

      <style>{`
        /* ─── Hero section ─────────────────────────────────
           Figma: hero image 1512×849px starting at top:58 (below navbar).
           We subtract the 58px navbar height → 791px usable hero height.
        */
        .os-hero {
          position: relative;
          width: 100%;
          height: 791px;
          overflow: hidden;
        }
        .os-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
        }

        /* ─── Decorative rings ─────────────────────────────
           Figma: 4px solid #FFB600, opacity 0.59, border-radius 50%
        */
        .os-hero__ring {
          position: absolute;
          border: 4px solid #FFB600;
          border-radius: 50%;
          opacity: 0.59;
          pointer-events: none;
        }
        /* Top-right ring: 165×164px, left:1409/1512 ≈ right:6.5%, top:122px */
        .os-hero__ring--tr {
          width: 165px;
          height: 164px;
          right: 6.5%;
          top: 122px;
        }
        /* Bottom-left ring: 91×90px, left:-40px, near bottom */
        .os-hero__ring--bl {
          width: 91px;
          height: 90px;
          left: -20px;
          bottom: 46px;
        }

        /* ─── Story group (border ring + green circle + text) ─
           Figma uses absolute page coordinates:
           Ellipse 7 (border ring): left:77, top:300 (page) → hero top: 242px
           Ellipse 8 (green): left:125, top:326 (page) → hero top: 268px; 117×117px
           "Our Story": left:179, top:381 (page) → hero top: 323px; 64px
           We position the group at the top-left anchor of Ellipse 7.
        */
        .os-hero__story-group {
          position: absolute;
          left: 77px;
          top: 242px;
          width: 340px;
          height: 150px;
          pointer-events: none;
        }

        /* Figma Ellipse 7: 166×165px, border 4px solid #FFB600, no fill */
        .os-hero__border-ring {
          position: absolute;
          left: 0;
          top: 0;
          width: 166px;
          height: 165px;
          border: 4px solid #FFB600;
          border-radius: 50%;
          box-sizing: border-box;
        }

        /* Figma Ellipse 8: 117×117px, #2AA76F, left:125, top:326 (page)
           Relative to group (group top = page 300):
           left: 125-77 = 48px, top: 326-300 = 26px
        */
        .os-hero__green-circle {
          position: absolute;
          left: 48px;
          top: 26px;
          width: 117px;
          height: 117px;
          background: #2AA76F;
          border-radius: 50%;
        }

        /* Figma "Our Story": left:179, top:381 (page) → relative: left:102, top:81
           Inter 700 64px, line-height 49px (77%), colour #FBFCFF
        */
        .os-hero__label {
          position: absolute;
          left: 102px;
          top: 78px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 64px;
          line-height: 49px;
          color: #FBFCFF;
          white-space: nowrap;
          text-shadow: 0 2px 16px rgba(0,0,0,0.4);
        }

        /* ─── Responsive ───────────────────────────────── */
        @media (max-width: 900px) {
          .os-hero { height: 500px; }
          .os-hero__story-group { left: 40px; top: 160px; }
          .os-hero__border-ring { width: 120px; height: 120px; }
          .os-hero__green-circle { width: 88px; height: 88px; left: 34px; top: 19px; }
          .os-hero__label { font-size: 44px; line-height: 36px; left: 72px; top: 55px; }
          .os-hero__ring--tr { display: none; }
          .os-hero__ring--bl { width: 66px; height: 65px; }
        }
        @media (max-width: 600px) {
          .os-hero { height: 360px; }
          .os-hero__story-group { left: 20px; top: 110px; }
          .os-hero__border-ring { width: 90px; height: 90px; }
          .os-hero__green-circle { width: 66px; height: 66px; left: 26px; top: 14px; }
          .os-hero__label { font-size: 32px; line-height: 26px; left: 52px; top: 40px; }
          .os-hero__ring--bl { display: none; }
        }
      `}</style>
    </section>
  );
}
