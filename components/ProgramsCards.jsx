"use client";
const CARDS = [
  { label: "Friends with Books", borderColor: "#E05163", bg: "#E05163", img: "/images/program-friends.png" },
  { label: "Health & Hygiene", borderColor: "#FFB600", bg: "#FFB600", img: "/images/program-health.png" },
  { label: "Student Volunteers", borderColor: "#FFB600", bg: "#2AA76F", img: "/images/program-schools.png" },
];

export default function ProgramsCards() {
  return (
    <section style={{ padding: "80px 64px 60px", background: "#FFFFFF" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {CARDS.map(({ label, borderColor, bg, img }) => (
          <div
            key={label}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}
          >
            {/* Blob / organic circle image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                maxWidth: "420px",
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
                padding: "10px 24px",
                background: "#FFFFFF",
                width: "100%",
                maxWidth: "380px",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 2vw, 32px)",
                  color: "#282727",
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