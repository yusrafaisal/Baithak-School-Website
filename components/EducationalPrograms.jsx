// EducationalPrograms.jsx
"use client";

// NOTE: In the new design this section is titled "Our Programs" (not "Educational Programs"),
// has only 3 cards, and the third is "STAFF TRAINING PROTOCOL" (not Vocational Training).
const EDU_CARDS = [
  {
    title: "FORMAL & INFORMAL EDUCATION",
    desc: "In our quest to spread literacy far and wide both structures of education are incorporated.",
    img: "/images/edu-formal.png",
  },
  {
    title: "ACADEMIC DEVELOPMENT",
    desc: "Academic excellence is achieved by crafting a unified syllabus for schools all over Pakistan.",
    img: "/images/edu-academic.png",
  },
  {
    title: "STAFF TRAINING PROTOCOL",
    desc: "Regular Training of Trainer workshops are held at SEW head office and efforts are made to involve the staff.",
    img: "/images/edu-training.png",
  },
];

export default function EducationalPrograms() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #17469E 0%, #0F295A 100%)",
        padding: "51px 64px 60px",
      }}
    >
      {/* Section heading — "Our Programs" per new spec */}
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "77px",
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Our Programs
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "18px",
          maxWidth: "1220px",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {EDU_CARDS.map(({ title, desc, img }) => (
          <div
            key={title}
            style={{
              background: "#FFFFFF",
              borderRadius: "36px",
              padding: "22px 20px 0px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "287px",
              flexShrink: 0,
              height: "404px",
              overflow: "hidden",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "20px",
                color: "#000000",
                margin: 0,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#333333",
                margin: 0,
              }}
            >
              {desc}
            </p>
            {/* Image fills remaining card height */}
            <div
              style={{
                marginTop: "auto",
                overflow: "hidden",
                flex: 1,
                minHeight: "160px",
                borderRadius: "0 0 36px 36px",
              }}
            >
              <img
                src={img}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}