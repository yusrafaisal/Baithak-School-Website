"use client";

import { uploadReport } from "@/lib/uploadReport";
import { useState, useEffect, useCallback } from "react";

interface Report {
    year: number;
    fileName: string;
    pdfUrl: string;
    uploadedAt: string;
}

const YEAR_OPTIONS = Array.from({ length: 2035 - 2020 + 1 }, (_, i) => 2020 + i);

export default function ManageReportsPage() {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [selectedYear, setSelectedYear] = useState<number>(YEAR_OPTIONS[YEAR_OPTIONS.length - 1]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const [pendingDeleteYears, setPendingDeleteYears] = useState<Set<number>>(new Set());

    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    useEffect(() => {
        if (!toast) return;
        const timeoutId = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(timeoutId);
    }, [toast]);

    const fetchReports = useCallback(async () => {
        try {
            setLoading(true);
            setLoadError(null);

            const res = await fetch("/api/admin/reports");

            if (!res.ok) {
                throw new Error("Failed to fetch reports");
            }

            const data = await res.json();
            setReports(data);
        } catch (err) {
            setLoadError("Unable to load reports. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReports();
    }, [fetchReports]);

    function resetForm() {
        setSelectedFile(null);
        const fileInput = document.getElementById("report-file-input") as HTMLInputElement | null;
        if (fileInput) fileInput.value = "";
    }

async function submitUpload(pdfUrl: string, fileName: string, overwrite: boolean) {
    const res = await fetch("/api/admin/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            year: selectedYear,
            fileName,
            pdfUrl,
            overwrite,
        }),
    });

    return res;
}

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (!selectedFile) {
        setFormError("Please select a PDF file to upload.");
        return;
    }

    if (selectedFile.type !== "application/pdf") {
        setFormError("Only PDF files are allowed.");
        return;
    }

    setSubmitting(true);

    try {
        // Upload to Cloudinary once, then save the URL (retrying the save
        // with overwrite=true doesn't need a second upload).
        const pdfUrl = await uploadReport(selectedFile);
        const fileName = selectedFile.name;

        let res = await submitUpload(pdfUrl, fileName, false);

        if (res && res.status === 409) {
            const confirmed = confirm(
                "A report for this year already exists. Do you want to replace it?"
            );

            if (!confirmed) {
                setSubmitting(false);
                return;
            }

            res = await submitUpload(pdfUrl, fileName, true);
        }

        if (!res || !res.ok) {
            const data = await res?.json().catch(() => ({}));
            throw new Error(data?.error || "Failed to upload report");
        }

        resetForm();
        await fetchReports();
        setToast({ message: "Report saved successfully.", type: "success" });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to upload report.";
        setFormError(message);
        setToast({ message, type: "error" });
    } finally {
        setSubmitting(false);
    }
}

    async function handleDelete(report: Report) {
        const confirmed = confirm(
            `Are you sure you want to permanently delete the report for ${report.year}?`
        );
        if (!confirmed) return;

        setPendingDeleteYears((prev) => {
            const next = new Set(prev);
            next.add(report.year);
            return next;
        });

        try {
            const res = await fetch(`/api/admin/reports/${report.year}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete report");
            }

            setReports((prev) => prev.filter((r) => r.year !== report.year));
            setToast({ message: `Report for ${report.year} deleted.`, type: "success" });
        } catch (err) {
            setToast({ message: "Failed to delete report. Please try again.", type: "error" });
        } finally {
            setPendingDeleteYears((prev) => {
                const next = new Set(prev);
                next.delete(report.year);
                return next;
            });
        }
    }

    return (
        <div style={{ padding: "20px" }}>
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
                Manage Annual Reports
            </h1>

            {/* ── Upload Form ── */}
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    padding: "24px",
                    marginBottom: "32px",
                }}
            >
                <h2
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#111111",
                        margin: "0 0 16px",
                    }}
                >
                    Upload New Report
                </h2>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-end",
                        gap: "16px",
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: "block",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#333333",
                                marginBottom: "6px",
                            }}
                        >
                            Year
                        </label>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            style={{
                                height: "42px",
                                minWidth: "140px",
                                border: "1px solid #D1D5DB",
                                borderRadius: "6px",
                                padding: "0 12px",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "14px",
                                boxSizing: "border-box",
                            }}
                        >
                            {YEAR_OPTIONS.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            style={{
                                display: "block",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#333333",
                                marginBottom: "6px",
                            }}
                        >
                            PDF File
                        </label>
                        <input
                            id="report-file-input"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                            style={{
                                height: "42px",
                                border: "1px solid #D1D5DB",
                                borderRadius: "6px",
                                padding: "8px 12px",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "13px",
                                boxSizing: "border-box",
                                backgroundColor: "#ffffff",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        style={{
                            height: "42px",
                            padding: "0 24px",
                            backgroundColor: "#FFB600",
                            border: "none",
                            borderRadius: "6px",
                            color: "#082E76",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                            cursor: submitting ? "not-allowed" : "pointer",
                            opacity: submitting ? 0.7 : 1,
                        }}
                    >
                        {submitting ? "Uploading..." : "Upload Report"}
                    </button>
                </form>

                {formError && (
                    <p
                        style={{
                            color: "#D0342C",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "13px",
                            margin: "12px 0 0",
                        }}
                    >
                        {formError}
                    </p>
                )}
            </div>

            {/* ── Reports Table Grid ── */}
            {loading ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#737373" }}>
                    Loading reports...
                </p>
            ) : loadError ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#D0342C" }}>
                    {loadError}
                </p>
            ) : reports.length === 0 ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#737373" }}>
                    No reports uploaded yet.
                </p>
            ) : (
                <div
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        overflow: "hidden",
                    }}
                >
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#F4F6FA" }}>
                                <th style={thStyle}>Year</th>
                                <th style={thStyle}>File Name</th>
                                <th style={thStyle}>Upload Date</th>
                                <th style={{ ...thStyle, textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => {
                                const isDeleting = pendingDeleteYears.has(report.year);

                                return (
                                    <tr
                                        key={report.year}
                                        style={{
                                            borderTop: "1px solid #F0F0F0",
                                            opacity: isDeleting ? 0.5 : 1,
                                            transition: "opacity 0.15s",
                                        }}
                                    >
                                        <td style={tdStyle}>{report.year}</td>
                                        <td style={tdStyle}>{report.fileName}</td>
                                        <td style={tdStyle}>
                                            {new Date(report.uploadedAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </td>
                                        <td style={{ ...tdStyle, textAlign: "right" }}>
                                            <div style={{ display: "flex", gap: "14px", justifyContent: "flex-end" }}>
                                                <a
                                                    href={report.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        fontFamily: "Poppins, sans-serif",
                                                        fontSize: "13px",
                                                        color: "#17469E",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    👁️ View PDF
                                                </a>
                                                <button
                                                    onClick={() => handleDelete(report)}
                                                    disabled={isDeleting}
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        fontFamily: "Poppins, sans-serif",
                                                        fontSize: "13px",
                                                        color: "#D0342C",
                                                        cursor: isDeleting ? "not-allowed" : "pointer",
                                                        padding: 0,
                                                    }}
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── Toast Feedback Notification ── */}
            {toast && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "24px",
                        right: "24px",
                        backgroundColor: toast.type === "success" ? "#082E76" : "#D0342C",
                        color: "#ffffff",
                        padding: "14px 20px",
                        borderRadius: "8px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                    }}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
}

const thStyle: React.CSSProperties = {
    textAlign: "left",
    padding: "12px 16px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    color: "#737373",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
};

const tdStyle: React.CSSProperties = {
    padding: "14px 16px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    color: "#111111",
};