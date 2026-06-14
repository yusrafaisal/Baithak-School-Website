// DonationImpact.jsx
"use client";

export default function DonationImpact() {
    return (
        <section
            style={{
                position: "relative",
                background: "linear-gradient(180deg, #17489E 34.62%, #1B3664 100%)",
                padding: "80px 64px 100px",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "80px",
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Left — white card with donation form screenshot */}
                <div
                    style={{
                        flexShrink: 0,
                        width: "451px",
                        height: "668px",
                        background: "#FFFFFF",
                        borderRadius: "40px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/images/donation-form-screenshot.png"
                        alt="Donation form"
                        style={{
                            width: "385px",
                            height: "633px",
                            objectFit: "cover",
                            display: "block",
                            margin: "18px auto 0",
                            borderRadius: "35px",
                        }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                </div>

                {/* Right — text block */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "64px",
                            lineHeight: "77px",
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
                            fontSize: "30px",
                            lineHeight: "46px",
                            color: "#E5EEFF",
                            margin: 0,
                        }}
                    >
                        Baithak School brings quality education to Pakistan&apos;s most
                        underserved and to communities one neighbourhood at a time and
                        change lives.
                    </p>

                    {/* FIXED: Added the opening "a" tag here */}
                    <a
                        href="#contribute"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "15px 20px",
                            width: "180px",
                            height: "53px",
                            background: "#FFB600",
                            borderRadius: "15px",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "22px",
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