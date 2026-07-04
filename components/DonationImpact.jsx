// DonationImpact.jsx

"use client";

export default function DonationImpact() {
    return (
        <section
            style={{
                position: "relative",
                background: "linear-gradient(180deg, #17489E 34.62%, #1B3664 100%)",
                padding: "60px 20px 80px",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap", // Fluid side-by-side or stacked orientation
                    gap: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%"
                }}
            >
                {/* Left image holder - constraints are fluidified */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        aspectRatio: "3/4",
                        background: "#FFFFFF",
                        borderRadius: "24px",
                        padding: "16px",
                        boxSizing: "border-box"
                    }}
                >
                    <img
                        src="/images/donation-form-screenshot.png"
                        alt="Donation form"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "16px",
                        }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                </div>

                {/* Right text box */}
                <div
                    style={{
                        flex: "1 1 450px", // Responsive snapping base
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(28px, 4.5vw, 56px)",
                            lineHeight: "1.2",
                            color: "#E5EEFF",
                            margin: 0,
                        }}
                    >
                        Your support drives real change
                    </h2>

                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "clamp(16px, 2.5vw, 26px)",
                            lineHeight: "1.5",
                            color: "#E5EEFF",
                            margin: 0,
                        }}
                    >
                        Baithak School brings quality education to Pakistan&apos;s most
                        underserved communities one neighbourhood at a time and changes lives.
                    </p>

                    <a
                        href="#contribute"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 24px",
                            width: "fit-content",
                            minWidth: "160px",
                            background: "#FFB600",
                            borderRadius: "12px",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "#000000",
                            textDecoration: "none",
                            boxSizing: "border-box",
                        }}
                    >
                        Donate Now
                    </a>
                </div>
            </div>
        </section >
    );
}