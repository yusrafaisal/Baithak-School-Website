"use client";

import { useState, useEffect } from "react";

interface StoryStats {
    total: number;
    published: number;
    unpublished: number;
    archived: number;
}

function StatCard({ label, value }: { label: string; value: number | null }) {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
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
                {value === null ? "—" : value}
            </p>
        </div>
    );
}

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<StoryStats | null>(null);
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
                setStats(data);
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
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px",
                    }}
                >
                    <StatCard label="Total Stories" value={loading ? null : stats?.total ?? 0} />
                    <StatCard label="Published" value={loading ? null : stats?.published ?? 0} />
                    <StatCard label="Unpublished" value={loading ? null : stats?.unpublished ?? 0} />
                    <StatCard label="Archived" value={loading ? null : stats?.archived ?? 0} />
                </div>
            )}

            <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}