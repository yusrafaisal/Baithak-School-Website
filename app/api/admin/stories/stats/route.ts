import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        const [total, published, unpublished] = await Promise.all([
            collection.countDocuments({}),
            collection.countDocuments({ isPublished: true }),
            collection.countDocuments({ isPublished: false }),
        ]);

        return NextResponse.json({ total, published, unpublished });
    } catch (error) {
        console.error("Error fetching story stats:", error);
        return NextResponse.json(
            { error: "Failed to fetch stats" },
            { status: 500 }
        );
    }
}