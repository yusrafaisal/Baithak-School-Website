"use client";

import ImageUploadField from "./ImageUploadField";

export interface ContentBlock {
    id: string;
    type: "text" | "image";
    text?: string;
    url?: string;
    caption?: string;
}

interface ContentBlocksEditorProps {
    blocks: ContentBlock[];
    onChange: (blocks: ContentBlock[]) => void;
}

function newId() {
    return Math.random().toString(36).slice(2, 10);
}

export default function ContentBlocksEditor({ blocks, onChange }: ContentBlocksEditorProps) {
    function updateBlock(id: string, patch: Partial<ContentBlock>) {
        onChange(blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)));
    }

    function removeBlock(id: string) {
        onChange(blocks.filter((b) => b.id !== id));
    }

    function moveBlock(id: string, direction: -1 | 1) {
        const index = blocks.findIndex((b) => b.id === id);
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= blocks.length) return;
        const next = [...blocks];
        [next[index], next[newIndex]] = [next[newIndex], next[index]];
        onChange(next);
    }

    function addBlock(type: "text" | "image") {
        onChange([...blocks, { id: newId(), type, text: "", url: "", caption: "" }]);
    }

    return (
        <div>
            {blocks.length === 0 && (
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", color: "#888888", margin: "0 0 12px" }}>
                    No content yet. Use the buttons below to add paragraphs and photos, in whatever order you like.
                </p>
            )}

            {blocks.map((block, i) => (
                <div
                    key={block.id}
                    style={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "16px",
                        marginBottom: "12px",
                        backgroundColor: "#FAFAFA",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#666666",
                                textTransform: "uppercase",
                                letterSpacing: "0.03em",
                            }}
                        >
                            {block.type === "text" ? "Paragraph" : "Photo"}
                        </span>
                        <div style={{ display: "flex", gap: "6px" }}>
                            <button type="button" onClick={() => moveBlock(block.id, -1)} disabled={i === 0} style={miniBtnStyle}>
                                ↑ Move up
                            </button>
                            <button
                                type="button"
                                onClick={() => moveBlock(block.id, 1)}
                                disabled={i === blocks.length - 1}
                                style={miniBtnStyle}
                            >
                                ↓ Move down
                            </button>
                            <button type="button" onClick={() => removeBlock(block.id)} style={{ ...miniBtnStyle, color: "#D0342C" }}>
                                Remove
                            </button>
                        </div>
                    </div>

                    {block.type === "text" ? (
                        <textarea
                            value={block.text || ""}
                            onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                            placeholder="Write a paragraph of the story here..."
                            rows={4}
                            style={{
                                width: "100%",
                                border: "1px solid #D1D5DB",
                                borderRadius: "6px",
                                padding: "10px 12px",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "14px",
                                resize: "vertical",
                                boxSizing: "border-box",
                            }}
                        />
                    ) : (
                        <div>
                            <ImageUploadField value={block.url || ""} onChange={(url) => updateBlock(block.id, { url })} label="photo" />
                            <input
                                type="text"
                                value={block.caption || ""}
                                onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                                placeholder="Caption for this photo (optional)"
                                style={{
                                    width: "100%",
                                    height: "36px",
                                    border: "1px solid #D1D5DB",
                                    borderRadius: "6px",
                                    padding: "0 10px",
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "13px",
                                    marginTop: "10px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    )}
                </div>
            ))}

            <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" onClick={() => addBlock("text")} style={addBtnStyle}>
                    + Add Paragraph
                </button>
                <button type="button" onClick={() => addBlock("image")} style={addBtnStyle}>
                    + Add Photo
                </button>
            </div>
        </div>
    );
}

const miniBtnStyle: React.CSSProperties = {
    border: "1px solid #D1D5DB",
    background: "#ffffff",
    borderRadius: "4px",
    padding: "3px 8px",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "Poppins, sans-serif",
    color: "#333333",
};

const addBtnStyle: React.CSSProperties = {
    height: "38px",
    padding: "0 16px",
    backgroundColor: "#ffffff",
    border: "1px dashed #9CA3AF",
    borderRadius: "6px",
    color: "#333333",
    fontFamily: "Poppins, sans-serif",
    fontSize: "13px",
    cursor: "pointer",
};
