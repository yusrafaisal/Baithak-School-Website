import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

// import { NextRequest, NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export async function GET(request: NextRequest) {
//     try {
//         const client = await clientPromise;
//         const db = client.db("baithak");
//         const collection = db.collection("news_stories");

//         const searchParams = request.nextUrl.searchParams;
//         const category = searchParams.get("category");
//         const limitParam = searchParams.get("limit");

//         const query: Record<string, unknown> = {};

//         if (category) {
//             // Case-insensitive exact match on category
//             query.category = { $regex: `^${category}$`, $options: "i" };
//         }

//         let cursor = collection
//             .find(query, { projection: { _id: 0 } })
//             .sort({ date: -1 });

//         if (limitParam) {
//             const limit = parseInt(limitParam, 10);
//             if (!isNaN(limit) && limit > 0) {
//                 cursor = cursor.limit(limit);
//             }
//         }

//         const newsStories = await cursor.toArray();

//         return NextResponse.json(newsStories);
//     } catch (error) {
//         console.error("Error fetching news stories:", error);
//         return NextResponse.json(
//             { error: "Failed to fetch news" },
//             { status: 500 }
//         );
//     }
// }

import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection("news_stories");

        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get("category");
        const limitParam = searchParams.get("limit");

        // Public-facing route only ever returns published, non-archived stories
        const query: Record<string, unknown> = {
            isPublished: true,
            isArchived: false,
        };

        if (category) {
            // Case-insensitive exact match on category
            query.category = { $regex: `^${category}$`, $options: "i" };
        }

        let cursor = collection
            .find(query, { projection: { _id: 0 } })
            .sort({ date: -1 });

        if (limitParam) {
            const limit = parseInt(limitParam, 10);
            if (!isNaN(limit) && limit > 0) {
                cursor = cursor.limit(limit);
            }
        }

        const newsStories = await cursor.toArray();

        return NextResponse.json(newsStories);
    } catch (error) {
        console.error("Error fetching news stories:", error);
        return NextResponse.json(
            { error: "Failed to fetch news" },
            { status: 500 }
        );
    }
}