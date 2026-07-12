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

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ year: string }> }
) {
    try {
        const resolvedParams = await params;
        const targetYear = Number(resolvedParams.year);

        if (isNaN(targetYear)) {
            return NextResponse.json({ error: "Invalid year" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("baithak");
        const collection = db.collection<Report>("reports");

        const existing = await collection.findOne({ year: targetYear });

        if (!existing) {
            return NextResponse.json(
                { error: "Report not found" },
                { status: 404 }
            );
        }

        // Attempt to remove the physical file, but don't let a missing/locked
        // file block the metadata cleanup below.
        const filePath = path.join(
            process.cwd(),
            "public",
            "uploads",
            "reports",
            `${targetYear}.pdf`
        );

        try {
            await fs.promises.unlink(filePath);
        } catch (fileError) {
            console.error(`Failed to delete physical file for year ${targetYear}:`, fileError);
        }

        // Permanently purge the metadata record
        await collection.deleteOne({ year: targetYear });

        return NextResponse.json(
            { success: true, message: "Report permanently deleted" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting report:", error);
        return NextResponse.json(
            { error: "Failed to delete report" },
            { status: 500 }
        );
    }
}