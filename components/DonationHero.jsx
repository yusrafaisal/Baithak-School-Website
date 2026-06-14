// DonationHero.jsx
"use client";

export default function DonationHero() {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "820px",
                overflow: "hidden",
                marginTop: "72px",
            }}
        >
            {/* Full-bleed background photo */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "url('/images/your-support-bg.png') center/cover no-repeat",
                    zIndex: 0,
                }}
            />

            {/* Dark overlay so text is readable */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    zIndex: 1,
                }}
            />

            {/* Headline */}
            <h1
                style={{
                    position: "absolute",
                    width: "943px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "196px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "50px",
                    lineHeight: "90px",
                    textAlign: "center",
                    letterSpacing: "-1px",
                    color: "#FFFFFF",
                    margin: 0,
                    zIndex: 2,
                    whiteSpace: "nowrap",
                }}
            >
                Your contribution can help{" "}
                <span style={{ color: "#FFB600" }}>fulfill dreams</span>
            </h1>

            {/* White wave cutoff at bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: -2,
                    left: -6,
                    width: "1523px",
                    height: "160px",
                    background: "linear-gradient(180deg, #17579E 0%, #0A2B4F 99.52%)",
                    transform: "rotate(-179.78deg)",
                    zIndex: 3,
                }}
            />
        </section>
    );
}