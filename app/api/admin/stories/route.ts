import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        const searchParams = request.nextUrl.searchParams;
        const status = searchParams.get("status"); // published | unpublished | archived | all
        const category = searchParams.get("category");
        const search = searchParams.get("search");

        const query: Record<string, unknown> = {};

        switch (status) {
            case "published":
                query.isPublished = true;
                query.isArchived = false;
                break;
            case "unpublished":
                query.isPublished = false;
                query.isArchived = false;
                break;
            case "archived":
                query.isArchived = true;
                break;
            case "all":
            case null:
                // No status filter applied
                break;
            default:
                return NextResponse.json(
                    { error: "Invalid status. Use published, unpublished, archived, or all." },
                    { status: 400 }
                );
        }

        if (category) {
            query.category = { $regex: `^${category}$`, $options: "i" };
        }

        if (search) {
            // Search across title and excerpt, case-insensitive
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { excerpt: { $regex: search, $options: "i" } },
            ];
        }

        const stories = await collection
            .find(query, { projection: { _id: 0 } })
            .sort({ date: -1 })
            .toArray();

        return NextResponse.json({ stories, total: stories.length });
    } catch (error) {
        console.error("Error fetching admin stories:", error);
        return NextResponse.json(
            { error: "Failed to fetch stories" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { category, img, title, date, excerpt, href, isPublished } = body;

        // Basic validation
        if (!category || typeof category !== "string") {
            return NextResponse.json(
                { error: "Category is required" },
                { status: 400 }
            );
        }
        if (!title || typeof title !== "string") {
            return NextResponse.json(
                { error: "Title is required" },
                { status: 400 }
            );
        }
        if (!date || typeof date !== "string") {
            return NextResponse.json(
                { error: "Date is required" },
                { status: 400 }
            );
        }

        const now = new Date().toISOString();

        const newStory = {
            id: Date.now(),
            category,
            img: typeof img === "string" ? img : "",
            title,
            date,
            excerpt: typeof excerpt === "string" ? excerpt : "",
            href: typeof href === "string" ? href : "",
            isPublished: typeof isPublished === "boolean" ? isPublished : false,
            isArchived: false,
            createdAt: now,
            updatedAt: now,
        };

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        await collection.insertOne(newStory);

        return NextResponse.json(newStory, { status: 201 });
    } catch (error) {
        console.error("Error creating story:", error);
        return NextResponse.json(
            { error: "Failed to create story" },
            { status: 500 }
        );
    }
}