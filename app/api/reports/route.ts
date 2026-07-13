import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";

interface Report {
    year: number;
    fileName: string;
    pdfUrl: string;
    uploadedAt: string;
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection<Report>("reports");

        const reports = await collection
            .find({}, { projection: { _id: 0 } })
            .sort({ year: -1 })
            .toArray();

        return NextResponse.json(reports, { status: 200 });
    } catch (error) {
        console.error("Error fetching reports:", error);
        return NextResponse.json(
            { error: "Failed to fetch reports" },
            { status: 500 }
        );
    }
}