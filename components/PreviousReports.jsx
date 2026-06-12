/* ──────────────────────────────────────────────────────
   PreviousReports.jsx
   Figma section starting at top:2609px on the canvas.
   Layout: "Previous Annual Reports" heading, then two rows
   of 4 report cards each. Each card = cover image (195×256px)
   + coloured border button label below.
   Border colours from Figma:
     2024 (Frame 61)  → #3773E2 (blue)
     2023 (Frame 48)  → #E05163 (red)
     2022 (Frame 49)  → #2AA76F (green)
     2021 (Frame 50)  → #FFE299 (yellow)
     2020 (Frame 62)  → #3773E2 (blue)
     2019 (Frame 63)  → #E05163 (red)
     2018 (Frame 64)  → #2AA76F (green)
     2017 (Frame 65)  → #FFE299 (yellow)
────────────────────────────────────────────────────── */

const reports = [
  /* Row 1 */
  {
    label: "BSN Annual Report 2026",
    img: "/images/report-2026.png",       /* Frame_61.png */
    borderColor: "#3773E2",
    href: null,   /* 2026 is the featured report handled by NewsPublications */
  },
  {
    label: "BSN Annual Report 2023",
    img: "/images/report-2023.png",       /* Screenshot_2026-04-17_233125_1.png */
    borderColor: "#E05163",
    href: null,
  },
  {
    label: "BSN Annual Report 2022",
    img: "/images/report-2022.png",       /* Screenshot_2026-04-17_233402_1.png */
    borderColor: "#2AA76F",
    href: null,
  },
  {
    label: "BSN Annual Report 2021",
    img: "/images/report-2021.png",       /* Screenshot_2026-04-17_233753_1.png */
    borderColor: "#FFE299",
    href: null,
  },
  /* Row 2 */
  {
    label: "BSN Annual Report 2020",
    img: "/images/report-2020.png",       /* Frame_62.png */
    borderColor: "#3773E2",
    href: null,
  },
  {
    label: "BSN Annual Report 2019",
    img: "/images/report-2019.png",       /* Screenshot_2026-04-17_233125_2.png */
    borderColor: "#E05163",
    href: null,
  },
  {
    label: "BSN Annual Report 2018",
    img: "/images/report-2018.png",       /* Screenshot_2026-04-17_233402_2.png */
    borderColor: "#2AA76F",
    href: null,
  },
  {
    label: "BSN Annual Report 2017",
    img: "/images/report-2017.png",       /* Screenshot_2026-04-17_233753_2.png */
    borderColor: "#FFE299",
    href: null,
  },
];

function ReportCard({ report }) {
  return (
    /*
      Figma: each Frame 61/62: 195×309px total
        - Image: 195×256px, border-radius 16–23px, drop-shadow 0 4px 21.9px rgba(0,0,0,0.25)
        - Button: 195×36–37px, white bg, coloured border 3px, border-radius 12px
                  "BSN Annual Report YYYY" Poppins 600 14–16px underlined #000
    */
    <div className="rc">
      <div className="rc__img-wrap">
        <img
          src={report.img}
          alt={report.label}
          className="rc__img"
        />
      </div>
      {/* Coloured border label button — not clickable for now */}
      <div
        className="rc__label"
        style={{ border: `3px solid ${report.borderColor}` }}
      >
        <span className="rc__label-text">{report.label}</span>
      </div>
    </div>
  );
}

export default function PreviousReports() {
  return (
    <section className="pr">
      {/* Figma: Inter 700 48px lh 49px #000 centred */}
      <h2 className="pr__heading">Previous Annual Reports</h2>

      {/* 4-column grid, 2 rows */}
      <div className="pr__grid">
        {reports.map((r) => (
          <ReportCard key={r.label} report={r} />
        ))}
      </div>

      <style>{`
        /* ─── Section ─────────────────────────────── */
        .pr {
          background: #ffffff;
          padding: 80px 24px 100px;
        }

        /* Figma: Inter 700 48px lh 49px #000 */
        .pr__heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 49px;
          text-align: center;
          color: #000000;
          margin: 0 0 60px;
        }

        /* 4 columns centred — Figma: 4 cards per row ~195px each
           gaps derived from Figma positions:
           card1 left:287, card2 left:532 → gap ≈ 50px
           card3 left:778, card4 left:1021 → gap ≈ 50px
           With 4 × 195px + 3 × 50px = 930px on 1512px → centred.
        */
        .pr__grid {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 195px);
          justify-content: center;
          gap: 40px 50px;
        }

        /* ─── Report Card ──────────────────────────── */
        .rc {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
          filter: drop-shadow(0px 4px 21.9px rgba(0,0,0,0.25));
        }

        /* Figma: 195×256px image, border-radius 16px */
        .rc__img-wrap {
          width: 195px;
          height: 256px;
          border-radius: 16px;
          overflow: hidden;
          background: #e8eef8;
          flex-shrink: 0;
        }
        .rc__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Figma: 195×37px, white bg, 3px coloured border, border-radius 12px */
        .rc__label {
          width: 195px;
          height: 37px;
          background: #ffffff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        /* Figma: Poppins 600 14px underlined #000 */
        .rc__label-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 13px;
          line-height: 1;
          text-decoration: underline;
          color: #000000;
          text-align: center;
        }

        /* ─── Responsive ───────────────────────────── */
        @media (max-width: 900px) {
          .pr__grid {
            grid-template-columns: repeat(2, 195px);
            gap: 32px 40px;
          }
          .pr__heading { font-size: 34px; line-height: 1.3; }
        }
        @media (max-width: 520px) {
          .pr__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 20px;
          }
          .rc__img-wrap { width: 100%; height: 0; padding-bottom: 131%; }
          .rc__label { width: 100%; }
          .pr { padding: 60px 16px 80px; }
          .pr__heading { font-size: 26px; margin-bottom: 36px; }
        }
      `}</style>
    </section>
  );
}
