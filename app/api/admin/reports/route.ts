import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// Mongo driver needs the Node.js runtime, not Edge
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { year: yearRaw, fileName, pdfUrl, overwrite: overwriteRaw } = body;

        // Validate year
        const year = Number(yearRaw);
        if (!yearRaw || isNaN(year)) {
            return NextResponse.json(
                { error: "A valid numeric year is required" },
                { status: 400 }
            );
        }

        // Validate the Cloudinary URL and file name coming from the client
        if (!fileName || typeof fileName !== "string") {
            return NextResponse.json(
                { error: "A file name is required" },
                { status: 400 }
            );
        }

        if (!pdfUrl || typeof pdfUrl !== "string") {
            return NextResponse.json(
                { error: "A pdfUrl is required" },
                { status: 400 }
            );
        }

        const overwrite = overwriteRaw === true;

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection<Report>("reports");

        // Conflict check
        const existing = await collection.findOne({ year });

        if (existing && !overwrite) {
            return NextResponse.json(
                { conflict: true, message: "A report for this year already exists." },
                { status: 409 }
            );
        }

        // Upsert metadata into MongoDB — the PDF itself already lives on
        // Cloudinary, so there's no local file system write here anymore.
        await collection.updateOne(
            { year },
            {
                $set: {
                    year,
                    fileName,
                    pdfUrl,
                    uploadedAt: new Date().toISOString(),
                },
            },
            { upsert: true }
        );

        return NextResponse.json(
            { success: true, message: "Report saved successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error uploading report:", error);
        return NextResponse.json(
            { error: "Failed to upload report" },
            { status: 500 }
        );
    }
}