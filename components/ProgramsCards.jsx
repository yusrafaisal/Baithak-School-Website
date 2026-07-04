"use client";

const CARDS = [
  { label: "Friends with Books", borderColor: "#E05163", bg: "#E05163", img: "/images/program-friends.png" },
  { label: "Health & Hygiene", borderColor: "#FFB600", bg: "#FFB600", img: "/images/program-health.png" },
  { label: "Student Volunteers", borderColor: "#FFB600", bg: "#2AA76F", img: "/images/program-schools.png" },
];

export default function ProgramsCards() {
  return (
    <section
      style={{
        padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px) clamp(30px, 5vw, 60px)",
        background: "#FFFFFF"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
          maxWidth: "1400px",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {CARDS.map(({ label, borderColor, bg, img }) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: "100%"
            }}
          >
            {/* Blob / organic circle image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                maxWidth: "380px",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                background: bg,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt={label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            {/* Label badge */}
            <div
              style={{
                border: `3px solid ${borderColor}`,
                borderRadius: "12px",
                padding: "10px 16px",
                background: "#FFFFFF",
                width: "100%",
                maxWidth: "340px",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 1.8vw, 24px)",
                  color: "#282727",
                  display: "block",
                  wordBreak: "break-word",
                }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}