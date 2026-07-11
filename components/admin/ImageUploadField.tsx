"use client";

import { useRef, useState } from "react";
import { uploadImage } from "@/lib/uploadImage";

interface ImageUploadFieldProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
}

export default function ImageUploadField({ value, onChange, label = "image" }: ImageUploadFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Please choose an image file (JPG, PNG, etc.).");
            return;
        }

        setError(null);
        setUploading(true);

        try {
            const url = await uploadImage(file);
            onChange(url);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
        } finally {
            setUploading(false);
            if (inputRef.current) inputRef.current.value = "";
        }
    }

    return (
        <div>
            {value && (
                <div style={{ marginBottom: "10px", position: "relative", display: "inline-block" }}>
                    <img
                        src={value}
                        alt={label}
                        style={{
                            maxWidth: "220px",
                            maxHeight: "160px",
                            borderRadius: "8px",
                            border: "1px solid #D1D5DB",
                            display: "block",
                            objectFit: "cover",
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        aria-label={`Remove ${label}`}
                        style={{
                            position: "absolute",
                            top: "6px",
                            right: "6px",
                            background: "rgba(0,0,0,0.6)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                            fontSize: "14px",
                            lineHeight: 1,
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            <div>
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    disabled={uploading}
                    style={{
                        height: "40px",
                        padding: "0 16px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #D1D5DB",
                        borderRadius: "6px",
                        color: "#333333",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        cursor: uploading ? "not-allowed" : "pointer",
                        opacity: uploading ? 0.7 : 1,
                    }}
                >
                    {uploading ? "Uploading..." : value ? "Change photo" : "Upload photo from your computer"}
                </button>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    style={{ display: "none" }}
                />
            </div>

            {error && (
                <p style={{ color: "#D0342C", fontFamily: "Poppins, sans-serif", fontSize: "12px", margin: "6px 0 0" }}>
                    {error}
                </p>
            )}
        </div>
    );
}
