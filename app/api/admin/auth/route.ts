import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        if (!password || password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: "Incorrect password" },
                { status: 401 }
            );
        }

        const response = NextResponse.json({ success: true });

        response.cookies.set("admin_session", process.env.ADMIN_SESSION_SECRET as string, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 8 * 60 * 60, // 8 hours, in seconds
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Error in admin auth:", error);
        return NextResponse.json(
            { error: "Authentication failed" },
            { status: 500 }
        );
    }
}