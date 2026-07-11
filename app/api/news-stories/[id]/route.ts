import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return NextResponse.json({ error: "Invalid story id" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        // Public route: only ever return published, non-archived stories,
        // same rule as the list endpoint.
        const story = await collection.findOne(
            { id: numericId, isPublished: true, isArchived: false },
            { projection: { _id: 0 } }
        );

        if (!story) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        return NextResponse.json(story);
    } catch (error) {
        console.error("Error fetching news story:", error);
        return NextResponse.json(
            { error: "Failed to fetch story" },
            { status: 500 }
        );
    }
}
