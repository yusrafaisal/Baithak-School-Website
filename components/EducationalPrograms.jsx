// EducationalPrograms.jsx
// Ourprograms.jsx
"use client";

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
        padding: "clamp(40px, 6vw, 60px) clamp(16px, 4vw, 64px)",
      }}
    >
      {/* Section heading — "Our Programs" per new spec */}
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 48px)",
          lineHeight: "1.2",
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: 0,
        }}
      >
        Our Programs
      </h2>

      {/* Flex container that automatically drops down to a column grid style on smaller screens */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "24px",
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
              padding: "24px 20px 0px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              // Adapts layout sizes dynamically across desktop and mobile screens
              width: "100%",
              maxWidth: "340px",
              minHeight: "420px",
              maxHeight: "460px",
              overflow: "hidden",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "1.3",
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
                lineHeight: "1.5",
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
                minHeight: "180px",
                borderRadius: "0 0 36px 36px",
                marginRight: "-20px", // Cancels padding out for a clean full-width bottom layout
                marginLeft: "-20px",
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