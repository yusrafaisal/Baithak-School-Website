import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

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

        // The PDF lives on Cloudinary now, so there's no local file to
        // clean up — just remove the metadata record.
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