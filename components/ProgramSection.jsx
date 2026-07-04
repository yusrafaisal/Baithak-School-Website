// ProgramSection.jsx
"use client";

import { useEffect, useState } from "react";

export default function ProgramSection({
  id,
  title,
  description,
  imageLeft,
  circleImage,
  descFontSize = "19.85px",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine correct alignment direction dynamically
  const getFlexDirection = () => {
    if (isMobile) return "column";
    return imageLeft ? "row" : "row-reverse";
  };

  return (
    <section
      id={id}
      style={{
        padding: "clamp(40px, 6vw, 80px) clamp(16px, 5vw, 120px)",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: getFlexDirection(),
          gap: "clamp(24px, 5vw, 80px)",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Image Block */}
        <div
          style={{
            flexShrink: 0,
            width: "clamp(200px, 40vw, 344px)",
            height: "clamp(200px, 40vw, 344px)",
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

        {/* Text Block */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            minWidth: 0,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 47.65px)",
              lineHeight: "1.2",
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
              fontSize: `clamp(14px, 1.6vw, ${descFontSize})`,
              lineHeight: "1.5",
              color: "#000000",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}