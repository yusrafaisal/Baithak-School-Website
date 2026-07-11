import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only guard /admin routes, and explicitly exclude the login page
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
        const sessionCookie = request.cookies.get("admin_session")?.value;

        // Literal string comparison, Edge-runtime safe (no crypto/node APIs)
        if (!sessionCookie || sessionCookie !== process.env.ADMIN_SESSION_SECRET) {
            const loginUrl = new URL("/admin/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};