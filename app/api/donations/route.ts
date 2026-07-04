import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface Donation {
    id: number;
    donorName: string;
    amount: number;
    currency: string;
    type: string;
    date: string;
    message: string;
    isAnonymous: boolean;
    school: string;
}

export async function GET(request: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection<Donation>("donations");

        const searchParams = request.nextUrl.searchParams;
        const type = searchParams.get("type");
        const school = searchParams.get("school");
        const limitParam = searchParams.get("limit");

        const query: Record<string, unknown> = {};

        if (type) {
            // Case-insensitive exact match on type
            query.type = { $regex: `^${type}$`, $options: "i" };
        }

        if (school) {
            // Case-insensitive partial match on school (so "Karachi" matches "Karachi Campus")
            query.school = { $regex: school, $options: "i" };
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

        const donations = await cursor.toArray();

        // Enforce donorName: "Anonymous" for anonymous donations, regardless of stored value
        const sanitizedDonations = donations.map((donation) => ({
            ...donation,
            donorName: donation.isAnonymous ? "Anonymous" : donation.donorName,
        }));

        return NextResponse.json(sanitizedDonations);
    } catch (error) {
        console.error("Error fetching donations:", error);
        return NextResponse.json(
            { error: "Failed to fetch donations" },
            { status: 500 }
        );
    }
}