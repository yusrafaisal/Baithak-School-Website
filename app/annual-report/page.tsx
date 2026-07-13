"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Report {
    year: number;
    fileName: string;
    pdfUrl: string;
    uploadedAt: string;
}

export default function AnnualReportPage() {
    const [report, setReport] = useState<Report | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadReport() {
            try {
                const currentYear = new Date().getFullYear();
                const res = await fetch("/api/reports");
                if (!res.ok) throw new Error("Failed to load report");

                const reports: Report[] = await res.json();
                const match = reports.find((r) => r.year === currentYear) || null;
                setReport(match);
            } catch (err) {
                setReport(null);
            } finally {
                setLoading(false);
            }
        }

        loadReport();
    }, []);

    return (
        <main>
            <Navbar />

            <section className="ar">
                <h1 className="ar__title">
                    {report ? "BSN Annual Report " + report.year : "BSN Annual Report"}
                </h1>
                <p className="ar__sub">
                    Discover how, together with our global partners, we are reshaping what is
                    possible for children in Pakistan.
                </p>

                {loading ? (
                    <p className="ar__status">Loading report...</p>
                ) : !report ? (
                    <p className="ar__status">
                        This year&apos;s annual report has not been uploaded yet. Please check back soon.
                    </p>
                ) : (
                    <>
                        <div className="ar__viewer">
                            <iframe
                                src={report.pdfUrl + "#view=FitH"}
                                title={"BSN Annual Report " + report.year}
                                className="ar__iframe"
                                allow="fullscreen"
                            />
                        </div>

                        <a
                            href={report.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ar__download"
                        >
                            Download PDF
                        </a>
                    </>
                )}
            </section>

            <Footer />

            <style>{`
                .ar {
                    background: #ffffff;
                    padding: 60px 24px 80px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .ar__title {
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    font-size: 40px;
                    color: #17469E;
                    text-align: center;
                    margin: 0 0 12px;
                }
                .ar__sub {
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 1.7;
                    color: #444;
                    text-align: center;
                    margin: 0 0 40px;
                }
                .ar__status {
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    color: #737373;
                    padding: 60px 0;
                }
                .ar__viewer {
                    width: 100%;
                    height: 85vh;
                    max-height: 1000px;
                    min-height: 500px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 32px rgba(0,0,0,0.15);
                }
                .ar__iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                    display: block;
                }
                .ar__download {
                    display: block;
                    text-align: center;
                    margin: 28px auto 0;
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 15px;
                    color: #17469E;
                    text-decoration: underline;
                    width: fit-content;
                }
                .ar__download:hover { color: #0F295A; }
                @media (max-width: 600px) {
                    .ar__title { font-size: 26px; }
                    .ar { padding: 40px 16px 60px; }
                }
            `}</style>
        </main>
    );
}
