// ProgramsHero.jsx
export default function ProgramsHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "769px",
        overflow: "hidden",
        marginTop: "69px",
      }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "url('/images/IMG_5056.png') center/cover no-repeat",
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

      {/* Decorative yellow border circle — left */}
      <div
        style={{
          position: "absolute",
          left: 57,
          top: 304,
          width: 166,
          height: 165,
          borderRadius: "50%",
          border: "4px solid #FFB600",
          background: "transparent",
          zIndex: 2,
        }}
      />

      {/* Decorative green filled circle — left */}
      <div
        style={{
          position: "absolute",
          left: 105,
          top: 330,
          width: 117,
          height: 117,
          borderRadius: "50%",
          background: "#2AA76F",
          zIndex: 2,
        }}
      />

      {/* Large red circle — right */}
      <div
        style={{
          position: "absolute",
          left: 1219,
          top: 574,
          width: 269,
          height: 269,
          borderRadius: "50%",
          background: "#E05163",
          zIndex: 2,
        }}
      />

      {/* "Our Programs" heading — left-aligned */}
      <h1
        style={{
          position: "absolute",
          left: 175,
          top: 385,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "49px",
          color: "#FFFFFF",
          margin: 0,
          zIndex: 3,
        }}
      >
        Our Programs
      </h1>

      {/* White diagonal wave at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: -2,
          left: -27,
          width: "1539px",
          height: "160px",
          background: "#FFFFFF",
          transform: "rotate(179.57deg)",
          zIndex: 3,
        }}
      />

      {/* Partial yellow border ellipse — bottom left overflow */}
      <div
        style={{
          position: "absolute",
          left: -35,
          top: 858,
          width: 91,
          height: 90,
          borderRadius: "50%",
          border: "4px solid #FFB600",
          background: "transparent",
          zIndex: 4,
        }}
      />
    </section>
  );
}