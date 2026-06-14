// ProgramSection.jsx
"use client";

// New design: each section has a single large circle image (343px) on one side
// and a title + plain paragraph on the other — no rotated card, no collage, no accent bar.

export default function ProgramSection({
  id,
  title,
  description,
  imageLeft,
  circleImage,
  descFontSize = "19.85px",
}) {
  const imageBlock = (
    <div
      style={{
        flexShrink: 0,
        width: "344px",
        height: "344px",
        borderRadius: "50%",
        overflow: "hidden",
        background: "#D9D9D9",
      }}
    >
      <img
        src={circleImage}
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
  );

  const textBlock = (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
        minWidth: 0,
      }}
    >
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "47.65px",
          lineHeight: "76px",
          color: "#000000",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: descFontSize,
          lineHeight: "30px",
          color: "#000000",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );

  return (
    <section
      id={id}
      style={{
        padding: "80px 120px",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: imageLeft ? "row" : "row-reverse",
          gap: "80px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {imageBlock}
        {textBlock}
      </div>
    </section>
  );
}