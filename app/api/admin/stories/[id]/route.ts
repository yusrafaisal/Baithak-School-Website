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

        const story = await collection.findOne(
            { id: numericId },
            { projection: { _id: 0 } }
        );

        if (!story) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        return NextResponse.json(story);
    } catch (error) {
        console.error("Error fetching story:", error);
        return NextResponse.json(
            { error: "Failed to fetch story" },
            { status: 500 }
        );
    }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return NextResponse.json({ error: "Invalid story id" }, { status: 400 });
        }

        const body = await request.json();

        // Never allow the client to overwrite id, _id, or createdAt via PATCH
        const { id: bodyId, _id, createdAt, ...updateFields } = body;

        if (Object.keys(updateFields).length === 0) {
            return NextResponse.json(
                { error: "No valid fields provided to update" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        const result = await collection.findOneAndUpdate(
            { id: numericId },
            {
                $set: {
                    ...updateFields,
                    updatedAt: new Date().toISOString(),
                },
            },
            { returnDocument: "after", projection: { _id: 0 } }
        );

        if (!result) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error updating story:", error);
        return NextResponse.json(
            { error: "Failed to update story" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return NextResponse.json({ error: "Invalid story id" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        // Soft delete only — never actually removes the document
        const result = await collection.findOneAndUpdate(
            { id: numericId },
            {
                $set: {
                    isArchived: true,
                    updatedAt: new Date().toISOString(),
                },
            },
            { returnDocument: "after", projection: { _id: 0 } }
        );

        if (!result) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, story: result });
    } catch (error) {
        console.error("Error archiving story:", error);
        return NextResponse.json(
            { error: "Failed to archive story" },
            { status: 500 }
        );
    }
}