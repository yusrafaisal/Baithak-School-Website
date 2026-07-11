"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Story {
    id: number;
    category: string;
    img: string;
    title: string;
    date: string;
    excerpt: string;
    href: string;
    isPublished: boolean;
    isArchived: boolean;
    createdAt: string;
    updatedAt: string;
}

type StatusFilter = "all" | "published" | "unpublished" | "archived";

const STATUS_TABS: { label: string; value: StatusFilter }[] = [
    { label: "All", value: "all" },
    { label: "Published", value: "published" },
    { label: "Unpublished", value: "unpublished" },
    { label: "Archived", value: "archived" },
];

export default function ManageStoriesPage() {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

    // Track in-flight per-card actions so buttons can disable individually
    const [pendingIds, setPendingIds] = useState<Set<number>>(new Set());

    const fetchStories = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams();
            params.set("status", statusFilter);
            if (search.trim()) {
                params.set("search", search.trim());
            }

            const res = await fetch(`/api/admin/stories?${params.toString()}`);

            if (!res.ok) {
                throw new Error("Failed to fetch stories");
            }

            const data = await res.json();
            setStories(data.stories || []);
        } catch (err) {
            setError("Unable to load stories. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [statusFilter, search]);

    // Re-fetch on mount and whenever filters change (debounced for search typing)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchStories();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [fetchStories]);

    function setPending(id: number, isPending: boolean) {
        setPendingIds((prev) => {
            const next = new Set(prev);
            if (isPending) {
                next.add(id);
            } else {
                next.delete(id);
            }
            return next;
        });
    }

    async function handleTogglePublish(story: Story) {
        const previousStories = stories;

        // Optimistic update
        setStories((prev) =>
            prev.map((s) =>
                s.id === story.id ? { ...s, isPublished: !s.isPublished } : s
            )
        );
        setPending(story.id, true);

        try {
            const res = await fetch(`/api/admin/stories/${story.id}/publish`, {
                method: "PATCH",
            });

            if (!res.ok) {
                throw new Error("Failed to toggle publish status");
            }

            const updated = await res.json();

            // Sync with actual server response
            setStories((prev) =>
                prev.map((s) => (s.id === story.id ? { ...s, ...updated } : s))
            );
        } catch (err) {
            // Roll back on failure
            setStories(previousStories);
            alert("Failed to update publish status. Please try again.");
        } finally {
            setPending(story.id, false);
        }
    }

    async function handleDelete(story: Story) {
        const confirmed = confirm(
            `Archive "${story.title}"? This will hide it from the public site.`
        );
        if (!confirmed) return;

        const previousStories = stories;

        // Optimistic removal from the visible list (soft delete = archived)
        setStories((prev) => prev.filter((s) => s.id !== story.id));
        setPending(story.id, true);

        try {
            const res = await fetch(`/api/admin/stories/${story.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to archive story");
            }
        } catch (err) {
            // Roll back on failure
            setStories(previousStories);
            alert("Failed to archive story. Please try again.");
        } finally {
            setPending(story.id, false);
        }
    }

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
                Manage Stories
            </h1>

            {/* ── Top Action Row ── */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "24px",
                }}
            >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", flex: 1 }}>
                    <input
                        type="text"
                        placeholder="Search by title or excerpt..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            height: "40px",
                            minWidth: "240px",
                            flex: "1 1 240px",
                            border: "1px solid #D1D5DB",
                            borderRadius: "6px",
                            padding: "0 14px",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />

                    <div style={{ display: "flex", gap: "8px" }}>
                        {STATUS_TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setStatusFilter(tab.value)}
                                style={{
                                    height: "40px",
                                    padding: "0 16px",
                                    borderRadius: "6px",
                                    border: "1px solid #D1D5DB",
                                    backgroundColor:
                                        statusFilter === tab.value ? "#082E76" : "#ffffff",
                                    color: statusFilter === tab.value ? "#ffffff" : "#333333",
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <Link
                    href="/admin/stories/new"
                    style={{
                        height: "40px",
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0 18px",
                        borderRadius: "6px",
                        backgroundColor: "#FFB600",
                        color: "#082E76",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                    }}
                >
                    + Add New Story
                </Link>
            </div>

            {/* ── Grid ── */}
            {loading ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                            }}
                        >
                            <div style={{ height: "140px", backgroundColor: "#E5E7EB" }} />
                            <div style={{ padding: "16px" }}>
                                <div
                                    style={{
                                        height: "16px",
                                        width: "80%",
                                        backgroundColor: "#E5E7EB",
                                        borderRadius: "4px",
                                        marginBottom: "10px",
                                    }}
                                />
                                <div
                                    style={{
                                        height: "12px",
                                        width: "50%",
                                        backgroundColor: "#E5E7EB",
                                        borderRadius: "4px",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#D0342C" }}>
                    {error}
                </p>
            ) : stories.length === 0 ? (
                <p style={{ fontFamily: "Poppins, sans-serif", color: "#737373" }}>
                    No stories found for the current filters.
                </p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {stories.map((story) => {
                        const isPending = pendingIds.has(story.id);

                        return (
                            <div
                                key={story.id}
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                                    display: "flex",
                                    flexDirection: "column",
                                    opacity: isPending ? 0.6 : 1,
                                    transition: "opacity 0.15s",
                                }}
                            >
                                <div
                                    style={{
                                        height: "140px",
                                        backgroundColor: "#E8EEF8",
                                        overflow: "hidden",
                                    }}
                                >
                                    {story.img ? (
                                        <img
                                            src={story.img}
                                            alt={story.title}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                    ) : null}
                                </div>

                                <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
                                    <span
                                        style={{
                                            alignSelf: "flex-start",
                                            backgroundColor: "#EEF2FF",
                                            color: "#17469E",
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "11px",
                                            fontWeight: 600,
                                            padding: "4px 10px",
                                            borderRadius: "999px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {story.category}
                                    </span>

                                    <h3
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "15px",
                                            fontWeight: 600,
                                            color: "#111111",
                                            margin: "0 0 8px",
                                            lineHeight: "20px",
                                        }}
                                    >
                                        {story.title}
                                    </h3>

                                    <p
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "12px",
                                            color: "#737373",
                                            margin: "0 0 16px",
                                        }}
                                    >
                                        Created:{" "}
                                        {new Date(story.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                        {story.isArchived && (
                                            <span style={{ color: "#D0342C", marginLeft: "8px" }}>
                                                (Archived)
                                            </span>
                                        )}
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginTop: "auto",
                                            paddingTop: "12px",
                                            borderTop: "1px solid #F0F0F0",
                                        }}
                                    >
                                        {/* Publish toggle switch */}
                                        <label
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                cursor: story.isArchived ? "not-allowed" : "pointer",
                                            }}
                                        >
                                            <span
                                                onClick={() => {
                                                    if (!isPending && !story.isArchived) {
                                                        handleTogglePublish(story);
                                                    }
                                                }}
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    width: "36px",
                                                    height: "20px",
                                                    borderRadius: "999px",
                                                    backgroundColor: story.isPublished ? "#2AA76F" : "#D1D5DB",
                                                    transition: "background-color 0.15s",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        top: "2px",
                                                        left: story.isPublished ? "18px" : "2px",
                                                        width: "16px",
                                                        height: "16px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "#ffffff",
                                                        transition: "left 0.15s",
                                                        boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                                                    }}
                                                />
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily: "Poppins, sans-serif",
                                                    fontSize: "12px",
                                                    color: story.isPublished ? "#2AA76F" : "#737373",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {story.isPublished ? "Published" : "Unpublished"}
                                            </span>
                                        </label>

                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <Link
                                                href={`/admin/stories/${story.id}/edit`}
                                                style={{
                                                    fontFamily: "Poppins, sans-serif",
                                                    fontSize: "13px",
                                                    color: "#17469E",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                ✏️ Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(story)}
                                                disabled={isPending || story.isArchived}
                                                style={{
                                                    background: "none",
                                                    border: "none",
                                                    fontFamily: "Poppins, sans-serif",
                                                    fontSize: "13px",
                                                    color: "#D0342C",
                                                    cursor:
                                                        isPending || story.isArchived ? "not-allowed" : "pointer",
                                                    padding: 0,
                                                }}
                                            >
                                                🗑️ Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}