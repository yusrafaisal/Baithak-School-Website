// DonationSupportCards.jsx
"use client";

const CARDS = [
  {
    label: "Support a Child",
    bg: "#E05163",
    img: "/images/support-child.png",
  },
  {
    label: "Support a Classroom",
    bg: "#FFB600",
    img: "/images/support-classroom.png",
  },
  {
    label: "Support a School",
    bg: "#2AA76F",
    img: "/images/support-school.png",
  },
];

export default function DonationSupportCards() {
  return (
    <section
      style={{
        background: "#F6F6F6",
        padding: "80px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "100px",
          maxWidth: "1087px",
          margin: "0 auto",
        }}
      >
        {CARDS.map(({ label, bg, img }) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {/* Circle with coloured bg */}
            <div
              style={{
                width: "302px",
                height: "296px",
                borderRadius: "50%",
                background: bg,
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt={label}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "289px",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            {/* Label */}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "77px",
                color: "#282727",
                textAlign: "center",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}