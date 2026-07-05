"use client";

import { useState } from "react";

const BANK_DETAILS = {
    pakistani: `Zakat Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nPK73 MEZN 0001030100019290`,
    international: `International Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nIBAN: PK03 MEZN 0001030100019289`,
};

export default function DonationContribute() {
    const [activeTab, setActiveTab] = useState("pakistani");

    const [formData, setFormData] = useState({
        donorName: "",
        anonymousName: "",
        organizationName: "",
        designation: "",
        mobileNumber: "",
        email: "",
        mailingAddress: "",
        contributionType: "Donation",
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("/api/donations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "An unexpected issue occurred.");
            }

            setSuccessMessage("Thank you! Your donation record has been saved successfully.");
            setFormData({
                donorName: "",
                anonymousName: "",
                organizationName: "",
                designation: "",
                mobileNumber: "",
                email: "",
                mailingAddress: "",
                contributionType: formData.contributionType,
            });
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contribute"
            style={{
                background: "#FFFFFF",
                padding: "60px 20px 80px", // Reduced padding for mobile safety
            }}
        >
            <div style={{ maxWidth: "1049px", margin: "0 auto", width: "100%" }}>

                {/* Section heading */}
                <h2 style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 48px)", // Fluid typography
                    lineHeight: "1.2",
                    color: "#282727",
                    textAlign: "center",
                    margin: "0 0 12px",
                }}>
                    Contribute to Baithak
                </h2>

                {/* Subheading */}
                <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(20px, 4vw, 36px)",
                    lineHeight: "1.2",
                    color: "#000000",
                    textAlign: "center",
                    margin: "0 0 40px",
                }}>
                    Select the category
                </p>

                {/* Responsive Tab switcher */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap", // Wrap tabs on small viewports
                    gap: "4px",
                    marginBottom: "0"
                }}>
                    <button
                        type="button"
                        onClick={() => setActiveTab("pakistani")}
                        style={{
                            flex: "1 1 280px", // Adapts dynamically
                            minHeight: "64px",
                            background: activeTab === "pakistani" ? "#17469E" : "#EEEDED",
                            borderRadius: "15px 15px 0 0",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(16px, 3vw, 24px)",
                            padding: "10px",
                            color: activeTab === "pakistani" ? "#EBEBEB" : "#282727",
                            textAlign: "center",
                        }}
                    >
                        Deposit in Pakistani Accounts
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("international")}
                        style={{
                            flex: "1 1 280px",
                            minHeight: "64px",
                            background: activeTab === "international" ? "#17469E" : "#EEEDED",
                            borderRadius: "15px 15px 0 0",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(16px, 3vw, 24px)",
                            padding: "10px",
                            color: activeTab === "international" ? "#EBEBEB" : "#282727",
                            textAlign: "center",
                        }}
                    >
                        Deposit in International Accounts
                    </button>
                </div>

                {/* Blue header bar */}
                <div style={{ width: "100%", height: "40px", background: "#17469E", borderRadius: "15px 15px 0 0" }} />

                {/* Light blue content area with bank details */}
                <div style={{
                    width: "100%",
                    background: "#EEF6FF",
                    borderRadius: "0 0 24px 24px",
                    padding: "clamp(20px, 5vw, 40px)",
                    boxSizing: "border-box",
                }}>
                    <pre style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(16px, 2.5vw, 24px)",
                        lineHeight: "1.6",
                        color: "#282727",
                        margin: 0,
                        whiteSpace: "pre-wrap",
                    }}>
                        {BANK_DETAILS[activeTab]}
                    </pre>
                </div>

                {/* Dynamic Responsive Form */}
                <form onSubmit={handleFormSubmit} style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>

                    {/* Type Selector */}
                    <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "18px", color: "#282727", display: "block", marginBottom: "12px" }}>
                            Contribution Type
                        </label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                            <button
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, contributionType: "Zakat" }))}
                                style={{
                                    flex: "1 1 140px",
                                    padding: "14px",
                                    fontSize: "16px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 600,
                                    borderRadius: "10px",
                                    border: formData.contributionType === "Zakat" ? "3px solid #17469E" : "1px solid #CCCCCC",
                                    background: formData.contributionType === "Zakat" ? "#EEF6FF" : "#FFFFFF",
                                    cursor: "pointer"
                                }}
                            >
                                Zakat
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, contributionType: "Donation" }))}
                                style={{
                                    flex: "1 1 140px",
                                    padding: "14px",
                                    fontSize: "16px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 600,
                                    borderRadius: "10px",
                                    border: formData.contributionType === "Donation" ? "3px solid #17469E" : "1px solid #CCCCCC",
                                    background: formData.contributionType === "Donation" ? "#EEF6FF" : "#FFFFFF",
                                    cursor: "pointer"
                                }}
                            >
                                General Donation
                            </button>
                        </div>
                    </div>

                    {/* Responsive Grid Setup using auto-fit minmax */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Donor Name * <span style={{ fontSize: "12px", color: "#666" }}>(Internal Mandatory)</span>
                            </label>
                            <input
                                type="text"
                                name="donorName"
                                required
                                value={formData.donorName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Alternate / Anonymous Name <span style={{ fontSize: "12px", color: "#666" }}>(Public Display)</span>
                            </label>
                            <input
                                type="text"
                                name="anonymousName"
                                value={formData.anonymousName}
                                onChange={handleInputChange}
                                placeholder="Optional display alias"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Organization / Company Name
                            </label>
                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleInputChange}
                                placeholder="Company Name (Optional)"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Designation
                            </label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                placeholder="Job Title (Optional)"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Mobile Number *
                            </label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                required
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="e.g. +92 300 1234567"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="donor@example.com"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#282727", display: "block", marginBottom: "8px" }}>
                            Mailing Address *
                        </label>
                        <textarea
                            name="mailingAddress"
                            required
                            rows={3}
                            value={formData.mailingAddress}
                            onChange={handleInputChange}
                            placeholder="Complete physical mailing address"
                            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box", fontFamily: "inherit" }}
                        />
                    </div>

                    {successMessage && (
                        <div style={{ background: "#D4EDDA", color: "#155724", padding: "14px", borderRadius: "8px", fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                            {successMessage}
                        </div>
                    )}

                    {errorMessage && (
                        <div style={{ background: "#F8D7DA", color: "#721C24", padding: "14px", borderRadius: "8px", fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "16px",
                            background: loading ? "#CCCCCC" : "#17469E",
                            color: "#FFFFFF",
                            fontSize: "18px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            border: "none",
                            borderRadius: "10px",
                            cursor: loading ? "not-allowed" : "pointer"
                        }}
                    >
                        {loading ? "Processing..." : "Submit Donation Record"}
                    </button>
                </form>

            </div>
        </section>
    );
}