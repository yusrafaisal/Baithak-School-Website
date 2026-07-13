// ProgramsHero.jsx
"use client";

import { useEffect, useState } from "react";

export default function ProgramsHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "450px",
        height: "65vh",
        maxHeight: "769px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#1D59C8",
      }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "url('/images/IMG_5056.png') center 20%/cover no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dark blue overlay tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#1D59C8",
          opacity: 0.35,
          zIndex: 1,
        }}
      />

      {/* Decorative yellow border circle — left (Hidden on mobile) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            left: "4%",
            top: "35%",
            width: "12vw",
            height: "12vw",
            maxWidth: "166px",
            maxHeight: "165px",
            borderRadius: "50%",
            border: "4px solid #FFB600",
            background: "transparent",
            zIndex: 2,
          }}
        />
      )}

      {/* Decorative green filled circle — left (Hidden on mobile) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            left: "7%",
            top: "40%",
            width: "8vw",
            height: "8vw",
            maxWidth: "117px",
            maxHeight: "117px",
            borderRadius: "50%",
            background: "#2AA76F",
            zIndex: 2,
          }}
        />
      )}

      {/* Large red circle — right */}
      <div
        style={{
          position: "absolute",
          right: "-50px",
          bottom: "-50px",
          width: "25vw",
          height: "25vw",
          maxWidth: "269px",
          maxHeight: "269px",
          borderRadius: "50%",
          background: "#E05163",
          zIndex: 2,
        }}
      />

      {/* Heading Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          zIndex: 3,
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: "1.2",
            color: "#FFFFFF",
            margin: 0,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Our Programs
        </h1>
      </div>

      {/* Curved white wave at the very bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "-2px",
          left: 0,
          right: 0,
          zIndex: 3,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "70px" }}
        >
          <path d="M0,90 L0,90 Q720,90 1440,90 L1440,0 Q720,80 0,0 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}