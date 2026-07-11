import type { ContentBlock } from "@/components/admin/ContentBlocksEditor";

/**
 * Turns whatever is stored in a story's `content` field into an array of
 * blocks to render. Handles three cases:
 *   1. New stories: a JSON string of ContentBlock[] (from the block editor).
 *   2. Old stories: a raw HTML string typed before the block editor existed.
 *   3. Empty/missing content.
 */
function parseBlocks(raw: unknown): ContentBlock[] | null {
    if (typeof raw !== "string" || !raw.trim()) return null;

    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed as ContentBlock[];
    } catch {
        // Not JSON — this is legacy raw HTML content. Signal the caller to
        // fall back to rendering it as HTML directly.
        return null;
    }

    return null;
}

interface StoryContentProps {
    content?: string;
    excerpt?: string;
}

export default function StoryContent({ content, excerpt }: StoryContentProps) {
    const blocks = parseBlocks(content);

    // New-style block content.
    if (blocks && blocks.length > 0) {
        return (
            <>
                {blocks.map((block) => {
                    if (block.type === "text") {
                        if (!block.text || !block.text.trim()) return null;
                        return <p key={block.id}>{block.text}</p>;
                    }

                    if (block.type === "image") {
                        if (!block.url) return null;
                        return (
                            <figure key={block.id} style={{ margin: "24px 0" }}>
                                <img src={block.url} alt={block.caption || ""} />
                                {block.caption && (
                                    <figcaption
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "13px",
                                            color: "#737373",
                                            marginTop: "8px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    return null;
                })}
            </>
        );
    }

    // Legacy raw-HTML content saved before the block editor existed.
    if (typeof content === "string" && content.trim()) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // Nothing written yet — fall back to the excerpt so the page isn't empty.
    return <p>{excerpt}</p>;
}
