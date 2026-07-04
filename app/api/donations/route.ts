// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// import { NextRequest, NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// interface Donation {
//     id: number;
//     donorName: string;
//     amount: number;
//     currency: string;
//     type: string;
//     date: string;
//     message: string;
//     isAnonymous: boolean;
//     school: string;
// }

// export async function GET(request: NextRequest) {
//     try {
//         const client = await clientPromise;
//         const db = client.db("baithak");
//         const collection = db.collection<Donation>("donations");

//         const searchParams = request.nextUrl.searchParams;
//         const type = searchParams.get("type");
//         const school = searchParams.get("school");
//         const limitParam = searchParams.get("limit");

//         const query: Record<string, unknown> = {};

//         if (type) {
//             // Case-insensitive exact match on type
//             query.type = { $regex: `^${type}$`, $options: "i" };
//         }

//         if (school) {
//             // Case-insensitive partial match on school (so "Karachi" matches "Karachi Campus")
//             query.school = { $regex: school, $options: "i" };
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

//         const donations = await cursor.toArray();

//         // Enforce donorName: "Anonymous" for anonymous donations, regardless of stored value
//         const sanitizedDonations = donations.map((donation) => ({
//             ...donation,
//             donorName: donation.isAnonymous ? "Anonymous" : donation.donorName,
//         }));

//         return NextResponse.json(sanitizedDonations);
//     } catch (error) {
//         console.error("Error fetching donations:", error);
//         return NextResponse.json(
//             { error: "Failed to fetch donations" },
//             { status: 500 }
//         );
//     }
// }

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            donorName,
            anonymousName,
            organizationName,
            designation,
            mobileNumber,
            email,
            mailingAddress,
            contributionType,
        } = body;

        // 1. Server-side validation for mandatory field
        if (!donorName || !donorName.trim()) {
            return NextResponse.json(
                { error: "Donor Name is a mandatory field." },
                { status: 400 }
            );
        }

        // 2. Connect to MongoDB Atlas
        const client = await clientPromise;
        const db = client.db("baithak");

        // 3. Document payload construction matching your schema
        const newDonation = {
            donorName: donorName.trim(),
            anonymousName: anonymousName?.trim() || "",
            organizationName: organizationName?.trim() || "",
            designation: designation?.trim() || "",
            mobileNumber: mobileNumber?.trim() || "",
            email: email?.trim() || "",
            mailingAddress: mailingAddress?.trim() || "",
            contributionType: contributionType || "Donation",
            submittedAt: new Date(), // Automated timestamp execution
        };

        // 4. Save into the collection
        const result = await db.collection("donations").insertOne(newDonation);

        return NextResponse.json(
            {
                message: "Donation record successfully initialized in database.",
                id: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Database entry error:", error);
        return NextResponse.json(
            { error: "Internal Server Error while communicating with database." },
            { status: 500 }
        );
    }
}