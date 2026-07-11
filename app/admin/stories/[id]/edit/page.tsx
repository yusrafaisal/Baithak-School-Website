"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const CATEGORIES = ["Blogs", "Events", "Success Stories", "Baithak in Media", "Videos"];

export default function EditStoryPage() {
    const params = useParams();
    const router = useRouter();

    // Route param arrives as a string (or string[] in rare catch-all cases);
    // cast safely to a number for matching against the numeric `id` field.
    const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
    const storyId = Number(rawId);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [date, setDate] = useState("");
    const [img, setImg] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [href, setHref] = useState("");
    const [isPublished, setIsPublished] = useState(false);
    const [isArchived, setIsArchived] = useState(false);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        if (isNaN(storyId)) {
            setLoadError("Invalid story id.");
            setLoading(false);
            return;
        }

        async function fetchStory() {
            try {
                setLoading(true);
                setLoadError(null);

                const res = await fetch(`/api/admin/stories/${storyId}`);

                if (!res.ok) {
                    throw new Error("Failed to fetch story");
                }

                const data = await res.json();

                setTitle(data.title || "");
                setCategory(data.category || CATEGORIES[0]);
                setDate(data.date || "");
                setImg(data.img || "");
                setExcerpt(data.excerpt || "");
                setHref(data.href || "");
                setIsPublished(Boolean(data.isPublished));
                setIsArchived(Boolean(data.isArchived));
            } catch (err) {
                setLoadError("Unable to load this story. It may not exist.");
            } finally {
                setLoading(false);
            }
        }

        fetchStory();
    }, [storyId]);

    function validate() {
        const nextErrors: Record<string, string> = {};

        if (!title.trim()) nextErrors.title = "Title is required.";
        if (!category.trim()) nextErrors.category = "Category is required.";
        if (!date.trim()) nextErrors.date = "Date is required.";
        if (!excerpt.trim()) nextErrors.excerpt = "Excerpt is required.";

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitError(null);

        if (!validate()) return;

        setSubmitting(true);

        try {
            const res = await fetch(`/api/admin/stories/${storyId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title.trim(),
                    category,
                    date,
                    img: img.trim(),
                    excerpt: excerpt.trim(),
                    href: href.trim(),
                    isPublished,
                    isArchived,
                }),
            });

            if (res.ok) {
                router.push("/admin/stories");
                return;
            }

            const data = await res.json().catch(() => ({}));
            setSubmitError(data.error || "Failed to update story. Please try again.");
        } catch (err) {
            setSubmitError("Failed to update story. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    if (loading) {
        return (
            <div style={{ fontFamily: "Poppins, sans-serif", color: "#737373" }}>
                Loading story...
            </div>
        );
    }

    if (loadError) {
        return (
            <div style={{ fontFamily: "Poppins, sans-serif", color: "#D0342C" }}>
                {loadError}
            </div>
        );
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
                Edit Story
            </h1>

            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    maxWidth: "720px",
                    padding: "32px",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <FormField label="Title" error={errors.title}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Story title"
                            style={inputStyle}
                        />
                    </FormField>

                    <FormField label="Category" error={errors.category}>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={inputStyle}
                        >
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </FormField>

                    <FormField label="Date" error={errors.date}>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={inputStyle}
                        />
                    </FormField>

                    <FormField label="Image Path" error={errors.img}>
                        <input
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            placeholder="/images/example.jpg"
                            style={inputStyle}
                        />
                    </FormField>

                    <FormField label="External Link (optional)" error={errors.href}>
                        <input
                            type="text"
                            value={href}
                            onChange={(e) => setHref(e.target.value)}
                            placeholder="https://..."
                            style={inputStyle}
                        />
                    </FormField>

                    <FormField label="Excerpt" error={errors.excerpt}>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Short summary of the story..."
                            rows={4}
                            style={{ ...inputStyle, height: "auto", padding: "10px 12px", resize: "vertical" }}
                        />
                    </FormField>

                    {/* Publish toggle */}
                    <ToggleRow
                        label="Publish Immediately?"
                        checked={isPublished}
                        onChange={() => setIsPublished((prev) => !prev)}
                        activeColor="#2AA76F"
                    />

                    {/* Archive toggle */}
                    <ToggleRow
                        label="Archive item? (soft delete — hides from public site)"
                        checked={isArchived}
                        onChange={() => setIsArchived((prev) => !prev)}
                        activeColor="#D0342C"
                    />

                    {submitError && (
                        <p
                            style={{
                                color: "#D0342C",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "13px",
                                margin: "0 0 16px",
                            }}
                        >
                            {submitError}
                        </p>
                    )}

                    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
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
                            {submitting ? "Saving..." : "Save Changes"}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.push("/admin/stories")}
                            style={{
                                height: "42px",
                                padding: "0 24px",
                                backgroundColor: "#ffffff",
                                border: "1px solid #D1D5DB",
                                borderRadius: "6px",
                                color: "#333333",
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function FormField({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div style={{ marginBottom: "18px" }}>
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
                {label}
            </label>
            {children}
            {error && (
                <p
                    style={{
                        color: "#D0342C",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "12px",
                        margin: "4px 0 0",
                    }}
                >
                    {error}
                </p>
            )}
        </div>
    );
}

function ToggleRow({
    label,
    checked,
    onChange,
    activeColor,
}: {
    label: string;
    checked: boolean;
    onChange: () => void;
    activeColor: string;
}) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "20px 0" }}>
            <span
                onClick={onChange}
                style={{
                    position: "relative",
                    display: "inline-block",
                    width: "40px",
                    height: "22px",
                    borderRadius: "999px",
                    backgroundColor: checked ? activeColor : "#D1D5DB",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        top: "2px",
                        left: checked ? "20px" : "2px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        transition: "left 0.15s",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                />
            </span>
            <label
                onClick={onChange}
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    color: "#333333",
                    cursor: "pointer",
                }}
            >
                {label}
            </label>
        </div>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "42px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    padding: "0 12px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    color: "#111111",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: "#ffffff",
};