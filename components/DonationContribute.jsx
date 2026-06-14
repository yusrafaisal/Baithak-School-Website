// DonationContribute.jsx
"use client";

import { useState } from "react";

const BANK_DETAILS = {
    pakistani: `Zakat Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nPK73 MEZN 0001030100019290`,
    international: `International Account:\nMeezan Bank Account\nTitle: Society For Educational Welfare\nSwift Code: MEZNPKKA\nIBAN: PK03 MEZN 0001030100019289`,
};

const ACCORDION_ITEMS = [
    {
        id: "contribution-type",
        label: "Contribution type",
        active: true,
        children: [
            { id: "zakat", label: "Zakat", color: "#737373" },
            { id: "donation", label: "Donation", color: "#000000", bold: true },
        ],
    },
    {
        id: "online-transfer",
        label: "Online transfer",
        active: false,
        children: [],
    },
    {
        id: "cash-cheque",
        label: "Cash / Cheque",
        active: false,
        children: [],
    },
];

export default function DonationContribute() {
    const [activeTab, setActiveTab] = useState("pakistani");
    const [openAccordion, setOpenAccordion] = useState("contribution-type");

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
                <h2
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "77px",
                        color: "#282727",
                        textAlign: "center",
                        margin: "0 0 4px",
                    }}
                >
                    Contribute to Baithak
                </h2>

                {/* Subheading */}
                <p
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "36px",
                        lineHeight: "41px",
                        color: "#000000",
                        textAlign: "center",
                        margin: "0 0 40px",
                    }}
                >
                    Select the category
                </p>

                {/* Tab switcher */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0",
                        marginBottom: "0",
                    }}
                >
                    <button
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
                            lineHeight: "77px",
                            color: activeTab === "pakistani" ? "#EBEBEB" : "#282727",
                            textAlign: "center",
                        }}
                    >
                        Deposit in Pakistani Accounts
                    </button>
                    <button
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
                            lineHeight: "77px",
                            color: activeTab === "international" ? "#EBEBEB" : "#282727",
                            textAlign: "center",
                            marginLeft: "auto",
                        }}
                    >
                        Deposit in International Accounts
                    </button>
                </div>

                {/* Blue header bar */}
                <div
                    style={{
                        width: "100%",
                        height: "94px",
                        background: "#17469E",
                        borderRadius: "39px 39px 0 0",
                    }}
                />

                {/* Light blue content area with bank details */}
                <div
                    style={{
                        width: "100%",
                        background: "#EEF6FF",
                        borderRadius: "0 0 39px 39px",
                        padding: "36px 72px 40px",
                        boxSizing: "border-box",
                        minHeight: "370px",
                    }}
                >
                    <pre
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "32px",
                            lineHeight: "56px",
                            color: "#282727",
                            margin: 0,
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {BANK_DETAILS[activeTab]}
                    </pre>
                </div>

                {/* Accordion — Contribution type (active/open) */}
                <div style={{ marginTop: "24px" }}>

                    {/* Contribution type — active pill */}
                    <div
                        style={{
                            width: "100%",
                            height: "97px",
                            background: "#90B1EF",
                            border: "4px solid #3773E2",
                            borderRadius: "77px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 40px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            marginBottom: "0",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "32px",
                                lineHeight: "77px",
                                color: "#282727",
                                flex: 1,
                            }}
                        >
                            Contribution type
                        </span>
                        <span style={{ fontSize: "32px", color: "#282727" }}>▾</span>
                    </div>

                    {/* Expanded accordion content — white card */}
                    <div
                        style={{
                            width: "100%",
                            background: "#FFFFFF",
                            boxShadow: "0px 4px 48.4px -4px rgba(0,0,0,0.25)",
                            borderRadius: "44px",
                            overflow: "hidden",
                            marginBottom: "0",
                        }}
                    >
                        {/* Zakat row */}
                        <div
                            style={{
                                height: "98px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 40px",
                                boxSizing: "border-box",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "32px",
                                    color: "#737373",
                                }}
                            >
                                Zakat
                            </span>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", background: "#EEEDED", margin: "0 40px" }} />

                        {/* Donation row — selected/highlighted */}
                        <div
                            style={{
                                height: "98px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 40px",
                                background: "#EEEDED",
                                borderRadius: "0 0 44px 44px",
                                boxSizing: "border-box",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "32px",
                                    color: "#000000",
                                }}
                            >
                                Donation
                            </span>
                        </div>
                    </div>

                    {/* Online transfer — collapsed pill */}
                    <div
                        style={{
                            width: "100%",
                            height: "98px",
                            background: "#EEEDED",
                            borderRadius: "77px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 40px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            marginTop: "16px",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "32px",
                                lineHeight: "77px",
                                color: "#737373",
                                flex: 1,
                            }}
                        >
                            Online transfer
                        </span>
                        <span style={{ fontSize: "32px", color: "#737373" }}>▾</span>
                    </div>

                    {/* Cash / Cheque — collapsed pill */}
                    <div
                        style={{
                            width: "100%",
                            height: "96px",
                            background: "#EEEDED",
                            borderRadius: "77px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 40px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            marginTop: "16px",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "32px",
                                lineHeight: "77px",
                                color: "#737373",
                                flex: 1,
                            }}
                        >
                            Cash / Cheque
                        </span>
                        <span style={{ fontSize: "32px", color: "#737373" }}>▾</span>
                    </div>

                </div>
            </div>
        </section>
    );
}