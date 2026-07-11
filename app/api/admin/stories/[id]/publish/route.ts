import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function PATCH(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const { id } = await params;
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return NextResponse.json({ error: "Invalid story id" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        const existing = await collection.findOne({ id: numericId });

        if (!existing) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        const result = await collection.findOneAndUpdate(
            { id: numericId },
            {
                $set: {
                    isPublished: !existing.isPublished,
                    updatedAt: new Date().toISOString(),
                },
            },
            {
                returnDocument: "after",
                projection: { _id: 0 },
            }
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error toggling publish status:", error);
        return NextResponse.json(
            { error: "Failed to toggle publish status" },
            { status: 500 }
        );
    }
}