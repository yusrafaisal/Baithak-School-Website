"use client";

import { useState, useEffect } from "react";

interface StoryStats {
    totalStories: number;
    publishedStories: number;
    unpublishedStories: number;
    totalReports: number;
}

const initialStats: StoryStats = {
    totalStories: 0,
    publishedStories: 0,
    unpublishedStories: 0,
    totalReports: 0,
};

function StatCard({
    label,
    value,
    accentBorder,
}: {
    label: string;
    value: number;
    accentBorder?: string;
}) {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                ...(accentBorder ? { borderLeft: accentBorder } : {}),
            }}
        >
            <p
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#737373",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                }}
            >
                {label}
            </p>
            <p
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#082E76",
                    margin: 0,
                }}
            >
                {value}
            </p>
        </div>
    );
}

function SectionSubheading({ children }: { children: React.ReactNode }) {
    return (
        <h2
            style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
                color: "#082E76",
                margin: "0 0 16px",
            }}
        >
            {children}
        </h2>
    );
}

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<StoryStats>(initialStats);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchStats() {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch("/api/admin/stories/stats");

                if (!res.ok) {
                    throw new Error("Failed to fetch stats");
                }

                const data = await res.json();
                setStats({
                    totalStories: data.totalStories || 0,
                    publishedStories: data.publishedStories || 0,
                    unpublishedStories: data.unpublishedStories || 0,
                    totalReports: data.totalReports || 0,
                });
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    return (
        <div>
            <h1
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#082E76",
                    marginTop: 0,
                    marginBottom: "24px",
                }}
            >
                Dashboard
            </h1>

            {error ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#D0342C" }}>
                    Unable to load story stats. Please try again later.
                </p>
            ) : (
                <>
                    {/* ── Section 1: News & Stories ── */}
                    <section style={{ marginBottom: "40px" }}>
                        <SectionSubheading>News & Stories</SectionSubheading>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px",
                            }}
                            className="dashboard-stories-grid"
                        >
                            <StatCard label="Total Stories" value={loading ? 0 : stats.totalStories || 0} />
                            <StatCard label="Published" value={loading ? 0 : stats.publishedStories || 0} />
                            <StatCard label="Unpublished" value={loading ? 0 : stats.unpublishedStories || 0} />
                        </div>
                    </section>

                    {/* ── Section 2: Annual Reports ── */}
                    <section>
                        <SectionSubheading>Annual Reports</SectionSubheading>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "20px",
                            }}
                            className="dashboard-reports-grid"
                        >
                            <StatCard
                                label="Annual Reports"
                                value={loading ? 0 : stats.totalReports || 0}
                                accentBorder="4px solid #FFB600"
                            />
                        </div>
                    </section>
                </>
            )}

            <style>{`
        @media (max-width: 900px) {
          .dashboard-stories-grid,
          .dashboard-reports-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .dashboard-stories-grid,
          .dashboard-reports-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}