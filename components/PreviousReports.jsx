"use client";

import { useEffect, useState } from "react";
import { getReportCoverUrl } from "@/lib/reportCover";

/* Cycles through the same 4 Figma border colours for however many reports come back */
const BORDER_COLORS = ["#3773E2", "#E05163", "#2AA76F", "#FFE299"];

function ReportCard({ report, borderColor }) {
    return (
        <div className="rc">
            <a
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rc__img-wrap"
            >
                <img
                    src={getReportCoverUrl(report.pdfUrl)}
                    alt={"BSN Annual Report " + report.year}
                    className="rc__img"
                />
            </a>

            <a
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rc__label"
                style={{ border: "3px solid " + borderColor }}
            >
                <span className="rc__label-text">{"BSN Annual Report " + report.year}</span>
            </a>
        </div>
    );
}

export default function PreviousReports() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadReports() {
            try {
                const res = await fetch("/api/reports");
                if (!res.ok) throw new Error("Failed to load reports");
                const data = await res.json();
                setReports(data.slice(0, 8));
            } catch (err) {
                setReports([]);
            } finally {
                setLoading(false);
            }
        }

        loadReports();
    }, []);

    return (
        <section className="pr">
            <h2 className="pr__heading">Previous Annual Reports</h2>

            {loading ? (
                <p className="pr__status">Loading reports...</p>
            ) : reports.length === 0 ? (
                <p className="pr__status">No reports have been uploaded yet.</p>
            ) : (
                <div className="pr__grid">
                    {reports.map((r, i) => (
                        <ReportCard key={r.year} report={r} borderColor={BORDER_COLORS[i % 4]} />
                    ))}
                </div>
            )}

            <style>{`
                .pr {
                    background: #ffffff;
                    padding: 80px 24px 100px;
                }
                .pr__heading {
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 49px;
                    text-align: center;
                    color: #000000;
                    margin: 0 0 60px;
                }
                .pr__status {
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    color: #737373;
                }
                .pr__grid {
                    max-width: 960px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(4, 195px);
                    justify-content: center;
                    gap: 40px 50px;
                }
                .rc {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    gap: 8px;
                    filter: drop-shadow(0px 4px 21.9px rgba(0,0,0,0.25));
                }
                .rc__img-wrap {
                    display: block;
                    width: 195px;
                    height: 256px;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #e8eef8;
                    flex-shrink: 0;
                }
                .rc__img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .rc__label {
                    width: 195px;
                    height: 37px;
                    background: #ffffff;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    text-decoration: none;
                }
                .rc__label-text {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 1;
                    text-decoration: underline;
                    color: #000000;
                    text-align: center;
                }
                @media (max-width: 900px) {
                    .pr__grid {
                        grid-template-columns: repeat(2, 195px);
                        gap: 32px 40px;
                    }
                    .pr__heading { font-size: 34px; line-height: 1.3; }
                }
                @media (max-width: 520px) {
                    .pr__grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px 20px;
                    }
                    .rc__img-wrap { width: 100%; height: 0; padding-bottom: 131%; }
                    .rc__label { width: 100%; }
                    .pr { padding: 60px 16px 80px; }
                    .pr__heading { font-size: 26px; margin-bottom: 36px; }
                }
            `}</style>
        </section>
    );
}
