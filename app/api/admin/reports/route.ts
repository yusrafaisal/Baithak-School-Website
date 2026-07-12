import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import fs from "fs";
import path from "path";

// File system access requires the Node.js runtime, not Edge
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
        const formData = await request.formData();

        const yearRaw = formData.get("year");
        const file = formData.get("file");
        const overwriteRaw = formData.get("overwrite");

        // Validate year
        const year = Number(yearRaw);
        if (!yearRaw || isNaN(year)) {
            return NextResponse.json(
                { error: "A valid numeric year is required" },
                { status: 400 }
            );
        }

        // Validate file
        if (!file || !(file instanceof File)) {
            return NextResponse.json(
                { error: "A file is required" },
                { status: 400 }
            );
        }

        if (file.type !== "application/pdf") {
            return NextResponse.json(
                { error: "File must be a PDF" },
                { status: 400 }
            );
        }

        // Normalize the overwrite flag (arrives as a string from FormData)
        const overwrite = overwriteRaw === "true" || overwriteRaw === "1";

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

        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Ensure the upload directory exists
        const uploadDir = path.join(process.cwd(), "public", "uploads", "reports");
        fs.mkdirSync(uploadDir, { recursive: true });

        // Write the file to disk
        const filePath = path.join(uploadDir, `${year}.pdf`);
        fs.writeFileSync(filePath, buffer);

        // Upsert metadata into MongoDB
        await collection.updateOne(
            { year },
            {
                $set: {
                    year,
                    fileName: file.name,
                    pdfUrl: `/uploads/reports/${year}.pdf`,
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