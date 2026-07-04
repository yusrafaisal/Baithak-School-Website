"use client";

import { useState } from "react";

const BANK_DETAILS = {
    pakistani: `Zakat Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nPK73 MEZN 0001030100019290`,
    international: `International Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nIBAN: PK03 MEZN 0001030100019289`,
};

export default function DonationContribute() {
    const [activeTab, setActiveTab] = useState("pakistani");

    // Controlled Form State Mapping to Data Schema
    const [formData, setFormData] = useState({
        donorName: "",
        anonymousName: "",
        organizationName: "",
        designation: "",
        mobileNumber: "",
        email: "",
        mailingAddress: "",
        contributionType: "Donation", // Defaults to Donation row selection
    });

    // Lifecycle indicators
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
            // Reset input form values on success
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
                padding: "80px 64px 100px",
            }}
        >
            <div style={{ maxWidth: "1049px", margin: "0 auto" }}>

                {/* Section heading */}
                <h2 style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "77px",
                    color: "#282727",
                    textAlign: "center",
                    margin: "0 0 4px",
                }}>
                    Contribute to Baithak
                </h2>

                {/* Subheading */}
                <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "41px",
                    color: "#000000",
                    textAlign: "center",
                    margin: "0 0 40px",
                }}>
                    Select the category
                </p>

                {/* Tab switcher */}
                <div style={{ display: "flex", flexDirection: "row", gap: "0", marginBottom: "0" }}>
                    <button
                        type="button"
                        onClick={() => setActiveTab("pakistani")}
                        style={{
                            width: "501px",
                            height: "74px",
                            background: activeTab === "pakistani" ? "#17469E" : "#EEEDED",
                            borderRadius: "15px 15px 0 0",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "74px",
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
                            width: "551px",
                            height: "74px",
                            background: activeTab === "international" ? "#17469E" : "#EEEDED",
                            borderRadius: "15px 15px 0 0",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "74px",
                            color: activeTab === "international" ? "#EBEBEB" : "#282727",
                            textAlign: "center",
                            marginLeft: "auto",
                        }}
                    >
                        Deposit in International Accounts
                    </button>
                </div>

                {/* Blue header bar */}
                <div style={{ width: "100%", height: "94px", background: "#17469E", borderRadius: "39px 39px 0 0" }} />

                {/* Light blue content area with bank details */}
                <div style={{
                    width: "100%",
                    background: "#EEF6FF",
                    borderRadius: "0 0 39px 39px",
                    padding: "36px 72px 40px",
                    boxSizing: "border-box",
                    minHeight: "370px",
                }}>
                    <pre style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "32px",
                        lineHeight: "56px",
                        color: "#282727",
                        margin: 0,
                        whiteSpace: "pre-wrap",
                    }}>
                        {BANK_DETAILS[activeTab]}
                    </pre>
                </div>

                {/* Interactive Dynamic Form Container */}
                <form onSubmit={handleFormSubmit} style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>

                    {/* Section Label: Type Selector */}
                    <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "24px", color: "#282727", display: "block", marginBottom: "12px" }}>
                            Contribution Type
                        </label>
                        <div style={{ display: "flex", gap: "16px" }}>
                            <button
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, contributionType: "Zakat" }))}
                                style={{
                                    flex: 1,
                                    padding: "16px",
                                    fontSize: "20px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 600,
                                    borderRadius: "12px",
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
                                    flex: 1,
                                    padding: "16px",
                                    fontSize: "20px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 600,
                                    borderRadius: "12px",
                                    border: formData.contributionType === "Donation" ? "3px solid #17469E" : "1px solid #CCCCCC",
                                    background: formData.contributionType === "Donation" ? "#EEF6FF" : "#FFFFFF",
                                    cursor: "pointer"
                                }}
                            >
                                General Donation
                            </button>
                        </div>
                    </div>

                    {/* Donor Info Sub-Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Donor Name * <span style={{ fontSize: "14px", color: "#666" }}>(Internal Mandatory Record)</span>
                            </label>
                            <input
                                type="text"
                                name="donorName"
                                required
                                value={formData.donorName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Alternate / Anonymous Name <span style={{ fontSize: "14px", color: "#666" }}>(For public receipts)</span>
                            </label>
                            <input
                                type="text"
                                name="anonymousName"
                                value={formData.anonymousName}
                                onChange={handleInputChange}
                                placeholder="Leave empty if same as above"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Organization / Company Name
                            </label>
                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleInputChange}
                                placeholder="Company Name (Optional)"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Designation
                            </label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                placeholder="Job Title (Optional)"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    {/* Contact Info Sub-Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Mobile Number *
                            </label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                required
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="e.g. +92 300 1234567"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                        <div>
                            <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="donor@example.com"
                                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box" }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", color: "#282727", display: "block", marginBottom: "8px" }}>
                            Mailing Address *
                        </label>
                        <textarea
                            name="mailingAddress"
                            required
                            rows={3}
                            value={formData.mailingAddress}
                            onChange={handleInputChange}
                            placeholder="Complete physical mailing address for receipt drop-offs"
                            style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #CCCCCC", fontSize: "16px", boxSizing: "border-box", fontFamily: "inherit" }}
                        />
                    </div>

                    {/* Feedback states execution banner block */}
                    {successMessage && (
                        <div style={{ background: "#D4EDDA", color: "#155724", padding: "16px", borderRadius: "8px", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                            {successMessage}
                        </div>
                    )}

                    {errorMessage && (
                        <div style={{ background: "#F8D7DA", color: "#721C24", padding: "16px", borderRadius: "8px", fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                            {errorMessage}
                        </div>
                    )}

                    {/* Action Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "18px",
                            background: loading ? "#CCCCCC" : "#17469E",
                            color: "#FFFFFF",
                            fontSize: "22px",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            border: "none",
                            borderRadius: "15px",
                            cursor: loading ? "not-allowed" : "pointer",
                            transition: "background 0.2s ease"
                        }}
                    >
                        {loading ? "Processing Submission..." : "Submit Donation Record"}
                    </button>
                </form>

            </div>
        </section>
    );
}